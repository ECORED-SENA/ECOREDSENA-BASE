<template lang="pug">
footer.container.footer.tarjeta.px-5.py-4.mb-4
  .row.align-items-center
    .col-auto
      img(src="@/assets/template/cc.svg")
    .col
      p.mb-0.text-small Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="sass" scoped>
.footer
  background-color: $color-sistema-d
  p
    color: $color-sistema-b
</style>
