import Vue from 'vue'
import Vuex from 'vuex'
import{ show }from './bord'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false
  },
  mutations: {
    islogin(state){
      state.isLogin=true
    },
    isNologin(state){
      state.isLogin=false
    }
  },
  actions: {
  },
  modules: {
    show : show
  }
})
