import Vue from "vue/dist/vue";
import VueRouter from 'vue-router';

require('bootstrap');
// var rtlcss = require('rtlcss');
require('izitoast/dist/css/iziToast.min.css')
import router from './router';
import {sync} from 'vuex-router-sync';
import navbar from './views/Navbar.vue'


import store from "./store";
// import Vodal from 'vodal';
// import "vodal/common.css";
// import "vodal/rotate.css";
import App from './views/MainView.vue'

require('izitoast/dist/css/iziToast.min.css')
// Vue.component(Vodal.name, Vodal);
Vue.use(VueRouter);
sync(store, router);
const app = new Vue({
    navbar,

    store,
    router,
    components: {
        navbar,

        App
    },

}).$mount('#app');