<template>
  <div class="about_page">
    <Header :pageName="this.page" @hideMenu="OnMenu"/>
    <div class="container">
      <div data-aos="fade-up" class="team">
        <h3 class="team_header">О нас</h3>
        <div class="team_item">
          <div class="cont">
            <p class="team_content">
          "За каждым уникальным проектом стоят уникальные люди, личность имеет важнейшую роль в творчестве! А творим мы душой, и в каждом проекте сохраняем часть себя."
        </p>
        <p class="team_content">
          Приветствую, меня зовут Богдан, я дипломированный архитектор из города Санкт-Петербург, имеющий опыт работы как в многоэтажном проектировании в крупной строительной компании, так и в частном строительстве. Один из создателей бренда дизайнерской мебели SOO ARCH и основатель студии архитектуры и дизайна SOO ARCH DESIGN.
Что я хочу, к чему стремлюсь? 
Как можно большее количество довольных заказчиков и реализованных объектов! Сделать дизайн доступным! Все просто, мне важно, чтобы каждый человек, который обращается в студию, получал уникальный эксклюзивный результат не только на бумаге, но и после реализации.

        </p>
          </div>
        <img class="team_img" src="~/assets/img/Clients/bogdan.jpeg" alt="bogdan">
        </div>
      </div>
      <div class="clients">
        <Clients />
      </div>
    </div>
    <transition name="fade">
      <Menu  v-show="menu" @close="menu = false" />
    </transition>
  </div>
</template>


<script>
import Clients from "~/components/Clients";
import Menu from "~/components/system/Menu";
import Header from '~/components/system/header'
export default {
  components: {
    Clients,
    Menu,
    Header
  },
  head(){
    let title = "О нас",
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
        content: 'https://sooarch.ru/about',
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
    content: "https://sooarch.ru/about",
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
  data() {
    return {
      menu: false,
      page: {
          title: 'О нас',
          link: '/about',
          linkTitle: 'О нас'
      }
    };
  },
  methods: {
    OnMenu() {
      this.menu = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.about_page{
  background-color: #222 ;
}
.cont{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.clients{
  padding-bottom: 2em;
}
.team {
  padding: 3em 0 0 0;
  .team_item{
    display: flex;
    align-items: center;
  }
  .team_img{
    width: 45%;
  }
  .team_header {
    font-weight: 400;
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #1b212c;
    text-align: center;
    padding-bottom: 1em;
  }
}
.person {
    margin: 7em 0;
    display: flex;
    justify-content: space-around;

      .person_name {
        font-size: 20px;
        color: #1b212c;
        font-weight: 400;
      }
      .person_profi {
        font-family: "Rubik", Arial, sans-serif;
        font-size: 17px;
        line-height: 1.8;
        font-weight: 400;
        color: #798899;
        font-size: 14px;
      }
      .person_img {
        padding: 1em 0;
      }
      .persom_text {
        font-family: "Rubik", Arial, sans-serif;
        font-size: 17px;
        line-height: 1.8;
        font-weight: 400;
        color: #798899;
      }
    }
  .person_cart {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 1em;
      }
.team_content {
    font-family: "Rubik", Arial, sans-serif;
    font-size: 17px;
    line-height: 1.8;
    font-weight: 400;
    color: #fff;
    text-align: justify;
    margin-right: 1em;
    &:last-child{
      padding-top: 1em;
    }
  }
@media screen and(max-width:1100px) {
  .team .team_item{
    flex-direction: column;
  }
  .team .team_img{
    padding-top: 1em;
    width: 70%;
  }
}
@media screen and (max-width: 770px) {
  .team_content{
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .person{
    flex-wrap: wrap;
    .person_cart{
      margin: 1em auto;
    }
  }
  .team_item{
    flex-wrap: wrap; 
  }
  .team_content{
    margin-right: 0;
  }
  .team{
    .team_img{
    width: 100%;
    padding-top: 1em;
  }
  }
}
</style>