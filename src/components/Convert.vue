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

          this.id = 18

this.object =  {
    title: {
        program_name: "Квест по составлению программы тренировок с использованием различных видов упражнений.",
        notes: "Данная игра поможет вам узнать какие группы мышц прорабатываются при выполнении определенных упражнений.",
    },
    author: {
        name: "Валерий Горбунов",
        email: "medifit2000@yandex.ru"
    },
    tags: [
           "фитнес", "спорт"
    ],
    blocks:[
        {
            name: "Базовые упражнения",
            notes: "Укажите базовые упражнения (воздействующие на основные группы мышц)",
            locuses: [
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "тренажеры",
                            code: "C_EX_T002",
                            name: "жим платформы ногами",
                            image1: "C_EX_T002",
                            image2: "C_EX_T002_1",
                            notes: "Для  подготовленных. Укрепляет ноги и попу. Повышает артериальное давление.",
                            point: 30,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T017",
                            name: "сведение рук в тренажере",
                            image1: "C_EX_T017",
                            image2: "C_EX_T017_1",
                            notes: "Для начинающих. Укрепляет грудь.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "гимнастика",
                            code: "C_EX_G009",
                            name: "подъем на мыски",
                            image1: "C_EX_G009",
                            image2: "C_EX_G009_1",
                            notes: "Для начинающих. Тренирует голени.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "гимнастика",
                            code: "C_EX_G007",
                            name: "отжимания с колен",
                            image1: "C_EX_G007",
                            image2: "C_EX_G007_1",
                            notes: "Для начинающих. Легкий вариант отжиманий. Укрепляет грудь и руки.",
                            point: 20,
                            takenotes: "это правильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "свободные веса",
                            code: "C_EX_W016",
                            name: "сгибание рук с гантелями попеременно",
                            image1: "C_EX_W016",
                            image2: "C_EX_W016_1",
                            notes: "Для  подготовленных. Укрепляет руки.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "свободные веса",
                            code: "C_EX_W004",
                            name: "сгибание рук — скамья Скотта",
                            image1: "C_EX_W004",
                            image2: "C_EX_W004_1",
                            notes: "Для  подготовленных. Укрепляет бицепс.",
                            point: -10,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "свободные веса",
                            code: "C_EX_W018",
                            name: "становая тяга",
                            image1: "C_EX_W018",
                            image2: "C_EX_W018_1",
                            notes: "Для опытных. Профессиональное силовое упражнение.",
                            point: 60,
                            takenotes: "это правильный ответ"
                        }
                    ]
         }
            ]
        },
        {
            name: "Грудные мышцы",
            notes: "Укажите упражнения, воздействующие на указанные мышцы",
            locuses: [
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "тренажеры",
                            code: "C_EX_T011",
                            name: "разгибание ног в тренажере",
                            image1: "C_EX_T011",
                            image2: "C_EX_T011_1",
                            notes: "Для начинающих. Укрепляет ноги.",
                            point: -10,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T017",
                            name: "сведение рук в тренажере",
                            image1: "C_EX_T017",
                            image2: "C_EX_T017_1",
                            notes: "Для начинающих. Укрепляет грудь.",
                            point: 40,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T016",
                            name: "тяга вертикального блока",
                            image1: "C_EX_T016",
                            image2: "C_EX_T016_1",
                            notes: "Для начинающих. Укрепляет спину и руки.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "гимнастика",
                            code: "C_EX_G005",
                            name: "отжимания от пола",
                            image1: "C_EX_G005",
                            image2: "C_EX_G005_1",
                            notes: "Для  подготовленных. Работают много мышц. Грудь и руки особенно.",
                            point: 30,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "гимнастика",
                            code: "C_EX_G012",
                            name: "присед на одной ноге",
                            image1: "C_EX_G012",
                            image2: "C_EX_G012_1",
                            notes: "Для опытных. Сильно укрепляет ноги и попу.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "свободные веса",
                            code: "C_EX_W009",
                            name: "приседания со штангой на груди",
                            image1: "C_EX_W009",
                            image2: "C_EX_W009_1",
                            notes: "Для опытных. Профессиональное силовое упражнение.",
                            point: -40,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "свободные веса",
                            code: "C_EX_W006",
                            name: "жим штанги лежа",
                            image1: "C_EX_W006",
                            image2: "C_EX_W006_1",
                            notes: "Для опытных. Профессиональное силовое упражнение.",
                            point: 50,
                            takenotes: "это правильный ответ"
                        }
                    ]
         }
            ]
        },
        {
            name: "Дельтовидные мышцы",
            notes: "Укажите упражнения, воздействующие на указанные мышцы",
            locuses: [
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "свободные веса",
                            code: "C_EX_W016",
                            name: "сгибание рук с гантелями попеременно",
                            image1: "C_EX_W016",
                            image2: "C_EX_W016_1",
                            notes: "Для  подготовленных. Укрепляет руки.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "свободные веса",
                            code: "C_EX_W010",
                            name: "разведение рук с гантелями стоя",
                            image1: "C_EX_W010",
                            image2: "C_EX_W010_1",
                            notes: "Для  подготовленных. Укрепляет плечи.",
                            point: 40,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "свободные веса",
                            code: "C_EX_W016",
                            name: "сгибание рук с гантелями попеременно",
                            image1: "C_EX_W016",
                            image2: "C_EX_W016_1",
                            notes: "Для  подготовленных. Укрепляет руки.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        }
                    ]
         }
            ]
        },
        {
            name: "Мышцы спины",
            notes: "Укажите упражнения, воздействующие на указанные мышцы",
            locuses: [
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "тренажеры",
                            code: "C_EX_T016",
                            name: "тяга вертикального блока",
                            image1: "C_EX_T016",
                            image2: "C_EX_T016_1",
                            notes: "Для начинающих. Укрепляет спину и руки.",
                            point: 30,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T014",
                            name: "сгибание рук на бицепс в тренажере",
                            image1: "C_EX_T014",
                            image2: "C_EX_T014_1",
                            notes: "Для начинающих. Укрепляет руки.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "гимнастика",
                            code: "C_EX_G003",
                            name: "лодочка",
                            image1: "C_EX_G003",
                            image2: "C_EX_G003_1",
                            notes: "Для начинающих. Укрепляет мышцы поясницы.",
                            point: 30,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "гимнастика",
                            code: "C_EX_G015",
                            name: "скручивания на коврике",
                            image1: "C_EX_G015",
                            image2: "C_EX_G015_1",
                            notes: "Для начинающих. Укрепляет пресс.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "гимнастика",
                            code: "C_EX_G014",
                            name: "ролик для пресса",
                            image1: "C_EX_G014",
                            image2: "C_EX_G014",
                            notes: "Для опытных. Работают интенсивно мышцы ног, рук, туловища.",
                            point: 30,
                            takenotes: "возможен и такой вариант"
                        }
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "свободные веса",
                            code: "C_EX_W006",
                            name: "жим штанги лежа",
                            image1: "C_EX_W006",
                            image2: "C_EX_W006_1",
                            notes: "Для опытных. Профессиональное силовое упражнение.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "свободные веса",
                            code: "C_EX_W018",
                            name: "становая тяга",
                            image1: "C_EX_W018",
                            image2: "C_EX_W018_1",
                            notes: "Для опытных. Профессиональное силовое упражнение.",
                            point: 50,
                            takenotes: "это правильный ответ"
                        }
                    ]
         }
            ]
        },
        {
            name: "Бицепс плеча",
            notes: "Укажите упражнения, воздействующие на указанные мышцы",
            locuses: [
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "тренажеры",
                            code: "C_EX_T014",
                            name: "сгибание рук на бицепс в тренажере",
                            image1: "C_EX_T014",
                            image2: "C_EX_T014_1",
                            notes: "Для начинающих. Укрепляет руки.",
                            point: 30,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T013",
                            name: "сгибание ног в тренажере",
                            image1: "C_EX_T013",
                            image2: "C_EX_T013_1",
                            notes: "Для начинающих. Укрепляет ноги.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "гимнастика",
                            code: "C_EX_G009",
                            name: "подъем на мыски",
                            image1: "C_EX_G009",
                            image2: "C_EX_G009_1",
                            notes: "Для начинающих. Тренирует голени.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "гимнастика",
                            code: "C_EX_G007",
                            name: "отжимания с колен",
                            image1: "C_EX_G007",
                            image2: "C_EX_G007_1",
                            notes: "Для начинающих. Легкий вариант отжиманий. Укрепляет грудь и руки.",
                            point: 20,
                            takenotes: "это правильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "свободные веса",
                            code: "C_EX_W004",
                            name: "сгибание рук — скамья Скотта",
                            image1: "C_EX_W004",
                            image2: "C_EX_W004_1",
                            notes: "Для  подготовленных. Укрепляет бицепс.",
                            point: 30,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "свободные веса",
                            code: "C_EX_W001",
                            name: "выпады со штангой",
                            image1: "C_EX_W001",
                            image2: "C_EX_W001-1",
                            notes: "Для опытных. Профессиональное силовое упражнение.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        }
                    ]
         }
            ]
        },
        {
            name: "Трицепс плеча",
            notes: "Укажите упражнения, воздействующие на указанные мышцы",
            locuses: [
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "тренажеры",
                            code: "C_EX_T005",
                            name: "Кроссовер — сведение ног",
                            image1: "C_EX_T005",
                            image2: "C_EX_T005_1",
                            notes: "Для  подготовленных. Укрепляет ноги и спину.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T007",
                            name: "отжимания на параллельных брусьях",
                            image1: "C_EX_T007",
                            image2: "C_EX_T007_1",
                            notes: "Для  подготовленных. Укрепляет руки и плечи.",
                            point: 40,
                            takenotes: "это правильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "свободные веса",
                            code: "C_EX_W017",
                            name: "сгибание рук с гантелями хват снизу",
                            image1: "C_EX_W017",
                            image2: "C_EX_W017_1",
                            notes: "Для  подготовленных. Укрепляет руки. Акцент на предплечья.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "свободные веса",
                            code: "C_EX_W020",
                            name: "французский жим",
                            image1: "C_EX_W020",
                            image2: "C_EX_W020-1",
                            notes: "Для  подготовленных. Укрепляет руки. Особенно трицепс.",
                            point: 30,
                            takenotes: "это правильный ответ"
                        }
                    ]
         }
            ]
        },
        {
            name: "Мышцы брюшного пресса",
            notes: "Укажите упражнения, воздействующие на указанные мышцы",
            locuses: [
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "тренажеры",
                            code: "C_EX_T008",
                            name: "подтягивания",
                            image1: "C_EX_T008",
                            image2: "C_EX_T008_1",
                            notes: "Для  подготовленных. Укрепляет спину, плечи, руки.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T011",
                            name: "разгибание ног в тренажере",
                            image1: "C_EX_T011",
                            image2: "C_EX_T011_1",
                            notes: "Для начинающих. Укрепляет ноги.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T015",
                            name: "скручивания на наклонной скамье",
                            image1: "C_EX_T015",
                            image2: "C_EX_T015_1",
                            notes: "Для начинающих. Укрепляет пресс.",
                            point: 50,
                            takenotes: "это правильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "гимнастика",
                            code: "C_EX_G010",
                            name: "подъем на мысок одной ноги",
                            image1: "C_EX_G010",
                            image2: "C_EX_G010_1",
                            notes: "Для  подготовленных. Усиленно тренирует голени.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "гимнастика",
                            code: "C_EX_G014",
                            name: "ролик для пресса",
                            image1: "C_EX_G014",
                            image2: "C_EX_G014",
                            notes: "Для опытных. Работают интенсивно мышцы ног, рук, туловища.",
                            point: 60,
                            takenotes: "это правильный ответ"
                        }
                    ]
         }
            ]
        },
        {
            name: "Ягодичные мышцы",
            notes: "Укажите упражнения, воздействующие на указанные мышцы",
            locuses: [
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "тренажеры",
                            code: "C_EX_T002",
                            name: "жим платформы ногами",
                            image1: "C_EX_T002",
                            image2: "C_EX_T002_1",
                            notes: "Для  подготовленных. Укрепляет ноги и попу. Повышает артериальное давление.",
                            point: 50,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T008",
                            name: "подтягивания",
                            image1: "C_EX_T008",
                            image2: "C_EX_T008_1",
                            notes: "Для  подготовленных. Укрепляет спину, плечи, руки.",
                            point: -40,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T017",
                            name: "сведение рук в тренажере",
                            image1: "C_EX_T017",
                            image2: "C_EX_T017_1",
                            notes: "Для начинающих. Укрепляет грудь.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "гимнастика",
                            code: "C_EX_G004",
                            name: "отведение ноги лежа",
                            image1: "C_EX_G004",
                            image2: "C_EX_G004_1",
                            notes: "Для начинающих. Укрепляет попу.",
                            point: 40,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "гимнастика",
                            code: "C_EX_G015",
                            name: "скручивания на коврике",
                            image1: "C_EX_G015",
                            image2: "C_EX_G015_1",
                            notes: "Для начинающих. Укрепляет пресс.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        }
                    ]
        },
        {
                    locus_name: "Свободные веса",
                    locus_notes: "Упражнения, выполняемые с гантелями и штангами",
                    locus_category: "свободные веса",
                    locus_backimg: "C_EX_W001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "свободные веса",
                            code: "C_EX_W021",
                            name: "сгибание рук хаммер с гантелями",
                            image1: "C_EX_W021",
                            image2: "C_EX_W021_1",
                            notes: "Для  подготовленных. Укрепляет трицепс.",
                            point: -40,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "свободные веса",
                            code: "C_EX_W017",
                            name: "сгибание рук с гантелями хват снизу",
                            image1: "C_EX_W017",
                            image2: "C_EX_W017_1",
                            notes: "Для  подготовленных. Укрепляет руки. Акцент на предплечья.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "свободные веса",
                            code: "C_EX_W018",
                            name: "становая тяга",
                            image1: "C_EX_W018",
                            image2: "C_EX_W018_1",
                            notes: "Для опытных. Профессиональное силовое упражнение.",
                            point: 50,
                            takenotes: "это правильный ответ"
                        }
                    ]
         }
            ]
        },
        {
            name: "Мышцы голеней",
            notes: "Укажите упражнения, воздействующие на указанные мышцы",
            locuses: [
        {
                    locus_name: "Гимнастика",
                    locus_notes: "Упражнения, выполняемые без применения утяжелителей и тренажеров",
                    locus_category: "гимнастика",
                    locus_backimg: "C_EX_G001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "гимнастика",
                            code: "C_EX_G008",
                            name: "подъем попы лежа на спине",
                            image1: "C_EX_G008",
                            image2: "C_EX_G008_1",
                            notes: "Для начинающих. Укрепляет мышцы туловища, ног и попу.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "гимнастика",
                            code: "C_EX_G010",
                            name: "подъем на мысок одной ноги",
                            image1: "C_EX_G010",
                            image2: "C_EX_G010_1",
                            notes: "Для  подготовленных. Усиленно тренирует голени.",
                            point: 30,
                            takenotes: "это правильный ответ"
                        }
                    ]
         }
            ]
        },
        {
            name: "Бицепс бедра",
            notes: "Укажите упражнения, воздействующие на указанные мышцы",
            locuses: [
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "тренажеры",
                            code: "C_EX_T009",
                            name: "разведение ног в тренажере",
                            image1: "C_EX_T009",
                            image2: "C_EX_T009_1",
                            notes: "Для начинающих. Укрепляет попу.",
                            point: -20,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T013",
                            name: "сгибание ног в тренажере",
                            image1: "C_EX_T013",
                            image2: "C_EX_T013_1",
                            notes: "Для начинающих. Укрепляет ноги.",
                            point: 30,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T016",
                            name: "тяга вертикального блока",
                            image1: "C_EX_T016",
                            image2: "C_EX_T016_1",
                            notes: "Для начинающих. Укрепляет спину и руки.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        }
                    ]
         }
            ]
        },
        {
            name: "Четырехглавую мышцу бедра",
            notes: "Укажите упражнения, воздействующие на указанные мышцы",
            locuses: [
        {
                    locus_name: "Тренажеры",
                    locus_notes: "Упражнения, выполняемые с применением тренажеров",
                    locus_category: "тренажеры",
                    locus_backimg: "C_EX_T001_",
                    locus_card_code: "C_COLOR_GRAY",
                    locus_card_name: "(КАРТА СЕРОГО ЦВЕТА)",
                    locus_card_image1: "C_COLOR_GRAY.jpg",
                    locus_card_image2: "C_COLOR_GRAY",
                    locus_points: 0,
                    locus_type: "",
                    cards: [
                        {
                            category: "тренажеры",
                            code: "C_EX_T008",
                            name: "подтягивания",
                            image1: "C_EX_T008",
                            image2: "C_EX_T008_1",
                            notes: "Для  подготовленных. Укрепляет спину, плечи, руки.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T011",
                            name: "разгибание ног в тренажере",
                            image1: "C_EX_T011",
                            image2: "C_EX_T011_1",
                            notes: "Для начинающих. Укрепляет ноги.",
                            point: 40,
                            takenotes: "это правильный ответ"
                        },
                        {
                            category: "тренажеры",
                            code: "C_EX_T015",
                            name: "скручивания на наклонной скамье",
                            image1: "C_EX_T015",
                            image2: "C_EX_T015_1",
                            notes: "Для начинающих. Укрепляет пресс.",
                            point: -30,
                            takenotes: "это неправильный ответ"
                        }
                    ]
         }
            ]
        }
    ]
}

          // this.object = 

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
