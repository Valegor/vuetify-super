<template>
    <v-container>
        <v-row justify="center">
            ANSWER-CREATE
        </v-row>
    </v-container>
</template>

<script>

    import axios from '@/axios/axios'

    export default {
    data: () => ({
        exist_answer: '',
        author_email: '',
        template_id: '',
    }),
    methods: {
        start(){
            console.log('start create template')
            this.exist()
        },
        create(){

            console.log('create')


        },
        edit(){

            console.log('edit')


        },
        exist(){
            
            this.template_id = this.$route.params.id
            this.author_email = this.$store.getters.USER_EMAIL

            //проверить есть ли у этого автора незавершенный ответ на дынный шаблон

            axios.post('/api/answer-check', { author_email: this.author_email, template_id: this.template_id })
                    .then( response => {
                        this.exist_answer = response.data

                        console.log(this.exist_answer)

                        if(this.exist_answer == 1){
                            this.edit()
                        } else { this.create() }

                        return response
                    })
                    .catch( err => {
                        // console.log('error')
                        console.log(err.response);
                    })  
        }

    },
    created () {
        
    }, 
    updated (){
    
    },
    mounted() {
        this.start()
    }

    }

</script>