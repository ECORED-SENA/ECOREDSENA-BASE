<template lang="pug">
.curso-main-container.introduccion
  BannerCurso
  .container.tarjeta--blanca.p-5.mb-5
    
    .h3 TEMA 1
    
    hr.mb-5

    #t_1_1.pb-5 tema 1.1
    .pb-5(v-for="item of 15")

    #t_1_2.pb-5 tema 1.2
    .pb-5(v-for="item of 15")

    #t_1_3.pb-5 tema 1.3
    .pb-5(v-for="item of 15")

    #t_1_4.pb-5 tema 1.4
    .pb-5(v-for="item of 15")

    #t_1_5.pb-5 tema 1.5
    .pb-5(v-for="item of 15")

</template>

<script>
import BannerCurso from '../../components/plantilla/BannerCurso'
export default {
  name: 'Tema1',
  components: {
    BannerCurso,
  },
}
</script>

<style lang="sass" scoped></style>
