import axios from 'axios'

let dynamicRoutes = async () => {
  let resForWork = () => {
    return axios.get('https://sooarch-46978-default-rtdb.firebaseio.com/works.json').then(res => {
      const workArray = []
      for( let key in res.data) {
        workArray.push({...res.data[key], id: key})
      }
  //routes
  return workArray.map((work) => {
    return '/portfolio/' + work.id
  })
 })
  } 
  let resForPost = () => {
    return axios.get('https://sooarch-46978-default-rtdb.firebaseio.com/blog.json').then((res) => {
      // get id
      const postsArray = []
          for( let key in res.data) {
            postsArray.push({...res.data[key], id: key})
          }
      //routes
      return postsArray.map((item) => {
        return item.id = '/blog/' + item.id
      })
    })
  };
  let resForPrice = () => {
    return axios.get('https://sooarch-46978-default-rtdb.firebaseio.com/prices.json').then((res) => {
      // get id
      const Array = []
          for( let key in res.data) {
            Array.push({...res.data[key], id: key})
          }
      //routes
      return Array.map((item) => {
        return item.id = '/pricing/' + item.id
      })
    })
  };
  let resForServices = () => {
    return axios.get('https://sooarch-46978-default-rtdb.firebaseio.com/services.json').then((res) => {
      // get id
      const Array = []
          for( let key in res.data) {
            Array.push({...res.data[key], id: key})
          }
          Array.shift(0)
      //routes
      return Array.map((item) => {
        return item.id = '/services/' + item.id
      })
    })
  };
  resForWork();
  resForPost();
  resForPrice();
  resForServices()


  let router1 = (await resForWork()).concat(await resForPost())
  let router2 = (await resForPrice()).concat(await resForServices())
  let routering = router1.concat(router2)
  
return routering

 
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "yandex-verification", content: "f290d8e45dbd3b04" },
      { name: "google-site-verification", content: "vSh_Sk0lPQLuT7ZH_BtdX3bzFVGDQMo5q4p6AYBUE2s"},
      { name:"referrer", content:"origin"},
      { name: 'keywords', content: 'дизайнер, дизайнер спб, design, дизайн интерьера, дизайн интерьера спб, дизайн, интерьер, фото интерьера, архитектура, стили интерьера, услуги дизайна квартир, стоимость визуализаций, дизайн проект с визуализацией, дизайн дома цены, квартира визуализация, спб, спб дизайн дома'},
      {name: 'description', content: 'Если вы ждали знак, то это он! Дизайн Интерьера, Коммерческий дизайн и Архитектурное проектирование. Качество и стиль — это и есть SOOARCH DESIGN.'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://sooarch.ru/logo.ico'}
    ]
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  loading: '~/components/Loading.vue',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '~/assets/scss/main.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/aos', ssr: false },
    { src: '~plugins/icons.js', mode: 'client' },
    { src: 'plugins/firebase.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-compress'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '88074352',
        webvisor: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ]
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    build: {
      vendor: ['axios']
    }
  },
  generate: {
    routes: dynamicRoutes
  }

}