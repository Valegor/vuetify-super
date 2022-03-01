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
      Маршрут Здоровья  <br> доктора Горбунова 
    </v-card-title>

    <v-card-subtitle>
      Увлекательная фитнес-игра.
    </v-card-subtitle>

    <div class="cookie_notice">
    Этот сайт использует файлы cookies и сервисы сбора технических данных посетителей (данные об IP-адресе, местоположении и др.) для обеспечения работоспособности и улучшения качества обслуживания. Продолжая использовать наш сайт, вы автоматически соглашаетесь с использованием данных технологий.
    <div>
        <a class="cookie_btn" id="cookie_close" href="#close">Согласиться</a>
        <router-link to="/private-policy" exact class="cookie_btn">Политика конфиденциальности</router-link>
    </div>
  </div>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <p>
          Вас приветствует автор игры «Маршрут здоровья доктора Горбунова». 
          Подробнее о моих работах можно ознакомиться на данной страничке.
          </p>

              <router-link to="/author" exact>
                <v-btn>
                  ОБ АВТОРЕ:
                </v-btn>
              </router-link>

         <hr> 
<p>
  «Маршрут здоровья доктора Горбунова» - обучающая игра по реабилитации и фитнесу. Вы можете описать Аватара (игровой персонаж), наделить его актуальными качествами и проблемами. В процессе игры добиться поставленных целей. Избежать осложнений и опасностей.

  Игра проходит очно или в онлайн-формате (Zoom). 
</p>


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

  <li>
    <router-link to="/orders" exact>подать заявку на игру</router-link>
  </li>
</ul>





<hr>

        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<style scoped src="@/assets/styles/cookies.css">
</style>

<script>

    import router from '@/router/index'

    export default {
      data: () => ({
        show: true,
      }),
      methods: {
  

getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
},
start(){
    let cookiecook = this.getCookie("cookiecook"),
    cookiewin = document.getElementsByClassName('cookie_notice')[0];    
    // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
    if (cookiecook != "no") {
        // показываем    
        cookiewin.style.display="block"; 
        // закрываем по клику
        document.getElementById("cookie_close").addEventListener("click", function(){
            cookiewin.style.display="none";    
            // записываем cookie на 1 день, с которой мы не показываем окно
            let date = new Date;
            date.setDate(date.getDate() + 1);    
            document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();               
        })
    }
}




      },
      created () {

      }, 
      updated (){

      },
      mounted() {
        this.start()
      }

    }

    // :src="require('../images/1.png')"
</script>
