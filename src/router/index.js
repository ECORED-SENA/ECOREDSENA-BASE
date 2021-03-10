import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
// import Curso from '../views/Curso.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    // {
    //   path: '/introduccion',
    //   name: 'introduccion',
    //   component: () =>
    //     import(/* webpackChunkName: "intro" */ '../views/Introduccion.vue'),
    // },
    // {
    //   path: '/curso',
    //   name: 'curso',
    //   component: Curso,
    //   redirect: {
    //     name: 'tema1',
    //   },
    //   children: [
    //     {
    //       path: 'tema1',
    //       name: 'tema1',
    //       component: () =>
    //         import(
    //           /* webpackChunkName: "actividad" */ '../components/curso/Tema1.vue'
    //         ),
    //     },
    //   ],
    // },
    // {
    //   path: '/actividad/:index',
    //   name: 'actividad',
    //   component: () =>
    //     import(/* webpackChunkName: "actividad" */ '../views/Actividad.vue'),
    // },
    // {
    //   path: '/glosario',
    //   name: 'glosario',
    //   component: () =>
    //     import(/* webpackChunkName: "glosario" */ '../views/Glosario.vue'),
    // },
    // {
    //   path: '/complementario',
    //   name: 'complementario',
    //   component: () =>
    //     import(/* webpackChunkName: "comple" */ '../views/Complementario.vue'),
    // },
    // {
    //   path: '/referencias',
    //   name: 'referencias',
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "referencias" */ '../views/Referencias.vue'
    //     ),
    // },
  ],
  scrollBehavior(to) {
    return to.hash
      ? {
          selector: to.hash,
          offset: { y: 100 },
          behavior: 'smooth',
        }
      : { x: 0, y: 0 }
  },
})

export default router
