export default {
  state: {
    serverUrl: 'http://yii2super:8888/',
    adminEmail: 'medifit2000@yandex.ru',
  },
  mutations: {
  },
  actions: {},
  getters: {
    serverUrl (state) {
      return state.serverUrl
    },
    adminEmail (state) {
      return state.adminEmail
    }
  }
}
