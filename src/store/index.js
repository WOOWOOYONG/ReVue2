import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {},
  actions: {
    plus({ commit }, value) {
      commit('PLUS', value);
    },
    minus({ commit }, value) {
      commit('MINUS', value);
    },
  },
  mutations: {
    PLUS(state, value) {
      state.count += value;
    },
    MINUS(state, value) {
      state.count -= value;
    },
  },

  modules: {},
});
