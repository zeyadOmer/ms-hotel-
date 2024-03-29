import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import {router} from './router'
const app = createApp(App).use(router)
app.use(ElementPlus)
app.mount('#app')
