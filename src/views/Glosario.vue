<template lang="pug">
.curso-main-container.glosario
  BannerInterno(icono="fas fa-atlas" titulo="Glosario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .glosario__letra-item.mb-2(v-for="letra in orderedData" :key="'letra-'+letra.letra")
      .glosario__letra-item__letra.me-4
        .glosario__letra-item__letra__icono
          span {{letra.letra}}
      .glosario__letra-item__texto
        p.mb-3(v-for="termino in letra.terminos")
          strong • {{termino.termino}}: 
          span(v-html="termino.significado")
</template>

<script>
import { glosario } from '../config/global'
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Glosario',
  components: {
    BannerInterno,
  },
  data: () => ({
    glosarioData: glosario,
  }),
  computed: {
    orderedData() {
      const sortedData = [...this.glosarioData].reduce((r, e) => {
        const letra = e.termino[0].toLowerCase()
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})
      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort()
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })

          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass" scoped>
.glosario

  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
