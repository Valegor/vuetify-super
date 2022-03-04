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
    :to="'/game/' + game.id"
    v-for="game in games.data" :key="game.id"
    class="mx-auto mb-4"
    max-width="400"
    tile
    color="rgb(181, 181, 177, 0.5)"
  >

    <v-list-item>
        <v-list-item-content>
            <h3>{{ game.name }}</h3>
        </v-list-item-content>
    </v-list-item> 

    <v-img
      :src="serverUrl + game.img"
      max-height="150"
      contain
    ></v-img>

    <v-card-title>
      Подробнее >>
    </v-card-title>

      <v-spacer></v-spacer>


    <br>

  </v-card>
  
  <hr>

  <br>

<pagination 
    :data="games" 
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
            games: {},
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

			axios.get('/api/game-categories/' + this.cat_id + '?page=' + page)
				.then(response => {
					this.games = response.data;
          this.isLoading = 0
          window.scrollTo(0,0)
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