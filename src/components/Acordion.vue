<template lang="pug">
.acordion
  .tarjeta.tarjeta--blanca.mb-4.pb-0(v-for="elm of elements" :key="elm.id")
    
    .acordion__header(@click="selected = selected != elm.id ? elm.id : 0")
      .acordion__accion
        img(v-if="selected != elm.id" src="@/assets/images/pages/tema1/img17.svg")
        img(v-else src="@/assets/images/pages/tema1/img2.svg")
      .acordion__titulo
        .h1.mb-0 {{elm.titulo}}
    
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
  data: () => ({
    selected: 0,
    elements: [],
    rendered: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.crearElementos()
      setTimeout(() => {
        this.rendered = true
      }, 500)
    })
  },
  methods: {
    crearElementos() {
      if (!this.$slots.default) return []
      else if (!this.$slots.default.length) return []
      this.elements = this.$slots.default.map(elemento => ({
        id: Math.floor(Math.random() * 10000000),
        html: elemento.elm.outerHTML,
        titulo: elemento.data.attrs.titulo,
      }))
      this.selected = this.elements[0].id
    },
    getActiveHeight(id) {
      return this.$refs[id][0].scrollHeight + 'px'
    },
  },
}
</script>

<style lang="sass" scoped>

.acordion
  position: relative

  .tarjeta
    padding: 25px

  &__header
    display: flex
    align-items: center
    margin-bottom: 25px
    cursor: pointer

  &__accion
    width: 30px

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
