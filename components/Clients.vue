<template>
  <client-only>
    <section class="clients_tab">
      <div class="container">
        <div data-aos="fade-up" class="clients">
        <div class="clients_content">
          <div class="clients_content_item">
            <h3 class="clients_header">Наши клиенты</h3>
            <p class="clietns_text">
              Вы можете прикоснуться к нашим работам, посетите один из проектов SOOARCH
            </p>
          </div>
        </div>
        <div class="clients_crousel">
          <VueSlickCarousel v-bind="settings">
            <div
              class="clients_cart"
              v-for="client in clients"
              :key="client.id"
            >
              <a :href="client.url"><img class="cart_img" :src="client.img" :alt="client.author" /></a>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      </div>
    </section>
  </client-only>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      clients: [
        {
          id: 1,
          img: require("assets/img/Clients/CHICAGO.png"),
          url: "http://salon-chicago.ru/"
        },
        {
          id: 2,
          img: require("assets/img/Clients/felichito.png"),
          url: "https://tomesto.ru/spb/places/felichito"
        },
        {
          id: 3,
          img: require("assets/img/Clients/marmelad2.png"),
          url: "https://vk.com/marmelad_spb"
        },
        {
          id: 4,
          img: require("assets/img/Clients/XO.png"),
          url: "https://2gis.ru/spb/firm/70000001057733990"
        },
        {
          id: 5,
          img: require("assets/img/Clients/СИСТЕМА.png"),
          url: "https://tnsystem.ru/"
        },
      ],
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnDotsHover: true,
      },
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.width = window.innerWidth
      if(this.width <= 770){
        return this.settings.slidesToShow = 1
      }else{
        return this.settings.slidesToShow = 2
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.clients {
  display: flex;
}
.clients_content {
  width: 40%;
  margin-right: 1em;
  background-color: #222;
}
.clients_content_item {
    width: 70%;
    margin: 0 auto;
    padding: 2em 1em;

    .clients_header {
      font-weight: 400;
      font-size: 28px;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: #fff;
      padding-bottom: 2em;
    }
    .clietns_text {
      font-family: "Rubik", Arial, sans-serif;
      font-size: 17px;
      line-height: 1.8;
      font-weight: 400;
      color: #fff;
    }
  }
.clients_crousel {
  width: 59%;
}
.cart_img {
        width: 90%;
        height: 200px;
        margin:  25px auto;
      }
.clients_cart {
    background: rgba(131, 129, 129, 0.425);
    position: relative;
    border: 1px solid rgba(131, 129, 129, 0.425);
    height: 250px;
  }
@media screen and(max-width:960px ) {
  .clients_cart{
    height: 300px;
    display: flex;
    align-items: center;
  }
  .clients{
    height: 300px;
  }
  .clients_content_item .clients_header{
    padding-bottom: 0;
  }
}
@media screen and (max-width: 770px) {
  .clients_content_item .clients_header{
    font-size: 20px;
  }
  .clients_content_item .clietns_text{
    font-size: 15px;
    padding-top: 1em;
  }
  .clients{
    height: 250px;
  }
  .clients_cart{
    height: 250px;
  }
  .clients_content_item{
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .clients{
    flex-wrap: wrap;
    height: 100%;
  }
    .clients_cart{
      height: 200px;
    }
  .cart_img{
    height: 200px;
    margin-top: 0;
    width: 100%;
  }
  .clients_content{
      width: 100%;
      margin-right: 0;
  }
  .clients_crousel{
    width: 100%;
  }
}

</style>