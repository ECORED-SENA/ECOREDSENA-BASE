<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-5 La necesidad de mitigar la pandemia por COVID-19 ha obligado a la comunidad científica internacional, a desarrollar una serie de investigaciones y desarrollos tendientes a presentar una vacuna para hacerle frente a esta enfermedad que aumenta día a día su morbi mortalidad en Colombia. Es así, como en diciembre de 2020, la comunidad científica presenta los resultados de varios desarrollos de vacunas, que ofrecen eficacia y seguridad, respaldados por estudios clínicos rigurosos.

    figure.mb-5
      img(src="@/assets/curso/banner-intro.jpg", alt="Texto que describa la imagen")
      figcaption Imagen 1. Vacunación

    p.mb-0 La llegada de nuevas vacunas al país supone un reto para el talento humano en salud responsable de la vacunación y desarrollar habilidades para ofrecer una orientación oportuna y segura a las personas objeto de la vacuna.
      br
      br
      | En ese orden de ideas, este componente formativo guía al aprendiz hacia la identificación de los aspectos normativos, técnicos y operativos de la vacunación contra COVID19 en Colombia y de las generalidades de la infección por SARS-2 COVID 19.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
