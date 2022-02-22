<template>

      <!-- MAIN  -->
        <div class="app">
            CONVERT

            <hr>

    <v-btn
        color="success"
        dark
        @click="convert_template"
        >
        Convert Template
    </v-btn>

    <hr>  

        <v-btn
        color="success"
        dark
        @click="convert_game"
        >
        Convert Game
    </v-btn>


        </div>

</template>

<script>

  import axios from '@/axios/axios'

  export default {
    data: () => ({
        object: {},
        id: '',                        
    }),
    methods: {
        convert_template(){
          console.log('converted')

          this.id = 9

          // this.object = 



          console.log('Blocks Count: ' + Object.keys(this.object.blocks).length)

          // this.object = JSON.stringify(this.object)
          // this.object = JSON.parse(this.object)

          console.log('Blocks Count 2: ' + Object.keys(this.object.blocks).length)

          axios.post('/api/convert-template', {  
                id: this.id,
                object: JSON.stringify(this.object),                         
                })
                    .then( response => {
                        console.log(response)
                    })
                    .catch( err => {
                        // console.log('error')
                        console.log(err.response);
                }) 

        },
        convert_game(){
          console.log('converted')

          this.id = 5

          // this.object = 

 this.object = {
    title: {
        program_name: "",
        notes: "",
    },
    author: {
        name: "",
        email: ""
    },
    tags: [
           
    ],
    blocks:[
        {
            name: "Условия игры",
            notes: "В данном разделе указываются основные цели игры и проблемы, которые должен решить Аватар",
            locuses: [
        {
                    locus_name: "Основная проблема",
                    locus_notes: "Основные проблемы, которые требуют незамедлительного решения",
                    locus_category: "проблема",
                    locus_backimg: "C_PROBLEM_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Проблема",
                    locus_notes: "Проблемы, которые желательно решить в процессе игры",
                    locus_category: "проблема",
                    locus_backimg: "C_PROBLEM_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Проблема",
                    locus_notes: "Проблемы, которые желательно решить в процессе игры",
                    locus_category: "проблема",
                    locus_backimg: "C_PROBLEM_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Проблема",
                    locus_notes: "Проблемы, которые желательно решить в процессе игры",
                    locus_category: "проблема",
                    locus_backimg: "C_PROBLEM_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Проблема",
                    locus_notes: "Проблемы, которые желательно решить в процессе игры",
                    locus_category: "проблема",
                    locus_backimg: "C_PROBLEM_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Проблема",
                    locus_notes: "Проблемы, которые желательно решить в процессе игры",
                    locus_category: "проблема",
                    locus_backimg: "C_PROBLEM_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
         }
            ]
        },
        {
            name: "Маршрут достижения цели",
            notes: "В данном разделе мы определяем станции маршрута — станцию прибытия, отправную точку и точку, где находится Аватар",
            locuses: [
        {
                    locus_name: "Станция отправления",
                    locus_notes: "Станция, с которой Вы начали путешествие по маршруту здоровья",
                    locus_category: "маршрут здоровья",
                    locus_backimg: "C_FREAK001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Станция назначения",
                    locus_notes: "Станция, на которую Вы следуете маршрутом здоровья",
                    locus_category: "маршрут здоровья",
                    locus_backimg: "C_FREAK001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
         }
            ]
        },
        {
            name: "Тестирование",
            notes: "В данном разделе определяются основные показатели, которые необходимо отслеживать при прохождении игры",
            locuses: [
        {
                    locus_name: "Показатель здоровья",
                    locus_notes: "Показатели, которые важно отслеживать во время путешествия по маршруту здоровья",
                    locus_category: "показатели",
                    locus_backimg: "C_TEST001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Показатель здоровья",
                    locus_notes: "Показатели, которые важно отслеживать во время путешествия по маршруту здоровья",
                    locus_category: "показатели",
                    locus_backimg: "C_TEST001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Показатель здоровья",
                    locus_notes: "Показатели, которые важно отслеживать во время путешествия по маршруту здоровья",
                    locus_category: "показатели",
                    locus_backimg: "C_TEST001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Показатель здоровья",
                    locus_notes: "Показатели, которые важно отслеживать во время путешествия по маршруту здоровья",
                    locus_category: "показатели",
                    locus_backimg: "C_TEST001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Показатель здоровья",
                    locus_notes: "Показатели, которые важно отслеживать во время путешествия по маршруту здоровья",
                    locus_category: "показатели",
                    locus_backimg: "C_TEST001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Показатель физического развития",
                    locus_notes: "Показатели, которые важно отслеживать во время путешествия по маршруту здоровья",
                    locus_category: "показатели",
                    locus_backimg: "C_TEST001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Показатель физического развития",
                    locus_notes: "Показатели, которые важно отслеживать во время путешествия по маршруту здоровья",
                    locus_category: "показатели",
                    locus_backimg: "C_TEST001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Показатель физического развития",
                    locus_notes: "Показатели, которые важно отслеживать во время путешествия по маршруту здоровья",
                    locus_category: "показатели",
                    locus_backimg: "C_TEST001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Показатель физического развития",
                    locus_notes: "Показатели, которые важно отслеживать во время путешествия по маршруту здоровья",
                    locus_category: "показатели",
                    locus_backimg: "C_TEST001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Показатель физического развития",
                    locus_notes: "Показатели, которые важно отслеживать во время путешествия по маршруту здоровья",
                    locus_category: "показатели",
                    locus_backimg: "C_TEST001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
         }
            ]
        },
        {
            name: "Ресурсы",
            notes: "Ресурсы, необходимые для успешного достижения цели и решения Ваших проблем",
            locuses: [
        {
                    locus_name: "Материальные ресурсы",
                    locus_notes: "Материальные ресурсы необходимые для успешного достижения цели и решения Ваших проблем и достижения целей",
                    locus_category: "ресурс",
                    locus_backimg: "C_RESOURCE_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Материальные ресурсы",
                    locus_notes: "Материальные ресурсы необходимые для успешного достижения цели и решения Ваших проблем и достижения целей",
                    locus_category: "ресурс",
                    locus_backimg: "C_RESOURCE_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Материальные ресурсы",
                    locus_notes: "Материальные ресурсы необходимые для успешного достижения цели и решения Ваших проблем и достижения целей",
                    locus_category: "ресурс",
                    locus_backimg: "C_RESOURCE_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Материальные ресурсы",
                    locus_notes: "Материальные ресурсы необходимые для успешного достижения цели и решения Ваших проблем и достижения целей",
                    locus_category: "ресурс",
                    locus_backimg: "C_RESOURCE_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Материальные ресурсы",
                    locus_notes: "Материальные ресурсы необходимые для успешного достижения цели и решения Ваших проблем и достижения целей",
                    locus_category: "ресурс",
                    locus_backimg: "C_RESOURCE_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Психологические ресурсы",
                    locus_notes: "Психологические ресурсы необходимые для успешного достижения цели и решения Ваших проблем и достижения целей",
                    locus_category: "ресурс",
                    locus_backimg: "C_RESOURCE_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Психологические ресурсы",
                    locus_notes: "Психологические ресурсы необходимые для успешного достижения цели и решения Ваших проблем и достижения целей",
                    locus_category: "ресурс",
                    locus_backimg: "C_RESOURCE_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Психологические ресурсы",
                    locus_notes: "Психологические ресурсы необходимые для успешного достижения цели и решения Ваших проблем и достижения целей",
                    locus_category: "ресурс",
                    locus_backimg: "C_RESOURCE_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Психологические ресурсы",
                    locus_notes: "Психологические ресурсы необходимые для успешного достижения цели и решения Ваших проблем и достижения целей",
                    locus_category: "ресурс",
                    locus_backimg: "C_RESOURCE_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Психологические ресурсы",
                    locus_notes: "Психологические ресурсы необходимые для успешного достижения цели и решения Ваших проблем и достижения целей",
                    locus_category: "ресурс",
                    locus_backimg: "C_RESOURCE_001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
         }
            ]
        },
        {
            name: "Двигательная активность",
            notes: "В данном разделе мы описываем необходимую двигательную активность Аватара",
            locuses: [
        {
                    locus_name: "Количество аэробных тренировок в неделю",
                    locus_notes: "Укажите количество аэробных тренировок в неделю",
                    locus_category: "цифры",
                    locus_backimg: "C_COLOR_YELLOW_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Количество силовых тренировок в неделю",
                    locus_notes: "Укажите количество силовых тренировок в неделю",
                    locus_category: "цифры",
                    locus_backimg: "C_COLOR_YELLOW_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды фитнеса",
                    locus_notes: "Виды фитнеса, которые предпочтительны в программе тренировок Аватара",
                    locus_category: "виды фитнеса",
                    locus_backimg: "C_FIT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды фитнеса",
                    locus_notes: "Виды фитнеса, которые предпочтительны в программе тренировок Аватара",
                    locus_category: "виды фитнеса",
                    locus_backimg: "C_FIT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды фитнеса",
                    locus_notes: "Виды фитнеса, которые предпочтительны в программе тренировок Аватара",
                    locus_category: "виды фитнеса",
                    locus_backimg: "C_FIT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды фитнеса",
                    locus_notes: "Виды фитнеса, которые предпочтительны в программе тренировок Аватара",
                    locus_category: "виды фитнеса",
                    locus_backimg: "C_FIT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды фитнеса",
                    locus_notes: "Виды фитнеса, которые предпочтительны в программе тренировок Аватара",
                    locus_category: "виды фитнеса",
                    locus_backimg: "C_FIT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды спорта",
                    locus_notes: "Виды спорта, которые наиболее эффективны в программе тренировок Аватара",
                    locus_category: "виды спорта",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды спорта",
                    locus_notes: "Виды спорта, которые наиболее эффективны в программе тренировок Аватара",
                    locus_category: "виды спорта",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды спорта",
                    locus_notes: "Виды спорта, которые наиболее эффективны в программе тренировок Аватара",
                    locus_category: "виды спорта",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды спорта",
                    locus_notes: "Виды спорта, которые наиболее эффективны в программе тренировок Аватара",
                    locus_category: "виды спорта",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды спорта",
                    locus_notes: "Виды спорта, которые наиболее эффективны в программе тренировок Аватара",
                    locus_category: "виды спорта",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
         }
            ]
        },
        {
            name: "Программа тренировок",
            notes: "В данном разделе дается описание программы тренировок",
            locuses: [
        {
                    locus_name: "Направление тренировки",
                    locus_notes: "В данном разделе описываются основные эффекты тренировочного занятия",
                    locus_category: "детализация направлений мезоцикла",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Растяжка",
                    locus_notes: "Упражнения, выполняемые для растяжки мышц",
                    locus_category: "растяжка",
                    locus_backimg: "C_EX_S001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Растяжка",
                    locus_notes: "Упражнения, выполняемые для растяжки мышц",
                    locus_category: "растяжка",
                    locus_backimg: "C_EX_S001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Растяжка",
                    locus_notes: "Упражнения, выполняемые для растяжки мышц",
                    locus_category: "растяжка",
                    locus_backimg: "C_EX_S001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Растяжка",
                    locus_notes: "Упражнения, выполняемые для растяжки мышц",
                    locus_category: "растяжка",
                    locus_backimg: "C_EX_S001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Растяжка",
                    locus_notes: "Упражнения, выполняемые для растяжки мышц",
                    locus_category: "растяжка",
                    locus_backimg: "C_EX_S001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
         }
            ]
        },
        {
            name: "Диета",
            notes: "В данном разделе описываются основные требования к питанию Аватара на пути к достижению поставленной цели",
            locuses: [
        {
                    locus_name: "Виды диет",
                    locus_notes: "Основные принципы питания, необходимые для достижения поставленной цели",
                    locus_category: "виды диет",
                    locus_backimg: "C_DIET001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
         }
            ]
        },
        {
            name: "Восстановление",
            notes: "В данном разделе описываются основные процедуры, позволяющие восстановиться после тренировок и ускорить процесс достижения целей",
            locuses: [
        {
                    locus_name: "Виды восстановления",
                    locus_notes: "Процедуры, помогающие восстановиться после тренировок и быстрее достичь поставленной цели",
                    locus_category: "виды восстановления",
                    locus_backimg: "C_SPA001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды восстановления",
                    locus_notes: "Процедуры, помогающие восстановиться после тренировок и быстрее достичь поставленной цели",
                    locus_category: "виды восстановления",
                    locus_backimg: "C_SPA001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды восстановления",
                    locus_notes: "Процедуры, помогающие восстановиться после тренировок и быстрее достичь поставленной цели",
                    locus_category: "виды восстановления",
                    locus_backimg: "C_SPA001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды восстановления",
                    locus_notes: "Процедуры, помогающие восстановиться после тренировок и быстрее достичь поставленной цели",
                    locus_category: "виды восстановления",
                    locus_backimg: "C_SPA001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
         }
            ]
        },
        {
            name: "Углубленный подход к тренировочным занятиям",
            notes: "В данном разделе определяются углубленные аспекты составления тренировочных программ требующие специальных знаний",
            locuses: [
        {
                    locus_name: "Направления мезоцикла",
                    locus_notes: "В данном разделе указываются основные направления мезоцикла, определяющие глобальную цель тренировочной программы",
                    locus_category: "направления мезоцикла",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Направления мезоцикла",
                    locus_notes: "В данном разделе указываются основные направления мезоцикла, определяющие глобальную цель тренировочной программы",
                    locus_category: "направления мезоцикла",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды мезоциклов",
                    locus_notes: "В данном разделе дается детализация принципов построения и режимов выполнения тренировочной программы",
                    locus_category: "виды мезоциклов",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды мезоциклов",
                    locus_notes: "В данном разделе дается детализация принципов построения и режимов выполнения тренировочной программы",
                    locus_category: "виды мезоциклов",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Виды мезоциклов",
                    locus_notes: "В данном разделе дается детализация принципов построения и режимов выполнения тренировочной программы",
                    locus_category: "виды мезоциклов",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Мышечно-сухожильные линии",
                    locus_notes: "В данном разделе определяется, какие мышечно-сухожильные линии будут прорабатываться, это определяет акцент выбора упражнений в тренировочной программе",
                    locus_category: "мышечно сухожильные линии",
                    locus_backimg: "",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Мышечно-сухожильные линии",
                    locus_notes: "В данном разделе определяется, какие мышечно-сухожильные линии будут прорабатываться, это определяет акцент выбора упражнений в тренировочной программе",
                    locus_category: "мышечно сухожильные линии",
                    locus_backimg: "",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Мышечно-сухожильные линии",
                    locus_notes: "В данном разделе определяется, какие мышечно-сухожильные линии будут прорабатываться, это определяет акцент выбора упражнений в тренировочной программе",
                    locus_category: "мышечно сухожильные линии",
                    locus_backimg: "",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Мышечно-сухожильные линии",
                    locus_notes: "В данном разделе определяется, какие мышечно-сухожильные линии будут прорабатываться, это определяет акцент выбора упражнений в тренировочной программе",
                    locus_category: "мышечно сухожильные линии",
                    locus_backimg: "",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Линии Традиционной Китайской Медицины",
                    locus_notes: "В данном разделе определяется, какие мышцы будут задействованы в программе. Мышцы ассоциируются с выбранной линией, описанной в Традиционной Китайской Медицине",
                    locus_category: "линии ТКМ",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Линии Традиционной Китайской Медицины",
                    locus_notes: "В данном разделе определяется, какие мышцы будут задействованы в программе. Мышцы ассоциируются с выбранной линией, описанной в Традиционной Китайской Медицине",
                    locus_category: "линии ТКМ",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Линии Традиционной Китайской Медицины",
                    locus_notes: "В данном разделе определяется, какие мышцы будут задействованы в программе. Мышцы ассоциируются с выбранной линией, описанной в Традиционной Китайской Медицине",
                    locus_category: "линии ТКМ",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Линии Традиционной Китайской Медицины",
                    locus_notes: "В данном разделе определяется, какие мышцы будут задействованы в программе. Мышцы ассоциируются с выбранной линией, описанной в Традиционной Китайской Медицине",
                    locus_category: "линии ТКМ",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Линии Традиционной Китайской Медицины",
                    locus_notes: "В данном разделе определяется, какие мышцы будут задействованы в программе. Мышцы ассоциируются с выбранной линией, описанной в Традиционной Китайской Медицине",
                    locus_category: "линии ТКМ",
                    locus_backimg: "C_SPORT001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Органы",
                    locus_notes: "В данном разделе указываются органы, которые должны быть ассоциированы с тренируемыми мышцами. Это определяет выбор упражнений тренировочной программы",
                    locus_category: "органы",
                    locus_backimg: "C_COLOR_YELLOW_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Органы",
                    locus_notes: "В данном разделе указываются органы, которые должны быть ассоциированы с тренируемыми мышцами. Это определяет выбор упражнений тренировочной программы",
                    locus_category: "органы",
                    locus_backimg: "C_COLOR_YELLOW_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Органы",
                    locus_notes: "В данном разделе указываются органы, которые должны быть ассоциированы с тренируемыми мышцами. Это определяет выбор упражнений тренировочной программы",
                    locus_category: "органы",
                    locus_backimg: "C_COLOR_YELLOW_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Органы",
                    locus_notes: "В данном разделе указываются органы, которые должны быть ассоциированы с тренируемыми мышцами. Это определяет выбор упражнений тренировочной программы",
                    locus_category: "органы",
                    locus_backimg: "C_COLOR_YELLOW_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
        },
        {
                    locus_name: "Органы",
                    locus_notes: "В данном разделе указываются органы, которые должны быть ассоциированы с тренируемыми мышцами. Это определяет выбор упражнений тренировочной программы",
                    locus_category: "органы",
                    locus_backimg: "C_COLOR_YELLOW_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY_",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                    ]
         }
            ]
        }
    ]
}

          console.log('Blocks Count: ' + Object.keys(this.object.blocks).length)

          // this.object = JSON.stringify(this.object)
          // this.object = JSON.parse(this.object)

          console.log('Blocks Count 2: ' + Object.keys(this.object.blocks).length)

          axios.post('/api/convert-game', {  
                id: this.id,
                object: JSON.stringify(this.object),                         
                })
                    .then( response => {
                        console.log(response)
                    })
                    .catch( err => {
                        // console.log('error')
                        console.log(err.response);
                }) 

        },      

    },
  }
</script>
