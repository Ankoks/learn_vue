import Vue from 'vue/types'
import Router from 'vue-router/types'
import Home from '../components/views/Home.vue'
import Elements from "../components/views/Elements";
import Menu from "../components/views/Menu";
import LoginPage from "../components/views/Login";
import ActionsPage from "../components/views/Actions";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/menu', name: 'menu', component: Menu},
    {path: '/', name: 'home', component: Home},
    {path: '/about', name: 'about', component: () => import('../components/views/About.vue')},
    {path: '/elements', name: 'elements', component: Elements},
    {path: '/login', name: 'login', component: LoginPage},
    {path: '/actions', name: 'actions', component: ActionsPage}
  ]
})
