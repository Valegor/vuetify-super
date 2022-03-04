
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
    class="mx-auto mb-4 indigo lighten-4"
    max-width="400"
    tile
>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title
        class="h5"
        >
        ДОСТУПНЫЕ КАТЕГОРИИ ИГР
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>

   <v-card
    v-for="category in categories" :key="category.id"
    color="rgb(181, 181, 177, 0.5)"
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/games-category/' + category.id"
  >

    <v-list-item>
        <v-list-item-content>
            <v-list-item-title><h3>{{ category.category }}</h3></v-list-item-title>
        </v-list-item-content>
    </v-list-item> 

    <v-img
      :src="serverUrl + category.img"
      max-height="150"
      contain
    ></v-img>



      <v-spacer></v-spacer>


    <br>

  </v-card>


 </div> 
 </div> 
 
</template>

<script>
    import axios from '@/axios/axios'

    export default {
    data: () => ({
        name: 'GameCategories',
        categories: '',
        show: false,
        serverUrl: '',
        isLoading: 1,
    }),
    methods: {
        async getGameCategory(){

            console.log('start')

            await axios
                .get("/api/game-categories/")
                .then(response => {
                    this.categories = response.data.data;
                    this.isLoading = 0
                    window.scrollTo(0,0)
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

            this.serverUrl = this.$store.getters.serverUrl;

        }
    },
    created() {
        this.getGameCategory()
    },
    updated (){
        // this.getGameCategory()
    },
    mounted() {
        // this.getGameCategory()
    }

    }

</script>
