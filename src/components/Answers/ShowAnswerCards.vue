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
    <br>

 <v-card
    class="mx-auto"
    max-width="400"
    color="blue lighten-2"
  >
         <v-card-subtitle>
            <h3>{{ block_tek_title }}</h3>  
         </v-card-subtitle>
 </v-card>

<v-card
    class="mx-auto"
    max-width="400"
    color="rgb(181, 181, 177, 0.5)"
  >
        <v-card-subtitle>
        <b>Описание блока: </b> {{ block_tek_subtitle }} <br>     
        </v-card-subtitle>
 </v-card>
 

<v-card
        v-for="locus in locuses" :key="(locuses.indexOf(locus) + 1)"
        class="mx-auto mb-4"
        max-width="400"
        tile
        color="rgb(181, 181, 177, 0.5)"
    > 
    <div v-if="!locus.locus_card_image1.includes(gray)">

    <v-list-item>
        <hr>
    </v-list-item> 

    <v-img
      :src="serverUrl + locus.locus_card_image1"
      max-height="225"
      contain
    ></v-img>

    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>Локус шаблона: {{ locus.locus_name }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item> 
    </div>
</v-card>  


<v-card
    class="mx-auto"
    max-width="400"
  >

      <v-list-item>
        <v-list-item-content>

        <v-row 
        no-gutters
        >

        <v-col
            class="d-flex justify-center mb-6"
        >

        <v-btn
            v-if="block_tek > 1"
            color="success"
            dark
            v-on:click="stepDown"
            >
                НАЗАД
            </v-btn>

        </v-col>

        <v-col
            md="6"
        >


        </v-col>        

         <v-col
            class="d-flex justify-center mb-6"
        >
            <v-btn
            v-if="block_tek < blocks_count"
            color="success"
            dark
            v-on:click="stepUp"
            >
                ВПЕРЕД
            </v-btn>
        </v-col>


        </v-row>



        </v-list-item-content>

    </v-list-item> 
</v-card>

<v-card
    v-if="block_tek == blocks_count"
    class="mx-auto"
    max-width="400"
    color="rgb(181, 181, 177, 0.5)"
  >
        <v-card-subtitle>
        <b>ЭТО ПОСЛЕДНЯЯ СТРАНИЦА ШАБЛОНА</b>     
        </v-card-subtitle>
 </v-card>

 </div> 
</div> 

</template>

<script>

    import axios from '@/axios/axios'
   

    export default {
    data: () => ({
        id: '',
        gray: 'GRAY',
        game_id: '',
        serverUrl: '',
        game: {},
        cards: {},
        ans: '',
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
        dialog: false,  
        count: 0,  
        tek_block: 0,
        tek_index: 0,
        tek_locus_card_code: '',
        tek_locus_card_name: '',
        tek_locus_card_image1: '', 
        isLoading: 1,              
    }),
    methods: {
        start(){
            this.serverUrl = this.$store.getters.serverUrl
            this.getBlock(1)
        },
        stepUp(){
            console.log('step up')
            if (this.block_tek < this.blocks_count){
                this.block_tek = this.block_tek + 1
                this.getBlock(this.block_tek)
                window.scrollTo(0,0);
            }
        },
        stepDown(){
            console.log('step down')
            if (this.block_tek > 1){
            this.block_tek = this.block_tek - 1
            this.getBlock(this.block_tek)
            window.scrollTo(0,0);
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
                    this.isLoading = 0
                    // console.log('Game ID' + this.id)
                    this.start()
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });
        },
        getBlockLocuses(){
            this.locuses = this.game.blocks[this.block_tek - 1].locuses
            this.locuses.forEach(function(locus, index) {
                if(locus.locus_card_code == ""){
                    locus.locus_card_code = "C_COLOR_GRAY"
                }
                if(locus.locus_card_name == ""){
                    locus.locus_card_name = "КАРТА СЕРОГО ЦВЕТА"
                }
                if(locus.locus_card_image1 == ""){
                    locus.locus_card_image1 = "cards/C_COLOR_GRAY_.jpg"
                }
                // console.log('Index: ', index)
                // console.log('Locus Ponts: ', locus.locus_points )
                locus.locus_points  = index
                
            })
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




