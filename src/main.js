import { createApp } from 'vue';
import App from './App.vue';
import './css/common.less';
import './css/init.css';
import store from './store'
import router from './router'
import { Toast } from "vant";
import "amfe-flexible";

import tool from "@/js/tool";

const app =createApp(App)

app.use(router).use(store).use(Toast).mount('#app')

/**挂载一些工具方法**/
app.config.globalProperties = {
    '$toast': Toast,
    '$deepCopy': tool.deepCopy,//深度克隆
    '$debounce': tool.debounce,//防抖
}

