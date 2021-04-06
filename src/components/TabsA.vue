<template lang="pug">
.tabs-a
  .row
    .col-lg-4.col-xl-3
      .row
        .col-sm-6.col-lg-12.mb-3(
          v-for="(elm,index) of elements"
          :key="'tabs-menu-'+elm.id"
        )
          button.tabs-a__tab(
            :class="{'tabs-a__tab__selected': selected === elm.id}"
            @click="selected = elm.id"
          ) 
            .tabs-a__tab__text {{elm.titulo}}
    
    .col-lg-8.col-xl-9
      .tabs-a__content-item(
        v-for="elm of elements"
        :key="'tabs-a-content-'+elm.id"
        v-show="selected === elm.id"
        :class="{'tabs-a__content-item--active' : selected === elm.id}"
        v-html="elm.html"
      )

  .tabs__slot
    slot

</template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'TabsA',
  mixins: [componentSlotMixins],
}
</script>

<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
