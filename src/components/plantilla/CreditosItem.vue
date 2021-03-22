<template lang="pug">
p.mb-3
  template(v-if="typeof item.nombre === 'object'" )
    template(v-for="name of item.nombre")
      span.text-bold {{name}}
      br
  template(v-else-if="item.nombre")
    span.text-bold {{item.nombre}}
    br
  
  template(v-if="typeof item.cargo === 'object'" )
    template(v-for="name of item.cargo")
      span {{name}}
      br

  template(v-else-if="item.cargo")
    span {{item.cargo}}
    br(v-if="item.centro || item.regional")

  template(v-if="item.centro")
    span {{item.centro}}
    br(v-if="item.regional")

  template(v-if="item.regional")
    span {{item.regional}}
</template>

<script>
export default {
  name: 'CreditosItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="sass" scoped></style>
