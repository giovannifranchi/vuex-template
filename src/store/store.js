import { createStore } from "vuex";

import User from "../api/USer";

const store =  createStore({
    state: {
        user: {
            authtoken: null,
            username: null,
            role: null,
        },
    },

    getters: {

        getUsername(state){
            return state.user.username;
        },
        getRole(state){
            return state.user.role;
        }
    },

    mutations: {

        setUsername(state, value){
            state.user.username = value;
        },

        setRole(state, value){
            state.user.role = value;
        }
    },

    actions: {

        async fecthUsername({commit}){
            const response = await User.getUsername(this.state.user.authtoken);
            commit('setUsername', response);
        },

        async fetchRole({commit}){
            const response = await User.getRole(this.state.user.authtoken);
            commit('setRole', response);
        }

    }
});

export default store;