import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLogin from '../components/admin/Login'
import AdminHome from '../components/admin/Home'
import AddInterview from '../components/admin/AddInterview'
import InterviewList from '../components/admin/InterviewList'
import Home from '../components/Home'

//实际上调用VueRouter的install方法，对Vue进行了扩展，
Vue.use(VueRouter)

const routes = [
  {path : '/admin/login', component: AdminLogin},
  {
    path : '/admin/home', 
    component: AdminHome,
    children:[
      {path : 'addInterview', component: AddInterview,},
      {path : 'interviewList', component: InterviewList,},
    ]
  },
  {path : '/home', component: Home}
]

const router = new VueRouter({
  routes
})
export default router
