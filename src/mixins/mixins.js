import { menuPrincipal } from '../config/global'

export default {
  data: () => ({
    menuData: menuPrincipal.menu,
  }),
  methods: {},
  computed: {
    iniciarLnk() {
      const lnk = this.menuData.find(item => item.nombreRuta === 'introduccion')
      const tema1 = this.menuData.find(item => item.nombreRuta === 'tema1')
      return lnk || tema1
    },
  },
}
