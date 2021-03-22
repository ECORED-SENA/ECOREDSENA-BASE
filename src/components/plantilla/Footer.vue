<template lang="pug">
footer.container.footer.tarjeta.p-3.px-sm-5.py-sm-4
  .row.align-items-center.justify-content-center
    .col-auto.mb-2.mb-sm-0
      img(src="@/assets/template/cc.svg")
    .col-12.col-sm
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
  border-bottom-right-radius: 0
  border-bottom-left-radius:  0
  p
    color: $color-sistema-b
    line-height: 1.2em
</style>
