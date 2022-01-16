<template>

  <!-- <div id="app"> -->
    <!-- App.vue -->

<v-app>

  <v-navigation-drawer
      app
      temporary
      v-model="drawer"
  >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            MEDIFIT-GAMES
          </v-list-item-title>
          <v-list-item-subtitle>
            www.medifit.ru
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >

        <!-- LOGIN ITEM -->

        <v-list-item
          v-if="!token"
          router-link to=/login
        >
          <v-list-item-icon>
            <v-icon>mdi-lock</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <!-- REGISTER ITEM -->

        <v-list-item
          v-if="!token"
          router-link to=/registration
        >
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Registration</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <!-- LOGOUT ITEM -->

        <v-list-item
          v-if="token"
          @click="logout"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>




        <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


      </v-list>

  </v-navigation-drawer>
  <!-- <v-app-bar  app></v-app-bar> -->
    <v-app-bar
      app
      color="primary"
      dence
      dark
    >
      <!-- <v-app-bar-nav-icon> </v-app-bar-nav-icon> -->
        
      <v-app-bar-nav-icon 
          @click="drawer = !drawer"
          class="hidden-md-and-up"
      ></v-app-bar-nav-icon>


  <!-- <v-toolbar-title> -->
                    
        <v-btn
            depressed
            color="primary"
            router-link to=/
            >
            <v-icon left>mdi-home</v-icon>
              ГЛАВНАЯ
        </v-btn>
      <!-- </v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">

        <!-- <v-row
            align="center"
            justify="space-around"
        > -->
      
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          color="primary"
          depressed

        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        
        </v-btn>

        
        <!-- LOGON BUTTON -->

      <v-btn
            v-if="!token"
            depressed
            color="primary"
            router-link to=/login
            >
            <v-icon left>mdi-lock</v-icon>
              Login
      </v-btn>


        <!-- REGISTRATION BUTTON -->

        <v-btn
            v-if="!token"
            depressed
            color="primary"
            router-link to=/registration
            >
            <v-icon left>mdi-star</v-icon>
              Registration
        </v-btn>

        <!-- LOGOUT BUTTON -->

        <v-btn
            v-if="token"
            depressed
            color="primary"
            @click="logout"
            >
            <v-icon left>mdi-home</v-icon>
              Logout
        </v-btn>

    <!-- 
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>  
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>   
              </v-btn> -->
        <!-- </v-row> -->
      </v-toolbar-items>
      


      <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>


  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <router-view>router pages</router-view>
    </v-container>
  </v-main>


  <v-footer
    color="primary"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
        <div class="hidden-sm-and-down" >
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          color="primary"
          depressed
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        
        </v-btn>


    
        </div>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>MEDIFIT-GAMES</strong>
      </v-col>
    </v-row>
  </v-footer>
</v-app>
  <!-- </div> -->
</template>

<script>

  import axios from './axios/axios'

  export default {
    data () {
      return {
        links: [
        // {title: 'Login', icon: 'mdi-lock', url: '/login'},
        // {title: 'Registration', icon: 'mdi-star', url: '/registration'},
        // {title: 'Logout', icon: 'mdi-star', url: '/logout'},
        {title: 'Test', icon: 'mdi-trending-up', url: '/test'},

//        <a v-if="token" @click.prevent="logout" href="#">Logout</a>
        ],
        right: null,
        collapseOnScroll: true,
        drawer: false,
        token: null
      }
    },
    mounted() {
            this.getToken()
            // console.log('mounted')
        },

        updated() {
            this.getToken()
            // console.log('updated')
        },
    methods: {
            getToken(){
                this.token = localStorage.getItem('x_xsrf_token')
                // console.log(this.token)
            },

            logout() {
                axios.post('/logout')
                .then( res => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({ name: 'login' })
                    return res
                })
            }
        }
  }
</script>