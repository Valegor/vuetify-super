
<template v-slot:game.notes="{{game.notes}}">

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
    class="mx-auto"
    max-width="400"
    color="rgb(181, 181, 177, 0.5)"
  >
    <hr>
    <v-img
      :src="this.imageUrl"
      max-height="200"
      contain
    ></v-img>
    <hr>
    <v-card-title>
      {{ game.name }}
    </v-card-title>
    <v-card-subtitle>
      <b>Описание игры:</b> {{ game.subtitle  }} <br>
      <hr>
      <b>Автор:</b> {{ game.author }} <br>
      <hr>
      <b>Категория:</b> {{ game.category }} <br>
      <hr>
        <v-btn
        v-if="isUser == 1"
        color="success"
        dark
        v-on:click="start"
        >
        Начать игру!
        </v-btn>
        
        <v-btn
        v-if="isUser == 0"
        color="success"
        dark
        router-link to=/login
        >
        Войти в систему!
        </v-btn>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="black"
        text
      >
        Подробнее об игре
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
    v-if="cardsLenght > 0"
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
    color="rgb(181, 181, 177, 0.5)"
>

    <v-list-item>
        <v-list-item-content>
            <h5>{{ card.card }}</h5> 
        </v-list-item-content>
    </v-list-item>

    <v-img
      :src="serverUrl + card.img"
      max-height="150"
      contain
    ></v-img>
    <v-list-item>
      <hr>
    </v-list-item>

</v-card>

 </div> 
 </div> 

</template>

<script>

    import axios from '@/axios/axios'
    // import store from '@/store/index'

    export default {
    data: () => ({
        game: '',
        game_id: '',
        cards: '',
        show: false,
        imageUrl: '',
        serverUrl: '',
        object: {},
        user_name: '',
        user_email: '',
        user_score: 0,
        user: {},
        isUser: 0,
        cardsLenght: 0,
        isLoading: 1,
    }),
    methods: {
        async getGame(){

            this.game_id = this.$route.params.id
            // this.user_email = this.$store.getters.USER_EMAIL
    
            await axios
                .get('/api/game/' + this.game_id)
                .then(response => {
                    this.game = response.data[0];
                    this.isLoading = 0
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
                    this.cardsLenght = Object.keys(this.cards).length
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

                this.serverUrl = this.$store.getters.serverUrl

        },
        start(){

            this.getUser() // НЕ ЗАБЫТЬ ВКЛЮЧИТЬ

            this.user_email = this.$store.getters.USER_EMAIL

            this.object =  JSON.parse(this.game.object)
            // console.log(this.object.author.email)

            // console.log(Object.keys(this.object.blocks).length)

            // console.log(this.object.blocks)
            this.$store.commit('SET_OBJECT', this.object)
            // this.$store.commit('SET_GAME_ID', this.game.id)
            // this.$store.commit('SET_TOTAL', 0)
            // this.$store.commit('SET_BLOCK', 1)
            // this.$store.commit('SET_BLOCKS', this.countBlocks())


            this.$router.push({name:'start'})

        },
        getEmail(){
          this.user_email = this.$store.getters.USER_EMAIL
          if(this.user_email){this.isUser = 1}
          console.log('is user: ' + this.isUser )
        },
        async getUser(){

            this.user_email = this.$store.getters.USER_EMAIL

            await axios
                .get("/api/user/" + this.user_email)
                .then(response => {
                    this.user = response.data[0];
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

                this.$store.commit('SET_USER_ID', this.user.id)
                this.$store.commit('SET_USER_NAME', this.user.name)
                this.$store.commit('SET_USER_EMAIL', this.user.email)
                this.$store.commit('SET_USER_SCORE', this.user.score)

                console.log('Username: ' + this.user.name)
        }
    },
    created() {
        // this.getGame()
        // this.getGameCards()
        // this.getUser()
    },
    updated (){
        // this.getUser()
    },
    mounted() {
        this.getGame()
        this.getGameCards()
        this.getEmail()
    }

    }

</script>
