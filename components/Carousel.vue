<template>
<client-only>
  <div class="carousel">
    <VueSlickCarousel  v-bind="settings">
      <div class="overlay" v-for="image in images" :key="image.id">
        <img class="carousel_img" rel="preload" :src="image.url" :alt="image.alt" />
        <div class="text_item" data-aos="fade-up">
          <p class="carousel_text">{{ image.header }}</p>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
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
      width: 0,
      images: [
        {
          url: require("~/assets/img/Carousel/bg_1.jpg"),
          alt: "img1",
          header: "#01 Коммерческий Дизайн",
          id: 1,
        },
        {
          url: require("~/assets/img/Carousel/bg_2.jpg"),
          alt: "img2",
          header: "#02 Дизайн Интерьера",
          id: 2,
        },
        {
          url: require("~/assets/img/Carousel/bg_3.jpg"),
          alt: "img3",
          header: "#03 Архитектурное проектирование",
          id: 3,
        },
        {
          url: require("~/assets/img/Carousel/bg_4.jpg"),
          alt: "img4",
          header: "#04 Авторский Надзор",
          id: 4,
        },
      ],
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
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
        return this.settings.slidesToShow = 2
      }else{
        return this.settings.slidesToShow = 3
      }
    }
  }
};
</script> 

<style >
.slick-dots li button:before{
  font-size: 10px;
}
.carousel{
  margin-bottom: 2em;
}
.overlay {
  width: 100%;
  display: inline-block;
  height: 800px;
  position: relative;
}
.text_item{
  position: absolute;
  top: 50%;
  width: 100%;
}
.carousel_img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
}

.carousel_text {
  background: rgba(2, 2, 2, 0.288);
  font-size: 20px;
  color: white;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 5px;
  width: 100%;
}
@media screen and(max-width: 770px) {
  
}
</style>