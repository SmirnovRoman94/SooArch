<template>
    <div class="contact_pager">
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
        <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <div class="container">
            <div class="contact_page">
                 <h3 class="contact_header">Контактная информация</h3>
            <div class="adress">
                <p class="data_contact">Телефон: <span class="data_contact_item">+7-904-614-77-41</span></p>
                <p class="data_contact">Email: <span class="data_contact_item">sooarchspb@gmail.com</span></p>
            </div>
            <div class="contact_sub">
                <h3 v-show="submited" class="submitet_mes">Отправлено!</h3>
                <form @submit.prevent="newUser">
                    <label>Ваше имя*</label>
                    <input type="tetx" v-model="user.name" placeholder="Ваше имя"/>
                    <label>Email*</label>
                    <input type="email" v-model="user.email" placeholder="Ваш email"/>
                    <label>Сообщение</label>
                    <textarea type="tetx" v-model="user.mes" placeholder="Ваше сообщение"/>
                    <div class="controls">
                        <button class="newCom">Отправить</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
export default {
    components: {
        Header,
        Menu
    },
//     head(){
//     let title = "SOOARCH.design.contacts",
//         descr = "Архитектурное бюро est.2019. Дизайн интерьера",
//         url = require('~/assets/img/meta/logos.png'),
//         img = `http://soart.w904642y.beget.tech/${url}`,
//         type = "site"
//     return{
//       title: title,
//       meta: [
//         { hid: 'og:title', name: 'og:title', content: title },
//         { hid: 'og:description', name: 'og:description', content: descr },
//         { hid: 'description', name: 'description', content: descr },
//         { hid: 'og:img', name: 'og:img', content: img},
//         { hid: 'og:type', name: 'og:type', content: type},
//       ]
//     }
//   },
head(){
    let title = "Контакты",
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
        content: 'https://sooarch.ru/contact',
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
    content: "https://sooarch.ru/contact",
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
            menu: false,
            submited: false,
            page: {
                title: 'Контакты',
                link: '/contact',
                linkTitle: 'Контакты'
            },
            user: {
                name: '',
                email: '',
                mes: ''
            }

        }
    },
    methods: {
        OnMenu() {
            this.menu = true;
        },
        newUser(){
            this.submited = true;
            let url = `https://wa.me/79046436929?text=${this.user.name}%20${this.user.email}%20${this.user.mes}`;
            window.open(url);
        }
    }
}
</script>
<style lang="scss" scoped>

.contact_page{
    padding: 7em 0;
    height: auto;
    .contact_header{
        line-height: 1.5;
        color: #1b212c;
        font-weight: 400;
        font-size: 30px;
        padding-bottom: 2em;
    }
    .adress{
        display: flex;
        justify-content: space-around;
        padding-bottom: 2em;
        .data_contact{
            font-family: "Rubik", Arial, sans-serif;
            font-size: 20px;
            line-height: 1.8;
            font-weight: 400;
            color: #798899;
        }
        .data_contact_item{
            color: #c76572;
        }
    }
}
.contact_sub{
    width: 50%;
    margin: 0 auto;
}
.submitet_mes{
    color: #53d397;
    font-size: 20px;
    text-align: center;
}
.controls{
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 2em;
            .newCom{
                margin: 1em 1em;
                border: solid 1px rgba(0, 0, 0, 1);
                color: #222;
                background-color: rgba(255, 255, 255, 0);
                font-size: 15px;
                padding: 10px 30px;
                text-transform: uppercase;
                text-align: center;
                letter-spacing: 2px;
                display: flex;
                align-items: center;
                justify-content: center;
                &:hover{
                    background-color: #ba7338;
                    color: #fff;
                }
            }
        }
@media screen and (max-width:1200px) {
    .adress{
        flex-wrap: wrap;
    }
}
@media screen and(max-width: 770px) {
    .contact_sub{
        width: 100%;
    }
}
</style>