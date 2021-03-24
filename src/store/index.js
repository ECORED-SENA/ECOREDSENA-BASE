import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: 0,
  },
  getters: {
    isLoading: state => {
      return !!state.loading
    },
  },
  mutations: {
    increment(state) {
      state.loading++
    },
    decrease(state) {
      state.loading--
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrease({ commit }) {
      commit('decrease')
    },
  },
})
