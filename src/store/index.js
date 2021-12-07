import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    json: {
      list: [],
      config: {
        formWidth: '100%',
        labelWidth: 100,
        size: 'medium'
      }
    }
  },
  getters: {
    list: (state) => state.json.list,
    formConfig: (state) => state.json.config
  },
  mutations: {
    setList (state, list) {
      state.json.list = list
    },
    setConfig (state, config) {
      state.json.config = config
    }
  },
  actions: {},
  modules: {}
})
