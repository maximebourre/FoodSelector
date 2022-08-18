import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

new Vuex.Store({
    state: () => ({
        userInfo: {},
        Meals: [],
        Ingredients: [],
        UserMeals: [],
        userId: 1,
    }),
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setUserMeals(state, userMeals) {
            state.UserMeals = userMeals;
            console.log(userMeals);
        }
    },
    actions: {
        setUserInfo(context) {
            axios.get(`http://foodselector.alwaysdata.net/user/1`)
                .then((responce) => {
                    context.commit('setUserInfo', responce.data);
                    console.log("axios");
                    console.log(responce.data);
                });
        },
        setUserMeals(context) {
            axios.get(`http://foodselector.alwaysdata.net/userMeals/1`)
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
            console.log(state.UserMeals);
            return state.UserMeals;

        }
    }

})