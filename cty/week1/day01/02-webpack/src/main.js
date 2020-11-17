// import "@babel/polyfill";
import Vue from 'vue'
import App from './App.vue'

import './style.css'
import './test.styl'
import './sass.scss'
import fn , {myTest} from './MyTest'

myTest.say()
myTest.cty()
;(async function(){
  const res = await fn();
  console.log(res);
})()
// new Vue({
//   el : '#app',
//   render : (h) => h(App)
// })
new Vue({
  render : (h) => h(App)
}).$mount('#app')