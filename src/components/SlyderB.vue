<template lang="pug">
.slyder-b
  ScrollHorizontal(v-if="datos.length" :selectedId="selected")
    .slyder-b__slyde(
      v-for="(item,index) in datos" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
    )
      .row
        .col-lg-8.order-lg-2.mb-4.mb-lg-0
          figure.slyder-b__img
            img(:src='item.imagen', :alt='item.leyendaImagen')
            figcaption(v-if="item.leyendaImagen") {{item.leyendaImagen}}

        .col-lg-4.order-lg-1
          .h3 {{item.titulo}}
          p.mb-3(v-html="item.texto")
          .slyder__action
            .slyder__pagination {{index+1}}/{{datos.length}}
            a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
              i.fas.fa-angle-left
            a.slyder__btn(v-if="index != datos.length -1" @click="selected = getId(index +1)")
              i.fas.fa-angle-right
</template>

<script>
import slyderMixins from '../mixins/slyderMixins'
import ScrollHorizontal from './plantilla/ScrollHorizontal'
export default {
  name: 'SlyderB',
  components: { ScrollHorizontal },
  mixins: [slyderMixins],
}
</script>

<style lang="sass" scoped></style>
