
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
        ДОСТУПНЫЕ КАТЕГОРИИ СТАТЕЙ
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>

  <v-card
    v-for="category in categories" :key="category.id"
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/posts-category/' + category.id"
  >
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ category.name }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item> 
  </v-card>

 </div> 

</template>

<script>
    import axios from '@/axios/axios'

    export default {
    data: () => ({
        name: 'PostCategories',
        categories: ''
    }),
    methods: {
        async getPostCategoryes(){

            console.log('categoryes')

            await axios
                .get("/api/posts-categories/")
                .then(response => {
                    this.categories = response.data.data;
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

        }
    },
    created() {
        this.getPostCategoryes()
    },
    updated (){
        // this.getGameCategory()
    },
    mounted() {
        // this.getGameCategory()
    }

    }

</script>

