import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/Home.vue'
import Elements from "../components/views/Elements";
import ProfilePage from "../components/views/ProfilePage";
import LoginPage from "../components/views/Login";
import ActionsPage from "../components/views/Actions";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/profile', name: 'profile', component: ProfilePage},
    {path: '/about', name: 'about', component: () => import('../components/views/About.vue')},
    {path: '/elements', name: 'elements', component: Elements},
    {path: '/login', name: 'login', component: LoginPage},
    {path: '/actions', name: 'actions', component: ActionsPage}
  ],
  mode: 'history'
})
