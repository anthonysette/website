import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './Footer.6d6dd16c.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, i as __nuxt_component_0$1 } from '../server.mjs';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
import 'defu';
import '@vue/shared';
import '@prismicio/client';
import '@prismicio/helpers';
import 'cookie-es';
import 'ohash';
import 'escape-html';
import 'highlight.js';
import '../../nitro/vercel.mjs';
import 'node-fetch-native/polyfill';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';

const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "271",
    height: "271",
    viewBox: "0 0 185 271",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="49.5" cy="135.5" r="135.5" fill="url(#paint0_linear_0_193)"></circle><circle cx="49.5" cy="135.5" r="134.5" stroke="white" stroke-opacity="0.240475" stroke-width="2"></circle><defs><linearGradient id="paint0_linear_0_193" x1="-119.612" y1="101.602" x2="-4.97927" y2="237.453" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.57296"></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OvalLeftAsset.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "270",
    height: "270",
    viewBox: "0 0 218 270",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="135.5" cy="135.5" r="135.5" fill="url(#paint0_linear_0_194)"></circle><circle cx="135.5" cy="135.5" r="134.5" stroke="white" stroke-opacity="0.240475" stroke-width="2"></circle><defs><linearGradient id="paint0_linear_0_194" x1="-33.6117" y1="101.602" x2="81.0207" y2="237.453" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.57296"></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OvalRightAsset.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + globalThis.__buildAssetsURL("memoji.c3fb84d3.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_OvalLeftAsset = __nuxt_component_0;
  const _component_OvalRightAsset = __nuxt_component_1$1;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div class="absolute top-[10%] left-[-6%] md:left-[-2%] hidden sm:block">`);
  _push(ssrRenderComponent(_component_OvalLeftAsset, null, null, _parent));
  _push(`</div><div class="absolute top-[27%] md:top-[31%] lg:top-[33%] right-[-6%] md:right-[-2%] hidden sm:block">`);
  _push(ssrRenderComponent(_component_OvalRightAsset, null, null, _parent));
  _push(`</div><main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24 pb-16 relative z-10"><img class="mx-auto d-block max-w-[160px] max-h-[160px]"${ssrRenderAttr("src", _imports_0)}><div class="text-center"><h1 class="text-2xl text-[#3B248B] sm:text-4xl md:text-5xl max-w-5xl mx-auto font-black"> Chatting about Startups and Software Engineering </h1><p class="mt-3 text-base text-gray-700 mx-auto sm:mt-5 max-w-xl sm:text-lg md:mt-5 md:text-xl"> Sharing insights about the latest trends in software engineering and the startup world. </p><div class="mt-5 sm:mt-8 flex justify-center"><div class="">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { hash: "#popular-articles" },
    class: "flex w-full items-center justify-center rounded-full bg-white text-indigo-500 px-4 py-2 text-sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Scroll to read articles</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12 17L12 7M12 17L8 13M12 17L16 13" stroke="#6366f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("span", null, "Scroll to read articles"),
          (openBlock(), createBlock("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M12 17L12 7M12 17L8 13M12 17L16 13",
              stroke: "#6366f1",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></main></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$1$1;
  const _component_Hero = __nuxt_component_1;
  const _component_Footer = _sfc_main$4;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full bg-gradient-to-br from-[#E9DEFA] to-[#FBFCDB]">`);
  _push(ssrRenderComponent(_component_Header, { white: false }, null, _parent));
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { homePage as default };
//# sourceMappingURL=home-page.68b7f448.mjs.map
