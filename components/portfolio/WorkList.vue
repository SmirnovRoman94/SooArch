<template>
    <section>
        <div class="container">
            <div class="portfolio_content">
                    <h1 class="potrtfolio_header">Портфолио</h1>
                    <p class="potrtfolio_text">Примеры работ, которые Вы можете увидеть</p>
                </div>
        </div>
            <div class="portfolio">
                    <div  class="portfolio_img"  v-for="image in paginatedData" :key="image.id" :id="image.grid">
                        <nuxt-link :to="admin ? `/admin/portfolio/${image.id}` : `/portfolio/${image.id}`">
                        <div class="cont">
                                <h3 class="portfolio_cont">{{image.title}}</h3>
                        </div>
                        <div class="img_item">
                            <img data-aos="fade-up" class="portfolio_img_item" :src="image.url" :alt="image.alt" :class="image.grid"/>
                        </div>
                        </nuxt-link>
                    </div>
            </div>
            <div class="container">
                <div class="controls">
                    <button class="controls_btn" :class="{'disabled' : pageNumber==0}" @click="prevPage">Предыдущая страница</button>
                    <button class="controls_btn" :class="{'disabled' : pageNumber >= pageCount -1}" @click="nextPage">Следующая страница</button>
                </div>
            </div>
    </section>
</template>

<script>
import Loading from '~/components/Loading'
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
            pageNumber: 0,
            size: 6
        }
    },
    components: {
        Loading
    },
    methods: {
        prevPage(){
            this.pageNumber--
        },
        nextPage(){
            this.pageNumber++
        },
    },
    computed: {
        pageCount(){
            let lenght = this.images.length,
                count = this.size
            return this.pageNumber = Math.ceil(lenght/count)
        },
        paginatedData(){
            const start = this.pageNumber * this.size,
                  end = start + this.size;
            return this.images.slice(start, end)
        }
    },
    mounted(){
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 2000)
        })
        setTimeout(() => {
            return this.pageNumber = 0
        },2000)
        
    }
}
</script>

<style lang="scss" scoped>
.controls{
    margin-top: 2em;
    display: flex;
    justify-content: space-around;
    .controls_btn{
        margin: 1em 1em;
        border: solid 1px black;
        color: #222;
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
    .controls_btn.disabled{
        display: none;
    }
}
.portfolio_content{
    margin-bottom: 3em;
}
.portfolio{
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 0 1em;
    column-gap: 1em;
    row-gap: 1em;
}
.potrtfolio_header{
    font-weight: 400;
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #222;
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
    color: #222;
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
@media screen and(min-width: 1280px) {
    .portfolio{
        width: 1280px;
        margin:  0 auto;
    }
}
@media screen and(max-width:950px) {
    .portfolio_img{
        width: 48%;
    }
}
@media screen and(max-width:600px) {
    .portfolio_img{
        width: 97%;
    }
}
@media screen and(max-width:450px) {
    .portfolio_img{
        width: 96%;
    }
}
@media screen and(max-width:300px){
    .portfolio_img{
        width: 94%;
    }
}
</style>