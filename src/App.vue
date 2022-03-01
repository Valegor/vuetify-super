<template>
    <div id="app">
    <!--Динамический компонент-->
        <component :is="layout">
            <keep-alive include="PostsCategories,GameCategories,CardsCategories,Cards">
                <router-view/>
            </keep-alive>
        </component>
    </div>
</template>

<script>
    import store from "./store/index"
    export default {
        data () {
            return {
                email: '',
            }
        },
        computed: {
            layout(){
                return this.$route.meta.layout || "default-layout"
            }
        },
    created() {
        console.log('application created')
        this.email = localStorage.getItem('user_email')
        console.log('Created email: ' + this.email)
        store.commit('SET_USER_EMAIL', this.email)
        }
    }
</script>