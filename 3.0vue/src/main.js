import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 import '@/assets/api/rem.js'
import '@/assets/reset.css'
import myaixos from '@/assets/request'
import '@/assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$axios=myaixos 
import SlideVerify from 'vue-monoplasty-slide-verify';

Vue.use(SlideVerify);
// Vue.filter('change',(val)=>{
//   const reg = /\[(.+?)\]/g
//   console.log(val)
//   if(val){
    
//     return val.replace(reg,`<img  src='https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/1.gif'>`)
//   }
//   console.log(val)
// })
//Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
