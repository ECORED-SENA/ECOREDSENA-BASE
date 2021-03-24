<template lang="pug">
.curso-main-container.referencias
  BannerInterno(icono="fas fa-book" titulo="Referencias bibliográficas")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    .referencias__item(v-for="ref in referenciasData" :key="ref.link")
      a(:href="ref.link" target="_blank") {{ref.referencia}}
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
</style>
