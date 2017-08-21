/**
 * Created by Adiel
 */
import UserService from "../../services/UserService";

const types = {
    LOGIN: "user/login",
    REGISTER: "user/register",
    REMOVE: "user/remove",
    CREATE: "user/create",
    UPDATE: "user/update",

}
const Service = new UserService

const state = {
    nowUser: {
        username: '',
        password: ''
    },
}

const mutations = {
    [types.LOGIN](state, user) {
        state.todos = todos;
    },
    [types.REGISTER](state, user) {
        state.nowUser = user;
    },
    [types.REMOVE](state, todo) {
        TodoService.removeFromArry(state.todos, todo)
    },
    [types.CREATE](state, todo) {
        console.log(todo)
        state.todos.push(todo)
    },
    [types.UPDATE](state, app) {
        TodoService.UpdateArrayById(state.todos, app)
    },
    setUser(state, user) {
        alert()
        state.nowUser = user;
    }

}

const actions = {
    [types.LOGIN](context) {
        return Service.login().then((data) => {
            context.commit(types.FETCH, data)
            return data

        })
    },

    [types.REMOVE](context, todo) {
        return Service.remove(todo.id).then(data => {
            context.commit(types.REMOVE, todo)
            return data
        })
    },

    [types.CREATE](context, todo) {
        return Service.create(todo).then(
            (data) => {
                if (data) {
                    context.commit(types.CREATE, data.data);
                }
                return data
            });
    },
    [types.UPDATE](context, todo) {

        return Service.update(todo, todo.id).then(
            (data) => {
                if (data.success) {
                    context.commit(types.UPDATE, todo);
                }
                return data;
            });

    },
}
export default {
    state,
    actions,
    mutations,
    types,

}
