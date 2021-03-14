import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

//实际上调用VueRouter的install方法，对Vue进行了扩展，
Vue.use(VueRouter)

const routes = [
  {path : '/login', component: Login},
  {path : '/home', component: Home}
]

const router = new VueRouter({
  routes
})

export default router
