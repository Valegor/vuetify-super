
<template v-slot:card.notes="{{card.notes}}">

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
  >
    <v-img
      :src="this.imageUrl"
      max-height="320"
      contain
      @click="this.changeImg"
      color="rgb(181, 181, 177, 0.5)"
    ></v-img>

    <v-card-title>
      {{  }}
    </v-card-title>

    <hr>

    <v-card-subtitle>
      <b>Категория:</b> {{ card.category }} <br> 
      <hr>
          <v-img
                :src="this.image3Url"
                max-height="225"
                contain
            ></v-img>     
    </v-card-subtitle>



    <v-card-actions>
      <v-btn
        text
      >
        ОПИСАНИЕ КАРТЫ
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

   <div v-html="card.notes"></div>

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
        card: '',
        show: false,
        image1Url: '',
        image2Url: '',
        image3Url: '',
        imageUrl: '',
        isLoading: 1,
    }),
    methods: {
        async getPost(){


            this.card_id = this.$route.params.id

            console.log(this.card_id)

            // console.log(this.$store.getters.serverUrl)

            
            await axios
                .get('/api/card/' + this.card_id 
                //{
                // params: {
                //         id: this.cat_id
                //     }
                // }
                )
                .then(response => {
                    this.card = response.data[0];
                    this.isLoading = 0
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

                this.image1Url = this.$store.getters.serverUrl + this.card.img1
                this.image2Url = this.$store.getters.serverUrl + this.card.img2 
                this.image3Url = this.$store.getters.serverUrl + this.card.backimg

                this.imageUrl = this.image1Url

        },
        changeImg(){
            this.imageUrl = this.image2Url
            setTimeout(() => {  this.imageUrl = this.image1Url; }, 700);
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