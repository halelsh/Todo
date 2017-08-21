/**
 * Created by Adiel
 */
import ListService from "../../services/ListService";
import todoModule from '../module/todo.module'

const types = {
    FETCH: "list/fetch",
    REMOVE: "list/remove",
    CREATE: "list/create",
    UPDATE: "list/update",

}
const Service = new ListService

const state = {
    lists: [],
    nowList: {}
}

const mutations = {
    [types.FETCH](state, lists) {
        state.lists = lists;
    },
    [types.REMOVE](state, list) {
        ListService.removeFromArry(state.todos, list)
    },
    [types.CREATE](state, list) {
        state.lists.push(list)
    },
    [types.UPDATE](state, list) {
        ListService.UpdateArrayById(state.lists, list)
    },
    setNowList(state, id) {

        let list = ListService.findById(state.lists, id)
        console.log(list)
        state.nowList = list


    }

}

const actions = {
    [types.FETCH](context) {
        return Service.fetch().then((data) => {
            context.commit(types.FETCH, data)
            return data

        })
    },

    [types.REMOVE](context, list) {
        return Service.remove(list.id).then(data => {
            context.commit(types.REMOVE, list)
            return data
        })
    },

    [types.CREATE](context, list) {
        return Service.create(list).then(
            (data) => {
                if (data) {
                    context.commit(types.CREATE, data.data);
                }
                return data
            });
    },
    [types.UPDATE](context, list) {

        return Service.update(list, list.id).then(
            (data) => {
                if (data.success) {
                    context.commit(types.UPDATE, list);
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
