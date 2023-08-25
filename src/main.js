import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import allMixin from './mixins/allMixin';

Vue.config.productionTip = false;
// 全域註冊mixin
Vue.mixin(allMixin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
