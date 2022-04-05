<template>
    <div class="service_page">
         <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <Service :service="servicer"/>
    </div>
</template>

<script>
import axios from "axios";
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import Service from '~/components/sevices/Service'
export default {
    components: {
        Header,
        Menu,
        Service
    },
    head (){
      let title = this.servicer.header,
          descr = this.servicer.text,
          id = this.servicer.id
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
        content: `https://sooarch.ru/services/${id}`,
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
    content: `https://sooarch.ru/services/${id}`,
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
            .get(`https://sooarch-46978-default-rtdb.firebaseio.com/services/${contex.params.id}.json`)
            .then((res) => {
                console.log(res)
                return {
                    servicer: {...res.data, id: contex.params.id},
                }
            })
            .catch((e) => contex.error(e))
    },
    
    data(){
        return{
            menu: false,
            page: {
                title: '',
                link: '/services',
                linkTitle: 'Услуги'
            },
            
        }
    },
    mounted(){
      console.log(this.servicer)
      return this.page.title = this.servicer.header
    },
    methods: {
        OnMenu() {
            this.menu = true;
        }
    }
}
</script>

