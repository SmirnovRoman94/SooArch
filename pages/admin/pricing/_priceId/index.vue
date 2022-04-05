<template>
    <div>
         <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <section>
            <newPrice @editPrice="editPrice" :editPrice="price"/>
        </section>
    </div>
</template>

<script>
import axios from "axios";
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import newPrice from '~/components/admin/newPrice'
export default {
    components: {
        Header,
        Menu,
        newPrice
    },
    lauouts: 'admin',
    asyncData(contex){
        return axios
            .get(`https://sooarch-46978-default-rtdb.firebaseio.com/prices/${contex.params.priceId}.json`)
            .then((res) => {
                return {
                    price: {...res.data, id: contex.params.priceId}
                }
            })
            .catch((e) => contex.error(e))
    },
    data(){
        return{
            page: {
                title: 'Edit Price',
                link: '/admin/pricing',
                linkTitle: 'admin pricing'
            },
            menu: false,

        }
    },
    methods: {
        OnMenu(){
            this.menu = true;
        },
        editPrice(price){
            console.log(price)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>