<template lang="pug">
.curso-main-container
  BannerInterno(titulo="Tema 2 Lorem ipsum dolor sit amet, consectetur")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    
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
  name: 'Tema1',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
