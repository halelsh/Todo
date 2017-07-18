/**
 * Created by Adiel
 */
import Vue from "vue/dist/vue";
import Vuex from "vuex";
Vue.use(Vuex);
import todoModule from "./module/todo.module";


const store = new Vuex.Store({
    state: {
        msg: "hello "
    },
    modules: {
        todoModule,
    }
});
window.ss = store;
export default store;

