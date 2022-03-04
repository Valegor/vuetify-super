
<template>

<div>

<div
    v-if="isLoading > 0"
    >

  <v-card
    class="mx-auto"
    max-width="400"
  >

    <v-container style="height: 400px;">
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="text-subtitle-1 text-center"
          cols="12"
        >
          данные загружаются...
        </v-col>
        <v-col cols="8">
          <v-progress-linear
            color="primary"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</div>

<div
    v-if="isLoading == 0"
>  

<v-card
    :to="'/card/' + card.id"
    v-for="card in cards.data" :key="card.id"
    class="mx-auto"
    max-width="400"
    color="rgb(181, 181, 177, 0.5)"
  >
    <hr>

    <v-img
      :src="serverUrl + card.img1"
      max-height="450"
      contain
    ></v-img>

        
    <hr>

    <v-card-title>
      Подробнее о карте>>
    </v-card-title>

      <v-spacer></v-spacer>


    <br>

  </v-card>
  
  

  <br>

<pagination 
    :data="cards" 
    @pagination-change-page="getResults"
    :limit=2
    size="small"
    align="center"
></pagination>

</div> 
</div>

</template>

<script>

    import axios from '@/axios/axios'

    export default {
    data () {
        return {
            cards: {},
            page: 1,
            cat_id: '',
            show: false,
            serverUrl: '',
            isLoading: 1,
        }
    },
    methods: {
        getResults(page = this.page) {

            this.cat_id = this.$route.params.id

            // console.log(this.cat_id)

			axios.get('/api/card-category/' + this.cat_id + '?page=' + page)
				.then(response => {
					this.cards = response.data;
          this.isLoading = 0
          window.scrollTo(0,0);
				});
            
            this.serverUrl = this.$store.getters.serverUrl;
		}
    },
    created() {

    },
    updated (){

    },
    mounted() {
        this.getResults()
    }

    }

</script>