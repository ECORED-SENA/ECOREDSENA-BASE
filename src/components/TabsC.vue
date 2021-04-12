<template lang="pug">
.tabs-c
  .tabs-c__header
    .row.m-0
      .col-sm-6.col-lg-4.col-xl.tabs-c__tab.py-3(
        v-for="(elm,index) of elements"
        :key="'tabs-c-menu-'+elm.id"
        :class="{'tabs-c__tab--active' : selected === elm.id}"
        @click="selected = elm.id"
        role="button"
      )
        span {{elm.titulo}}
  .tabs-c__content-item(
    v-for="elm of elements"
    :key="'tabs-content-'+elm.id"
    v-show="selected === elm.id"
    v-html="elm.html"
  )

  .tabs__slot
    slot

</template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'TabsC',
  mixins: [componentSlotMixins],
}
</script>

<style lang="sass" scoped></style>
