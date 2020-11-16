import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'

import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// axios.interceptors.request.use(config => {
//   config.headers.token = localStorage.getItem('token');
//   return config;
// },err => {
//   return Promise.reject(error);
// })

Vue.use(Vant);
// Vue.use(Notify);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
