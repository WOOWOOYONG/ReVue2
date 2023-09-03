import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myName: 'Yong',
    study: 'Front-end',
    count: 240,
    todos: [],
  },
  plugins: [
    createPersistedState({
      // 儲存到cookie
      storage: {
        getItem: (key) => {
          const cookieValue = Cookies.get(key);
          const bytes = CryptoJS.AES.decrypt(cookieValue, 'One-Piece');
          const decryptValue = bytes.toString(CryptoJS.enc.Utf8);
          return decryptValue;
        },
        setItem: (key, value) => {
          console.log('Value before encryption:', value);
          const stringValue = value.toString();
          const encryptValue = CryptoJS.AES.encrypt(stringValue, 'One-Piece').toString();
          Cookies.set(key, encryptValue, { expires: 3, secure: true });
          console.log('Value after encryption:', encryptValue);
        },
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
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
