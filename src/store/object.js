export default {
    state: {
      object: {
        1: 'test1',
        2: 'test2'
      },
    },
    mutations: {
      SET_OBJECT: (state, payload) => {
        state.object = payload;
    },
    },
    actions: {},
    getters: {
        OBJECT (state) {
            return state.object
      } 
    }
  }