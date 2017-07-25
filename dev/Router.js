/**
 * Created by Adiel
 */
import VueRouter from 'vue-router'
import LoginView from './views/LoginView.vue'
import MainPage from './views/MainView.vue'
import store from "./store";


const routes = [
    {path: '/', component: MainPage},
    {path: '/login', component: LoginView, name: 'login'},
    {path: '/main', component: LoginView},
];
const router = new VueRouter({
    history: false,
    routes
});


export default router
