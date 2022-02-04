
<template v-slot:game.notes="{{game.notes}}">

<div>

<v-card
    class="mx-auto"
    max-width="344"
  >
        <v-card-title>
        {{ block_tek_title }}
        </v-card-title>
        <hr>
        <v-card-subtitle>
        <b>Block subtitle:</b> {{ block_tek_subtitle }} <br>     
        </v-card-subtitle>
 </v-card>
    <br>
    <v-card
        v-for="locus in locuses" :key="locus.locus_name"
        class="mx-auto mb-4"
        max-width="344"
        tile
    >
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ locus.locus_name }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item> 
</v-card>

<br>
<v-card
    class="mx-auto"
    max-width="344"
  >
        <v-btn
        color="success"
        dark
        v-on:click="stepDown"
        >
        Back
        </v-btn>

        <v-btn
        color="success"
        dark
        v-on:click="stepUp"
        >
        Fwd
        </v-btn>
</v-card>

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
        locuses: {},                       
    }),
    methods: {
        start(){
            this.getBlock(1)
        },
        stepUp(){
            console.log('step up')
            if (this.block_tek < this.blocks_count){
                this.block_tek = this.block_tek + 1
                this.getBlock(this.block_tek)
            }
        },
        stepDown(){
            console.log('step down')
            if (this.block_tek > 1){
            this.block_tek = this.block_tek - 1
            this.getBlock(this.block_tek)
            }
        },
        getBlock(block_id){
            this.block_tek = block_id
            this.blocks_count = this.blockCount()
            this.block_tek_title = this.tekBlockName()
            this.block_tek_subtitle = this.tekBlockSubtitle()
            this.locuses_count = this.countLocus()
            this.getBlockLocuses()
        },
        getLocus(locus_id){
            this.locus_tek = locus_id
            this.block_tek_subtitle = this.tekBlockSubtitle()
        },
        getGame(){

            this.game_id = this.$route.params.id
    
            axios
                .get('/api/answer/' + this.game_id)
                .then(response => {
                    this.object = response.data[0];

                    this.id = this.object.id
                    this.game = JSON.parse(this.object.object)
                    console.log('Game ID' + this.id)
                    this.start()
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });
        },
        getBlockLocuses(){
            this.locuses = this.game.blocks[this.block_tek - 1].locuses
        },
        blockCount(){
            return Object.keys(this.game.blocks).length
        },
        countLocus() {
            return Object.keys(this.game.blocks[this.block_tek - 1].locuses).length
        },
        getLocusCards(){
            return this.game.blocks[this.block_tek - 1].locuses[this.locus_tek - 1].cards
        },
        tekBlockName() {
            return this.game.blocks[this.block_tek  - 1].name
        },
        tekBlockSubtitle() {
            return this.game.blocks[this.block_tek - 1].notes
        },
        tekLocusTitle(){
            return this.game.blocks[this.block_tek - 1].locuses[this.locus_tek - 1].locus_name
        },
        tekLocusSubTitle(){
            return this.game.blocks[this.block_tek - 1].locuses[this.locus_tek - 1].locus_notes
        },
    },
    created() {
        // this.getGame()
        // this.getGameCards()
        // this.getUser()
    },
    updated (){
        // this.getUser()
    },
    mounted() {
        this.getGame()
    }

    }

//DATA-ARRAY
//unic-id
//block-number
//block-title
//block-subtitle
//locus-number
//locus-title
//locus-subtitle
//img
//card-name
//card-code    

</script>




