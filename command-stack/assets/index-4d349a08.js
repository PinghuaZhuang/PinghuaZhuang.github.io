(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var y={exports:{}},d=typeof Reflect=="object"?Reflect:null,m=d&&typeof d.apply=="function"?d.apply:function(e,n,r){return Function.prototype.apply.call(e,n,r)},h;d&&typeof d.ownKeys=="function"?h=d.ownKeys:Object.getOwnPropertySymbols?h=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:h=function(e){return Object.getOwnPropertyNames(e)};function N(t){console&&console.warn&&console.warn(t)}var _=Number.isNaN||function(e){return e!==e};function u(){u.init.call(this)}y.exports=u;y.exports.once=A;u.EventEmitter=u;u.prototype._events=void 0;u.prototype._eventsCount=0;u.prototype._maxListeners=void 0;var L=10;function v(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return L},set:function(t){if(typeof t!="number"||t<0||_(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");L=t}});u.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};u.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||_(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function g(t){return t._maxListeners===void 0?u.defaultMaxListeners:t._maxListeners}u.prototype.getMaxListeners=function(){return g(this)};u.prototype.emit=function(e){for(var n=[],r=1;r<arguments.length;r++)n.push(arguments[r]);var s=e==="error",o=this._events;if(o!==void 0)s=s&&o.error===void 0;else if(!s)return!1;if(s){var i;if(n.length>0&&(i=n[0]),i instanceof Error)throw i;var a=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw a.context=i,a}var f=o[e];if(f===void 0)return!1;if(typeof f=="function")m(f,this,n);else for(var c=f.length,l=O(f,c),r=0;r<c;++r)m(l[r],this,n);return!0};function b(t,e,n,r){var s,o,i;if(v(n),o=t._events,o===void 0?(o=t._events=Object.create(null),t._eventsCount=0):(o.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),i=o[e]),i===void 0)i=o[e]=n,++t._eventsCount;else if(typeof i=="function"?i=o[e]=r?[n,i]:[i,n]:r?i.unshift(n):i.push(n),s=g(t),s>0&&i.length>s&&!i.warned){i.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=i.length,N(a)}return t}u.prototype.addListener=function(e,n){return b(this,e,n,!1)};u.prototype.on=u.prototype.addListener;u.prototype.prependListener=function(e,n){return b(this,e,n,!0)};function k(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function x(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},s=k.bind(r);return s.listener=n,r.wrapFn=s,s}u.prototype.once=function(e,n){return v(n),this.on(e,x(this,e,n)),this};u.prototype.prependOnceListener=function(e,n){return v(n),this.prependListener(e,x(this,e,n)),this};u.prototype.removeListener=function(e,n){var r,s,o,i,a;if(v(n),s=this._events,s===void 0)return this;if(r=s[e],r===void 0)return this;if(r===n||r.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete s[e],s.removeListener&&this.emit("removeListener",e,r.listener||n));else if(typeof r!="function"){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===n||r[i].listener===n){a=r[i].listener,o=i;break}if(o<0)return this;o===0?r.shift():C(r,o),r.length===1&&(s[e]=r[0]),s.removeListener!==void 0&&this.emit("removeListener",e,a||n)}return this};u.prototype.off=u.prototype.removeListener;u.prototype.removeAllListeners=function(e){var n,r,s;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[e]),this;if(arguments.length===0){var o=Object.keys(r),i;for(s=0;s<o.length;++s)i=o[s],i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=r[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(s=n.length-1;s>=0;s--)this.removeListener(e,n[s]);return this};function w(t,e,n){var r=t._events;if(r===void 0)return[];var s=r[e];return s===void 0?[]:typeof s=="function"?n?[s.listener||s]:[s]:n?S(s):O(s,s.length)}u.prototype.listeners=function(e){return w(this,e,!0)};u.prototype.rawListeners=function(e){return w(this,e,!1)};u.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):E.call(t,e)};u.prototype.listenerCount=E;function E(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}u.prototype.eventNames=function(){return this._eventsCount>0?h(this._events):[]};function O(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function C(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function S(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function A(t,e){return new Promise(function(n,r){function s(i){t.removeListener(e,o),r(i)}function o(){typeof t.removeListener=="function"&&t.removeListener("error",s),n([].slice.call(arguments))}I(t,e,o,{once:!0}),e!=="error"&&R(t,s,{once:!0})})}function R(t,e,n){typeof t.on=="function"&&I(t,"error",e,n)}function I(t,e,n,r){if(typeof t.on=="function")r.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function s(o){r.once&&t.removeEventListener(e,s),n(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var j=y.exports;class p extends j.EventEmitter{constructor(e={}){super(),this.$stackIdx=-1,this.$event=null,this._stack=[],this._handlers={},this._handlers=Object.assign({},e),this.rigister()}get _stackIdx(){return this.$stackIdx}set _stackIdx(e){const n=e-this.$stackIdx,r=this._stack[e],s=this._stack[this.$stackIdx],o=n>0;this.$event={target:o?r:s,end:o?s:r,step:n,redo:o},this.emit(p.events.STACK_CHANGE,this.$event),this.$stackIdx=e}get undoDisabled(){return this._stackIdx<0}get redoDisabled(){return this._stackIdx>=this._stack.length-1}dispatch(e){this._stack.splice(this._stackIdx+1),this._stack.push(e),this._stackIdx++,this.$event=null}excute(e){this.emit(e.type,this.$event),this.$event=null}undo(){this.undoDisabled||this.excute(this._stack[this._stackIdx--])}redo(){this.redoDisabled||this.excute(this._stack[++this._stackIdx])}rigister(e){const n=this._handlers=e||this._handlers;let r;for(r in n)this.on(r,n[r])}clean(){this._stackIdx=-1,this._stack=[],this.$event=null}destroy(){this.clean();const e=this._handlers;let n;for(n in e)this.off(n,e[n]);this._handlers={}}}p.events={STACK_CHANGE:"stack.change"};window.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#inp"),e=document.querySelector("#updateInp"),n=document.querySelector('button[data-type="undo"]'),r=document.querySelector('button[data-type="redo"]'),s=document.querySelector('button[data-type="insert"]'),o=document.querySelector('button[data-type="update"]'),i=new p({INSERT({redo:f,target:c,end:l}){if(f){t.value=c.context.value,console.log("INSERT redo",t.value,c,l);return}t.value=c.context.oldValue,console.log("INSERT undo",t.value,c,l)},CHANGE({redo:f,target:c,end:l}){if(f){t.value=c.context.value,console.log("CHANGE redo",t.value,c,l);return}t.value=c.context.oldValue,console.log("CHANGE undo",t.value,c,l)}});window.cs=i;const a=()=>{n.disabled=i.undoDisabled,r.disabled=i.redoDisabled};o.onclick=f=>{const c=e.value;console.log("update:",c);const l=t.value;t.value=c,i.dispatch({type:"CHANGE",context:{selectionStart:t.selectionStart,value:t.value,oldValue:l}}),a()},s.onclick=()=>{if(!e.value)return;const f=`{${e.value}}`,c=t.value,l=t.selectionStart??c.length;t.value=c.slice(0,l)+f+c.slice(l),i.dispatch({type:"INSERT",context:{selectionStart:t.selectionStart,value:t.value,oldValue:c,insert:f}}),a()},n.onclick=()=>{i.undo(),a()},r.onclick=()=>{i.redo(),a()},a()});
