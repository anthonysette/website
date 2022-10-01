import { cloneVNode, h as h$1, Fragment, inject, provide, ref, onMounted, watchEffect, computed, defineComponent, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Transition, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}

var R=(o=>(o[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o))(R||{}),O$1=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(O$1||{});function V({visible:r=!0,features:t=0,ourProps:e,theirProps:o,...i}){var a;let n=k(o,e),s=Object.assign(i,{props:n});if(r||t&2&&n.static)return p$1(s);if(t&1){let l=(a=n.unmount)==null||a?0:1;return u(l,{[0](){return null},[1](){return p$1({...i,props:{...n,hidden:!0,style:{display:"none"}}})}})}return p$1(s)}function p$1({props:r,attrs:t,slots:e,slot:o,name:i}){var y;let{as:n,...s}=w$1(r,["unmount","static"]),a=(y=e.default)==null?void 0:y.call(e,o),l={};if(o){let f=!1,u=[];for(let[d,c]of Object.entries(o))typeof c=="boolean"&&(f=!0),c===!0&&u.push(d);f&&(l["data-headlessui-state"]=u.join(" "));}if(n==="template"){if(a=g(a),Object.keys(s).length>0||Object.keys(t).length>0){let[f,...u]=a!=null?a:[];if(!x(f)||u.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).sort((d,c)=>d.localeCompare(c)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));return cloneVNode(f,Object.assign({},s,l))}return Array.isArray(a)&&a.length===1?a[0]:a}return h$1(n,Object.assign({},s,l),a)}function g(r){return r.flatMap(t=>t.type===Fragment?g(t.children):[t])}function k(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let i of r)for(let n in i)n.startsWith("on")&&typeof i[n]=="function"?((e[n])!=null||(e[n]=[]),e[n].push(i[n])):t[n]=i[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(i=>[i,void 0])));for(let i in e)Object.assign(t,{[i](n,...s){let a=e[i];for(let l of a){if(n instanceof Event&&n.defaultPrevented)return;l(n,...s);}}});return t}function w$1(r,t=[]){let e=Object.assign({},r);for(let o of t)o in e&&delete e[o];return e}function x(r){return r==null?!1:typeof r.type=="string"||typeof r.type=="object"||typeof r.type=="function"}

let e$1=0;function n$2(){return ++e$1}function t(){return n$2()}

var o$1=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o$1||{});

function o(n){var l;return n==null||n.value==null?null:(l=n.value.$el)!=null?l:n.value}

let n$1=Symbol("Context");var l=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(l||{});function p(){return inject(n$1,null)}function c(o){provide(n$1,o);}

function r(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return "button"}function b$1(t,e){let n=ref(r(t.value.type,t.value.as));return onMounted(()=>{n.value=r(t.value.type,t.value.as);}),watchEffect(()=>{var o$1;n.value||!o(e)||o(e)instanceof HTMLButtonElement&&!((o$1=o(e))!=null&&o$1.hasAttribute("type"))&&(n.value="button");}),n}

const e="undefined"=="undefined";

function m$1(r){if(e)return null;if(r instanceof Node)return r.ownerDocument;if(r!=null&&r.hasOwnProperty("value")){let o$1=o(r);if(o$1)return o$1.ownerDocument}return document}

let m=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(M||{}),N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N||{}),b=(r=>(r[r.Previous=-1]="Previous",r[r.Next=1]="Next",r))(b||{});function E$1(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(m))}var F=(r=>(r[r.Strict=0]="Strict",r[r.Loose=1]="Loose",r))(F||{});function h(e,t=0){var r;return e===((r=m$1(e))==null?void 0:r.body)?!1:u(t,{[0](){return e.matches(m)},[1](){let l=e;for(;l!==null;){if(l.matches(m))return !0;l=l.parentElement;}return !1}})}let H=["textarea","input"].join(",");function S(e){var t,r;return (r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,H))!=null?r:!1}function O(e,t=r=>r){return e.slice().sort((r,l)=>{let o=t(r),s=t(l);if(o===null||s===null)return 0;let n=o.compareDocumentPosition(s);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function P(e,t,r=!0,l=null){var c;let o=(c=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?c:document,s=Array.isArray(e)?r?O(e):e:E$1(e);l=l!=null?l:o.activeElement;let n=(()=>{if(t&5)return 1;if(t&10)return -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(l))-1;if(t&4)return Math.max(0,s.indexOf(l))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=t&32?{preventScroll:!0}:{},a=0,i=s.length,u;do{if(a>=i||a+i<=0)return 0;let f=x+a;if(t&16)f=(f+i)%i;else {if(f<0)return 3;if(f>=i)return 1}u=s[f],u==null||u.focus(p),a+=n;}while(u!==o.activeElement);return t&6&&S(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}

function v(e$1,t,n){e||watchEffect(o=>{document.addEventListener(e$1,t,n),o(()=>document.removeEventListener(e$1,t,n));});}

function y(a,f,l=computed(()=>!0)){function i(t,m){if(!l.value||t.defaultPrevented)return;let n=m(t);if(n===null||!n.ownerDocument.documentElement.contains(n))return;let c=function r(e){return typeof e=="function"?r(e()):Array.isArray(e)||e instanceof Set?e:[e]}(a);for(let r of c){if(r===null)continue;let e=r instanceof HTMLElement?r:o(r);if(e!=null&&e.contains(n))return}return !h(n,F.Loose)&&n.tabIndex!==-1&&t.preventDefault(),f(t,n)}let o$1=ref(null);v("mousedown",t=>{l.value&&(o$1.value=t.target);},!0),v("click",t=>{!o$1.value||(i(t,()=>o$1.value),o$1.value=null);},!0),v("blur",t=>i(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0);}

var a=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(a||{});let f=defineComponent({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(r,{slots:t,attrs:d}){return ()=>{let{features:e,...o}=r,n={"aria-hidden":(e&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return V({ourProps:n,theirProps:o,slot:{},attrs:d,slots:t,name:"Hidden"})}}});

function w(e$1,n,t){e||watchEffect(o=>{window.addEventListener(e$1,n,t),o(()=>window.removeEventListener(e$1,n,t));});}

var d=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(d||{});function n(){let o=ref(0);return w("keydown",e=>{e.key==="Tab"&&(o.value=e.shiftKey?1:0);}),o}

function E(n,e$1,o,r){e||watchEffect(t=>{n=n!=null?n:window,n.addEventListener(e$1,o,r),t(()=>n.removeEventListener(e$1,o,r));});}

var fe=(f=>(f[f.Open=0]="Open",f[f.Closed=1]="Closed",f))(fe||{});let Z=Symbol("PopoverContext");function W(P){let S=inject(Z,null);if(S===null){let f=new Error(`<${P} /> is missing a parent <${ce.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,W),f}return S}let ee=Symbol("PopoverGroupContext");function te(){return inject(ee,null)}let oe=Symbol("PopoverPanelContext");function ve(){return inject(oe,null)}let ce=defineComponent({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(P,{slots:S,attrs:f,expose:E$1}){var p;let t$1=`headlessui-popover-button-${t()}`,e=`headlessui-popover-panel-${t()}`,m=ref(null);E$1({el:m,$el:m});let a=ref(1),b=ref(null),g=ref(null),y$1=ref(null),s=ref(null),c$1=computed(()=>m$1(m)),O=computed(()=>{if(!o(b)||!o(s))return !1;for(let n of document.querySelectorAll("body > *"))if(Number(n==null?void 0:n.contains(o(b)))^Number(n==null?void 0:n.contains(o(s))))return !0;return !1}),d={popoverState:a,buttonId:t$1,panelId:e,panel:s,button:b,isPortalled:O,beforePanelSentinel:g,afterPanelSentinel:y$1,togglePopover(){a.value=u(a.value,{[0]:1,[1]:0});},closePopover(){a.value!==1&&(a.value=1);},close(n){d.closePopover();let i=(()=>n?n instanceof HTMLElement?n:n.value instanceof HTMLElement?o(n):o(d.button):o(d.button))();i==null||i.focus();}};provide(Z,d),c(computed(()=>u(a.value,{[0]:l.Open,[1]:l.Closed})));let D={buttonId:t$1,panelId:e,close(){d.closePopover();}},l$1=te(),o$1=l$1==null?void 0:l$1.registerPopover;function u$1(){var n,i,v,k;return (k=l$1==null?void 0:l$1.isFocusWithinPopoverGroup())!=null?k:((n=c$1.value)==null?void 0:n.activeElement)&&(((i=o(b))==null?void 0:i.contains(c$1.value.activeElement))||((v=o(s))==null?void 0:v.contains(c$1.value.activeElement)))}return watchEffect(()=>o$1==null?void 0:o$1(D)),E((p=c$1.value)==null?void 0:p.defaultView,"focus",n=>{var i,v;a.value===0&&(u$1()||!b||!s||(i=o(d.beforePanelSentinel))!=null&&i.contains(n.target)||(v=o(d.afterPanelSentinel))!=null&&v.contains(n.target)||d.closePopover());},!0),y([b,s],(n,i)=>{var v;d.closePopover(),h(i,F.Loose)||(n.preventDefault(),(v=o(b))==null||v.focus());},computed(()=>a.value===0)),()=>{let n={open:a.value===0,close:d.close};return V({theirProps:P,ourProps:{ref:m},slot:n,slots:S,attrs:f,name:"Popover"})}}}),Be=defineComponent({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(P$1,{attrs:S,slots:f$1,expose:E}){let t$1=W("PopoverButton"),e=computed(()=>m$1(t$1.button));E({el:t$1.button,$el:t$1.button});let m=te(),a$1=m==null?void 0:m.closeOthers,b=ve(),g=b===null?!1:b===t$1.panelId,y=ref(null),s=`headlessui-focus-sentinel-${t()}`;g||watchEffect(()=>{t$1.button.value=y.value;});let c=b$1(computed(()=>({as:P$1.as,type:S.type})),y);function O(o$2){var u,p,n,i,v;if(g){if(t$1.popoverState.value===1)return;switch(o$2.key){case o$1.Space:case o$1.Enter:o$2.preventDefault(),(p=(u=o$2.target).click)==null||p.call(u),t$1.closePopover(),(n=o(t$1.button))==null||n.focus();break}}else switch(o$2.key){case o$1.Space:case o$1.Enter:o$2.preventDefault(),o$2.stopPropagation(),t$1.popoverState.value===1&&(a$1==null||a$1(t$1.buttonId)),t$1.togglePopover();break;case o$1.Escape:if(t$1.popoverState.value!==0)return a$1==null?void 0:a$1(t$1.buttonId);if(!o(t$1.button)||((i=e.value)==null?void 0:i.activeElement)&&!((v=o(t$1.button))!=null&&v.contains(e.value.activeElement)))return;o$2.preventDefault(),o$2.stopPropagation(),t$1.closePopover();break}}function d$1(o){g||o.key===o$1.Space&&o.preventDefault();}function D(o$1){var u,p;P$1.disabled||(g?(t$1.closePopover(),(u=o(t$1.button))==null||u.focus()):(o$1.preventDefault(),o$1.stopPropagation(),t$1.popoverState.value===1&&(a$1==null||a$1(t$1.buttonId)),t$1.togglePopover(),(p=o(t$1.button))==null||p.focus()));}function l(o){o.preventDefault(),o.stopPropagation();}return ()=>{let o$1=t$1.popoverState.value===0,u$1={open:o$1},p=g?{ref:y,type:c.value,onKeydown:O,onClick:D}:{ref:y,id:t$1.buttonId,type:c.value,"aria-expanded":P$1.disabled?void 0:t$1.popoverState.value===0,"aria-controls":o(t$1.panel)?t$1.panelId:void 0,disabled:P$1.disabled?!0:void 0,onKeydown:O,onKeyup:d$1,onClick:D,onMousedown:l},n$1=n();function i(){let v=o(t$1.panel);if(!v)return;function k(){u(n$1.value,{[d.Forwards]:()=>P(v,M.First),[d.Backwards]:()=>P(v,M.Last)});}k();}return h$1(Fragment,[V({ourProps:p,theirProps:{...S,...P$1},slot:u$1,attrs:S,slots:f$1,name:"PopoverButton"}),o$1&&!g&&t$1.isPortalled.value&&h$1(f,{id:s,features:a.Focusable,as:"button",type:"button",onFocus:i})])}}});defineComponent({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(P,{attrs:S,slots:f}){let E=W("PopoverOverlay"),t$1=`headlessui-popover-overlay-${t()}`,e=p(),m=computed(()=>e!==null?e.value===l.Open:E.popoverState.value===0);function a(){E.closePopover();}return ()=>{let b={open:E.popoverState.value===0};return V({ourProps:{id:t$1,"aria-hidden":!0,onClick:a},theirProps:P,slot:b,attrs:S,slots:f,features:R.RenderStrategy|R.Static,visible:m.value,name:"PopoverOverlay"})}}});let He=defineComponent({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},inheritAttrs:!1,setup(P$1,{attrs:S,slots:f$1,expose:E}){let{focus:t$1}=P$1,e=W("PopoverPanel"),m=computed(()=>m$1(e.panel)),a$1=`headlessui-focus-sentinel-before-${t()}`,b=`headlessui-focus-sentinel-after-${t()}`;E({el:e.panel,$el:e.panel}),provide(oe,e.panelId),watchEffect(()=>{var o$1,u;if(!t$1||e.popoverState.value!==0||!e.panel)return;let l=(o$1=m.value)==null?void 0:o$1.activeElement;(u=o(e.panel))!=null&&u.contains(l)||P(o(e.panel),M.First);});let g=p(),y=computed(()=>g!==null?g.value===l.Open:e.popoverState.value===0);function s(l){var o$2,u;switch(l.key){case o$1.Escape:if(e.popoverState.value!==0||!o(e.panel)||m.value&&!((o$2=o(e.panel))!=null&&o$2.contains(m.value.activeElement)))return;l.preventDefault(),l.stopPropagation(),e.closePopover(),(u=o(e.button))==null||u.focus();break}}function c(l){var u,p,n,i,v;let o$1=l.relatedTarget;!o$1||!o(e.panel)||(u=o(e.panel))!=null&&u.contains(o$1)||(e.closePopover(),(((n=(p=o(e.beforePanelSentinel))==null?void 0:p.contains)==null?void 0:n.call(p,o$1))||((v=(i=o(e.afterPanelSentinel))==null?void 0:i.contains)==null?void 0:v.call(i,o$1)))&&o$1.focus({preventScroll:!0}));}let O=n();function d$1(){let l=o(e.panel);if(!l)return;function o$1(){u(O.value,{[d.Forwards]:()=>{P(l,M.Next);},[d.Backwards]:()=>{var u;(u=o(e.button))==null||u.focus({preventScroll:!0});}});}o$1();}function D(){let l=o(e.panel);if(!l)return;function o$1(){u(O.value,{[d.Forwards]:()=>{var $,z;let u=o(e.button),p=o(e.panel);if(!u)return;let n=E$1(),i=n.indexOf(u),v=n.slice(0,i+1),K=[...n.slice(i+1),...v];for(let B of K.slice())if(((z=($=B==null?void 0:B.id)==null?void 0:$.startsWith)==null?void 0:z.call($,"headlessui-focus-sentinel-"))||(p==null?void 0:p.contains(B))){let J=K.indexOf(B);J!==-1&&K.splice(J,1);}P(K,M.First,!1);},[d.Backwards]:()=>P(l,M.Previous)});}o$1();}return ()=>{let l={open:e.popoverState.value===0,close:e.close},o={ref:e.panel,id:e.panelId,onKeydown:s,onFocusout:t$1&&e.popoverState.value===0?c:void 0,tabIndex:-1};return V({ourProps:o,theirProps:{...S,...w$1(P$1,["focus"])},attrs:S,slot:l,slots:{...f$1,default:(...u)=>{var p;return [h$1(Fragment,[y.value&&e.isPortalled.value&&h$1(f,{id:a$1,ref:e.beforePanelSentinel,features:a.Focusable,as:"button",type:"button",onFocus:d$1}),(p=f$1.default)==null?void 0:p.call(f$1,...u),y.value&&e.isPortalled.value&&h$1(f,{id:b,ref:e.afterPanelSentinel,features:a.Focusable,as:"button",type:"button",onFocus:D})])]}},features:R.RenderStrategy|R.Static,visible:y.value,name:"PopoverPanel"})}}});defineComponent({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(P,{attrs:S,slots:f,expose:E}){let t=ref(null),e=ref([]),m=computed(()=>m$1(t));E({el:t,$el:t});function a(s){let c=e.value.indexOf(s);c!==-1&&e.value.splice(c,1);}function b(s){return e.value.push(s),()=>{a(s);}}function g(){var O;let s=m.value;if(!s)return !1;let c=s.activeElement;return (O=o(t))!=null&&O.contains(c)?!0:e.value.some(d=>{var D,l;return ((D=s.getElementById(d.buttonId))==null?void 0:D.contains(c))||((l=s.getElementById(d.panelId))==null?void 0:l.contains(c))})}function y(s){for(let c of e.value)c.buttonId!==s&&c.close();}return provide(ee,{registerPopover:b,unregisterPopover:a,isFocusWithinPopoverGroup:g,closeOthers:y}),()=>V({ourProps:{ref:t},theirProps:P,slot:{},attrs:S,slots:f,name:"PopoverGroup"})}});

const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    white: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ce), mergeProps({
        class: ["relative", { "bg-white": __props.white }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-7xl px-4 sm:px-6"${_scopeId}><div class="flex items-center justify-between py-6 md:justify-start md:space-x-10"${_scopeId}><div class="flex justify-start lg:w-0 lg:flex-1"${_scopeId}><a href="/" class="text-base font-semibold"${_scopeId}>Anthony Sette</a></div><div class="-my-2 -mr-2 md:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Be), { class: "inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-300" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="sr-only"${_scopeId2}>Open menu</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    createVNode("span", { class: "sr-only" }, "Open menu"),
                    (openBlock(), createBlock("svg", {
                      class: "h-6 w-6",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      "aria-hidden": "true"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><nav class="hidden space-x-10 md:flex"${_scopeId}><a href="/" class="text-base text-gray-600 hover:text-gray-900"${_scopeId}>Home</a><a href="/about" class="text-base text-gray-600 hover:text-gray-900"${_scopeId}>About</a></nav><div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0"${_scopeId}><a href="https://twitter.com/sette_anthony" target="_blank" class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"${_scopeId}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z" fill="#ffffff"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Twitter</span></a><a href="https://github.com/anthonysette" target="_blank" class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"${_scopeId}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z" fill="#fff"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Github</span></a><a href="https://linkedin.com/in/anthonysette" target="_blank" class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"${_scopeId}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M20.4701 2.00002H3.53006C3.33964 1.99737 3.15056 2.03227 2.97362 2.1027C2.79669 2.17314 2.63536 2.27774 2.49886 2.41053C2.36235 2.54332 2.25334 2.7017 2.17805 2.87663C2.10276 3.05155 2.06267 3.2396 2.06006 3.43002V20.57C2.06267 20.7604 2.10276 20.9485 2.17805 21.1234C2.25334 21.2983 2.36235 21.4567 2.49886 21.5895C2.63536 21.7223 2.79669 21.8269 2.97362 21.8973C3.15056 21.9678 3.33964 22.0027 3.53006 22H20.4701C20.6605 22.0027 20.8496 21.9678 21.0265 21.8973C21.2034 21.8269 21.3648 21.7223 21.5013 21.5895C21.6378 21.4567 21.7468 21.2983 21.8221 21.1234C21.8974 20.9485 21.9375 20.7604 21.9401 20.57V3.43002C21.9375 3.2396 21.8974 3.05155 21.8221 2.87663C21.7468 2.7017 21.6378 2.54332 21.5013 2.41053C21.3648 2.27774 21.2034 2.17314 21.0265 2.1027C20.8496 2.03227 20.6605 1.99737 20.4701 2.00002ZM8.09006 18.74H5.09006V9.74002H8.09006V18.74ZM6.59006 8.48002C6.17632 8.48002 5.77953 8.31566 5.48697 8.0231C5.19442 7.73055 5.03006 7.33376 5.03006 6.92002C5.03006 6.50628 5.19442 6.10949 5.48697 5.81693C5.77953 5.52437 6.17632 5.36002 6.59006 5.36002C6.80975 5.3351 7.03224 5.35687 7.24293 5.4239C7.45363 5.49093 7.6478 5.60171 7.81272 5.74898C7.97763 5.89625 8.10958 6.0767 8.19993 6.2785C8.29028 6.4803 8.33698 6.69891 8.33698 6.92002C8.33698 7.14112 8.29028 7.35973 8.19993 7.56154C8.10958 7.76334 7.97763 7.94378 7.81272 8.09106C7.6478 8.23833 7.45363 8.3491 7.24293 8.41613C7.03224 8.48316 6.80975 8.50493 6.59006 8.48002ZM18.9101 18.74H15.9101V13.91C15.9101 12.7 15.4801 11.91 14.3901 11.91C14.0527 11.9125 13.7242 12.0183 13.4489 12.2132C13.1735 12.4081 12.9645 12.6827 12.8501 13C12.7718 13.2351 12.7379 13.4826 12.7501 13.73V18.73H9.75006C9.75006 18.73 9.75006 10.55 9.75006 9.73002H12.7501V11C13.0226 10.5271 13.419 10.1375 13.8965 9.87322C14.374 9.6089 14.9146 9.47987 15.4601 9.50002C17.4601 9.50002 18.9101 10.79 18.9101 13.56V18.74Z" fill="#fff"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>LinkedIn</span></a><a href="https://medium.com/@anthonysette" target="_blank" class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"${_scopeId}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.846 6.887C2.876 6.592 2.763 6.301 2.543 6.103L0.303 3.403V3H7.261L12.639 14.795L17.367 3H24V3.403L22.084 5.24C21.919 5.366 21.837 5.573 21.871 5.778V19.276C21.837 19.48 21.919 19.687 22.084 19.813L23.955 21.65V22.053H14.543V21.65L16.482 19.768C16.672 19.578 16.672 19.522 16.672 19.231V8.321L11.283 22.009H10.555L4.28 8.321V17.495C4.228 17.88 4.356 18.269 4.627 18.547L7.148 21.605V22.009H0V21.605L2.521 18.547C2.791 18.268 2.911 17.877 2.846 17.495V6.887Z" fill="#fff"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Medium</span></a></div></div></div>`);
            _push2(ssrRenderComponent(unref(He), {
              focus: "",
              class: "absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"${_scopeId2}><div class="px-5 pt-5 pb-6"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><div${_scopeId2}><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Anthony Sette"${_scopeId2}></div><div class="-mr-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Be), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-300" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="sr-only"${_scopeId3}>Close menu</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"${_scopeId3}></path></svg>`);
                      } else {
                        return [
                          createVNode("span", { class: "sr-only" }, "Close menu"),
                          (openBlock(), createBlock("svg", {
                            class: "h-6 w-6",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            "aria-hidden": "true"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M6 18L18 6M6 6l12 12"
                            })
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mt-6"${_scopeId2}><nav class="grid gap-y-8"${_scopeId2}><a href="/" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"${_scopeId2}><svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"${_scopeId2}></path></svg><span class="ml-3 text-base font-medium text-gray-900"${_scopeId2}>Home</span></a><a href="/" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"${_scopeId2}><svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"${_scopeId2}></path></svg><span class="ml-3 text-base font-medium text-gray-900"${_scopeId2}>About</span></a></nav></div></div><div class="py-6 px-5 justify-evenly flex"${_scopeId2}><a href="https://twitter.com/sette_anthony" target="_blank" class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"${_scopeId2}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z" fill="#ffffff"${_scopeId2}></path></svg><span class="sr-only"${_scopeId2}>Twitter</span></a><a href="https://github.com/anthonysette" target="_blank" class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"${_scopeId2}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z" fill="#fff"${_scopeId2}></path></svg><span class="sr-only"${_scopeId2}>Github</span></a><a href="https://linkedin.com/in/anthonysette" target="_blank" class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"${_scopeId2}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M20.4701 2.00002H3.53006C3.33964 1.99737 3.15056 2.03227 2.97362 2.1027C2.79669 2.17314 2.63536 2.27774 2.49886 2.41053C2.36235 2.54332 2.25334 2.7017 2.17805 2.87663C2.10276 3.05155 2.06267 3.2396 2.06006 3.43002V20.57C2.06267 20.7604 2.10276 20.9485 2.17805 21.1234C2.25334 21.2983 2.36235 21.4567 2.49886 21.5895C2.63536 21.7223 2.79669 21.8269 2.97362 21.8973C3.15056 21.9678 3.33964 22.0027 3.53006 22H20.4701C20.6605 22.0027 20.8496 21.9678 21.0265 21.8973C21.2034 21.8269 21.3648 21.7223 21.5013 21.5895C21.6378 21.4567 21.7468 21.2983 21.8221 21.1234C21.8974 20.9485 21.9375 20.7604 21.9401 20.57V3.43002C21.9375 3.2396 21.8974 3.05155 21.8221 2.87663C21.7468 2.7017 21.6378 2.54332 21.5013 2.41053C21.3648 2.27774 21.2034 2.17314 21.0265 2.1027C20.8496 2.03227 20.6605 1.99737 20.4701 2.00002ZM8.09006 18.74H5.09006V9.74002H8.09006V18.74ZM6.59006 8.48002C6.17632 8.48002 5.77953 8.31566 5.48697 8.0231C5.19442 7.73055 5.03006 7.33376 5.03006 6.92002C5.03006 6.50628 5.19442 6.10949 5.48697 5.81693C5.77953 5.52437 6.17632 5.36002 6.59006 5.36002C6.80975 5.3351 7.03224 5.35687 7.24293 5.4239C7.45363 5.49093 7.6478 5.60171 7.81272 5.74898C7.97763 5.89625 8.10958 6.0767 8.19993 6.2785C8.29028 6.4803 8.33698 6.69891 8.33698 6.92002C8.33698 7.14112 8.29028 7.35973 8.19993 7.56154C8.10958 7.76334 7.97763 7.94378 7.81272 8.09106C7.6478 8.23833 7.45363 8.3491 7.24293 8.41613C7.03224 8.48316 6.80975 8.50493 6.59006 8.48002ZM18.9101 18.74H15.9101V13.91C15.9101 12.7 15.4801 11.91 14.3901 11.91C14.0527 11.9125 13.7242 12.0183 13.4489 12.2132C13.1735 12.4081 12.9645 12.6827 12.8501 13C12.7718 13.2351 12.7379 13.4826 12.7501 13.73V18.73H9.75006C9.75006 18.73 9.75006 10.55 9.75006 9.73002H12.7501V11C13.0226 10.5271 13.419 10.1375 13.8965 9.87322C14.374 9.6089 14.9146 9.47987 15.4601 9.50002C17.4601 9.50002 18.9101 10.79 18.9101 13.56V18.74Z" fill="#fff"${_scopeId2}></path></svg><span class="sr-only"${_scopeId2}>LinkedIn</span></a><a href="https://medium.com/@anthonysette" target="_blank" class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"${_scopeId2}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.846 6.887C2.876 6.592 2.763 6.301 2.543 6.103L0.303 3.403V3H7.261L12.639 14.795L17.367 3H24V3.403L22.084 5.24C21.919 5.366 21.837 5.573 21.871 5.778V19.276C21.837 19.48 21.919 19.687 22.084 19.813L23.955 21.65V22.053H14.543V21.65L16.482 19.768C16.672 19.578 16.672 19.522 16.672 19.231V8.321L11.283 22.009H10.555L4.28 8.321V17.495C4.228 17.88 4.356 18.269 4.627 18.547L7.148 21.605V22.009H0V21.605L2.521 18.547C2.791 18.268 2.911 17.877 2.846 17.495V6.887Z" fill="#fff"${_scopeId2}></path></svg><span class="sr-only"${_scopeId2}>Medium</span></a></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, [
                      createVNode("div", { class: "px-5 pt-5 pb-6" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", null, [
                            createVNode("img", {
                              class: "h-8 w-auto",
                              src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                              alt: "Anthony Sette"
                            })
                          ]),
                          createVNode("div", { class: "-mr-2" }, [
                            createVNode(unref(Be), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-300" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "sr-only" }, "Close menu"),
                                (openBlock(), createBlock("svg", {
                                  class: "h-6 w-6",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "1.5",
                                  stroke: "currentColor",
                                  "aria-hidden": "true"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "mt-6" }, [
                          createVNode("nav", { class: "grid gap-y-8" }, [
                            createVNode("a", {
                              href: "/",
                              class: "-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                })
                              ])),
                              createVNode("span", { class: "ml-3 text-base font-medium text-gray-900" }, "Home")
                            ]),
                            createVNode("a", {
                              href: "/",
                              class: "-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                })
                              ])),
                              createVNode("span", { class: "ml-3 text-base font-medium text-gray-900" }, "About")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "py-6 px-5 justify-evenly flex" }, [
                        createVNode("a", {
                          href: "https://twitter.com/sette_anthony",
                          target: "_blank",
                          class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                        }, [
                          (openBlock(), createBlock("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z",
                              fill: "#ffffff"
                            })
                          ])),
                          createVNode("span", { class: "sr-only" }, "Twitter")
                        ]),
                        createVNode("a", {
                          href: "https://github.com/anthonysette",
                          target: "_blank",
                          class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                        }, [
                          (openBlock(), createBlock("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z",
                              fill: "#fff"
                            })
                          ])),
                          createVNode("span", { class: "sr-only" }, "Github")
                        ]),
                        createVNode("a", {
                          href: "https://linkedin.com/in/anthonysette",
                          target: "_blank",
                          class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                        }, [
                          (openBlock(), createBlock("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M20.4701 2.00002H3.53006C3.33964 1.99737 3.15056 2.03227 2.97362 2.1027C2.79669 2.17314 2.63536 2.27774 2.49886 2.41053C2.36235 2.54332 2.25334 2.7017 2.17805 2.87663C2.10276 3.05155 2.06267 3.2396 2.06006 3.43002V20.57C2.06267 20.7604 2.10276 20.9485 2.17805 21.1234C2.25334 21.2983 2.36235 21.4567 2.49886 21.5895C2.63536 21.7223 2.79669 21.8269 2.97362 21.8973C3.15056 21.9678 3.33964 22.0027 3.53006 22H20.4701C20.6605 22.0027 20.8496 21.9678 21.0265 21.8973C21.2034 21.8269 21.3648 21.7223 21.5013 21.5895C21.6378 21.4567 21.7468 21.2983 21.8221 21.1234C21.8974 20.9485 21.9375 20.7604 21.9401 20.57V3.43002C21.9375 3.2396 21.8974 3.05155 21.8221 2.87663C21.7468 2.7017 21.6378 2.54332 21.5013 2.41053C21.3648 2.27774 21.2034 2.17314 21.0265 2.1027C20.8496 2.03227 20.6605 1.99737 20.4701 2.00002ZM8.09006 18.74H5.09006V9.74002H8.09006V18.74ZM6.59006 8.48002C6.17632 8.48002 5.77953 8.31566 5.48697 8.0231C5.19442 7.73055 5.03006 7.33376 5.03006 6.92002C5.03006 6.50628 5.19442 6.10949 5.48697 5.81693C5.77953 5.52437 6.17632 5.36002 6.59006 5.36002C6.80975 5.3351 7.03224 5.35687 7.24293 5.4239C7.45363 5.49093 7.6478 5.60171 7.81272 5.74898C7.97763 5.89625 8.10958 6.0767 8.19993 6.2785C8.29028 6.4803 8.33698 6.69891 8.33698 6.92002C8.33698 7.14112 8.29028 7.35973 8.19993 7.56154C8.10958 7.76334 7.97763 7.94378 7.81272 8.09106C7.6478 8.23833 7.45363 8.3491 7.24293 8.41613C7.03224 8.48316 6.80975 8.50493 6.59006 8.48002ZM18.9101 18.74H15.9101V13.91C15.9101 12.7 15.4801 11.91 14.3901 11.91C14.0527 11.9125 13.7242 12.0183 13.4489 12.2132C13.1735 12.4081 12.9645 12.6827 12.8501 13C12.7718 13.2351 12.7379 13.4826 12.7501 13.73V18.73H9.75006C9.75006 18.73 9.75006 10.55 9.75006 9.73002H12.7501V11C13.0226 10.5271 13.419 10.1375 13.8965 9.87322C14.374 9.6089 14.9146 9.47987 15.4601 9.50002C17.4601 9.50002 18.9101 10.79 18.9101 13.56V18.74Z",
                              fill: "#fff"
                            })
                          ])),
                          createVNode("span", { class: "sr-only" }, "LinkedIn")
                        ]),
                        createVNode("a", {
                          href: "https://medium.com/@anthonysette",
                          target: "_blank",
                          class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                        }, [
                          (openBlock(), createBlock("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M2.846 6.887C2.876 6.592 2.763 6.301 2.543 6.103L0.303 3.403V3H7.261L12.639 14.795L17.367 3H24V3.403L22.084 5.24C21.919 5.366 21.837 5.573 21.871 5.778V19.276C21.837 19.48 21.919 19.687 22.084 19.813L23.955 21.65V22.053H14.543V21.65L16.482 19.768C16.672 19.578 16.672 19.522 16.672 19.231V8.321L11.283 22.009H10.555L4.28 8.321V17.495C4.228 17.88 4.356 18.269 4.627 18.547L7.148 21.605V22.009H0V21.605L2.521 18.547C2.791 18.268 2.911 17.877 2.846 17.495V6.887Z",
                              fill: "#fff"
                            })
                          ])),
                          createVNode("span", { class: "sr-only" }, "Medium")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-7xl px-4 sm:px-6" }, [
                createVNode("div", { class: "flex items-center justify-between py-6 md:justify-start md:space-x-10" }, [
                  createVNode("div", { class: "flex justify-start lg:w-0 lg:flex-1" }, [
                    createVNode("a", {
                      href: "/",
                      class: "text-base font-semibold"
                    }, "Anthony Sette")
                  ]),
                  createVNode("div", { class: "-my-2 -mr-2 md:hidden" }, [
                    createVNode(unref(Be), { class: "inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-300" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, "Open menu"),
                        (openBlock(), createBlock("svg", {
                          class: "h-6 w-6",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          "aria-hidden": "true"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          })
                        ]))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("nav", { class: "hidden space-x-10 md:flex" }, [
                    createVNode("a", {
                      href: "/",
                      class: "text-base text-gray-600 hover:text-gray-900"
                    }, "Home"),
                    createVNode("a", {
                      href: "/about",
                      class: "text-base text-gray-600 hover:text-gray-900"
                    }, "About")
                  ]),
                  createVNode("div", { class: "hidden items-center justify-end md:flex md:flex-1 lg:w-0" }, [
                    createVNode("a", {
                      href: "https://twitter.com/sette_anthony",
                      target: "_blank",
                      class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                    }, [
                      (openBlock(), createBlock("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z",
                          fill: "#ffffff"
                        })
                      ])),
                      createVNode("span", { class: "sr-only" }, "Twitter")
                    ]),
                    createVNode("a", {
                      href: "https://github.com/anthonysette",
                      target: "_blank",
                      class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                    }, [
                      (openBlock(), createBlock("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z",
                          fill: "#fff"
                        })
                      ])),
                      createVNode("span", { class: "sr-only" }, "Github")
                    ]),
                    createVNode("a", {
                      href: "https://linkedin.com/in/anthonysette",
                      target: "_blank",
                      class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                    }, [
                      (openBlock(), createBlock("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M20.4701 2.00002H3.53006C3.33964 1.99737 3.15056 2.03227 2.97362 2.1027C2.79669 2.17314 2.63536 2.27774 2.49886 2.41053C2.36235 2.54332 2.25334 2.7017 2.17805 2.87663C2.10276 3.05155 2.06267 3.2396 2.06006 3.43002V20.57C2.06267 20.7604 2.10276 20.9485 2.17805 21.1234C2.25334 21.2983 2.36235 21.4567 2.49886 21.5895C2.63536 21.7223 2.79669 21.8269 2.97362 21.8973C3.15056 21.9678 3.33964 22.0027 3.53006 22H20.4701C20.6605 22.0027 20.8496 21.9678 21.0265 21.8973C21.2034 21.8269 21.3648 21.7223 21.5013 21.5895C21.6378 21.4567 21.7468 21.2983 21.8221 21.1234C21.8974 20.9485 21.9375 20.7604 21.9401 20.57V3.43002C21.9375 3.2396 21.8974 3.05155 21.8221 2.87663C21.7468 2.7017 21.6378 2.54332 21.5013 2.41053C21.3648 2.27774 21.2034 2.17314 21.0265 2.1027C20.8496 2.03227 20.6605 1.99737 20.4701 2.00002ZM8.09006 18.74H5.09006V9.74002H8.09006V18.74ZM6.59006 8.48002C6.17632 8.48002 5.77953 8.31566 5.48697 8.0231C5.19442 7.73055 5.03006 7.33376 5.03006 6.92002C5.03006 6.50628 5.19442 6.10949 5.48697 5.81693C5.77953 5.52437 6.17632 5.36002 6.59006 5.36002C6.80975 5.3351 7.03224 5.35687 7.24293 5.4239C7.45363 5.49093 7.6478 5.60171 7.81272 5.74898C7.97763 5.89625 8.10958 6.0767 8.19993 6.2785C8.29028 6.4803 8.33698 6.69891 8.33698 6.92002C8.33698 7.14112 8.29028 7.35973 8.19993 7.56154C8.10958 7.76334 7.97763 7.94378 7.81272 8.09106C7.6478 8.23833 7.45363 8.3491 7.24293 8.41613C7.03224 8.48316 6.80975 8.50493 6.59006 8.48002ZM18.9101 18.74H15.9101V13.91C15.9101 12.7 15.4801 11.91 14.3901 11.91C14.0527 11.9125 13.7242 12.0183 13.4489 12.2132C13.1735 12.4081 12.9645 12.6827 12.8501 13C12.7718 13.2351 12.7379 13.4826 12.7501 13.73V18.73H9.75006C9.75006 18.73 9.75006 10.55 9.75006 9.73002H12.7501V11C13.0226 10.5271 13.419 10.1375 13.8965 9.87322C14.374 9.6089 14.9146 9.47987 15.4601 9.50002C17.4601 9.50002 18.9101 10.79 18.9101 13.56V18.74Z",
                          fill: "#fff"
                        })
                      ])),
                      createVNode("span", { class: "sr-only" }, "LinkedIn")
                    ]),
                    createVNode("a", {
                      href: "https://medium.com/@anthonysette",
                      target: "_blank",
                      class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                    }, [
                      (openBlock(), createBlock("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M2.846 6.887C2.876 6.592 2.763 6.301 2.543 6.103L0.303 3.403V3H7.261L12.639 14.795L17.367 3H24V3.403L22.084 5.24C21.919 5.366 21.837 5.573 21.871 5.778V19.276C21.837 19.48 21.919 19.687 22.084 19.813L23.955 21.65V22.053H14.543V21.65L16.482 19.768C16.672 19.578 16.672 19.522 16.672 19.231V8.321L11.283 22.009H10.555L4.28 8.321V17.495C4.228 17.88 4.356 18.269 4.627 18.547L7.148 21.605V22.009H0V21.605L2.521 18.547C2.791 18.268 2.911 17.877 2.846 17.495V6.887Z",
                          fill: "#fff"
                        })
                      ])),
                      createVNode("span", { class: "sr-only" }, "Medium")
                    ])
                  ])
                ])
              ]),
              createVNode(Transition, {
                "enter-active-class": "duration-200 ease-out",
                "enter-from-class": "opacity-0 scale-95",
                "enter-to-class": "opacity-100 scale-100",
                "leave-active-class": "duration-100 ease-in",
                "leave-from-class": "opacity-100 scale-100",
                "leave-to-class": "opacity-0 scale-95"
              }, {
                default: withCtx(() => [
                  createVNode(unref(He), {
                    focus: "",
                    class: "absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, [
                        createVNode("div", { class: "px-5 pt-5 pb-6" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", null, [
                              createVNode("img", {
                                class: "h-8 w-auto",
                                src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                                alt: "Anthony Sette"
                              })
                            ]),
                            createVNode("div", { class: "-mr-2" }, [
                              createVNode(unref(Be), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-300" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "sr-only" }, "Close menu"),
                                  (openBlock(), createBlock("svg", {
                                    class: "h-6 w-6",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": "1.5",
                                    stroke: "currentColor",
                                    "aria-hidden": "true"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "M6 18L18 6M6 6l12 12"
                                    })
                                  ]))
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "mt-6" }, [
                            createVNode("nav", { class: "grid gap-y-8" }, [
                              createVNode("a", {
                                href: "/",
                                class: "-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "1.5",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                  })
                                ])),
                                createVNode("span", { class: "ml-3 text-base font-medium text-gray-900" }, "Home")
                              ]),
                              createVNode("a", {
                                href: "/",
                                class: "-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "1.5",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                  })
                                ])),
                                createVNode("span", { class: "ml-3 text-base font-medium text-gray-900" }, "About")
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "py-6 px-5 justify-evenly flex" }, [
                          createVNode("a", {
                            href: "https://twitter.com/sette_anthony",
                            target: "_blank",
                            class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                d: "M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z",
                                fill: "#ffffff"
                              })
                            ])),
                            createVNode("span", { class: "sr-only" }, "Twitter")
                          ]),
                          createVNode("a", {
                            href: "https://github.com/anthonysette",
                            target: "_blank",
                            class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                d: "M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z",
                                fill: "#fff"
                              })
                            ])),
                            createVNode("span", { class: "sr-only" }, "Github")
                          ]),
                          createVNode("a", {
                            href: "https://linkedin.com/in/anthonysette",
                            target: "_blank",
                            class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                d: "M20.4701 2.00002H3.53006C3.33964 1.99737 3.15056 2.03227 2.97362 2.1027C2.79669 2.17314 2.63536 2.27774 2.49886 2.41053C2.36235 2.54332 2.25334 2.7017 2.17805 2.87663C2.10276 3.05155 2.06267 3.2396 2.06006 3.43002V20.57C2.06267 20.7604 2.10276 20.9485 2.17805 21.1234C2.25334 21.2983 2.36235 21.4567 2.49886 21.5895C2.63536 21.7223 2.79669 21.8269 2.97362 21.8973C3.15056 21.9678 3.33964 22.0027 3.53006 22H20.4701C20.6605 22.0027 20.8496 21.9678 21.0265 21.8973C21.2034 21.8269 21.3648 21.7223 21.5013 21.5895C21.6378 21.4567 21.7468 21.2983 21.8221 21.1234C21.8974 20.9485 21.9375 20.7604 21.9401 20.57V3.43002C21.9375 3.2396 21.8974 3.05155 21.8221 2.87663C21.7468 2.7017 21.6378 2.54332 21.5013 2.41053C21.3648 2.27774 21.2034 2.17314 21.0265 2.1027C20.8496 2.03227 20.6605 1.99737 20.4701 2.00002ZM8.09006 18.74H5.09006V9.74002H8.09006V18.74ZM6.59006 8.48002C6.17632 8.48002 5.77953 8.31566 5.48697 8.0231C5.19442 7.73055 5.03006 7.33376 5.03006 6.92002C5.03006 6.50628 5.19442 6.10949 5.48697 5.81693C5.77953 5.52437 6.17632 5.36002 6.59006 5.36002C6.80975 5.3351 7.03224 5.35687 7.24293 5.4239C7.45363 5.49093 7.6478 5.60171 7.81272 5.74898C7.97763 5.89625 8.10958 6.0767 8.19993 6.2785C8.29028 6.4803 8.33698 6.69891 8.33698 6.92002C8.33698 7.14112 8.29028 7.35973 8.19993 7.56154C8.10958 7.76334 7.97763 7.94378 7.81272 8.09106C7.6478 8.23833 7.45363 8.3491 7.24293 8.41613C7.03224 8.48316 6.80975 8.50493 6.59006 8.48002ZM18.9101 18.74H15.9101V13.91C15.9101 12.7 15.4801 11.91 14.3901 11.91C14.0527 11.9125 13.7242 12.0183 13.4489 12.2132C13.1735 12.4081 12.9645 12.6827 12.8501 13C12.7718 13.2351 12.7379 13.4826 12.7501 13.73V18.73H9.75006C9.75006 18.73 9.75006 10.55 9.75006 9.73002H12.7501V11C13.0226 10.5271 13.419 10.1375 13.8965 9.87322C14.374 9.6089 14.9146 9.47987 15.4601 9.50002C17.4601 9.50002 18.9101 10.79 18.9101 13.56V18.74Z",
                                fill: "#fff"
                              })
                            ])),
                            createVNode("span", { class: "sr-only" }, "LinkedIn")
                          ]),
                          createVNode("a", {
                            href: "https://medium.com/@anthonysette",
                            target: "_blank",
                            class: "text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-3 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M2.846 6.887C2.876 6.592 2.763 6.301 2.543 6.103L0.303 3.403V3H7.261L12.639 14.795L17.367 3H24V3.403L22.084 5.24C21.919 5.366 21.837 5.573 21.871 5.778V19.276C21.837 19.48 21.919 19.687 22.084 19.813L23.955 21.65V22.053H14.543V21.65L16.482 19.768C16.672 19.578 16.672 19.522 16.672 19.231V8.321L11.283 22.009H10.555L4.28 8.321V17.495C4.228 17.88 4.356 18.269 4.627 18.547L7.148 21.605V22.009H0V21.605L2.521 18.547C2.791 18.268 2.911 17.877 2.846 17.495V6.887Z",
                                fill: "#fff"
                              })
                            ])),
                            createVNode("span", { class: "sr-only" }, "Medium")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const year = computed(() => new Date().getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "p-4 bg-slate-800 sm:p-6" }, _attrs))}><div class="mx-auto max-w-screen-xl"><div class="grid grid-cols-1 md:grid-cols-3 text-center md:text-left"><div class="mb-6 md:mb-0"><a href="/" class="items-center text-2xl font-semibold whitespace-nowrap text-white">Anthony Sette</a></div><span class="text-sm text-gray-200 sm:text-center my-auto text-center pb-5 md:pb-0">\xA9 ${ssrInterpolate(unref(year))} <a href="/" class="hover:underline">Anthony Sette</a>. All Rights Reserved. </span><div class="sm:flex sm:items-center sm:justify-between"><div class="flex mx-auto md:ml-auto mt-4 space-x-6 sm:justify-center sm:mt-0"><a href="https://twitter.com/sette_anthony" target="_blank" class="text-gray-200 hover:text-white"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z" fill="#ffffff"></path></svg></a><a href="https://github.com/anthonysette" target="_blank" class="text-gray-200 hover:text-white"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z" fill="#fff"></path></svg></a><a href="https://linkedin.com/in/anthonysette" target="_blank" class="text-gray-200 hover:text-white"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4701 2.00002H3.53006C3.33964 1.99737 3.15056 2.03227 2.97362 2.1027C2.79669 2.17314 2.63536 2.27774 2.49886 2.41053C2.36235 2.54332 2.25334 2.7017 2.17805 2.87663C2.10276 3.05155 2.06267 3.2396 2.06006 3.43002V20.57C2.06267 20.7604 2.10276 20.9485 2.17805 21.1234C2.25334 21.2983 2.36235 21.4567 2.49886 21.5895C2.63536 21.7223 2.79669 21.8269 2.97362 21.8973C3.15056 21.9678 3.33964 22.0027 3.53006 22H20.4701C20.6605 22.0027 20.8496 21.9678 21.0265 21.8973C21.2034 21.8269 21.3648 21.7223 21.5013 21.5895C21.6378 21.4567 21.7468 21.2983 21.8221 21.1234C21.8974 20.9485 21.9375 20.7604 21.9401 20.57V3.43002C21.9375 3.2396 21.8974 3.05155 21.8221 2.87663C21.7468 2.7017 21.6378 2.54332 21.5013 2.41053C21.3648 2.27774 21.2034 2.17314 21.0265 2.1027C20.8496 2.03227 20.6605 1.99737 20.4701 2.00002ZM8.09006 18.74H5.09006V9.74002H8.09006V18.74ZM6.59006 8.48002C6.17632 8.48002 5.77953 8.31566 5.48697 8.0231C5.19442 7.73055 5.03006 7.33376 5.03006 6.92002C5.03006 6.50628 5.19442 6.10949 5.48697 5.81693C5.77953 5.52437 6.17632 5.36002 6.59006 5.36002C6.80975 5.3351 7.03224 5.35687 7.24293 5.4239C7.45363 5.49093 7.6478 5.60171 7.81272 5.74898C7.97763 5.89625 8.10958 6.0767 8.19993 6.2785C8.29028 6.4803 8.33698 6.69891 8.33698 6.92002C8.33698 7.14112 8.29028 7.35973 8.19993 7.56154C8.10958 7.76334 7.97763 7.94378 7.81272 8.09106C7.6478 8.23833 7.45363 8.3491 7.24293 8.41613C7.03224 8.48316 6.80975 8.50493 6.59006 8.48002ZM18.9101 18.74H15.9101V13.91C15.9101 12.7 15.4801 11.91 14.3901 11.91C14.0527 11.9125 13.7242 12.0183 13.4489 12.2132C13.1735 12.4081 12.9645 12.6827 12.8501 13C12.7718 13.2351 12.7379 13.4826 12.7501 13.73V18.73H9.75006C9.75006 18.73 9.75006 10.55 9.75006 9.73002H12.7501V11C13.0226 10.5271 13.419 10.1375 13.8965 9.87322C14.374 9.6089 14.9146 9.47987 15.4601 9.50002C17.4601 9.50002 18.9101 10.79 18.9101 13.56V18.74Z" fill="#fff"></path></svg></a><a href="https://medium.com/@anthonysette" target="_blank" class="text-gray-200 hover:text-white"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.846 6.887C2.876 6.592 2.763 6.301 2.543 6.103L0.303 3.403V3H7.261L12.639 14.795L17.367 3H24V3.403L22.084 5.24C21.919 5.366 21.837 5.573 21.871 5.778V19.276C21.837 19.48 21.919 19.687 22.084 19.813L23.955 21.65V22.053H14.543V21.65L16.482 19.768C16.672 19.578 16.672 19.522 16.672 19.231V8.321L11.283 22.009H10.555L4.28 8.321V17.495C4.228 17.88 4.356 18.269 4.627 18.547L7.148 21.605V22.009H0V21.605L2.521 18.547C2.791 18.268 2.911 17.877 2.846 17.495V6.887Z" fill="#fff"></path></svg></a></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Footer.6d6dd16c.mjs.map
