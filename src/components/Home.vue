<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="img/main.png"
      height="400px"
    ></v-img>

    <v-card-title>
      Маршрут Здоровья доктора <hr> Валерия Горбунова 
    </v-card-title>

    <v-card-subtitle>
      Увлекательная фитнес-игра.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        О ПРОЕКТЕ:
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Вас приветствует автор игры «Маршрут здоровья доктора Горбунова». 
          Подробнее о моих работах можно ознакомиться 
          <router-link to="/author" exact>на данной страничке</router-link>.

          

«Маршрут здоровья доктора Горбунова» - обучающая игра по реабилитации и фитнесу. Вы можете описать Аватара (игровой персонаж), наделить его актуальными качествами и проблемами. В процессе игры добиться поставленных целей. Избежать осложнений и опасностей.

Игра проходит очно или в онлайн-формате (Zoom). 

<hr>
Записаться на игру можно заполнив форму.<hr>


<router-link to="/orders" exact>ПОДАТЬ ЗАЯВКУ НА ИГРУ</router-link>

<hr>

На данном сайте вы можете:

<ul>
  <li>
    <router-link to="/rules" exact>подробнее ознакомиться с правилами игры</router-link>
  </li>
  <li>
    <router-link to="/cards-categories" exact>ознакомиться с основными картами, участвующими в игре</router-link>
  </li>
  <li>
    <router-link to="/template-categories" exact>посмотреть шаблоны маршрутов здоровья и ознакомиться с ответами наших пользователей</router-link>
  </li>
  <li>
    <router-link to="/posts-categories" exact>почитать публикации в нашем микроблоге</router-link>
  </li>
</ul>


Пройдя 

<router-link to="/registration" exact>регистрацию на сайте,</router-link>



вы сможете:

<ul>

  <li>
    <router-link to="/games-categories" exact>пройти обучающие викторины</router-link>
   
  </li>

  <li>
    <router-link to="/template-categories" exact>создать свои ответы на шаблоны</router-link>   
  </li>

</ul>





<hr>

        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>

    import router from '@/router/index'

    export default {
      data: () => ({
        show: false,
      }),
      methods: {
  
      },
      created () {

      }, 
      updated (){

      },
      mounted() {

      }

    }

    // :src="require('../images/1.png')"
</script>
