<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(titulo="Tema 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia risus")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    
    #t_1_1.pb-5.h2 tema 1.1
    .pb-5(v-for="item of 15")

    #t_1_2.pb-5.h2 tema 1.2
    .pb-5(v-for="item of 15")

    #t_1_3.pb-5.h2 tema 1.3
    .pb-5(v-for="item of 15")

    #t_1_4.pb-5.h2 tema 1.4
    .pb-5(v-for="item of 15")

    #t_1_5.pb-5.h2 tema 1.5
    .pb-5(v-for="item of 15")

</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
