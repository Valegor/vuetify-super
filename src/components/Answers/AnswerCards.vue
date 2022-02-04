
<template v-slot:game.notes="{{game.notes}}">

<div>

SHOW-ANSWER-CARDS <br>
{{id}}

 </div> 

</template>

<script>

    import axios from '@/axios/axios'
   

    export default {
    data: () => ({
        id: '',
        game: {},
        cards: '',
        show: false,
        imageUrl: '',
        serverUrl: '',
        object: {},
        block_tek: 1,
        blocks_count: 1,
        locus_tek: 1,
        locuses_count: 1,
        cards_tek_locus: [],
        block_tek_title: '',
        block_tek_subtitle: '',
        locus_tek_title: '',
        locus_tek_subtitle: '',                        
    }),
    methods: {
        async getGame(){

            this.game_id = this.$route.params.id
    
            await axios
                .get('/api/answer/' + this.game_id)
                .then(response => {
                    this.object = response.data[0];

                    this.id = this.object.id
                    this.game = JSON.parse(this.object.object)
                    console.log('Game ID' + this.id)
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });
        },       
        async getComments(){

            this.answer_id = this.$route.params.id

            await axios
                .get('/api/comment-answer/' + this.answer_id)
                .then(response => {
                    this.comments = response.data;
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });

        }

    },
    created() {
        this.getGame()
        this.getComments()
        // this.getGameCards()
        // this.getUser()
    },
    updated (){
        // this.getUser()
    },
    mounted() {
        this.getGame()
        this.getComments()
    }

    }

</script>
