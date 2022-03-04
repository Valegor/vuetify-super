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
    v-for="post in posts.data" :key="post.id"
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/post/' + post.id"
    color="rgb(181, 181, 177, 0.5)"
  >
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ post.title }}</v-list-item-title>
            <v-list-item-subtitle>
                {{ post.subtitle }}
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item> 

    <v-img
      :src="serverUrl + post.img"
      max-height="225"
      contain
    ></v-img>

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
            isLoading: 1,
        }
    },
    methods: {
        getResults(page = this.page) {

            this.cat_id = this.$route.params.id

			axios.get('/api/post-category/' + this.cat_id + '?page=' + page)
				.then(response => {
					this.posts = response.data;
                    this.isLoading = 0
                    window.scrollTo(0,0)
				});
        
            
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