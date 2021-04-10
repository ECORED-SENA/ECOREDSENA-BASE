<template lang="pug">
.curso-main-container.creditos-vista
  BannerInterno(icono="far fa-registered" titulo="Créditos")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    CreditosComp
  Footer.mb-5(all-round)
    

</template>
<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import CreditosComp from '../components/plantilla/CreditosComp'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    CreditosComp,
    Footer,
  },
}
</script>

<style lang="sass" scoped></style>
