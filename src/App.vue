<template lang="pug">
#app.app
  Header(:menu-open.sync="menuOpen")
  .contenedor-principal
    AsideMenu(:menu-open.sync="menuOpen")
    section.seccion-principal
      router-view(:menu-open="menuOpen")
      footer
  BarraAvance(:menu-open="menuOpen")

</template>

<script>
import { global } from './config/global'
import AsideMenu from './components/plantilla/AsideMenu'
import Header from './components/plantilla/Header'
import BarraAvance from './components/plantilla/BarraAvance'
export default {
  name: 'App',
  components: {
    AsideMenu,
    Header,
    BarraAvance,
  },
  data: () => ({
    menuOpen: false,
    globalData: global,
  }),
  created() {
    document.title = this.globalData.componenteFormativo
  },
}
</script>

<style lang="sass">
.app

.contenedor-principal
  display: flex
  align-items: flex-start

.seccion-principal
  width: 100%
</style>
