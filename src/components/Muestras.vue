<template lang="pug">
div.mb-5
  #encabezados.titulo-segundo
    h2 Encabezados

  .titulo-principal
    .titulo-principal__numero
      span 1
    h1 Título principal, 30pt

  p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

  .titulo-segundo
    h2 1.1  Título de segundo nivel, 24pt

  p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

  h3.titulo-tercero Título de tercer nivel, 20pt

  p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

  h4.titulo-cuarto Título de cuarto nivel, 18pt

  p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

  //- .titulo-quinto debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  .titulo-quinto.color-acento-contenido
    h4 Título de quinto nivel, 18pt

  p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

  //- .titulo-sexto debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  .titulo-sexto.color-acento-contenido
    h5 Título de sexto nivel, 16pt
    span subtitulo

  p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

  Separador

  #parrafos.titulo-segundo
    h2 Párrafos

  p.mb-5 Los párrafos mantienen un tamaño regular de 16 pt con interlineado base de 24 pt, sin embargo, existe excepciones para resaltar contenido donde se puede hacer uso de pesos 
    span.text-thin THIN, 
    span.text-bold BOLD, 
    | y 
    span.text-black BLACK 
    | o 
    span.etiqueta etiquetas
    | de color (según paleta del programa). Así mismo, el ancho de los cajones textos permite variación en las doce (12) columnas.

  Separador

  #botones.titulo-segundo
    h2 Botones

  .mb-5
    .mb-3
      //- .boton debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      a.boton.me-3.indicador__container(
        :href="obtenerLink('/downloads/prueba.pdf')"
        target="_blank"
        type="application/pdf"
        @mouseover="mostrarIndicador = false"
      )
        span Descargar
        i.fas.fa-file-download
        .indicador--click(v-if="mostrarIndicador")

    .mb-3
      a.boton.color-primario.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
        span Descargar
        i.fas.fa-file-download

      a.boton.color-secundario.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
        span Descargar
        i.fas.fa-file-download

      a.boton.color-acento-contenido.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
        span Descargar
        i.fas.fa-file-download

      a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
        span Descargar
        i.fas.fa-file-download
    .mb-5
      a.boton--sm.color-primario.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
        span Descargar
        i.fas.fa-file-download

      a.boton--sm.color-secundario.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
        span Descargar
        i.fas.fa-file-download

      a.boton--sm.color-acento-contenido.texto-blanco.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
        span Descargar
        i.fas.fa-file-download

      a.boton--sm.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
        span Descargar
        i.fas.fa-file-download

  Separador


  #listas.titulo-segundo
    h2 Listas

  p.mb-3 Se debe tener en cuenta que las personas realizan un escaneo del mismo para encontrar elementos de su interés. Las listas deben estar compuestas por elementos relacionados entre sí, con un orden específico o un conteo importante. 
  
  ul.lista-ul.mb-3
    li 
      i.lista-ul__vineta
      | Texto
    li 
      i.lista-ul__vineta
      | Cita o Referencia
    li 
      i.lista-ul__vineta
      | Imagen + Texto

  .h5 Requerimientos de información:

  ul.lista-ul.mb-5
    li 
      i.lista-ul__vineta
      | Título conciso y claro.
    li 
      i.lista-ul__vineta
      | Si el texto del item es largo, la extensión máxima será de cuatro líneas en word tamaño carta. 
    li 
      i.lista-ul__vineta
      | Enfatizar ciertos puntos diferenciándolos del resto del texto.
    li 
      i.lista-ul__vineta
      | Cuando desee comunicar un procedimiento paso por paso y cuando el orden de los elementos sea necesario.

  h3 Listado ordenado
  .row.mb-5
    .col-md.mb-5.mb-sm-0
      h4 Listado ordenado básico
      ol.lista-ol
        li 
          span.text-bold 1. 
          | Item lista ordenada 1
        li 
          span.text-bold 2. 
          | Item lista ordenada 2
        li 
          span.text-bold 3. 
          | Item lista ordenada 3
        li 
          span.text-bold 4. 
          | Item lista ordenada 4
        li 
          span.text-bold 5. 
          | Item lista ordenada 5
    .col-sm.mb-5.mb-sm-0
      h4 Listado ordenado básico
      ol.lista-ol
        li 
          span.text-bold a. 
          | Item lista ordenada a
        li 
          span.text-bold b. 
          | Item lista ordenada b
        li 
          span.text-bold c. 
          | Item lista ordenada c
        li 
          span.text-bold d. 
          | Item lista ordenada d
        li 
          span.text-bold e. 
          | Item lista ordenada e
    .col-sm
      h4 Listado ordenado básico + separadores
      ol.lista-ol.lista-ol--separador
        li 
          span.text-bold a. 
          | Item lista ordenada a
        li 
          span.text-bold b. 
          | Item lista ordenada b
        li 
          span.text-bold c. 
          | Item lista ordenada c
        li 
          span.text-bold d. 
          | Item lista ordenada d
        li 
          span.text-bold e. 
          | Item lista ordenada e

  .row.mb-5
    .col-sm.mb-5.mb-sm-0
      h4 Listado ordenado cuadro color
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span 1
          | Item lista ordenada 1
        li 
          .lista-ol--cuadro__vineta
            span 2
          | Item lista ordenada 2
        li 
          .lista-ol--cuadro__vineta
            span 3
          | Item lista ordenada 3
        li 
          .lista-ol--cuadro__vineta
            span 4
          | Item lista ordenada 4
        li 
          .lista-ol--cuadro__vineta
            span 5
          | Item lista ordenada 5
    .col-sm.mb-5.mb-sm-0
      h4 Listado ordenado cuadro color
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span a
          | Item lista ordenada a
        li 
          .lista-ol--cuadro__vineta
            span b
          | Item lista ordenada b
        li 
          .lista-ol--cuadro__vineta
            span c
          | Item lista ordenada c
        li 
          .lista-ol--cuadro__vineta
            span d
          | Item lista ordenada d
        li 
          .lista-ol--cuadro__vineta
            span e
          | Item lista ordenada e
    .col-sm.mb-5.mb-sm-0
      h4 Listado ordenado cuadro color + separadores
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span a
          | Item lista ordenada a
        li 
          .lista-ol--cuadro__vineta
            span b
          | Item lista ordenada b
        li 
          .lista-ol--cuadro__vineta
            span c
          | Item lista ordenada c
        li 
          .lista-ol--cuadro__vineta
            span d
          | Item lista ordenada d
        li 
          .lista-ol--cuadro__vineta
            span e
          | Item lista ordenada e

  h3 Listado no ordenado

  .row.mb-5
    .col-sm.mb-5.mb-sm-0
      h4 Listado no ordenado básico
      ul.lista-ul
        li 
          i.lista-ul__vineta
          | Item lista no ordenada
        li
          ul
            li 
              i.lista-ul__vineta
              | Item lista no ordenada
            li 
              i.lista-ul__vineta
              | Item lista no ordenada
        li 
          i.lista-ul__vineta
          | Item lista no ordenada
        li 
          i.lista-ul__vineta
          | Item lista no ordenada

    .col-sm.mb-5.mb-sm-0
      h4 Listado no ordenado básico
      ul.lista-ul
        li 
          i.fas.fa-angle-right
          | Item lista no ordenada
        li
          ul
            li 
              i.fas.fa-angle-right
              | Item lista no ordenada
            li 
              i.fas.fa-angle-right
              | Item lista no ordenada
        li 
          i.fas.fa-angle-right
          | Item lista no ordenada
        li 
          i.fas.fa-angle-right
          | Item lista no ordenada

    .col-sm
      h4 Listado no ordenado básico + separadores
      ul.lista-ul--separador
        li 
          i.fas.fa-angle-right
          | Item lista no ordenada
        li.pb-0
          ul
            li 
              i.fas.fa-angle-right
              | Item lista no ordenada
            li 
              i.fas.fa-angle-right
              | Item lista no ordenada
        li 
          i.fas.fa-angle-right
          | Item lista no ordenada
        li 
          i.fas.fa-angle-right
          | Item lista no ordenada


  .row.mb-5
    .col-sm.mb-5.mb-sm-0
      h4 Listado no ordenado color
      ul.lista-ul--color
        li 
          i.lista-ul__vineta
          | Item lista no ordenada
        li
          ul
            li 
              i.lista-ul__vineta
              | Item lista no ordenada
            li 
              i.lista-ul__vineta
              | Item lista no ordenada
        li 
          i.lista-ul__vineta
          | Item lista no ordenada
        li 
          i.lista-ul__vineta
          | Item lista no ordenada

    .col-sm.mb-5.mb-sm-0
      h4 Listado no ordenado color
      ul.lista-ul--color
        li 
          i.fas.fa-brain
          | Item lista no ordenada
        li
          ul
            li 
              i.fas.fa-bug
              | Item lista no ordenada
            li 
              i.fas.fa-car-side
              | Item lista no ordenada
        li 
          i.fas.fa-compass
          | Item lista no ordenada
        li 
          i.fas.fa-eye
          | Item lista no ordenada

    .col-sm
      h4 Listado no ordenado color + separadores
      ul.lista-ul--color.lista-ul--separador
        li 
          i.fas.fa-feather
          | Item lista no ordenada
        li.pb-0
          ul
            li 
              i.fas.fa-cookie
              | Item lista no ordenada
            li 
              i.fas.fa-hat-wizard
              | Item lista no ordenada
        li 
          i.fas.fa-hippo
          | Item lista no ordenada
        li 
          i.fas.fa-kiwi-bird
          | Item lista no ordenada

  Separador

  #tablas.titulo-segundo
    h2 Tablas

  .h5 Requerimientos de información

  ul.lista-ul.mb-5
    li 
      i.lista-ul__vineta
      | Se requiere que la información contenida dentro de las tablas propuestas en los materiales, se encuentre digitalizada únicamente en formato excel. 

  h3.titulo-tercero Tabla A
  //- .tabla-a debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  .tabla-a.color-acento-botones.mb-5 
    table
      caption Leyenda de la tabla
      thead
        tr
          th Encabezado 1
          th Encabezado 2
          th Encabezado 3
          th Encabezado 4
          th Encabezado 5
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

  h3.titulo-tercero Tabla B
  //- .tabla-a debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  .tabla-b.color-acento-contenido.mb-5
    .tabla-b__header
      h5.mb-0 Niveles del lenguaje
    table
      caption Leyenda de la tabla
      tr
        th Vulgar
        td Get back to work. Learn from criticism. Creativity is a work-ethic. Design as if your life depended on it. Keep going. It isn’t what you are.
      tr
        th Coloquial
        td It isn’t what you are, but what you’re going to become. Don’t censor yourself.  Sterility leads to susceptibility.It is, in effect, conditioned to prefer bad design.
      tr
        th Convencional o estándar
        td Paul Rand once said, “The public is more familiar with bad design than good design. leassuring. You are not your work. Don’t fucking lie to yourself. Life depended on it. Keep going
      tr
        th Técnico
        td The new becomes threatening, the old reassuring.” You are not your work. Don’t lie to yourself. Never, never assume that what Respect your craft. Widows and orphans are terrible.
      tr
        th Formal
        td Design as if your life depended on it. Keep going. It isn’t what you are, but what you’re going to become. Don’t censor yourself. 

  h3.titulo-tercero Tabla C
  .tabla-c.mb-5
    table
      caption Leyenda de la tabla
      tr
        th 03 de marzo
        td 
          p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
        td
          .h6.mb-0 $12.500.200
        td
          .h6.mb-0 $12.500.200
          span.text-small Textos pequeños
        td
          .h6 FDSD33
      tr
        th 03 de marzo
        td 
          p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
        td
          .h6.mb-0 $12.500.200
        td
          .h6.mb-0 $12.500.200
          span.text-small Textos pequeños
        td
          .h6 FDSD33
      tr
        th 03 de marzo
        td 
          p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
        td
          .h6.mb-0 $12.500.200
        td
          .h6.mb-0 $12.500.200
          span.text-small Textos pequeños
        td
          .h6 FDSD33
      tr
        th 03 de marzo
        td 
          p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
        td
          .h6.mb-0 $12.500.200
        td
          .h6.mb-0 $12.500.200
          span.text-small Textos pequeños
        td
          .h6 FDSD33
      tr
        th 03 de marzo
        td 
          p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
        td
          .h6.mb-0 $12.500.200
        td
          .h6.mb-0 $12.500.200
          span.text-small Textos pequeños
        td
          .h6 FDSD33

  Separador

  #imagen.titulo-segundo
    h2 Imagen

  figure.mb-5
    img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
    figcaption Leyenda de la imagen

  .row.justify-content-between
    .col-md-6.col-lg-4
      //- .imagen-titulo--der debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      .imagen-titulo--der.color-secundario
        figure.mb-5
          img(src='@/assets/template/img-placeholder-1-1.svg', alt='Texto que describa la imagen')

        .imagen-titulo__titulo
          h4.m-0 Titulo de imagen
    
    .col-md-6.col-lg-4
      //- .imagen-titulo--izq debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      .imagen-titulo--izq.color-acento-botones
        figure.mb-5
          img(src='@/assets/template/img-placeholder-1-1.svg', alt='Texto que describa la imagen')

        .imagen-titulo__titulo
          h4.m-0 Titulo de imagen
  Separador

  #imagen_infografica.titulo-segundo
    h2 Imagen Infográfica

  ImagenInfografica.color-secundario.mb-5

    template(v-slot:imagen)
      figure
        img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
        figcaption Leyenda de la imagen

    .tarjeta.color-acento-botones.p-3(x="20%" y="20%")
      .h5.mb-2 titulo
      p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

    .tarjeta.color-acento-botones.p-3(x="50%" y="50%")
      .h5.mb-2 titulo
      p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

    .tarjeta.color-acento-botones.p-3(x="70%" y="70%")
      .h5.mb-2 titulo
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

  Separador

  #video.titulo-segundo
    h2 Video

  figure.mb-5
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video: Leyenda del video

  Separador

  #texto_destacado.titulo-segundo
    h2 Bloques de texto destacado

  p.mb-3 Su función principal es destacar bloques de información importantes a través de recursos gráficos (imágenes y/o texto). 

  ul.lista-ul.mb-3
    li 
      i.lista-ul__vineta
      | Texto
    li 
      i.lista-ul__vineta
      | Cita o Referencia
    li 
      i.lista-ul__vineta
      | Imagen + Texto

  .h5 Requerimientos de información: 
  ul.lista-ul.mb-5
    li 
      i.lista-ul__vineta
      | Información precisa, que reporten notoriedad, tips, conceptos o definiciones.
    li 
      i.lista-ul__vineta
      | Se sugiere una cantidad de texto igual o menor a 4 líneas de word tamaño carta.

  .row.mb-5
    .col-md-6
      h2 La cantidad de texto “Destacado” sea menor a tres líneas en breakpoint xl de bootstrap y tendrá un tamaño máximo de h4
    .col-md-6
      p La cantidad de texto “Destacado” sea menor a tres líneas tendrá un tamaño máximo de 24 e interlineado 30 puntos utilizando Roboto Bold, ya si el texto supera las 3 líneas se utilizará un tamaño de 20 puntos y un interlineado 27 puntos con una fuente de Roboto Regular.


  h3.titulo-tercero Cajón texto color
  //- .cajon debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  .row.mb-5 
    .col-lg-4
      .cajon.color-primario.p-4.mb-4
        .h5 Cajón texto color
        p Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
    .col-lg-8
      .cajon.color-secundario.p-4.mb-4
        .h5 Cajón texto color
        p Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
    .col-lg-8
      .cajon.color-acento-contenido.p-4.mb-4
        .h5 Cajón texto color
        p Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
    .col-lg-4
      .cajon.color-acento-botones.p-4.mb-4
        .h5 Cajón texto color
        p Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
    

  h3.titulo-tercero Cajón texto color A
  //- .bloque-texto-a debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
    .row.m-0.align-items-center.justify-content-between
      .col-lg-4.mb-4.mb-lg-0
        h2.mb-0 Whatever can be captured in words can be conquered with understanding. 
      .col-lg-8
        .bloque-texto-a__texto.p-4
          p Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
            br
            br
            | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure. 

  .row.mb-5
    .col-lg-6.mb-5.mb-lg-0
      h3.titulo-tercero Cajón texto color B
      //- .bloque-texto-b debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      .bloque-texto-b.color-secundario.p-4
        .bloque-texto-b__texto
          i.fas.fa-quote-left
          h2.mb-0 Can we all just agree as the greater design community to stop talking about Comic Sans altogether?
          i.fas.fa-quote-right

    .col-lg-6
      h3.titulo-tercero Cajón texto color C
      //- .bloque-texto-c debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      .bloque-texto-c.color-secundario.p-4
        i.fas.fa-quote-right
        h2.mb-2 Then you’ll prove to yourself that you can survive anything.
        span - The graphic designer

  .row.mb-5
    .col-lg-6.mb-5.mb-lg-0
      h3.titulo-tercero Cajón texto color D
      //- .bloque-texto-d debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      .bloque-texto-d.color-secundario.p-4
        .bloque-texto-d__texto.mb-2
          i.fas.fa-quote-left
          h3.text-regular Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada, ligula sapien convallis risus, a iaculis velit ante at turpis. Vivamus bibendum tellus sed tincidunt rhoncus. Nam velit massa, porttitor eget quam et, porttitor viverra eros. Donec eget pharetra metus. Cras porta arcu eu mauris iaculis euismod. Sed fringilla vel nisl quis aliquam.
          i.fas.fa-quote-right
        .bloque-texto-d__autor 
          .h5.mb-0 The graphic designer
          .h6.mb-0 Lorem ipsum dolor sit amet

    .col-lg-6
      h3.titulo-tercero Cajón texto color E
      //- .bloque-texto-e debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      .bloque-texto-e.color-secundario.p-4
        .bloque-texto-e__text
          i.fas.fa-quote-left
          h2.text-regular Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada.
          i.fas.fa-quote-right
        .row.align-items-end
          .col
            .bloque-texto-e__autor 
              .h5.mb-0 The graphic designer
              .h6.mb-0 Lorem ipsum dolor sit amet
          .col-4
            img(src='@/assets/template/img-placeholder-1-1.svg', alt='Texto que describa la imagen')

  h3.titulo-tercero Cajón texto color F
  //- .bloque-texto-f debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
    .bloque-texto-f__comillas
      i.fas.fa-quote-left
      i.fas.fa-quote-right
    h4.text-regular.bloque-texto-f__texto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada, ligula sapien convallis risus, a iaculis velit ante at turpis. Vivamus bibendum tellus sed tincidunt rhoncus. Nam velit massa, porttitor eget quam et, porttitor viverra eros. Donec eget pharetra metus. Cras porta arcu eu mauris iaculis euismod. Sed fringilla vel nisl quis aliquam.
    .bloque-texto-f__autor.mb-3
      h3.mb-0 The graphic designer
    .bloque-texto-f__avatar
      .bloque-texto-f__avatar__img
        img(src='@/assets/template/img-placeholder-1-1.svg', alt='Texto que describa la imagen')

  h3.titulo-tercero Cajón texto color G
  .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
    .bloque-texto-g__img(
      :style="{'background-image': `url(${require('@/assets/curso/img.jpg')})`}"
    )
    .bloque-texto-g__texto.p-4
      p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
        br
        br
        | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure. 

  Separador

  #sliders.titulo-segundo
    h2 Sliders

  p.mb-3 Es una sección dinámica que permite mostrar varios contenidos repartidos en diapositivas, su función principal es mostrar el contenido más importante de manera concisa y con la menor cantidad de texto posible, haciendo uso extensivo de imágenes o íconos de acompañamiento.

  .h5 Requerimientos de información:

  ul.lista-ul.mb-5
    li 
      i.lista-ul__vineta
      | Máximo 7 diapositivas.
    li 
      i.lista-ul__vineta
      | Por cada diapositiva una idea central con máximo dos ideas secundarias, que pueden apoyarse en recursos gráficos.
    li 
      i.lista-ul__vineta
      | Textos puntuales y claros.

  h3.titulo-tercero Slider A
  .tarjeta.tarjeta--azul.p-4.mb-5
    SlyderA
      .row
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      div
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      .row
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      div
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

  h3 Slider B
  SlyderB.mb-5(:datos="datosSlyder")

  h3 Slider C
  SlyderC.mb-5(:datos="datosSlyder")

  h3 Slider D
  SlyderD.mb-5(:datos="datosSlyder")

  h3 Slider Bootstrap
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

  Separador

  #acordiones.titulo-segundo
    h2 Acordiones

  p.mb-3 Es un componente web que permite ahorrar espacio vertical a través del uso de botones  representados por títulos que permiten desplegar u ocultar información pertinente. 

  .h5 Requerimientos de información:

  ul.lista-ul.mb-5
    li 
      i.lista-ul__vineta
      | Los títulos de cada tema deben ser claros, concisos de una línea de word tamaño carta.
    li 
      i.lista-ul__vineta
      | La cantidad máxima es de 7 items.
    li 
      i.lista-ul__vineta
      | Se sugiere que la cantidad de texto sea igual o menor a 9 líneas de word tamaño carta. 
    li 
      i.lista-ul__vineta
      | Se sugiere el uso de texto acompañado de imágenes que refuercen el contenido a representar. 
    li 
      i.lista-ul__vineta
      | Se recomienda utilizar este componente para evidenciar procesos o temas generales compuesto de varias etapas.
    li 
      i.lista-ul__vineta
      | No se debe utilizar para representar grandes cantidades de texto o contenido.
    li 
      i.lista-ul__vineta
      | No se debe utilizar dentro del acordeón vídeos.

  h3 Acordion A tipo A
  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
    .row(titulo="Titulo item 1")
      .col-md-6.mb-4.mb-md-0
        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
      .col-md-6
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

    div(titulo="Titulo item 2")
      figure
        img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
        figcaption Leyenda de la imagen

  h3 Acordion A tipo B
  AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
    .row(titulo="Titulo item 1")
      .col-md-6.mb-4.mb-md-0
        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
      .col-md-6
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

    div(titulo="Titulo item 2")
      figure
        img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
        figcaption Leyenda de la imagen

  Separador

  #tabs.titulo-segundo
    h2 Pestañas o Tabs

  p.mb-3 Es un elemento web que permite cambiar rápidamente el contenido que el usuario está consumiendo sin cambiar de ventana o desplazarse verticalmente por el sitio web. 

  .h5 Requerimientos de información

  ul.lista-ul.mb-5
    li 
      i.lista-ul__vineta
      | Los títulos que actuará como botón que sea una palabra o frases muy cortas.
    li 
      i.lista-ul__vineta
      | La cantidad máxima es de 5 items.
    li 
      i.lista-ul__vineta
      | Se sugiere que la cantidad de texto sea igual o menor a 12 líneas de word tamaño carta. 
    li 
      i.lista-ul__vineta
      | Se sugiere el uso de texto acompañado de imágenes que refuercen el contenido a representar. 
    li 
      i.lista-ul__vineta
      | Se recomienda utilizar este componente para evidenciar procesos o temas generales compuesto de varias etapas.
    li 
      i.lista-ul__vineta
      | No se debe utilizar para representar grandes cantidades de texto o contenido.
    li 
      i.lista-ul__vineta
      | No se debe utilizar dentro de la pestaña o tab vídeos.

  h3 Pestañas A
  //- TabsA debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  TabsA.color-acento-botones.mb-5
    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 1: The splendor asd asd asd as dasd")
      h4 PASO 1: The splendor
      p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
        strong user style sheets
        |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
      p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 2: The splendor")
      h4 PASO 2: The splendor

      .row
        .col-xl-6.mb-4
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .col-xl-6
          p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
            strong user style sheets
            |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 3: The splendor")
      h4 PASO 3: The splendor
      p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
        strong user style sheets
        |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
      p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 4: The splendor")
      h4 PASO 4: The splendor
      p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
        strong user style sheets
        |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
      p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 5: The splendor")
      h4 PASO 5: The splendor
      p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
        strong user style sheets
        |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
      p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 6: The splendor")
      h4 PASO 6: The splendor
      p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
        strong user style sheets
        |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
      p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
  h3 Pestañas B
  //- TabsB debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  TabsB.color-acento-contenido.mb-5
    .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Celebrate your failures 1
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
    .py-4.py-md-5(titulo="Don’t lie to yourself" :icono="require('@/assets/componentes/ej-04.svg')")
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .col-md-6
          h4 Celebrate your failures 2
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
    .py-4.py-md-5(titulo="Don’t quit" :icono="require('@/assets/componentes/ej-04.svg')")
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Celebrate your failures 3
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

    .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .col-md-6
          h4 Celebrate your failures 4
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
    
    .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Celebrate your failures 5
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
    
    .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .col-md-6
          h4 Celebrate your failures 6
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

  h3 Pestañas C
  //- TabsC debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  TabsC.color-primario.mb-5
    .py-3.py-md-4(titulo="The splendor of the mystery")
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Celebrate your failures 1
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
    .py-3.py-md-4(titulo="Don’t lie to yourself")
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .col-md-6
          h4 Celebrate your failures 2
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
    .py-3.py-md-4(titulo="Don’t quit")
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Celebrate your failures 3
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

    .py-3.py-md-4(titulo="The splendor of the mystery")
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .col-md-6
          h4 Celebrate your failures 4
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
    
    .py-3.py-md-4(titulo="The splendor of the mystery")
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Celebrate your failures 5
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
    
    .py-3.py-md-4(titulo="The splendor of the mystery")
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen
        .col-md-6
          h4 Celebrate your failures 6
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

  Separador

  #lineas_tiempo.titulo-segundo
    h2 Líneas de tiempo

  p.mb-3 Es una representación gráfica para sintetizar información, que permite ordenar y explicar acontecimientos que han ocurrido a lo largo de un periodo.

  .h5 Requerimientos de información:

  ul.lista-ul.mb-5
    li 
      i.lista-ul__vineta
      | Título llamativo
    li 
      i.lista-ul__vineta
      | Descripción del evento con una cantidad de texto igual o menor a 9 líneas de word tamaño carta. 
    li 
      i.lista-ul__vineta
      | Se sugiere el uso de imágenes que refuercen el contenido a representar. 
    li 
      i.lista-ul__vineta
      | Si el elemento de la línea de tiempo requiere de algún anexo o algún documentos descargable, es necesario que se especifique claramente el título de dicho material. 
    li 
      i.lista-ul__vineta
      | En anexos al componente incluir el material que será descargado. 
    li 
      i.lista-ul__vineta
      | El peso de los anexos o archivos descargables no debe ser superior a 12MB.

  h3 Linea Tiempo A
  //- LineaTiempoA debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  LineaTiempoA.color-acento-contenido.mb-5(:datos="datosLineaTiempoA")

  h3 Linea Tiempo B
  //- LineaTiempoB debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")

  h3 Linea Tiempo C
  .tarjeta.tarjeta--gris.p-4.mb-5
    //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    LineaTiempoC.color-acento-contenido
      .row(titulo="1761")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen


      .row(titulo="1798")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen


      .row(titulo="1887")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      div(titulo="1889")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      .row(titulo="1899")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      div(titulo="1901")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      div(titulo="1930")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      div(titulo="1987")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

  h3 Linea Tiempo D
  .row.mb-5
    .col-md-6.mb-5.mb-md-0
      //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      LineaTiempoD.color-secundario
        p.text-small(numero="1" titulo="Praesent luctus") Lorem ipsum dolor sit amet, consectetur adipiscvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
        
        p.text-small(numero="2" titulo="Praesent luctus") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
        
        p.text-small(numero="3" titulo="Praesent luctus") Donec feugiat volutpat metus at pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
        
        p.text-small(numero="4" titulo="Praesent luctus") quam cursus in. Donec feugiat volutpat metus at pulvinar.

    .col-md-6
      //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      LineaTiempoD.color-primario
        .row(numero="1" titulo="Praesent luctus")
          .col-md-6.mb-4.mb-md-0
            p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        .row(numero="2" titulo="Praesent luctus")
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6.mb-4.mb-md-0
            p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        

        .row(numero="3" titulo="Praesent luctus")
          .col-md-6.mb-4.mb-md-0
            p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

  //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  LineaTiempoD.color-acento-contenido.mb-5
    .row(numero="1" titulo="Praesent luctus")
      .col-md-6.mb-4.mb-md-0
        p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
      .col-md-6
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

    .row(numero="2" titulo="Praesent luctus")
      .col-md-6
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen
      .col-md-6.mb-4.mb-md-0
        p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    

    .row(numero="3" titulo="Praesent luctus")
      .col-md-6.mb-4.mb-md-0
        p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
      .col-md-6
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

  Separador

  #pasos.titulo-segundo
    h2 Pasos

  h3 Pasos A tipo n
  //- PasosA debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  PasosA.color-primario.mb-5(tipo="n")
    .row
      .col-md-6.mb-4.mb-md-0
        h3 Lorem ipsum dolor sit amet.
        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .col-md-6
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

    .row
      .col-md-6.mb-4.mb-md-0
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la Imagen
      .col-md-6
        h3 Nullam vulputate mauris eros, ut.
        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        

    .row
      .col-md-6.mb-4.mb-md-0
        h3 Duis laoreet est non ligula.
        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
      .col-md-6
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

    .row
      .col-md-6.mb-4.mb-md-0
        h3 Duis laoreet est non ligula.
        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
      .col-md-6
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

  h3 Pasos A tipo l
  //- PasosA debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  PasosA.color-acento-botones.mb-5(tipo="l")
    div
      h3 Lorem ipsum dolor sit amet.
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id risus eu tortor vulputate luctus. Fusce ligula tortor, euismod vel scelerisque nec, dapibus sit amet enim. Mauris aliquet tempor neque non faucibus. Etiam ex urna, viverra ut velit maximus, malesuada tincidunt lectus. Aliquam tincidunt ipsum turpis, at lacinia purus ultricies eget. Curabitur at fringilla elit. Mauris id rhoncus sapien. Integer mollis ante enim, at congue enim suscipit et. Aliquam erat volutpat. Maecenas dolor ex, laoreet sed egestas pellentesque, molestie vitae mauris. Quisque cursus eros eget odio consequat egestas.

    div
      h3 Nullam vulputate mauris eros, ut.
      p Duis non elit arcu. In luctus placerat dapibus. Praesent auctor nunc vitae iaculis iaculis. Aenean efficitur lectus in elit ullamcorper porttitor. Phasellus sit amet scelerisque magna, eget rhoncus urna. Integer mollis faucibus hendrerit. Nullam blandit vel tortor vel elementum.

    div
      h3 Duis laoreet est non ligula.
      p Nulla lobortis orci quis posuere fringilla. Mauris sit amet ligula et tortor euismod mollis laoreet sit amet nisl. Sed ac suscipit sapien. Aliquam commodo magna quis nisl porttitor pulvinar. Donec efficitur sapien pulvinar, dictum tortor ac, pellentesque felis. Sed in nunc quis enim mattis sodales. Suspendisse sodales sem mauris, nec vehicula felis rhoncus in.

    div
      h3 Lorem ipsum dolor sit amet.
      p Aliquam ornare sem in mauris lobortis accumsan. Suspendisse sollicitudin tellus eget bibendum cursus. Praesent tincidunt cursus mattis. Fusce nec convallis mauris, eu tincidunt neque. Proin justo orci, fermentum vel est vel, ornare sodales dui. Etiam consequat commodo tincidunt. Maecenas imperdiet ante eu mauris imperdiet, Phasellus pretium tortor quis varius sagittis. Suspendisse eu posuere enim, sed lacinia justo. Praesent eget tempor erat, a pretium ante. Nulla facilisi.

  h3 Pasos B
  .tarjeta.tarjeta--gris.p-4.mb-5
    //- PasosB debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    PasosB.color-acento-contenido

      .row(titulo="Palabra")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen


      .row(titulo="I think it needs to be")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen


      .row(titulo="I have selected those elements")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      div(titulo="Etiam eu mauris sit amet")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      .row(titulo="Praesent luctus")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      div(titulo="arcu porta, vel finibus eros posuere")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      div(titulo="Praesent")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      div(titulo="Sed vehicula velit vel arcu porta,")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

  Separador

  #llamados_accion.titulo-segundo
    h2 Llamados a la acción

  p.mb-2 Es un bloque de texto que destaca por su composición y diseño. Su principal función es incentivar al usuario a realizar una acción a través de un botón o hipervínculo, en este caso, con el fin de poder acceder a recursos como infografías, videos, documentos y sitios web externos e independientes del componente formativo.

  ul.lista-ul.mb-3
    li 
      i.lista-ul__vineta
      | Abrir PDF
    li 
      i.lista-ul__vineta
      | Infografías
    li 
      i.lista-ul__vineta
      | Documentos
    li 
      i.lista-ul__vineta
      | Videos externos 
    li 
      i.lista-ul__vineta
      | Enlaces

  .h5 Requerimientos de información:

  ul.lista-ul.mb-5
    li 
      i.lista-ul__vineta
      | Título llamativo, claro y conciso. 
    li 
      i.lista-ul__vineta
      | La redacción de los textos deben crear la necesidad de consultar el contenido sugerido (anexos).
    li 
      i.lista-ul__vineta
      | Se sugiere un párrafo de acompañamiento que no sobrepase las 3 líneas de texto en su extensión, cuya característica principal sea incentivar al aprendiz a consultar el recurso propuesto.

  .h5 Ejemplo: Llamado a la acción 1 Acción de infografías

  //- .tarjeta debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  //- estas clases tambien tienen un modificador --borde
  .tarjeta.color-acento-botones.p-4.p-md-5.mb-5
    .row.justify-content-around.align-items-center
      .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
        img(src="@/assets/componentes/ej-01.png")

      .col-md.col-lg-6
        h3 Título del recurso
        p.mb-4 There is no right answer. The splendor of the mystery is that you don’t understand. Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original. Why are you reading all of this?
        
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download

  .h5 Ejemplo: Llamado a la acción 2 Recursos externos
  //- .tarjeta debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  //- estas clases tambien tienen un modificador --borde
  .tarjeta.color-primario.p-3.mb-5
    .row.justify-content-around.align-items-center
      .col-3.col-sm-2.col-lg-1
        img(src="@/assets/componentes/ej-02.svg")
      .col
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            h3.mb-1 Título del recurso
            p.text-small Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias  
          .col-sm-auto
            a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
              span Descargar
              i.fas.fa-file-download

  //- .tarjeta debe ir acompañado de una de una de estas clases => 
  //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
  //- estas clases tambien tienen un modificador --borde
  .tarjeta.color-acento-botones.p-3.mb-5
    .row.justify-content-around.align-items-center
      .col-3.col-sm-2.col-lg-1
        img(src="@/assets/componentes/ej-02.svg")
      .col
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            h3.mb-1 Título del recurso
            p.text-small Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias 
          .col-sm-auto
            a.boton.color-acento-contenido(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
              span Descargar
              i.fas.fa-file-download

  .h5 Ejemplo: Llamado a la acción 3 Recursos externos versión simplificada
  .row.mb-5
    .col-lg-6
      a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        
      a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-doc.svg")
        .anexo__texto
          p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        
      a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-xls.svg")
        .anexo__texto
          p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        
      a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        
    .col-lg-6
      a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-zip.svg")
        .anexo__texto
          p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        
      a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-ppt.svg")
        .anexo__texto
          p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        
      a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-xml.svg")
        .anexo__texto
          p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias

  Separador

  #tarjetas.titulo-segundo
    h2 Tarjetas
  
  p.mb-3 Es la agrupación de contenidos (texto e imágenes) en forma de tarjeta, que tiene como propósito, uno, ser más amigable el consumo de la información y dos, destacar información o conceptos relevantes.

  .h5 Requerimientos de información:

  ul.lista-ul.mb-5
    li 
      i.lista-ul__vineta
      | Título corto y claro.
    li 
      i.lista-ul__vineta
      | Información precisa, que reporten conceptos o definiciones.
    li 
      i.lista-ul__vineta
      | Se sugiere una cantidad de texto igual o menor a 4 líneas de word tamaño carta.


  h3 Tarjetas botones
  .row.mb-5
    .col-sm-6.col-lg-3.mb-4.mb-lg-0
      //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta--boton.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')

        h3.text-center Intuition important
        p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

    .col-sm-6.col-lg-3.mb-4.mb-lg-0
      //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta--boton.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')

        h3.text-center Intuition important
        p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

    .col-sm-6.col-lg-3.mb-4.mb-sm-0
      //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')

        h3.text-center Intuition important
        p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

    .col-sm-6.col-lg-3
      //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta--boton.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')

        h3.text-center Intuition important
        p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.


  h3 Tarjetas conectadas
  .tarjeta--container.row.mb-5
    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .col-md.tarjeta.color-primario.p-5
      .row.justify-content-center.mb-4
        .col-6
          figure
            img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
        
      h2.text-center Celebrate your<br>failures
      p To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. Think about all the possibilities. You’ve been placed in the crucial moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .col-md.tarjeta.color-acento-botones.p-5
      .row.justify-content-center.mb-4
        .col-6
          figure
            img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
        
      h2.text-center Sterility leads to<br>susceptibility
      p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.

    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .col-md.tarjeta.color-acento-contenido.text-white.p-5
      .row.justify-content-center.mb-4
        .col-6
          figure
            img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
        
      h2.text-center Sterility leads to<br>susceptibility
      p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.

  h3 Tarjetas avatar A
  .row
    .col-lg-6
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            h2 John Doe
            p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    .col-lg-6
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-acento-botones
          .p-4
            h2 John Doe
            p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    .col-lg-6
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-acento-contenido
          .p-4
            h2 Greatness isn’t the height
            p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    .col-lg-6
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-primario.text-white
          .p-4
            h2 Greatness isn’t the height
            p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

  h3 Tarjetas avatar B
  .row.mb-5
    .col-md-6.col-lg.mb-5.mb-lg-0
      .tarjeta-avatar
        img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-primario
          .text-white.p-4
            h2.text-center John Doe
            p moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    .col-md-6.col-lg.mb-5.mb-lg-0
      .tarjeta-avatar
        img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-acento-botones
          .p-4
            h2.text-center John Doe
            p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    .col-md-6.col-lg.mb-5.mb-lg-0
      .tarjeta-avatar
        img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-acento-contenido
          .p-4
            h2.text-center Greatness isn’t the height
            p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

  h3 Tarjetas Tabla
  .row.mb-5
    .col-md-6.col-lg.tarjeta--tabla.p-4
      .row.justify-content-center.mb-3
        .col-4
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
      h2.text-center John Doe
      p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    .col-md-6.col-lg.tarjeta--tabla.p-4
      .row.justify-content-center.mb-3
        .col-4
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
      h2.text-center John Doe
      p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    .col-md-6.col-lg.tarjeta--tabla.p-4
      .row.justify-content-center.mb-3
        .col-4
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
      h2.text-center John Doe
      p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    .col-md-6.col-lg.tarjeta--tabla.p-4
      .row.justify-content-center.mb-3
        .col-4
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
      h2.text-center John Doe
      p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

  h3 Tarjetas con número

  .row.mb-5
    .col-md-6.col-xxl.mb-4.mb-xxl-0
      //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta-numerada.color-primario.p-5
        .tarjeta-numerada__numero
          .h2 1
        p.text-center 
          b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
        p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

    .col-md-6.col-xxl.mb-4.mb-xxl-0
      //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta-numerada.color-secundario.p-5
        .tarjeta-numerada__numero
          .h2 2
        p.text-center 
          b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
        p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

    .col-md-6.col-xxl.mb-4.mb-xxl-0
      //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta-numerada.color-acento-contenido.p-5
        .tarjeta-numerada__numero
          .h2 3
        p.text-center 
          b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
        p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

    .col-md-6.col-xxl.mb-4.mb-xxl-0
      //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta-numerada.color-acento-botones.p-5
        .tarjeta-numerada__numero
          .h2 4
        p.text-center 
          b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
        p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

  Separador

  #modal.titulo-segundo
    h2 Modal

  .row
    .col-auto
      a.boton.color-acento-contenido.mb-5.indicador__container(@click="modal1 = true")
        span Abrir modal
        .indicador--click(v-if="mostrarIndicador")
    .col
      p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t 
        a.lnk(@click="modal1 = true") Abrir modal 
        |the height of your stature, it’s the heft of your spirit.
  
  ModalA(:abrir-modal.sync="modal1")
    .row.align-items-center
      .col-md-6.mb-4.mb-md-0
        h4 Modal 1
        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    
      .col-md-6
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

  Separador

  #modal.titulo-segundo
    h2 Animaciones

  h3.titulo-tercero Fade
  .row.mb-5
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-primario.text-center.p-3(data-aos="fade")
        h3.mb-0 fade
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-secundario.text-center.p-3(data-aos="fade-up")
        h3.mb-0 fade-up
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-contenido.text-center.p-3(data-aos="fade-down")
        h3.mb-0 fade-down
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-botones.text-center.p-3(data-aos="fade-left")
        h3.mb-0 fade-left
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-primario.text-center.p-3(data-aos="fade-right")
        h3.mb-0 fade-right
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-secundario.text-center.p-3(data-aos="fade-up-right")
        h3.mb-0 fade-up-right
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-contenido.text-center.p-3(data-aos="fade-up-left")
        h3.mb-0 fade-up-left
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-botones.text-center.p-3(data-aos="fade-down-right")
        h3.mb-0 fade-down-right
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-primario.text-center.p-3(data-aos="fade-down-left")
        h3.mb-0 fade-down-left


  h3.titulo-tercero Flip
  .row.mb-5
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-primario.text-center.p-3(data-aos="flip-up")
        h3.mb-0 flip-up
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-secundario.text-center.p-3(data-aos="flip-down")
        h3.mb-0 flip-down
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-contenido.text-center.p-3(data-aos="flip-left")
        h3.mb-0 flip-left
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-botones.text-center.p-3(data-aos="flip-right")
        h3.mb-0 flip-right


  h3.titulo-tercero Slide
  .row.mb-5
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-primario.text-center.p-3(data-aos="slide-up")
        h3.mb-0 slide-up
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-secundario.text-center.p-3(data-aos="slide-down")
        h3.mb-0 slide-down
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-contenido.text-center.p-3(data-aos="slide-left")
        h3.mb-0 slide-left
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-botones.text-center.p-3(data-aos="slide-right")
        h3.mb-0 slide-right


  h3.titulo-tercero Zoom
  .row.mb-5
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-primario.text-center.p-3(data-aos="zoom-in")
        h3.mb-0 zoom-in
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-secundario.text-center.p-3(data-aos="zoom-in-up")
        h3.mb-0 zoom-in-up
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-contenido.text-center.p-3(data-aos="zoom-in-down")
        h3.mb-0 zoom-in-down
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-botones.text-center.p-3(data-aos="zoom-in-left")
        h3.mb-0 zoom-in-left
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-primario.text-center.p-3(data-aos="zoom-in-right")
        h3.mb-0 zoom-in-right
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-secundario.text-center.p-3(data-aos="zoom-out")
        h3.mb-0 zoom-out
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-contenido.text-center.p-3(data-aos="zoom-out-up")
        h3.mb-0 zoom-out-up
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-acento-botones.text-center.p-3(data-aos="zoom-out-down")
        h3.mb-0 zoom-out-down
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-primario.text-center.p-3(data-aos="zoom-out-left")
        h3.mb-0 zoom-out-left
    .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
      .tarjeta.color-secundario.text-center.p-3(data-aos="zoom-out-right")
        h3.mb-0 zoom-out-right

</template>

<script>
export default {
  name: 'Muestras',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
    ],
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
