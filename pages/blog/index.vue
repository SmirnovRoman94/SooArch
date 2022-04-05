<template>
    <div class="blog_pager">
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <div class="container">
            <div class="blog_page">
                <BlogList :blogs="blogFilter"/>
                <Search :value ="search"  
              placeholder="Найти пост"
              @search="search = $event"/>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import BlogList from '~/components/blog/BlogList'
import Search from '~/components/Search'
export default {
    components: {
        Header,
        Menu,
        BlogList,
        Search
    },
head(){
    let title = "Блог",
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
        content: 'https://sooarch.ru/blog',
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
    content: "https://sooarch.ru/blog",
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
                title: 'Блог',
                link: '/blog',
                linkTitle: 'Блог'
            },
            menu: false,
            search: '',
        }
    },
    mounted(){
        this.$store.dispatch('blogInite')
    },
    computed: {
        blogLoaded(){
            return this.$store.getters.getBlog
        },
        blogFilter(){
            let array = this.blogLoaded
            let search = this.search
            if(!search) return array
            search = search.trim().toLowerCase()

            //filter

            array = array.filter(function (item){
                if(item.title.toLowerCase().indexOf(search) !== -1){
                    return item
                }
            })
            //error
            return array

        }
    },
    methods: {
        OnMenu() {
            this.menu = true;
        },
    }
}
</script>

<style lang="scss" scoped>
.blog_page{
    padding: 7em 0;
}

</style>