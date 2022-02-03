<template>
    <v-container>
        <v-row justify="center">
            ANSWER-UPDATE-PASSPORT

        <v-btn
        color="success"
        dark
        @click="redirect"
        >
        Create Answer
        </v-btn>
        </v-row>
    </v-container>
</template>

<script>

    export default {
    data: () => ({
        id: '10',
    }),
    methods: {
        redirect(){
            this.id = 15
            this.$router.push( '/answer-update-object/' + `${this.id}`)
        }
    },
    created () {

    }, 
    updated (){

    },
    mounted() {

    }
    }

</script>