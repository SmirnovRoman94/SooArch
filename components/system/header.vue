<template>
    <div class="header">
      <div class="header_content">
        <div class="header_cont">
          <div class="header_item">
            <div class="item_logo">
                    <p class="logo">SOO</p>
                    <div class="logo_left">
                        <div class="logo_span">A
                            <span class="logo_span3"></span>
                        </div>
                        <p class="logo2">RC</p>
                        <div class="logo_span">H
                             <span class="logo_span2"></span>
                        </div>
                    </div>
                </div>
                <button class="btn_header"  @click="showMenu">
                  <i class="bar"></i>
                </button>
          </div>
        </div>
        <p class="settime">{{title}}</p>
        <div class="header_link">
          <div class="header_link_item">
            <nuxt-link class="header_link_i" to="/">Главная</nuxt-link>
            <nuxt-link class="header_link_i" :to="pageName.link">{{pageName.linkTitle}}</nuxt-link>
          </div>
          <h1 class="name_page">{{pageName.title}}</h1>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        pageName: {
            type: Object,
            required: true
        }
    },
    data(){
      return{
        tabs: [
          "Профессиональная консультация",
          "Дизайн жилых помещений",
          "Коммерческий дизайн",
          "Архитектурное проектирование",
          "Авторский Надзор"
        ],
        title: "Архитектурное проектирование"
      }
    },
    methods: {
        showMenu(){
            this.$emit('hideMenu')
        },
        get(){
        this.tabs.forEach((el, i) => {
            setTimeout(() => {
              return this.title = el
            }, (i+1) *1500)
          })
      }
    },
    mounted(){
      setInterval(() => {
        this.get()
      },7500)
    }

}
</script>


<style lang="scss" scoped>
.settime{
    color: #fff;
    text-transform: uppercase;
    text-align: center;

}
.header {
  width: 100%;
  height: 100%;
  padding: 2em 0;
  background-image: url("~/assets/img/Carousel/bg_2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 500px;
  position: relative;

  .header_content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background: #1b212c;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header_cont {
      display: flex;
      justify-content: center;
      .header_item {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 2em 3em;
        .logo {
          color: #fff;
          font-size: 40px;
        }
        .bar {
          position: relative;
          display: inline-block;
          width: 20px;
          height: 2px;
          color: #fdfdfd;
          font: bold 14px/0.4 Helvetica;
          text-transform: uppercase;
          text-indent: -55px;
          background: #fff;

          &::before {
            top: -7px;
            content: "";
            width: 30px;
            height: 2px;
            background: #fff;
            position: absolute;
            left: 0;
            transition: 0.2s;
          }
          &::after {
            bottom: -7px;
            content: "";
            width: 30px;
            height: 2px;
            background: #fff;
            position: absolute;
            left: 0;
            transition: 0.2s;
          }
        }
      }
    }
    .header_link {
      padding-bottom: 3em;
      display: flex;
      align-items: center;
      flex-direction: column;
      color: #fff;
      .header_link_item {
        padding-bottom: 2em;
        .header_link_i {
          text-decoration: none;
          color: #fff;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          text-transform: uppercase;
          &:last-child {
            margin-left: 1em;
          }
        }
      }
      .name_page {
        font-size: 48px;
        line-height: 1.2;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 5px;
        display: inline-block;
      }
    }
  }
}
//logo
.logo_left{
    display: flex;
    font-size: 40px;
    padding-left: 10px;
    color: #fff;
}

.logo_span{
    position: relative;
}
.logo_span3{
    position: absolute;
    left: -83px;
    transform: rotate(111deg);
    border-bottom: 5px solid #fff;
    width: 200px;
    animation: logo;
    animation-duration: 2s;
}
.logo_span2{
    position: absolute;
    left: -45px;
    transform: rotate(90deg);
    border-bottom: 5px solid #fff;
    width: 138px;
    animation: logo2 ;
    animation-duration: 1s;
}
@keyframes logo {
    from{
        width: 0;

    }
    to{
        width: 200px;
        
    }
}
@keyframes logo2 {
    from{
        width: 0;
       
    }
    to{
        width: 138px;
       
    }
}
.logo{
                width: 50%;
                font-size: 40px;
                text-align: left;
                animation: logo3;
                animation-duration: 1s;
            }
            @keyframes logo3 {
                from{
                    margin-left: -100%;
                }
                to{
                    margin-left: 0px;
                }
            }
.btn_header{
  width: 50px;
  outline: none;
  text-decoration: none;
  background-color: #fff0;
  color: #000;
  border: none;
  :hover{
    transform: scale(1.5);
  }
}
@media screen and(max-width: 400px){
  .header .header_content .header_cont .header_item{
    padding: 2em 1em;
  }
  .header .header_content .header_link .name_page{
    font-size: 30px;
  }
}
</style>