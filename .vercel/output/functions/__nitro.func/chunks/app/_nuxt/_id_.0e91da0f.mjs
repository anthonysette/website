import { c as useNuxtApp, u as usePrismic, d as useRoute, e as useAsyncData, P as PrismicRichText } from '../server.mjs';
import { withAsyncContext, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useNuxtApp();
    const { client } = usePrismic();
    const route = useRoute();
    const getBlog = async () => {
      return await client.getByUID("blog_post", route.params.id);
    };
    const { data: blog } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("blog", () => getBlog(), "$b6624wP6pv")), __temp = await __temp, __restore(), __temp);
    const formattedDate = computed(() => {
      var _a;
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date((_a = blog == null ? void 0 : blog.data) == null ? void 0 : _a.release_date).toLocaleDateString(
        "en-US",
        options
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_prismic_rich_text = PrismicRichText;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="absolute top-0 w-full h-[80%] bg-gradient-to-b from-[#E9DEFA]/30 to-white -z-10"></div><div class="max-w-3xl mx-auto px-4"><h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold pt-16 text-center text-[#3B248B]"> This is my awesome blog </h1><p class="text-sm text-gray-600 text-center pt-6">${ssrInterpolate(unref(formattedDate))} \u2022 Read in <strong>6 min</strong></p><ul class="list-disc list-inside"><li>poop</li></ul>`);
      _push(ssrRenderComponent(_component_prismic_rich_text, {
        field: unref(blog).data.body
      }, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.0e91da0f.mjs.map
