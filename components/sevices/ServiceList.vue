<template>
    <section>
        <div class="container">
            <div class="service" v-for="item in services" :key="item.id" :data-aos="[item.id%2==0 ? 'fade-right': 'fade-left']">
                <img class="service_img" :src="item.img" :alt="item.alt" :class="{'right' : item.id%2 == 0}">
                    <div class="service_content" :class="{'right' : item.id%2 == 0}">
                        <h3 class="service_header">{{item.header}}</h3>
                        <p class="service_text">{{item.text}}</p>
                        <nuxt-link :to="/services/+item.id" class="btn_service">Подробнее<chevronRight-mdi></chevronRight-mdi></nuxt-link>
                    </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        services: {
            type: Array,
            required: true
        }
    },
    computed: {
        filterService(item){
            if(item.id %2==0){
                return 'fade-left'
            }else{
                return 'fade-right'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
//services
.service{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .service_img{
        width: 100%;
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .service_img.right{
        grid-column-start: 2;
        grid-column-end: 3;
    }
    .service_content{
        padding: 90px 40px;
        grid-column-start: 2;
        grid-column-end: 3;
        margin: auto 0;
        .service_header{
            text-transform: uppercase;
            font-size: 25px;
            color: #ba7338;
            padding-bottom: 5px;
        }
        .service_text{
            color: #798899;
            text-align: justify;
        }
        .btn_service{
            margin-top: 30px;
            border: solid 1px rgba(1,1,1,.2);
            color: #333;
            background-color: #ffffff00;
            font-size: 15px;
            padding: 5px 30px;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 2px;
            display: flex;
            align-items: center;
            &:hover{
                background-color: #c76572;
                color: #fff;
            }
        }
    }
    .service_content.right{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }
}
@media screen and(max-width:1100px) {
    .service .service_content .service_header{
        font-size: 20px;
    }
    .service .service_content .service_text{
        font-size: 13px;
    }
    .service .service_content .btn_service{
        margin-top: 10px;
    }
    .service .service_content{
        padding: 40px 40px
    }
}
@media screen and(max-width:770px) {
    .service{
        // .service_img{
        //     height: 100%;
        // }
        .service_img{
            display: none;
        }
        .service_content{
            grid-column-start: 1;
            grid-column-end: 3;
            padding: 10px 10px;
        }
        .service_content.right{
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }
}
</style>