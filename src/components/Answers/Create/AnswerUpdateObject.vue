<template>
    <v-container>
        <v-row justify="center">
            ANSWER-UPDATE-OBJECT
        </v-row>
    </v-container>
</template>

<script>

    import axios from '@/axios/axios'

    export default {
    data: () => ({
        id: '',
        object: {},
    }),
    methods: {
        start(){
            console.log('Start Object Update')
            this.loadObject()
        },
        loadObject(){

                this.answer_id = this.$route.params.id

                axios.get('/api/answer/' + this.answer_id)
                .then(response => {
                    this.answer = response.data[0];
                    this.id = this.answer.id
                    this.object = JSON.parse(this.answer.object)
                    console.log('Id: ' + this.id)
                })
                .catch(function(e){
                    this.error = e;
                }); 
        },
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