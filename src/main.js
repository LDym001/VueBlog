import {createApp} from 'vue'
import router from './router'
import store from './store'
import Page from './views/Page.vue'

import VMdPreview from '@kangc/v-md-editor/lib/preview'
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';

VMdEditor.use(vuepressTheme, {
  Prism,
});
VMdPreview.use(vuepressTheme, {
  Prism,
});

const app = createApp(Page)
app.use(router)
app.use(store)
app.use(VMdPreview)
app.use(VMdEditor)
app.mount('#app')