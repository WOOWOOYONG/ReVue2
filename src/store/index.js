import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myName: 'Yong',
    study: 'Front-end',
    count: 240,
    todos: [],
  },
  getters: {
    todoNum(state) {
      return state.todos.length;
    },
  },
  actions: {
    plus({ commit }, value) {
      commit('PLUS', value);
    },
    minus({ commit }, value) {
      commit('MINUS', value);
    },
    addTodo({ commit }, todo) {
      commit('ADDTODO', todo);
    },
    randomPlus({ commit }, value) {
      commit('RANDOMPLUS', value);
    },
    randomMinus({ commit }, value) {
      commit('RANDOMMINUS', value);
    },
  },
  mutations: {
    PLUS(state, value) {
      state.count += value;
    },
    MINUS(state, value) {
      state.count -= value;
    },
    ADDTODO(state, todo) {
      state.todos.push(todo);
    },
    RANDOMPLUS(state, value) {
      setTimeout(() => {
        state.count += value;
      }, 1000);
    },
    RANDOMMINUS(state, value) {
      setTimeout(() => {
        state.count -= value;
      }, 1000);
    },
  },

  modules: {},
});
