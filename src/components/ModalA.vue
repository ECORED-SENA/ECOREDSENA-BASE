<template lang="pug">
.modal-a(:class="{'modal-a--abierto' : abrirModal}")
  .modal-a__fondo(@click="$emit('update:abrir-modal', false)")
  .modal-a__content.p-5
    .modal-a__close-btn(@click="$emit('update:abrir-modal', false)")
      i.fas.fa-times
    slot
</template>

<script>
export default {
  name: 'ModalA',
  props: {
    abrirModal: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="sass" scoped></style>
