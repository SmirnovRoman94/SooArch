<template>
    <div>
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <section>
            <newPost @addPost="adPost"/>
        </section>
    </div>
</template>

<script>
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import newPost from '~/components/admin/newPost'
export default {
    components: {
        newPost,
        Header,
        Menu
    },
    layouts: 'admin',
    data(){
        return{
            page: {
                title: 'new Post',
                link: '/admin/blog',
                linkTitle: 'admin blog'
            },
            menu: false,
        }
    },
    methods: {
        OnMenu(){
            this.menu = true;
        },
        adPost(post){
            this.$store.dispatch('addPost', post)
            .then(() => {
                this.$router.push('/admin/blog')
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>