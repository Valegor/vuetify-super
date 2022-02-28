<template>
<div>
    <v-form
    ref="form"
    @submit.prevent="submit"
  >

  <v-container fluid>
        <v-textarea
          name="input-name"
          filled
          auto-grow
          v-model="name"
          label="Name"
          rows="1"
          row-height="20"
        ></v-textarea>
</v-container>

  <v-container fluid>
        <v-textarea
          name="input-email"
          filled
          auto-grow
          v-model="email"
          label="E-mail"
          rows="1"
          row-height="20"
          disabled
        ></v-textarea>
</v-container>  

  <v-container fluid>
        <v-textarea
           
          filled
          auto-grow
          v-model="phone"
          label="Phone"
          rows="1"
          row-height="20"
        ></v-textarea>
</v-container>

  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          name="input-perfect-connect"
          label="Предпочтительный способ связи:"
          v-model="perfect_connect"
        ></v-select>
      </v-col>

    </v-row>
  </v-container>

<v-container fluid>
        <v-textarea 
          name="input-goals"
          filled
          auto-grow
          v-model="goals"
          label="Goals"
          rows="7"
          row-height="20"
        ></v-textarea>
  </v-container>

  <v-container fluid>
        <v-textarea 
          name="input-problem"
          filled
          auto-grow
          v-model="problem"
          label="Problem"
          rows="7"
          row-height="20"
        ></v-textarea>
  </v-container>


<v-container fluid>
    <v-btn
      color="success"
      class="mr-4"
      type="submit"
    >
      Save
    </v-btn>

</v-container>

  </v-form>

<v-card
    class="mx-auto mb-4"
    max-width="400"
    tile
  >

</v-card>

  <v-dialog
      v-model="dialog"
      max-width="300"
    >
      <v-card>
        <v-card-title class="text-h6">
            Ваша заявка будет рассмотрена в ближайшее время.<br>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="close"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</div>
</template>

<script>

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    import axios from '@/axios/axios'

    export default {
    data: () => ({
        id: '',
        status: 0,
        name: '',
        email: '',        
        phone: '',
        perfect_connect: 'Телефон',
        goals: 'В процессе игры я хочу достичь следующих целей: ',
        problem: 'В процессе игры я хочу уделить внимание следующим проблемам: ',
        items: ['Телефон', 'E-mail', 'WhatsApp', 'Viber'],
        user: {},
        dialog: false,
    }),
    methods: {
        start(){
            this.email = this.$store.getters.USER_EMAIL
            this.getUser()
        },
        close(){
          this.dialog = false
          this.$router.push('/')
        },
        getUser(){
            axios
                .get('/api/user/' + this.email)
                .then(response => {
                    this.user = response.data;
                    this.name = this.user[0].name
                    console.log(this.author_name)
                })
                .catch(function(e){
                    // console.log('error')
                    this.error = e;
                });
        },
        submit(){
            console.log('submit')

            axios.post('/api/order-create', {  
                status: this.status,
                name: this.name,
                email: this.email,                           
                phone: this.phone,                           
                perfect_connect: this.perfect_connect,                           
                goals: this.goals,                           
                problem: this.problem,    
                })
                    .then( response => {
                        console.log(response)
                        this.dialog = true
                        setTimeout(() => { this.$router.push('/')}, 3000)
                        
                        // console.log('Updated Answer ID: ' + this.id)

                        // this.$router.push( '/answer-update-object/' + `${this.id}`)
                    })
                    .catch( err => {
                        // console.log('error')
                        console.log(err.response);
                }) 
        },
    },
    created () {

    }, 
    updated (){

    },
    mounted() {
        console.log('mounted')
        this.start()
    }

    }

</script>