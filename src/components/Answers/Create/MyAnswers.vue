<template>

<div>


<v-card
    v-for="answer in answers.data" :key="answer.id"
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/answer-update/' + answer.id"
  >
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ answer.title }}</v-list-item-title>
            <v-list-item-subtitle>
                {{ answer.subtitle }}
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item> 

</v-card>


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

			axios.get('/api/answers-email/' + this.user_email)
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


