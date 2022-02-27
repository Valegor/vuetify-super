export default {
    state: {
      object: {
        }
      
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