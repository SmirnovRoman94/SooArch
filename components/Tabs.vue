<template>
  <!-- <section> -->
    <div class="tab_page">
      <Modal v-show="modalFirst" @close="modalFirst = false" title="Request a Quote"/>
      <div data-aos="fade-right">
        <div class="tr">
          <h1 class="services_title"> ЧТО МЫ ВАМ ПРЕДЛАГАЕМ</h1>
          <vue-tabs
            active-tab-color="transparent"
            active-text-color="white"
            type="pills"
            :start-index="1"
            direction="vertical"
          >
            <v-tab title="ПРОФЕССИОНАЛЬНАЯ КОНСУЛЬТАЦИЯ">
              <div class="tabs_content">
                <img class="tabs_img" src="~/assets/img/Tabs/home.png" />
              </div>
              <p class="tabs_header">Профессиональная консультация</p>
              <p class="tabs_text">
                Нам очень важно делиться с вами опытом. Даже на стадии консультации можно предотвратить множество ошибок и понять желаемое в этом трудном и интересном деле. Консультация БЕСПЛАТНАЯ.
              </p>
              <button class="tabs_button" @click="modalOut">Подробнее</button>
            </v-tab>

            <v-tab title="ДИЗАЙН ЖИЛЫХ ПОМЕЩЕНИЙ">
              <div class="tabs_content">
                <img class="tabs_img" src="~/assets/img/Tabs/solution.png" />
              </div>
              <p class="tabs_header">Дизайн жилых помещений</p>
              <p class="tabs_text">
                Преобразуем пространство, создаем его заново именно для вас! У нас острая необходимость делать именно уникальные интерьеры, в которых будут жить уникальные люди. Спроектируем любое помещение: от студии до огромного жилого дома.
              </p>
              <nuxt-link class="tabs_button" to='/services/1'>Подробнее</nuxt-link>
            </v-tab>

            <v-tab title="КОММЕРЧЕСКИЙ ДИЗАЙН">
              <div class="tabs_content">
                <img
                  class="tabs_img"
                  src="~/assets/img/Tabs/modern-house.png"
                />
              </div>
              <p class="tabs_header">Коммерческий дизайн</p>
              <p class="tabs_text">
                Любой бизнес достоен качественного оформления и индивидуального подхода! 
            Создаем идею, которая подойдет именно вам и будет неотъемлемой частью вашего дела. Сотни вариаций помещений и функций для них только больше зажигают огонь в наших глазах и сердцах ваших клиентов.
              </p>
              <nuxt-link class="tabs_button" to='/services/2'>Подробнее</nuxt-link>
            </v-tab>
            <v-tab title="АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ">
              <div class="tabs_content">
                <img class="tabs_img" src="~/assets/img/Tabs/skyline.png" />
              </div>
              <p class="tabs_header">Архитектурное проектирование</p>
              <p class="tabs_text">
                В первую очередь мы архитекторы с опытом и образованием. И при работе по принципу «от общего к частному» конечно предпочитаем начать с фундаментов и фасадов. Проектируем индивидуальные частные дома, таунхаусы, коммерческие объекты любых масштабов и конструкций в фирменном стиле!
              </p>
              <nuxt-link class="tabs_button" to='/services/3'>Подробнее</nuxt-link>
            </v-tab>
            <v-tab title="АВТОРСКИЙ НАДЗОР">
              <div class="tabs_content">
                <img class="tabs_img" src="~/assets/img/Tabs/home.png" />
              </div>
              <p class="tabs_header">Авторский Надзор</p>
              <p class="tabs_text">
                Одна из самых важных составляющих работы с нами! Нам очень важно делать не бумажные проекты, а проходить все этапы нашего детища и ставить последнюю вазу на полку. Ведь именно с нашим опытом, присутствием, контролем, организацией, комплектацией - получится стопроцентная реализация проекта. Экономим ваше время, деньги, а главное нервы.
              </p>
              <nuxt-link class="tabs_button" to='/services/4'>Подробнее</nuxt-link>
            </v-tab>
          </vue-tabs>
        </div>
        <!-- <div class="start">
          <div class="request">
        </div>
        </div> -->
      </div>
    </div>
  <!-- </section> -->
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/paper.css";
import Modal from '~/components/UI/Modal'
export default {
  components: {
    VueTabs,
    VTab,
    Modal
  },
  data(){
    return{
      modalFirst: false,
    }
  },
  methods: {
    modalOut(){
      this.modalFirst = true
    }
  }
};
</script>

<style lang="scss">

.tab_page{
  padding: 3em 0;

}
.tabs_button{
  margin: 1em 0;
    border: solid 1px rgba(1, 1, 1, 0.2);
    color: #333;
    background-color: rgba(255, 255, 255, 0);
    font-size: 15px;
    padding: 5px 30px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    justify-content: center;
    &:hover{
        background-color: #c76572;
        color: #fff;
    }
}
.services_title {
  font-size: 25px;
  text-transform: uppercase;
  color: #222;
  letter-spacing: 3px;
  position: relative;
  padding-bottom: 2em;
  width: 100%;
  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 2px;
    content: "";
    background: #c76572;
    margin-bottom: 2em;
  }
}
.vue-tabs.stacked{
    height: 500px;
  }
.vue-tabs .nav-stacked {
    border-right: 1px solid #f1eae0;
    font-size: 14px;
    font-weight: 600;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 500px;
}
.vue-tabs .left-vertical-tabs {
  width: 50%;
  min-width: 50%;
  background-image: url('~/assets/img/Tabs/bg_1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
}
.vue-tabs .nav>li>a:focus, .vue-tabs .nav>li>a:hover {
    text-decoration: none;
    background-color: rgba(238, 238, 238, 0);
}
.vue-tabs .nav > li span.title {
    display: flex;
    justify-content: right;
    font-size: 20px;
    font-family: 'Helvetica';
    font-weight: 400;
    color: rgba(255, 255, 255, 0.782);
}
.tab-content {
  width: 50%;
  margin-left: 2em;
}
.tabs_img {
  height: 100px;
  width: auto;
}
.tabs_content {
  width: 100%;
  display: flex;
  justify-content: left;
}
.tabs_header {
  padding-top: 1em;
  line-height: 1.5;
  color: #1b212c;
  font-weight: 400;
  font-size: 30px;
}
.tabs_text {
  padding-top: 1em;
  font-family: "Rubik", Arial, sans-serif;
  font-size: 17px;
  line-height: 1.8;
  font-weight: 400;
  color: #798899;
}
@media screen and (max-width: 770px) {
  .vue-tabs.stacked{
    height: 500px;
  }
  .tab-content{
    margin-left: 1em;
  }
  .tab-content .right-text-tabs{
    height: 480px;
    overflow-y: scroll;
  }
}
@media screen and(max-width: 500px) {
.vue-tabs.stacked{
    flex-direction: column;
    flex-wrap: wrap;
  }
.vue-tabs .left-vertical-tabs{
  width: 100% !important;
}
.vue-tabs .right-text-tabs{
  width: 90% !important;
  margin: 0 auto;
}
.tab_page{
  height: 1000px;
}
}
@media screen and(max-width: 900px) {
  .vue-tabs .nav > li span.title{
    text-align: right;
  }
}
@media screen and(max-width: 770px) {
  .vue-tabs .nav > li span.title{
    font-size: 14px;
  }
  .tabs_header{
    font-size: 18px;
  }
  .tabs_text{
    font-size: 13px;
  }
}

</style>