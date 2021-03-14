import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'


Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:8081/api/'
// axios拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
})
Vue.prototype.$http = axios

/**
 * (1)h(App):vue通过js渲染dom结构的函数createElement，约定可以简写为h.作用就是生成一个 VNode节点
 * (2).$mount('#app'):render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上
 * (3)el，template，render(渲染函数)都是vue对象对应的HTML元素（DOM对象）  优先级顺序：el < template < render
 * (4)只有template,render（渲染）函数,也是不行的，因为，vue对象不知道把render后的结果放在何处
 */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
