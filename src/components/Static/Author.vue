<template>
      <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-text>
      <div></div>
      <p class="text-h4 text--primary">
       Горбунов Валерий Валерьевич
      </p>
      <v-img
      src="img/main.png"
      height="400px"
    ></v-img>
      <p>Врач по лечебной физкультуре и спортивной медицине, врач-физиотерапевт</p>
      <div class="text--primary">
          <ul>
            <li>Практическая работа в медицине — с 1994 года.</li>
            <li>Практическая работа в фитнесе — с 2000 года.</li>
        </ul>  
        <hr>
        <p class="text-h5 text--primary">
            контакты:
        </p>
            <h6><b>WhatsApp: </b>8-977-9399821</h6>
            <h6><b>E-mail: </b>medifit2000@yandex.ru</h6>
            <hr>     
      </div>
      
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        МОИ ПРОЕКТЫ
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
                <p class="text-h5 text--primary">
                    ПРОГРАММНЫЕ ПРОДУКТЫ
                </p>
                <p>
                <h5>МАША ПЛАСТИНЯША</h5>
                <p>
                    Обучающе развлекательная фитнес-игра платформер для смартфонов
                </p>
                <p>
                    <a href="https://play.google.com/store/apps/details?id=ru.plastilingame.mashaplastinyasha">  
                        GooglePlay
                     </a>
                </p>
              <p>
                    <a href="https://apps.apple.com/ru/app/маша-пластиняша/id1578164657">  
                        AppStore
                    </a>
              </p>
          
                <h5>ПРОГРАММНЫЙ КОМПЛЕКС ФИТНЕС-ТЕХНОЛОГ ПРО </h5>
                <p>
                    «ФИТНЕС ТЕХНОЛОГ ПРО» создан для профессионалов фитнеса. Позволяет эффективно использовать рабочее время, повысить качество фитнес услуг, сохранять и увеличивать клиентскую базу. Все это приводит к увеличению прибыльности фитнес и Wellness клуба. 
                </p>
                <h5>ПРОГРАММНЫЙ КОМПЛЕКС СПОРТ-ТЕХНОЛОГ ПРО </h5>
                <p>
                    Предназначен для составления программ тренировок в спорте и лечебной физкультуре.    
                </p>
                <h5>СПРАВОЧНИК СПЕЦИАЛИСТА ЛФК И ТРЕНЕРА </h5>
                <p>
                    Позволяет реализовывать современные методики тренировочных программ для ЛФК и различных видов спорта.   
                </p>
                <h5>ТРЕНИРОВОЧНАЯ СИСТЕМА АСТРОФИТНЕС-МЕДИФИТ</h5>
                <p>
                    AstroFitness основан на синтезе древних знаний восточной медицины и астрологии, а также современных разработок в области оздоровительного фитнеса и ЛФК. 
                </p>
                <hr>
        </v-card-text>

        <v-card-text class="pb-0">
          <p class="text-h5 text--primary">
            ПУБЛИКАЦИИ
          </p>
          <p>
            <ul>
                <li>Горбунов В.В., Валиуллин Р.Ч. - Популярная спортология. - 2007 г.</li>
                <li>Горбунов В.В. - Медифит — система медицинского фитнеса. - 2008 г.</li>
                <li>Горбунов В. В., Скорнякова А.В.   «Медифит — современные фитнес-технологии» - 2009 г.</li>
                <li>Горбунов В.В. - Физиотерапия в фитнесе. - 2013 г.</li>
            </ul>
          </p>
        <hr>
        </v-card-text>

        <v-card-actions class="pt-0">
        </v-card-actions>
      </v-card>

    </v-expand-transition>
  </v-card>

</template>

<script>

    export default {
    data: () => ({
        reveal: true,
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

</script>
