<template>
    <div>
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <div class="portfolio_page">
            <div class="controls">
                <button class="controls_item">Все проекты</button>
                <button class="controls_item">Жилые Интерьеры</button>
                <button class="controls_item">Коммерческие Интерьеры</button>
                <button class="controls_item">Архитектурное проектирование</button>
            </div>
            <WorkList :images="workLoaded"/>
        </div>
    </div>
</template>

<script>
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import WorkList from '~/components/portfolio/WorkList'
import Loading from '~/components/Loading'
export default {
    components: {
        Header,
        Menu,
        WorkList,
        Loading
    },
    head(){
    let title = "Портфолио",
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
        content: 'https://sooarch.ru/portfolio',
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
    content: "https://sooarch.ru/portfolio",
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
            page: {
                title: 'Портфолио',
                link: '/portfolio',
                linkTitle: 'Портфолио'
            }
        }
    },
    mounted(){
        this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    }),
    this.loaderWork
    },
    computed: {
        workLoaded(){
            return this.$store.getters.getWork
        },
        loaderWork(){
            this.$store.dispatch('workInite')
        }
    },
    methods: {
        OnMenu() {
            this.menu = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.controls{
    margin: 1em 0;
    display: flex;
    justify-content: space-around;
    .controls_item{
        margin: 1em 1em;
        border: solid 1px rgb(0, 0, 0);
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
            background-color: #c76572;
            color: #fff;
        }
    }
}
.portfolio_page{
    padding: 7em 0;

    .portfolio_more{
        padding: 1em;
        background: #4a5562;
        border: 1px solid #4a5562;
        color: #fff;
        margin-bottom: 1em;
        &:hover{
            background: #fff;
            color: #4a5562
        }
    }
    .more{
        width: 100%;
        display: flex;
        justify-content: center;
    }
}
@media screen and(max-width: 980px) {
    .controls{
        flex-wrap: wrap;
        .controls_item{
            margin: 1%;
            width: 45%;

        }
    }
}

@media screen and(max-width: 500px) {
    .controls{
        .controls_item{
        width: 100%;
    }}
}
</style>