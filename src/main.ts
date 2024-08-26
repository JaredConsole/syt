//vue3 create app 可以用来创建应用实例方法
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入清楚默认样式
import '@/style/reset.scss'
//引入根组件App
import App from '@/App.vue'
import HospitalTop from '@/components/hospital_top/index.vue';
import HospitalBottom from '@/components/hospital_bottom/index.vue';
//引入vue-router核心插件并安装
import router from '@/router';
//利用createApp方法创建应用实例，且将应用挂载到挂载点上
createApp(App).mount('#app')
const app = createApp(App);
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom);
//安装El
app.use(ElementPlus);
//安装vue-router
app.use(router);
//挂载
app.mount('#app');
