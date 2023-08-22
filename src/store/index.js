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
  },

  modules: {},
});
