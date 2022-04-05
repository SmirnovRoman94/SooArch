<template>
  <div class="index">
    <header class="header_page">
        <div class="header">
          <div class="header_item">
            <div class="item_logo">
                    <p class="logo">SOO</p>
                    <div class="logo_left">
                        <div class="logo_span">A
                            <span class="logo_span3"></span>
                        </div>
                        <p class="logo2">RC</p>
                        <div class="logo_span">H
                             <span class="logo_span2"></span>
                        </div>
                    </div>
                </div>
            <button class="btn_header"  @click="showMenu">
                  <i class="bar"></i>
            </button>
          </div>
        </div>
        <div class="carousel">
          <Carousel/>
        </div>
    </header>
    <div class="header_mobile">
      <Header :pageName="this.page" @hideMenu="showMenu"/>
    </div>
    <Counter @modaltrue="mod"/>
    <Tabs @modaltrue="mod"/>
    <Modal v-show="modalFirst" @close="modalFirst = false" title="Request a Quote"/>
    <Portfolio :images="workLoaded"/>
    <div class="bg">
      <Clients/>
        <div class="pricing">
          <PricingList :pricing="priceLoaded"/>
        </div>
    </div>
    <transition name="fade">
      <Menu  v-show="menu" @close="menu = false" />
    </transition>
      <Loading/>
    <div id="app">
        <transition name="fade">
          <div v-if="buttonShow" @click="click" class="button_up">
            <up-mdi></up-mdi>
          </div>
        </transition>
    </div>
  </div>
</template>

<script>
import Tabs from '~/components/Tabs'
import Carousel from "~/components/Carousel";
import Counter from '~/components/Counter'
import Modal from '~/components/UI/Modal'
import Portfolio from '~/components/portfolio/Portfolio'
import Clients from '~/components/Clients'
import PricingList from '~/components/pricing/PricingList'
import Menu from '~/components/system/Menu.vue';
import Loading from '~/components/Loading';
import Header from '~/components/system/header'
import WorkList from '~/components/portfolio/WorkList'
export default {
  components: {
    Carousel,
    Counter,
    Tabs,
    Modal,
    Portfolio,
    Clients,
    PricingList,
    Menu,
    Loading,
    Header,
    WorkList
  },
  head(){
    let title = "Архитектурное бюро SOOARCH DESIGN Дизайн Интерьера СПБ",
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
        content: "Если вы ждали знак, то это он! Дизайн Интерьера, Коммерческий дизайн и Архитектурное проектирование. Качество и стиль — это и есть SOOARCH DESIGN.",
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
        content: 'https://sooarch.ru',
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
    content: "https://sooarch.ru",
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
      modalFirst: false,
      menu: false,
      buttonShow: false,
      page: {
          title: '',
          link: '/',
          linkTitle: ''
      }
    }
  },
  methods: {
    mod(){
      this.modalFirst = true
    },
    showMenu(){
      this.menu = true
    },
    checkScrollPosition() {
      this.buttonShow = window.pageYOffset > 10;
    },
    click() {
      scroll({
        top: 0,
        behavior: "smooth"
      });
    },
  },

    computed: {
        priceLoaded(){
            return this.$store.getters.getPrice
        },
        workLoaded(){
          return this.$store.getters.getWork
        },
        priceLoad(){
          this.$store.dispatch('priceInite')
        },
        workLoad(){
          this.$store.dispatch('workInite')
        },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    }),
    this.priceLoad,
    this.workLoad,
    this.checkScrollPosition();
    window.addEventListener('scroll', this.checkScrollPosition);
  }
};
</script>

<style lang="scss" scoped>

.button_up{
  position: fixed;
  right: 0px;
  bottom: 20vh;
  border-radius: 50%;
  padding: 1em 17px;
  background-color: #fdfdfd00;
  border: 1px solid #4a5562;
  color: #fff;
  margin-bottom: 1em;
  width: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.bg{
  background-image: url('~/assets/img/im/1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.index{
  overflow-x: hidden;
}
  .header{
    padding-top: 2em;
    z-index: 10;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    .header_item{
      width: 90%;
      justify-content: space-between;
      display: flex;
      align-items: center;
    }
    .logo{
      color: rgb(255, 255, 255);
    }
    .bar{
      position: relative;
      display: inline-block;
      width: 20px;
      height: 2px;
      color: #ffffff;
      font: bold 14px/.4 Helvetica;
      text-transform: uppercase;
      text-indent: -55px;
      background: rgb(255, 255, 255);

      &::before{
        top: -7px;
        content: '';
        width: 30px;
        height: 2px;
        background: rgb(255, 255, 255);
        position: absolute;
        left: 0;
        transition: 0.2s;
      }
      &::after{
        bottom: -7px;
        content: '';
        width: 30px;
        height: 2px;
        background: rgb(255, 255, 255);
        position: absolute;
        left: 0;
        transition: 0.2s;
      }
    }
    
  }
@media screen and(max-width: 500px) {
  .header_page{
    display: none;
  }
}
@media screen and(min-width:500px) {
  .header_mobile{
    display: none;
  }
}
//logo
.logo_left{
    margin-left: 86px;
    display: flex;
    font-size: 40px;
    padding-left: 10px;
    color: rgb(255, 255, 255);
}

.logo_span{
    position: relative;
}
.logo_span3{
    position: absolute;
    left: -84px;
    transform: rotate(110deg);
    border-bottom: 5px solid rgb(253, 251, 251);
    width: 201px;
    animation: logo;
    animation-duration: 2s;
}
.logo_span2{
    position: absolute;
    left: -45px;
    transform: rotate(90deg);
    border-bottom: 5px solid rgb(255, 255, 255);
    width: 137px;
    animation: logo2 ;
    animation-duration: 1s;
}
@keyframes logo {
    from{
        width: 0;

    }
    to{
        width: 200px;
        
    }
}
@keyframes logo2 {
    from{
        width: 0;
       
    }
    to{
        width: 137px;
       
    }
}
.logo{
                width: 50%;
                margin-left: 86px;
                font-size: 40px;
                text-align: left;
                animation: logo3;
                animation-duration: 1s;
            }
            @keyframes logo3 {
                from{
                    margin-left: 0;
                }
                to{
                    margin-left: 86px;
                }
            }
.btn_header{
  width: 50px;
  outline: none;
  text-decoration: none;
  background-color: #fff0;
  color: #000;
  border: none;
  :hover{
    transform: scale(1.5);
  }
}
</style>
