<template>

<div>


<v-card
    v-for="post in posts.data" :key="post.id"
    class="mx-auto mb-4"
    max-width="400"
    tile
    color="rgb(181, 181, 177, 0.5)"
  >
    <v-list-item>
        <v-list-item-content>
            <h5>{{ post.name }}</h5>   
            <hr>
            {{ post.subtitle }}
        </v-list-item-content>
    </v-list-item> 
    <hr>
    <v-img
      :src="serverUrl + post.img"
      max-height="225"
      contain
    ></v-img>
    <hr>
    <v-list-item
    :to="'/template/' + post.id"
    >
        <v-list-item-content>
            <v-list-item-title>ПОДРОБНЕЕ О ШАБЛОНЕ</v-list-item-title>
        </v-list-item-content>
    </v-list-item> 
    <hr>
        <v-list-item
    :to="'/template-answers/' + post.id"
    >
        <v-list-item-content>
            <v-list-item-title>ПОСМОТРЕТЬ ОТВЕТЫ</v-list-item-title>
        </v-list-item-content>
    </v-list-item> 


                    

    <br>

  </v-card>
  
  

  <br>

<pagination 
    :data="posts" 
    @pagination-change-page="getResults"
    :limit=2
    size="small"
    align="center"
></pagination>

</div> 

</template>

<script>

    import axios from '@/axios/axios'

    export default {
    data () {
        return {
            posts: {},
            category: '',
            page: 1,
            cat_id: '',
            show: false,
            serverUrl: '',

        }
    },
    methods: {
        getResults(page = this.page) {

            this.cat_id = this.$route.params.id

			axios.get('/api/template-category/' + this.cat_id + '?page=' + page)
				.then(response => {
					this.posts = response.data;
				});
        
            // console.log(this.posts)
            
            this.serverUrl = this.$store.getters.serverUrl;
		}
    },
    created() {

    },
    updated (){

    },
    mounted() {
        this.getResults()
    }

    }

</script>