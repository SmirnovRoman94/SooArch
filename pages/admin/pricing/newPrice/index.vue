<template>
    <div>
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <section>
            <NewPrice @addPrice="addPrice"/>
        </section>
    </div>
</template>

<script>
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import NewPrice from '~/components/admin/newPrice'
export default {
    components: {
        Header,
        Menu,
        NewPrice
    },
    layouts: 'admin',
    data(){
        return{
            page: {
                title: 'new Price',
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
        addPrice(price){
            this.$store.dispatch('addPrice', price)
            .then(() => {
                this.$router.push('/admin')
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>