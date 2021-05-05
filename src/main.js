import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../node_modules/ecored-base-pkg/src/store/index.js'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/_styles.sass'

import '../node_modules/ecored-base-pkg/src/components/GlobalComponents'
import '../node_modules/ecored-base-pkg/src/mixins/globalMixins'

import config from './config/global'
Vue.prototype.$config = config

const packageJson = require('../package.json')
Vue.prototype.$package = packageJson

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
