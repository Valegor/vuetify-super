
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
        {{ this.category }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>

  <v-card
    v-for="post in categories" :key="post.id"
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/post/' + post.id"
  >
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ post.title }}</v-list-item-title>
            <v-list-item-subtitle>
                {{ post.subtitle }}
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
        name: 'PostCategories',
        categories: '',
        cat_id: '',
        category: ''
    }),
    methods: {
        async getPostCategory(){


            this.cat_id = this.$route.params.id

            console.log(this.cat_id)

            // console.log(this.$store.getters.serverUrl)

            
            await axios
                .get('/api/post-category/' + this.cat_id 
                //{
                // params: {
                //         id: this.cat_id
                //     }
                // }
                )
                .then(response => {
                    this.categories = response.data.data;
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

                this.category = this.categories[0].category

        }
    },
    created() {
        this.getPostCategory()
    },
    updated (){
        // this.getGameCategory()
    },
    mounted() {
        // this.getGameCategory()
    }

    }

</script>