/**
 * Created by Adiel
 */
import Vue from "vue/dist/vue";
import Vuex from "vuex";
import loginModule from "./module/login.module";

Vue.use(Vuex);
import todoModule from "./module/todo.module";
import userModule from "./module/user.module";


const store = new Vuex.Store({
    state: {
        msg: "hello "
    },
    modules: {
        todoModule,
        userModule,
        loginModule,
    }
});
window.ss = store;
export default store;

