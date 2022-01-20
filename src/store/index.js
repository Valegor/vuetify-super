import Vue from 'vue'
import Vuex from 'vuex'
import env from './env'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    env
  }
})
