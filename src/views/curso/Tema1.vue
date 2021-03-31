<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(titulo="Tema 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia risus")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #t_1_1.h1 Elementos basicos
    
    #t_1_2.h2 Encabezados
    .row.mb-4.mb-5
      .col
        h1 H1: Header 1
        h2 H2: Header 2
        h3 H3: Header 3
        h4 H4: Header 4
        h5 H5: Header 5
        h6 H6: Header 6
      .col
        .h1 .H1: Clase Header 1
        .h2 .H2: Clase Header 2
        .h3 .H3: Clase Header 3
        .h4 .H4: Clase Header 4
        .h5 .H5: Clase Header 5
        .h6 .H6: Clase Header 6

    #t_1_3.h2 Textos
    .row.mb-5
      .col
        h4.mb-0 Parrafo
        p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
          strong user style sheets
          |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        h4.mb-0 Texto pequeño
        p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

      .col
        h4.mb-0 Texto thin
        p.text-thin This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

        h4.mb-0 Texto bold
        p.text-bold This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

        h4.mb-0 Texto black
        p.text-black This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    hr
    #t_1_4.h2 Listas
    .row.mb-5
      .col
        h3 listas desordenadas
        ul
          li List Item 1
          li List Item 2
          li List Item 3
      .col
        h3 listas ordenadas
        ol
          li List Item 1
          li List Item 2
          li List Item 3
    hr
    #t_1_5.h2 Tablas
    table
      caption Leyenda de la tabla
      thead
        tr
          th Encabezado 1
          th Encabezado 2
          th Encabezado 3
          th Encabezado 4
          th Encabezado 5
      tfoot
        tr
          td pie de tabla 1
          td pie de tabla 2
          td pie de tabla 3
          td pie de tabla 4
          td pie de tabla 5
      tbody
        tr
          td Celda 1
          td Celda 2
          td Celda 3
          td Celda 4
          td Celda 5
        tr
          td Celda 1
          td Celda 2
          td Celda 3
          td Celda 4
          td Celda 5
        tr
          td Celda 1
          td Celda 2
          td Celda 3
          td Celda 4
          td Celda 5
        tr
          td Celda 1
          td Celda 2
          td Celda 3
          td Celda 4
          td Celda 5
    hr
    #t_1_6.h2 Imagen
    figure
      img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
      figcaption Leyenda de la imagen
    hr
    #t_1_7.h2 Video
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    hr

    h1#t_1_8 Componentes

    #t_1_9.h2 Carrusel

    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
      .carousel-inner
        .carousel-item.active
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .carousel-item
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .carousel-item
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next

    #t_1_10.h2 Acordion

    Acordion.mb-5(clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Titulo item 1")
        .col-md-6
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      div(titulo="Titulo item 2")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

    #t_1_11.h2 Bloques de texto destacado

    .bloque-texto-a.p-3.p-md-4.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h2.mb-0 Whatever can be captured in words can be conquered with understanding. 
        .col-lg-7.bloque-texto-a__texto.p-4
          p Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
            br
            br
            | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure. 
  
    .row
      .col-lg-6
        .bloque-texto-b.p-4.mb-5
          .bloque-texto-b__texto
            .h2.mb-0 Can we all just agree as the greater design community to stop talking about Comic Sans altogether?
      .col-lg-6
        .bloque-texto-c.p-4
          .h2.mb-2 Then you’ll prove to yourself that you can survive anything.
          .h6.mb-0 - The graphic designer

</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
