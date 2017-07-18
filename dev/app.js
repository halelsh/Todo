import Vue from "vue/dist/vue";

require('bootstrap');
// var rtlcss = require('rtlcss');
require('izitoast/dist/css/iziToast.min.css')


import store from "./store";
// import Vodal from 'vodal';
// import "vodal/common.css";
// import "vodal/rotate.css";
import App from './views/app.vue'
require('izitoast/dist/css/iziToast.min.css')
// Vue.component(Vodal.name, Vodal);


const app = new Vue({

    components: {
        App
    },
    store,
}).$mount('#app');