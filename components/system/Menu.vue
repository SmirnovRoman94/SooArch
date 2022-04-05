<template>
    <div class="menu">
        <div class="black">
            <div class="menu_image">
            </div>
            <header class="header">
                <button @click="closeMenu" class="btn_header">
                    <i class="menu_bar"></i>
                </button>
            </header>
            <div class="menu_content">
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
                <ul class="menu_list">
                    <li class="list_item" v-for="item in list" :key="item.id">
                         <nuxt-link :to="item.url" class="menu_list_item" :class="[item.id%2==0 ? 'left' : 'right']">
                            <span>
                                <small class="number_item">{{item.number}}</small>
                                {{item.name}}
                            </span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list: [
                {
                    id: 1,
                    name: 'Главная',
                    url: '/',
                    number: '01'
                },
                {
                    id: 2,
                    name: 'Услуги',
                    url: '/services',
                    number: '02'
                },
                {
                    id: 3,
                    name: 'Портфолио',
                    url: '/portfolio',
                    number: '03'
                },
                {
                    id: 4,
                    name: 'О нас',
                    url: '/about',
                    number: '04'
                },
                {
                    id: 5,
                    name: 'Стоимость',
                    url: '/pricing',
                    number: '05'
                },
                {
                    id: 6,
                    name: 'Блог',
                    url: '/blog',
                    number: '06'
                },
                {
                    id: 7,
                    name: 'Контакты',
                    url: '/contact',
                    number: '07'
                }
            ],
            left: false
        }
    },
    methods: {
        closeMenu(){
            this.$emit('close')
        }
    },
    
    
}
</script>

<style lang="scss" scoped>
.item_logo{
    height: 20vh;
}

.logo_left{
    display: flex;
    font-size: 40px;
    padding-left: 10px;
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
    animation: logo2;
    animation-duration: 2s;
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
        width: 137px;
       
    }
}

    .menu{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: #222;
        z-index: 1002;
        text-align: center;
        
    }
    .black{
        position: relative;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        opacity: 1;
    }
.menu_image{
            position: absolute;
            background-image: url('~/assets/img/Menu/bg_1.jpg');
            width: 40%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

        }
         .menu_bar{
            &::before{
                transform: rotateZ(45deg);
                content: '';
                width: 30px;
                height: 2px;
                background: #fff;
                position: absolute;
            }
            &::after{
                transform: rotateZ(-45deg);
                content: '';
                width: 30px;
                height: 2px;
                background: #fff;
                position: absolute;
            }
        }
        .menu_content{
            padding-top: 10%;
            color: #fff;
            margin-left: 50%;

            .logo{
                width: 50%;
                font-size: 40px;
                text-align: left;
                animation: logo3;
                animation-duration: 1s;
            }
            @keyframes logo3 {
                from{
                    margin-left: -50%;
                }
                to{
                    margin-left: 0;
                }
            }
            .menu_list{
                padding-top: 3em;
                height: 60vh;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .list_item{
                    font-size: 30px;
                    text-align: left;
                }
                .menu_list_item.left{
                    animation: left;
                    animation-duration: .5s;
                }
                @keyframes left {
                    from{
                        margin-left: 100%;
                    }
                    to{
                        margin-left: 0%;
                    }
                }
                .menu_list_item.right{
                    animation: right;
                    animation-duration: .5s;
                }
                @keyframes right {
                    from{
                        margin-left: -100%;
                    }
                    to{
                        margin-left: 0%;
                    }
                }
                .menu_list_item{
                    color: #fff;
                    font-weight: 600;
                    position: relative;
                    .number_item{
                        padding-top: 3em;
                        bottom: 3px;
                        left: -30px;
                        font-size: 20px;
                        color: rgba(255, 255, 255, 0.3);
                        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                        margin-right: 1em;
                    }
                    &:hover{
                        color: #c76572;
                    }
                }

            }
        }

.btn_header{
    position: absolute;
    right: 3em;
    top: 3em;
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
@media screen and(max-width: 600px) {
    .menu_image{
        display: none;
    }
    .menu_content{
        margin-left: 10vw;
    }
}
@media screen and(max-height: 600px){
    .menu_content{
        padding-top: 5%;
    }
    .menu_content .menu_list .list_item{
        font-size: 15px;
    }
    li{
        padding: 0;
    }
    .menu_content .menu_list{
        margin-left: 40%;
        margin-top: -3em;
    }
}
</style>