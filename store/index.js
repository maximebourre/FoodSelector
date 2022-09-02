import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

new Vuex.Store({
    state: () => ({
        userInfo: {},
        users: {},
        Meals: [],
        Ingredients: [],
        UserMeals: [],
        userId: 1,
    }),
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setUsers(state, users) {
            state.users = users;
        },
        setUserMeals(state, userMeals) {
            state.UserMeals = userMeals;
            console.log(userMeals);
        }
    },
    actions: {
        setUserInfo(context) {
            axios.get(`https://foodselector.alwaysdata.net/user/1`)
                .then((responce) => {
                    context.commit('setUserInfo', responce.data);
                    console.log("axios");
                    console.log(responce.data);
                });
        },
        setUsers(context) {
            axios.get(`https://foodselector.alwaysdata.net/users`)
                .then((responce) => {
                    context.commit('setUsers', responce.data);
                    console.log("axios");
                    console.log(responce.data);
                });
        },
        setUserMeals(context) {
            axios.get(`https://foodselector.alwaysdata.net/userMeals/1`)
                .then((responce) => {
                    context.commit('setUserMeals', responce.data);
                });
        }
    },
    modules: {},
    getters: {
        getUser(state) {
            return state.userInfo;
        },
        getUserMeals(state) {
            return state.users;
        },
        getUserMeals(state) {
            console.log(state.UserMeals);
            return state.UserMeals;

        }
    }

})