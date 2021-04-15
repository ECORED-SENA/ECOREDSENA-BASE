import Vue from 'vue'
Vue.mixin({
  methods: {
    obtenerLink(ruta) {
      const route = window.location.href
      let separator = route.includes('/index.html#') ? 'index.html#' : '#/'
      const baseRoute = route.split(separator)[0]
      return baseRoute + ruta
    },
  },
})
