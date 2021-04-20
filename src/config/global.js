export const global = {
  componenteFormativo:
    'Componente Formativo con un nombre extremadamente largo y extenso',
  descripcionCurso:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Componentes',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Estilos tipográficos',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Párrafos',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Bloques de texto destacado',
          hash: 't_1_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.4',
          titulo: 'Listas',
          hash: 't_1_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.5',
          titulo: 'Tablas',
          hash: 't_1_5',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.6',
          titulo: 'Imagen',
          hash: 't_1_6',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.7',
          titulo: 'Video',
          hash: 't_1_7',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.8',
          titulo: 'Componentes',
          hash: 't_1_8',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.9',
          titulo: 'Slyders',
          hash: 't_1_9',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.10',
          titulo: 'Acordion',
          hash: 't_1_10',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.11',
          titulo: 'Pestañas o Tabs',
          hash: 't_1_11',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.12',
          titulo: 'Líneas de tiempo',
          hash: 't_1_12',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.13',
          titulo: 'Pasos',
          hash: 't_1_13',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.14',
          titulo: 'Llamados a la acción',
          hash: 't_1_14',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.15',
          titulo: 'Tarjetas',
          hash: 't_1_15',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Producción Audiovisual',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Infografía Animada',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Video Motion',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3',
          titulo: 'Motion + Presentador',
          hash: 't_2_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.4',
          titulo: 'Animación 2D',
          hash: 't_2_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.5',
          titulo: 'Video interactivo',
          hash: 't_2_5',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.6',
          titulo: 'Infografías',
          hash: 't_2_6',
        },
      ],
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Fundamentación Textil',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '3.1',
          titulo:
            'Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).',
          hash: 't_3_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.2',
          titulo: 'Identificación fibras por combustión',
          hash: 't_3_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.3',
          titulo: 'Clasificación de los hilos',
          hash: 't_3_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.4',
          titulo: 'Clasificación de tejidos',
          hash: 't_3_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.5',
          titulo: 'Caracterización de los tejidos',
          hash: 't_3_5',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.6',
          titulo: 'Procesos textiles',
          hash: 't_3_6',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Gloria Matilde Lee Mejía',
      cargo: 'Responsable del equipo',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Astrid Lili Puerta',
      cargo: 'Experta temática',
      centro: 'Centro Agropecuario de Buga',
      regional: 'Regional valle',
    },
    {
      nombre: 'Javier Enrique Santana',
      cargo: 'Experto temático',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Michael Andrés Cortés Caro',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Mauricio Jiménez Fajardo',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Manuel Alejandro Garzón Cárdenas',
      cargo: 'Experto temático',
      centro: 'Deutsche Gesellschaft für',
      regional: 'Internationale Zusammenarbeit (GIZ)',
    },
    {
      nombre: 'Liliana Victoria Morales Gualdrón',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la Industria y la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Carlos Andrés Rodríguez',
      cargo: 'Evaluador instruccional',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Julieth Paola Vital López',
      cargo: 'Revisora de estilo',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Integración de recursos y pruebas',
    },
    {
      nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Edward Leonardo Pico Cabra',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Brayan Stiven Pinto Diaz',
      cargo: ['Desarrollo front-end', 'Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Zlackman, C. (2012). 100 años de moda. Sistema de Bibliotecas SENA: ',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
  },
  {
    referencia:
      'Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA: ',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947',
  },
  {
    referencia:
      'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
  },
  {
    referencia:
      'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
  },
  {
    referencia:
      'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA. ',
  },
  {
    referencia:
      'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241',
  },
  {
    referencia:
      'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551',
  },
  {
    referencia:
      'Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.',
    link:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728',
  },
]

export const glosario = [
  {
    termino: 'MoodBoard',
    significado:
      'su traducción literal es mapa de inspiración y aunque su uso está muy asociado al ámbito de la decoración de interiores o la moda, <br/>realmente se utiliza en entornos creativos muy diversos, desde el diseño de productos o servicios al audiovisual o el diseño gráfico.',
  },
  {
    termino: 'Suftware',
    significado:
      'término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.',
  },
  {
    termino: 'Pirognóstico',
    significado:
      'ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego.',
  },
  {
    termino: 'Vectores',
    significado:
      'en software de diseño, son líneas que se crean y permiten, expandir, modificar, al tamaño que sea sin pixelarse porque se unen por coordenadas matemáticas del programa y no se generan por números fijos.',
  },
  {
    termino: 'Moda',
    significado:
      'hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer.',
  },
  {
    termino: 'Diseño',
    significado:
      'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
  },
  {
    termino: 'Tipología',
    significado:
      'estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas.',
  },
  {
    termino: 'Bidimensional',
    significado:
      'que se representa según su altura y su anchura y no su profundidad.',
  },
  {
    termino: 'Software',
    significado:
      'término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.',
  },
]

export const complementario = [
  {
    texto:
      'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
    tipo: 'Página web',
    descarga: '/downloads/prueba.pdf',
  },
  {
    texto:
      'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
    tipo: 'Artículo científico',
    link: 'https://www.google.com/',
  },
  {
    texto: 'Economía de Rosquilla. (s.f.).',
    tipo: 'Página web',
    descarga: '/downloads/prueba.pdf',
  },
  {
    texto: '2 minutos para entender el desarrollo sostenible – Spanish',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
]
