<template>

<div>


<div v-if="answerLenght > 0"> 
      

<div
v-for="answer in answers.data" :key="answer.id"
>
<v-card
    class="mx-auto mb-4"
    max-width="400"
    tile
    color="rgb(181, 181, 177, 0.5)"
  >
    <v-list-item>
        <v-list-item-content>
            <h3>{{ answer.title }}</h3> 
            <hr>
            <h5>{{ answer.subtitle }}</h5>
        </v-list-item-content>
    </v-list-item>    
</v-card>

<v-card
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/answer-cards/' + answer.id"
>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-subtitle>
                РЕДАКТИРВАТЬ КАРТЫ ОТВЕТА
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>      
</v-card>

<v-card
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/answer-update-passport/' + answer.id"
>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-subtitle>
                РЕДАКТИРОВАТЬ ПАСПОРТНУЮ ЧАСТЬ ОТВЕТА
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>      
</v-card>

<hr>

</div>


<br>

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
    import store from '@/store/index'

    export default {
    data () {
        return {
            answers: {},
            category: '',
            user_email: '',
            cat_id: '',
            show: false,
            serverUrl: '',
            answerLenght: 0,
            informer: 'Выполняется поиск. Подождите...'
        }
    },
    methods: {
        getResults(page = this.page) {

            this.user_email = this.$store.getters.USER_EMAIL

			axios.get('/api/answers-email/' + this.user_email)
				.then(response => {
					this.answers = response;
                    this.answerLenght = Object.keys(this.answers.data).length
                    if(this.answerLenght == 0) {this.informer = 'Ответов на шаблон не найдено!'}

				});       
		}
    },
    created() { 
    },
    updated (){

    },
    mounted() {
        this.email = localStorage.getItem('user_email')
        store.commit('SET_USER_EMAIL', this.email) 
        console.log('mounted')
        this.getResults()
    }

    }

</script>


