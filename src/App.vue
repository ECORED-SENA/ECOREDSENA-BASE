<template lang="pug">
#app.app
  Header(:menu-open.sync="menuOpen")
  .contenedor-principal
    AsideMenu(:menu-open="menuOpen")
    section.seccion-principal
      router-view
      footer

</template>

<script>
import AsideMenu from './components/plantilla/AsideMenu'
import Header from './components/plantilla/Header'
export default {
  name: 'Inicio',
  components: {
    AsideMenu,
    Header,
  },
  data: () => ({
    menuOpen: false,
  }),
}
</script>

<style lang="sass">
.app
  // height: 100%

.contenedor-principal
  display: flex
  align-items: flex-start

.seccion-principal
  width: 100%
</style>
