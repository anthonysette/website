// import hljs from 'highlight.js/lib/common';
// import hljsVuePlugin from "@highlightjs/vue-plugin";

// // hljs.registerLanguage('javascript', javascript);

// export default defineNuxtPlugin((nuxtApp) => {
//     nuxtApp.vueApp.use(hljsVuePlugin);
// })


// import VueCodeHighlight from 'vue-code-highlight';
// import { component as CodeHighlight } from 'vue-code-highlight';
// import "vue-code-highlight/themes/duotone-sea.css";
// import "vue-code-highlight/themes/window.css";

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('hljs', hljs)
})

// import SshPre from 'simple-syntax-highlighter'
// import 'simple-syntax-highlighter/dist/sshpre.css'

// export default defineNuxtPlugin((nuxtApp) => {
//     nuxtApp.vueApp.component("SshPre", SshPre);
// })
