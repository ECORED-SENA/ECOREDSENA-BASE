<template lang="pug">
.barra-avance(:class="[showBarra ? 'barra-avance--open' : 'barra-avance--close']")

  router-link.boton.barra-avance__boton--regresar(
    :class="[!controlLinks.back.name && 'barra-avance__boton--disable']"
    :to="{name: controlLinks.back.name, hash: controlLinks.back.hash ? `#${controlLinks.back.hash}` : ''}"
  )
    i.me-2(class="fas fa-angle-left")
    span Regresar
  
  //- .barra-avance__barra
  //-   .barra-avance__barra--blanca
  //-   .barra-avance__barra--amarilla

  router-link.boton(
    :class="[!controlLinks.next.name && 'barra-avance__boton--disable']"
    :to="{name: controlLinks.next.name, hash: controlLinks.next.hash ? `#${controlLinks.next.hash}` : ''}"
  )
    span.me-2 Continuar
    i(class="fas fa-angle-right")

</template>

<script>
import { menuPrincipal } from '../../config/global'
export default {
  name: 'BarraAvance',
  props: {
    menuOpen: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    menuData: menuPrincipal.menu,
    cursoSelection: null,
    idSelecctionArr: [],
  }),
  computed: {
    showBarra() {
      const haveControls =
        this.controlLinks.next.name || this.controlLinks.back.name
      return !this.menuOpen && haveControls
    },
    controlLinks() {
      const menuObject = this.menuData.find(
        item => item.nombreRuta === this.$route.name,
      )
      if (this.$route.name === 'introduccion') {
        // SI ESTOY EN INTRODUCCION
        const tema1 = this.menuData.find(item => item.nombreRuta === 'tema1')
        return {
          next: {
            name: tema1.nombreRuta,
            hash: '',
          },
          back: {
            name: '',
            hash: '',
          },
        }
      } else if (!menuObject || !menuObject.subMenu) {
        // SI NO ESTOY EN UN TEMA O SI NO HAY SUBTEMAS --ERROR FALLBACK
        return {
          next: {
            name: '',
            hash: '',
          },
          back: {
            name: '',
            hash: '',
          },
        }
      } else {
        // SI ESTOY EN UN TEMA Y HAY SUBTEMAS
        const idxCurrentHash = menuObject.subMenu
          .map(item => item.hash)
          .indexOf(this.$route.hash.replace('#', ''))

        const idxOfMenuItem = this.menuData
          .map(item => item.nombreRuta)
          .indexOf(this.$route.name)

        if (idxCurrentHash <= 0) {
          // SI NO HAY SELECCIONADO UN HASH O ESTA SELECCIONADO EL PRIMERO
          const lastMenuItem = this.menuData[idxOfMenuItem - 1]
          const isTheme =
            lastMenuItem && lastMenuItem.nombreRuta.includes('tema')
          const isIntro =
            lastMenuItem && lastMenuItem.nombreRuta.includes('introduccion')
          const nextHash = menuObject.subMenu[idxCurrentHash + 1].hash

          if (isTheme || isIntro) {
            // si el anterior objeto es un tema o introduccion
            return {
              next: {
                name: this.$route.name,
                hash: nextHash,
              },
              back: {
                name: lastMenuItem.nombreRuta,
                hash: '',
              },
            }
          } else {
            // si el objeto anterior no es tema o introduccion
            return {
              next: {
                name: this.$route.name,
                hash: nextHash,
              },
              back: {
                name: '',
                hash: '',
              },
            }
          }
        } else if (idxCurrentHash === menuObject.subMenu.length - 1) {
          // SI EL ULTIMO HASH ESTA SELECCIONADO

          const isTheme =
            this.menuData.length > idxOfMenuItem + 1 &&
            this.menuData[idxOfMenuItem + 1].nombreRuta.includes('tema')
          const backHash = menuObject.subMenu[idxCurrentHash - 1].hash
          if (isTheme) {
            // SI EL SIGUIENTE OBJETO EN EL MENU ES UN TEMA
            const nextTheme = this.menuData[idxOfMenuItem + 1]
            return {
              next: {
                name: nextTheme.nombreRuta,
                hash: '',
              },
              back: {
                name: this.$route.name,
                hash: backHash,
              },
            }
          } else {
            // SI EL SIGUIENTE OBJETO EN EL MENU NO ES TEMA
            return {
              next: {
                name: '',
                hash: '',
              },
              back: {
                name: this.$route.name,
                hash: backHash,
              },
            }
          }
        } else {
          // SI ESTOY ENMEDIO DE LOS HASH
          return {
            next: {
              name: this.$route.name,
              hash: menuObject.subMenu[idxCurrentHash + 1].hash,
            },
            back: {
              name: this.$route.name,
              hash: menuObject.subMenu[idxCurrentHash - 1].hash,
            },
          }
        }
      }
    },
  },
  created() {
    // document.addEventListener('scroll', this.trackIds)
  },
  mounted() {
    // this.cursoSelection = document.querySelector('#curso')
    // const subMenuSelected = this.menuData.find(
    //   item => item.nombreRuta === this.$route.name,
    // ).subMenu
    // this.idSelecctionArr = subMenuSelected
    //   ? subMenuSelected.map(item => document.querySelector(`#${item.hash}`))
    //   : []
  },
  methods: {
    trackIds() {
      if (!this.idSelecctionArr.length) return
      // this.idSelecctionArr.forEach(item => {
      //   console.log(item.scrollTop)
      // })
      // const mao = document.querySelector('#t_1_5')
      // console.log(this.cursoSelection.clientHeight)
      // console.log(window.innerHeight, window.scrollY, mao.offsetTop)
      console.log(
        this.cursoSelection.clientHeight - window.innerHeight - window.scrollY,
      )
    },
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
  left: 0
  width: 100%
  padding: 10px
  background-color: $color-sistema-e
  transition: transform 0.5s ease-in-out

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

  &__boton
    &--regresar
      background-color: $color-sistema-c
      span
        color: $color-sistema-a !important
    &--disable
      opacity: 0
      pointer-events: none

  &--open
    transform: translateY(0)

  &--close
    transform: translateY(100%)
</style>
