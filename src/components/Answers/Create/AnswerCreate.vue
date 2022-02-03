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
        author_id: '',
        author_name: '',
        aviable: 0,
        title: '',
        subtitle: '',
        notes: '',
        object: {}
    }),
    methods: {
        start(){
            console.log('start create template')
            this.exist()
        },
        create(){

            console.log('create')
            this.getAuthor()
            this.getObject()

            // axios.post('/api/answer-create', {                
            //     author_email: this.author_email,
            //     template_id: this.template_id,                 
            //     })
            //         .then( response => {
            //             console.log(response)
            //             // return response
            //         })
            //         .catch( err => {
            //             // console.log('error')
            //             console.log(err.response);
            //     }) 


        },
        edit(){

            console.log('edit')


        },
        getAuthor(){

            axios
                .get('/api/user/' + this.author_email)
                .then(response => {
                    this.author_name = response.data[0].name;
                    this.author_id = response.data[0].id;

                    console.log('Author id: ' + this.author_id)
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

        },
        getObject(){

            this.template_id = this.$route.params.id

            axios
                .get('/api/template/' + this.template_id)
                .then(response => {

                    this.object = response.data[0].object;

                    // console.log('Object: ' + this.object)
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

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