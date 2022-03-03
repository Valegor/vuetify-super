<template>
<div>
    <v-form
    ref="form"
    @submit.prevent="submit"
  >

<v-container fluid>
        <v-textarea 
          name="input-7-7"
          filled
          auto-grow
          v-model="title"
          label="Заголовок"
          rows="1"
          row-height="20"
        ></v-textarea>
  </v-container>

  <v-container fluid>
        <v-textarea
          name="input-7-7-7"
          filled
          auto-grow
          v-model="subtitle"
          label="Описание краткое"
          rows="1"
          row-height="20"
        ></v-textarea>
</v-container>


<v-container fluid>
    <v-textarea
      name="input-7-1"
      filled
      label="Описание полное"
      v-model="notes"
      auto-grow
    ></v-textarea>
</v-container>



<v-container fluid>
    <v-btn
      color="success"
      class="mr-4"
      type="submit"
    >
      СОХРАНИТЬ
    </v-btn>

      <v-btn @click="editObject">
        РЕДАКТИРОВАТЬ КАРТЫ
      </v-btn>

</v-container>

  </v-form>


  <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Change Saved
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
        dialog: false,
        user_email: '',
    }),
    methods: {
        start(){
            // console.log('start')
            this.getAnswer()
        },
        submit(){
            console.log('submit')
            console.log('Title: ' + this.title) 

            this.id = this.$route.params.id

            axios.post('/api/answer-update-passport', {  
                id: this.id,                           
                title: this.title,
                subtitle: this.subtitle,  
                notes: this.notes,              
                })
                    .then( response => {
                        console.log(response)
                        this.dialog = true
                        // console.log('Updated Answer ID: ' + this.id)

                        // this.$router.push( '/answer-update-object/' + `${this.id}`)
                    })
                    .catch( err => {
                        // console.log('error')
                        console.log(err.response);
                }) 
        },
        editObject(){
            console.log('object')
            this.$router.push( '/answer-cards/' + `${this.id}`)
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
                    console.log('Subtitle: ' + this.subtitle)
                })
                .catch(function(e){
                    this.error = e;
                });              
        },
        // isLogin(){
        //    console.log('login')
        //     let user_email = this.$store.getters.USER_EMAIL
        //     let substr = '@'
        //     console.log('Lenght = ' + user_email)
        //     if (user_email.includes(substr)){
        //       console.log('is email')
        //     }else{
        //       console.log('not email')
        //     }
        // },
    },    
    created () {

    }, 
    updated (){
      // console.log('updated')
      // this.start()
    },
    mounted() {
        // this.isLogin()
        // console.log('mounted')
        this.start()
    }
    }

</script>