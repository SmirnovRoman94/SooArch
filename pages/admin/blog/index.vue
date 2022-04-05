<template>
    <div>
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
            <header class="header_admin">
                <nuxt-link class="link_admin" to='/admin/blog/newPost'>New Post</nuxt-link>
            </header>
            <div class="container">
                <BlogList :blogs="blogLoaded" :admin="true"/>
            </div>
    </div>
</template>

<script>
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import BlogList from '~/components/blog/BlogList'
export default {
    components: {
        Header,
        Menu,
        BlogList
    },
    layouts: 'admin',
    data(){
        return{
            page: {
                title: 'Blog',
                link: '/admin',
                linkTitle: 'admin'
            },
            menu: false,
            blog: [
                {
                    id: 1,
                    date: 'August 19, 2018',
                    author: 'admin',
                    coutnComment: 3,
                    title: 'A price of masterpiece of art with a modern design',
                    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                    url: require('~/assets/img/Porfolio/image_1.jpg')
                },
                {
                    id: 2,
                    date: 'August 20, 2019',
                    author: 'admin',
                    coutnComment: 9,
                    title: 'A true of masterpiece of art with a modern design',
                    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                    url: require('~/assets/img/Porfolio/image_2.jpg')
                },
                {
                    id: 3,
                    date: 'August 19, 2021',
                    author: 'admin',
                    coutnComment: 7,
                    title: 'A event of masterpiece of art with a modern design',
                    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                    url: require('~/assets/img/Porfolio/image_3.jpg')
                },
                {
                    id: 4,
                    date: 'August 1, 2021',
                    author: 'admin',
                    coutnComment: 9,
                    title: 'A true of masterpiece of art with a modern design',
                    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                    url: require('~/assets/img/Porfolio/image_4.jpg')
                },
                {
                    id: 5,
                    date: 'August 19, 2015',
                    author: 'admin',
                    coutnComment: 11,
                    title: 'A small of masterpiece of art with a modern design',
                    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                    url: require('~/assets/img/Porfolio/image_5.jpg')
                },
                {
                    id: 6,
                    date: 'August 19, 2017',
                    author: 'admin',
                    coutnComment: 15,
                    title: 'A fit of masterpiece of art with a modern design',
                    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                    url: require('~/assets/img/Porfolio/image_6.jpg')
                }
            ]
        }
    },
    mounted(){
        this.$store.dispatch('blogInite')
    },
    computed: {
        blogLoaded(){
            return this.$store.getters.getBlog
        }
    },
    methods: {
        OnMenu(){
            this.menu = true;
        }
    },
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