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

<style lang="sass" scoped></style>
