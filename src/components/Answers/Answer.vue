
<template v-slot:game.notes="{{game.notes}}">

<div>

  <v-card
    class="mx-auto"
    max-width="344"
  >

    <v-card-title>
      {{ game.title }}
    </v-card-title>

    <v-card-subtitle>
      <b>Description:</b> {{ game.subtitle  }} <br>
      <b>Author:</b> {{ game.author }} <br>
      <b>Category:</b> {{ game.template_name }} <br>
      <b>Date:</b> {{ game.date }} <br>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Read More!
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

    <hr>
        <v-btn
        color="success"
        dark
        @click.prevent="$router.push( '/comment-create/' + `${game.id}` )"
        >
        Create Comment
    </v-btn>

 <v-card
    v-for="comment in comments" :key="comment.id"
    class="mx-auto mb-4"
    max-width="400"
  >
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ comment.text }}</v-list-item-title>
            <v-list-item-subtitle>
                <b>Author: </b>{{ comment.author_name }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
                <b>Author-Email: </b>{{ comment.author_email }}
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item> 

  </v-card>   




 </div> 

</template>

<script>

    import axios from '@/axios/axios'
   

    export default {
    data: () => ({
        game: '',
        comments: '',
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
    }),
    methods: {
        async getGame(){

            this.game_id = this.$route.params.id
    
            await axios
                .get('/api/answer/' + this.game_id)
                .then(response => {
                    this.game = response.data[0];
                    // console.log(this.game)
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });
        },       
        async getComments(){

            this.answer_id = this.$route.params.id

            await axios
                .get('/api/comment-answer/' + this.answer_id)
                .then(response => {
                    this.comments = response.data;
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

        }

    },
    created() {
        this.getGame()
        this.getComments()
        // this.getGameCards()
        // this.getUser()
    },
    updated (){
        // this.getUser()
    },
    mounted() {
        this.getGame()
        this.getComments()
    }

    }

</script>
