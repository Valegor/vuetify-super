
<template>

<div>

  <v-card
    v-for="card in cards.data" :key="card.id"
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/card/' + card.id"
  >
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ card.name }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item> 
  </v-card>

    <pagination 
        :data="cards" 
        @pagination-change-page="getResults"
        :limit=2
        size="small"
        align="center"
    ></pagination>
 </div> 

</template>

<script>

    import axios from '@/axios/axios'

    export default {
    data () {
        return {
            cards: {},
            page: 1
        }
    },
    methods: {
        // async getCards(){

        //     // console.log(this.$store.getters.serverUrl)
            
        //     await axios
        //         .get('/api/cards')
        //         .then(response => {
        //             this.cards = response.data.data;
        //         })
        //         .catch(function(e){
        //             // console.log('error')
        //             this.error = e;
        //         });

        // },
        getResults(page = 1) {
			axios.get('/api/cards?page=' + page)
				.then(response => {
					this.cards = response.data;
				});
		}
    },
    created() {
        // this.getCards()
    },
    updated (){
        // this.getGameCategory()
    },
    mounted() {
        this.getResults()
        // this.getCards()
    }

    }

</script>