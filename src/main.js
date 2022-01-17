import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import axios from './axios/axios'
import Vuex from 'vuex'
import store from './store'
import 'es6-promise/auto'
import DefaultLayout from "./layouts/Default"
import GameLayout from "./layouts/Game"

// axios.defaults.baseURL = 'http://laravel-super.loc:8888/';

Vue.use(Vuex)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('default-layout', DefaultLayout)
Vue.component('game-layout', GameLayout)

// Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
