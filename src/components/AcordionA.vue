<template lang="pug">
.acordion
  .p-3.pb-0(v-for="elm of elements" :key="elm.id" :class="[cardClass,'mb-3']")
    
    .acordion__header.mb-3(@click="selected = selected != elm.id ? elm.id : 0")
      .d-flex.align-items-center
        .acordion__accion(v-if="tipo === 'a'")
          .acordion__accion__btn--a.h5.mb-0.me-3
            i.fas.fa-minus(v-if="selected === elm.id")
            i.fas.fa-plus(v-else)

        .acordion__titulo
          .h5.mb-0 {{elm.titulo}}

      .acordion__accion(v-if="tipo === 'b'")
        .acordion__accion__btn--b.h5.mb-0
          i.fas.fa-angle-up(v-if="selected === elm.id")
          i.fas.fa-angle-down(v-else)
    
    .acordion__contenido(
      :style="{ height: rendered && selected === elm.id ? getActiveHeight(elm.id) : 0 } "
    )
      .acordion__contenido__item.pb-3(:ref="elm.id" v-html="elm.html")

  .acordion-slot
    slot
</template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'AcordionA',
  mixins: [componentSlotMixins],
  props: {
    claseTarjeta: {
      type: String,
      default: '',
    },
    tipo: {
      type: String,
      default: 'a',
    },
  },
  computed: {
    cardClass() {
      if (this.claseTarjeta.length) {
        return this.claseTarjeta
      } else {
        return 'tarjeta tarjeta--blanca mb-3'
      }
    },
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
}
</script>

<style lang="sass" scoped>
.acordion-slot
  position: absolute
  opacity: 0
  height: 0
  overflow: hidden
  pointer-events: none
</style>
