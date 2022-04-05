<template>
    <div class="index">
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <div class="container">
            <div class="price_page">
                <PricingList :pricing="priceLoaded"/>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import PricingList from '~/components/pricing/PricingList'
export default {
    components: {
        Header,
        Menu,
        PricingList,
    },
    head(){
    let title = "Стоимость",
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
        content: 'https://sooarch.ru/pricing',
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
    content: "https://sooarch.ru/pricing",
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
                title: 'Стоимость',
                link: '/pricing',
                linkTitle: 'Стоимость'
            },
            menu: false,
            modalFirst: false,
            
        }
    },
    mounted(){
        this.$store.dispatch('priceInite')
    },
    computed: {
        priceLoaded(){
            return this.$store.getters.getPrice
        }
    },
    methods: {
        OnMenu(){
            this.menu = true;
        },
        mod() {
            this.modalFirst = true;
        },
    }
}
</script>

<style lang="scss" scoped>
.index{
  overflow-x: hidden;
}
.price_page{
    padding: 7em 0;
}
@media screen and(max-width: 700px) {
    .request{
        width: 100%;
        margin-top: 0;
    }
    .price_page{
        padding: 2em 0;
    }
}
</style>