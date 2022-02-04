<template>
<div>
    <v-form
    ref="form"
  >

<v-container fluid>
        <v-textarea
          filled
          auto-grow
          v-model="title"
          label="Title"
          rows="1"
          row-height="20"
        ></v-textarea>
  </v-container>

  <v-container fluid>
    <v-textarea
      name="input-7-1"
      filled
      rows="3"
      label="Subtitle"
      v-model="subtitle"
      auto-grow
    ></v-textarea>
</v-container>


<v-container fluid>
    <v-textarea
      name="input-7-1"
      filled
      label="Notes"
      v-model="notes"
      auto-grow
      value=""
    ></v-textarea>
</v-container>



<v-container fluid>
    <v-btn
      color="success"
      class="mr-4"
      @click="onSubmit"
    >
      Save
    </v-btn>

      <v-btn @click="editObject">
        Edit Object
      </v-btn>

</v-container>

  </v-form>
</div>
</template>

<script>

    import axios from '@/axios/axios'

    export default {
    data: () => ({
        id: '',
        answer: '',
        title: '',
        subtitle: '',
        notes: '',
    }),
    methods: {
        start(){
            console.log('start')
            this.getAnswer()
        },
        onSubmit(){

        },
        editObject(){

        },
        getAnswer(){
            
            this.answer_id = this.$route.params.id
            
            axios.get('/api/answer/' + this.answer_id)
                .then(response => {
                    this.answer = response.data[0];
                    this.id = this.answer.id
                    this.title = this.answer.title
                    this.subtitle = this.answer.subtitle
                    this.notes = this.answer.notes
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