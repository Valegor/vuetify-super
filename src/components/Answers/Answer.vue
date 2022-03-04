
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
    color="blue lighten-2"
  >

    <v-card-subtitle>
        <h3>{{ object.title }}</h3> 
    </v-card-subtitle>

  </v-card>

  <v-card
    class="mx-auto"
    max-width="400"
  >

    <v-card-subtitle>
      <b>Описание:</b> {{ object.subtitle  }} <br>
      <hr>
      <b>Автор:</b> {{ object.author }} <br>
      <hr>
      <b>Название шаблона:</b> {{ object.template_name }} <br>
      <hr>
      <b>Дата публикации:</b> {{ object.date }} <br>
      <hr>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        text
      >
        Подробное описание ответа:
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
            <div v-html="object.notes"></div>
        </v-card-text>

      </div>
    </v-expand-transition>
  </v-card>

  <v-card
    class="mx-auto"
    max-width="400"
    tile
    color="rgb(181, 181, 177, 0.5)"
  >
    <v-card-actions>
      <v-btn
        text
        :to="'/show-answer-cards/' + object.id"
      >
        ПОСМОТРЕТЬ КАРТЫ ОТВЕТА:
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        :to="'/show-answer-cards/' + object.id"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>  


  </v-card>

      <hr>

    <v-card
    class="mx-auto"
    max-width="400"
    color="rgb(181, 181, 177, 0.5)"
  >

    <v-card-subtitle>
        <v-btn
        color="grey lighten-5"
        @click.prevent="$router.push( '/comment-create/' + `${object.id}` )"
        >
          СОЗДАТЬ КОММЕНТАРИЙ
        </v-btn>
    </v-card-subtitle>

  </v-card>



 <v-card
    v-for="comment in comments" :key="comment.id"
    class="mx-auto mb-4"
    max-width="400"
  >
    <hr>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ comment.text }}</v-list-item-title>
            <hr>
            <v-list-item-subtitle>
                <b>Автор: </b>{{ comment.author_name }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
                <b>Email: </b>{{ comment.author_email }}
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item> 

  </v-card>   

 </div> 
 </div> 

</template>

<script>

    import axios from '@/axios/axios'
   

    export default {
    data: () => ({
        game: {},
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
        block_tek: 1,
        blocks_count: 1,
        locus_tek: 1,
        locuses_count: 1,
        cards_tek_locus: [],
        block_tek_title: '',
        block_tek_subtitle: '',
        locus_tek_title: '',
        locus_tek_subtitle: '',  
        isLoading: 1,                       
    }),
    methods: {
        async getGame(){

            this.game_id = this.$route.params.id
    
            await axios
                .get('/api/answer/' + this.game_id)
                .then(response => {
                    this.object = response.data[0];
                    this.isLoading = 0
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
