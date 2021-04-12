<template lang="pug">
.linea-tiempo-b
  // first section
  template(v-for="(item, index) in datos")
    template(v-if="index % 2 === 0 ")
      .row.align-items-center.d-flex
        .col-3.col-sm-2.col-lg-1.linea-tiempo-b__numero.text-center.d-inline-flex.justify-content-center.align-items-center(
          :class="getClass(index)"
        )
          .circle
            .h4(v-if="tipo === 'n'") {{index + 1}}
            .h4(v-else-if="tipo === 'l'") {{abecedario[index]}}

        .col-8.py-3
          .h5 {{item.titulo}}
          p(v-html="item.texto")

      // path between 1-2
      template(v-if="index + 1 != datos.length")
        .row.linea-tiempo-b__linea
          .col-3.col-sm-2.col-lg-1.linea-tiempo-b__linea__esquina
            .linea-tiempo-b__linea__esquina__linea.top-right
          .col-6.col-sm-8.col-lg-10
            .hor-line
          .col-3.col-sm-2.col-lg-1.linea-tiempo-b__linea__esquina
            .linea-tiempo-b__linea__esquina__linea.left-bottom

    template(v-else)

      // second section
      .row.align-items-center.justify-content-end.d-flex
        .col-8.text-end.py-3
          .h5 {{item.titulo}}
          p(v-html="item.texto")
        .col-3.col-sm-2.col-lg-1.linea-tiempo-b__numero.text-center.d-inline-flex.justify-content-center.align-items-center(
          :class="getClass(index)"
        )
          .circle
            .h4(v-if="tipo === 'n'") {{index + 1}}
            .h4(v-else-if="tipo === 'l'") {{abecedario[index]}}

      // path between 2-3
      template(v-if="index + 1 != datos.length")
        .row.linea-tiempo-b__linea
          .col-3.col-sm-2.col-lg-1.linea-tiempo-b__linea__esquina
            .linea-tiempo-b__linea__esquina__linea.right-bottom
          .col-6.col-sm-8.col-lg-10
            .hor-line
          .col-3.col-sm-2.col-lg-1.linea-tiempo-b__linea__esquina
            .linea-tiempo-b__linea__esquina__linea.top-left

</template>

<script>
export default {
  name: 'PasosA',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
    tipo: {
      type: String,
      default: 'n',
    },
  },
  data: () => ({
    abecedario: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  }),
  methods: {
    getClass(idx) {
      return idx === 0
        ? 'bottom'
        : idx + 1 === this.datos.length
        ? 'top'
        : 'full'
    },
  },
}
</script>

<style lang="sass" scoped>
.linea-tiempo-b
  position: relative

  &__numero
    align-self: stretch
    position: relative
    &::after
      content: ""
      position: absolute
      border-left: 3px solid $color-curso-b
      z-index: 1

  .bottom::after
    height: 50%
    left: 50%
    top: 50%

  .full::after
    height: 100%
    left: 50%

  .top::after
    height: 50%
    left: 50%
    top: 0

  &__linea
    div
      padding: 0
      height: 40px

    .hor-line
      border-top: 3px solid $color-curso-b
      margin: 0
      top: 17px
      position: relative

    &__esquina
      display: flex
      overflow: hidden

      &__linea
        border: 3px solid $color-curso-b
        width: 100%
        position: relative
        border-radius: 15px

    .top-right
      left: 50%
      top: -50%

    .left-bottom
      left: calc(-50% + 3px)
      top: calc(50% - 3px)

    .top-left
      left: calc(-50% + 3px)
      top: -50%

    .right-bottom
      left: 50%
      top: calc(50% - 3px)


.circle
  width: 50px
  height: 50px
  border-radius: 50%
  background-color: $color-curso-b
  z-index: 2
  position: relative
  div
    color: #fff
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)
</style>
