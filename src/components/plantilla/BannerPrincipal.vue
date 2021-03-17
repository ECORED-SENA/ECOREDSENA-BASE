<template lang="pug">
.banner-principal
  .container.tarjeta.p-5.pb-0(:style="{'background-image': `url(${globalData.fondoBannerPrincipal})`}")
    .row.justify-content-around
      .col-lg-7.col-xxl-5.banner-principal__info
        .banner-principal__programa
          span.text-small.insignia.me-2 Programa
          p.text-small.mb-0 {{globalData.programaFormacion}}
        .banner-principal__componente
          h1.mb-0 {{globalData.componenteFormativo}}
        .banner-principal__descripcion
          p.mb-0 {{globalData.descripcionCurso}}
        .banner-principal__accion
          a.boton
            span.me-1 Iniciar
            i(class="fas fa-angle-right")

      .d-none.d-lg-block.col-lg-5.align-self-end
        img(:src="globalData.imagenBannerPrincipal")
</template>

<script>
import { global } from '../../config/global'
export default {
  name: 'BannerPrincipal',
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.banner-principal
  span, p, h1
    color: $white

  .tarjeta
    background-color: $color-curso-a
    background-size: cover
    background-position: center


  &__info
    padding-bottom: 50px

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

  &__descripcion
    margin-bottom: 20px
</style>
