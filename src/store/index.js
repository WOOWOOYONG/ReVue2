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

    // 非同步actions
    async getTodo({ commit }) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonTodo = await response.json();
        console.log(jsonTodo);
        commit('ADDTODO', jsonTodo);
      } catch (error) {
        console.error('Fetch error:', error);
      }
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
