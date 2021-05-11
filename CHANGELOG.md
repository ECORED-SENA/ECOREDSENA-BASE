# Registro de cambios

Estos son los cambios hechos en la ECORED-BASE-2021

## 3.0.0 - 11-05-2021

### Cambios
- ## Muchos componentes a partir de esta versión cambian su marcado (html) y sus estilos (css), por esto, se recomienda empezar de nuevo teniendo como guia las nuevas muestras.vue.
- /package.json => "ecored-base-pkg": "2.0.0"
- /src/views/Actividad.vue
- /src/styles/variables.sass
- /src/assets/template/
- /src/components/Muestras.vue
- /src/router/index.js

### Agregado

- Mejora en la personalización de la imagen del banner principal.
  ```
  $banner-principal-img-y: '' // 'arriba','abajo',''
  $banner-principal-img-x: '' // 'derecha',''
  ```
- Mejora en la aplicación de colores para componentes.
  ```
  .color-primario
  .color-secundario
  .color-acento-contenido
  .color-acento-botones
  ```
- Clases para textos están en ingles y en español.
  ```
  .text-thin, .texto-thin
  .text-regular, .texto-regular
  .text-bold, .texto-bold
  .text-black, .texto-black
  .text-center, .texto-centro
  .text-white, .texto-blanco
  .text-white--hover, .texto-blanco--hover
  ```
- Nueva vista de actividades de aprendizaje.

### Arreglos

- Mejora en renderizado del AcordionA
- Arreglo del tamaño de las imágenes en tarjeta-avatar

#

## 2.3.1 - 04-05-2021

### Cambios

- /package.json => "ecored-base-pkg": "1.3.1"
- /src/main.js
- /src/router/index.js
- /src/styles/_variables.sass

### Agregado

- Visualización de la version de la base y del paquete de la base en footer.
- Nueva variable $color-banner-fondo.

### Arreglos

- Ordenado de glosario con palabras compuestas.
- Escroleo de barra de avance para firefox.