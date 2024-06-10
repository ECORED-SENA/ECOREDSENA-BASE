<template>
  <div class="curso-main-container pb-3">
    <BannerInterno />
    <div class="container tarjeta tarjeta--blanca py-4 py-md-5 px-0">
      <div class="titulo-segundo px-4 px-md-5">
        <h2>Actividad didáctica 1</h2>
      </div>

      <Actividad :cuestionario="cuestionario" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Tema de cuestionario',
      titulo: 'Titulo del Cuestionario',
      introduccion: 'Breve descripción o instrucciones del cuestionario.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: 'Texto de la primera pregunta 1',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: true },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto:
            'Respuesta incorrecta. Intenta nuevamente.lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.',
        },
        {
          id: 2,
          texto: 'Texto de la segunda pregunta 2',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: false },
            { id: 'c', texto: 'Opción C', esCorrecta: true },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Perfecto! Has seleccionado la respuesta correcta.',
          mensaje_incorrecto: 'Esa no es la respuesta correcta. ¡Ánimo!',
        },
        {
          id: 3,
          texto: 'Texto de la tercera pregunta 3',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: false },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Esa es la respuesta correcta.',
          mensaje_incorrecto: 'Respuesta incorrecta. ¡Inténtalo de nuevo!',
        },
        {
          id: 4,
          texto: 'Texto de la cuarta pregunta 4',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: true },
            { id: 'b', texto: 'Opción B', esCorrecta: false },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
        {
          id: 5,
          texto: 'Texto de la quinta pregunta 5',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: true },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
      ],
      mensaje_final_aprobado:
        '¡Has completado el cuestionario exitosamente! Felicidades.',
      mensaje_final_reprobado:
        'No has alcanzado la puntuación mínima para aprobar. Te animamos a intentarlo de nuevo.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

<style lang="sass" scoped></style>
