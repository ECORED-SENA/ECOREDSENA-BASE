<template lang="pug">
.container-fluid.banner-curso
  .banner-curso__fondo(:style="{'background-image': `url(${globalData.fondoBannerPrincipal})`}")
  .container
    .banner-curso__titulo.py-5 
      h1.h3.mb-0 {{globalData.componenteFormativo}}
</template>

<script>
import { global } from '../../config/global'
export default {
  name: 'BannerCurso',
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.banner-curso
  position: relative

  &__fondo
    position: absolute
    top: 0
    bottom: -50px
    left: 0
    right: 0
    background-size: cover
    background-position: center

  &__titulo
    h1
      color: $color-banner-text
</style>
