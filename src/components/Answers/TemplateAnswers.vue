<template>

<div>

<div v-if="answerLenght > 0"> 

<div
    v-for="post in posts.data" :key="post.id"
>

<v-card  
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/answer/' + post.id"
    color="rgb(181, 181, 177, 0.5)"
  >

    <v-list-item>
        <v-list-item-content>
            <h5>{{ post.title }}</h5>  
        </v-list-item-content>
    </v-list-item> 

 </v-card> 

<v-card   
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/answer/' + post.id"
  >
    <v-list-item>
        <v-list-item-content>          
                {{ post.subtitle }}
            <hr>
            <v-list-item-subtitle>
                <b>Автор: </b>{{ post.author_name }} <br> 
                <hr>
                <b>E-mail: </b>{{ post.author_email }}
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item> 

</v-card>

</div>

<br>

<pagination 
    :data="posts" 
    @pagination-change-page="getResults"
    :limit=2
    size="small"
    align="center"
></pagination>

</div>
<div v-else>
    <v-card  
    class="mx-auto mb-4"
    max-width="400"
    tile
    color="rgb(181, 181, 177, 0.5)"
  >

    <v-list-item>
        <v-list-item-content>
            <h5>{{ informer }}</h5>  
        </v-list-item-content>
    </v-list-item> 

 </v-card> 
    
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
            answerLenght: 0,
            informer: 'Выполняется поиск. Подождите...'

        }
    },
    methods: {
        getResults(page = this.page) {

            this.cat_id = this.$route.params.id

			axios.get('/api/template-answers/' + this.cat_id + '?page=' + page)
				.then(response => {
					this.posts = response.data;
                    this.answerLenght = Object.keys(this.posts.data).length
                    if(this.answerLenght == 0) {this.informer = 'Ответов на шаблон не найдено!'}
                    // console.log(this.answerLenght)
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