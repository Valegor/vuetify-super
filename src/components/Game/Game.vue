
<template v-slot:game.notes="{{game.notes}}">

<div>

  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="this.imageUrl"
      max-height="200"
      contain
    ></v-img>

    <v-card-title>
      {{ game.title }}
    </v-card-title>

    <v-card-subtitle>
      <b>Description:</b> {{ game.subtitle  }} <br>
      <b>Author:</b> {{ game.author }} <br>
      <b>Category:</b> {{ game.category }} <br>
      <b>Date:</b> {{ game.date }} <br>
      <hr>
        <v-btn
        color="success"
        dark
        >
        Lets Play
        </v-btn>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Read More
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>

      <div v-show="show">

        <v-divider></v-divider>

        <v-card-text>
            <div v-html="game.notes"></div>
        </v-card-text>

      </div>
    </v-expand-transition>
  </v-card>

  <hr>

  <v-card
    class="mx-auto mb-4 indigo lighten-4"
    max-width="400"
    tile
>
    <v-list-item>
    <v-list-item-content>
        <v-list-item-title
        class="h5"
        >
        ПРИКРЕПЛЕННЫЕ КАРТЫ
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>

  <v-card
    v-for="card in cards" :key="card.card_id"
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/card/' + card.card_id"
>

    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ card.card }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>

    <v-img
      :src="serverUrl + card.img"
      max-height="150"
      contain
    ></v-img>

</v-card>


 </div> 

</template>

<script>

    import axios from '@/axios/axios'

    export default {
    data: () => ({
        game: '',
        game_id: '',
        cards: '',
        show: false,
        imageUrl: '',
        serverUrl: ''

    }),
    methods: {
        async getGame(){

            this.game_id = this.$route.params.id
    
            await axios
                .get('/api/game/' + this.game_id)
                .then(response => {
                    this.game = response.data[0];
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

                this.imageUrl = this.$store.getters.serverUrl + this.game.img

        },
        async getGameCards(){

            this.game_id = this.$route.params.id

            await axios
                .get("/api/game-card/" + this.game_id)
                .then(response => {
                    this.cards = response.data;
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

                this.serverUrl = this.$store.getters.serverUrl;

        }

    },
    created() {
        this.getGame()
        this.getGameCards()
    },
    updated (){

    },
    mounted() {

    }

    }

</script>
