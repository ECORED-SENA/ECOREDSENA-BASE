<template lang="pug">
#curso.curso
  router-view
  BarraAvance(:menu-open="menuOpen")
</template>

<script>
import BarraAvance from '../components/plantilla/BarraAvance'
export default {
  name: 'Curso',
  components: {
    BarraAvance,
  },
  props: {
    menuOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="sass" scoped></style>
