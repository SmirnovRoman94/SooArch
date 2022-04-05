<template>
    <div>
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <div class="container">
            <NewWork @addwork="addWork"/>
        </div>
    </div>
</template>

<script>
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import NewWork from '~/components/admin/newWork'
export default {
    components: {
        Header,
        Menu,
        NewWork
    },
    layouts: 'admin',
    data(){
        return{
            page: {
                title: 'New Work',
                link: '/admin/portfolio',
                linkTitle: 'Admin potrfolio'
            },
            menu: false,
        }
    },
    methods: {
        OnMenu(){
            this.menu = true;
        },
        addWork(work){
            this.$store.dispatch('addWork', work)
            .then(() => {
                this.$router.push('/admin/portfolio')
            })
        }
        
    },
}
</script>

<style lang="scss" scoped>

</style>