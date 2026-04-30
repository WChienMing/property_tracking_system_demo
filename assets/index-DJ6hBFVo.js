(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},Ds=[],On=()=>{},bf=()=>!1,Go=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Wo=n=>n.startsWith("onUpdate:"),Ct=Object.assign,Pl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},yd=Object.prototype.hasOwnProperty,tt=(n,e)=>yd.call(n,e),Be=Array.isArray,Us=n=>Ur(n)==="[object Map]",Xo=n=>Ur(n)==="[object Set]",ac=n=>Ur(n)==="[object Date]",Ge=n=>typeof n=="function",_t=n=>typeof n=="string",Fn=n=>typeof n=="symbol",it=n=>n!==null&&typeof n=="object",Tf=n=>(it(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),Af=Object.prototype.toString,Ur=n=>Af.call(n),Ed=n=>Ur(n).slice(8,-1),wf=n=>Ur(n)==="[object Object]",Ll=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pr=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},bd=/-\w/g,xn=qo(n=>n.replace(bd,e=>e.slice(1).toUpperCase())),Td=/\B([A-Z])/g,ts=qo(n=>n.replace(Td,"-$1").toLowerCase()),Rf=qo(n=>n.charAt(0).toUpperCase()+n.slice(1)),da=qo(n=>n?`on${Rf(n)}`:""),Un=(n,e)=>!Object.is(n,e),_o=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Cf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Yo=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Ad=n=>{const e=_t(n)?Number(n):NaN;return isNaN(e)?n:e};let lc;const $o=()=>lc||(lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jo(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=_t(i)?Pd(i):jo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(_t(n)||it(n))return n}const wd=/;(?![^(]*\))/g,Rd=/:([^]+)/,Cd=/\/\*[^]*?\*\//g;function Pd(n){const e={};return n.replace(Cd,"").split(wd).forEach(t=>{if(t){const i=t.split(Rd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function un(n){let e="";if(_t(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=un(n[t]);i&&(e+=i+" ")}else if(it(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ld="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dd=Cl(Ld);function Pf(n){return!!n||n===""}function Ud(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ir(n[i],e[i]);return t}function Ir(n,e){if(n===e)return!0;let t=ac(n),i=ac(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Fn(n),i=Fn(e),t||i)return n===e;if(t=Be(n),i=Be(e),t||i)return t&&i?Ud(n,e):!1;if(t=it(n),i=it(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ir(n[o],e[o]))return!1}}return String(n)===String(e)}function Id(n,e){return n.findIndex(t=>Ir(t,e))}const Lf=n=>!!(n&&n.__v_isRef===!0),Ze=n=>_t(n)?n:n==null?"":Be(n)||it(n)&&(n.toString===Af||!Ge(n.toString))?Lf(n)?Ze(n.value):JSON.stringify(n,Df,2):String(n),Df=(n,e)=>Lf(e)?Df(n,e.value):Us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[pa(i,r)+" =>"]=s,t),{})}:Xo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>pa(t))}:Fn(e)?pa(e):it(e)&&!Be(e)&&!wf(e)?String(e):e,pa=(n,e="")=>{var t;return Fn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Nd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=It;try{return It=this,e()}finally{It=t}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){if(this._on>0&&--this._on===0){if(It===this)It=this.prevScope;else{let e=It;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Od(){return It}let ht;const ma=new WeakSet;class Uf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ma.has(this)&&(ma.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cc(this),Of(this);const e=ht,t=Sn;ht=this,Sn=!0;try{return this.fn()}finally{Ff(this),ht=e,Sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Il(e);this.deps=this.depsTail=void 0,cc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ma.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ol(this)&&this.run()}get dirty(){return ol(this)}}let If=0,mr,gr;function Nf(n,e=!1){if(n.flags|=8,e){n.next=gr,gr=n;return}n.next=mr,mr=n}function Dl(){If++}function Ul(){if(--If>0)return;if(gr){let e=gr;for(gr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;mr;){let e=mr;for(mr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Of(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ff(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Il(i),Fd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ol(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Er)||(n.globalVersion=Er,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ol(n))))return;n.flags|=2;const e=n.dep,t=ht,i=Sn;ht=n,Sn=!0;try{Of(n);const s=n.fn(n._value);(e.version===0||Un(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ht=t,Sn=i,Ff(n),n.flags&=-3}}function Il(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Il(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Fd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Sn=!0;const zf=[];function ti(){zf.push(Sn),Sn=!1}function ni(){const n=zf.pop();Sn=n===void 0?!0:n}function cc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let Er=0;class Bd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!Sn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new Bd(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,Hf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,Er++,this.notify(e)}notify(e){Dl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ul()}}}function Hf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Hf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const al=new WeakMap,ji=Symbol(""),ll=Symbol(""),br=Symbol("");function Ot(n,e,t){if(Sn&&ht){let i=al.get(n);i||al.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Nl),s.map=i,s.key=t),s.track()}}function Zn(n,e,t,i,s,r){const o=al.get(n);if(!o){Er++;return}const a=l=>{l&&l.trigger()};if(Dl(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&Ll(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===br||!Fn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(br)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ji)),Us(n)&&a(o.get(ll)));break;case"delete":l||(a(o.get(ji)),Us(n)&&a(o.get(ll)));break;case"set":Us(n)&&a(o.get(ji));break}}Ul()}function ss(n){const e=Qe(n);return e===n?e:(Ot(e,"iterate",br),dn(n)?e:e.map(yn))}function Ko(n){return Ot(n=Qe(n),"iterate",br),n}function Cn(n,e){return ii(n)?Vs(Ki(n)?yn(e):e):yn(e)}const zd={__proto__:null,[Symbol.iterator](){return ga(this,Symbol.iterator,n=>Cn(this,n))},concat(...n){return ss(this).concat(...n.map(e=>Be(e)?ss(e):e))},entries(){return ga(this,"entries",n=>(n[1]=Cn(this,n[1]),n))},every(n,e){return kn(this,"every",n,e,void 0,arguments)},filter(n,e){return kn(this,"filter",n,e,t=>t.map(i=>Cn(this,i)),arguments)},find(n,e){return kn(this,"find",n,e,t=>Cn(this,t),arguments)},findIndex(n,e){return kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return kn(this,"findLast",n,e,t=>Cn(this,t),arguments)},findLastIndex(n,e){return kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return _a(this,"includes",n)},indexOf(...n){return _a(this,"indexOf",n)},join(n){return ss(this).join(n)},lastIndexOf(...n){return _a(this,"lastIndexOf",n)},map(n,e){return kn(this,"map",n,e,void 0,arguments)},pop(){return Js(this,"pop")},push(...n){return Js(this,"push",n)},reduce(n,...e){return uc(this,"reduce",n,e)},reduceRight(n,...e){return uc(this,"reduceRight",n,e)},shift(){return Js(this,"shift")},some(n,e){return kn(this,"some",n,e,void 0,arguments)},splice(...n){return Js(this,"splice",n)},toReversed(){return ss(this).toReversed()},toSorted(n){return ss(this).toSorted(n)},toSpliced(...n){return ss(this).toSpliced(...n)},unshift(...n){return Js(this,"unshift",n)},values(){return ga(this,"values",n=>Cn(this,n))}};function ga(n,e,t){const i=Ko(n),s=i[e]();return i!==n&&!dn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Hd=Array.prototype;function kn(n,e,t,i,s,r){const o=Ko(n),a=o!==n&&!dn(n),l=o[e];if(l!==Hd[e]){const f=l.apply(n,r);return a?yn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Cn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function uc(n,e,t,i){const s=Ko(n),r=s!==n&&!dn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Cn(n,c)),t.call(this,c,Cn(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?Cn(n,l):l}function _a(n,e,t){const i=Qe(n);Ot(i,"iterate",br);const s=i[e](...t);return(s===-1||s===!1)&&Bl(t[0])?(t[0]=Qe(t[0]),i[e](...t)):s}function Js(n,e,t=[]){ti(),Dl();const i=Qe(n)[e].apply(n,t);return Ul(),ni(),i}const kd=Cl("__proto__,__v_isRef,__isVue"),kf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fn));function Vd(n){Fn(n)||(n=String(n));const e=Qe(this);return Ot(e,"has",n),e.hasOwnProperty(n)}class Vf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Jd:qf:r?Xf:Wf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){let l;if(o&&(l=zd[t]))return l;if(t==="hasOwnProperty")return Vd}const a=Reflect.get(e,t,zt(e)?e:i);if((Fn(t)?kf.has(t):kd(t))||(s||Ot(e,"get",t),r))return a;if(zt(a)){const l=o&&Ll(t)?a:a.value;return s&&it(l)?ul(l):l}return it(a)?s?ul(a):Ji(a):a}}class Gf extends Vf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Be(e)&&Ll(t);if(!this._isShallow){const c=ii(r);if(!dn(i)&&!ii(i)&&(r=Qe(r),i=Qe(i)),!o&&zt(r)&&!zt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:tt(e,t),l=Reflect.set(e,t,i,zt(e)?e:s);return e===Qe(s)&&(a?Un(i,r)&&Zn(e,"set",t,i):Zn(e,"add",t,i)),l}deleteProperty(e,t){const i=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Zn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Fn(t)||!kf.has(t))&&Ot(e,"has",t),i}ownKeys(e){return Ot(e,"iterate",Be(e)?"length":ji),Reflect.ownKeys(e)}}class Gd extends Vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Wd=new Gf,Xd=new Gd,qd=new Gf(!0);const cl=n=>n,Hr=n=>Reflect.getPrototypeOf(n);function Yd(n,e,t){return function(...i){const s=this.__v_raw,r=Qe(s),o=Us(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?cl:e?Vs:yn;return!e&&Ot(r,"iterate",l?ll:ji),Ct(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function kr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function $d(n,e){const t={get(s){const r=this.__v_raw,o=Qe(r),a=Qe(s);n||(Un(s,a)&&Ot(o,"get",s),Ot(o,"get",a));const{has:l}=Hr(o),c=e?cl:n?Vs:yn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ot(Qe(s),"iterate",ji),s.size},has(s){const r=this.__v_raw,o=Qe(r),a=Qe(s);return n||(Un(s,a)&&Ot(o,"has",s),Ot(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Qe(a),c=e?cl:n?Vs:yn;return!n&&Ot(l,"iterate",ji),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Ct(t,n?{add:kr("add"),set:kr("set"),delete:kr("delete"),clear:kr("clear")}:{add(s){const r=Qe(this),o=Hr(r),a=Qe(s),l=!e&&!dn(s)&&!ii(s)?a:s;return o.has.call(r,l)||Un(s,l)&&o.has.call(r,s)||Un(a,l)&&o.has.call(r,a)||(r.add(l),Zn(r,"add",l,l)),this},set(s,r){!e&&!dn(r)&&!ii(r)&&(r=Qe(r));const o=Qe(this),{has:a,get:l}=Hr(o);let c=a.call(o,s);c||(s=Qe(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Un(r,u)&&Zn(o,"set",s,r):Zn(o,"add",s,r),this},delete(s){const r=Qe(this),{has:o,get:a}=Hr(r);let l=o.call(r,s);l||(s=Qe(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Zn(r,"delete",s,void 0),c},clear(){const s=Qe(this),r=s.size!==0,o=s.clear();return r&&Zn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Yd(s,n,e)}),t}function Ol(n,e){const t=$d(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(tt(t,s)&&s in i?t:i,s,r)}const jd={get:Ol(!1,!1)},Kd={get:Ol(!1,!0)},Zd={get:Ol(!0,!1)};const Wf=new WeakMap,Xf=new WeakMap,qf=new WeakMap,Jd=new WeakMap;function Qd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ep(n){return n.__v_skip||!Object.isExtensible(n)?0:Qd(Ed(n))}function Ji(n){return ii(n)?n:Fl(n,!1,Wd,jd,Wf)}function tp(n){return Fl(n,!1,qd,Kd,Xf)}function ul(n){return Fl(n,!0,Xd,Zd,qf)}function Fl(n,e,t,i,s){if(!it(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=ep(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Ki(n){return ii(n)?Ki(n.__v_raw):!!(n&&n.__v_isReactive)}function ii(n){return!!(n&&n.__v_isReadonly)}function dn(n){return!!(n&&n.__v_isShallow)}function Bl(n){return n?!!n.__v_raw:!1}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function np(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&Cf(n,"__v_skip",!0),n}const yn=n=>it(n)?Ji(n):n,Vs=n=>it(n)?ul(n):n;function zt(n){return n?n.__v_isRef===!0:!1}function _i(n){return ip(n,!1)}function ip(n,e){return zt(n)?n:new sp(n,e)}class sp{constructor(e,t){this.dep=new Nl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Qe(e),this._value=t?e:yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||dn(e)||ii(e);e=i?e:Qe(e),Un(e,t)&&(this._rawValue=e,this._value=i?e:yn(e),this.dep.trigger())}}function vo(n){return zt(n)?n.value:n}const rp={get:(n,e,t)=>e==="__v_raw"?n:vo(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return zt(s)&&!zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Yf(n){return Ki(n)?n:new Proxy(n,rp)}class op{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Nl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Er-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return Nf(this,!0),!0}get value(){const e=this.dep.track();return Bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ap(n,e,t=!1){let i,s;return Ge(n)?i=n:(i=n.get,s=n.set),new op(i,s,t)}const Vr={},bo=new WeakMap;let ki;function lp(n,e=!1,t=ki){if(t){let i=bo.get(t);i||bo.set(t,i=[]),i.push(n)}}function cp(n,e,t=ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=A=>s?A:dn(A)||s===!1||s===0?Jn(A,1):Jn(A);let u,f,h,p,v=!1,x=!1;if(zt(n)?(f=()=>n.value,v=dn(n)):Ki(n)?(f=()=>c(n),v=!0):Be(n)?(x=!0,v=n.some(A=>Ki(A)||dn(A)),f=()=>n.map(A=>{if(zt(A))return A.value;if(Ki(A))return c(A);if(Ge(A))return l?l(A,2):A()})):Ge(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ti();try{h()}finally{ni()}}const A=ki;ki=u;try{return l?l(n,3,[p]):n(p)}finally{ki=A}}:f=On,e&&s){const A=f,I=s===!0?1/0:s;f=()=>Jn(A(),I)}const m=Od(),d=()=>{u.stop(),m&&m.active&&Pl(m.effects,u)};if(r&&e){const A=e;e=(...I)=>{A(...I),d()}}let w=x?new Array(n.length).fill(Vr):Vr;const y=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const I=u.run();if(s||v||(x?I.some((L,P)=>Un(L,w[P])):Un(I,w))){h&&h();const L=ki;ki=u;try{const P=[I,w===Vr?void 0:x&&w[0]===Vr?[]:w,p];w=I,l?l(e,3,P):e(...P)}finally{ki=L}}}else u.run()};return a&&a(y),u=new Uf(f),u.scheduler=o?()=>o(y,!1):y,p=A=>lp(A,!1,u),h=u.onStop=()=>{const A=bo.get(u);if(A){if(l)l(A,4);else for(const I of A)I();bo.delete(u)}},e?i?y(!0):w=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Jn(n,e=1/0,t){if(e<=0||!it(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,zt(n))Jn(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)Jn(n[i],e,t);else if(Xo(n)||Us(n))n.forEach(i=>{Jn(i,e,t)});else if(wf(n)){for(const i in n)Jn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Jn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nr(n,e,t,i){try{return i?n(...i):n()}catch(s){Zo(s,e,t)}}function En(n,e,t,i){if(Ge(n)){const s=Nr(n,e,t,i);return s&&Tf(s)&&s.catch(r=>{Zo(r,e,t)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(En(n[r],e,t,i));return s}}function Zo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){ti(),Nr(r,null,10,[n,l,c]),ni();return}}up(n,t,s,i,o)}function up(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Wt=[];let An=-1;const Is=[];let di=null,Cs=0;const $f=Promise.resolve();let To=null;function jf(n){const e=To||$f;return n?e.then(this?n.bind(this):n):e}function fp(n){let e=An+1,t=Wt.length;for(;e<t;){const i=e+t>>>1,s=Wt[i],r=Tr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function zl(n){if(!(n.flags&1)){const e=Tr(n),t=Wt[Wt.length-1];!t||!(n.flags&2)&&e>=Tr(t)?Wt.push(n):Wt.splice(fp(e),0,n),n.flags|=1,Kf()}}function Kf(){To||(To=$f.then(Jf))}function hp(n){Be(n)?Is.push(...n):di&&n.id===-1?di.splice(Cs+1,0,n):n.flags&1||(Is.push(n),n.flags|=1),Kf()}function fc(n,e,t=An+1){for(;t<Wt.length;t++){const i=Wt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Wt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Zf(n){if(Is.length){const e=[...new Set(Is)].sort((t,i)=>Tr(t)-Tr(i));if(Is.length=0,di){di.push(...e);return}for(di=e,Cs=0;Cs<di.length;Cs++){const t=di[Cs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}di=null,Cs=0}}const Tr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Jf(n){try{for(An=0;An<Wt.length;An++){const e=Wt[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Nr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<Wt.length;An++){const e=Wt[An];e&&(e.flags&=-2)}An=-1,Wt.length=0,Zf(),To=null,(Wt.length||Is.length)&&Jf()}}let fn=null,Qf=null;function Ao(n){const e=fn;return fn=n,Qf=n&&n.type.__scopeId||null,e}function Jo(n,e=fn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Co(-1);const r=Ao(e);let o;try{o=n(...s)}finally{Ao(r),i._d&&Co(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function rs(n,e){if(fn===null)return n;const t=sa(fn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ut]=e[s];r&&(Ge(r)&&(r={mounted:r,updated:r}),r.deep&&Jn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Pi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ti(),En(l,t,8,[n.el,a,n,e]),ni())}}function dp(n,e){if(Yt){let t=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===t&&(t=Yt.provides=Object.create(i)),t[n]=e}}function xo(n,e,t=!1){const i=Ph();if(i||Os){let s=Os?Os._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const pp=Symbol.for("v-scx"),mp=()=>xo(pp);function Zi(n,e,t){return eh(n,e,t)}function eh(n,e,t=ut){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ct({},t),l=e&&i||!e&&r!=="post";let c;if(Cr){if(r==="sync"){const p=mp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=On,p.resume=On,p.pause=On,p}}const u=Yt;a.call=(p,v,x)=>En(p,u,v,x);let f=!1;r==="post"?a.scheduler=p=>{Kt(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():zl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=cp(n,e,a);return Cr&&(c?c.push(h):l&&h()),h}function gp(n,e,t){const i=this.proxy,s=_t(n)?n.includes(".")?th(i,n):()=>i[n]:n.bind(i,i);let r;Ge(e)?r=e:(r=e.handler,t=e);const o=Or(this),a=eh(s,r.bind(i),t);return o(),a}function th(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const _p=Symbol("_vte"),nh=n=>n.__isTeleport,wn=Symbol("_leaveCb"),Qs=Symbol("_enterCb");function vp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ta(()=>{n.isMounted=!0}),Hl(()=>{n.isUnmounting=!0}),n}const on=[Function,Array],ih={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},sh=n=>{const e=n.subTree;return e.component?sh(e.component):e},xp={name:"BaseTransition",props:ih,setup(n,{slots:e}){const t=Ph(),i=vp();return()=>{const s=e.default&&ah(e.default(),!0),r=s&&s.length?rh(s):t.subTree?Nt():void 0;if(!r)return;const o=Qe(n),{mode:a}=o;if(i.isLeaving)return va(r);const l=hc(r);if(!l)return va(r);let c=fl(l,o,i,t,f=>c=f);l.type!==qt&&Ar(l,c);let u=t.subTree&&hc(t.subTree);if(u&&u.type!==qt&&!Gi(u,l)&&sh(t).type!==qt){let f=fl(u,o,i,t);if(Ar(u,f),a==="out-in"&&l.type!==qt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},va(r);a==="in-out"&&l.type!==qt?f.delayLeave=(h,p,v)=>{const x=oh(i,u);x[String(u.key)]=u,h[wn]=()=>{p(),h[wn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function rh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==qt){e=t;break}}return e}const Sp=xp;function oh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function fl(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:v,onLeaveCancelled:x,onBeforeAppear:m,onAppear:d,onAfterAppear:w,onAppearCancelled:y}=e,A=String(n.key),I=oh(t,n),L=(b,M)=>{b&&En(b,i,9,M)},P=(b,M)=>{const D=M[1];L(b,M),Be(b)?b.every(U=>U.length<=1)&&D():b.length<=1&&D()},z={mode:o,persisted:a,beforeEnter(b){let M=l;if(!t.isMounted)if(r)M=m||l;else return;b[wn]&&b[wn](!0);const D=I[A];D&&Gi(n,D)&&D.el[wn]&&D.el[wn](),L(M,[b])},enter(b){if(I[A]===n)return;let M=c,D=u,U=f;if(!t.isMounted)if(r)M=d||c,D=w||u,U=y||f;else return;let k=!1;b[Qs]=re=>{k||(k=!0,re?L(U,[b]):L(D,[b]),z.delayedLeave&&z.delayedLeave(),b[Qs]=void 0)};const te=b[Qs].bind(null,!1);M?P(M,[b,te]):te()},leave(b,M){const D=String(n.key);if(b[Qs]&&b[Qs](!0),t.isUnmounting)return M();L(h,[b]);let U=!1;b[wn]=te=>{U||(U=!0,M(),te?L(x,[b]):L(v,[b]),b[wn]=void 0,I[D]===n&&delete I[D])};const k=b[wn].bind(null,!1);I[D]=n,p?P(p,[b,k]):k()},clone(b){const M=fl(b,e,t,i,s);return s&&s(M),M}};return z}function va(n){if(Qo(n))return n=yi(n),n.children=null,n}function hc(n){if(!Qo(n))return nh(n.type)&&n.children?rh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ge(t.default))return t.default()}}function Ar(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ar(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ah(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Ft?(o.patchFlag&128&&s++,i=i.concat(ah(o.children,e,a))):(e||o.type!==qt)&&i.push(a!=null?yi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function lh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function dc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const wo=new WeakMap;function _r(n,e,t,i,s=!1){if(Be(n)){n.forEach((x,m)=>_r(x,e&&(Be(e)?e[m]:e),t,i,s));return}if(vr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&_r(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?sa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,f=a.setupState,h=Qe(f),p=f===ut?bf:x=>dc(u,x)?!1:tt(h,x),v=(x,m)=>!(m&&dc(u,m));if(c!=null&&c!==l){if(pc(e),_t(c))u[c]=null,p(c)&&(f[c]=null);else if(zt(c)){const x=e;v(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Ge(l))Nr(l,a,12,[o,u]);else{const x=_t(l),m=zt(l);if(x||m){const d=()=>{if(n.f){const w=x?p(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Be(w)&&Pl(w,r);else if(Be(w))w.includes(r)||w.push(r);else if(x)u[l]=[r],p(l)&&(f[l]=u[l]);else{const y=[r];v(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else x?(u[l]=o,p(l)&&(f[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{d(),wo.delete(n)};w.id=-1,wo.set(n,w),Kt(w,t)}else pc(n),d()}}}function pc(n){const e=wo.get(n);e&&(e.flags|=8,wo.delete(n))}$o().requestIdleCallback;$o().cancelIdleCallback;const vr=n=>!!n.type.__asyncLoader,Qo=n=>n.type.__isKeepAlive;function Mp(n,e){ch(n,"a",e)}function yp(n,e){ch(n,"da",e)}function ch(n,e,t=Yt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ea(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Qo(s.parent.vnode)&&Ep(i,e,t,s),s=s.parent}}function Ep(n,e,t,i){const s=ea(e,n,i,!0);uh(()=>{Pl(i[e],s)},t)}function ea(n,e,t=Yt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ti();const a=Or(t),l=En(e,t,n,o);return a(),ni(),l});return i?s.unshift(r):s.push(r),r}}const si=n=>(e,t=Yt)=>{(!Cr||n==="sp")&&ea(n,(...i)=>e(...i),t)},bp=si("bm"),ta=si("m"),Tp=si("bu"),Ap=si("u"),Hl=si("bum"),uh=si("um"),wp=si("sp"),Rp=si("rtg"),Cp=si("rtc");function Pp(n,e=Yt){ea("ec",n,e)}const Lp=Symbol.for("v-ndc");function Ns(n,e,t,i){let s;const r=t,o=Be(n);if(o||_t(n)){const a=o&&Ki(n);let l=!1,c=!1;a&&(l=!dn(n),c=ii(n),n=Ko(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Vs(yn(n[u])):yn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(it(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const hl=n=>n?Lh(n)?sa(n):hl(n.parent):null,xr=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>hl(n.parent),$root:n=>hl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>hh(n),$forceUpdate:n=>n.f||(n.f=()=>{zl(n.update)}),$nextTick:n=>n.n||(n.n=jf.bind(n.proxy)),$watch:n=>gp.bind(n)}),xa=(n,e)=>n!==ut&&!n.__isScriptSetup&&tt(n,e),Dp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(xa(i,e))return o[e]=1,i[e];if(s!==ut&&tt(s,e))return o[e]=2,s[e];if(tt(r,e))return o[e]=3,r[e];if(t!==ut&&tt(t,e))return o[e]=4,t[e];dl&&(o[e]=0)}}const c=xr[e];let u,f;if(c)return e==="$attrs"&&Ot(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ut&&tt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,tt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return xa(s,e)?(s[e]=t,!0):i!==ut&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==ut&&a[0]!=="$"&&tt(n,a)||xa(e,a)||tt(r,a)||tt(i,a)||tt(xr,a)||tt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function mc(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let dl=!0;function Up(n){const e=hh(n),t=n.proxy,i=n.ctx;dl=!1,e.beforeCreate&&gc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:w,destroyed:y,unmounted:A,render:I,renderTracked:L,renderTriggered:P,errorCaptured:z,serverPrefetch:b,expose:M,inheritAttrs:D,components:U,directives:k,filters:te}=e;if(c&&Ip(c,i,null),o)for(const se in o){const $=o[se];Ge($)&&(i[se]=$.bind(t))}if(s){const se=s.call(t,t);it(se)&&(n.data=Ji(se))}if(dl=!0,r)for(const se in r){const $=r[se],Se=Ge($)?$.bind(t,t):Ge($.get)?$.get.bind(t,t):On,Ee=!Ge($)&&Ge($.set)?$.set.bind(t):On,be=Bt({get:Se,set:Ee});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>be.value,set:Oe=>be.value=Oe})}if(a)for(const se in a)fh(a[se],i,t,se);if(l){const se=Ge(l)?l.call(t):l;Reflect.ownKeys(se).forEach($=>{dp($,se[$])})}u&&gc(u,n,"c");function j(se,$){Be($)?$.forEach(Se=>se(Se.bind(t))):$&&se($.bind(t))}if(j(bp,f),j(ta,h),j(Tp,p),j(Ap,v),j(Mp,x),j(yp,m),j(Pp,z),j(Cp,L),j(Rp,P),j(Hl,w),j(uh,A),j(wp,b),Be(M))if(M.length){const se=n.exposed||(n.exposed={});M.forEach($=>{Object.defineProperty(se,$,{get:()=>t[$],set:Se=>t[$]=Se,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===On&&(n.render=I),D!=null&&(n.inheritAttrs=D),U&&(n.components=U),k&&(n.directives=k),b&&lh(n)}function Ip(n,e,t=On){Be(n)&&(n=pl(n));for(const i in n){const s=n[i];let r;it(s)?"default"in s?r=xo(s.from||i,s.default,!0):r=xo(s.from||i):r=xo(s),zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function gc(n,e,t){En(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function fh(n,e,t,i){let s=i.includes(".")?th(t,i):()=>t[i];if(_t(n)){const r=e[n];Ge(r)&&Zi(s,r)}else if(Ge(n))Zi(s,n.bind(t));else if(it(n))if(Be(n))n.forEach(r=>fh(r,e,t,i));else{const r=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(r)&&Zi(s,r,n)}}function hh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ro(l,c,o,!0)),Ro(l,e,o)),it(e)&&r.set(e,l),l}function Ro(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ro(n,r,t,!0),s&&s.forEach(o=>Ro(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Np[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Np={data:_c,props:vc,emits:vc,methods:fr,computed:fr,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:fr,directives:fr,watch:Fp,provide:_c,inject:Op};function _c(n,e){return e?n?function(){return Ct(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function Op(n,e){return fr(pl(n),pl(e))}function pl(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vt(n,e){return n?[...new Set([].concat(n,e))]:e}function fr(n,e){return n?Ct(Object.create(null),n,e):e}function vc(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Ct(Object.create(null),mc(n),mc(e??{})):e}function Fp(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=Vt(n[i],e[i]);return t}function dh(){return{app:null,config:{isNativeTag:bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bp=0;function zp(n,e){return function(i,s=null){Ge(i)||(i=Ct({},i)),s!=null&&!it(s)&&(s=null);const r=dh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Bp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:_m,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ge(u.install)?(o.add(u),u.install(c,...f)):Ge(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||At(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,sa(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(En(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Os;Os=c;try{return u()}finally{Os=f}}};return c}}let Os=null;const Hp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${xn(e)}Modifiers`]||n[`${ts(e)}Modifiers`];function kp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),o=r&&Hp(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>_t(u)?u.trim():u)),o.number&&(s=t.map(Yo)));let a,l=i[a=da(e)]||i[a=da(xn(e))];!l&&r&&(l=i[a=da(ts(e))]),l&&En(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(c,n,6,s)}}const Vp=new WeakMap;function ph(n,e,t=!1){const i=t?Vp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ge(n)){const l=c=>{const u=ph(c,e,!0);u&&(a=!0,Ct(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(it(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):Ct(o,r),it(n)&&i.set(n,o),o)}function na(n,e){return!n||!Go(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,ts(e))||tt(n,e))}function xc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:x}=n,m=Ao(n);let d,w;try{if(t.shapeFlag&4){const A=s||i,I=A;d=Pn(c.call(I,A,u,f,p,h,v)),w=a}else{const A=e;d=Pn(A.length>1?A(f,{attrs:a,slots:o,emit:l}):A(f,null)),w=e.props?a:Gp(a)}}catch(A){Sr.length=0,Zo(A,n,1),d=At(qt)}let y=d;if(w&&x!==!1){const A=Object.keys(w),{shapeFlag:I}=y;A.length&&I&7&&(r&&A.some(Wo)&&(w=Wp(w,r)),y=yi(y,w,!1,!0))}return t.dirs&&(y=yi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Ar(y,t.transition),d=y,Ao(m),d}const Gp=n=>{let e;for(const t in n)(t==="class"||t==="style"||Go(t))&&((e||(e={}))[t]=n[t]);return e},Wp=(n,e)=>{const t={};for(const i in n)(!Wo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Xp(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Sc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(mh(o,i,h)&&!na(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Sc(i,o,c):!0:!!o;return!1}function Sc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(mh(e,n,r)&&!na(t,r))return!0}return!1}function mh(n,e,t){const i=n[t],s=e[t];return t==="style"&&it(i)&&it(s)?!Ir(i,s):i!==s}function qp({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const gh={},_h=()=>Object.create(gh),vh=n=>Object.getPrototypeOf(n)===gh;function Yp(n,e,t,i=!1){const s={},r=_h();n.propsDefaults=Object.create(null),xh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:tp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function $p(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Qe(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(na(n.emitsOptions,h))continue;const p=e[h];if(l)if(tt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const v=xn(h);s[v]=ml(l,a,v,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{xh(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!tt(e,f)&&((u=ts(f))===f||!tt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=ml(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!tt(e,f))&&(delete r[f],c=!0)}c&&Zn(n.attrs,"set","")}function xh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(pr(l))continue;const c=e[l];let u;s&&tt(s,u=xn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Qe(t),c=a||ut;for(let u=0;u<r.length;u++){const f=r[u];t[f]=ml(s,l,f,c[f],n,!tt(c,f))}}return o}function ml(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Or(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ts(t))&&(i=!0))}return i}const jp=new WeakMap;function Sh(n,e,t=!1){const i=t?jp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[h,p]=Sh(f,e,!0);Ct(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return it(n)&&i.set(n,Ds),Ds;if(Be(r))for(let u=0;u<r.length;u++){const f=xn(r[u]);Mc(f)&&(o[f]=ut)}else if(r)for(const u in r){const f=xn(u);if(Mc(f)){const h=r[u],p=o[f]=Be(h)||Ge(h)?{type:h}:Ct({},h),v=p.type;let x=!1,m=!0;if(Be(v))for(let d=0;d<v.length;++d){const w=v[d],y=Ge(w)&&w.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(m=!1)}else x=Ge(v)&&v.name==="Boolean";p[0]=x,p[1]=m,(x||tt(p,"default"))&&a.push(f)}}const c=[o,a];return it(n)&&i.set(n,c),c}function Mc(n){return n[0]!=="$"&&!pr(n)}const kl=n=>n==="_"||n==="_ctx"||n==="$stable",Vl=n=>Be(n)?n.map(Pn):[Pn(n)],Kp=(n,e,t)=>{if(e._n)return e;const i=Jo((...s)=>Vl(e(...s)),t);return i._c=!1,i},Mh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(kl(s))continue;const r=n[s];if(Ge(r))e[s]=Kp(s,r,i);else if(r!=null){const o=Vl(r);e[s]=()=>o}}},yh=(n,e)=>{const t=Vl(e);n.slots.default=()=>t},Eh=(n,e,t)=>{for(const i in e)(t||!kl(i))&&(n[i]=e[i])},Zp=(n,e,t)=>{const i=n.slots=_h();if(n.vnode.shapeFlag&32){const s=e._;s?(Eh(i,e,t),t&&Cf(i,"_",s,!0)):Mh(e,i)}else e&&yh(n,e)},Jp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Eh(s,e,t):(r=!e.$stable,Mh(e,s)),o=e}else e&&(yh(n,e),o={default:1});if(r)for(const a in s)!kl(a)&&o[a]==null&&delete s[a]},Kt=im;function Qp(n){return em(n)}function em(n,e){const t=$o();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=On,insertStaticContent:v}=n,x=(S,C,F,G=null,Y=null,K=null,oe=void 0,fe=null,E=!!C.dynamicChildren)=>{if(S===C)return;S&&!Gi(S,C)&&(G=xe(S),Oe(S,Y,K,!0),S=null),C.patchFlag===-2&&(E=!1,C.dynamicChildren=null);const{type:g,ref:N,shapeFlag:O}=C;switch(g){case ia:m(S,C,F,G);break;case qt:d(S,C,F,G);break;case Ma:S==null&&w(C,F,G,oe);break;case Ft:U(S,C,F,G,Y,K,oe,fe,E);break;default:O&1?I(S,C,F,G,Y,K,oe,fe,E):O&6?k(S,C,F,G,Y,K,oe,fe,E):(O&64||O&128)&&g.process(S,C,F,G,Y,K,oe,fe,E,ie)}N!=null&&Y?_r(N,S&&S.ref,K,C||S,!C):N==null&&S&&S.ref!=null&&_r(S.ref,null,K,S,!0)},m=(S,C,F,G)=>{if(S==null)i(C.el=a(C.children),F,G);else{const Y=C.el=S.el;C.children!==S.children&&c(Y,C.children)}},d=(S,C,F,G)=>{S==null?i(C.el=l(C.children||""),F,G):C.el=S.el},w=(S,C,F,G)=>{[S.el,S.anchor]=v(S.children,C,F,G,S.el,S.anchor)},y=({el:S,anchor:C},F,G)=>{let Y;for(;S&&S!==C;)Y=h(S),i(S,F,G),S=Y;i(C,F,G)},A=({el:S,anchor:C})=>{let F;for(;S&&S!==C;)F=h(S),s(S),S=F;s(C)},I=(S,C,F,G,Y,K,oe,fe,E)=>{if(C.type==="svg"?oe="svg":C.type==="math"&&(oe="mathml"),S==null)L(C,F,G,Y,K,oe,fe,E);else{const g=S.el&&S.el._isVueCE?S.el:null;try{g&&g._beginPatch(),b(S,C,Y,K,oe,fe,E)}finally{g&&g._endPatch()}}},L=(S,C,F,G,Y,K,oe,fe)=>{let E,g;const{props:N,shapeFlag:O,transition:B,dirs:q}=S;if(E=S.el=o(S.type,K,N&&N.is,N),O&8?u(E,S.children):O&16&&z(S.children,E,null,G,Y,Sa(S,K),oe,fe),q&&Pi(S,null,G,"created"),P(E,S,S.scopeId,oe,G),N){for(const ue in N)ue!=="value"&&!pr(ue)&&r(E,ue,null,N[ue],K,G);"value"in N&&r(E,"value",null,N.value,K),(g=N.onVnodeBeforeMount)&&bn(g,G,S)}q&&Pi(S,null,G,"beforeMount");const de=tm(Y,B);de&&B.beforeEnter(E),i(E,C,F),((g=N&&N.onVnodeMounted)||de||q)&&Kt(()=>{try{g&&bn(g,G,S),de&&B.enter(E),q&&Pi(S,null,G,"mounted")}finally{}},Y)},P=(S,C,F,G,Y)=>{if(F&&p(S,F),G)for(let K=0;K<G.length;K++)p(S,G[K]);if(Y){let K=Y.subTree;if(C===K||wh(K.type)&&(K.ssContent===C||K.ssFallback===C)){const oe=Y.vnode;P(S,oe,oe.scopeId,oe.slotScopeIds,Y.parent)}}},z=(S,C,F,G,Y,K,oe,fe,E=0)=>{for(let g=E;g<S.length;g++){const N=S[g]=fe?Kn(S[g]):Pn(S[g]);x(null,N,C,F,G,Y,K,oe,fe)}},b=(S,C,F,G,Y,K,oe)=>{const fe=C.el=S.el;let{patchFlag:E,dynamicChildren:g,dirs:N}=C;E|=S.patchFlag&16;const O=S.props||ut,B=C.props||ut;let q;if(F&&Li(F,!1),(q=B.onVnodeBeforeUpdate)&&bn(q,F,C,S),N&&Pi(C,S,F,"beforeUpdate"),F&&Li(F,!0),(O.innerHTML&&B.innerHTML==null||O.textContent&&B.textContent==null)&&u(fe,""),g?M(S.dynamicChildren,g,fe,F,G,Sa(C,Y),K):oe||$(S,C,fe,null,F,G,Sa(C,Y),K,!1),E>0){if(E&16)D(fe,O,B,F,Y);else if(E&2&&O.class!==B.class&&r(fe,"class",null,B.class,Y),E&4&&r(fe,"style",O.style,B.style,Y),E&8){const de=C.dynamicProps;for(let ue=0;ue<de.length;ue++){const ae=de[ue],Me=O[ae],ce=B[ae];(ce!==Me||ae==="value")&&r(fe,ae,Me,ce,Y,F)}}E&1&&S.children!==C.children&&u(fe,C.children)}else!oe&&g==null&&D(fe,O,B,F,Y);((q=B.onVnodeUpdated)||N)&&Kt(()=>{q&&bn(q,F,C,S),N&&Pi(C,S,F,"updated")},G)},M=(S,C,F,G,Y,K,oe)=>{for(let fe=0;fe<C.length;fe++){const E=S[fe],g=C[fe],N=E.el&&(E.type===Ft||!Gi(E,g)||E.shapeFlag&198)?f(E.el):F;x(E,g,N,null,G,Y,K,oe,!0)}},D=(S,C,F,G,Y)=>{if(C!==F){if(C!==ut)for(const K in C)!pr(K)&&!(K in F)&&r(S,K,C[K],null,Y,G);for(const K in F){if(pr(K))continue;const oe=F[K],fe=C[K];oe!==fe&&K!=="value"&&r(S,K,fe,oe,Y,G)}"value"in F&&r(S,"value",C.value,F.value,Y)}},U=(S,C,F,G,Y,K,oe,fe,E)=>{const g=C.el=S?S.el:a(""),N=C.anchor=S?S.anchor:a("");let{patchFlag:O,dynamicChildren:B,slotScopeIds:q}=C;q&&(fe=fe?fe.concat(q):q),S==null?(i(g,F,G),i(N,F,G),z(C.children||[],F,N,Y,K,oe,fe,E)):O>0&&O&64&&B&&S.dynamicChildren&&S.dynamicChildren.length===B.length?(M(S.dynamicChildren,B,F,Y,K,oe,fe),(C.key!=null||Y&&C===Y.subTree)&&bh(S,C,!0)):$(S,C,F,N,Y,K,oe,fe,E)},k=(S,C,F,G,Y,K,oe,fe,E)=>{C.slotScopeIds=fe,S==null?C.shapeFlag&512?Y.ctx.activate(C,F,G,oe,E):te(C,F,G,Y,K,oe,E):re(S,C,E)},te=(S,C,F,G,Y,K,oe)=>{const fe=S.component=um(S,G,Y);if(Qo(S)&&(fe.ctx.renderer=ie),fm(fe,!1,oe),fe.asyncDep){if(Y&&Y.registerDep(fe,j,oe),!S.el){const E=fe.subTree=At(qt);d(null,E,C,F),S.placeholder=E.el}}else j(fe,S,C,F,Y,K,oe)},re=(S,C,F)=>{const G=C.component=S.component;if(Xp(S,C,F))if(G.asyncDep&&!G.asyncResolved){se(G,C,F);return}else G.next=C,G.update();else C.el=S.el,G.vnode=C},j=(S,C,F,G,Y,K,oe)=>{const fe=()=>{if(S.isMounted){let{next:O,bu:B,u:q,parent:de,vnode:ue}=S;{const Re=Th(S);if(Re){O&&(O.el=ue.el,se(S,O,oe)),Re.asyncDep.then(()=>{Kt(()=>{S.isUnmounted||g()},Y)});return}}let ae=O,Me;Li(S,!1),O?(O.el=ue.el,se(S,O,oe)):O=ue,B&&_o(B),(Me=O.props&&O.props.onVnodeBeforeUpdate)&&bn(Me,de,O,ue),Li(S,!0);const ce=xc(S),_e=S.subTree;S.subTree=ce,x(_e,ce,f(_e.el),xe(_e),S,Y,K),O.el=ce.el,ae===null&&qp(S,ce.el),q&&Kt(q,Y),(Me=O.props&&O.props.onVnodeUpdated)&&Kt(()=>bn(Me,de,O,ue),Y)}else{let O;const{el:B,props:q}=C,{bm:de,m:ue,parent:ae,root:Me,type:ce}=S,_e=vr(C);Li(S,!1),de&&_o(de),!_e&&(O=q&&q.onVnodeBeforeMount)&&bn(O,ae,C),Li(S,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(ce,S.parent?S.parent.type:void 0);const Re=S.subTree=xc(S);x(null,Re,F,G,S,Y,K),C.el=Re.el}if(ue&&Kt(ue,Y),!_e&&(O=q&&q.onVnodeMounted)){const Re=C;Kt(()=>bn(O,ae,Re),Y)}(C.shapeFlag&256||ae&&vr(ae.vnode)&&ae.vnode.shapeFlag&256)&&S.a&&Kt(S.a,Y),S.isMounted=!0,C=F=G=null}};S.scope.on();const E=S.effect=new Uf(fe);S.scope.off();const g=S.update=E.run.bind(E),N=S.job=E.runIfDirty.bind(E);N.i=S,N.id=S.uid,E.scheduler=()=>zl(N),Li(S,!0),g()},se=(S,C,F)=>{C.component=S;const G=S.vnode.props;S.vnode=C,S.next=null,$p(S,C.props,G,F),Jp(S,C.children,F),ti(),fc(S),ni()},$=(S,C,F,G,Y,K,oe,fe,E=!1)=>{const g=S&&S.children,N=S?S.shapeFlag:0,O=C.children,{patchFlag:B,shapeFlag:q}=C;if(B>0){if(B&128){Ee(g,O,F,G,Y,K,oe,fe,E);return}else if(B&256){Se(g,O,F,G,Y,K,oe,fe,E);return}}q&8?(N&16&&Te(g,Y,K),O!==g&&u(F,O)):N&16?q&16?Ee(g,O,F,G,Y,K,oe,fe,E):Te(g,Y,K,!0):(N&8&&u(F,""),q&16&&z(O,F,G,Y,K,oe,fe,E))},Se=(S,C,F,G,Y,K,oe,fe,E)=>{S=S||Ds,C=C||Ds;const g=S.length,N=C.length,O=Math.min(g,N);let B;for(B=0;B<O;B++){const q=C[B]=E?Kn(C[B]):Pn(C[B]);x(S[B],q,F,null,Y,K,oe,fe,E)}g>N?Te(S,Y,K,!0,!1,O):z(C,F,G,Y,K,oe,fe,E,O)},Ee=(S,C,F,G,Y,K,oe,fe,E)=>{let g=0;const N=C.length;let O=S.length-1,B=N-1;for(;g<=O&&g<=B;){const q=S[g],de=C[g]=E?Kn(C[g]):Pn(C[g]);if(Gi(q,de))x(q,de,F,null,Y,K,oe,fe,E);else break;g++}for(;g<=O&&g<=B;){const q=S[O],de=C[B]=E?Kn(C[B]):Pn(C[B]);if(Gi(q,de))x(q,de,F,null,Y,K,oe,fe,E);else break;O--,B--}if(g>O){if(g<=B){const q=B+1,de=q<N?C[q].el:G;for(;g<=B;)x(null,C[g]=E?Kn(C[g]):Pn(C[g]),F,de,Y,K,oe,fe,E),g++}}else if(g>B)for(;g<=O;)Oe(S[g],Y,K,!0),g++;else{const q=g,de=g,ue=new Map;for(g=de;g<=B;g++){const Ae=C[g]=E?Kn(C[g]):Pn(C[g]);Ae.key!=null&&ue.set(Ae.key,g)}let ae,Me=0;const ce=B-de+1;let _e=!1,Re=0;const Ce=new Array(ce);for(g=0;g<ce;g++)Ce[g]=0;for(g=q;g<=O;g++){const Ae=S[g];if(Me>=ce){Oe(Ae,Y,K,!0);continue}let Pe;if(Ae.key!=null)Pe=ue.get(Ae.key);else for(ae=de;ae<=B;ae++)if(Ce[ae-de]===0&&Gi(Ae,C[ae])){Pe=ae;break}Pe===void 0?Oe(Ae,Y,K,!0):(Ce[Pe-de]=g+1,Pe>=Re?Re=Pe:_e=!0,x(Ae,C[Pe],F,null,Y,K,oe,fe,E),Me++)}const ge=_e?nm(Ce):Ds;for(ae=ge.length-1,g=ce-1;g>=0;g--){const Ae=de+g,Pe=C[Ae],Je=C[Ae+1],_=Ae+1<N?Je.el||Ah(Je):G;Ce[g]===0?x(null,Pe,F,_,Y,K,oe,fe,E):_e&&(ae<0||g!==ge[ae]?be(Pe,F,_,2):ae--)}}},be=(S,C,F,G,Y=null)=>{const{el:K,type:oe,transition:fe,children:E,shapeFlag:g}=S;if(g&6){be(S.component.subTree,C,F,G);return}if(g&128){S.suspense.move(C,F,G);return}if(g&64){oe.move(S,C,F,ie);return}if(oe===Ft){i(K,C,F);for(let O=0;O<E.length;O++)be(E[O],C,F,G);i(S.anchor,C,F);return}if(oe===Ma){y(S,C,F);return}if(G!==2&&g&1&&fe)if(G===0)fe.beforeEnter(K),i(K,C,F),Kt(()=>fe.enter(K),Y);else{const{leave:O,delayLeave:B,afterLeave:q}=fe,de=()=>{S.ctx.isUnmounted?s(K):i(K,C,F)},ue=()=>{K._isLeaving&&K[wn](!0),O(K,()=>{de(),q&&q()})};B?B(K,de,ue):ue()}else i(K,C,F)},Oe=(S,C,F,G=!1,Y=!1)=>{const{type:K,props:oe,ref:fe,children:E,dynamicChildren:g,shapeFlag:N,patchFlag:O,dirs:B,cacheIndex:q,memo:de}=S;if(O===-2&&(Y=!1),fe!=null&&(ti(),_r(fe,null,F,S,!0),ni()),q!=null&&(C.renderCache[q]=void 0),N&256){C.ctx.deactivate(S);return}const ue=N&1&&B,ae=!vr(S);let Me;if(ae&&(Me=oe&&oe.onVnodeBeforeUnmount)&&bn(Me,C,S),N&6)me(S.component,F,G);else{if(N&128){S.suspense.unmount(F,G);return}ue&&Pi(S,null,C,"beforeUnmount"),N&64?S.type.remove(S,C,F,ie,G):g&&!g.hasOnce&&(K!==Ft||O>0&&O&64)?Te(g,C,F,!1,!0):(K===Ft&&O&384||!Y&&N&16)&&Te(E,C,F),G&&Ye(S)}const ce=de!=null&&q==null;(ae&&(Me=oe&&oe.onVnodeUnmounted)||ue||ce)&&Kt(()=>{Me&&bn(Me,C,S),ue&&Pi(S,null,C,"unmounted"),ce&&(S.el=null)},F)},Ye=S=>{const{type:C,el:F,anchor:G,transition:Y}=S;if(C===Ft){le(F,G);return}if(C===Ma){A(S);return}const K=()=>{s(F),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(S.shapeFlag&1&&Y&&!Y.persisted){const{leave:oe,delayLeave:fe}=Y,E=()=>oe(F,K);fe?fe(S.el,K,E):E()}else K()},le=(S,C)=>{let F;for(;S!==C;)F=h(S),s(S),S=F;s(C)},me=(S,C,F)=>{const{bum:G,scope:Y,job:K,subTree:oe,um:fe,m:E,a:g}=S;yc(E),yc(g),G&&_o(G),Y.stop(),K&&(K.flags|=8,Oe(oe,S,C,F)),fe&&Kt(fe,C),Kt(()=>{S.isUnmounted=!0},C)},Te=(S,C,F,G=!1,Y=!1,K=0)=>{for(let oe=K;oe<S.length;oe++)Oe(S[oe],C,F,G,Y)},xe=S=>{if(S.shapeFlag&6)return xe(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const C=h(S.anchor||S.el),F=C&&C[_p];return F?h(F):C};let ke=!1;const ne=(S,C,F)=>{let G;S==null?C._vnode&&(Oe(C._vnode,null,null,!0),G=C._vnode.component):x(C._vnode||null,S,C,null,null,null,F),C._vnode=S,ke||(ke=!0,fc(G),Zf(),ke=!1)},ie={p:x,um:Oe,m:be,r:Ye,mt:te,mc:z,pc:$,pbc:M,n:xe,o:n};return{render:ne,hydrate:void 0,createApp:zp(ne)}}function Sa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Li({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function tm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function bh(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Kn(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&bh(o,a)),a.type===ia&&(a.patchFlag===-1&&(a=s[r]=Kn(a)),a.el=o.el),a.type===qt&&!a.el&&(a.el=o.el)}}function nm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Th(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Th(e)}function yc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ah(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ah(e.subTree):null}const wh=n=>n.__isSuspense;function im(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):hp(n)}const Ft=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),Sr=[];let nn=null;function $e(n=!1){Sr.push(nn=n?null:[])}function sm(){Sr.pop(),nn=Sr[Sr.length-1]||null}let wr=1;function Co(n,e=!1){wr+=n,n<0&&nn&&e&&(nn.hasOnce=!0)}function Rh(n){return n.dynamicChildren=wr>0?nn||Ds:null,sm(),wr>0&&nn&&nn.push(n),n}function nt(n,e,t,i,s,r){return Rh(pe(n,e,t,i,s,r,!0))}function Rr(n,e,t,i,s){return Rh(At(n,e,t,i,s,!0))}function Po(n){return n?n.__v_isVNode===!0:!1}function Gi(n,e){return n.type===e.type&&n.key===e.key}const Ch=({key:n})=>n??null,So=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||zt(n)||Ge(n)?{i:fn,r:n,k:e,f:!!t}:n:null);function pe(n,e=null,t=null,i=0,s=null,r=n===Ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ch(e),ref:e&&So(e),scopeId:Qf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fn};return a?(Gl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),wr>0&&!o&&nn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&nn.push(l),l}const At=rm;function rm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Lp)&&(n=qt),Po(n)){const a=yi(n,e,!0);return t&&Gl(a,t),wr>0&&!r&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag=-2,a}if(mm(n)&&(n=n.__vccOpts),e){e=om(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=un(a)),it(l)&&(Bl(l)&&!Be(l)&&(l=Ct({},l)),e.style=jo(l))}const o=_t(n)?1:wh(n)?128:nh(n)?64:it(n)?4:Ge(n)?2:0;return pe(n,e,t,i,s,o,r,!0)}function om(n){return n?Bl(n)||vh(n)?Ct({},n):n:null}function yi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?am(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ch(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(So(e)):[r,So(e)]:So(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ft?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yi(n.ssContent),ssFallback:n.ssFallback&&yi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ar(u,l.clone(u)),u}function Mr(n=" ",e=0){return At(ia,null,n,e)}function Nt(n="",e=!1){return e?($e(),Rr(qt,null,n)):At(qt,null,n)}function Pn(n){return n==null||typeof n=="boolean"?At(qt):Be(n)?At(Ft,null,n.slice()):Po(n)?Kn(n):At(ia,null,String(n))}function Kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yi(n)}function Gl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Gl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!vh(e)?e._ctx=fn:s===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[Mr(e)]):t=8);n.children=e,n.shapeFlag|=t}function am(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=un([e.class,i.class]));else if(s==="style")e.style=jo([e.style,i.style]);else if(Go(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Wo(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function bn(n,e,t,i=null){En(n,e,7,[t,i])}const lm=dh();let cm=0;function um(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||lm,r={uid:cm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sh(i,s),emitsOptions:ph(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=kp.bind(null,r),n.ce&&n.ce(r),r}let Yt=null;const Ph=()=>Yt||fn;let Lo,gl;{const n=$o(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Lo=e("__VUE_INSTANCE_SETTERS__",t=>Yt=t),gl=e("__VUE_SSR_SETTERS__",t=>Cr=t)}const Or=n=>{const e=Yt;return Lo(n),n.scope.on(),()=>{n.scope.off(),Lo(e)}},Ec=()=>{Yt&&Yt.scope.off(),Lo(null)};function Lh(n){return n.vnode.shapeFlag&4}let Cr=!1;function fm(n,e=!1,t=!1){e&&gl(e);const{props:i,children:s}=n.vnode,r=Lh(n);Yp(n,i,r,e),Zp(n,s,t||e);const o=r?hm(n,e):void 0;return e&&gl(!1),o}function hm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Dp);const{setup:i}=t;if(i){ti();const s=n.setupContext=i.length>1?pm(n):null,r=Or(n),o=Nr(i,n,0,[n.props,s]),a=Tf(o);if(ni(),r(),(a||n.sp)&&!vr(n)&&lh(n),a){if(o.then(Ec,Ec),e)return o.then(l=>{bc(n,l)}).catch(l=>{Zo(l,n,0)});n.asyncDep=o}else bc(n,o)}else Dh(n)}function bc(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:it(e)&&(n.setupState=Yf(e)),Dh(n)}function Dh(n,e,t){const i=n.type;n.render||(n.render=i.render||On);{const s=Or(n);ti();try{Up(n)}finally{ni(),s()}}}const dm={get(n,e){return Ot(n,"get",""),n[e]}};function pm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,dm),slots:n.slots,emit:n.emit,expose:e}}function sa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Yf(np(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xr)return xr[t](n)},has(e,t){return t in e||t in xr}})):n.proxy}function mm(n){return Ge(n)&&"__vccOpts"in n}const Bt=(n,e)=>ap(n,e,Cr);function gm(n,e,t){try{Co(-1);const i=arguments.length;return i===2?it(e)&&!Be(e)?Po(e)?At(n,null,[e]):At(n,e):At(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Po(t)&&(t=[t]),At(n,e,t))}finally{Co(1)}}const _m="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _l;const Tc=typeof window<"u"&&window.trustedTypes;if(Tc)try{_l=Tc.createPolicy("vue",{createHTML:n=>n})}catch{}const Uh=_l?n=>_l.createHTML(n):n=>n,vm="http://www.w3.org/2000/svg",xm="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,Ac=jn&&jn.createElement("template"),Sm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?jn.createElementNS(vm,n):e==="mathml"?jn.createElementNS(xm,n):t?jn.createElement(n,{is:t}):jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>jn.createTextNode(n),createComment:n=>jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ac.innerHTML=Uh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ac.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},oi="transition",er="animation",Pr=Symbol("_vtc"),Ih={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mm=Ct({},ih,Ih),ym=n=>(n.displayName="Transition",n.props=Mm,n),Wl=ym((n,{slots:e})=>gm(Sp,Em(n),e)),Di=(n,e=[])=>{Be(n)?n.forEach(t=>t(...e)):n&&n(...e)},wc=n=>n?Be(n)?n.some(e=>e.length>1):n.length>1:!1;function Em(n){const e={};for(const U in n)U in Ih||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,v=bm(s),x=v&&v[0],m=v&&v[1],{onBeforeEnter:d,onEnter:w,onEnterCancelled:y,onLeave:A,onLeaveCancelled:I,onBeforeAppear:L=d,onAppear:P=w,onAppearCancelled:z=y}=e,b=(U,k,te,re)=>{U._enterCancelled=re,Ui(U,k?u:a),Ui(U,k?c:o),te&&te()},M=(U,k)=>{U._isLeaving=!1,Ui(U,f),Ui(U,p),Ui(U,h),k&&k()},D=U=>(k,te)=>{const re=U?P:w,j=()=>b(k,U,te);Di(re,[k,j]),Rc(()=>{Ui(k,U?l:r),Vn(k,U?u:a),wc(re)||Cc(k,i,x,j)})};return Ct(e,{onBeforeEnter(U){Di(d,[U]),Vn(U,r),Vn(U,o)},onBeforeAppear(U){Di(L,[U]),Vn(U,l),Vn(U,c)},onEnter:D(!1),onAppear:D(!0),onLeave(U,k){U._isLeaving=!0;const te=()=>M(U,k);Vn(U,f),U._enterCancelled?(Vn(U,h),Dc(U)):(Dc(U),Vn(U,h)),Rc(()=>{U._isLeaving&&(Ui(U,f),Vn(U,p),wc(A)||Cc(U,i,m,te))}),Di(A,[U,te])},onEnterCancelled(U){b(U,!1,void 0,!0),Di(y,[U])},onAppearCancelled(U){b(U,!0,void 0,!0),Di(z,[U])},onLeaveCancelled(U){M(U),Di(I,[U])}})}function bm(n){if(n==null)return null;if(it(n))return[ya(n.enter),ya(n.leave)];{const e=ya(n);return[e,e]}}function ya(n){return Ad(n)}function Vn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Pr]||(n[Pr]=new Set)).add(e)}function Ui(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Pr];t&&(t.delete(e),t.size||(n[Pr]=void 0))}function Rc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Tm=0;function Cc(n,e,t,i){const s=n._endId=++Tm,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Am(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function Am(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),s=i(`${oi}Delay`),r=i(`${oi}Duration`),o=Pc(s,r),a=i(`${er}Delay`),l=i(`${er}Duration`),c=Pc(a,l);let u=null,f=0,h=0;e===oi?o>0&&(u=oi,f=o,h=r.length):e===er?c>0&&(u=er,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?oi:er:null,h=u?u===oi?r.length:l.length:0);const p=u===oi&&/\b(?:transform|all)(?:,|$)/.test(i(`${oi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Pc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Lc(t)+Lc(n[i])))}function Lc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Dc(n){return(n?n.ownerDocument:document).body.offsetHeight}function wm(n,e,t){const i=n[Pr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Uc=Symbol("_vod"),Rm=Symbol("_vsh"),Cm=Symbol(""),Pm=/(?:^|;)\s*display\s*:/;function Lm(n,e,t){const i=n.style,s=_t(t);let r=!1;if(t&&!s){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&hr(i,a,"")}else for(const o in e)t[o]==null&&hr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?Um(n,o,!_t(e)&&e?e[o]:void 0,a)||hr(i,o,a):hr(i,o,"")}}else if(s){if(e!==t){const o=i[Cm];o&&(t+=";"+o),i.cssText=t,r=Pm.test(t)}}else e&&n.removeAttribute("style");Uc in n&&(n[Uc]=r?i.display:"",n[Rm]&&(i.display="none"))}const Ic=/\s*!important$/;function hr(n,e,t){if(Be(t))t.forEach(i=>hr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Dm(n,e);Ic.test(t)?n.setProperty(ts(i),t.replace(Ic,""),"important"):n[i]=t}}const Nc=["Webkit","Moz","ms"],Ea={};function Dm(n,e){const t=Ea[e];if(t)return t;let i=xn(e);if(i!=="filter"&&i in n)return Ea[e]=i;i=Rf(i);for(let s=0;s<Nc.length;s++){const r=Nc[s]+i;if(r in n)return Ea[e]=r}return e}function Um(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&_t(i)&&t===i}const Oc="http://www.w3.org/1999/xlink";function Fc(n,e,t,i,s,r=Dd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Oc,e.slice(6,e.length)):n.setAttributeNS(Oc,e,t):t==null||r&&!Pf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Fn(t)?String(t):t)}function Bc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Uh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Pf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Wi(n,e,t,i){n.addEventListener(e,t,i)}function Im(n,e,t,i){n.removeEventListener(e,t,i)}const zc=Symbol("_vei");function Nm(n,e,t,i,s=null){const r=n[zc]||(n[zc]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Om(e);if(i){const c=r[e]=zm(i,s);Wi(n,a,c,l)}else o&&(Im(n,a,o,l),r[e]=void 0)}}const Hc=/(?:Once|Passive|Capture)$/;function Om(n){let e;if(Hc.test(n)){e={};let i;for(;i=n.match(Hc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ts(n.slice(2)),e]}let ba=0;const Fm=Promise.resolve(),Bm=()=>ba||(Fm.then(()=>ba=0),ba=Date.now());function zm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(Hm(i,t.value),e,5,[i])};return t.value=n,t.attached=Bm(),t}function Hm(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const kc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,km=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?wm(n,i,o):e==="style"?Lm(n,t,i):Go(e)?Wo(e)||Nm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vm(n,e,i,o))?(Bc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Fc(n,e,i,o,r,e!=="value")):n._isVueCE&&(Gm(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!_t(i)))?Bc(n,xn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Fc(n,e,i,o))};function Vm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&kc(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return kc(e)&&_t(t)?!1:e in n}function Gm(n,e){const t=n._def.props;if(!t)return!1;const i=xn(e);return Array.isArray(t)?t.some(s=>xn(s)===i):Object.keys(t).some(s=>xn(s)===i)}const Do=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Be(e)?t=>_o(e,t):e};function Wm(n){n.target.composing=!0}function Vc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fs=Symbol("_assign");function Gc(n,e,t){return e&&(n=n.trim()),t&&(n=Yo(n)),n}const tr={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Fs]=Do(s);const r=i||s.props&&s.props.type==="number";Wi(n,e?"change":"input",o=>{o.target.composing||n[Fs](Gc(n.value,t,r))}),(t||r)&&Wi(n,"change",()=>{n.value=Gc(n.value,t,r)}),e||(Wi(n,"compositionstart",Wm),Wi(n,"compositionend",Vc),Wi(n,"change",Vc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Fs]=Do(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Yo(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Xm={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Xo(e);Wi(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Yo(Uo(o)):Uo(o));n[Fs](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,jf(()=>{n._assigning=!1})}),n[Fs]=Do(i)},mounted(n,{value:e}){Wc(n,e)},beforeUpdate(n,e,t){n[Fs]=Do(t)},updated(n,{value:e}){n._assigning||Wc(n,e)}};function Wc(n,e){const t=n.multiple,i=Be(e);if(!(t&&!i&&!Xo(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Uo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Id(e,a)>-1}else o.selected=e.has(a);else if(Ir(Uo(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Uo(n){return"_value"in n?n._value:n.value}const qm=["ctrl","shift","alt","meta"],Ym={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>qm.some(t=>n[`${t}Key`]&&!e.includes(t))},Xc=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Ym[e[o]];if(a&&a(s,e))return}return n(s,...r)})},$m=Ct({patchProp:km},Sm);let qc;function jm(){return qc||(qc=Qp($m))}const Km=(...n)=>{const e=jm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Jm(i);if(!s)return;const r=e._component;!Ge(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Zm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Zm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Jm(n){return _t(n)?document.querySelector(n):n}const ns=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Qm=["title"],eg={class:"unit-id"},tg={class:"unit-meta"},ng={class:"type"},ig={class:"price"},sg={__name:"UnitCard",props:{unit:{type:Object,required:!0}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s={Studio:"Studio","1 Bedroom":"1BR","2 Bedroom":"2BR","3 Bedroom":"3BR",Penthouse:"Pent"},r={available:"Available",hold:"On Hold",deposit_locked:"Deposit Locked",booked:"Booked",unavailable:"N/A"},o=Bt(()=>{const u=parseInt(String(t.unit.price||"").replace(/[^0-9]/g,""),10);return u?u>=1e6?`${(u/1e6).toFixed(2)}M`:`${Math.round(u/1e3)}k`:""}),a=Bt(()=>s[t.unit.type]||t.unit.type),l=Bt(()=>`${t.unit.id} · ${t.unit.type}
${t.unit.price}
Status: ${r[t.unit.status]}`),c=()=>i("select",t.unit);return(u,f)=>($e(),nt("button",{type:"button",class:un(["unit-card",`status-${n.unit.status}`]),title:l.value,onClick:c},[pe("div",eg,Ze(n.unit.id),1),pe("div",tg,[pe("span",ng,Ze(a.value),1),f[0]||(f[0]=pe("span",{class:"dot"},"·",-1)),pe("span",ig,Ze(o.value),1)])],10,Qm))}},rg=ns(sg,[["__scopeId","data-v-982f4348"]]),og={class:"grid-wrap"},ag={key:0,class:"empty"},lg={class:"block-head"},cg={class:"block-tag"},ug={class:"block-count"},fg={class:"floors"},hg={class:"floor-label"},dg={class:"units"},pg={__name:"UnitGrid",props:{units:{type:Array,required:!0},filter:{type:Object,default:()=>({block:"all",status:"all",search:""})}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=Bt(()=>t.units.filter(a=>{const l=t.filter;if(l.block!=="all"&&(a.block||"A")!==l.block)return!1;const c=String(a.status??"").toLowerCase(),u=String(l.status??"all").toLowerCase();if(u!=="all"&&c!==u)return!1;const f=(l.search??"").trim().toLowerCase();return!(f&&!a.id.toLowerCase().includes(f))})),r=Bt(()=>{const a=new Map;return s.value.forEach(l=>{const c=l.block||"A";a.has(c)||a.set(c,new Map);const u=a.get(c),f=l.floor||1;u.has(f)||u.set(f,[]),u.get(f).push(l)}),Array.from(a.entries()).sort((l,c)=>l[0].localeCompare(c[0])).map(([l,c])=>({block:l,floors:Array.from(c.entries()).sort((u,f)=>f[0]-u[0]).map(([u,f])=>({floor:u,items:f.sort((h,p)=>h.id.localeCompare(p.id))}))}))}),o=a=>i("select",a);return(a,l)=>($e(),nt("div",og,[s.value.length===0?($e(),nt("div",ag,"No units match the filter.")):Nt("",!0),($e(!0),nt(Ft,null,Ns(r.value,c=>($e(),nt("div",{key:c.block,class:"block-group"},[pe("div",lg,[pe("span",cg,"Block "+Ze(c.block),1),pe("span",ug,Ze(c.floors.reduce((u,f)=>u+f.items.length,0))+" units ",1)]),pe("div",fg,[($e(!0),nt(Ft,null,Ns(c.floors,u=>($e(),nt("div",{key:u.floor,class:"floor-row"},[pe("div",hg,"F"+Ze(u.floor),1),pe("div",dg,[($e(!0),nt(Ft,null,Ns(u.items,f=>($e(),Rr(rg,{key:f.id,unit:f,onSelect:o},null,8,["unit"]))),128))])]))),128))])]))),128))]))}},mg=ns(pg,[["__scopeId","data-v-7a688cea"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xl="165",os={ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gg=0,Yc=1,_g=2,Nh=1,Oh=2,$n=3,Ei=0,Zt=1,Qn=2,xi=0,Bs=1,$c=2,jc=3,Kc=4,vg=5,Xi=100,xg=101,Sg=102,Mg=103,yg=104,Eg=200,bg=201,Tg=202,Ag=203,vl=204,xl=205,wg=206,Rg=207,Cg=208,Pg=209,Lg=210,Dg=211,Ug=212,Ig=213,Ng=214,Og=0,Fg=1,Bg=2,Io=3,zg=4,Hg=5,kg=6,Vg=7,Fh=0,Gg=1,Wg=2,Si=0,Xg=1,qg=2,Yg=3,$g=4,jg=5,Kg=6,Zg=7,Bh=300,Gs=301,Ws=302,Sl=303,Ml=304,ra=306,yl=1e3,Yi=1001,El=1002,hn=1003,Jg=1004,Gr=1005,_n=1006,Ta=1007,$i=1008,bi=1009,Qg=1010,e_=1011,No=1012,zh=1013,Xs=1014,vi=1015,oa=1016,Hh=1017,kh=1018,qs=1020,t_=35902,n_=1021,i_=1022,Nn=1023,s_=1024,r_=1025,zs=1026,Ys=1027,o_=1028,Vh=1029,a_=1030,Gh=1031,Wh=1033,Aa=33776,wa=33777,Ra=33778,Ca=33779,Zc=35840,Jc=35841,Qc=35842,eu=35843,tu=36196,nu=37492,iu=37496,su=37808,ru=37809,ou=37810,au=37811,lu=37812,cu=37813,uu=37814,fu=37815,hu=37816,du=37817,pu=37818,mu=37819,gu=37820,_u=37821,Pa=36492,vu=36494,xu=36495,l_=36283,Su=36284,Mu=36285,yu=36286,c_=3200,u_=3201,Xh=0,f_=1,mi="",Rn="srgb",Ai="srgb-linear",ql="display-p3",aa="display-p3-linear",Oo="linear",dt="srgb",Fo="rec709",Bo="p3",ls=7680,Eu=519,h_=512,d_=513,p_=514,qh=515,m_=516,g_=517,__=518,v_=519,bl=35044,bu="300 es",ei=2e3,zo=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mo=Math.PI/180,Tl=180/Math.PI;function Mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function x_(n,e){return(n%e+e)%e}function La(n,e,t){return(1-t)*n+t*e}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function at(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const S_={DEG2RAD:Mo};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,s,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],x=s[0],m=s[3],d=s[6],w=s[1],y=s[4],A=s[7],I=s[2],L=s[5],P=s[8];return r[0]=o*x+a*w+l*I,r[3]=o*m+a*y+l*L,r[6]=o*d+a*A+l*P,r[1]=c*x+u*w+f*I,r[4]=c*m+u*y+f*L,r[7]=c*d+u*A+f*P,r[2]=h*x+p*w+v*I,r[5]=h*m+p*y+v*L,r[8]=h*d+p*A+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,v=t*f+i*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new qe;function Yh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function M_(){const n=Ho("canvas");return n.style.display="block",n}const Tu={};function Yl(n){n in Tu||(Tu[n]=!0,console.warn(n))}function y_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Au=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wu=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wr={[Ai]:{transfer:Oo,primaries:Fo,toReference:n=>n,fromReference:n=>n},[Rn]:{transfer:dt,primaries:Fo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[aa]:{transfer:Oo,primaries:Bo,toReference:n=>n.applyMatrix3(wu),fromReference:n=>n.applyMatrix3(Au)},[ql]:{transfer:dt,primaries:Bo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(wu),fromReference:n=>n.applyMatrix3(Au).convertLinearToSRGB()}},E_=new Set([Ai,aa]),rt={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!E_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Wr[e].toReference,s=Wr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Wr[n].primaries},getTransfer:function(n){return n===mi?Oo:Wr[n].transfer}};function Hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cs;class b_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Ho("canvas")),cs.width=e.width,cs.height=e.height;const i=cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ho("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hs(t[i]/255)*255):t[i]=Hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T_=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ia(s[o].image)):r.push(Ia(s[o]))}else r=Ia(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?b_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let A_=0;class $t extends is{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Yi,s=Yi,r=_n,o=$i,a=Nn,l=bi,c=$t.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Mi(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yl:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yl:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Bh;$t.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,A=(p+1)/2,I=(d+1)/2,L=(u+h)/4,P=(f+x)/4,z=(v+m)/4;return y>A&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=L/i,r=P/i):A>I?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=L/s,r=z/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=P/r,s=z/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(f-x)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w_ extends is{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new $t(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $h(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends w_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jh extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R_ extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],v=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==v){let m=1-a;const d=l*h+c*p+u*v+f*x,w=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const I=Math.sqrt(y),L=Math.atan2(I,d*w);m=Math.sin(m*L)/I,a=Math.sin(a*L)/I}const A=a*w;if(l=l*m+h*A,c=c*m+p*A,u=u*m+v*A,f=f*m+x*A,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-a*p,e[t+2]=c*v+u*p+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new V,Ru=new es;class Fr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),qr.subVectors(this.max,nr),us.subVectors(e.a,nr),fs.subVectors(e.b,nr),hs.subVectors(e.c,nr),ai.subVectors(fs,us),li.subVectors(hs,fs),Ii.subVectors(us,hs);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ii.z,Ii.y,ai.z,0,-ai.x,li.z,0,-li.x,Ii.z,0,-Ii.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ii.y,Ii.x,0];return!Oa(t,us,fs,hs,qr)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,us,fs,hs,qr))?!1:(Yr.crossVectors(ai,li),t=[Yr.x,Yr.y,Yr.z],Oa(t,us,fs,hs,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new V,new V,new V,new V,new V,new V,new V,new V],pn=new V,Xr=new Fr,us=new V,fs=new V,hs=new V,ai=new V,li=new V,Ii=new V,nr=new V,qr=new V,Yr=new V,Ni=new V;function Oa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const C_=new Fr,ir=new V,Fa=new V;class $l{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):C_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Fa)),this.expandByPoint(ir.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new V,Ba=new V,$r=new V,ci=new V,za=new V,jr=new V,Ha=new V;class jl{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ba.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Ba);const r=e.distanceTo(t)*.5,o=-this.direction.dot($r),a=ci.dot(this.direction),l=-ci.dot($r),c=ci.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=r*u,f>=0)if(h>=-v)if(h<=v){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ba).addScaledVector($r,h),p}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,s,r){za.subVectors(t,e),jr.subVectors(i,e),Ha.crossVectors(za,jr);let o=this.direction.dot(Ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(jr.crossVectors(ci,jr));if(l<0)return null;const c=a*this.direction.dot(za.cross(ci));if(c<0||l+c>o)return null;const u=-a*ci.dot(Ha);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,s,r,o,a,l,c,u,f,h,p,v,x,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,p,v,x,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,p,v,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,x=c*f;t[0]=h+x*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,x=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P_,e,L_)}lookAt(e,t,i){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ui.crossVectors(i,Qt),ui.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ui.crossVectors(i,Qt)),ui.normalize(),Kr.crossVectors(Qt,ui),s[0]=ui.x,s[4]=Kr.x,s[8]=Qt.x,s[1]=ui.y,s[5]=Kr.y,s[9]=Qt.y,s[2]=ui.z,s[6]=Kr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],d=i[14],w=i[3],y=i[7],A=i[11],I=i[15],L=s[0],P=s[4],z=s[8],b=s[12],M=s[1],D=s[5],U=s[9],k=s[13],te=s[2],re=s[6],j=s[10],se=s[14],$=s[3],Se=s[7],Ee=s[11],be=s[15];return r[0]=o*L+a*M+l*te+c*$,r[4]=o*P+a*D+l*re+c*Se,r[8]=o*z+a*U+l*j+c*Ee,r[12]=o*b+a*k+l*se+c*be,r[1]=u*L+f*M+h*te+p*$,r[5]=u*P+f*D+h*re+p*Se,r[9]=u*z+f*U+h*j+p*Ee,r[13]=u*b+f*k+h*se+p*be,r[2]=v*L+x*M+m*te+d*$,r[6]=v*P+x*D+m*re+d*Se,r[10]=v*z+x*U+m*j+d*Ee,r[14]=v*b+x*k+m*se+d*be,r[3]=w*L+y*M+A*te+I*$,r[7]=w*P+y*D+A*re+I*Se,r[11]=w*z+y*U+A*j+I*Ee,r[15]=w*b+y*k+A*se+I*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],d=e[15];return v*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*p-i*l*p)+x*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],d=e[15],w=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,y=v*h*c-u*m*c-v*l*p+o*m*p+u*l*d-o*h*d,A=u*x*c-v*f*c+v*a*p-o*x*p-u*a*d+o*f*d,I=v*f*l-u*x*l-v*a*h+o*x*h+u*a*m-o*f*m,L=t*w+i*y+s*A+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=w*P,e[1]=(x*h*r-f*m*r-x*s*p+i*m*p+f*s*d-i*h*d)*P,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*P,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*p-i*l*p)*P,e[4]=y*P,e[5]=(u*m*r-v*h*r+v*s*p-t*m*p-u*s*d+t*h*d)*P,e[6]=(v*l*r-o*m*r-v*s*c+t*m*c+o*s*d-t*l*d)*P,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*P,e[8]=A*P,e[9]=(v*f*r-u*x*r-v*i*p+t*x*p+u*i*d-t*f*d)*P,e[10]=(o*x*r-v*a*r+v*i*c-t*x*c-o*i*d+t*a*d)*P,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=I*P,e[13]=(u*x*s-v*f*s+v*i*h-t*x*h-u*i*m+t*f*m)*P,e[14]=(v*a*s-o*x*s-v*i*l+t*x*l+o*i*m-t*a*m)*P,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,v=r*f,x=o*u,m=o*f,d=a*f,w=l*c,y=l*u,A=l*f,I=i.x,L=i.y,P=i.z;return s[0]=(1-(x+d))*I,s[1]=(p+A)*I,s[2]=(v-y)*I,s[3]=0,s[4]=(p-A)*L,s[5]=(1-(h+d))*L,s[6]=(m+w)*L,s[7]=0,s[8]=(v+y)*P,s[9]=(m-w)*P,s[10]=(1-(h+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ds.set(s[0],s[1],s[2]).length();const o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);const c=1/r,u=1/o,f=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,t.setFromRotationMatrix(mn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ei){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let p,v;if(a===ei)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===zo)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ei){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,p=(i+s)*u;let v,x;if(a===ei)v=(o+r)*f,x=-2*f;else if(a===zo)v=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ds=new V,mn=new vt,P_=new V(0,0,0),L_=new V(1,1,1),ui=new V,Kr=new V,Qt=new V,Cu=new vt,Pu=new es;class Bn{constructor(e=0,t=0,i=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D_=0;const Lu=new V,ps=new es,Xn=new vt,Zr=new V,sr=new V,U_=new V,I_=new es,Du=new V(1,0,0),Uu=new V(0,1,0),Iu=new V(0,0,1),Nu={type:"added"},N_={type:"removed"},ms={type:"childadded",child:null},ka={type:"childremoved",child:null};class Rt extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new V,t=new Bn,i=new es,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new qe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(sr,Zr,this.up):Xn.lookAt(Zr,sr,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Xn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nu),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N_),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nu),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,U_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,I_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new V(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new V,qn=new V,Va=new V,Yn=new V,gs=new V,_s=new V,Ou=new V,Ga=new V,Wa=new V,Xa=new V;class vn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gn.subVectors(s,t),qn.subVectors(i,t),Va.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(qn),l=gn.dot(Va),c=qn.dot(qn),u=qn.dot(Va),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static isFrontFacing(e,t,i,s){return gn.subVectors(i,t),qn.subVectors(e,t),gn.cross(qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),gn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,i),_s.subVectors(r,i),Ga.subVectors(e,i);const l=gs.dot(Ga),c=_s.dot(Ga);if(l<=0&&c<=0)return t.copy(i);Wa.subVectors(e,s);const u=gs.dot(Wa),f=_s.dot(Wa);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(gs,o);Xa.subVectors(e,r);const p=gs.dot(Xa),v=_s.dot(Xa);if(v>=0&&p<=v)return t.copy(r);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(_s,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return Ou.subVectors(r,s),a=(f-u)/(f-u+(p-v)),t.copy(s).addScaledVector(Ou,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=x_(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const i=Kh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return rt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Xt(Ut.r*255,0,255))*65536+Math.round(Xt(Ut.g*255,0,255))*256+Math.round(Xt(Ut.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Rn){rt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,s=Ut.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Jr);const i=La(fi.h,Jr.h,t),s=La(fi.s,Jr.s,t),r=La(fi.l,Jr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new je;je.NAMES=Kh;let O_=0;class Ks extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Bs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=xl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vl&&(i.blendSrc=this.blendSrc),this.blendDst!==xl&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yr extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new V,Qr=new Ne;class Mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),e}}class Zh extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jh extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sn extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let F_=0;const an=new vt,Ya=new Rt,vs=new V,en=new Fr,rr=new Fr,Tt=new V;class zn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?Jh:Zh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(en.min,rr.min),en.expandByPoint(Tt),Tt.addVectors(en.max,rr.max),en.expandByPoint(Tt)):(en.expandByPoint(rr.min),en.expandByPoint(rr.max))}en.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),Tt.add(vs)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new V,l[z]=new V;const c=new V,u=new V,f=new V,h=new Ne,p=new Ne,v=new Ne,x=new V,m=new V;function d(z,b,M){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),h.fromBufferAttribute(r,z),p.fromBufferAttribute(r,b),v.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(D),a[z].add(x),a[b].add(x),a[M].add(x),l[z].add(m),l[b].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let z=0,b=w.length;z<b;++z){const M=w[z],D=M.start,U=M.count;for(let k=D,te=D+U;k<te;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new V,A=new V,I=new V,L=new V;function P(z){I.fromBufferAttribute(s,z),L.copy(I);const b=a[z];y.copy(b),y.sub(I.multiplyScalar(I.dot(b))).normalize(),A.crossVectors(L,b);const D=A.dot(l[z])<0?-1:1;o.setXYZW(z,y.x,y.y,y.z,D)}for(let z=0,b=w.length;z<b;++z){const M=w[z],D=M.start,U=M.count;for(let k=D,te=D+U;k<te;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Mn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fu=new vt,Oi=new jl,eo=new $l,Bu=new V,xs=new V,Ss=new V,Ms=new V,$a=new V,to=new V,no=new Ne,io=new Ne,so=new Ne,zu=new V,Hu=new V,ku=new V,ro=new V,oo=new V;class We extends Rt{constructor(e=new zn,t=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&($a.fromBufferAttribute(f,e),o?to.addScaledVector($a,u):to.addScaledVector($a.sub(t),u))}t.add(to)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(eo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(eo,Bu)===null||Oi.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Fu.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Fu),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],d=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let A=w,I=y;A<I;A+=3){const L=a.getX(A),P=a.getX(A+1),z=a.getX(A+2);s=ao(this,d,e,i,c,u,f,L,P,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const w=a.getX(m),y=a.getX(m+1),A=a.getX(m+2);s=ao(this,o,e,i,c,u,f,w,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],d=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=w,I=y;A<I;A+=3){const L=A,P=A+1,z=A+2;s=ao(this,d,e,i,c,u,f,L,P,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const w=m,y=m+1,A=m+2;s=ao(this,o,e,i,c,u,f,w,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function B_(n,e,t,i,s,r,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ei,a),l===null)return null;oo.copy(a),oo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:n}}function ao(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,xs),n.getVertexPosition(l,Ss),n.getVertexPosition(c,Ms);const u=B_(n,e,t,i,xs,Ss,Ms,ro);if(u){s&&(no.fromBufferAttribute(s,a),io.fromBufferAttribute(s,l),so.fromBufferAttribute(s,c),u.uv=vn.getInterpolation(ro,xs,Ss,Ms,no,io,so,new Ne)),r&&(no.fromBufferAttribute(r,a),io.fromBufferAttribute(r,l),so.fromBufferAttribute(r,c),u.uv1=vn.getInterpolation(ro,xs,Ss,Ms,no,io,so,new Ne)),o&&(zu.fromBufferAttribute(o,a),Hu.fromBufferAttribute(o,l),ku.fromBufferAttribute(o,c),u.normal=vn.getInterpolation(ro,xs,Ss,Ms,zu,Hu,ku,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};vn.getNormal(xs,Ss,Ms,f.normal),u.face=f}return u}class ft extends zn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(f,2));function v(x,m,d,w,y,A,I,L,P,z,b){const M=A/P,D=I/z,U=A/2,k=I/2,te=L/2,re=P+1,j=z+1;let se=0,$=0;const Se=new V;for(let Ee=0;Ee<j;Ee++){const be=Ee*D-k;for(let Oe=0;Oe<re;Oe++){const Ye=Oe*M-U;Se[x]=Ye*w,Se[m]=be*y,Se[d]=te,c.push(Se.x,Se.y,Se.z),Se[x]=0,Se[m]=0,Se[d]=L>0?1:-1,u.push(Se.x,Se.y,Se.z),f.push(Oe/P),f.push(1-Ee/z),se+=1}}for(let Ee=0;Ee<z;Ee++)for(let be=0;be<P;be++){const Oe=h+be+re*Ee,Ye=h+be+re*(Ee+1),le=h+(be+1)+re*(Ee+1),me=h+(be+1)+re*Ee;l.push(Oe,Ye,me),l.push(Ye,le,me),$+=6}a.addGroup(p,$,b),p+=$,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=$s(n[t]);for(const s in i)e[s]=i[s]}return e}function z_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const H_={clone:$s,merge:Gt};var k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=V_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ed extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new V,Vu=new Ne,Gu=new Ne;class cn extends ed{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,Gu),t.subVectors(Gu,Vu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,Es=1;class G_ extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(ys,Es,e,t);s.layers=this.layers,this.add(s);const r=new cn(ys,Es,e,t);r.layers=this.layers,this.add(r);const o=new cn(ys,Es,e,t);o.layers=this.layers,this.add(o);const a=new cn(ys,Es,e,t);a.layers=this.layers,this.add(a);const l=new cn(ys,Es,e,t);l.layers=this.layers,this.add(l);const c=new cn(ys,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class td extends $t{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W_ extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new td(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ft(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:xi});r.uniforms.tEquirect.value=t;const o=new We(s,r),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=_n),new G_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ja=new V,X_=new V,q_=new qe;class pi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ja.subVectors(i,t).cross(X_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ja),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||q_.getNormalMatrix(e),s=this.coplanarPoint(ja).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new $l,lo=new V;class Zl{constructor(e=new pi,t=new pi,i=new pi,s=new pi,r=new pi,o=new pi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],v=s[9],x=s[10],m=s[11],d=s[12],w=s[13],y=s[14],A=s[15];if(i[0].setComponents(l-r,h-c,m-p,A-d).normalize(),i[1].setComponents(l+r,h+c,m+p,A+d).normalize(),i[2].setComponents(l+o,h+u,m+v,A+w).normalize(),i[3].setComponents(l-o,h-u,m-v,A-w).normalize(),i[4].setComponents(l-a,h-f,m-x,A-y).normalize(),t===ei)i[5].setComponents(l+a,h+f,m+x,A+y).normalize();else if(t===zo)i[5].setComponents(a,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(lo.x=s.normal.x>0?e.max.x:e.min.x,lo.y=s.normal.y>0?e.max.y:e.min.y,lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Y_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let p=0,v=h.length;p<v;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ln extends zn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],v=[],x=[],m=[];for(let d=0;d<u;d++){const w=d*h-o;for(let y=0;y<c;y++){const A=y*f-r;v.push(A,-w,0),x.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const y=w+c*d,A=w+c*(d+1),I=w+1+c*(d+1),L=w+1+c*d;p.push(y,A,L),p.push(A,I,L)}this.setIndex(p),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}var $_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
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
#endif`,K_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
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
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,l0=`#ifdef USE_BUMPMAP
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,_0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,x0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,A0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
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
}`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,H0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,q0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iv=`#if defined( USE_POINTS_UV )
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
#endif`,sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`#ifdef USE_MORPHTARGETS
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
#endif`,uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gv=`#ifdef USE_NORMALMAP
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
#endif`,_v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Dv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iv=`#ifdef USE_SKINNING
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
#endif`,Nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hv=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kv=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$v=`uniform sampler2D t2D;
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
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
}`,ex=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tx=`#define DISTANCE
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
}`,nx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#define LAMBERT
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
}`,ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,fx=`#define MATCAP
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
}`,hx=`#define MATCAP
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
}`,dx=`#define NORMAL
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
}`,px=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,_x=`#define STANDARD
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
}`,vx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,xx=`#define TOON
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
}`,Sx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Mx=`uniform float size;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,bx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Tx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:$_,alphahash_pars_fragment:j_,alphamap_fragment:K_,alphamap_pars_fragment:Z_,alphatest_fragment:J_,alphatest_pars_fragment:Q_,aomap_fragment:e0,aomap_pars_fragment:t0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:o0,iridescence_fragment:a0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:h0,color_fragment:d0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:_0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:x0,displacementmap_pars_vertex:S0,displacementmap_vertex:M0,emissivemap_fragment:y0,emissivemap_pars_fragment:E0,colorspace_fragment:b0,colorspace_pars_fragment:T0,envmap_fragment:A0,envmap_common_pars_fragment:w0,envmap_pars_fragment:R0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:H0,envmap_vertex:P0,fog_vertex:L0,fog_pars_vertex:D0,fog_fragment:U0,fog_pars_fragment:I0,gradientmap_pars_fragment:N0,lightmap_pars_fragment:O0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:B0,lights_pars_begin:z0,lights_toon_fragment:k0,lights_toon_pars_fragment:V0,lights_phong_fragment:G0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:q0,lights_fragment_begin:Y0,lights_fragment_maps:$0,lights_fragment_end:j0,logdepthbuf_fragment:K0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:J0,logdepthbuf_vertex:Q0,map_fragment:ev,map_pars_fragment:tv,map_particle_fragment:nv,map_particle_pars_fragment:iv,metalnessmap_fragment:sv,metalnessmap_pars_fragment:rv,morphinstance_vertex:ov,morphcolor_vertex:av,morphnormal_vertex:lv,morphtarget_pars_vertex:cv,morphtarget_vertex:uv,normal_fragment_begin:fv,normal_fragment_maps:hv,normal_pars_fragment:dv,normal_pars_vertex:pv,normal_vertex:mv,normalmap_pars_fragment:gv,clearcoat_normal_fragment_begin:_v,clearcoat_normal_fragment_maps:vv,clearcoat_pars_fragment:xv,iridescence_pars_fragment:Sv,opaque_fragment:Mv,packing:yv,premultiplied_alpha_fragment:Ev,project_vertex:bv,dithering_fragment:Tv,dithering_pars_fragment:Av,roughnessmap_fragment:wv,roughnessmap_pars_fragment:Rv,shadowmap_pars_fragment:Cv,shadowmap_pars_vertex:Pv,shadowmap_vertex:Lv,shadowmask_pars_fragment:Dv,skinbase_vertex:Uv,skinning_pars_vertex:Iv,skinning_vertex:Nv,skinnormal_vertex:Ov,specularmap_fragment:Fv,specularmap_pars_fragment:Bv,tonemapping_fragment:zv,tonemapping_pars_fragment:Hv,transmission_fragment:kv,transmission_pars_fragment:Vv,uv_pars_fragment:Gv,uv_pars_vertex:Wv,uv_vertex:Xv,worldpos_vertex:qv,background_vert:Yv,background_frag:$v,backgroundCube_vert:jv,backgroundCube_frag:Kv,cube_vert:Zv,cube_frag:Jv,depth_vert:Qv,depth_frag:ex,distanceRGBA_vert:tx,distanceRGBA_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:ux,meshmatcap_vert:fx,meshmatcap_frag:hx,meshnormal_vert:dx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:_x,meshphysical_frag:vx,meshtoon_vert:xx,meshtoon_frag:Sx,points_vert:Mx,points_frag:yx,shadow_vert:Ex,shadow_frag:bx,sprite_vert:Tx,sprite_frag:Ax},ye={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Dn={basic:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Gt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Gt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Gt([ye.points,ye.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Gt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Gt([ye.common,ye.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Gt([ye.sprite,ye.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Gt([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Gt([ye.lights,ye.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Dn.physical={uniforms:Gt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const co={r:0,b:0,g:0},Bi=new Bn,wx=new vt;function Rx(n,e,t,i,s,r,o){const a=new je(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function v(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function x(w){let y=!1;const A=v(w);A===null?d(a,l):A&&A.isColor&&(d(A,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,y){const A=v(y);A&&(A.isCubeTexture||A.mapping===ra)?(u===void 0&&(u=new We(new ft(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:$s(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bi.copy(y.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wx.makeRotationFromEuler(Bi)),u.material.toneMapped=rt.getTransfer(A.colorSpace)!==dt,(f!==A||h!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new We(new Ln(2,2),new Ti({name:"BackgroundMaterial",uniforms:$s(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=rt.getTransfer(A.colorSpace)!==dt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,y){w.getRGB(co,Qh(n)),i.buffers.color.setClear(co.r,co.g,co.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:x,addToRenderList:m}}function Cx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(M,D,U,k,te){let re=!1;const j=f(k,U,D);r!==j&&(r=j,c(r.object)),re=p(M,k,U,te),re&&v(M,k,U,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,A(M,D,U,k),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,D,U){const k=U.wireframe===!0;let te=i[M.id];te===void 0&&(te={},i[M.id]=te);let re=te[D.id];re===void 0&&(re={},te[D.id]=re);let j=re[k];return j===void 0&&(j=h(l()),re[k]=j),j}function h(M){const D=[],U=[],k=[];for(let te=0;te<t;te++)D[te]=0,U[te]=0,k[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,D,U,k){const te=r.attributes,re=D.attributes;let j=0;const se=U.getAttributes();for(const $ in se)if(se[$].location>=0){const Ee=te[$];let be=re[$];if(be===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),Ee===void 0||Ee.attribute!==be||be&&Ee.data!==be.data)return!0;j++}return r.attributesNum!==j||r.index!==k}function v(M,D,U,k){const te={},re=D.attributes;let j=0;const se=U.getAttributes();for(const $ in se)if(se[$].location>=0){let Ee=re[$];Ee===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor));const be={};be.attribute=Ee,Ee&&Ee.data&&(be.data=Ee.data),te[$]=be,j++}r.attributes=te,r.attributesNum=j,r.index=k}function x(){const M=r.newAttributes;for(let D=0,U=M.length;D<U;D++)M[D]=0}function m(M){d(M,0)}function d(M,D){const U=r.newAttributes,k=r.enabledAttributes,te=r.attributeDivisors;U[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),te[M]!==D&&(n.vertexAttribDivisor(M,D),te[M]=D)}function w(){const M=r.newAttributes,D=r.enabledAttributes;for(let U=0,k=D.length;U<k;U++)D[U]!==M[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function y(M,D,U,k,te,re,j){j===!0?n.vertexAttribIPointer(M,D,U,te,re):n.vertexAttribPointer(M,D,U,k,te,re)}function A(M,D,U,k){x();const te=k.attributes,re=U.getAttributes(),j=D.defaultAttributeValues;for(const se in re){const $=re[se];if($.location>=0){let Se=te[se];if(Se===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),Se!==void 0){const Ee=Se.normalized,be=Se.itemSize,Oe=e.get(Se);if(Oe===void 0)continue;const Ye=Oe.buffer,le=Oe.type,me=Oe.bytesPerElement,Te=le===n.INT||le===n.UNSIGNED_INT||Se.gpuType===zh;if(Se.isInterleavedBufferAttribute){const xe=Se.data,ke=xe.stride,ne=Se.offset;if(xe.isInstancedInterleavedBuffer){for(let ie=0;ie<$.locationSize;ie++)d($.location+ie,xe.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ie=0;ie<$.locationSize;ie++)m($.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ie=0;ie<$.locationSize;ie++)y($.location+ie,be/$.locationSize,le,Ee,ke*me,(ne+be/$.locationSize*ie)*me,Te)}else{if(Se.isInstancedBufferAttribute){for(let xe=0;xe<$.locationSize;xe++)d($.location+xe,Se.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let xe=0;xe<$.locationSize;xe++)m($.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let xe=0;xe<$.locationSize;xe++)y($.location+xe,be/$.locationSize,le,Ee,be*me,be/$.locationSize*xe*me,Te)}}else if(j!==void 0){const Ee=j[se];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv($.location,Ee);break;case 3:n.vertexAttrib3fv($.location,Ee);break;case 4:n.vertexAttrib4fv($.location,Ee);break;default:n.vertexAttrib1fv($.location,Ee)}}}}w()}function I(){z();for(const M in i){const D=i[M];for(const U in D){const k=D[U];for(const te in k)u(k[te].object),delete k[te];delete D[U]}delete i[M]}}function L(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const U in D){const k=D[U];for(const te in k)u(k[te].object),delete k[te];delete D[U]}delete i[M.id]}function P(M){for(const D in i){const U=i[D];if(U[M.id]===void 0)continue;const k=U[M.id];for(const te in k)u(k[te].object),delete k[te];delete U[M.id]}}function z(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function Px(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<f;p++)this.render(c[p],u[p]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,i,1)}}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x];for(let x=0;x<h.length;x++)t.update(v,i,h[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Nn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const P=L===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==bi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==vi&&!P)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:d,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:A,maxSamples:I}}function Dx(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new pi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,y=w*4;let A=d.clippingState||null;l.value=A,A=u(v,h,y,p);for(let I=0;I!==y;++I)A[I]=t[I];d.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const d=p+x*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,A=p;y!==x;++y,A+=4)o.copy(f[y]).applyMatrix4(w,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ux(n){let e=new WeakMap;function t(o,a){return a===Sl?o.mapping=Gs:a===Ml&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sl||a===Ml)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new W_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class id extends ed{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,Wu=[.125,.215,.35,.446,.526,.582],qi=20,Ka=new id,Xu=new je;let Za=null,Ja=0,Qa=0,el=!1;const Vi=(1+Math.sqrt(5))/2,bs=1/Vi,qu=[new V(-Vi,bs,0),new V(Vi,bs,0),new V(-bs,0,Vi),new V(bs,0,Vi),new V(0,Vi,-bs),new V(0,Vi,bs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,Ja,Qa),this._renderer.xr.enabled=el,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:oa,format:Nn,colorSpace:Ai,depthBuffer:!1},s=$u(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(r)),this._blurMaterial=Nx(r,e,t)}return s}_compileMaterial(e){const t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,i,s){const a=new cn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Xu),u.toneMapping=Si,u.autoClear=!1;const p=new yr({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),v=new We(new ft,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Xu),x=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;uo(s,w*y,d>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Gs||e.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qu[(s-r-1)%qu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new We(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qi-1),x=r/v,m=isFinite(r)?1+Math.floor(u*x):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const d=[];let w=0;for(let P=0;P<qi;++P){const z=P/x,b=Math.exp(-z*z/2);d.push(b),P===0?w+=b:P<m&&(w+=2*b)}for(let P=0;P<d.length;P++)d[P]=d[P]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-i;const A=this._sizeLods[s],I=3*A*(s>y-Ps?s-y+Ps:0),L=4*(this._cubeSize-A);uo(t,I,L,3*A,2*A),l.setRenderTarget(t),l.render(f,Ka)}}function Ix(n){const e=[],t=[],i=[];let s=n;const r=n-Ps+1+Wu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ps?l=Wu[o-n+Ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,x=3,m=2,d=1,w=new Float32Array(x*v*p),y=new Float32Array(m*v*p),A=new Float32Array(d*v*p);for(let L=0;L<p;L++){const P=L%3*2/3-1,z=L>2?0:-1,b=[P,z,0,P+2/3,z,0,P+2/3,z+1,0,P,z,0,P+2/3,z+1,0,P,z+1,0];w.set(b,x*v*L),y.set(h,m*v*L);const M=[L,L,L,L,L,L];A.set(M,d*v*L)}const I=new zn;I.setAttribute("position",new Mn(w,x)),I.setAttribute("uv",new Mn(y,m)),I.setAttribute("faceIndex",new Mn(A,d)),e.push(I),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $u(n,e,t){const i=new Qi(n,e,t);return i.texture.mapping=ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Nx(n,e,t){const i=new Float32Array(qi),s=new V(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ju(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ku(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function Ox(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sl||l===Ml,u=l===Gs||l===Ws;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Yu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Yu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Fx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Yl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bx(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const x=p[v];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let y=0,A=w.length;y<A;y+=3){const I=w[y+0],L=w[y+1],P=w[y+2];h.push(I,L,L,P,P,I)}}else if(v!==void 0){const w=v.array;x=v.version;for(let y=0,A=w.length/3-1;y<A;y+=3){const I=y+0,L=y+1,P=y+2;h.push(I,L,L,P,P,I)}}else return;const m=new(Yh(h)?Jh:Zh)(h,1);m.version=x;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function zx(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*o),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,h*o,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<v;m++)this.render(h[m]/o,p[m]);else{x.multiDrawElementsWEBGL(i,p,0,r,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];t.update(m,i,1)}}function f(h,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,x,0,v);let d=0;for(let w=0;w<v;w++)d+=p[w];for(let w=0;w<x.length;w++)t.update(d,i,x[w])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Hx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kx(n,e,t){const i=new WeakMap,s=new wt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let A=0;v===!0&&(A=1),x===!0&&(A=2),m===!0&&(A=3);let I=a.attributes.position.count*A,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*L*4*f),z=new jh(P,I,L,f);z.type=vi,z.needsUpdate=!0;const b=A*4;for(let D=0;D<f;D++){const U=d[D],k=w[D],te=y[D],re=I*L*4*D;for(let j=0;j<U.count;j++){const se=j*b;v===!0&&(s.fromBufferAttribute(U,j),P[re+se+0]=s.x,P[re+se+1]=s.y,P[re+se+2]=s.z,P[re+se+3]=0),x===!0&&(s.fromBufferAttribute(k,j),P[re+se+4]=s.x,P[re+se+5]=s.y,P[re+se+6]=s.z,P[re+se+7]=0),m===!0&&(s.fromBufferAttribute(te,j),P[re+se+8]=s.x,P[re+se+9]=s.y,P[re+se+10]=s.z,P[re+se+11]=te.itemSize===4?s.w:1)}}h={count:f,texture:z,size:new Ne(I,L)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Vx(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class sd extends $t{constructor(e,t,i,s,r,o,a,l,c,u=zs){if(u!==zs&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zs&&(i=Xs),i===void 0&&u===Ys&&(i=qs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rd=new $t,od=new sd(1,1);od.compareFunction=qh;const ad=new jh,ld=new R_,cd=new td,Zu=[],Ju=[],Qu=new Float32Array(16),ef=new Float32Array(9),tf=new Float32Array(4);function Zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function la(n,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function Yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;tf.set(i),n.uniformMatrix2fv(this.addr,!1,tf),Et(t,i)}}function $x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;ef.set(i),n.uniformMatrix3fv(this.addr,!1,ef),Et(t,i)}}function jx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;Qu.set(i),n.uniformMatrix4fv(this.addr,!1,Qu),Et(t,i)}}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function eS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function iS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function sS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?od:rd;t.setTexture2D(e||r,s)}function rS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ld,s)}function oS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||cd,s)}function aS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ad,s)}function lS(n){switch(n){case 5126:return Gx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return Yx;case 35675:return $x;case 35676:return jx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35679:case 36299:case 36307:return rS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return aS}}function cS(n,e){n.uniform1fv(this.addr,e)}function uS(n,e){const t=Zs(e,this.size,2);n.uniform2fv(this.addr,t)}function fS(n,e){const t=Zs(e,this.size,3);n.uniform3fv(this.addr,t)}function hS(n,e){const t=Zs(e,this.size,4);n.uniform4fv(this.addr,t)}function dS(n,e){const t=Zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pS(n,e){const t=Zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mS(n,e){const t=Zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gS(n,e){n.uniform1iv(this.addr,e)}function _S(n,e){n.uniform2iv(this.addr,e)}function vS(n,e){n.uniform3iv(this.addr,e)}function xS(n,e){n.uniform4iv(this.addr,e)}function SS(n,e){n.uniform1uiv(this.addr,e)}function MS(n,e){n.uniform2uiv(this.addr,e)}function yS(n,e){n.uniform3uiv(this.addr,e)}function ES(n,e){n.uniform4uiv(this.addr,e)}function bS(n,e,t){const i=this.cache,s=e.length,r=la(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||rd,r[o])}function TS(n,e,t){const i=this.cache,s=e.length,r=la(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ld,r[o])}function AS(n,e,t){const i=this.cache,s=e.length,r=la(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||cd,r[o])}function wS(n,e,t){const i=this.cache,s=e.length,r=la(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ad,r[o])}function RS(n){switch(n){case 5126:return cS;case 35664:return uS;case 35665:return fS;case 35666:return hS;case 35674:return dS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return vS;case 35669:case 35673:return xS;case 5125:return SS;case 36294:return MS;case 36295:return yS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return wS}}class CS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lS(t.type)}}class PS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RS(t.type)}}class LS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function nf(n,e){n.seq.push(e),n.map[e.id]=e}function DS(n,e,t){const i=n.name,s=i.length;for(tl.lastIndex=0;;){const r=tl.exec(i),o=tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nf(t,c===void 0?new CS(a,n,e):new PS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new LS(a),nf(t,f)),t=f}}}class yo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);DS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function sf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const US=37297;let IS=0;function NS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function OS(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===Bo&&t===Fo?i="LinearDisplayP3ToLinearSRGB":e===Fo&&t===Bo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ai:case aa:return[i,"LinearTransferOETF"];case Rn:case ql:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+NS(n.getShaderSource(e),o)}else return s}function FS(n,e){const t=OS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function BS(n,e){let t;switch(e){case Xg:t="Linear";break;case qg:t="Reinhard";break;case Yg:t="OptimizedCineon";break;case $g:t="ACESFilmic";break;case Kg:t="AgX";break;case Zg:t="Neutral";break;case jg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function HS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function dr(n){return n!==""}function of(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function af(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(VS,WS)}const GS=new Map;function WS(n,e){let t=Xe[e];if(t===void 0){const i=GS.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const XS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lf(n){return n.replace(XS,qS)}function qS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function YS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Oh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function $S(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function KS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case Gg:e="ENVMAP_BLENDING_MIX";break;case Wg:e="ENVMAP_BLENDING_ADD";break}return e}function ZS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function JS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=YS(t),c=$S(t),u=jS(t),f=KS(t),h=ZS(t),p=zS(t),v=HS(r),x=s.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(dr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(dr).join(`
`),d.length>0&&(d+=`
`)):(m=[cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),d=[cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Si?BS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,FS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Al(o),o=of(o,t),o=af(o,t),a=Al(a),a=of(a,t),a=af(a,t),o=lf(o),a=lf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=w+m+o,A=w+d+a,I=sf(s,s.VERTEX_SHADER,y),L=sf(s,s.FRAGMENT_SHADER,A);s.attachShader(x,I),s.attachShader(x,L),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(D){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(I).trim(),te=s.getShaderInfoLog(L).trim();let re=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,L);else{const se=rf(s,I,"vertex"),$=rf(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+se+`
`+$)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||te==="")&&(j=!1);j&&(D.diagnostics={runnable:re,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:te,prefix:d}})}s.deleteShader(I),s.deleteShader(L),z=new yo(s,x),b=kS(s,x)}let z;this.getUniforms=function(){return z===void 0&&P(this),z};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,US)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=L,this}let QS=0;class eM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tM(e),t.set(e,i)),i}}class tM{constructor(e){this.id=QS++,this.code=e,this.usedTimes=0}}function nM(n,e,t,i,s,r,o){const a=new Kl,l=new eM,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,D,U,k){const te=U.fog,re=k.geometry,j=b.isMeshStandardMaterial?U.environment:null,se=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),$=se&&se.mapping===ra?se.image.height:null,Se=v[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Ee=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,be=Ee!==void 0?Ee.length:0;let Oe=0;re.morphAttributes.position!==void 0&&(Oe=1),re.morphAttributes.normal!==void 0&&(Oe=2),re.morphAttributes.color!==void 0&&(Oe=3);let Ye,le,me,Te;if(Se){const Ke=Dn[Se];Ye=Ke.vertexShader,le=Ke.fragmentShader}else Ye=b.vertexShader,le=b.fragmentShader,l.update(b),me=l.getVertexShaderID(b),Te=l.getFragmentShaderID(b);const xe=n.getRenderTarget(),ke=k.isInstancedMesh===!0,ne=k.isBatchedMesh===!0,ie=!!b.map,R=!!b.matcap,S=!!se,C=!!b.aoMap,F=!!b.lightMap,G=!!b.bumpMap,Y=!!b.normalMap,K=!!b.displacementMap,oe=!!b.emissiveMap,fe=!!b.metalnessMap,E=!!b.roughnessMap,g=b.anisotropy>0,N=b.clearcoat>0,O=b.dispersion>0,B=b.iridescence>0,q=b.sheen>0,de=b.transmission>0,ue=g&&!!b.anisotropyMap,ae=N&&!!b.clearcoatMap,Me=N&&!!b.clearcoatNormalMap,ce=N&&!!b.clearcoatRoughnessMap,_e=B&&!!b.iridescenceMap,Re=B&&!!b.iridescenceThicknessMap,Ce=q&&!!b.sheenColorMap,ge=q&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,Pe=!!b.specularColorMap,Je=!!b.specularIntensityMap,_=de&&!!b.transmissionMap,Q=de&&!!b.thicknessMap,X=!!b.gradientMap,Z=!!b.alphaMap,he=b.alphaTest>0,Le=!!b.alphaHash,ze=!!b.extensions;let lt=Si;b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(lt=n.toneMapping);const pt={shaderID:Se,shaderType:b.type,shaderName:b.name,vertexShader:Ye,fragmentShader:le,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ne,batchingColor:ne&&k._colorsTexture!==null,instancing:ke,instancingColor:ke&&k.instanceColor!==null,instancingMorph:ke&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ai,alphaToCoverage:!!b.alphaToCoverage,map:ie,matcap:R,envMap:S,envMapMode:S&&se.mapping,envMapCubeUVHeight:$,aoMap:C,lightMap:F,bumpMap:G,normalMap:Y,displacementMap:h&&K,emissiveMap:oe,normalMapObjectSpace:Y&&b.normalMapType===f_,normalMapTangentSpace:Y&&b.normalMapType===Xh,metalnessMap:fe,roughnessMap:E,anisotropy:g,anisotropyMap:ue,clearcoat:N,clearcoatMap:ae,clearcoatNormalMap:Me,clearcoatRoughnessMap:ce,dispersion:O,iridescence:B,iridescenceMap:_e,iridescenceThicknessMap:Re,sheen:q,sheenColorMap:Ce,sheenRoughnessMap:ge,specularMap:Ae,specularColorMap:Pe,specularIntensityMap:Je,transmission:de,transmissionMap:_,thicknessMap:Q,gradientMap:X,opaque:b.transparent===!1&&b.blending===Bs&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:he,alphaHash:Le,combine:b.combine,mapUv:ie&&x(b.map.channel),aoMapUv:C&&x(b.aoMap.channel),lightMapUv:F&&x(b.lightMap.channel),bumpMapUv:G&&x(b.bumpMap.channel),normalMapUv:Y&&x(b.normalMap.channel),displacementMapUv:K&&x(b.displacementMap.channel),emissiveMapUv:oe&&x(b.emissiveMap.channel),metalnessMapUv:fe&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:ue&&x(b.anisotropyMap.channel),clearcoatMapUv:ae&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(b.sheenRoughnessMap.channel),specularMapUv:Ae&&x(b.specularMap.channel),specularColorMapUv:Pe&&x(b.specularColorMap.channel),specularIntensityMapUv:Je&&x(b.specularIntensityMap.channel),transmissionMapUv:_&&x(b.transmissionMap.channel),thicknessMapUv:Q&&x(b.thicknessMap.channel),alphaMapUv:Z&&x(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Y||g),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!re.attributes.uv&&(ie||Z),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:ie&&b.map.isVideoTexture===!0&&rt.getTransfer(b.map.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qn,flipSided:b.side===Zt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ze&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(w(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),b.push(a.mask)}function A(b){const M=v[b.type];let D;if(M){const U=Dn[M];D=H_.clone(U.uniforms)}else D=b.uniforms;return D}function I(b,M){let D;for(let U=0,k=u.length;U<k;U++){const te=u[U];if(te.cacheKey===M){D=te,++D.usedTimes;break}}return D===void 0&&(D=new JS(n,M,b,r),u.push(D)),D}function L(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:A,acquireProgram:I,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:z}}function iM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function sM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function uf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ff(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,p,v,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,v,x,m){const d=o(f,h,p,v,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,h,p,v,x,m){const d=o(f,h,p,v,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||sM),i.length>1&&i.sort(h||uf),s.length>1&&s.sort(h||uf)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function rM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ff,n.set(i,[o])):s>=r.length?(o=new ff,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function oM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new je};break;case"SpotLight":t={position:new V,direction:new V,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function aM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let lM=0;function cM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function uM(n){const e=new oM,t=aM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new vt,o=new vt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,v=0,x=0,m=0,d=0,w=0,y=0,A=0,I=0,L=0,P=0;c.sort(cM);for(let b=0,M=c.length;b<M;b++){const D=c[b],U=D.color,k=D.intensity,te=D.distance,re=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*k,f+=U.g*k,h+=U.b*k;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],k);P++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const se=D.shadow,$=t.get(D);$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=D.shadow.matrix,w++}i.directional[p]=j,p++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(U).multiplyScalar(k),j.distance=te,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[x]=j;const se=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,se.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[x]=se.matrix,D.castShadow){const $=t.get(D);$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=re,A++}x++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(U).multiplyScalar(k),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const se=D.shadow,$=t.get(D);$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,$.shadowCameraNear=se.camera.near,$.shadowCameraFar=se.camera.far,i.pointShadow[v]=$,i.pointShadowMap[v]=re,i.pointShadowMatrix[v]=D.shadow.matrix,y++}i.point[v]=j,v++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(k),j.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[d]=j,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const z=i.hash;(z.directionalLength!==p||z.pointLength!==v||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==d||z.numDirectionalShadows!==w||z.numPointShadows!==y||z.numSpotShadows!==A||z.numSpotMaps!==I||z.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,z.directionalLength=p,z.pointLength=v,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=d,z.numDirectionalShadows=w,z.numPointShadows=y,z.numSpotShadows=A,z.numSpotMaps=I,z.numLightProbes=P,i.version=lM++)}function l(c,u){let f=0,h=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const y=c[d];if(y.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(y.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function hf(n){const e=new uM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new hf(n),e.set(s,[a])):r>=o.length?(a=new hf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class hM extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dM extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gM(n,e,t){let i=new Zl;const s=new Ne,r=new Ne,o=new wt,a=new hM({depthPacking:u_}),l=new dM,c={},u=t.maxTextureSize,f={[Ei]:Zt,[Zt]:Ei,[Qn]:Qn},h=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new zn;v.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new We(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let d=this.type;this.render=function(L,P,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(xi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=d!==$n&&this.type===$n,te=d===$n&&this.type!==$n;for(let re=0,j=L.length;re<j;re++){const se=L[re],$=se.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const Se=$.getFrameExtents();if(s.multiply(Se),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Se.x),s.x=r.x*Se.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Se.y),s.y=r.y*Se.y,$.mapSize.y=r.y)),$.map===null||k===!0||te===!0){const be=this.type!==$n?{minFilter:hn,magFilter:hn}:{};$.map!==null&&$.map.dispose(),$.map=new Qi(s.x,s.y,be),$.map.texture.name=se.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const Ee=$.getViewportCount();for(let be=0;be<Ee;be++){const Oe=$.getViewport(be);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),U.viewport(o),$.updateMatrices(se,be),i=$.getFrustum(),A(P,z,$.camera,se,this.type)}$.isPointLightShadow!==!0&&this.type===$n&&w($,z),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,D)};function w(L,P){const z=e.update(x);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Qi(s.x,s.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,z,h,x,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,z,p,x,null)}function y(L,P,z,b){let M=null;const D=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)M=D;else if(M=z.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const U=M.uuid,k=P.uuid;let te=c[U];te===void 0&&(te={},c[U]=te);let re=te[k];re===void 0&&(re=M.clone(),te[k]=re,P.addEventListener("dispose",I)),M=re}if(M.visible=P.visible,M.wireframe=P.wireframe,b===$n?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=z}return M}function A(L,P,z,b,M){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===$n)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const k=e.update(L),te=L.material;if(Array.isArray(te)){const re=k.groups;for(let j=0,se=re.length;j<se;j++){const $=re[j],Se=te[$.materialIndex];if(Se&&Se.visible){const Ee=y(L,Se,b,M);L.onBeforeShadow(n,L,P,z,k,Ee,$),n.renderBufferDirect(z,null,k,Ee,L,$),L.onAfterShadow(n,L,P,z,k,Ee,$)}}}else if(te.visible){const re=y(L,te,b,M);L.onBeforeShadow(n,L,P,z,k,re,null),n.renderBufferDirect(z,null,k,re,L,null),L.onAfterShadow(n,L,P,z,k,re,null)}}const U=L.children;for(let k=0,te=U.length;k<te;k++)A(U[k],P,z,b,M)}function I(L){L.target.removeEventListener("dispose",I);for(const z in c){const b=c[z],M=L.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function _M(n){function e(){let _=!1;const Q=new wt;let X=null;const Z=new wt(0,0,0,0);return{setMask:function(he){X!==he&&!_&&(n.colorMask(he,he,he,he),X=he)},setLocked:function(he){_=he},setClear:function(he,Le,ze,lt,pt){pt===!0&&(he*=lt,Le*=lt,ze*=lt),Q.set(he,Le,ze,lt),Z.equals(Q)===!1&&(n.clearColor(he,Le,ze,lt),Z.copy(Q))},reset:function(){_=!1,X=null,Z.set(-1,0,0,0)}}}function t(){let _=!1,Q=null,X=null,Z=null;return{setTest:function(he){he?Te(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(he){Q!==he&&!_&&(n.depthMask(he),Q=he)},setFunc:function(he){if(X!==he){switch(he){case Og:n.depthFunc(n.NEVER);break;case Fg:n.depthFunc(n.ALWAYS);break;case Bg:n.depthFunc(n.LESS);break;case Io:n.depthFunc(n.LEQUAL);break;case zg:n.depthFunc(n.EQUAL);break;case Hg:n.depthFunc(n.GEQUAL);break;case kg:n.depthFunc(n.GREATER);break;case Vg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=he}},setLocked:function(he){_=he},setClear:function(he){Z!==he&&(n.clearDepth(he),Z=he)},reset:function(){_=!1,Q=null,X=null,Z=null}}}function i(){let _=!1,Q=null,X=null,Z=null,he=null,Le=null,ze=null,lt=null,pt=null;return{setTest:function(Ke){_||(Ke?Te(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(Ke){Q!==Ke&&!_&&(n.stencilMask(Ke),Q=Ke)},setFunc:function(Ke,mt,gt){(X!==Ke||Z!==mt||he!==gt)&&(n.stencilFunc(Ke,mt,gt),X=Ke,Z=mt,he=gt)},setOp:function(Ke,mt,gt){(Le!==Ke||ze!==mt||lt!==gt)&&(n.stencilOp(Ke,mt,gt),Le=Ke,ze=mt,lt=gt)},setLocked:function(Ke){_=Ke},setClear:function(Ke){pt!==Ke&&(n.clearStencil(Ke),pt=Ke)},reset:function(){_=!1,Q=null,X=null,Z=null,he=null,Le=null,ze=null,lt=null,pt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,v=!1,x=null,m=null,d=null,w=null,y=null,A=null,I=null,L=new je(0,0,0),P=0,z=!1,b=null,M=null,D=null,U=null,k=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,j=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(se)[1]),re=j>=1):se.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),re=j>=2);let $=null,Se={};const Ee=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),Oe=new wt().fromArray(Ee),Ye=new wt().fromArray(be);function le(_,Q,X,Z){const he=new Uint8Array(4),Le=n.createTexture();n.bindTexture(_,Le),n.texParameteri(_,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(_,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<X;ze++)_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Q+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return Le}const me={};me[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Te(n.DEPTH_TEST),r.setFunc(Io),G(!1),Y(Yc),Te(n.CULL_FACE),C(xi);function Te(_){c[_]!==!0&&(n.enable(_),c[_]=!0)}function xe(_){c[_]!==!1&&(n.disable(_),c[_]=!1)}function ke(_,Q){return u[_]!==Q?(n.bindFramebuffer(_,Q),u[_]=Q,_===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Q),_===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function ne(_,Q){let X=h,Z=!1;if(_){X=f.get(Q),X===void 0&&(X=[],f.set(Q,X));const he=_.textures;if(X.length!==he.length||X[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,ze=he.length;Le<ze;Le++)X[Le]=n.COLOR_ATTACHMENT0+Le;X.length=he.length,Z=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Z=!0);Z&&n.drawBuffers(X)}function ie(_){return p!==_?(n.useProgram(_),p=_,!0):!1}const R={[Xi]:n.FUNC_ADD,[xg]:n.FUNC_SUBTRACT,[Sg]:n.FUNC_REVERSE_SUBTRACT};R[Mg]=n.MIN,R[yg]=n.MAX;const S={[Eg]:n.ZERO,[bg]:n.ONE,[Tg]:n.SRC_COLOR,[vl]:n.SRC_ALPHA,[Lg]:n.SRC_ALPHA_SATURATE,[Cg]:n.DST_COLOR,[wg]:n.DST_ALPHA,[Ag]:n.ONE_MINUS_SRC_COLOR,[xl]:n.ONE_MINUS_SRC_ALPHA,[Pg]:n.ONE_MINUS_DST_COLOR,[Rg]:n.ONE_MINUS_DST_ALPHA,[Dg]:n.CONSTANT_COLOR,[Ug]:n.ONE_MINUS_CONSTANT_COLOR,[Ig]:n.CONSTANT_ALPHA,[Ng]:n.ONE_MINUS_CONSTANT_ALPHA};function C(_,Q,X,Z,he,Le,ze,lt,pt,Ke){if(_===xi){v===!0&&(xe(n.BLEND),v=!1);return}if(v===!1&&(Te(n.BLEND),v=!0),_!==vg){if(_!==x||Ke!==z){if((m!==Xi||y!==Xi)&&(n.blendEquation(n.FUNC_ADD),m=Xi,y=Xi),Ke)switch(_){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.ONE,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}d=null,w=null,A=null,I=null,L.set(0,0,0),P=0,x=_,z=Ke}return}he=he||Q,Le=Le||X,ze=ze||Z,(Q!==m||he!==y)&&(n.blendEquationSeparate(R[Q],R[he]),m=Q,y=he),(X!==d||Z!==w||Le!==A||ze!==I)&&(n.blendFuncSeparate(S[X],S[Z],S[Le],S[ze]),d=X,w=Z,A=Le,I=ze),(lt.equals(L)===!1||pt!==P)&&(n.blendColor(lt.r,lt.g,lt.b,pt),L.copy(lt),P=pt),x=_,z=!1}function F(_,Q){_.side===Qn?xe(n.CULL_FACE):Te(n.CULL_FACE);let X=_.side===Zt;Q&&(X=!X),G(X),_.blending===Bs&&_.transparent===!1?C(xi):C(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),r.setFunc(_.depthFunc),r.setTest(_.depthTest),r.setMask(_.depthWrite),s.setMask(_.colorWrite);const Z=_.stencilWrite;o.setTest(Z),Z&&(o.setMask(_.stencilWriteMask),o.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),o.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),oe(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(_){b!==_&&(_?n.frontFace(n.CW):n.frontFace(n.CCW),b=_)}function Y(_){_!==gg?(Te(n.CULL_FACE),_!==M&&(_===Yc?n.cullFace(n.BACK):_===_g?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),M=_}function K(_){_!==D&&(re&&n.lineWidth(_),D=_)}function oe(_,Q,X){_?(Te(n.POLYGON_OFFSET_FILL),(U!==Q||k!==X)&&(n.polygonOffset(Q,X),U=Q,k=X)):xe(n.POLYGON_OFFSET_FILL)}function fe(_){_?Te(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function E(_){_===void 0&&(_=n.TEXTURE0+te-1),$!==_&&(n.activeTexture(_),$=_)}function g(_,Q,X){X===void 0&&($===null?X=n.TEXTURE0+te-1:X=$);let Z=Se[X];Z===void 0&&(Z={type:void 0,texture:void 0},Se[X]=Z),(Z.type!==_||Z.texture!==Q)&&($!==X&&(n.activeTexture(X),$=X),n.bindTexture(_,Q||me[_]),Z.type=_,Z.texture=Q)}function N(){const _=Se[$];_!==void 0&&_.type!==void 0&&(n.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function B(){try{n.compressedTexImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Me(){try{n.texStorage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ce(_){Oe.equals(_)===!1&&(n.scissor(_.x,_.y,_.z,_.w),Oe.copy(_))}function ge(_){Ye.equals(_)===!1&&(n.viewport(_.x,_.y,_.z,_.w),Ye.copy(_))}function Ae(_,Q){let X=l.get(Q);X===void 0&&(X=new WeakMap,l.set(Q,X));let Z=X.get(_);Z===void 0&&(Z=n.getUniformBlockIndex(Q,_.name),X.set(_,Z))}function Pe(_,Q){const Z=l.get(Q).get(_);a.get(Q)!==Z&&(n.uniformBlockBinding(Q,Z,_.__bindingPointIndex),a.set(Q,Z))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,Se={},u={},f=new WeakMap,h=[],p=null,v=!1,x=null,m=null,d=null,w=null,y=null,A=null,I=null,L=new je(0,0,0),P=0,z=!1,b=null,M=null,D=null,U=null,k=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Te,disable:xe,bindFramebuffer:ke,drawBuffers:ne,useProgram:ie,setBlending:C,setMaterial:F,setFlipSided:G,setCullFace:Y,setLineWidth:K,setPolygonOffset:oe,setScissorTest:fe,activeTexture:E,bindTexture:g,unbindTexture:N,compressedTexImage2D:O,compressedTexImage3D:B,texImage2D:_e,texImage3D:Re,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:Me,texStorage3D:ce,texSubImage2D:q,texSubImage3D:de,compressedTexSubImage2D:ue,compressedTexSubImage3D:ae,scissor:Ce,viewport:ge,reset:Je}}function vM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,g){return p?new OffscreenCanvas(E,g):Ho("canvas")}function x(E,g,N){let O=1;const B=fe(E);if((B.width>N||B.height>N)&&(O=N/Math.max(B.width,B.height)),O<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(O*B.width),de=Math.floor(O*B.height);f===void 0&&(f=v(q,de));const ue=g?v(q,de):f;return ue.width=q,ue.height=de,ue.getContext("2d").drawImage(E,0,0,q,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+q+"x"+de+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==hn&&E.minFilter!==_n}function d(E){n.generateMipmap(E)}function w(E,g,N,O,B=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=g;if(g===n.RED&&(N===n.FLOAT&&(q=n.R32F),N===n.HALF_FLOAT&&(q=n.R16F),N===n.UNSIGNED_BYTE&&(q=n.R8)),g===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.R8UI),N===n.UNSIGNED_SHORT&&(q=n.R16UI),N===n.UNSIGNED_INT&&(q=n.R32UI),N===n.BYTE&&(q=n.R8I),N===n.SHORT&&(q=n.R16I),N===n.INT&&(q=n.R32I)),g===n.RG&&(N===n.FLOAT&&(q=n.RG32F),N===n.HALF_FLOAT&&(q=n.RG16F),N===n.UNSIGNED_BYTE&&(q=n.RG8)),g===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RG8UI),N===n.UNSIGNED_SHORT&&(q=n.RG16UI),N===n.UNSIGNED_INT&&(q=n.RG32UI),N===n.BYTE&&(q=n.RG8I),N===n.SHORT&&(q=n.RG16I),N===n.INT&&(q=n.RG32I)),g===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),g===n.RGBA){const de=B?Oo:rt.getTransfer(O);N===n.FLOAT&&(q=n.RGBA32F),N===n.HALF_FLOAT&&(q=n.RGBA16F),N===n.UNSIGNED_BYTE&&(q=de===dt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(E,g){let N;return E?g===null||g===Xs||g===qs?N=n.DEPTH24_STENCIL8:g===vi?N=n.DEPTH32F_STENCIL8:g===No&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Xs||g===qs?N=n.DEPTH_COMPONENT24:g===vi?N=n.DEPTH_COMPONENT32F:g===No&&(N=n.DEPTH_COMPONENT16),N}function A(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==hn&&E.minFilter!==_n?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function I(E){const g=E.target;g.removeEventListener("dispose",I),P(g),g.isVideoTexture&&u.delete(g)}function L(E){const g=E.target;g.removeEventListener("dispose",L),b(g)}function P(E){const g=i.get(E);if(g.__webglInit===void 0)return;const N=E.source,O=h.get(N);if(O){const B=O[g.__cacheKey];B.usedTimes--,B.usedTimes===0&&z(E),Object.keys(O).length===0&&h.delete(N)}i.remove(E)}function z(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const N=E.source,O=h.get(N);delete O[g.__cacheKey],o.memory.textures--}function b(E){const g=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let B=0;B<g.__webglFramebuffer[O].length;B++)n.deleteFramebuffer(g.__webglFramebuffer[O][B]);else n.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)n.deleteFramebuffer(g.__webglFramebuffer[O]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=E.textures;for(let O=0,B=N.length;O<B;O++){const q=i.get(N[O]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(N[O])}i.remove(E)}let M=0;function D(){M=0}function U(){const E=M;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),M+=1,E}function k(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function te(E,g){const N=i.get(E);if(E.isVideoTexture&&K(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const O=E.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(N,E,g);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+g)}function re(E,g){const N=i.get(E);if(E.version>0&&N.__version!==E.version){Ye(N,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+g)}function j(E,g){const N=i.get(E);if(E.version>0&&N.__version!==E.version){Ye(N,E,g);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+g)}function se(E,g){const N=i.get(E);if(E.version>0&&N.__version!==E.version){le(N,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+g)}const $={[yl]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[El]:n.MIRRORED_REPEAT},Se={[hn]:n.NEAREST,[Jg]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Ee={[h_]:n.NEVER,[v_]:n.ALWAYS,[d_]:n.LESS,[qh]:n.LEQUAL,[p_]:n.EQUAL,[__]:n.GEQUAL,[m_]:n.GREATER,[g_]:n.NOTEQUAL};function be(E,g){if(g.type===vi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===_n||g.magFilter===Ta||g.magFilter===Gr||g.magFilter===$i||g.minFilter===_n||g.minFilter===Ta||g.minFilter===Gr||g.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,$[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,$[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,$[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Se[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===hn||g.minFilter!==Gr&&g.minFilter!==$i||g.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Oe(E,g){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",I));const O=g.source;let B=h.get(O);B===void 0&&(B={},h.set(O,B));const q=k(g);if(q!==E.__cacheKey){B[q]===void 0&&(B[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),B[q].usedTimes++;const de=B[E.__cacheKey];de!==void 0&&(B[E.__cacheKey].usedTimes--,de.usedTimes===0&&z(g)),E.__cacheKey=q,E.__webglTexture=B[q].texture}return N}function Ye(E,g,N){let O=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=n.TEXTURE_3D);const B=Oe(E,g),q=g.source;t.bindTexture(O,E.__webglTexture,n.TEXTURE0+N);const de=i.get(q);if(q.version!==de.__version||B===!0){t.activeTexture(n.TEXTURE0+N);const ue=rt.getPrimaries(rt.workingColorSpace),ae=g.colorSpace===mi?null:rt.getPrimaries(g.colorSpace),Me=g.colorSpace===mi||ue===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ce=x(g.image,!1,s.maxTextureSize);ce=oe(g,ce);const _e=r.convert(g.format,g.colorSpace),Re=r.convert(g.type);let Ce=w(g.internalFormat,_e,Re,g.colorSpace,g.isVideoTexture);be(O,g);let ge;const Ae=g.mipmaps,Pe=g.isVideoTexture!==!0,Je=de.__version===void 0||B===!0,_=q.dataReady,Q=A(g,ce);if(g.isDepthTexture)Ce=y(g.format===Ys,g.type),Je&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,Ce,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ce.width,ce.height,0,_e,Re,null));else if(g.isDataTexture)if(Ae.length>0){Pe&&Je&&t.texStorage2D(n.TEXTURE_2D,Q,Ce,Ae[0].width,Ae[0].height);for(let X=0,Z=Ae.length;X<Z;X++)ge=Ae[X],Pe?_&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,_e,Re,ge.data):t.texImage2D(n.TEXTURE_2D,X,Ce,ge.width,ge.height,0,_e,Re,ge.data);g.generateMipmaps=!1}else Pe?(Je&&t.texStorage2D(n.TEXTURE_2D,Q,Ce,ce.width,ce.height),_&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,_e,Re,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ce.width,ce.height,0,_e,Re,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Ce,Ae[0].width,Ae[0].height,ce.depth);for(let X=0,Z=Ae.length;X<Z;X++)if(ge=Ae[X],g.format!==Nn)if(_e!==null)if(Pe){if(_)if(g.layerUpdates.size>0){for(const he of g.layerUpdates){const Le=ge.width*ge.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,he,ge.width,ge.height,1,_e,ge.data.slice(Le*he,Le*(he+1)),0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ce.depth,_e,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ce,ge.width,ge.height,ce.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?_&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ce.depth,_e,Re,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ce,ge.width,ge.height,ce.depth,0,_e,Re,ge.data)}else{Pe&&Je&&t.texStorage2D(n.TEXTURE_2D,Q,Ce,Ae[0].width,Ae[0].height);for(let X=0,Z=Ae.length;X<Z;X++)ge=Ae[X],g.format!==Nn?_e!==null?Pe?_&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,_e,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?_&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,_e,Re,ge.data):t.texImage2D(n.TEXTURE_2D,X,Ce,ge.width,ge.height,0,_e,Re,ge.data)}else if(g.isDataArrayTexture)if(Pe){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Ce,ce.width,ce.height,ce.depth),_)if(g.layerUpdates.size>0){let X;switch(Re){case n.UNSIGNED_BYTE:switch(_e){case n.ALPHA:X=1;break;case n.LUMINANCE:X=1;break;case n.LUMINANCE_ALPHA:X=2;break;case n.RGB:X=3;break;case n.RGBA:X=4;break;default:throw new Error(`Unknown texel size for format ${_e}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:X=1;break;default:throw new Error(`Unknown texel size for type ${Re}.`)}const Z=ce.width*ce.height*X;for(const he of g.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,ce.width,ce.height,1,_e,Re,ce.data.slice(Z*he,Z*(he+1)));g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,Re,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ce.width,ce.height,ce.depth,0,_e,Re,ce.data);else if(g.isData3DTexture)Pe?(Je&&t.texStorage3D(n.TEXTURE_3D,Q,Ce,ce.width,ce.height,ce.depth),_&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,Re,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ce.width,ce.height,ce.depth,0,_e,Re,ce.data);else if(g.isFramebufferTexture){if(Je)if(Pe)t.texStorage2D(n.TEXTURE_2D,Q,Ce,ce.width,ce.height);else{let X=ce.width,Z=ce.height;for(let he=0;he<Q;he++)t.texImage2D(n.TEXTURE_2D,he,Ce,X,Z,0,_e,Re,null),X>>=1,Z>>=1}}else if(Ae.length>0){if(Pe&&Je){const X=fe(Ae[0]);t.texStorage2D(n.TEXTURE_2D,Q,Ce,X.width,X.height)}for(let X=0,Z=Ae.length;X<Z;X++)ge=Ae[X],Pe?_&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,_e,Re,ge):t.texImage2D(n.TEXTURE_2D,X,Ce,_e,Re,ge);g.generateMipmaps=!1}else if(Pe){if(Je){const X=fe(ce);t.texStorage2D(n.TEXTURE_2D,Q,Ce,X.width,X.height)}_&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Re,ce)}else t.texImage2D(n.TEXTURE_2D,0,Ce,_e,Re,ce);m(g)&&d(O),de.__version=q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function le(E,g,N){if(g.image.length!==6)return;const O=Oe(E,g),B=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const q=i.get(B);if(B.version!==q.__version||O===!0){t.activeTexture(n.TEXTURE0+N);const de=rt.getPrimaries(rt.workingColorSpace),ue=g.colorSpace===mi?null:rt.getPrimaries(g.colorSpace),ae=g.colorSpace===mi||de===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Me=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,_e=[];for(let Z=0;Z<6;Z++)!Me&&!ce?_e[Z]=x(g.image[Z],!0,s.maxCubemapSize):_e[Z]=ce?g.image[Z].image:g.image[Z],_e[Z]=oe(g,_e[Z]);const Re=_e[0],Ce=r.convert(g.format,g.colorSpace),ge=r.convert(g.type),Ae=w(g.internalFormat,Ce,ge,g.colorSpace),Pe=g.isVideoTexture!==!0,Je=q.__version===void 0||O===!0,_=B.dataReady;let Q=A(g,Re);be(n.TEXTURE_CUBE_MAP,g);let X;if(Me){Pe&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,Ae,Re.width,Re.height);for(let Z=0;Z<6;Z++){X=_e[Z].mipmaps;for(let he=0;he<X.length;he++){const Le=X[he];g.format!==Nn?Ce!==null?Pe?_&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,Le.width,Le.height,Ce,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Ae,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?_&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,Le.width,Le.height,Ce,ge,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Ae,Le.width,Le.height,0,Ce,ge,Le.data)}}}else{if(X=g.mipmaps,Pe&&Je){X.length>0&&Q++;const Z=fe(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,Ae,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ce){Pe?_&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_e[Z].width,_e[Z].height,Ce,ge,_e[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ae,_e[Z].width,_e[Z].height,0,Ce,ge,_e[Z].data);for(let he=0;he<X.length;he++){const ze=X[he].image[Z].image;Pe?_&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,ze.width,ze.height,Ce,ge,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Ae,ze.width,ze.height,0,Ce,ge,ze.data)}}else{Pe?_&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,ge,_e[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ae,Ce,ge,_e[Z]);for(let he=0;he<X.length;he++){const Le=X[he];Pe?_&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Ce,ge,Le.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Ae,Ce,ge,Le.image[Z])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),q.__version=B.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function me(E,g,N,O,B,q){const de=r.convert(N.format,N.colorSpace),ue=r.convert(N.type),ae=w(N.internalFormat,de,ue,N.colorSpace);if(!i.get(g).__hasExternalTextures){const ce=Math.max(1,g.width>>q),_e=Math.max(1,g.height>>q);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?t.texImage3D(B,q,ae,ce,_e,g.depth,0,de,ue,null):t.texImage2D(B,q,ae,ce,_e,0,de,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Y(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,B,i.get(N).__webglTexture,0,G(g)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,B,i.get(N).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(E,g,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const O=g.depthTexture,B=O&&O.isDepthTexture?O.type:null,q=y(g.stencilBuffer,B),de=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=G(g);Y(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,q,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,q,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,E)}else{const O=g.textures;for(let B=0;B<O.length;B++){const q=O[B],de=r.convert(q.format,q.colorSpace),ue=r.convert(q.type),ae=w(q.internalFormat,de,ue,q.colorSpace),Me=G(g);N&&Y(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ae,g.width,g.height):Y(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ae,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),te(g.depthTexture,0);const O=i.get(g.depthTexture).__webglTexture,B=G(g);if(g.depthTexture.format===zs)Y(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(g.depthTexture.format===Ys)Y(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function ke(E){const g=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");xe(g.__webglFramebuffer,E)}else if(N){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]=n.createRenderbuffer(),Te(g.__webglDepthbuffer[O],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Te(g.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(E,g,N){const O=i.get(E);g!==void 0&&me(O.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&ke(E)}function ie(E){const g=E.texture,N=i.get(E),O=i.get(g);E.addEventListener("dispose",L);const B=E.textures,q=E.isWebGLCubeRenderTarget===!0,de=B.length>1;if(de||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=g.version,o.memory.textures++),q){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let ae=0;ae<g.mipmaps.length;ae++)N.__webglFramebuffer[ue][ae]=n.createFramebuffer()}else N.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<g.mipmaps.length;ue++)N.__webglFramebuffer[ue]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(de)for(let ue=0,ae=B.length;ue<ae;ue++){const Me=i.get(B[ue]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Y(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<B.length;ue++){const ae=B[ue];N.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const Me=r.convert(ae.format,ae.colorSpace),ce=r.convert(ae.type),_e=w(ae.internalFormat,Me,ce,ae.colorSpace,E.isXRRenderTarget===!0),Re=G(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,_e,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),be(n.TEXTURE_CUBE_MAP,g);for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)me(N.__webglFramebuffer[ue][ae],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ae);else me(N.__webglFramebuffer[ue],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ue=0,ae=B.length;ue<ae;ue++){const Me=B[ue],ce=i.get(Me);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),be(n.TEXTURE_2D,Me),me(N.__webglFramebuffer,E,Me,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Me)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,O.__webglTexture),be(ue,g),g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)me(N.__webglFramebuffer[ae],E,g,n.COLOR_ATTACHMENT0,ue,ae);else me(N.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,ue,0);m(g)&&d(ue),t.unbindTexture()}E.depthBuffer&&ke(E)}function R(E){const g=E.textures;for(let N=0,O=g.length;N<O;N++){const B=g[N];if(m(B)){const q=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(B).__webglTexture;t.bindTexture(q,de),d(q),t.unbindTexture()}}}const S=[],C=[];function F(E){if(E.samples>0){if(Y(E)===!1){const g=E.textures,N=E.width,O=E.height;let B=n.COLOR_BUFFER_BIT;const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(E),ue=g.length>1;if(ue)for(let ae=0;ae<g.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ae=0;ae<g.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(B|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ae]);const Me=i.get(g[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,N,O,0,0,N,O,B,n.NEAREST),l===!0&&(S.length=0,C.length=0,S.push(n.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(S.push(q),C.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,S))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ae=0;ae<g.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,de.__webglColorRenderbuffer[ae]);const Me=i.get(g[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function G(E){return Math.min(s.maxSamples,E.samples)}function Y(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function K(E){const g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function oe(E,g){const N=E.colorSpace,O=E.format,B=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Ai&&N!==mi&&(rt.getTransfer(N)===dt?(O!==Nn||B!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function fe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=te,this.setTexture2DArray=re,this.setTexture3D=j,this.setTextureCube=se,this.rebindTextures=ne,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Y}function xM(n,e){function t(i,s=mi){let r;const o=rt.getTransfer(s);if(i===bi)return n.UNSIGNED_BYTE;if(i===Hh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===t_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qg)return n.BYTE;if(i===e_)return n.SHORT;if(i===No)return n.UNSIGNED_SHORT;if(i===zh)return n.INT;if(i===Xs)return n.UNSIGNED_INT;if(i===vi)return n.FLOAT;if(i===oa)return n.HALF_FLOAT;if(i===n_)return n.ALPHA;if(i===i_)return n.RGB;if(i===Nn)return n.RGBA;if(i===s_)return n.LUMINANCE;if(i===r_)return n.LUMINANCE_ALPHA;if(i===zs)return n.DEPTH_COMPONENT;if(i===Ys)return n.DEPTH_STENCIL;if(i===o_)return n.RED;if(i===Vh)return n.RED_INTEGER;if(i===a_)return n.RG;if(i===Gh)return n.RG_INTEGER;if(i===Wh)return n.RGBA_INTEGER;if(i===Aa||i===wa||i===Ra||i===Ca)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zc||i===Jc||i===Qc||i===eu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tu||i===nu||i===iu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tu||i===nu)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===iu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===fu||i===hu||i===du||i===pu||i===mu||i===gu||i===_u)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===su)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ru)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ou)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===au)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===du)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_u)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===vu||i===xu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pa)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===l_||i===Su||i===Mu||i===yu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Su)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class SM extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MM={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EM=`
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

}`;class bM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ti({vertexShader:yM,fragmentShader:EM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class TM extends is{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const x=new bM,m=t.getContextAttributes();let d=null,w=null;const y=[],A=[],I=new Ne;let L=null;const P=new cn;P.layers.enable(1),P.viewport=new wt;const z=new cn;z.layers.enable(2),z.viewport=new wt;const b=[P,z],M=new SM;M.layers.enable(1),M.layers.enable(2);let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let me=y[le];return me===void 0&&(me=new nl,y[le]=me),me.getTargetRaySpace()},this.getControllerGrip=function(le){let me=y[le];return me===void 0&&(me=new nl,y[le]=me),me.getGripSpace()},this.getHand=function(le){let me=y[le];return me===void 0&&(me=new nl,y[le]=me),me.getHandSpace()};function k(le){const me=A.indexOf(le.inputSource);if(me===-1)return;const Te=y[me];Te!==void 0&&(Te.update(le.inputSource,le.frame,c||o),Te.dispatchEvent({type:le.type,data:le.inputSource}))}function te(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",re);for(let le=0;le<y.length;le++){const me=A[le];me!==null&&(A[le]=null,y[le].disconnect(me))}D=null,U=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,s=null,w=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",te),s.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Qi(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let me=null,Te=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?Ys:zs,Te=m.stencil?qs:Xs);const ke={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Qi(h.textureWidth,h.textureHeight,{format:Nn,type:bi,depthTexture:new sd(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function re(le){for(let me=0;me<le.removed.length;me++){const Te=le.removed[me],xe=A.indexOf(Te);xe>=0&&(A[xe]=null,y[xe].disconnect(Te))}for(let me=0;me<le.added.length;me++){const Te=le.added[me];let xe=A.indexOf(Te);if(xe===-1){for(let ne=0;ne<y.length;ne++)if(ne>=A.length){A.push(Te),xe=ne;break}else if(A[ne]===null){A[ne]=Te,xe=ne;break}if(xe===-1)break}const ke=y[xe];ke&&ke.connect(Te)}}const j=new V,se=new V;function $(le,me,Te){j.setFromMatrixPosition(me.matrixWorld),se.setFromMatrixPosition(Te.matrixWorld);const xe=j.distanceTo(se),ke=me.projectionMatrix.elements,ne=Te.projectionMatrix.elements,ie=ke[14]/(ke[10]-1),R=ke[14]/(ke[10]+1),S=(ke[9]+1)/ke[5],C=(ke[9]-1)/ke[5],F=(ke[8]-1)/ke[0],G=(ne[8]+1)/ne[0],Y=ie*F,K=ie*G,oe=xe/(-F+G),fe=oe*-F;me.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(fe),le.translateZ(oe),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert();const E=ie+oe,g=R+oe,N=Y-fe,O=K+(xe-fe),B=S*R/g*E,q=C*R/g*E;le.projectionMatrix.makePerspective(N,O,B,q,E,g),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}function Se(le,me){me===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(me.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;x.texture!==null&&(le.near=x.depthNear,le.far=x.depthFar),M.near=z.near=P.near=le.near,M.far=z.far=P.far=le.far,(D!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,U=M.far,P.near=D,P.far=U,z.near=D,z.far=U,P.updateProjectionMatrix(),z.updateProjectionMatrix(),le.updateProjectionMatrix());const me=le.parent,Te=M.cameras;Se(M,me);for(let xe=0;xe<Te.length;xe++)Se(Te[xe],me);Te.length===2?$(M,P,z):M.projectionMatrix.copy(P.projectionMatrix),Ee(le,M,me)};function Ee(le,me,Te){Te===null?le.matrix.copy(me.matrixWorld):(le.matrix.copy(Te.matrixWorld),le.matrix.invert(),le.matrix.multiply(me.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(me.projectionMatrix),le.projectionMatrixInverse.copy(me.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Tl*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(le){l=le,h!==null&&(h.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let be=null;function Oe(le,me){if(u=me.getViewerPose(c||o),v=me,u!==null){const Te=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let xe=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,xe=!0);for(let ne=0;ne<Te.length;ne++){const ie=Te[ne];let R=null;if(p!==null)R=p.getViewport(ie);else{const C=f.getViewSubImage(h,ie);R=C.viewport,ne===0&&(e.setRenderTargetTextures(w,C.colorTexture,h.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(w))}let S=b[ne];S===void 0&&(S=new cn,S.layers.enable(ne),S.viewport=new wt,b[ne]=S),S.matrix.fromArray(ie.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(ie.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(R.x,R.y,R.width,R.height),ne===0&&(M.matrix.copy(S.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xe===!0&&M.cameras.push(S)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const ne=f.getDepthInformation(Te[0]);ne&&ne.isValid&&ne.texture&&x.init(e,ne,s.renderState)}}for(let Te=0;Te<y.length;Te++){const xe=A[Te],ke=y[Te];xe!==null&&ke!==void 0&&ke.update(xe,me,c||o)}be&&be(le,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const Ye=new nd;Ye.setAnimationLoop(Oe),this.setAnimationLoop=function(le){be=le},this.dispose=function(){}}}const zi=new Bn,AM=new vt;function wM(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Qh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,w,y,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,A)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,w,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d),y=w.envMap,A=w.envMapRotation;y&&(m.envMap.value=y,zi.copy(A),zi.x*=-1,zi.y*=-1,zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(AM.makeRotationFromEuler(zi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function RM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){const A=y.program;i.uniformBlockBinding(w,A)}function c(w,y){let A=s[w.id];A===void 0&&(v(w),A=u(w),s[w.id]=A,w.addEventListener("dispose",m));const I=y.program;i.updateUBOMapping(w,I);const L=e.render.frame;r[w.id]!==L&&(h(w),r[w.id]=L)}function u(w){const y=f();w.__bindingPointIndex=y;const A=n.createBuffer(),I=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,I,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,A),A}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const y=s[w.id],A=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let L=0,P=A.length;L<P;L++){const z=Array.isArray(A[L])?A[L]:[A[L]];for(let b=0,M=z.length;b<M;b++){const D=z[b];if(p(D,L,b,I)===!0){const U=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let te=0;for(let re=0;re<k.length;re++){const j=k[re],se=x(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,U+te,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,te),te+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,y,A,I){const L=w.value,P=y+"_"+A;if(I[P]===void 0)return typeof L=="number"||typeof L=="boolean"?I[P]=L:I[P]=L.clone(),!0;{const z=I[P];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return I[P]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function v(w){const y=w.uniforms;let A=0;const I=16;for(let P=0,z=y.length;P<z;P++){const b=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,D=b.length;M<D;M++){const U=b[M],k=Array.isArray(U.value)?U.value:[U.value];for(let te=0,re=k.length;te<re;te++){const j=k[te],se=x(j),$=A%I;$!==0&&I-$<se.boundary&&(A+=I-$),U.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=se.storage}}}const L=A%I;return L>0&&(A+=I-L),w.__size=A,w.__cache={},this}function x(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class CM{constructor(e={}){const{canvas:t=M_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const d=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=Si,this.toneMappingExposure=1;const y=this;let A=!1,I=0,L=0,P=null,z=-1,b=null;const M=new wt,D=new wt;let U=null;const k=new je(0);let te=0,re=t.width,j=t.height,se=1,$=null,Se=null;const Ee=new wt(0,0,re,j),be=new wt(0,0,re,j);let Oe=!1;const Ye=new Zl;let le=!1,me=!1;const Te=new vt,xe=new V,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function ie(){return P===null?se:1}let R=i;function S(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xl}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",Z,!1),R===null){const H="webgl2";if(R=S(H,T),R===null)throw S(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let C,F,G,Y,K,oe,fe,E,g,N,O,B,q,de,ue,ae,Me,ce,_e,Re,Ce,ge,Ae,Pe;function Je(){C=new Fx(R),C.init(),ge=new xM(R,C),F=new Lx(R,C,e,ge),G=new _M(R),Y=new Hx(R),K=new iM,oe=new vM(R,C,G,K,F,ge,Y),fe=new Ux(y),E=new Ox(y),g=new Y_(R),Ae=new Cx(R,g),N=new Bx(R,g,Y,Ae),O=new Vx(R,N,g,Y),_e=new kx(R,F,oe),ae=new Dx(K),B=new nM(y,fe,E,C,F,Ae,ae),q=new wM(y,K),de=new rM,ue=new fM(C),ce=new Rx(y,fe,E,G,O,h,l),Me=new gM(y,O,F),Pe=new RM(R,Y,F,G),Re=new Px(R,C,Y),Ce=new zx(R,C,Y),Y.programs=B.programs,y.capabilities=F,y.extensions=C,y.properties=K,y.renderLists=de,y.shadowMap=Me,y.state=G,y.info=Y}Je();const _=new TM(y,R);this.xr=_,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=C.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=C.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(re,j,!1))},this.getSize=function(T){return T.set(re,j)},this.setSize=function(T,H,J=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=T,j=H,t.width=Math.floor(T*se),t.height=Math.floor(H*se),J===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(re*se,j*se).floor()},this.setDrawingBufferSize=function(T,H,J){re=T,j=H,se=J,t.width=Math.floor(T*J),t.height=Math.floor(H*J),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,H,J,ee){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,H,J,ee),G.viewport(M.copy(Ee).multiplyScalar(se).round())},this.getScissor=function(T){return T.copy(be)},this.setScissor=function(T,H,J,ee){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,H,J,ee),G.scissor(D.copy(be).multiplyScalar(se).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){G.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){Se=T},this.getClearColor=function(T){return T.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(T=!0,H=!0,J=!0){let ee=0;if(T){let W=!1;if(P!==null){const ve=P.texture.format;W=ve===Wh||ve===Gh||ve===Vh}if(W){const ve=P.texture.type,we=ve===bi||ve===Xs||ve===No||ve===qs||ve===Hh||ve===kh,De=ce.getClearColor(),Ue=ce.getClearAlpha(),He=De.r,Ve=De.g,Fe=De.b;we?(p[0]=He,p[1]=Ve,p[2]=Fe,p[3]=Ue,R.clearBufferuiv(R.COLOR,0,p)):(v[0]=He,v[1]=Ve,v[2]=Fe,v[3]=Ue,R.clearBufferiv(R.COLOR,0,v))}else ee|=R.COLOR_BUFFER_BIT}H&&(ee|=R.DEPTH_BUFFER_BIT),J&&(ee|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),de.dispose(),ue.dispose(),K.dispose(),fe.dispose(),E.dispose(),O.dispose(),Ae.dispose(),Pe.dispose(),B.dispose(),_.dispose(),_.removeEventListener("sessionstart",mt),_.removeEventListener("sessionend",gt),Lt.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Y.autoReset,H=Me.enabled,J=Me.autoUpdate,ee=Me.needsUpdate,W=Me.type;Je(),Y.autoReset=T,Me.enabled=H,Me.autoUpdate=J,Me.needsUpdate=ee,Me.type=W}function Z(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){const H=T.target;H.removeEventListener("dispose",he),Le(H)}function Le(T){ze(T),K.remove(T)}function ze(T){const H=K.get(T).programs;H!==void 0&&(H.forEach(function(J){B.releaseProgram(J)}),T.isShaderMaterial&&B.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,J,ee,W,ve){H===null&&(H=ke);const we=W.isMesh&&W.matrixWorld.determinant()<0,De=vd(T,H,J,ee,W);G.setMaterial(ee,we);let Ue=J.index,He=1;if(ee.wireframe===!0){if(Ue=N.getWireframeAttribute(J),Ue===void 0)return;He=2}const Ve=J.drawRange,Fe=J.attributes.position;let et=Ve.start*He,xt=(Ve.start+Ve.count)*He;ve!==null&&(et=Math.max(et,ve.start*He),xt=Math.min(xt,(ve.start+ve.count)*He)),Ue!==null?(et=Math.max(et,0),xt=Math.min(xt,Ue.count)):Fe!=null&&(et=Math.max(et,0),xt=Math.min(xt,Fe.count));const St=xt-et;if(St<0||St===1/0)return;Ae.setup(W,ee,De,J,Ue);let Jt,st=Re;if(Ue!==null&&(Jt=g.get(Ue),st=Ce,st.setIndex(Jt)),W.isMesh)ee.wireframe===!0?(G.setLineWidth(ee.wireframeLinewidth*ie()),st.setMode(R.LINES)):st.setMode(R.TRIANGLES);else if(W.isLine){let Ie=ee.linewidth;Ie===void 0&&(Ie=1),G.setLineWidth(Ie*ie()),W.isLineSegments?st.setMode(R.LINES):W.isLineLoop?st.setMode(R.LINE_LOOP):st.setMode(R.LINE_STRIP)}else W.isPoints?st.setMode(R.POINTS):W.isSprite&&st.setMode(R.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?st.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)st.renderInstances(et,St,W.count);else if(J.isInstancedBufferGeometry){const Ie=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ht=Math.min(J.instanceCount,Ie);st.renderInstances(et,St,Ht)}else st.render(et,St)};function lt(T,H,J){T.transparent===!0&&T.side===Qn&&T.forceSinglePass===!1?(T.side=Zt,T.needsUpdate=!0,Br(T,H,J),T.side=Ei,T.needsUpdate=!0,Br(T,H,J),T.side=Qn):Br(T,H,J)}this.compile=function(T,H,J=null){J===null&&(J=T),m=ue.get(J),m.init(H),w.push(m),J.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),T!==J&&T.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const ee=new Set;return T.traverse(function(W){const ve=W.material;if(ve)if(Array.isArray(ve))for(let we=0;we<ve.length;we++){const De=ve[we];lt(De,J,W),ee.add(De)}else lt(ve,J,W),ee.add(ve)}),w.pop(),m=null,ee},this.compileAsync=function(T,H,J=null){const ee=this.compile(T,H,J);return new Promise(W=>{function ve(){if(ee.forEach(function(we){K.get(we).currentProgram.isReady()&&ee.delete(we)}),ee.size===0){W(T);return}setTimeout(ve,10)}C.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let pt=null;function Ke(T){pt&&pt(T)}function mt(){Lt.stop()}function gt(){Lt.start()}const Lt=new nd;Lt.setAnimationLoop(Ke),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(T){pt=T,_.setAnimationLoop(T),T===null?Lt.stop():Lt.start()},_.addEventListener("sessionstart",mt),_.addEventListener("sessionend",gt),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(_.cameraAutoUpdate===!0&&_.updateCamera(H),H=_.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,H,P),m=ue.get(T,w.length),m.init(H),w.push(m),Te.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ye.setFromProjectionMatrix(Te),me=this.localClippingEnabled,le=ae.init(this.clippingPlanes,me),x=de.get(T,d.length),x.init(),d.push(x),_.enabled===!0&&_.isPresenting===!0){const ve=y.xr.getDepthSensingMesh();ve!==null&&Pt(ve,H,-1/0,y.sortObjects)}Pt(T,H,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort($,Se),ne=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,ne&&ce.addToRenderList(x,T),this.info.render.frame++,le===!0&&ae.beginShadows();const J=m.state.shadowsArray;Me.render(J,T,H),le===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=x.opaque,W=x.transmissive;if(m.setupLights(),H.isArrayCamera){const ve=H.cameras;if(W.length>0)for(let we=0,De=ve.length;we<De;we++){const Ue=ve[we];wi(ee,W,T,Ue)}ne&&ce.render(T);for(let we=0,De=ve.length;we<De;we++){const Ue=ve[we];jt(x,T,Ue,Ue.viewport)}}else W.length>0&&wi(ee,W,T,H),ne&&ce.render(T),jt(x,T,H);P!==null&&(oe.updateMultisampleRenderTarget(P),oe.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(y,T,H),Ae.resetDefaultState(),z=-1,b=null,w.pop(),w.length>0?(m=w[w.length-1],le===!0&&ae.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Pt(T,H,J,ee){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ye.intersectsSprite(T)){ee&&xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const we=O.update(T),De=T.material;De.visible&&x.push(T,we,De,J,xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ye.intersectsObject(T))){const we=O.update(T),De=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xe.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),xe.copy(we.boundingSphere.center)),xe.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Ue=we.groups;for(let He=0,Ve=Ue.length;He<Ve;He++){const Fe=Ue[He],et=De[Fe.materialIndex];et&&et.visible&&x.push(T,we,et,J,xe.z,Fe)}}else De.visible&&x.push(T,we,De,J,xe.z,null)}}const ve=T.children;for(let we=0,De=ve.length;we<De;we++)Pt(ve[we],H,J,ee)}function jt(T,H,J,ee){const W=T.opaque,ve=T.transmissive,we=T.transparent;m.setupLightsView(J),le===!0&&ae.setGlobalState(y.clippingPlanes,J),ee&&G.viewport(M.copy(ee)),W.length>0&&Ri(W,H,J),ve.length>0&&Ri(ve,H,J),we.length>0&&Ri(we,H,J),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function wi(T,H,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ee.id]===void 0&&(m.state.transmissionRenderTarget[ee.id]=new Qi(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?oa:bi,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ve=m.state.transmissionRenderTarget[ee.id],we=ee.viewport||M;ve.setSize(we.z,we.w);const De=y.getRenderTarget();y.setRenderTarget(ve),y.getClearColor(k),te=y.getClearAlpha(),te<1&&y.setClearColor(16777215,.5),ne?ce.render(J):y.clear();const Ue=y.toneMapping;y.toneMapping=Si;const He=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),m.setupLightsView(ee),le===!0&&ae.setGlobalState(y.clippingPlanes,ee),Ri(T,J,ee),oe.updateMultisampleRenderTarget(ve),oe.updateRenderTargetMipmap(ve),C.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Fe=0,et=H.length;Fe<et;Fe++){const xt=H[Fe],St=xt.object,Jt=xt.geometry,st=xt.material,Ie=xt.group;if(st.side===Qn&&St.layers.test(ee.layers)){const Ht=st.side;st.side=Zt,st.needsUpdate=!0,ic(St,J,ee,Jt,st,Ie),st.side=Ht,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(oe.updateMultisampleRenderTarget(ve),oe.updateRenderTargetMipmap(ve))}y.setRenderTarget(De),y.setClearColor(k,te),He!==void 0&&(ee.viewport=He),y.toneMapping=Ue}function Ri(T,H,J){const ee=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ve=T.length;W<ve;W++){const we=T[W],De=we.object,Ue=we.geometry,He=ee===null?we.material:ee,Ve=we.group;De.layers.test(J.layers)&&ic(De,H,J,Ue,He,Ve)}}function ic(T,H,J,ee,W,ve){T.onBeforeRender(y,H,J,ee,W,ve),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(y,H,J,ee,T,ve),W.transparent===!0&&W.side===Qn&&W.forceSinglePass===!1?(W.side=Zt,W.needsUpdate=!0,y.renderBufferDirect(J,H,ee,W,T,ve),W.side=Ei,W.needsUpdate=!0,y.renderBufferDirect(J,H,ee,W,T,ve),W.side=Qn):y.renderBufferDirect(J,H,ee,W,T,ve),T.onAfterRender(y,H,J,ee,W,ve)}function Br(T,H,J){H.isScene!==!0&&(H=ke);const ee=K.get(T),W=m.state.lights,ve=m.state.shadowsArray,we=W.state.version,De=B.getParameters(T,W.state,ve,H,J),Ue=B.getProgramCacheKey(De);let He=ee.programs;ee.environment=T.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(T.isMeshStandardMaterial?E:fe).get(T.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",he),He=new Map,ee.programs=He);let Ve=He.get(Ue);if(Ve!==void 0){if(ee.currentProgram===Ve&&ee.lightsStateVersion===we)return rc(T,De),Ve}else De.uniforms=B.getUniforms(T),T.onBuild(J,De,y),T.onBeforeCompile(De,y),Ve=B.acquireProgram(De,Ue),He.set(Ue,Ve),ee.uniforms=De.uniforms;const Fe=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=ae.uniform),rc(T,De),ee.needsLights=Sd(T),ee.lightsStateVersion=we,ee.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.directionalShadowMap.value=W.state.directionalShadowMap,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotShadowMap.value=W.state.spotShadowMap,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMap.value=W.state.pointShadowMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=Ve,ee.uniformsList=null,Ve}function sc(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=yo.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function rc(T,H){const J=K.get(T);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function vd(T,H,J,ee,W){H.isScene!==!0&&(H=ke),oe.resetTextureUnits();const ve=H.fog,we=ee.isMeshStandardMaterial?H.environment:null,De=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ai,Ue=(ee.isMeshStandardMaterial?E:fe).get(ee.envMap||we),He=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ve=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Fe=!!J.morphAttributes.position,et=!!J.morphAttributes.normal,xt=!!J.morphAttributes.color;let St=Si;ee.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(St=y.toneMapping);const Jt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,st=Jt!==void 0?Jt.length:0,Ie=K.get(ee),Ht=m.state.lights;if(le===!0&&(me===!0||T!==b)){const rn=T===b&&ee.id===z;ae.setState(ee,T,rn)}let ot=!1;ee.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Ht.state.version||Ie.outputColorSpace!==De||W.isBatchedMesh&&Ie.batching===!1||!W.isBatchedMesh&&Ie.batching===!0||W.isBatchedMesh&&Ie.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ie.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ie.instancing===!1||!W.isInstancedMesh&&Ie.instancing===!0||W.isSkinnedMesh&&Ie.skinning===!1||!W.isSkinnedMesh&&Ie.skinning===!0||W.isInstancedMesh&&Ie.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ie.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ie.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ie.instancingMorph===!1&&W.morphTexture!==null||Ie.envMap!==Ue||ee.fog===!0&&Ie.fog!==ve||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==He||Ie.vertexTangents!==Ve||Ie.morphTargets!==Fe||Ie.morphNormals!==et||Ie.morphColors!==xt||Ie.toneMapping!==St||Ie.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Ie.__version=ee.version);let Hn=Ie.currentProgram;ot===!0&&(Hn=Br(ee,H,W));let zr=!1,Ci=!1,ua=!1;const bt=Hn.getUniforms(),ri=Ie.uniforms;if(G.useProgram(Hn.program)&&(zr=!0,Ci=!0,ua=!0),ee.id!==z&&(z=ee.id,Ci=!0),zr||b!==T){bt.setValue(R,"projectionMatrix",T.projectionMatrix),bt.setValue(R,"viewMatrix",T.matrixWorldInverse);const rn=bt.map.cameraPosition;rn!==void 0&&rn.setValue(R,xe.setFromMatrixPosition(T.matrixWorld)),F.logarithmicDepthBuffer&&bt.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Ci=!0,ua=!0)}if(W.isSkinnedMesh){bt.setOptional(R,W,"bindMatrix"),bt.setOptional(R,W,"bindMatrixInverse");const rn=W.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),bt.setValue(R,"boneTexture",rn.boneTexture,oe))}W.isBatchedMesh&&(bt.setOptional(R,W,"batchingTexture"),bt.setValue(R,"batchingTexture",W._matricesTexture,oe),bt.setOptional(R,W,"batchingColorTexture"),W._colorsTexture!==null&&bt.setValue(R,"batchingColorTexture",W._colorsTexture,oe));const fa=J.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0)&&_e.update(W,J,Hn),(Ci||Ie.receiveShadow!==W.receiveShadow)&&(Ie.receiveShadow=W.receiveShadow,bt.setValue(R,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(ri.envMap.value=Ue,ri.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&H.environment!==null&&(ri.envMapIntensity.value=H.environmentIntensity),Ci&&(bt.setValue(R,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&xd(ri,ua),ve&&ee.fog===!0&&q.refreshFogUniforms(ri,ve),q.refreshMaterialUniforms(ri,ee,se,j,m.state.transmissionRenderTarget[T.id]),yo.upload(R,sc(Ie),ri,oe)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(yo.upload(R,sc(Ie),ri,oe),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(R,"center",W.center),bt.setValue(R,"modelViewMatrix",W.modelViewMatrix),bt.setValue(R,"normalMatrix",W.normalMatrix),bt.setValue(R,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const rn=ee.uniformsGroups;for(let ha=0,Md=rn.length;ha<Md;ha++){const oc=rn[ha];Pe.update(oc,Hn),Pe.bind(oc,Hn)}}return Hn}function xd(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Sd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,H,J){K.get(T.texture).__webglTexture=H,K.get(T.depthTexture).__webglTexture=J;const ee=K.get(T);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const J=K.get(T);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,J=0){P=T,I=H,L=J;let ee=!0,W=null,ve=!1,we=!1;if(T){const Ue=K.get(T);Ue.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(R.FRAMEBUFFER,null),ee=!1):Ue.__webglFramebuffer===void 0?oe.setupRenderTarget(T):Ue.__hasExternalTextures&&oe.rebindTextures(T,K.get(T.texture).__webglTexture,K.get(T.depthTexture).__webglTexture);const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(we=!0);const Ve=K.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?W=Ve[H][J]:W=Ve[H],ve=!0):T.samples>0&&oe.useMultisampledRTT(T)===!1?W=K.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?W=Ve[J]:W=Ve,M.copy(T.viewport),D.copy(T.scissor),U=T.scissorTest}else M.copy(Ee).multiplyScalar(se).floor(),D.copy(be).multiplyScalar(se).floor(),U=Oe;if(G.bindFramebuffer(R.FRAMEBUFFER,W)&&ee&&G.drawBuffers(T,W),G.viewport(M),G.scissor(D),G.setScissorTest(U),ve){const Ue=K.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ue.__webglTexture,J)}else if(we){const Ue=K.get(T.texture),He=H||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ue.__webglTexture,J||0,He)}z=-1},this.readRenderTargetPixels=function(T,H,J,ee,W,ve,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){G.bindFramebuffer(R.FRAMEBUFFER,De);try{const Ue=T.texture,He=Ue.format,Ve=Ue.type;if(!F.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-ee&&J>=0&&J<=T.height-W&&R.readPixels(H,J,ee,W,ge.convert(He),ge.convert(Ve),ve)}finally{const Ue=P!==null?K.get(P).__webglFramebuffer:null;G.bindFramebuffer(R.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(T,H,J,ee,W,ve,we){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){G.bindFramebuffer(R.FRAMEBUFFER,De);try{const Ue=T.texture,He=Ue.format,Ve=Ue.type;if(!F.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-ee&&J>=0&&J<=T.height-W){const Fe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.bufferData(R.PIXEL_PACK_BUFFER,ve.byteLength,R.STREAM_READ),R.readPixels(H,J,ee,W,ge.convert(He),ge.convert(Ve),0),R.flush();const et=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await y_(R,et,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ve)}finally{R.deleteBuffer(Fe),R.deleteSync(et)}return ve}}finally{const Ue=P!==null?K.get(P).__webglFramebuffer:null;G.bindFramebuffer(R.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(T,H=null,J=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);const ee=Math.pow(2,-J),W=Math.floor(T.image.width*ee),ve=Math.floor(T.image.height*ee),we=H!==null?H.x:0,De=H!==null?H.y:0;oe.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,J,0,0,we,De,W,ve),G.unbindTexture()},this.copyTextureToTexture=function(T,H,J=null,ee=null,W=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,T=arguments[1],H=arguments[2],W=arguments[3]||0,J=null);let ve,we,De,Ue,He,Ve;J!==null?(ve=J.max.x-J.min.x,we=J.max.y-J.min.y,De=J.min.x,Ue=J.min.y):(ve=T.image.width,we=T.image.height,De=0,Ue=0),ee!==null?(He=ee.x,Ve=ee.y):(He=0,Ve=0);const Fe=ge.convert(H.format),et=ge.convert(H.type);oe.setTexture2D(H,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const xt=R.getParameter(R.UNPACK_ROW_LENGTH),St=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Jt=R.getParameter(R.UNPACK_SKIP_PIXELS),st=R.getParameter(R.UNPACK_SKIP_ROWS),Ie=R.getParameter(R.UNPACK_SKIP_IMAGES),Ht=T.isCompressedTexture?T.mipmaps[W]:T.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ht.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ht.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,De),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ue),T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,W,He,Ve,ve,we,Fe,et,Ht.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,W,He,Ve,Ht.width,Ht.height,Fe,Ht.data):R.texSubImage2D(R.TEXTURE_2D,W,He,Ve,Fe,et,Ht),R.pixelStorei(R.UNPACK_ROW_LENGTH,xt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Jt),R.pixelStorei(R.UNPACK_SKIP_ROWS,st),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ie),W===0&&H.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(T,H,J=null,ee=null,W=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,T=arguments[2],H=arguments[3],W=arguments[4]||0);let ve,we,De,Ue,He,Ve,Fe,et,xt;const St=T.isCompressedTexture?T.mipmaps[W]:T.image;J!==null?(ve=J.max.x-J.min.x,we=J.max.y-J.min.y,De=J.max.z-J.min.z,Ue=J.min.x,He=J.min.y,Ve=J.min.z):(ve=St.width,we=St.height,De=St.depth,Ue=0,He=0,Ve=0),ee!==null?(Fe=ee.x,et=ee.y,xt=ee.z):(Fe=0,et=0,xt=0);const Jt=ge.convert(H.format),st=ge.convert(H.type);let Ie;if(H.isData3DTexture)oe.setTexture3D(H,0),Ie=R.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)oe.setTexture2DArray(H,0),Ie=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const Ht=R.getParameter(R.UNPACK_ROW_LENGTH),ot=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Hn=R.getParameter(R.UNPACK_SKIP_PIXELS),zr=R.getParameter(R.UNPACK_SKIP_ROWS),Ci=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,St.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,He),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ve),T.isDataTexture||T.isData3DTexture?R.texSubImage3D(Ie,W,Fe,et,xt,ve,we,De,Jt,st,St.data):H.isCompressedArrayTexture?R.compressedTexSubImage3D(Ie,W,Fe,et,xt,ve,we,De,Jt,St.data):R.texSubImage3D(Ie,W,Fe,et,xt,ve,we,De,Jt,st,St),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ht),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Hn),R.pixelStorei(R.UNPACK_SKIP_ROWS,zr),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ci),W===0&&H.generateMipmaps&&R.generateMipmap(Ie),G.unbindTexture()},this.initRenderTarget=function(T){K.get(T).__webglFramebuffer===void 0&&oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?oe.setTextureCube(T,0):T.isData3DTexture?oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?oe.setTexture2DArray(T,0):oe.setTexture2D(T,0),G.unbindTexture()},this.resetState=function(){I=0,L=0,P=null,G.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ql?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===aa?"display-p3":"srgb"}}class Ql{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new Ql(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class PM extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class LM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new V;class ko{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ko(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ud extends Ks{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const or=new V,As=new V,ws=new V,Rs=new Ne,ar=new Ne,fd=new vt,fo=new V,lr=new V,ho=new V,df=new Ne,il=new Ne,pf=new Ne;class DM extends Rt{constructor(e=new ud){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new zn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new LM(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new ko(i,3,0,!1)),Ts.setAttribute("uv",new ko(i,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),fd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-ws.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;po(fo.set(-.5,-.5,0),ws,o,As,s,r),po(lr.set(.5,-.5,0),ws,o,As,s,r),po(ho.set(.5,.5,0),ws,o,As,s,r),df.set(0,0),il.set(1,0),pf.set(1,1);let a=e.ray.intersectTriangle(fo,lr,ho,!1,or);if(a===null&&(po(lr.set(-.5,.5,0),ws,o,As,s,r),il.set(0,1),a=e.ray.intersectTriangle(fo,ho,lr,!1,or),a===null))return;const l=e.ray.origin.distanceTo(or);l<e.near||l>e.far||t.push({distance:l,point:or.clone(),uv:vn.getInterpolation(or,fo,lr,ho,df,il,pf,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function po(n,e,t,i,s,r){Rs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ar.x=r*Rs.x-s*Rs.y,ar.y=s*Rs.x+r*Rs.y):ar.copy(Rs),n.copy(e),n.x+=ar.x,n.y+=ar.y,n.applyMatrix4(fd)}class UM extends $t{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ks extends zn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let v=0;const x=[],m=i/2;let d=0;w(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new sn(f,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(p,2));function w(){const A=new V,I=new V;let L=0;const P=(t-e)/i;for(let z=0;z<=r;z++){const b=[],M=z/r,D=M*(t-e)+e;for(let U=0;U<=s;U++){const k=U/s,te=k*l+a,re=Math.sin(te),j=Math.cos(te);I.x=D*re,I.y=-M*i+m,I.z=D*j,f.push(I.x,I.y,I.z),A.set(re,P,j).normalize(),h.push(A.x,A.y,A.z),p.push(k,1-M),b.push(v++)}x.push(b)}for(let z=0;z<s;z++)for(let b=0;b<r;b++){const M=x[b][z],D=x[b+1][z],U=x[b+1][z+1],k=x[b][z+1];u.push(M,D,k),u.push(D,U,k),L+=6}c.addGroup(d,L,0),d+=L}function y(A){const I=v,L=new Ne,P=new V;let z=0;const b=A===!0?e:t,M=A===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),v++;const D=v;for(let U=0;U<=s;U++){const te=U/s*l+a,re=Math.cos(te),j=Math.sin(te);P.x=b*j,P.y=m*M,P.z=b*re,f.push(P.x,P.y,P.z),h.push(0,M,0),L.x=re*.5+.5,L.y=j*.5*M+.5,p.push(L.x,L.y),v++}for(let U=0;U<s;U++){const k=I+U,te=D+U;A===!0?u.push(te,te+1,k):u.push(te+1,te,k),z+=3}c.addGroup(d,z,A===!0?1:2),d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ec extends ks{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ec(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tc extends zn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new V,h=new V,p=[],v=[],x=[],m=[];for(let d=0;d<=i;d++){const w=[],y=d/i;let A=0;d===0&&o===0?A=.5/t:d===i&&l===Math.PI&&(A=-.5/t);for(let I=0;I<=t;I++){const L=I/t;f.x=-e*Math.cos(s+L*r)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(s+L*r)*Math.sin(o+y*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(L+A,1-y),w.push(c++)}u.push(w)}for(let d=0;d<i;d++)for(let w=0;w<t;w++){const y=u[d][w+1],A=u[d][w],I=u[d+1][w],L=u[d+1][w+1];(d!==0||o>0)&&p.push(y,A,L),(d!==i-1||l<Math.PI)&&p.push(A,I,L)}this.setIndex(p),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ct extends Ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hd extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class IM extends hd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sl=new vt,mf=new V,gf=new V;class NM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zl,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(mf),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class OM extends NM{constructor(){super(new id(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FM extends hd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new OM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _f=new vt;class BM{constructor(e,t,i=0,s=1/0){this.ray=new jl(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _f.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_f),this}intersectObject(e,t=!0,i=[]){return wl(e,this,i,t),i.sort(vf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)wl(e[s],this,i,t);return i.sort(vf),i}}function vf(n,e){return n.distance-e.distance}function wl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)wl(r[o],e,t,!0)}}class xf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);const Sf={type:"change"},rl={type:"start"},Mf={type:"end"},mo=new jl,yf=new pi,zM=Math.cos(70*S_.DEG2RAD);class HM extends is{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(_){_.addEventListener("keydown",ae),this._domElementKeyEvents=_},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Sf),i.update(),r=s.NONE},this.update=function(){const _=new V,Q=new es().setFromUnitVectors(e.up,new V(0,1,0)),X=Q.clone().invert(),Z=new V,he=new es,Le=new V,ze=2*Math.PI;return function(pt=null){const Ke=i.object.position;_.copy(Ke).sub(i.target),_.applyQuaternion(Q),a.setFromVector3(_),i.autoRotate&&r===s.NONE&&U(M(pt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let mt=i.minAzimuthAngle,gt=i.maxAzimuthAngle;isFinite(mt)&&isFinite(gt)&&(mt<-Math.PI?mt+=ze:mt>Math.PI&&(mt-=ze),gt<-Math.PI?gt+=ze:gt>Math.PI&&(gt-=ze),mt<=gt?a.theta=Math.max(mt,Math.min(gt,a.theta)):a.theta=a.theta>(mt+gt)/2?Math.max(mt,a.theta):Math.min(gt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Lt=!1;if(i.zoomToCursor&&L||i.object.isOrthographicCamera)a.radius=Ee(a.radius);else{const Pt=a.radius;a.radius=Ee(a.radius*c),Lt=Pt!=a.radius}if(_.setFromSpherical(a),_.applyQuaternion(X),Ke.copy(i.target).add(_),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&L){let Pt=null;if(i.object.isPerspectiveCamera){const jt=_.length();Pt=Ee(jt*c);const wi=jt-Pt;i.object.position.addScaledVector(A,wi),i.object.updateMatrixWorld(),Lt=!!wi}else if(i.object.isOrthographicCamera){const jt=new V(I.x,I.y,0);jt.unproject(i.object);const wi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Lt=wi!==i.object.zoom;const Ri=new V(I.x,I.y,0);Ri.unproject(i.object),i.object.position.sub(Ri).add(jt),i.object.updateMatrixWorld(),Pt=_.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Pt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Pt).add(i.object.position):(mo.origin.copy(i.object.position),mo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(mo.direction))<zM?e.lookAt(i.target):(yf.setFromNormalAndCoplanarPoint(i.object.up,i.target),mo.intersectPlane(yf,i.target))))}else if(i.object.isOrthographicCamera){const Pt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Pt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Lt=!0)}return c=1,L=!1,Lt||Z.distanceToSquared(i.object.position)>o||8*(1-he.dot(i.object.quaternion))>o||Le.distanceToSquared(i.target)>o?(i.dispatchEvent(Sf),Z.copy(i.object.position),he.copy(i.object.quaternion),Le.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",_e),i.domElement.removeEventListener("pointerdown",fe),i.domElement.removeEventListener("pointercancel",g),i.domElement.removeEventListener("wheel",B),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",g),i.domElement.getRootNode().removeEventListener("keydown",de,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ae),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new xf,l=new xf;let c=1;const u=new V,f=new Ne,h=new Ne,p=new Ne,v=new Ne,x=new Ne,m=new Ne,d=new Ne,w=new Ne,y=new Ne,A=new V,I=new Ne;let L=!1;const P=[],z={};let b=!1;function M(_){return _!==null?2*Math.PI/60*i.autoRotateSpeed*_:2*Math.PI/60/60*i.autoRotateSpeed}function D(_){const Q=Math.abs(_*.01);return Math.pow(.95,i.zoomSpeed*Q)}function U(_){l.theta-=_}function k(_){l.phi-=_}const te=function(){const _=new V;return function(X,Z){_.setFromMatrixColumn(Z,0),_.multiplyScalar(-X),u.add(_)}}(),re=function(){const _=new V;return function(X,Z){i.screenSpacePanning===!0?_.setFromMatrixColumn(Z,1):(_.setFromMatrixColumn(Z,0),_.crossVectors(i.object.up,_)),_.multiplyScalar(X),u.add(_)}}(),j=function(){const _=new V;return function(X,Z){const he=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;_.copy(Le).sub(i.target);let ze=_.length();ze*=Math.tan(i.object.fov/2*Math.PI/180),te(2*X*ze/he.clientHeight,i.object.matrix),re(2*Z*ze/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(te(X*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),re(Z*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function se(_){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(_){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Se(_,Q){if(!i.zoomToCursor)return;L=!0;const X=i.domElement.getBoundingClientRect(),Z=_-X.left,he=Q-X.top,Le=X.width,ze=X.height;I.x=Z/Le*2-1,I.y=-(he/ze)*2+1,A.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function Ee(_){return Math.max(i.minDistance,Math.min(i.maxDistance,_))}function be(_){f.set(_.clientX,_.clientY)}function Oe(_){Se(_.clientX,_.clientX),d.set(_.clientX,_.clientY)}function Ye(_){v.set(_.clientX,_.clientY)}function le(_){h.set(_.clientX,_.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const Q=i.domElement;U(2*Math.PI*p.x/Q.clientHeight),k(2*Math.PI*p.y/Q.clientHeight),f.copy(h),i.update()}function me(_){w.set(_.clientX,_.clientY),y.subVectors(w,d),y.y>0?se(D(y.y)):y.y<0&&$(D(y.y)),d.copy(w),i.update()}function Te(_){x.set(_.clientX,_.clientY),m.subVectors(x,v).multiplyScalar(i.panSpeed),j(m.x,m.y),v.copy(x),i.update()}function xe(_){Se(_.clientX,_.clientY),_.deltaY<0?$(D(_.deltaY)):_.deltaY>0&&se(D(_.deltaY)),i.update()}function ke(_){let Q=!1;switch(_.code){case i.keys.UP:_.ctrlKey||_.metaKey||_.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,i.keyPanSpeed),Q=!0;break;case i.keys.BOTTOM:_.ctrlKey||_.metaKey||_.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,-i.keyPanSpeed),Q=!0;break;case i.keys.LEFT:_.ctrlKey||_.metaKey||_.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(i.keyPanSpeed,0),Q=!0;break;case i.keys.RIGHT:_.ctrlKey||_.metaKey||_.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(-i.keyPanSpeed,0),Q=!0;break}Q&&(_.preventDefault(),i.update())}function ne(_){if(P.length===1)f.set(_.pageX,_.pageY);else{const Q=Pe(_),X=.5*(_.pageX+Q.x),Z=.5*(_.pageY+Q.y);f.set(X,Z)}}function ie(_){if(P.length===1)v.set(_.pageX,_.pageY);else{const Q=Pe(_),X=.5*(_.pageX+Q.x),Z=.5*(_.pageY+Q.y);v.set(X,Z)}}function R(_){const Q=Pe(_),X=_.pageX-Q.x,Z=_.pageY-Q.y,he=Math.sqrt(X*X+Z*Z);d.set(0,he)}function S(_){i.enableZoom&&R(_),i.enablePan&&ie(_)}function C(_){i.enableZoom&&R(_),i.enableRotate&&ne(_)}function F(_){if(P.length==1)h.set(_.pageX,_.pageY);else{const X=Pe(_),Z=.5*(_.pageX+X.x),he=.5*(_.pageY+X.y);h.set(Z,he)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const Q=i.domElement;U(2*Math.PI*p.x/Q.clientHeight),k(2*Math.PI*p.y/Q.clientHeight),f.copy(h)}function G(_){if(P.length===1)x.set(_.pageX,_.pageY);else{const Q=Pe(_),X=.5*(_.pageX+Q.x),Z=.5*(_.pageY+Q.y);x.set(X,Z)}m.subVectors(x,v).multiplyScalar(i.panSpeed),j(m.x,m.y),v.copy(x)}function Y(_){const Q=Pe(_),X=_.pageX-Q.x,Z=_.pageY-Q.y,he=Math.sqrt(X*X+Z*Z);w.set(0,he),y.set(0,Math.pow(w.y/d.y,i.zoomSpeed)),se(y.y),d.copy(w);const Le=(_.pageX+Q.x)*.5,ze=(_.pageY+Q.y)*.5;Se(Le,ze)}function K(_){i.enableZoom&&Y(_),i.enablePan&&G(_)}function oe(_){i.enableZoom&&Y(_),i.enableRotate&&F(_)}function fe(_){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(_.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",g)),!ge(_)&&(Re(_),_.pointerType==="touch"?Me(_):N(_)))}function E(_){i.enabled!==!1&&(_.pointerType==="touch"?ce(_):O(_))}function g(_){switch(Ce(_),P.length){case 0:i.domElement.releasePointerCapture(_.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",g),i.dispatchEvent(Mf),r=s.NONE;break;case 1:const Q=P[0],X=z[Q];Me({pointerId:Q,pageX:X.x,pageY:X.y});break}}function N(_){let Q;switch(_.button){case 0:Q=i.mouseButtons.LEFT;break;case 1:Q=i.mouseButtons.MIDDLE;break;case 2:Q=i.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case os.DOLLY:if(i.enableZoom===!1)return;Oe(_),r=s.DOLLY;break;case os.ROTATE:if(_.ctrlKey||_.metaKey||_.shiftKey){if(i.enablePan===!1)return;Ye(_),r=s.PAN}else{if(i.enableRotate===!1)return;be(_),r=s.ROTATE}break;case os.PAN:if(_.ctrlKey||_.metaKey||_.shiftKey){if(i.enableRotate===!1)return;be(_),r=s.ROTATE}else{if(i.enablePan===!1)return;Ye(_),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(rl)}function O(_){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;le(_);break;case s.DOLLY:if(i.enableZoom===!1)return;me(_);break;case s.PAN:if(i.enablePan===!1)return;Te(_);break}}function B(_){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(_.preventDefault(),i.dispatchEvent(rl),xe(q(_)),i.dispatchEvent(Mf))}function q(_){const Q=_.deltaMode,X={clientX:_.clientX,clientY:_.clientY,deltaY:_.deltaY};switch(Q){case 1:X.deltaY*=16;break;case 2:X.deltaY*=100;break}return _.ctrlKey&&!b&&(X.deltaY*=10),X}function de(_){_.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(_){_.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function ae(_){i.enabled===!1||i.enablePan===!1||ke(_)}function Me(_){switch(Ae(_),P.length){case 1:switch(i.touches.ONE){case as.ROTATE:if(i.enableRotate===!1)return;ne(_),r=s.TOUCH_ROTATE;break;case as.PAN:if(i.enablePan===!1)return;ie(_),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case as.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;S(_),r=s.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;C(_),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(rl)}function ce(_){switch(Ae(_),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;F(_),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;G(_),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;K(_),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;oe(_),i.update();break;default:r=s.NONE}}function _e(_){i.enabled!==!1&&_.preventDefault()}function Re(_){P.push(_.pointerId)}function Ce(_){delete z[_.pointerId];for(let Q=0;Q<P.length;Q++)if(P[Q]==_.pointerId){P.splice(Q,1);return}}function ge(_){for(let Q=0;Q<P.length;Q++)if(P[Q]==_.pointerId)return!0;return!1}function Ae(_){let Q=z[_.pointerId];Q===void 0&&(Q=new Ne,z[_.pointerId]=Q),Q.set(_.pageX,_.pageY)}function Pe(_){const Q=_.pointerId===P[0]?P[1]:P[0];return z[Q]}i.domElement.addEventListener("contextmenu",_e),i.domElement.addEventListener("pointerdown",fe),i.domElement.addEventListener("pointercancel",g),i.domElement.addEventListener("wheel",B,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}const kM={class:"floor3d"},VM={class:"tip-id"},GM={class:"tip-floor"},WM={key:0},XM={key:1},qM={class:"tip-meta"},YM={class:"tip-status"},Tn=1.05,Hi=.9,Ef=.55,$M=.85,cr=1.55,tn=.55,ur=.4,ln=.2,jM=1.7,KM=1.4,go=7,ZM={__name:"FloorPlan3D",props:{units:{type:Array,required:!0},filter:{type:Object,default:()=>({block:"all",status:"all",search:""})}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=_i(null),r=_i(null);let o,a,l,c,u,f,h,p;const v=new Map,x=new Map,m=new Map,d=new Map;let w=null,y=null;const A={available:13751771,hold:16498468,deposit_locked:2450411,booked:1096065,unavailable:15680580},I=Bt(()=>{const ne=Array.from(new Set(t.units.map(F=>F.block||"A"))),ie=Math.max(1,...t.units.map(F=>F.floor||1)),R=ne[0],S=t.units.filter(F=>(F.block||"A")===R&&(F.floor||1)===1).length||8,C=Math.ceil(S/2);return{blocks:ne,floors:ie,perFloor:S,cols:C}}),L=()=>I.value.cols*Tn+(I.value.cols-1)*Ef+2*$M,P=()=>2*jM+KM,z=()=>I.value.floors*cr,b=ne=>{const ie=I.value.blocks.indexOf(ne),R=I.value.blocks.length;if(R<=1)return 0;const S=L()+go;return(ie-(R-1)/2)*S},M=ne=>{ne.geometry&&ne.geometry.dispose(),ne.material&&(Array.isArray(ne.material)?ne.material.forEach(ie=>ie.dispose()):ne.material.dispose())},D=(ne,ie={})=>{const R=document.createElement("canvas");R.width=ie.width||256,R.height=ie.height||128;const S=R.getContext("2d"),C=ie.bg||"rgba(255,255,255,0.95)",F=ie.stroke||"#cbd5e1",G=ie.fg||"#1f2937";S.fillStyle=C,S.strokeStyle=F,S.lineWidth=4;const Y=22;S.beginPath(),S.moveTo(Y,0),S.lineTo(R.width-Y,0),S.quadraticCurveTo(R.width,0,R.width,Y),S.lineTo(R.width,R.height-Y),S.quadraticCurveTo(R.width,R.height,R.width-Y,R.height),S.lineTo(Y,R.height),S.quadraticCurveTo(0,R.height,0,R.height-Y),S.lineTo(0,Y),S.quadraticCurveTo(0,0,Y,0),S.closePath(),S.fill(),S.stroke(),S.fillStyle=G,S.font=`bold ${ie.size||64}px -apple-system, Segoe UI, sans-serif`,S.textAlign="center",S.textBaseline="middle",S.fillText(ne,R.width/2,R.height/2);const K=new UM(R);return K.anisotropy=4,K},U=ne=>{const ie=D(ne,{size:56}),R=new DM(new ud({map:ie,transparent:!0}));return R.scale.set(.95,.48,1),R},k=()=>{p&&(p.children.slice().forEach(O=>M(O)),a.remove(p)),p=new Ls,a.add(p);const ne=L(),ie=P(),R=I.value.blocks,S=R.length*ne+(R.length-1)*go,C=new We(new Ln(S+30,ie+22),new ct({color:14015202,roughness:.95}));C.rotation.x=-Math.PI/2,C.receiveShadow=!0,p.add(C);const F=new We(new Ln(S+26,3.2),new ct({color:4474442,roughness:.9}));F.rotation.x=-Math.PI/2,F.position.set(0,.005,ie/2+5.5),F.receiveShadow=!0,p.add(F);const G=new yr({color:16498468});for(let O=-S/2-8;O<S/2+8;O+=1.4){const B=new We(new Ln(.7,.08),G);B.rotation.x=-Math.PI/2,B.position.set(O,.012,ie/2+5.5),p.add(B)}if(R.length>=2){const O=go-2,B=new We(new ft(O*.7,.12,ie*.55),new ct({color:3718648,roughness:.15,metalness:.3,emissive:959977,emissiveIntensity:.2}));B.position.set(0,.06,0),B.receiveShadow=!0,p.add(B);const q=new We(new ft(O,.04,ie*.7),new ct({color:15067115,roughness:.9}));q.position.set(0,.02,0),q.receiveShadow=!0,p.add(q);const de=new ct({color:15680580,roughness:.6}),ue=new ct({color:10265519});[[-O/2+.4,ie*.3],[O/2-.4,ie*.3],[-O/2+.4,-ie*.3],[O/2-.4,-ie*.3]].forEach(([ae,Me])=>{const ce=new We(new ks(.025,.025,1,8),ue);ce.position.set(ae,.5,Me),p.add(ce);const _e=new We(new ec(.45,.18,8),de);_e.position.set(ae,1.05,Me),_e.castShadow=!0,p.add(_e)})}const Y=new ct({color:9091450,roughness:.95}),K=new ct({color:7029286,roughness:.9}),oe=new ct({color:5081661,roughness:.85}),fe=[];R.forEach(O=>{const B=b(O);fe.push([B+ne/2+2.5,ie/2+1.6]),fe.push([B+ne/2+2.5,-ie/2-1.6]),fe.push([B-ne/2-2.5,ie/2+1.6]),fe.push([B-ne/2-2.5,-ie/2-1.6])});const E=new Set;fe.forEach(([O,B])=>{const q=`${Math.round(O*10)}_${Math.round(B*10)}`;if(E.has(q))return;E.add(q);const de=new We(new Ln(2.6,2.4),Y);de.rotation.x=-Math.PI/2,de.position.set(O,.004,B),de.receiveShadow=!0,p.add(de);const ue=new We(new ks(.07,.09,.5,8),K);ue.position.set(O,.25,B),ue.castShadow=!0,p.add(ue);const ae=new We(new tc(.5,12,10),oe);ae.position.set(O,.85,B),ae.castShadow=!0,p.add(ae)});const g=new ct({color:6333946,roughness:.15,metalness:.6}),N=[15680580,2042167,16777215,959977];R.forEach((O,B)=>{const q=b(O);for(let de=0;de<2;de+=1){const ue=q+(de===0?-1.4:1.4),ae=ie/2+3.2,Me=new ct({color:N[(B*2+de)%N.length],roughness:.4,metalness:.4}),ce=new We(new ft(.95,.32,1.9),Me);ce.position.set(ue,.21,ae),ce.castShadow=!0,p.add(ce);const _e=new We(new ft(.85,.28,1.05),g);_e.position.set(ue,.49,ae+.05),_e.castShadow=!0,p.add(_e)}})},te=ne=>{const ie=new Ls;ie.position.x=b(ne),a.add(ie),v.set(ne,ie),x.set(ne,[]);const R=x.get(ne),S=Z=>{ie.add(Z),R.push(Z)},C=L(),F=P(),G=z(),Y=ne==="A"?15527666:15722204,K=ne==="A"?14409960:15063239,oe=new ct({color:Y,roughness:.85}),fe=new ct({color:K,roughness:.85}),E=new ct({color:10133931,roughness:.92}),g=new ct({color:7041664,roughness:.95}),N=new We(new ft(C+1.2,tn,F+1.2),g);N.position.y=tn/2,N.castShadow=!0,N.receiveShadow=!0,S(N);const O=tn+G/2,B=new We(new ft(C,G,ln),oe);B.position.set(0,O,F/2),B.castShadow=!0,B.receiveShadow=!0,S(B);const q=B.clone();q.position.z=-F/2,S(q);const de=new We(new ft(ln,G,F+ln),fe);de.position.set(-C/2,O,0),de.castShadow=!0,de.receiveShadow=!0,S(de);const ue=de.clone();ue.position.x=C/2,S(ue);for(let Z=1;Z<=I.value.floors;Z+=1){const he=new We(new ft(C+.55,.13,F+.55),E);he.position.y=tn+Z*cr,he.castShadow=!0,he.receiveShadow=!0,S(he)}const ae=new We(new ft(C+.55,.24,F+.55),new ct({color:9080986,roughness:.9}));ae.position.y=tn+G+.12,ae.castShadow=!0,ae.receiveShadow=!0,S(ae);const Me=new ct({color:13159892,roughness:.9}),ce=.16,_e=tn+G+.24+ur/2,Re=new We(new ft(C+.55,ur,ce),Me);Re.position.set(0,_e,F/2+.275-ce/2),Re.castShadow=!0,S(Re);const Ce=Re.clone();Ce.position.z=-2.5949999999999998,S(Ce);const ge=new We(new ft(ce,ur,F+.55),Me);ge.position.set(-(C/2+.275-ce/2),_e,0),ge.castShadow=!0,S(ge);const Ae=ge.clone();Ae.position.x=C/2+.275-ce/2,S(Ae);const Pe=new ct({color:11975876,roughness:.6,metalness:.4}),Je=new We(new ks(.4,.4,.6,16),Pe);Je.position.set(C*.25,tn+G+.24+.3+ur/2,-F*.15),Je.castShadow=!0,S(Je);const _=new We(new ft(.8,.28,.55),new ct({color:4937059,roughness:.7}));_.position.set(-C*.3,tn+G+.24+.14,F*.1),_.castShadow=!0,S(_);const Q=D(`BLOCK ${ne}`,{bg:"#0f172a",fg:"#fbbf24",stroke:"#0f172a",size:78,width:384,height:128}),X=new We(new Ln(2.6,.55),new yr({map:Q}));X.position.set(0,tn+G+.24+ur+.05,F/2+.36),S(X);for(let Z=1;Z<=I.value.floors;Z+=1){const he=D(`F${Z}`,{size:68,fg:"#475569"}),Le=new We(new Ln(.42,.21),new yr({map:he,transparent:!0}));Le.position.set(-(C/2+ln/2+.01),tn+(Z-.5)*cr,F/2-.4),Le.rotation.y=-Math.PI/2,S(Le)}},re=(ne,ie)=>{const R=v.get(ne);if(!R)return;const S=x.get(ne),C=new ct({color:16777215,roughness:.6}),F=new ct({color:16777215,roughness:.6}),G=new ct({color:10265519,roughness:.9}),Y=new ct({color:15198959,roughness:.9}),K=new ct({color:6333946,transparent:!0,opacity:.4,roughness:.1,metalness:.3}),oe=new ct({color:10265519,roughness:.5,metalness:.5}),fe=new ct({color:13751771,roughness:.7}),E=P(),g=I.value.cols,N=I.value.perFloor,O=Math.ceil(N/2);ie.forEach(B=>{const q=B.floor||1,de=q-1,ae=ie.filter(jt=>(jt.floor||1)===q).indexOf(B);if(ae<0)return;const Me=ae>=O,ce=ae%g,_e=[],Re=(ce-(g-1)/2)*(Tn+Ef),Ce=tn+de*cr+cr/2+.06,ge=Me?-E/2:E/2,Ae=Me?-1:1,Pe=jt=>{R.add(jt),S.push(jt),_e.push(jt)},Je=new We(new ft(Tn+.18,Hi+.18,.05),C);Je.position.set(Re,Ce,ge+Ae*(ln/2+.025)),Pe(Je);const _=new ct({color:A[B.status],roughness:.25,metalness:.2,emissive:A[B.status],emissiveIntensity:.18}),Q=new We(new ft(Tn,Hi,.06),_);Q.position.set(Re,Ce,ge+Ae*(ln/2+.06)),Q.userData={unitId:B.id,isBack:Me},R.add(Q),S.push(Q),m.set(B.id,Q);const X=new We(new ft(Tn,.04,.07),F);X.position.set(Re,Ce,ge+Ae*(ln/2+.1)),Pe(X);const Z=new We(new ft(.04,Hi,.07),F);Z.position.set(Re,Ce,ge+Ae*(ln/2+.1)),Pe(Z);const he=new We(new ft(Tn+.32,.05,.16),G);he.position.set(Re,Ce-Hi/2-.12,ge+Ae*(ln/2+.07)),Pe(he);const Le=.45,ze=Ce-Hi/2-.18,lt=new We(new ft(Tn+.36,.08,Le),Y);lt.position.set(Re,ze,ge+Ae*(ln/2+Le/2+.04)),lt.castShadow=!0,lt.receiveShadow=!0,Pe(lt);const pt=.32,Ke=ze+pt/2+.04,mt=ge+Ae*(ln/2+Le+.04),gt=new We(new ft(Tn+.3,pt,.03),K);gt.position.set(Re,Ke,mt),Pe(gt);const Lt=new We(new ft(Tn+.36,.04,.05),oe);Lt.position.set(Re,Ke+pt/2+.02,mt),Pe(Lt);const Pt=new We(new ft(.4,.22,.18),fe);Pt.position.set(Re+Tn/2+.05,Ce+Hi/2-.08,ge+Ae*(ln/2+.09)),Pt.castShadow=!0,Pe(Pt),d.set(B.id,_e)})},j=()=>{var ne;w&&(a.remove(w),(ne=w.material.map)==null||ne.dispose(),w.material.dispose(),w=null)},se=ne=>{if(j(),!ne)return;const ie=m.get(ne);if(!ie)return;const R=new V;ie.getWorldPosition(R);const S=!!ie.userData.isBack,C=U(`#${ne}`);C.material.depthTest=!1,C.renderOrder=1e3,C.position.set(R.x,R.y+Hi/2+.4,R.z+(S?-.25:.25)),a.add(C),w=C},$=()=>{j(),v.forEach((ne,ie)=>{(x.get(ie)||[]).forEach(S=>{var C,F,G;(C=S.material)!=null&&C.map&&((G=(F=S.material.map).dispose)==null||G.call(F)),M(S)}),a.remove(ne)}),v.clear(),x.clear(),m.clear(),d.clear()},Se=()=>{$(),k(),I.value.blocks.forEach(ne=>{te(ne);const ie=t.units.filter(R=>(R.block||"A")===ne);re(ne,ie)})},Ee=ne=>{const ie=t.filter||{block:"all",status:"all",search:""},R=String(ne.status??"").toLowerCase(),S=String(ie.status??"all").toLowerCase();if(ie.block!=="all"&&(ne.block||"A")!==ie.block||S!=="all"&&R!==S)return!1;const C=(ie.search??"").trim().toLowerCase();return!(C&&!ne.id.toLowerCase().includes(C))},be=()=>{const ne=t.filter||{block:"all"};v.forEach((ie,R)=>{ie.visible=ne.block==="all"||ne.block===R}),t.units.forEach(ie=>{const R=Ee(ie),S=m.get(ie.id);if(S){S.visible=R;const C=S.material;R&&(C.color.setHex(A[ie.status]),C.emissive.setHex(A[ie.status]),C.emissiveIntensity=ie.id===y?.7:.18,C.opacity=1,C.transparent=!1),C.needsUpdate=!0}for(const C of d.get(ie.id)||[])C.visible=R})},Oe=ne=>{if(y===ne)return;const ie=y;if(y=ne,ie){const R=t.units.find(C=>C.id===ie),S=m.get(ie);S&&R&&Ee(R)&&(S.material.emissiveIntensity=.18)}if(se(ne),ne){const R=t.units.find(C=>C.id===ne),S=m.get(ne);S&&R&&Ee(R)&&(S.material.emissiveIntensity=.7),r.value=R?{id:R.id,type:R.type,price:R.price,status:R.status,floor:R.floor,block:R.block}:null,document.body.style.cursor=R&&R.status==="available"?"pointer":"not-allowed"}else r.value=null,document.body.style.cursor=""},Ye=ne=>{const ie=s.value.getBoundingClientRect();f.x=(ne.clientX-ie.left)/ie.width*2-1,f.y=-((ne.clientY-ie.top)/ie.height)*2+1,u.setFromCamera(f,l);const R=Array.from(m.values()),S=u.intersectObjects(R,!1);return S.length?S[0].object.userData.unitId:null},le=ne=>Oe(Ye(ne)),me=()=>Oe(null),Te=ne=>{const ie=Ye(ne);if(!ie)return;const R=t.units.find(S=>S.id===ie);R&&i("select",R)},xe=()=>{if(!s.value||!o)return;const ne=s.value.clientWidth,ie=s.value.clientHeight;l.aspect=ne/ie,l.updateProjectionMatrix(),o.setSize(ne,ie)},ke=()=>{const ne=z(),ie=I.value.blocks,R=ie.length*L()+(ie.length-1)*go;c.target.set(0,tn+ne/2,0);const S=Math.max(R*1.05,ne*1.6,18);l.position.set(S*.55,tn+ne*.7,S*.85),c.update()};return ta(()=>{const ne=s.value,ie=ne.clientWidth,R=ne.clientHeight;a=new PM,a.background=new je(15396596),a.fog=new Ql(15396596,45,110),l=new cn(40,ie/R,.1,300),o=new CM({antialias:!0}),o.setSize(ie,R),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.shadowMap.enabled=!0,o.shadowMap.type=Oh,ne.appendChild(o.domElement),c=new HM(l,o.domElement),c.enableDamping=!0,c.dampingFactor=.08,c.maxPolarAngle=Math.PI/2.05,c.minDistance=12,c.maxDistance=80,c.zoomToCursor=!0,c.panSpeed=1.2,a.add(new IM(16777215,10134445,.55));const S=new FM(16777215,.95);S.position.set(20,30,18),S.castShadow=!0,S.shadow.mapSize.set(2048,2048),S.shadow.camera.left=-30,S.shadow.camera.right=30,S.shadow.camera.top=30,S.shadow.camera.bottom=-30,S.shadow.camera.near=1,S.shadow.camera.far=100,S.shadow.bias=-5e-4,a.add(S),u=new BM,f=new Ne,Se(),be(),ke(),o.domElement.addEventListener("click",Te),o.domElement.addEventListener("pointermove",le),o.domElement.addEventListener("pointerleave",me),window.addEventListener("resize",xe);const C=()=>{c.update(),o.render(a,l),h=requestAnimationFrame(C)};C()}),Zi(()=>t.units.map(ne=>`${ne.id}:${ne.status}`).join("|"),()=>be()),Zi(()=>JSON.stringify(t.filter||{}),()=>{if(y){const ne=t.units.find(ie=>ie.id===y);(!ne||!Ee(ne))&&(y=null,j(),r.value=null,document.body.style.cursor="")}be()}),Zi(()=>`${I.value.blocks.join(",")}|${I.value.floors}x${I.value.perFloor}|${t.units.map(ne=>ne.id).join(",")}`,()=>{a&&(Se(),be(),ke())}),Hl(()=>{var ne;cancelAnimationFrame(h),window.removeEventListener("resize",xe),document.body.style.cursor="",j(),$(),p&&(p.children.slice().forEach(M),a.remove(p)),c==null||c.dispose(),o==null||o.dispose(),o!=null&&o.domElement&&((ne=s.value)!=null&&ne.contains(o.domElement))&&s.value.removeChild(o.domElement)}),(ne,ie)=>($e(),nt("div",kM,[pe("div",{ref_key:"container",ref:s,class:"canvas-host"},null,512),ie[0]||(ie[0]=pe("div",{class:"hint"}," Drag to orbit · Wheel / pinch = zoom toward pointer · Right-drag or Shift + drag = pan ",-1)),At(Wl,{name:"fade"},{default:Jo(()=>[r.value?($e(),nt("div",{key:0,class:un(["tooltip",`tip-${r.value.status}`])},[pe("div",VM,"#"+Ze(r.value.id),1),pe("div",GM,[r.value.block?($e(),nt("span",WM,"Block "+Ze(r.value.block),1)):Nt("",!0),r.value.floor?($e(),nt("span",XM," · Floor "+Ze(r.value.floor),1)):Nt("",!0)]),pe("div",qM,Ze(r.value.type)+" · "+Ze(r.value.price),1),pe("div",YM,Ze(r.value.status),1)],2)):Nt("",!0)]),_:1})]))}},JM=ns(ZM,[["__scopeId","data-v-1d8d9f1a"]]),QM={class:"modal"},ey={class:"modal-header"},ty={class:"modal-title"},ny={class:"modal-sub"},iy={class:"modal-note"},sy={class:"field"},ry=["disabled"],oy={class:"field"},ay={key:0},ly=["disabled"],cy={key:0,class:"err"},uy={class:"row"},fy={class:"field"},hy={key:0},dy=["disabled"],py={key:0,class:"err"},my={class:"field"},gy=["disabled"],_y={class:"field"},vy={key:0},xy=["disabled"],Sy={key:0,class:"err"},My={class:"field"},yy=["disabled"],Ey={class:"actions"},by={key:0,type:"submit",class:"btn btn-primary"},Ty={__name:"BookingModal",props:{unit:{type:Object,default:null}},emits:["submit","cancel"],setup(n,{emit:e}){const t=n,i=e,s=Ji({status:"available",customerName:"",phone:"",email:"",salesAgent:"",remark:""}),r=Ji({}),o=Bt(()=>!!t.unit&&t.unit.status!=="available"),a={hold:"Auto-generated: Waiting loan approval.",deposit_locked:"Auto-generated: Buyer paid deposit, unit is locked.",booked:"Auto-generated: Loan approved.",unavailable:"Auto-generated: SPA signed."},l=p=>{const v=p.id.split("").reduce((x,m)=>x+m.charCodeAt(0),0);return{customerName:`Customer ${p.id}`,phone:`01${String(v*137%1e8).padStart(8,"0")}`,email:`customer.${p.id.toLowerCase().replace(/[^a-z0-9]/g,"")}@demo.com`,salesAgent:`Agent ${String.fromCharCode(65+v%5)}`,remark:a[p.status]||"Auto-generated unit record."}};Zi(()=>t.unit,p=>{if(p){const v=p.status!=="available"?l(p):null;Object.assign(s,{status:p.status||"available",customerName:p.customerName||(v==null?void 0:v.customerName)||"",phone:p.phone||(v==null?void 0:v.phone)||"",email:p.email||(v==null?void 0:v.email)||"",salesAgent:p.salesAgent||(v==null?void 0:v.salesAgent)||"",remark:p.remark||(v==null?void 0:v.remark)||""}),Object.keys(r).forEach(x=>delete r[x])}},{immediate:!0});const c=()=>(Object.keys(r).forEach(p=>delete r[p]),(s.status==="booked"||s.status==="deposit_locked")&&(s.customerName.trim()||(r.customerName="Required"),s.phone.trim()||(r.phone="Required"),s.salesAgent.trim()||(r.salesAgent="Required")),s.status==="hold"&&!s.salesAgent.trim()&&(r.salesAgent="Required for On Hold"),Object.keys(r).length===0),u=()=>{o.value||c()&&i("submit",{...s,unitId:t.unit.id})},f=()=>{i("cancel",{...s,unitId:t.unit.id})},h=Bt(()=>!!t.unit);return(p,v)=>($e(),Rr(Wl,{name:"fade"},{default:Jo(()=>[h.value?($e(),nt("div",{key:0,class:"modal-overlay",onClick:Xc(f,["self"])},[pe("div",QM,[pe("header",ey,[pe("div",null,[pe("div",ty,"Update Unit #"+Ze(n.unit.id),1),pe("div",ny,Ze(n.unit.type)+" · "+Ze(n.unit.price),1)]),pe("div",iy,Ze(o.value?"Existing status record (read-only)":"Set unit progress status"),1)]),pe("form",{class:"modal-body",onSubmit:Xc(u,["prevent"])},[pe("div",sy,[v[7]||(v[7]=pe("label",null,"Status *",-1)),rs(pe("select",{"onUpdate:modelValue":v[0]||(v[0]=x=>s.status=x),disabled:o.value},[...v[6]||(v[6]=[pe("option",{value:"available"},"Available",-1),pe("option",{value:"hold"},"On Hold (waiting loan approval)",-1),pe("option",{value:"deposit_locked"},"Deposit Locked (buyer paid deposit)",-1),pe("option",{value:"booked"},"Booked (loan approved)",-1),pe("option",{value:"unavailable"},"Unavailable (SPA signed)",-1)])],8,ry),[[Xm,s.status]])]),pe("div",oy,[pe("label",null,[v[8]||(v[8]=Mr("Customer Name ",-1)),s.status==="booked"||s.status==="deposit_locked"?($e(),nt("span",ay,"*")):Nt("",!0)]),rs(pe("input",{"onUpdate:modelValue":v[1]||(v[1]=x=>s.customerName=x),disabled:o.value,type:"text",placeholder:"John Tan"},null,8,ly),[[tr,s.customerName]]),r.customerName?($e(),nt("span",cy,Ze(r.customerName),1)):Nt("",!0)]),pe("div",uy,[pe("div",fy,[pe("label",null,[v[9]||(v[9]=Mr("Phone Number ",-1)),s.status==="booked"||s.status==="deposit_locked"?($e(),nt("span",hy,"*")):Nt("",!0)]),rs(pe("input",{"onUpdate:modelValue":v[2]||(v[2]=x=>s.phone=x),disabled:o.value,type:"tel",placeholder:"012-3456789"},null,8,dy),[[tr,s.phone]]),r.phone?($e(),nt("span",py,Ze(r.phone),1)):Nt("",!0)]),pe("div",my,[v[10]||(v[10]=pe("label",null,"Email",-1)),rs(pe("input",{"onUpdate:modelValue":v[3]||(v[3]=x=>s.email=x),disabled:o.value,type:"email",placeholder:"john@example.com"},null,8,gy),[[tr,s.email]])])]),pe("div",_y,[pe("label",null,[v[11]||(v[11]=Mr("Sales Agent Name ",-1)),s.status!=="available"?($e(),nt("span",vy,"*")):Nt("",!0)]),rs(pe("input",{"onUpdate:modelValue":v[4]||(v[4]=x=>s.salesAgent=x),disabled:o.value,type:"text",placeholder:"Agent Lee"},null,8,xy),[[tr,s.salesAgent]]),r.salesAgent?($e(),nt("span",Sy,Ze(r.salesAgent),1)):Nt("",!0)]),pe("div",My,[v[12]||(v[12]=pe("label",null,"Remark",-1)),rs(pe("textarea",{"onUpdate:modelValue":v[5]||(v[5]=x=>s.remark=x),disabled:o.value,rows:"3",placeholder:"Optional notes"},null,8,yy),[[tr,s.remark]])]),pe("div",Ey,[pe("button",{type:"button",class:"btn btn-secondary",onClick:f},Ze(o.value?"Close":"Cancel"),1),o.value?Nt("",!0):($e(),nt("button",by,"Save Status"))])],32)])])):Nt("",!0)]),_:1}))}},Ay=ns(Ty,[["__scopeId","data-v-1062df76"]]),wy={class:"legend"},Ry={__name:"StatusLegend",setup(n){const e=[{label:"Available",note:"Open for sale",color:"var(--color-available)"},{label:"On Hold",note:"Waiting loan approval",color:"var(--color-hold)"},{label:"Deposit Locked",note:"Buyer paid deposit",color:"var(--color-deposit-locked)"},{label:"Booked",note:"Loan approved",color:"var(--color-booked)"},{label:"Unavailable",note:"SPA signed",color:"var(--color-unavailable)"}];return(t,i)=>($e(),nt("div",wy,[($e(),nt(Ft,null,Ns(e,s=>pe("span",{key:s.label,class:"legend-item"},[pe("span",{class:"legend-dot",style:jo({background:s.color})},null,4),pe("span",null,Ze(s.label),1),pe("small",null,Ze(s.note),1)])),64))]))}},Cy=ns(Ry,[["__scopeId","data-v-d44bddaf"]]),Py={class:"filters"},Ly={class:"filter-group"},Dy=["onClick"],Uy={class:"filter-group"},Iy=["onClick"],Ny=["value"],Oy={class:"count"},Fy={__name:"FilterBar",props:{units:{type:Array,required:!0},filter:{type:Object,required:!0}},emits:["update:filter"],setup(n,{emit:e}){const t=n,i=e,s=Bt(()=>Array.from(new Set(t.units.map(u=>u.block||"A"))).sort()),r=[{id:"all",label:"All"},{id:"available",label:"Available"},{id:"hold",label:"On Hold"},{id:"deposit_locked",label:"Deposit Locked"},{id:"booked",label:"Booked"},{id:"unavailable",label:"Unavailable"}],o=(u,f)=>{i("update:filter",{...t.filter,[u]:f})},a=Bt(()=>t.units.filter(u=>{if(t.filter.block!=="all"&&(u.block||"A")!==t.filter.block)return!1;const f=String(u.status??"").toLowerCase(),h=String(t.filter.status??"all").toLowerCase();if(h!=="all"&&f!==h)return!1;const p=(t.filter.search??"").trim().toLowerCase();return!(p&&!u.id.toLowerCase().includes(p))})),l=Bt(()=>{var u;return t.filter.block!=="all"||t.filter.status!=="all"||!!((u=t.filter.search)!=null&&u.trim())}),c=()=>{i("update:filter",{block:"all",status:"all",search:""})};return(u,f)=>($e(),nt("div",Py,[pe("div",Ly,[pe("button",{class:un(["filter-pill",{active:n.filter.block==="all"}]),onClick:f[0]||(f[0]=h=>o("block","all"))}," All Blocks ",2),($e(!0),nt(Ft,null,Ns(s.value,h=>($e(),nt("button",{key:h,class:un(["filter-pill",{active:n.filter.block===h}]),onClick:p=>o("block",h)}," Block "+Ze(h),11,Dy))),128))]),pe("div",Uy,[($e(),nt(Ft,null,Ns(r,h=>pe("button",{key:h.id,class:un(["filter-pill",{active:n.filter.status===h.id}]),onClick:p=>o("status",h.id)},[h.id!=="all"?($e(),nt("span",{key:0,class:un(["dot",`dot-${h.id}`])},null,2)):Nt("",!0),Mr(" "+Ze(h.label),1)],10,Iy)),64))]),pe("input",{value:n.filter.search,type:"text",placeholder:"Search unit (e.g. A-301)",class:"search-box",onInput:f[1]||(f[1]=h=>o("search",h.target.value))},null,40,Ny),pe("span",Oy,Ze(a.value.length)+" unit"+Ze(a.value.length===1?"":"s"),1),l.value?($e(),nt("button",{key:0,class:"reset-btn",onClick:c},"Reset")):Nt("",!0)]))}},By=ns(Fy,[["__scopeId","data-v-79a7ec35"]]),Rl=60*1e3,dd=["A","B"],nc=10,pd=10,zy=["Studio","1 Bedroom","2 Bedroom","3 Bedroom","Penthouse"],Hy={Studio:"RM 350,000","1 Bedroom":"RM 420,000","2 Bedroom":"RM 580,000","3 Bedroom":"RM 780,000",Penthouse:"RM 1,250,000"},ky=(n,e)=>n===nc?"Penthouse":zy[(n+e)%4],md=()=>{const n=[];return dd.forEach(e=>{for(let t=1;t<=nc;t+=1)for(let i=1;i<=pd;i+=1){const s=`${e}-${t}${String(i).padStart(2,"0")}`,r=ky(t,i-1);n.push({id:s,block:e,floor:t,status:"available",price:Hy[r],type:r,customerName:"",phone:"",email:"",salesAgent:"",remark:"",holdBy:null,holdExpiresAt:null})}}),[3,11,22,39,47,55,63,71].forEach((e,t)=>{n[e]&&(n[e].status=t%2===0?"unavailable":"booked")}),[6,18,32,44,58,66,74,88].forEach(e=>{n[e]&&(n[e].status="hold",n[e].holdBy="Other Agent")}),[14,28,52,86].forEach(e=>{n[e]&&(n[e].status="deposit_locked")}),n},Vo=Ji(md()),Lr=Ji([]),Eo=_i(""),gd=_i("info"),Dr=new Map,gi=(n,e="info")=>{Eo.value=n,gd.value=e,setTimeout(()=>{Eo.value===n&&(Eo.value="")},3e3)},ca=n=>{const e=Dr.get(n);e&&(clearTimeout(e),Dr.delete(n))},js=n=>Vo.find(e=>e.id===n),Vy=(n,e="Current Agent")=>{const t=js(n);if(!t||t.status!=="available")return!1;t.status="hold",t.holdBy=e,t.holdExpiresAt=Date.now()+Rl,ca(n);const i=setTimeout(()=>{const s=js(n);s&&s.status==="hold"&&_d(n,!0)},Rl);return Dr.set(n,i),!0},_d=(n,e=!1)=>{const t=js(n);t&&(ca(n),t.status="available",t.holdBy=null,t.holdExpiresAt=null,e&&gi("Unit hold expired. Please select again.","warning"))},Gy=n=>{var t;const e=js(n.unitId);return e?(ca(e.id),e.status=n.status,e.customerName=n.customerName||"",e.phone=n.phone||"",e.email=n.email||"",e.salesAgent=n.salesAgent||"",e.remark=n.remark||"",e.holdExpiresAt=null,e.holdBy=n.status==="hold"?((t=n.salesAgent)==null?void 0:t.trim())||"Other Agent":null,n.status==="booked"?(Lr.unshift({unitId:n.unitId,customerName:n.customerName||"",phone:n.phone||"",email:n.email||"",salesAgent:n.salesAgent||"",remark:n.remark||"",bookedAt:new Date().toISOString()}),gi(`Unit ${e.id} marked as Booked (loan approved).`,"success")):n.status==="hold"?gi(`Unit ${e.id} marked as On Hold (waiting loan approval).`,"warning"):n.status==="deposit_locked"?gi(`Unit ${e.id} deposit paid, unit locked.`,"success"):n.status==="unavailable"?gi(`Unit ${e.id} marked as Unavailable (SPA signed).`,"info"):gi(`Unit ${e.id} set to Available.`,"success"),!0):!1},Wy=n=>{const e=js(n.unitId);return e?(e.customerName=n.customerName||"",e.phone=n.phone||"",e.email=n.email||"",e.salesAgent=n.salesAgent||"",e.remark=n.remark||"",!0):!1},Xy=n=>{const e=js(n.unitId);return e?(ca(e.id),e.status="booked",e.holdBy=null,e.holdExpiresAt=null,Lr.unshift({...n,bookedAt:new Date().toISOString()}),gi(`Unit ${e.id} booked successfully.`,"success"),!0):!1},qy=()=>{Dr.forEach(e=>clearTimeout(e)),Dr.clear();const n=md();n.forEach(e=>{const t=Math.random();t<.1?e.status="unavailable":t<.2?e.status="booked":t<.28?e.status="deposit_locked":t<.38?(e.status="hold",e.holdBy="Other Agent"):e.status="available"}),Vo.splice(0,Vo.length,...n),Lr.splice(0,Lr.length),gi("Demo floor plan generated.","success")},Yy=()=>({units:Vo,bookings:Lr,toastMessage:Eo,toastType:gd,holdUnit:Vy,releaseUnit:_d,saveUnitStatus:Gy,saveUnitDraft:Wy,confirmBooking:Xy,regenerateUnits:qy,HOLD_DURATION_MS:Rl,BLOCKS:dd,FLOORS:nc,UNITS_PER_FLOOR:pd}),$y={class:"app"},jy={class:"stats"},Ky={class:"stat"},Zy={class:"stat-value available"},Jy={class:"stat"},Qy={class:"stat-value hold"},eE={class:"stat"},tE={class:"stat-value deposit-locked"},nE={class:"stat"},iE={class:"stat-value booked"},sE={class:"stat"},rE={class:"stat-value unavailable"},oE={class:"main"},aE={class:"grid-section"},lE={class:"section-head"},cE={class:"head-left"},uE={class:"view-toggle"},fE={__name:"App",setup(n){const{units:e,toastMessage:t,toastType:i,saveUnitStatus:s,saveUnitDraft:r,regenerateUnits:o}=Yy(),a=_i("3d"),l=_i({block:"all",status:"all",search:""}),c=_i(null),u=Bt(()=>c.value?e.find(w=>w.id===c.value):null),f=Bt(()=>{const w={available:0,hold:0,deposit_locked:0,booked:0,unavailable:0};return e.forEach(y=>{w[y.status]=(w[y.status]||0)+1}),w}),h=w=>{c.value=w.id},p=w=>{s(w),c.value=null},v=w=>{w!=null&&w.unitId&&r(w),c.value=null},x=_i(""),m=Bt(()=>t.value||x.value),d=Bt(()=>t.value?i.value:"info");return ta(()=>{o()}),(w,y)=>($e(),nt("div",$y,[y[9]||(y[9]=pe("header",{class:"app-header"},[pe("div",{class:"brand"},[pe("div",{class:"logo"},"P"),pe("div",null,[pe("h1",null,"Property Unit Booking & Tracking System"),pe("p",null,"Sales agent dashboard · Live unit availability")])])],-1)),pe("section",jy,[pe("div",Ky,[y[3]||(y[3]=pe("span",{class:"stat-label"},"Available",-1)),pe("span",Zy,Ze(f.value.available),1)]),pe("div",Jy,[y[4]||(y[4]=pe("span",{class:"stat-label"},"On Hold",-1)),pe("span",Qy,Ze(f.value.hold),1)]),pe("div",eE,[y[5]||(y[5]=pe("span",{class:"stat-label"},"Deposit Locked",-1)),pe("span",tE,Ze(f.value.deposit_locked),1)]),pe("div",nE,[y[6]||(y[6]=pe("span",{class:"stat-label"},"Booked",-1)),pe("span",iE,Ze(f.value.booked),1)]),pe("div",sE,[y[7]||(y[7]=pe("span",{class:"stat-label"},"Unavailable",-1)),pe("span",rE,Ze(f.value.unavailable),1)])]),pe("main",oE,[pe("section",aE,[pe("div",lE,[pe("div",cE,[y[8]||(y[8]=pe("h2",null,"Floor Plan",-1)),pe("div",uE,[pe("button",{type:"button",class:un(["toggle-btn",{active:a.value==="3d"}]),onClick:y[0]||(y[0]=A=>a.value="3d")}," 3D View ",2),pe("button",{type:"button",class:un(["toggle-btn",{active:a.value==="grid"}]),onClick:y[1]||(y[1]=A=>a.value="grid")}," Grid View ",2)])]),At(Cy)]),At(By,{units:vo(e),filter:l.value,"onUpdate:filter":y[2]||(y[2]=A=>l.value=A)},null,8,["units","filter"]),a.value==="3d"?($e(),Rr(JM,{key:0,units:vo(e),filter:l.value,onSelect:h},null,8,["units","filter"])):($e(),Rr(mg,{key:1,units:vo(e),filter:l.value,onSelect:h},null,8,["units","filter"]))])]),At(Ay,{unit:u.value,onSubmit:p,onCancel:v},null,8,["unit"]),At(Wl,{name:"toast"},{default:Jo(()=>[m.value?($e(),nt("div",{key:0,class:un(["toast",`toast-${d.value}`])},Ze(m.value),3)):Nt("",!0)]),_:1})]))}},hE=ns(fE,[["__scopeId","data-v-090369d8"]]);Km(hE).mount("#app");
