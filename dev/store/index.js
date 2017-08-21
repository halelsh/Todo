/**
 * Created by Adiel
 */
import Vue from "vue/dist/vue";
import Vuex from "vuex";

Vue.use(Vuex);
import loginModule from "./module/login.module";
import todoModule from "./module/todo.module";
import userModule from "./module/user.module";
import listModule from "./module/list.module";


const store = new Vuex.Store({
    state: {
        msg: "hello "
    },
    modules: {
        todoModule,
        userModule,
        listModule,
        loginModule,
    }
});
window.ss = store;
export default store;

