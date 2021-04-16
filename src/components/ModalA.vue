<template lang="pug">
.modal-a
  .modal-a__fondo
  .modal-a__content.p-5
    .modal-a__close-btn
      i.fas.fa-times
    slot
</template>

<script>
export default {
  name: 'ModalA',
}
</script>

<style lang="sass" scoped>
.modal-a
  &__content
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)
    background-color: $white
    width: 90%
    max-width: 1300px
    z-index: 110001
    border-radius: 20px
  &__fondo
    position: fixed
    background-color: rgba($black, .9)
    top: 0
    left: 0
    bottom: 0
    right: 0
    z-index: 110000

  &__close-btn
    position: absolute
    width: 30px
    height: 30px
    top: 10px
    right: 10px
    border-radius: 50%
    cursor: pointer
    i
      font-size: 1.5em
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
</style>
