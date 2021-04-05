<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #t_2_1.pb-5.h2 tema 2.1
    .pb-5(v-for="item of 15")

    #t_2_2.pb-5.h2 tema 2.2
    .pb-5(v-for="item of 15")

    #t_2_3.pb-5.h2 tema 2.3
    .pb-5(v-for="item of 15")

    #t_2_4.pb-5.h2 tema 2.4
    .pb-5(v-for="item of 15")

    #t_2_5.pb-5.h2 tema 2.5
    .pb-5(v-for="item of 15")

    #t_2_6.pb-5.h2 tema 2.6
    .pb-5(v-for="item of 15")

    #t_2_7.pb-5.h2 tema 2.7
    .pb-5(v-for="item of 15")

    #t_2_8.pb-5.h2 tema 2.8
    .pb-5(v-for="item of 15")

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
