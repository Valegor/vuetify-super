<template>
<div>
    <v-form
    ref="form"
  >

<v-container fluid>
        <v-textarea
          filled
          auto-grow
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
      auto-grow
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>
</v-container>


<v-container fluid>
    <v-textarea
      name="input-7-1"
      filled
      label="Notes"
      auto-grow
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
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

    export default {
    data: () => ({

    }),
    methods: {
        onSubmit(){

        },
        editObject(){

        },
    },    
    created () {

    }, 
    updated (){

    },
    mounted() {

    }
    }

</script>