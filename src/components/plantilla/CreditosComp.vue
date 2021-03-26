<template lang="pug">
.creditos
  .mb-3
    p.text-bold ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES
  .mb-4
    p
      span.text-bold {{creditosData.liderEquipo.nombre}}
      br
      | {{creditosData.liderEquipo.cargo}}

  .row
    .col-lg-8
      p.creditos__titulo.mb-3 CONTENIDO INSTRUCCIONAL
      .row
        .col-lg-6(v-for="(column, idx) of contenidoInstruccional" :key="'inst-'+idx")
          CreditosItem(v-for="(item, colIdx) of column" :key="'inst-col-'+idx+colIdx" :item="item")

    .col-lg-4
      p.creditos__titulo.mb-3 DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES 
      CreditosItem(v-for="(item, idx) of creditosData.desarrolloProducto" :key="'desa-'+idx" :item="item" )
      
      p.creditos__titulo.mb-3 GESTORES DE REPOSITORIO
      CreditosItem(v-for="(item, idx) of creditosData.gestoresRepositorio" :key="'repo-'+idx" :item="item")
</template>

<script>
import { creditos } from '../../config/global'
import CreditosItem from './CreditosItem'
export default {
  name: 'CreditosComp',
  components: {
    CreditosItem,
  },
  data: () => ({
    creditosData: creditos,
  }),
  computed: {
    contenidoInstruccional() {
      const contenido = this.creditosData.contenidoInstruccional
      const half = Math.round(contenido.length / 2)
      const firstHalf = [...contenido].splice(0, half)
      const secondHalf = [...contenido].splice(half, contenido.length)
      return [firstHalf, secondHalf]
    },
  },
}
</script>

<style lang="sass" scoped>
.creditos
  color: $color-sistema-b

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-radius: $base-border-radius
</style>
