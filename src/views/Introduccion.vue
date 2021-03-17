<template lang="pug">
.curso-main-container.introduccion
  BannerCurso
  .container.tarjeta--blanca.p-5.mb-5
    .h3 INTRODUCCION
    hr
    
    iframe.video(, 
      src='https://www.youtube.com/embed/YXT2HTjiB3Q', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
</template>

<script>
import BannerCurso from '../components/plantilla/BannerCurso'
export default {
  name: 'Introduccion',
  components: {
    BannerCurso,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
