<template lang="pug">
.slyder-a
  .slyder-a__btn--sigt(v-if="navObj.next" @click="selected = navObj.next")
  .slyder-a__btn--atrs(v-if="navObj.back" @click="selected = navObj.back")
  .slyder-a__bullets
    .slyder-a__bullets__item(
      v-for="bullet in elements"
      :key="'sl-blt-key-'+bullet.id"
      :class="{'slyder-a__bullets__item--active' : selected === bullet.id}"
      @click="selected = bullet.id"
    )
  ScrollHorizontal(v-if="elements.length" :selectedId="'sl-' + selected")
    .slyder-a__item(
      v-for="item in elements"
      :key="'sl-key-'+item.id"
      :id="'sl-'+item.id"
      v-html="item.html"
    )
  .tabs__slot
    slot
</template>

<script>
import ScrollHorizontal from './plantilla/ScrollHorizontal'
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'SlyderA',
  components: { ScrollHorizontal },
  mixins: [componentSlotMixins],
  data: () => ({}),
  computed: {
    navObj() {
      if (!this.elements.length) return {}
      const idsArr = this.elements.map(elm => elm.id)
      const idxOfSelected = idsArr.indexOf(this.selected)
      if (idxOfSelected < 0) return {}

      const navObj = {}
      if (idxOfSelected === 0) {
        navObj.next = idsArr[idxOfSelected + 1]
      } else if (idxOfSelected + 1 === idsArr.length) {
        navObj.back = idsArr[idxOfSelected - 1]
      } else {
        navObj.next = idsArr[idxOfSelected + 1]
        navObj.back = idsArr[idxOfSelected - 1]
      }
      return navObj
    },
  },
}
</script>

<style lang="sass" scoped>
.slyder-a
  position: relative
  &__btn
    &--sigt, &--atrs
      width: 50px
      height: 50px
      background-color: $white
      border-radius: 50%
      background-image: url('../assets/componentes/arrow.svg')
      background-repeat: no-repeat
      background-size: 16px 24px
      background-position: center
      border: 1px solid $color-sistema-e
      position: absolute
      top: 50%
      z-index: 10000
      opacity: 0.7
      box-shadow: 0 0 0px 0px rgba(0,0,0,0.3)
      transition: opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out
      cursor: pointer
      &:hover
        opacity: 1
        box-shadow: 0 0 5px 0px rgba(0,0,0,0.3)
        border-color: $white

    &--sigt
      transform: translateY(-50%) rotate(-90deg)
      right: 15px
    &--atrs
      transform: translateY(-50%) rotate(90deg)
      left: 15px

  &__bullets
    display: flex
    position: absolute
    bottom: 50px
    left: 50%
    z-index: 10000
    transform: translateX(-50%)
    &__item
      width: 15px
      height: 15px
      background-color: $white
      border-radius: 50%
      box-shadow: 0 0 5px 0px rgba(0,0,0,0)
      margin: 0 10px
      cursor: pointer
      opacity: 0.7
      transition: opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out
      border: 1px solid $color-sistema-e

      &--active
        background-color: $color-sistema-b
        border-color: $color-sistema-b
        opacity: 1

      &:hover
        opacity: 1
        box-shadow: 0 0 5px 0px rgba(0,0,0,0.3)
        border-color: $color-sistema-b
</style>
