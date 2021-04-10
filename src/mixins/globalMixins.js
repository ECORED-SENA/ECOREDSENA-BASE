import Vue from 'vue'
Vue.mixin({
  methods: {
    obtenerLink(ruta) {
      const route = window.location.href
      const baseRoute = route.split('/#/')[0]
      console.log(this.$route, baseRoute)
      return baseRoute + ruta
    },
  },
})
