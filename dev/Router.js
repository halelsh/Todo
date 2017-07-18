/**
 * Created by Adiel
 */
import HomePage from './views/HomePage.vue'
import MainPage from './views/apps/main/MainPage.vue'
import BuildApp from './views/apps/creation/BuildApp.vue'
import ManageApp from './views/apps/manage/ManageView.vue'
import VueRouter from 'vue-router'
import RegisterView from './views/login/RegisterView.vue'
import store from "./store";
import usersModule from "./store/module/user.module";

import CouponsView from './views/apps/manage/pages/contents/coupons/CouponsView.vue';
// import InfoView from './views/apps/manage/pages/info/InfoVIew.vue';
import StaticsView from './views/apps/manage/pages/statics/StaticsVIew.vue';
import BarLinks from './views/apps/manage/pages/contents/barLinks/BarLinksView.vue';
import SettingsView from './views/apps/manage/pages/settings/SettingsView.vue';
import ImagesView from './views/apps/manage/pages/images/ImagesView.vue';


const routes = [
    {path: '/', component: HomePage},
    {path: '/main', component: MainPage, name: 'main', meta: {RequiresAuth: true}},
    {path: '/register', component: RegisterView},
    {path: '/build-app/:id', component: BuildApp, props: true, meta: {RequiresAuth: true}},
    {path: '/build-app/', component: BuildApp, props: true, meta: {RequiresAuth: true}},
    {
        path: '/manage-app/:id', component: ManageApp, props: true, meta: {RequiresAuth: true},
        children: [
            {path: '', component: CouponsView, props: true, meta: {RequiresAuth: true}},
            {path: 'coupons', component: CouponsView, props: true, meta: {RequiresAuth: true}},
            {path: 'bar-links', component: BarLinks, props: true, meta: {RequiresAuth: true}},
            {path: 'images', component: ImagesView, props: true, meta: {RequiresAuth: true}},
            {path: 'settings', component: SettingsView, props: true, meta: {RequiresAuth: true}},
            // {path: 'info', component: InfoView, props: true, meta: {RequiresAuth: true}},
            {path: 'statics', component: StaticsView, props: true, meta: {RequiresAuth: true}},
            // ...other sub routes
        ]
    },
    // {path: '/findMember', component: FindMember},
    // {path: '/pivot', component: Pivot},
];
const router = new VueRouter({
    history: false,
    routes
});


router.beforeEach((to, from, next) => {

    console.log(store.state.userModule.nowUser, "הדפסה מי מחובר מהראוטר")

    if (to.matched.some(record => record.meta.RequiresAuth)) {
        store.dispatch(usersModule.types.GETCONNECT).then(() => {
            if (store.state.userModule.nowUser == null) {
                next({
                    path: '/',
                    query: {redirect: to.fullPath}
                })
            }
            else {
                console.log("בget לא ריק, כלומר מישהו מחובר")
                next()
            }
        });

    } else {
        console.log("בget לא ריק, כלומר מישהו מחובר")
        next()
    }
    // } else {
    //     console.log("on router.. if page no need to require auth")
    //     next() // make sure to always call next()!
    // }
})

export default router
