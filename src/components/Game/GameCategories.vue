<template>

<div>

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
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/games-category/' + category.id"
  >
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ category.category }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item> 
  </v-card>

 </div> 

</template>

<script>
    import axios from '@/axios/axios'

    export default {
    data: () => ({
        categories: ''
    }),
    methods: {
        async getGameCategory(){

            console.log('start')

            await axios
                .get("/api/game-categories/")
                .then(response => {
                    this.categories = response.data.data;
                })
                .catch(function(e){
                    console.log('error')
                    this.error = e;
                });

            // this.cat = this.category[0];



        }
    },
    updated (){
        // this.getGameCategory()
    },
    mounted() {
        this.getGameCategory()
    }

    }

</script>
