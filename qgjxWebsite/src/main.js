import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '/router/index.js'; // 导入路由配置
import { createPinia } from 'pinia'; // 导入Pinia
const pinia = createPinia();
const app = createApp(App);

app.use(router); // 使用路由配置
app.use(pinia)  // 使用pinia

app.mount('#app')
