<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #t_3_1.pb-5.h2 tema 3.1
    .pb-5(v-for="item of 15")

    #t_3_2.pb-5.h2 tema 3.2
    .pb-5(v-for="item of 15")

    #t_3_3.pb-5.h2 tema 3.3
    .pb-5(v-for="item of 15")

    #t_3_4.pb-5.h2 tema 3.4
    .pb-5(v-for="item of 15")

    #t_3_5.pb-5.h2 tema 3.5
    .pb-5(v-for="item of 15")

    #t_3_6.pb-5.h2 tema 3.6
    .pb-5(v-for="item of 15")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
