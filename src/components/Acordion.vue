<template lang="pug">
.acordion
  .p-3.pb-0(v-for="elm of elements" :key="elm.id" :class="cardClass")
    
    .acordion__header.mb-3(@click="selected = selected != elm.id ? elm.id : 0")
      .acordion__accion
        .h4.mb-0(v-if="selected != elm.id")
          i.fas.fa-plus-square
          
        .h4.mb-0(v-else)
          i.fas.fa-minus-square
      .acordion__titulo
        .h4.mb-0 {{elm.titulo}}
    
    .acordion__contenido(
      v-html="elm.html",
      :ref="elm.id",
      :style="{ height: rendered && selected === elm.id ? getActiveHeight(elm.id) : 0 } "
    )

  .acordion-slot
    slot
</template>

<script>
export default {
  name: 'Acordion',
  props: {
    claseTarjeta: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    mainId: Math.floor(Math.random() * 10000000),
    selected: 0,
    elements: [],
    stateStr: '',
    rendered: false,
  }),
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
  watch: {
    menuState() {
      this.domUpdated()
    },
  },
  created() {
    window.addEventListener('resize', this.domUpdated)
  },
  mounted() {
    this.$nextTick(() => {
      this.crearElementos()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.domUpdated)
  },
  updated() {
    this.$nextTick(() => {
      if (this.getStateStr() != this.stateStr) {
        this.crearElementos()
      }
    })
  },
  methods: {
    crearElementos() {
      if (!this.$slots.default) return []
      else if (!this.$slots.default.length) return []
      this.domUpdated()
      this.elements = this.$slots.default.map((elemento, index) => ({
        id: this.mainId + index + 1,
        html: elemento.elm.outerHTML,
        titulo: elemento.data.attrs.titulo,
      }))
      this.selected = this.selected > 0 ? this.selected : this.elements[0].id
      this.stateStr = this.getStateStr()
    },
    getActiveHeight(id) {
      return this.$refs[id][0].scrollHeight + 'px'
    },
    getStateStr() {
      return this.$slots.default.map(elm => elm.elm.outerHTML).join('')
    },
    domUpdated() {
      this.rendered = false
      setTimeout(() => {
        this.rendered = true
      }, 500)
    },
  },
}
</script>

<style lang="sass" scoped>

.acordion
  position: relative

  &__header
    display: flex
    align-items: center
    margin-bottom: 25px
    cursor: pointer

  &__accion

  &__titulo
    margin-left: 15px

  &__contenido
    overflow: hidden
    transition: height 0.5s ease-in-out

.acordion-slot
  position: absolute
  opacity: 0
  height: 0
  overflow: hidden
  pointer-events: none
</style>
