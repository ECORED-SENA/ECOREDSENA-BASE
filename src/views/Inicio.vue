<template lang="pug">
section
  BannerPrincipal.mb-5
  
  //- Resultados de aprendizaje
  .container.tarjeta.tarjeta__template--azul-claro.px-5.py-4.mb-5
    .row
      .col-md-3.col-xl-2.mb-4.mb-md-0
        .titulo__template--a
          span.h6 Resultados<br>de aprendizaje

      .col-md-9.col-xl-10
        ul.resultados-aprendizaje
          li.resultados-aprendizaje__item(v-for="resultado of resultadosData")
            span {{resultado}}

  //- Desarrollo de contenidos
  .container.tarjeta.tarjeta__template--azul-claro.px-5.pt-4.pb-5.mb-5
    .titulo__template--a.mb-4
      span.h6 Desarrollo<br>de contenidos

    .tarjeta--blanca.p-4
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
  .container.tarjeta.tarjeta__template--azul-claro.px-5.py-4.mb-5
    .titulo__template--a.mb-4
      span.h6 Créditos

    .creditos
      .mb-3
        p.text-bold ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES
      .mb-4
        p
          span.text-bold Ingry Dayanna Bonilla Monzon
          br
          | Líder del equipo

      .row
        .col-lg-4
          p.creditos__titulo.mb-3 CONTENIDO INSTRUCCIONAL

          p.mb-3
            span.text-bold Gloria Matilde Lee Mejía
            br
            | Responsable del equipo
            br
            | Centro de Comercio y Servicios
            br
            | Regional Tolima

          p.mb-3
            span.text-bold Rafael Neftalí Lizcano Reyes
            br
            | Asesor pedagógico
            br
            | Centro Industrial del Diseño y la Manufactura
            br
            | Regional Santander

          p.mb-3
            span.text-bold Astrid Lili Puerta
            br
            | Experta temática
            br
            | Centro Agropecuario de Buga
            br
            | Regional valle

          p.mb-3
            span.text-bold Javier Enrique Santana
            br
            | Experto temático
            br
            | Centro de Gestión Industrial
            br
            | Regional Distrito Capital

          p.mb-3
            span.text-bold Michael Andrés Cortés Caro
            br
            | Experto temático
            br
            | Ministerio de Ambiente y Desarrollo Sostenible

        .col-lg-4
          p.mb-3
            span.text-bold Mauricio Jiménez Fajardo
            br
            | Experto temático
            br
            | Ministerio de Ambiente y Desarrollo Sostenible

          p.mb-3
            span.text-bold Manuel Alejandro Garzón Cárdenas
            br
            | Experto temático
            br
            | Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)

          p.mb-3
            span.text-bold Liliana Victoria Morales Gualdrón
            br
            | Diseñador instruccional
            br
            | Centro para la Industria y la Comunicación Gráfica
            br
            | Regional Distrito Capital

          p.mb-3
            span.text-bold Carlos Andrés Rodríguez
            br
            | Evaluador instruccional
            br
            | Centro de Diseño y Metrología
            br
            | Regional Distrito Capital

          p.mb-4.mb-lg-0
            span.text-bold Julieth Paola Vital López
            br
            | Revisora de estilo
            br
            | Centro para la Industria de la Comunicación Gráfica
            br
            | Regional Distrito Capital

        .col-lg-4
          p.creditos__titulo.mb-3 DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES 

          p.mb-3
            span.text-bold Francisco José Lizcano Reyes
            br
            | Responsable del equipo

          p.mb-3
            span.text-bold Leyson Fabian Castaño Perez
            br
            | Integración de recursos y pruebas

          p.mb-3
            span.text-bold Adriana Rincón Avendaño
            br
            span.text-bold Eulises Orduz Amezquita
            br
            | Diseño web y Producción Audiovisual

          p.mb-3
            span.text-bold Edward Leonardo Pico Cabra
            br
            | Desarrollo Front-end

          p.mb-4 Centro Industrial del Diseño y la Manufactura
            br
            | Regional Santander

          p.creditos__titulo.mb-3 GESTORES DE REPOSITORIO

          p.mb-3
            span.text-bold Brayan Stiven Pinto Diaz
            br
            | Desarrollo front-end
            br
            | Validación de recursos.
            br
            | Centro de comercio y servicios
            br
            | Regional Tolima

  Footer
  

</template>
<script>
import { resultadosAprendizaje, menuPrincipal } from '../config/global'
import BannerPrincipal from '../components/plantilla/BannerPrincipal'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Inicio',
  components: {
    BannerPrincipal,
    Footer,
  },
  data: () => ({
    resultadosData: resultadosAprendizaje,
    menuPrincipalData: menuPrincipal,
  }),
  computed: {
    desarrolloContenidosData() {
      const allMenuData = [
        ...this.menuPrincipalData.menu,
        ...this.menuPrincipalData.subMenu,
      ]
      return allMenuData.filter(item => item.desarrolloContenidos)
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
