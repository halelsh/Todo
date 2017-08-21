/**
 * Created by Adiel
 */
import TodoService from "../../services/TodoService";

const types = {
    FETCH: "todo/fetch",
    GET: "todo/get",
    REMOVE: "todo/remove",
    CREATE: "todo/create",
    UPDATE: "todo/update",

}
const Service = new TodoService

const state = {
    todos: [],
}

const mutations = {
    [types.FETCH](state, todos) {
        state.todos = todos;
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
    [types.GET](state, todos) {
        state.todos = todos
    },

}

const actions = {
    [types.FETCH](context) {
        return Service.fetch().then((data) => {
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
    [types.GET](context, listId) {
        return Service.get(listId).then(data => {
            context.commit(types.GET, data.data)
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
