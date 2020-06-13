import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from 'vue-loading-overlay';
// import axios from 'axios'
import '@/assets/css/tailwind.css' // tailwind css

Vue.config.productionTip = false

Vue.component('loading', Loading)






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
