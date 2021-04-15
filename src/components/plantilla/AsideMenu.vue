<template lang="pug">
aside.aside-menu(:class="{'aside-menu--open': menuOpen}")
  nav.aside-menu__content
    .aside-menu__header
      .h5 Desarrollo de contenidos
    ul.aside-menu__menu
      template(v-for="(item,index) of menuData")
        li.aside-menu__menu__item(
          :key="`menu-item-${index}`"
          :class="{'aside-menu__menu__item--active' : $route.name == item.nombreRuta}"
        )
          router-link.aside-menu__menu__item__lnk(
            :to="{name: item.nombreRuta}"
          )
            span(v-if="item.hasOwnProperty('numero')")
              strong {{item.numero}}
            span 
              strong {{item.titulo}}

        template(
          v-if="item.hasOwnProperty('subMenu') && item.subMenu.length"
        )
          li.aside-menu__menu__item--sub-menu(
            v-for="(subItem, subItemIndex) of item.subMenu"
            :key="`submenu-item-${index}-${subItemIndex}`"
            :class="{'aside-menu__menu__item--sub-menu--active': $route.hash == `#${subItem.hash}`}"
          )
            router-link.aside-menu__menu__item__lnk(
              :to="{ name: item.nombreRuta , hash: `#${subItem.hash}` }"
            )
              i(:class="subItem.icono")
              span {{subItem.numero}}
              span {{subItem.titulo}}

    ul.aside-menu__sec-menu
      li.aside-menu__sec-menu__item(
        v-for="(secMenuItem, secMenuIndex) of subMenuData",
        :key="`SecMenu-item-${secMenuIndex}`"
      )
      
        a.aside-menu__sec-menu__item__lnk(
          v-if="secMenuItem.hasOwnProperty('download')"
          :href="obtenerLink(secMenuItem.download)"
          target="_blank"
        )
          i(:class="secMenuItem.icono")
          span {{secMenuItem.titulo}}

        router-link.aside-menu__sec-menu__item__lnk(
          v-else
          :to="{name: secMenuItem.nombreRuta}"
        )
          i(:class="secMenuItem.icono")
          span {{secMenuItem.titulo}}
        
</template>

<script>
import { menuPrincipal } from '../../config/global'
export default {
  name: 'AsideMenu',
  data: () => ({
    menuData: menuPrincipal && menuPrincipal.menu,
    subMenuData: menuPrincipal && menuPrincipal.subMenu,
  }),
  computed: {
    menuOpen() {
      return this.$store.getters.isMenuOpen
    },
  },
  watch: {
    $route(to) {
      if (to.name === 'inicio') {
        this.toggleMenu(false)
      }
    },
  },
  methods: {
    toggleMenu(newVal) {
      this.$store.dispatch('toggleMenu', newVal)
    },
  },
}
</script>

<style lang="sass" scoped>
.aside-menu
  position: sticky
  top: 70px
  flex: 0 0 0
  width: 0
  background-color: $color-sistema-g
  transition: flex 0.5s ease-in-out, width 0.5s ease-in-out
  overflow-x: hidden
  z-index: 100001

  a
    color: $color-sistema-a

  &--open
    flex: 0 0 300px
    width: 300px

  &__content
    width: 300px
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: calc(100vh - 70px)
    max-height: calc(100vh - 70px)

    @media (max-height: 800px)
      min-height: 800px
      max-height: 800px
      overflow-y: auto


  &__header
    padding: 10px
    text-align: center
    background-color: $color-sistema-e
    div
      margin: 0

  &__menu
    overflow-y: auto
    flex-grow: 1
    list-style: none
    padding-left: 0

    &__item
      &--active
        .aside-menu__menu__item__lnk
          background-color: $color-sistema-e
          font-weight: $base-bold-font-weight

      &:hover
        background-color: $color-sistema-e

      &--sub-menu
        @extend .aside-menu__menu__item
        padding-left: 10px
        &--active
          .aside-menu__menu__item__lnk
            background-color: $color-sistema-e
            font-weight: $base-bold-font-weight
            position: relative
            &::before
              content: ''
              display: block
              position: absolute
              left: 0
              bottom: 0
              top: 0
              width: 4px
              border-radius: 2px
              background-color: $color-curso-b

      &__lnk
        display: flex
        align-items: center
        padding: 10px 15px
        line-height: 1.1em


        span, i
          margin-right: 10px
          &:last-child
            margin-right: 0

  &__sec-menu
    background-color: $color-sistema-e
    padding: 10px 0
    flex-shrink: 0

    &__item
      @extend .aside-menu__menu__item
      padding: 10px 15px

      &__lnk
        @extend .aside-menu__menu__item__lnk
        padding: 0
        border-radius: 1em
        i
          display: block
          width: 2em
          height: 2em
          padding: 0.5em 0
          text-align: center
          background-color: $white
          border-radius: 50%
        &:hover
          background-color: $white



  @media (max-width: $bp-max-sm)
    position: fixed
    top: 70px
    // width: 300px

    &__content
      // min-height: 100vh
      // max-height: 100vh
</style>
