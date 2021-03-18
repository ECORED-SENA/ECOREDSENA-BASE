<template lang="pug">
.barra-avance

  a.boton
    i.me-2(class="fas fa-angle-left")
    span Regresar
  
  .barra-avance__barra
    .barra-avance__barra--blanca
    .barra-avance__barra--amarilla

  a.boton
    span.me-2 Continuar
    i(class="fas fa-angle-right")

</template>

<script>
import { menuPrincipal } from '../../config/global'
export default {
  name: 'BarraAvance',
  data: () => ({
    menuData: menuPrincipal,
  }),
  mounted() {
    const curso = document.querySelector('#curso').querySelectorAll('[id]')
    console.log(curso)
  },
}
</script>

<style lang="sass" scoped>
.barra-avance
  display: flex
  align-items: center
  justify-content: space-between
  position: fixed
  bottom: 0
  width: 100%
  padding: 10px
  background-color: $color-sistema-e

  &__barra
    margin: 0 20px
    flex: 1
    position: relative
    max-width: 800px

    &--blanca, &--amarilla
      height: 4px

      &:before, &:after
        content: ''
        display: block
        width: 10px
        height: 10px
        border-radius: 50%
        position: absolute
        top: 50%

      &:before
        left: 0
        transform: translate(-50%,-50%)

      &:after
        right: 0
        transform: translate(50%,-50%)

    &--blanca
      background-color: $white
      &:before, &:after
        background-color: $white

    &--amarilla
      position: absolute
      width: 100%
      top: 0
      background-color: $color-curso-c
      &:before, &:after
        background-color: $color-curso-c
</style>
