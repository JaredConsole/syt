//vue3 create app 可以用来创建应用实例方法
import { createApp } from 'vue'
//引入根组件App
import App from './App.vue'
//利用createApp方法创建应用实例，且将应用挂载到挂载点上
createApp(App).mount('#app')
const app = createApp(App);
//挂载
app.mount('#app');
