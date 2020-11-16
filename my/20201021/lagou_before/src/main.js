import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
//请求拦截
axios.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('token');
  return config;
} , (err) => {
  return Promise.reject(err)
})
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
