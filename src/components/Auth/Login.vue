<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                prepend-icon="mdi-email"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
                :counter="6"
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  import axios from '../../axios/axios'
  export default {
    data () {
      return {
        email: '',
        password: '',
        valid: false,
        session_cookie: 'laravel_session',
        tocken_cookie: 'XSRF-TOKEN',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => emailRegex.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be equal or more than 6 characters'
        ]
      }
    },
    methods: {
    setCookie(c_name,value,expire) {
          var date=new Date()
          date.setSeconds(date.getSeconds()+expire)
          document.cookie=c_name+ "="+escape(value)+"; expires="+date.toGMTString()
          console.log(document.cookie)
    },
    delCookie(c_name){
      this.setCookie(c_name, "", -1)
    },
    onSubmit () {
        if (this.$refs.form.validate()) {
     
                    axios.get('sanctum/csrf-cookie').then(response => {
                    axios.post('/login', { email: this.email, password: this.password })
                    .then( r => {
                        // console.log('response')
                        // console.log(r.config.headers['X-XSRF-TOKEN'])
                        localStorage.setItem('x_xsrf_token', r.config.headers['X-XSRF-TOKEN'])
                        console.log('Login before: ' + this.$store.getters.USER_EMAIL)
                        this.$store.commit('SET_USER_EMAIL', this.email)
                        localStorage.setItem('user_email', this.email)
                        console.log('Login after: ' + this.$store.getters.USER_EMAIL)
                        this.$router.push({ name: 'home' })
                        return response
                    })
                    .catch( err => {
                        // console.log('error')
                        console.log(err.response);
                    })
                })
          // const user = {
          //   email: this.email,
          //   password: this.password
          // }
          // console.log(user)
        }
      }
    },
    mounted() {
      console.log('login mounted')
        // localStorage.removeItem('x_xsrf_token')
        this.delCookie(this.session_cookie)
        this.delCookie(this.tocken_cookie)
    }
  }
</script>