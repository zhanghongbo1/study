import Vue from 'vue'
import Vuex from 'vuex'
import{ show }from './bord'
import myaxios from '@/assets/request'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    src:""
  },
  mutations: {
    islogin(state){
      state.isLogin=true
    },
    isNologin(state){
      state.isLogin=false
    },
    img(state,val){
      state.src=val
    }
  },
  actions: {
    imgget({commit},val){
      myaxios.post('/getimg',{id:val}).then(res=>{
      //  console.log(res)
        commit("img",res.img)
      })
    }
  },
  modules: {
    show : show
  }
})
