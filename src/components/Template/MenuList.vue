<template>
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
            <v-list-item-title>Логин</v-list-item-title>
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
            <v-list-item-title>Регистрация</v-list-item-title>
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
            <v-list-item-title>Выход</v-list-item-title>
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

        <router-link to="/myanswers" exact>
        <v-list-item
        v-if="token"
        >
        <v-list-item-icon>
            <v-icon>mdi-border-color</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
             
            <v-list-item-title>Мои ответы</v-list-item-title>
            
        </v-list-item-content>
        </v-list-item>
        </router-link>

        <router-link to="/orders" exact>
        <v-list-item
        v-if="token"
        >
        <v-list-item-icon>
            <v-icon>mdi-cat</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
             
        <v-list-item-title>Заявка на игру</v-list-item-title>
        
        </v-list-item-content>
        </v-list-item>
        </router-link>

        <router-link to="/admin-answers" exact>
        <v-list-item
        v-if="isAdmin"
        >
        <v-list-item-icon>
            <v-icon>mdi-cash</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
             
        <v-list-item-title>Администрирование</v-list-item-title>
        
        </v-list-item-content>
        </v-list-item>
        </router-link>
        
    </v-list>
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
                // console.log('Email: ' + this.email + ' isAdmin: ' + this.isAdmin)
            },
        }
}
    
</script>

<style scoped>

</style>