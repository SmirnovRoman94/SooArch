<template>
    <div>
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <header class="header_admin">
            <nuxt-link class="link_admin" to='/admin/portfolio/newWork'>New Work</nuxt-link>
        </header>
        <div class="container">
            <WorkList :images="workLoaded" :admin="true"/>
        </div>
    </div>
</template>

<script>
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import WorkList from '~/components/portfolio/WorkList'
export default {
    components: {
        Header,
        Menu,
        WorkList
    },
    layouts: 'admin',
    data(){
        return{
            page: {
                title: 'Portfolio',
                link: '/admin',
                linkTitle: 'admin'
            },
            menu: false,
            
        }
    },
    mounted(){
        this.$store.dispatch('workInite')
    },
    computed: {
        workLoaded(){
            return this.$store.getters.getWork
        }
    },
    methods: {
        OnMenu(){
            this.menu = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.header_admin{
    padding: 4em 0 ;
    background-color: #4a5562;
    display: flex;
    justify-content: space-around;
    .link_admin{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        border-bottom: 1px solid #fff;
        transform: .3s;
        &:hover{
            font-size: 25px;
        }
    }
}
</style>