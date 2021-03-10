<template lang="pug">
#app
  aside
  section
    Header
    router-view
    footer

</template>

<script>
import Header from './components/plantilla/Header'
export default {
  name: 'Inicio',
  components: {
    Header,
  },
}
</script>

<style lang="sass"></style>
