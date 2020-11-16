import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username : ''
  },
  mutations: {
    SET_USERNAME(state , payload){
      state.username = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
