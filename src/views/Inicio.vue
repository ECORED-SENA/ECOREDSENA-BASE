<template lang="pug">
section
  BannerPrincipal.mb-5
  
  //- Resultados de aprendizaje
  .container.tarjeta.tarjeta__template--azul-claro.px-3.py-4.px-sm-5.mb-5
    .row
      .col-md-3.col-xl-2.mb-4.mb-md-0
        .titulo__template--a
          span.h6 Resultados<br>de aprendizaje

      .col-md-9.col-xl-10
        ul.resultados-aprendizaje
          li.resultados-aprendizaje__item(v-for="resultado of resultadosData")
            span {{resultado}}

  //- Desarrollo de contenidos
  .container.tarjeta.tarjeta__template--azul-claro.px-3.py-4.px-sm-5.pb-sm-5.mb-5
    .titulo__template--a.mb-4
      span.h6 Desarrollo<br>de contenidos

    .tarjeta--blanca.p-3.p-sm-4
      .desarrollo-contenidos
        router-link.desarrollo-contenidos__item(
          v-for="item of desarrolloContenidosData"
          :key="'desarrollo-'+item.nombreRuta"
          :to="{name: item.nombreRuta}"
        )
          .desarrollo-contenidos__item__texto
            span.desarrollo-contenidos__item__icono(v-if="item.hasOwnProperty('numero')" ) {{item.numero}}
            i.desarrollo-contenidos__item__icono(v-else :class="item.icono")
            span {{item.titulo}}

          a.boton--sm.d-none.d-md-block
            span Ver más

  //- Créditos
  .container.tarjeta.tarjeta__template--azul-claro.px-3.py-4.px-sm-5.mb-5
    .titulo__template--a.mb-4
      span.h6 Créditos

    .creditos
      .mb-3
        p.text-bold ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES
      .mb-4
        p
          span.text-bold {{creditosData.liderEquipo.nombre}}
          br
          | {{creditosData.liderEquipo.cargo}}

      .row
        .col-lg-8
          p.creditos__titulo.mb-3 CONTENIDO INSTRUCCIONAL
          .row
            .col-lg-6(v-for="column of contenidoInstruccional")
              CreditosItem(v-for="item of column" :item="item")

        .col-lg-4
          p.creditos__titulo.mb-3 DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES 
          CreditosItem(v-for="item of creditosData.desarrolloProducto" :item="item")
          
          p.creditos__titulo.mb-3 GESTORES DE REPOSITORIO
          CreditosItem(v-for="item of creditosData.gestoresRepositorio" :item="item")

  Footer
  

</template>
<script>
import {
  resultadosAprendizaje,
  menuPrincipal,
  creditos,
} from '../config/global'
import BannerPrincipal from '../components/plantilla/BannerPrincipal'
import CreditosItem from '../components/plantilla/CreditosItem'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Inicio',
  components: {
    BannerPrincipal,
    CreditosItem,
    Footer,
  },
  data: () => ({
    resultadosData: resultadosAprendizaje,
    menuPrincipalData: menuPrincipal,
    creditosData: creditos,
  }),
  computed: {
    desarrolloContenidosData() {
      const allMenuData = [
        ...this.menuPrincipalData.menu,
        ...this.menuPrincipalData.subMenu,
      ]
      return allMenuData.filter(item => item.desarrolloContenidos)
    },
    contenidoInstruccional() {
      const contenido = this.creditosData.contenidoInstruccional
      const half = Math.round(contenido.length / 2)
      const firstHalf = [...contenido].splice(0, half)
      const secondHalf = [...contenido].splice(half, contenido.length)
      return [firstHalf, secondHalf]
    },
  },
}
</script>

<style lang="sass" scoped>
.resultados-aprendizaje
  &__item
    margin-bottom: 20px
    &:last-child
      margin-bottom: 0

.desarrollo-contenidos
  &__item
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 25px
    padding: 5px
    border-radius: $base-border-radius

    &__texto
      display: flex
      align-items: center

    &__icono
      display: block
      background-color: $color-sistema-g
      font-size: 20px
      font-weight: $base-black-font-weight
      text-align: center
      padding: 10px
      line-height: 1em
      width: 40px
      margin-right: 15px

    &:last-child
      margin-bottom: 0

    &:hover
      background-color: $color-sistema-g
      font-weight: $base-black-font-weight
      color: $color-sistema-a

.creditos
  color: $color-sistema-b

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-radius: $base-border-radius
</style>
