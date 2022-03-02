<template>

<v-toolbar-items class="hidden-sm-and-down">
    <div>


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

    <v-btn
        v-if="token"
        router-link to=/myanswers
        color="primary"
        depressed
    >
        <v-icon left>mdi-border-color</v-icon>
        Мои ответы
        
    </v-btn>

    <v-btn
        v-if="token"
        router-link to=/orders
        color="primary"
        depressed
    >
        <v-icon left>mdi-cat</v-icon>
        Заявка на игру
        
    </v-btn>

    <v-btn
        v-if="isAdmin"
        router-link to=/admin-answers        
        color="primary"
        depressed
    >
        <v-icon left>mdi-cash</v-icon>
        Админ
        
    </v-btn>

        
    <!-- LOGIN BUTTON -->

    <v-btn
            v-if="!token"
            depressed
            color="primary"
            router-link to=/login
            >
            <v-icon left>mdi-lock</v-icon>
            Логин
    </v-btn>


        <!-- REGISTRATION BUTTON -->

        <v-btn
            v-if="!token"
            depressed
            color="primary"
            router-link to=/registration
            >
            <v-icon left>mdi-star</v-icon>
            Регистрация
        </v-btn>

        <!-- LOGOUT BUTTON -->

        <v-btn
            v-if="token"
            depressed
            color="primary"
            @click="logout"
            >
            <v-icon left>mdi-home</v-icon>
            Выход
        </v-btn>

        </div>
    </v-toolbar-items>

</template>

<script>

import { logouts } from '../../axios/logout'

export default {
    data () {
    return {
        links: [
        {title: 'Игры', icon: 'mdi-gamepad-variant', url: '/games-categories'},
        {title: 'Публикации', icon: 'mdi-newspaper', url: '/posts-categories'},
        {title: 'Карты', icon: 'mdi-cards-playing-outline', url: '/cards-categories'},
        {title: 'Шаблоны', icon: 'mdi-checkbox-multiple-blank-outline', url: '/template-categories'},
        // {title: 'My Answers', icon: 'mdi-border-color', url: '/myanswers'},
        // {title: 'Create Order', icon: 'mdi-border-color', url: '/orders'},
        // {title: 'Admin', icon: 'mdi-border-color', url: '/admin-answers'},
        // {title: 'Get', icon: 'mdi-trending-up', url: '/get'},
        ],
        token: null,
        email: '',
        isAdmin: 0,
    }
    },
    mounted() {
            this.getToken()
            this.getEmail()
        },

        updated() {
            this.getToken()
            this.getEmail()
        },
    methods: {
            getToken(){
                this.token = localStorage.getItem('x_xsrf_token')
                // console.log('token: ' + this.token)
            },
            logout() {
                logouts()
            },
            getEmail(){
                let str = localStorage.getItem('user_email')
                let substr = this.$store.getters.adminEmail
                // console.log('substr: ' + substr)
                // let substr = 'medifit2000@yandex.ru';
                this.isAdmin = str.includes(substr);
            },           
        }
}
    
</script>

<style scoped>

</style>