<template>
    <div class="work_page">
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <div class="container">
            <Work :work="workr"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import Work from '~/components/portfolio/Work'
export default {
    components: {
        Header,
        Menu,
        Work,
    },
    head (){
      let title = this.workr.title,
          descr = this.workr.desc,
          id = this.workr.id
    return{
      title: title,
      descr: descr,
      id: id,
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
        content: `https://sooarch.ru/portfolio/${id}`,
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
    content: `https://sooarch.ru/portfolio/${id}`,
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
    asyncData(contex){
        return axios
            .get(`https://sooarch-46978-default-rtdb.firebaseio.com/works/${contex.params.id}.json`)
            .then((res) => {
                return {
                    workr: {...res.data, id: contex.params.id}
                }
            })
            .catch((e) => contex.error(e))
    },
    data(){
        return{
            page: {
                title: '',
                link: '/portfolio',
                linkTitle: 'Портфолио'
            },
            menu: false,
        }       
    },
    mounted(){
      return this.page.title = this.workr.title
    },
    methods: {
         OnMenu(){
            this.menu = true;
        }
    }
}
</script>

<style lang="scss">
.vgs__container__img{
  object-fit: contain !important;
}
.vgs__container{
  margin:  17vh auto;
  border-radius: 0px;
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>