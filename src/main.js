import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles/plugins/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import './styles/_styles.sass'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
