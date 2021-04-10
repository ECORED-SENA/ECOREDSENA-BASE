<template lang="pug">
.curso-main-container.referencias
  BannerInterno(icono="fas fa-book" titulo="Referencias bibliográficas")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .referencias__item(v-for="ref in referenciasData" :key="ref.link") 
      | {{ref.referencia}} 
      a(v-v-if="ref.link" :href="ref.link" target="_blank") {{ref.link}} 
        i.fas.fa-external-link-alt
      hr.my-3

</template>
<script>
import { referencias } from '../config/global'
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Referencias',
  components: {
    BannerInterno,
  },
  data: () => ({
    referenciasData: referencias,
  }),
}
</script>

<style lang="sass" scoped>
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
