import Vue from 'vue'
import Vuex from 'vuex'
import env from './env'
import game from './game'
import user from './user'
import object from './object'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    env,
    game,
    user,
    object
  }
})
