<template>
    <!-- <section> -->
        <div class="port">
        <div class="container">
            <div class="portfolio_content">
                    <h1 class="potrtfolio_header">Портфолио</h1>
                    <p class="potrtfolio_text">Примеры работ, которые Вы можете увидеть</p>
                    <div class="controls">
                                <button @click="allproject" class="controls_item">Все проекты</button>
                                <button @click="livingProject" class="controls_item">Жилые Интерьеры</button>
                                <button @click="commertProject" class="controls_item">Коммерческие Интерьеры</button>
                                <button @click="archProject" class="controls_item">Архитектурное проектирование</button>
                    </div>
                </div>
        </div>
            <div class="portfolio">
                    <div  class="portfolio_img"  v-for="image in Workfilter" :key="image.id" :id="image.grid">
                        <nuxt-link  :to="admin ? `/admin/portfolio/${image.id}` : `/portfolio/${image.id}`">
                        <div class="cont">
                            <h3 class="portfolio_cont">{{image.title}}</h3>
                        </div>
                        <div class="img_item">
                            <img data-aos="zoom-in" class="portfolio_img_item" :src="image.url" :alt="image.alt" :class="image.grid"/>
                        </div>
                        </nuxt-link>
                    </div>
            </div>
        </div>
    <!-- </section> -->
</template>


<script>
export default {
    props: {
        images: {
            type: Array,
            required: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    },

    data(){
        return{
            loadImages: [],
            living: 'living',
            commertial: 'commertial',
            architect: 'architect'
        }
    },
    mounted(){
        setTimeout(this.allproject,2000)
    },
    computed: {
        Workfilter(){
            let array = this.loadImages

            //filter
            array = array.filter(function (item, index){
                if(index <=8){
                    return item
                }
            })
            //error
            return  array
        },

    },
    methods: {
        allproject(){
            this.loadImages = this.images
        },
        livingProject(){
            this.filterProject(this.living)
        },
        commertProject(){
            this.filterProject(this.commertial)
        },
        archProject(){
            this.filterProject(this.architect)
        },
        filterProject(filtred){
            let array = this.images
            array = array.filter(function(item){
                if(item.filter == filtred){
                    return item
                }
            })
            return this.loadImages = array

        }
    }
}
</script>

<style lang="scss" scoped>
.port{
    background-color: #222;
    padding: 3em 0;
}
.portfolio{
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 0 1em;
    column-gap: 1em;
    row-gap: 1em;
}
.controls{
    margin: 1em 0;
    display: flex;
    justify-content: space-around;
    .controls_item{
        margin: 1em 1em;
        border: solid 1px rgba(253, 253, 253, 0.2);
        color: #fff;
        background-color: rgba(255, 255, 255, 0);
        font-size: 15px;
        padding: 10px 30px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background-color: #c76572;
            color: #fff;
        }
    }
}
.potrtfolio_header{
    font-weight: 400;
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;
    position: relative;
    &::after{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 60px;
        height: 2px;
        content: "";
        background: #c76572;
    }
}
.potrtfolio_text{
    font-family: "Rubik", Arial, sans-serif;
    font-size: 17px;
    line-height: 1.8;
    font-weight: 400;
    color: #798899;
}
.portfolio_img{
    position: relative;
    width: 32%;
    height: 400px;
}

.portfolio_img:hover .cont {
    animation: darkened 0.5s forwards;
}
.portfolio_img:hover .portfolio_img_item {
    animation: increased 0.5s forwards;
}
.cont{
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0;
}
@keyframes darkened {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.315);
        color: #fff;
    }
}
@keyframes increased {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.2);
    }
}
.residence{
    font-size: 13px;
    letter-spacing: 0;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.7);
}
.portfolio_cont{
    font-size: 20px;
    text-transform: uppercase;
}
.img_item{
    display: inline-block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
}
.portfolio_img_item{
    object-fit: cover;
    height: 100%;
    width: 100%;
    display: block;
}
@media screen and(min-width:1280px) {
    .portfolio{
        width: 1280px;
        margin: 0 auto;
    }
}
@media screen and(max-width: 980px) {
    .portfolio{
        column-gap: 7px;
        row-gap: 8px;
    }
    .controls{
        flex-wrap: wrap;
        .controls_item{
            margin: 1%;
            width: 45%;

        }
    }
}
@media screen and(max-width: 770px) {
    .portfolio_img{
        height: 300px;
    }
}
@media screen and(max-width: 500px) {
    .port{
        margin-top: 130px;
    }
    .portfolio{
        column-gap: 1%;
        row-gap: 3px;
    }
    .portfolio_img{
        width: 47%;
        height: 250px;
    }
    .controls{
        .controls_item{
        width: 100%;
    }}
}
</style>