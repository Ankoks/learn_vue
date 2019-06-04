import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Elements from "./views/Elements";
import Menu from "./views/Menu";
import LoginPage from "./views/LoginPage";
import ActionsPage from "./views/ActionsPage";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/menu', name: 'menu', component: Menu},
    {path: '/', name: 'home', component: Home},
    {path: '/about', name: 'about', component: () => import('./views/About.vue')},
    {path: '/elements', name: 'elements', component: Elements},
    {path: '/login', name: 'login', component: LoginPage},
    {path: '/actions', name: 'actions', component: ActionsPage}
  ]
})
