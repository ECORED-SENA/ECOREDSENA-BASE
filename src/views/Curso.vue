<template lang="pug">
#curso.curso
  router-view
  BarraAvance
</template>

<script>
import BarraAvance from '../components/plantilla/BarraAvance'
export default {
  name: 'Curso',
  components: {
    BarraAvance,
  },
}
</script>

<style lang="sass" scoped></style>
