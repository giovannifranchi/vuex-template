import { createStore } from "vuex";

const store =  createStore({
    state: {
        user: {
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
            const response = await User
            commit('setUsername', response);
        },

        async fetchRole({commit}){
            const response = await Role;
            commit('setRole', response);
        }

    }
});

export default store;