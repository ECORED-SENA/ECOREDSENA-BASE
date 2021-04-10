import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/_styles.sass'

import '@/components/GlobalComponents'
import '@/mixins/globalMixins'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
