<template lang="pug">
.banner-principal
  .container.tarjeta.p-4.ps-sm-5.pe-sm-5.pt-sm-5.pb-0(
    :style="{'background-image': `url(${globalData.fondoBannerPrincipal})`}"
  )
    .row.justify-content-around
      .col-lg-7.col-xxl-5.banner-principal__info.pb-4.pb-sm-5
        //- .banner-principal__programa
        //-   span.text-small.insignia.me-2 Programa
        //-   p.text-small.mb-0 {{globalData.programaFormacion}}
        .banner-principal__componente
          h1.mb-0 {{globalData.componenteFormativo}}
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Iniciar
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.align-self-end
        img(:src="globalData.imagenBannerPrincipal")
</template>

<script>
import { global } from '../../config/global'
import mixins from '../../mixins/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.banner-principal
  p, h1
    color: $white

  .tarjeta
    background-color: $color-curso-a
    background-size: cover
    background-position: center


  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px
</style>
