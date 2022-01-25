export default {
    state: {
        game_id: '15',
        total: 10,
        block: 1,
        blocks: 1,
        locus: 1,
        locuses: 1,
        card: 1,
        cards: 1
    },
    mutations: {
        SET_GAME_ID: (state, payload) => {
            state.game_id = payload;
        },
        SET_TOTAL: (state, payload) => {
            state.total = payload;
        },
        SET_BLOCK: (state, payload) => {
            state.block = payload;
        },  
        SET_BLOCKS: (state, payload) => {
            state.blocks = payload;
        },  
        SET_LOCUS: (state, payload) => {
            state.locus = payload;
        },  
        SET_LOCUSES: (state, payload) => {
            state.locuses = payload;
        }, 
        SET_CARD: (state, payload) => {
            state.card = payload;
        },  
        SET_CARDS: (state, payload) => {
            state.cards = payload;
        },      
    },
    actions: {},
    getters: {
        GAME_ID (state) {
            return state.game_id
        },
        TOTAL (state) {
            return state.total
        }, 
        BLOCK (state) {
            return state.block
        }, 
        BLOCKS (state) {
            return state.blocks
        }, 
        LOCUS (state) {
            return state.locus
        }, 
        LOCUSES (state) {
            return state.locuses
        }, 
        CARD (state) {
            return state.card
        }, 
        CARDS (state) {
            return state.cards
        }, 
    }
}
