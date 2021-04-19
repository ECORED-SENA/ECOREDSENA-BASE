<template lang="pug">
.slyder-c
  ScrollHorizontal(v-if="datos.length" :selectedId="selected")
    .slyder-c__slyde(
      v-for="(item,index) in datos" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
    )
      .slyder-c__imagen.mb-4
        figure.slyder-c__img
          img(:src='item.imagen', :alt='item.leyendaImagen')
          figcaption(v-if="item.leyendaImagen") {{item.leyendaImagen}}
      .slyder-c__content
        .slyder-c__content__header.d-block.d-md-flex.mb-4
          .h3.mb-2.mb-md-0 {{item.titulo}}
          .slyder__action
            .slyder__pagination {{index+1}}/{{datos.length}}
            a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
              i.fas.fa-angle-left
            a.slyder__btn(v-if="index != datos.length -1" @click="selected = getId(index +1)")
              i.fas.fa-angle-right
        .slyder-c__content__body
          p.mb-3(v-html="item.texto")

</template>

<script>
import slyderMixins from '../mixins/slyderMixins'
import ScrollHorizontal from './plantilla/ScrollHorizontal'
export default {
  name: 'SlyderC',
  components: { ScrollHorizontal },
  mixins: [slyderMixins],
}
</script>

<style lang="sass" scoped></style>
