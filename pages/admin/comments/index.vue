<template>
    <div>
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <div class="container">
            <CommentTable :thead="['Name', 'Text', 'Email', 'Status', 'Change Status', 'Delete']">
                <tbody slot="tbody">
                    <tr v-for="comment in comments" :key="comment.id">
                        <td><span> {{comment.name}} </span></td>
                        <td><span> {{comment.mes}} </span></td>
                        <td><span> {{comment.email}} </span></td>
                        <td>
                            <span v-if="comment.status" class=" status true"> Publish </span>
                            <span v-else class=" status false"> Hidden </span>
                        </td>
                        <td><span @click="changeStatus(comment)" class="link"> Change Status </span></td>
                        <td><span @click="deleteComment(comment)" class="link">  Delete </span></td>
                    </tr>
                </tbody>
            </CommentTable>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import CommentTable from '~/components/admin/CommentTable'
export default {
    components: {
        Header,
        Menu,
        CommentTable

    },
    layouts: 'admin',
    data(){
        return{
            page: {
                title: 'Comments',
                link: '/admin',
                linkTitle: 'admin'
            },
            menu: false,
            comments: [],
            // comments: [
            //     {
            //         id: 1,
            //         name: 'John Doe',
            //         url: require('~/assets/img/Clients/person_1.jpg'),
            //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates, eius ab sapiente ullam eaque tempora. Sit officiis voluptatem nobis accusantium, ad iusto ducimus cum optio nihil pariatur',
            //         status: true
            //     },
            //     {
            //         id: 2,
            //         name: 'John Doe',
            //         url: require('~/assets/img/Clients/person_1.jpg'),
            //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates, eius ab sapiente ullam eaque tempora. Sit officiis voluptatem nobis accusantium, ad iusto ducimus cum optio nihil pariatur',
            //         status: false
            //     },
            //     {
            //         id: 3,
            //         name: 'John Doe',
            //         url: require('~/assets/img/Clients/person_1.jpg'),
            //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates, eius ab sapiente ullam eaque tempora. Sit officiis voluptatem nobis accusantium, ad iusto ducimus cum optio nihil pariatur',
            //         status: false
            //     },
            //     {
            //         id: 4,
            //         name: 'John Doe',
            //         url: require('~/assets/img/Clients/person_1.jpg'),
            //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates, eius ab sapiente ullam eaque tempora. Sit officiis voluptatem nobis accusantium, ad iusto ducimus cum optio nihil pariatur',
            //         status: false
            //     },
            //     {
            //         id: 5,
            //         name: 'John Doe',
            //         url: require('~/assets/img/Clients/person_1.jpg'),
            //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates, eius ab sapiente ullam eaque tempora. Sit officiis voluptatem nobis accusantium, ad iusto ducimus cum optio nihil pariatur',
            //         status: false
            //     },
            //     {
            //         id: 6,
            //         name: 'John Doe',
            //         url: require('~/assets/img/Clients/person_1.jpg'),
            //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates, eius ab sapiente ullam eaque tempora. Sit officiis voluptatem nobis accusantium, ad iusto ducimus cum optio nihil pariatur',
            //         status: false
            //     }
            // ],
        }
    },
    mounted () {
        this.loadComments()
    },
    methods: {
        OnMenu(){
            this.menu = true;
        },
        changeStatus(comment){
            comment.status = !comment.status
            axios.put(`https://sooarch-46978-default-rtdb.firebaseio.com/comments/${comment.id}.json`, comment)
        },
        deleteComment(comment){
            axios.delete(`https://sooarch-46978-default-rtdb.firebaseio.com/comments/${comment.id}.json`)
            .then((res) =>{
                this.loadComments()
            })
        },
        loadComments (){
        axios.get('https://sooarch-46978-default-rtdb.firebaseio.com/comments.json')
            .then((res) => {
            let commentsArray = []
            Object.keys(res.data).forEach(key => {
                const comment = res.data[key]
                commentsArray.push({...comment, id: key})
            })
            this.comments = commentsArray
            console.log(this.comments)
            })
        },
    },
}
</script>
<style lang="scss" scoped>

</style>