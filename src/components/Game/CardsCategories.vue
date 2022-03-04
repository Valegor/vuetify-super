<template>

<div>

<div
    v-if="isLoading > 0"
    >

  <v-card
    class="mx-auto"
    max-width="400"
  >

    <v-container style="height: 400px;">
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="text-subtitle-1 text-center"
          cols="12"
        >
          данные загружаются...
        </v-col>
        <v-col cols="8">
          <v-progress-linear
            color="primary"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</div>

<div
    v-if="isLoading == 0"
>

<v-card
    v-for="category in categories.data" :key="category.id"
    class="mx-auto mb-4"
    max-width="400"
    tile
    :to="'/cards-category/' + category.id"
    color="rgb(181, 181, 177, 0.5)"
>
    <hr>
    <v-list-item>
        <v-list-item-content>
            <h3>{{ category.name }}</h3>
        </v-list-item-content>
    </v-list-item> 

    <v-img
      :src="serverUrl + category.img"
      max-height="125"
      contain
    ></v-img>

    <br>


</v-card>


<pagination 
    :data="categories" 
    @pagination-change-page="getResults"
    :limit=2
    size="small"
    align="center"
></pagination>

</div> 
</div> 

</template>

<script>

    import axios from '@/axios/axios'

    export default {
    data () {
        return {
            page: 1,
            categories: {},
            serverUrl: '',
            isLoading: 1,
        }
    },
    methods: {
        getResults(page = this.page) {
			axios.get('/api/card-categories?page=' + page)
				.then(response => {
					this.categories = response.data;
                    this.isLoading = 0
                    window.scrollTo(0,0);
				});

            this.serverUrl = this.$store.getters.serverUrl;    
		}
    },
    created() {
        this.getResults()
    },
    updated (){

    },
    mounted() {
        this.getResults()
    }

    }

</script>

