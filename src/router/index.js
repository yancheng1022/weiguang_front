import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'


//实际上调用VueRouter的install方法，对Vue进行了扩展，
Vue.use(VueRouter)

const routes = [
  {path : '/login', component: Login}
]

const router = new VueRouter({
  routes
})

export default router
