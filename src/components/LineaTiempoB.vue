<template lang="pug">
.linea-tiempo-b.py-5
  .linea-tiempo-b__line-row.row
    .col-5.d-none.d-md-block
    .col-3.col-md-2
      .linea-tiempo-b__line
    .col-9.col-md-5

  .linea-tiempo-b__row.row.align-items-center(
    v-for="(item,index) of datos"
    :ref="'linea-tiempo-item-'+index"
  )
    .col-5.d-none.d-md-block
    .col-3.col-md-2
      .linea-tiempo-b__icon
        img(:src="item.icono")
    .col-9.col-md-5
      .linea-tiempo-b__content
        .h4.mb-2 {{item.titulo}}
        span(v-html="item.texto")

</template>

<script>
export default {
  name: 'LineaTiempoB',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="sass" scoped>
.linea-tiempo-b
  position: relative

  &__icon
    padding-top: 100%
    background-color: $color-curso-d
    border-radius: 50%
    position: relative
    &:after
      content: ''
      display: block
      width: 15px
      height: 4px
      background-color: $color-curso-d
      position: absolute
      left: 100%
      top: 50%
      transform: translateY(-50%)
    img
      position: absolute
      width: 80%
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)

  &__row
    margin-bottom: 50px
    &:last-child
      margin-bottom: 0
    @media (min-width: $bp-min-md)
      &:nth-child(odd)
        flex-direction: row-reverse

        .linea-tiempo-b__content
          text-align: right

        .linea-tiempo-b__icon
          &:after
            right: 100%
            left: auto

  &__line-row
  &__line
    margin-left: calc(50% - 2px)
    &:after
      content: ''
      display: block
      position: absolute
      border-left: 4px dotted $color-sistema-b
      top: 0
      bottom: 0
</style>
