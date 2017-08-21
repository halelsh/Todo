/**
 * Created by Adiel
 */
import VueRouter from 'vue-router'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'
import TodosView from './views/TodosView.vue'
import ListsView from './views/ListsView.vue'
import store from "./store";
import loginModule from "./store/module/login.module";


const routes = [
    {path: '/', component: ListsView, meta: {RequiresAuth: true}},
    {path: '/todos', component: TodosView, meta: {RequiresAuth: true}},
    {path: '/lists', component: ListsView, meta: {RequiresAuth: true}},
    {path: '/login', component: LoginView, name: 'login'},
    {path: '/main', component: LoginView},
    {path: '/register', component: RegisterView},
];
const router = new VueRouter({
    history: false,
    routes
});

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.RequiresAuth)) {
        if (!store.state.nowConnect) {
            store.dispatch(loginModule.types.GETCONNECT).then(() => {
                if (!store.state.loginModule.nowConnect) {
                    next({
                        path: '/login',
                        query: {redirect: to.fullPath}
                    })
                }
                else {
                    console.log("בget לא ריק, כלומר מישהו מחובר")
                    next()
                }
            });
        }

    } else {
        next()
    }
})
export default router
