<template>

<div>

    Admin-Answers

<div
v-for="answer in answers.data" :key="answer.id"
>
<v-card
    class="mx-auto mb-4"
    max-width="600"
    tile
  >
    <v-list-item>
        <v-list-item-content>
            <div><h3>TITLE: {{ answer.title }}</h3></div>
            <hr>
        <div><h5>TITLE: {{ answer.subtitle }}</h5></div>
            <hr>
        <div>TITLE: {{ answer.notes }}</div>
        </v-list-item-content>
    </v-list-item>    
</v-card>

<v-card
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/admin-answer-cards/' + answer.id"
>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-subtitle>
                SHOW ANSWERS CARDS
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>      
</v-card>

<hr>

</div>


<br>

</div> 

</template>

<script>

    import axios from '@/axios/axios'

    export default {
    data () {
        return {
            answers: {},
            category: '',
            user_email: '',
            cat_id: '',
            show: false,
            serverUrl: '',

        }
    },
    methods: {
        getResults(page = this.page) {

            this.user_email = this.$store.getters.USER_EMAIL

			axios.get('/api/answers-hidden/' + this.user_email)
				.then(response => {
					this.answers = response;
				});
        
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


