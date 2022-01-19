<template>
    <div id="app">
    <!--Динамический компонент-->
        <component :is="layout">
            <keep-alive include="GameCategories">
                <router-view/>
            </keep-alive>
        </component>
    </div>
</template>

<script>
    export default {
        computed: {
            layout(){
                return this.$route.meta.layout || "default-layout"
            }
        }
    }
</script>