import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import './styles/_styles.sass'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
