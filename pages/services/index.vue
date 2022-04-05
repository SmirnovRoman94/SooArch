<template>
    <div class="service_page">
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <div class="container">
            <Modal v-show="modal" title="Request a Quote" @close="modal = false"/>
            <div class="consult">
                <div class="consult_content">
                    <h3 class="consult_header">Профессиональная консультация</h3>
                    <p class="consult_text">Первое, что мы хотим предложить Вам – это идею! Идею о том, что у любого помещения и пространства может быть свой уникальный климат, который близок хозяевам и всецело дополняет их образ. Большинство из нас любит глазами, поэтому планировку помещения и основные идеи мы с удовольствием обсудим совершенно бесплатно.</p>
                    <button @click="onModal" class="btn_service">Связаться с нами<chevronRight-mdi></chevronRight-mdi></button>
                </div>
            </div>
            <ServiceList :services="servicesLoaded"/>
            <div data-aos="fade-up" class="works">
                <h3 class="works_header">Как мы работаем</h3>
                <div class="works_list">
                    <div class="work_card" v-for="work in works" :key="work.id">
                        <h4 class="work_card_header">
                            <span class="card_head_item">{{work.number}}</span>
                            <span class="card_head_item">{{work.title}}</span>
                        </h4>
                        <p class="work_card_content">{{work.desc}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import Modal from '~/components/UI/Modal'
import ServiceList from '~/components/sevices/ServiceList'
export default {
    components: {
        Header,
        Menu,
        Modal,
        ServiceList
    },
    head(){
    let title = "Сервисы",
        descr = "Если вы ждали знак, то это он! Дизайн Интерьера, Коммерческий дизайн и Архитектурное проектирование. Качество и стиль — это и есть SOOARCH DESIGN."
    return{
      title: title,
      descr: descr,
      meta: [
        {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: descr,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://sooarch.ru/ograph.png',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '400',
      },
      {
        hid: 'og:image:hight',
        property: 'og:image:hight',
        content: '300',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://sooarch.ru/services',
      },
      {
        property: 'og:locale',
        content: 'ru_RU',
      },
        { name: "twitter:site", content: "@bobross" },
  { name: "twitter:card", content: "summary_large_image" },
  {
    hid: "twitter:url",
    name: "twitter:url",
    content: "https://sooarch.ru/services",
  },
  {
    hid: "twitter:title",
    name: "twitter:title",
    content: title,
  },
  {
    hid: "twitter:description",
    name: "twitter:description",
    content: descr,
  },
  {
    hid: "twitter:image",
    name: "twitter:image",
    content: 'https://sooarch.ru/ograph.png',
  },
      ]
    }
  },
    data(){
        return{
            page: {
                title: 'Услуги',
                link: '/services',
                linkTitle: 'Услуги'
            },
            menu: false,
            modal: false,
            works: [
                {
                    id: 1,
                    number: '01.',
                    title: ' Анализ',
                    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts'
                },
                {
                    id: 2,
                    number: '02.',
                    title: '  Планирование',
                    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts'
                },
                {
                    id: 3,
                    number: '03.',
                    title: 'Решение',
                    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts'
                }
            ]
        }
    },
    mounted(){
        this.$store.dispatch('servicesInite')
    },
    computed: {
        servicesLoaded(){
            return this.$store.getters.getServices
        }
    },
    methods: {
        OnMenu(){
            this.menu = true;
        },
        onModal(){
            this.modal = true
        }
    }
}
</script>
<style lang="scss" scoped>
.service_page{
    overflow-x: hidden;
}
.works{
    padding: 7em 0;
    .works_header{
        font-weight: 400;
        font-size: 28px;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #222;
        text-align: center;
    }
    .works_list{
            padding-top: 4em;
            display: flex;
            justify-content: space-around;

            .work_card{
                padding: 0 1em;

                .work_card_header{
                    display: flex;
                    font-size: 25px;
                    .card_head_item{
                        color: #c76572;
                        line-height: 1.5;
                        font-weight: 400;
                        &:last-child{
                        line-height: 1.5;
                        color: #1b212c;
                        font-weight: 400;
                        padding-left: 5px;
                    }
                    }
                }
                .work_card_content{
                    padding-top: 1em;
                    font-family: "Rubik", Arial, sans-serif;
                    font-size: 17px;
                    line-height: 1.8;
                    font-weight: 400;
                    color: #222;
                }
            }
        }
}
@media screen and(max-width: 550px) {
    .works_list{
        flex-wrap: wrap;
    }
}
//consult
.consult{
    padding: 90px 0 90px 40px;
    width: 50%;
    .consult_header{
        text-transform: uppercase;
        font-size: 25px;
        color: #ba7338;
        padding-bottom: 5px;
    }
    .consult_text{
        color: #798899;
        text-align: justify;
    }
    .btn_service{
            margin-top: 30px;
            border: solid 1px rgba(1,1,1,.2);
            color: #333;
            background-color: #ffffff00;
            font-size: 15px;
            padding: 5px 30px;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 2px;
            display: flex;
            align-items: center;
            &:hover{
                background-color: #c76572;
                color: #fff;
            }
        }
}
@media screen and(max-width:1100px) {
    .consult{
        padding: 40px 0 20px 40px;
        .consult_header{
            font-size: 20px;
        }
        .consult_text{
            font-size: 13px;
        }
        .btn_service{
            margin-top: 10px;
        }
    }
}
@media screen and(max-width:770px) {
    .consult{
        width: 100%;
        padding: 25px 0 5px 5px;
    }
    .works{
        padding: 0 0 2em 0;
        .works_list{
            padding-top: 1em;
        }
    }
}
</style>