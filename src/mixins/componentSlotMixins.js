export default {
  data: () => ({
    mainId: Math.floor(Math.random() * 10000000),
    selected: 0,
    elements: [],
    stateStr: '',
    rendered: false,
  }),
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
        titulo: elemento.data?.attrs?.titulo,
        icono: elemento.data?.attrs?.icono,
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
      }, 100)
    },
  },
}
