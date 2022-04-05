<template>
    <div>
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <div class="container">
            <div class="price_page">
                <Price :pricer="price" @onModal="modalClick"/>
            </div>
            <Modal v-show="modalFirst"  @close="modalFirst = false" title="Request a Quote"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Header from '~/components/system/header'
import Price from '~/components/pricing/Price'
import Modal from '~/components/UI/Modal'
import Menu from '~/components/system/Menu'
export default {
    components: {
        Price,
        Modal,
        Header,
        Menu
    },
    head (){
      let title = this.price.header,
          descr = this.price.desc,
          id = this.price.id
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
        content: `https://sooarch.ru/pricing/${id}`,
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
    content: `https://sooarch.ru/pricing/${id}`,
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
            .get(`https://sooarch-46978-default-rtdb.firebaseio.com/prices/${contex.params.id}.json`)
            .then((res) => {
                return {
                    price: {...res.data, id: contex.params.id},
                }
            })
            .catch((e) => contex.error(e))
    },

    data(){
        return{
            modalFirst: false,
            menu: false,
            page: {
                title: '',
                link: '/pricing',
                linkTitle: 'Стоимость'
            },
            ip: [],
            ty: [],
            arra: [],
            dubl: [],
            duble: []
        }
    },
    mounted(){
      this.qwerty()
      return this.page.title = this.price.header
    },
    methods: {
        modalClick(){
            this.modalFirst = true
        },
        OnMenu() {
            this.menu = true;
        },
        qwerty(){
          var ArrayWork = []
          var ArrayPost = []
          var routering = []
          let resForWork = () => {
            return axios
                    .get(`https://sooarch-46978-default-rtdb.firebaseio.com/works.json`)
                    .then(res => {
                    const workArray = []
                    for( let key in res.data) {
                      workArray.push({...res.data[key], id: key})
                    }
                     ArrayWork = workArray.map((num) => {
                        return num.id = '/portfolio/' + num.id
                      })
                    })
                    .catch((e) => contex.error(e))
          };
          let resForPost = () => {
            return axios.get('https://sooarch-46978-default-rtdb.firebaseio.com/blog.json').then((res) => {
              // get id
              const postsArray = []
                  for( let key in res.data) {
                    postsArray.push({...res.data[key], id: key})
                  }
              //routes
              ArrayPost = postsArray.map((item) => {
                return item.id = '/blog/' + item.id
              })
            })
          };

          resForWork();
          resForPost();
          setTimeout(() => {
            return  routering = ArrayWork.concat(ArrayPost)
          },2000)
          setTimeout(() => {
            console.log(routering)
          },4000)
          // let routering = ['/portfolio/-MxW9u4vvAwDeQjGUCyy', '/portfolio/-MxWAPIrkE8KGCbUGPGh', '/portfolio/-MxWAZunjZsoqlry9NgP', '/portfolio/-MxWAh5rIh0NhnHwZDsw', '/portfolio/-MxWAoWhSz-4kn16ubhK', '/portfolio/-MxWAvjtAysRvywE7fMx', '/portfolio/-MxWB18LuepEHwBFtXPe', '/portfolio/-MxWB7J_URIsZtWP14Eb', '/portfolio/-MxZ3ujP44znCDg9emo0', '/portfolio/-MxuqCQ-wumGoJKxeM6z','/blog/-MxWLQpa9up15PFCxG5c']
        // return routering
        

        },
        qw(){
          return axios
            .get(`https://sooarch-46978-default-rtdb.firebaseio.com/works.json`)
            .then(res => {
            // const postsArray = []
            for( let key in res.data) {
                this.ip.push({...res.data[key], id: key})
            }
                const dubl = this.ip.map((num) => {
                  return num.id = '/portfolio/' + num.id
                })
                console.log(dubl)
                return this.dubl = dubl
            })
            .catch((e) => contex.error(e))
        },
        wer(){
          return axios
            .get(`https://sooarch-46978-default-rtdb.firebaseio.com/blog.json`)
            .then(res => {
            // const postsArray = []
            for( let key in res.data) {
                this.ty.push({...res.data[key], id: key})
            }
            console.log(this.ip)
                const duble = this.ty.map((num) => {
                  return num.id = '/blog/' + num.id
                })
                console.log(duble)
                return this.duble = duble
            })
            .catch((e) => contex.error(e))
        },
        arraConcat(){
          this.arra = this.dubl.concat(this.duble)
          console.log(this.arra)
        }
    }
}
</script>

<style lang="scss" scoped>
.price_page{
    padding: 5em 0;
}
</style>