<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i(style="font-size: 18pt;").fas.fa-sitemap
      h1 Síntesis 

    p.mb-5 Con el diagrama de actividades se termina la descripción de las tres técnicas usadas para la especificación y el análisis de requisitos, como se pudo analizar cada una de las técnicas nos brinda características para lograr representar gráficamente y de una forma clara, los requisitos que un usuario necesita poder cumplir satisfactoriamente con las solicitudes de los clientes y usuarios, por otro lado se pueden usar todas las técnicas en una especificación y análisis de requisitos si se ve la necesidad.
      br
      br
      |A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt").m-auto
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


    
    
  
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
