<template>
    <nuxt-link :to="getLink">
        <div class="price" :data-aos="price.aos">
            <img class="price_img" :src="price.url" :alt="price.header"/>
            <h3 class="price_header">{{price.header}}</h3>
            <div class="content">
                <div class="cost">
                    <span class="cost_item">{{price.cost}}</span>
                </div>
                <button class="price_btn">Подробнее</button>
                <span class="limit">{{price.limit}}</span>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        price: {
            type: Object,
            required: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        getLink(){
            return this.admin ? `/admin/pricing/${this.price.id}` : `/pricing/${this.price.id}`
        }
    }
}
</script>

<style lang="scss" scoped>

.price{
    position: relative;
    background: rgba(131, 129, 129, 0.425);
    margin-left: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em 2em;
    width: 300px;
    height: 470px;

    .price_img{
        width: 80px;
        margin-bottom: 1em;
    }
    .price_header{
        min-height: 72px;
        font-weight: 400;
        font-size: 24px;
        line-height: 1.5;
        color: #fff;
        margin-bottom: 1em;
        display: flex;
        align-items: center;
        text-align: center;
    }
    .price_text{
        text-align: center;
        font-family: "Rubik", Arial, sans-serif;
        font-size: 17px;
        line-height: 1.8;
        font-weight: 400;
        color: #798899;
        margin-bottom: 2em;
    }
    .cost{
        margin-bottom: 2em;
        width: 250px;
        text-align: center;
        .cost_item{
            font-family: "Rubik", Arial, sans-serif;
            font-size: 23px;
            line-height: 1.8;
            font-weight: 600;
            color: #fff;
            padding-right: 2%;
        }
        .cost_desc{
            font-family: "Rubik", Arial, sans-serif;
            font-size: 17px;
            line-height: 1.8;
            font-weight: 400;
            color: #222;
        }
    }
    .price_btn{
        margin: 1em 0;
        border: solid 1px #fff;
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
        width: 100%;
        &:hover{
            background-color: #c76572;
            color: #fff;
        }
    }
    .limit{
        min-height: 50px;
        color: #fff;
        font-size: 17px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}
@media screen and(max-width: 1200px) {
    .price{
        margin-top: 2em;
        width: 35vw;
    }
}
@media screen and (max-width:770px) {
    .price{
        margin-left: 0;
        margin-top: 1em;
        width: 60vw;
        height: 200px;
        .price_img{
            margin-bottom: 0;
        }
        .content{
            display: none;
        }
    }
}
@media screen and (max-width:350px){
    .price{
        width: 80vw;
    }
}
</style>