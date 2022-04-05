<template>
    <div>
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <section>
            <EditPost :postEdit="post" :admin="true"/>
        </section>
    </div>
</template>

<script>
import axios from "axios";
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import EditPost from '~/components/admin/EditPost'
export default {
    components: {
        EditPost,
        Header,
        Menu
    },
    lauouts: 'admin',
    asyncData(contex){
        return axios
            .get(`https://sooarch-46978-default-rtdb.firebaseio.com/blog/${contex.params.postId}.json`)
            .then((res) => {
                return {
                    post: {...res.data, id: contex.params.postId}
                }
            })
            .catch((e) => contex.error(e))
    },
    data(){
        return{
            page: {
                title: 'Edit Post',
                link: '/admin',
                linkTitle: 'admin'
            },
            menu: false,
            // post: {
            //     date: 'Tue Jan 11 2022 22:41:33',
            //     countComment: 10,
            //     title: 'test1',
            //     desc: 'test1',
            //     url: 'test1',
            //     tags: [
            //         {
            //             id: 1,
            //             name: 'life'
            //         },
            //         {
            //             id: 2,
            //             name: 'sport'
            //         },
            //         {
            //             id: 3,
            //             name: 'tech'
            //         },
            //         {
            //             id: 4,
            //             name: 'trawel'
            //         }
            //     ],
            //     author: {
            //         url: require('~/assets/img/Clients/person_1.jpg'),
            //         name: 'Lance Smith',
            //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates, eius ab sapiente ullam eaque tempora. Sit officiis voluptatem nobis accusantium, ad iusto ducimus cum optio nihil pariatur, recusandae quia.'
            //     },
            //     description: [
            //         {
            //             id: 1,
            //             title: 'We Love WordPress Themes',
            //             desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eveniet voluptas quis deserunt aliquam molestiae nemo temporibus facere veniam nesciunt voluptatum possimus vel repellendus sapiente repellat, ipsam tempore ipsa! Incidunt mollitia iste sint vitae, quidem commodi porro vero nostrum velit voluptatibus itaque perferendis perspiciatis iure earum modi. Quidem, recusandae reiciendis.',
            //             number: '#1.',
            //             url: require('~/assets/img/Porfolio/image_6.jpg'),

            //         },
            //         {
            //             id: 2,
            //             title: 'We Love WordPress Themes',
            //             desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eveniet voluptas quis deserunt aliquam molestiae nemo temporibus facere veniam nesciunt voluptatum possimus vel repellendus sapiente repellat, ipsam tempore ipsa! Incidunt mollitia iste sint vitae, quidem commodi porro vero nostrum velit voluptatibus itaque perferendis perspiciatis iure earum modi. Quidem, recusandae reiciendis.',
            //             number: '#2.',
            //             url: require('~/assets/img/Porfolio/image_8.jpg'),
            //         }
            //     ]
            // }
        }
    },
    methods: {
        OnMenu(){
            this.menu = true;
        },
    },
}
</script>

<style lang="scss" scoped>

</style>