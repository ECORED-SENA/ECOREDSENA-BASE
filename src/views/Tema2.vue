<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .h3 Producción Audiovisual
    
    #t_2_1.titulo-segundo
      .h4 2.1 Infografía Animada
    
    p.mb-4 Propuesta infográfica en animación que refuerce un tema y matice conceptos dados de manera creativa y con intención pedagógica.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2cnKTwQ85fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_2.titulo-segundo
      .h4 2.2 Video Motion

    p.mb-4 Animación digital que crea la ilusión de movimiento mediante imágenes, fotografías, títulos, colores y diseños.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/E7-BaX6ox9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_3.titulo-segundo
      .h4 2.3 Motion + Presentador

    p.mb-4 Es el uso locutor + acompañamiento de imágenes como fondo, el estilo tiene una mezcla entre imagen viva y recursos gráficos vectoriales  se usa cuando un material tiene información de datos numéricos o gráficos de valores. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ky73iaXuuTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_4.titulo-segundo
      .h4 2.4 Animación 2D

    p.mb-4 Es el uso locutor + acompañamiento de imágenes como fondo, el estilo tiene una mezcla entre imagen viva y recursos gráficos vectoriales  se usa cuando un material tiene información de datos numéricos o gráficos de valores. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3b8VctSm558" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_5.titulo-segundo
      .h4 2.5 Video interactivo

    p.mb-4 Visualización de videos con diferentes tipos de preguntas o anotaciones.

    figure.mb-5
      .video
        iframe(src="https://vizia.co/videos/94d994c5fe93f1b08a60eb/embed" allowtransparency="true" frameborder="0" scrolling="no" width="640" height="390")

    #t_2_6.titulo-segundo
      .h4 2.6 Infografías

    p.mb-4 Es una herramienta de comunicación de alta precisión, el cual tiene una narrativa gráfica con un texto corto acompañada de elementos visuales que tienen como intención de captar rápidamente la atención del lector. 

    figure.mb-5
      img(src='@/assets/curso/infografia-1.jpg', alt='Infografía Fundamentos del Servicio de Interpretación')
      figcaption Fundamentos del Servicio de Interpretación

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Fundamentos del Servicio de Interpretación
              p Formato PDF
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/fundamentos_del_servicio_de_Interpretacion.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    figure.mb-5
      img(src='@/assets/curso/infografia-2.jpg', alt='Infografía Plan de Negocios')
      figcaption Plan de Negocios

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Plan de Negocios
              p Formato PDF
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/plan_de_negocios.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    figure.mb-5
      img(src='@/assets/curso/infografia-3.jpg', alt='Infografía Cobertura poblacional')
      figcaption Cobertura poblacional

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Cobertura poblacional
              p Formato PDF
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/cobertura_poblacional.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    figure.mb-5
      img(src='@/assets/curso/infografia-4.jpg', alt='Infografía Historia de las microfinanzas: Mohammad Yunus')
      figcaption Historia de las microfinanzas: Mohammad Yunus

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Historia de las microfinanzas: Mohammad Yunus
              p Formato PDF
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/historia_de_las_microfinanzas_mohammad_yunus.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    figure.mb-5
      img(src='@/assets/curso/infografia-5.jpg', alt='Infografía Psicología de la moda: sexualidad, ropa mágica, ropa malévola y ropa neurótica')
      figcaption Psicología de la moda: sexualidad, ropa mágica, ropa malévola y ropa neurótica

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Psicología de la moda: sexualidad, ropa mágica, ropa malévola y ropa neurótica
              p Formato PDF
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/psicologia_de_la_moda.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
