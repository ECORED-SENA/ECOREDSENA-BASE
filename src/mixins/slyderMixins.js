export default {
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    mainId: Math.floor(Math.random() * 10000000),
    selected: '0',
  }),
  methods: {
    getId(idx) {
      if (idx < 0) return null
      return 'sl-' + this.mainId + idx + 1
    },
  },
}
