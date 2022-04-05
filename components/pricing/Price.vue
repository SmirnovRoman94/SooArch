<template>
    <div class="price">
        <img class="price_img" :src="pricer.url" :alt="pricer.header"/>
        <h3 class="price_header">{{pricer.header}}</h3>
        <!-- <p class="price_text">{{pricer.desc}}</p> -->
        <ul>
            <li class="price_text" v-for="item in reg" :key="item">{{item}}<span>.</span></li>
        </ul>
        <div class="cost">
            <span class="cost_item">{{pricer.cost}}</span>
        </div>
        <button @click="hideModal" class="price_btn">Подробнее</button>
        <span class="limit">{{pricer.limit}}</span>
    </div>
</template>

<script>
export default {
    props: {
        pricer: {
            type: Object,
            required: true
        }
    },
    computed: {
        reg(){
            let description = this.pricer.desc
            let regdesc = description.split(/[.,!,?]/)
            regdesc.pop()
            return regdesc
        }
    },
    mounted(){
        this.reg
    },
    methods: {
        hideModal(){
            this.$emit('onModal')
        }
    }
}
</script>

<style lang="scss" scoped>
.price{
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em 2em;

    .price_img{
        width: 80px;
        margin-bottom: 1em;
    }
    .price_header{
        font-weight: 400;
        font-size: 24px;
        line-height: 1.5;
        color: #1b212c;
        margin-bottom: 2em;
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
        width: 100%;
        text-align: center;
        .cost_item{
            font-family: "Rubik", Arial, sans-serif;
            font-size: 23px;
            line-height: 1.8;
            font-weight: 600;
            color: #c76572;
            padding-right: 2%;
        }
        .cost_desc{
            font-family: "Rubik", Arial, sans-serif;
            font-size: 17px;
            line-height: 1.8;
            font-weight: 400;
            color: #798899;
        }
    }
    .price_btn{
        margin: 1em 0;
        border: solid 1px rgba(1, 1, 1, 0.2);
        color: #333;
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
        color: #000000;
        font-size: 17px;
        font-weight: 600;
        text-align: center;   
    }
}
@media screen and(min-width:550px) {
    .price{
        width: 400px;
        margin: 0 auto;
    }
}
</style>