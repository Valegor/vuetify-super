<template v-slot:post.body="{{post.body}}">

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
    class="mx-auto mb-4"
    max-width="400"
    tile
    color="grey lighten-4"
  >
    <v-card-subtitle>
      <h3>{{ post.title }}</h3>
    </v-card-subtitle>

    <v-img
      :src="this.imageUrl"
      max-height="200"
      contain
    ></v-img>

    <v-card-subtitle>
      <hr>
      <b>Автор:</b> {{ post.author }} <br>
      <b>Дата публикации:</b> {{ post.date }} <br>
      <hr>
      <p class="body-1">
      <b>Описание:</b> {{ post.subtitle  }} <br>
      </p>
    </v-card-subtitle>


    <v-card-actions>
      <v-btn
        text
      >
        ЧИТАТЬ ПОЛНОСТЬЮ
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

        <v-card-text class="body-1">

   <div v-html="post.body"></div>

        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>


</div> 
</div>

</template>

<script>

    import axios from '@/axios/axios'

    export default {
    data: () => ({
        name: 'Post',
        post: '',
        show: false,
        imageUrl: '',
        isLoading: 1,
    }),
    methods: {
        async getPost(){


            this.post_id = this.$route.params.id

            console.log(this.post_id)

            // console.log(this.$store.getters.serverUrl)

            
            await axios
                .get('/api/post/' + this.post_id 
                //{
                // params: {
                //         id: this.cat_id
                //     }
                // }
                )
                .then(response => {
                    this.post = response.data[0];
                    this.isLoading = 0
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

                this.imageUrl = this.$store.getters.serverUrl + this.post.img

        }
    },
    created() {
        this.getPost()
    },
    updated (){
        // this.getGameCategory()
    },
    mounted() {
        // this.getGameCategory()
    }

    }

</script>