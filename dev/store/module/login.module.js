/**
 * Created by Adiel
 */
import LoginService from "../../services/LoginService";

const types = {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
    LOGOUT: "LOGOUT",
    GETCONNECT: "GETCONNECT",
    GETAPPDATA : "GETAPPDATA"
}
const Service = new LoginService

const state = {
    nowConnect: null,
}

const mutations = {
    [types.LOGIN](state, user) {
        state.nowConnect = user
    },
    [types.LOGOUT](state, user) {
        state.nowConnect = null
    },
    [types.GETCONNECT](state, user) {
        state.nowConnect = user
    },
    [types.REGISTER](state, user) {
    },

}
const actions = {
    [types.LOGIN](context, data) {
        return Service.login(data).then((data) => {
            context.commit(types.LOGIN, data.data)
            return data
        })
    },
    [types.LOGOUT](context) {
        return Service.login().then((data) => {
            if (data.success)
                context.commit(types.LOGOUT)
            return data
        })
    },

    [types.LOGOUT](context) {
        return Service.logout().then(data => {
            context.commit(types.LOGOUT)
            return data
        })
    },

    [types.GETCONNECT](context) {
        return Service.getConnect().then(
            (data) => {
                if (data) {
                    context.commit(types.GETCONNECT, data.data);
                }
                return data
            });
    },
    [types.REGISTER](context, data) {
        return Service.register(data).then(data => {
            if (data) {
                // context.commit(types.REGISTER, data.data);
            }
            return data
        })
    },
    [types.GETAPPDATA](context, data) {
        return Service.getAppData(data).then(data => {
            if (data) {
                // context.commit(types.REGISTER, data.data);
            }
            return data
        })
    },
}
export default {
    state,
    actions,
    mutations,
    types,

}
