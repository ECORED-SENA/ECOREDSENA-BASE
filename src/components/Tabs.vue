<template lang="pug">
.tabs
  .row
    .col-lg-4.col-xl-3
      .row
        .col-sm-6.col-lg-12.mb-3(
          v-for="(elm,index) of elements"
          :key="'tabs-menu-'+elm.id"
        )
          button.tabs__tab(
            :class="{'tabs__tab__selected': selected === elm.id}"
            @click="selected = elm.id"
          ) 
            .tabs__tab__text {{elm.titulo}}
    
    .col-lg-8.col-xl-9
      .tabs__content-item(
        v-for="elm of elements"
        :key="'tabs-content-'+elm.id"
        v-show="selected === elm.id"
        :class="{'tabs__content-item--active' : selected === elm.id}"
        v-html="elm.html"
      )

  .tabs__slot
    slot

</template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'Tabs',
  mixins: [componentSlotMixins],
}
</script>

<style lang="sass" scoped>
.tabs
  &__slot
    position: absolute
    opacity: 0
    height: 0
    overflow: hidden
    pointer-events: none



.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
