<template>
    <div class="blog_pager">
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <div class="container">
            <div class="blog">
                <div class="blog_page">
                    <Blog :state="post"/>
                </div>
            </div>
            <!-- <h3 class="comments_lenght"><span>{{lengthComments}}</span>Comments:</h3> -->
            <CommentsList :commet="comments"/>
            <NewComment :postId="this.idForComment"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import Blog from '~/components/blog/Blog'
import CommentsList from '~/components/comments/CommentsList'
import NewComment from '~/components/comments/newComment'
export default {
    components:{
        Header,
        Menu,
        Blog,
        CommentsList,
        NewComment
    },
    head (){
      let title = this.post.title,
          descr = this.post.desc,
          id = this.post.id
    return{
      title: title,
      descr: descr,
      id: id,
      meta: [
        {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: descr,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://sooarch.ru/ograph.png',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '400',
      },
      {
        hid: 'og:image:hight',
        property: 'og:image:hight',
        content: '300',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://sooarch.ru/blog/${id}`,
      },
      {
        property: 'og:locale',
        content: 'ru_RU',
      },
        { name: "twitter:site", content: "@bobross" },
  { name: "twitter:card", content: "summary_large_image" },
  {
    hid: "twitter:url",
    name: "twitter:url",
    content: `https://sooarch.ru/blog/${id}`,
  },
  {
    hid: "twitter:title",
    name: "twitter:title",
    content: title,
  },
  {
    hid: "twitter:description",
    name: "twitter:description",
    content: descr,
  },
  {
    hid: "twitter:image",
    name: "twitter:image",
    content: 'https://sooarch.ru/ograph.png',
  },
      ]
    }
    },
    
    async asyncData(context){
    let [post, comments] = await Promise.all([
      axios.get(`https://sooarch-46978-default-rtdb.firebaseio.com/blog/${context.params.id}.json`),
      axios.get(`https://sooarch-46978-default-rtdb.firebaseio.com/comments.json`)
      

    ])
    let commentsArray = [],
        commentsArrayRes = []

    Object.keys(comments.data).forEach(key => {
      commentsArray.push(comments.data[key])
    })
    for(let i=0; i < commentsArray.length; i++) {
      if(commentsArray[i].commentId === context.params.id && commentsArray[i].status === true) {
        commentsArrayRes.push(commentsArray[i])
      }
    }
    
    return {
      post: post.data,
      comments: commentsArrayRes
    }
  },
    

    
  mounted(){
      this.idForComment = this.$route.params.id
      console.log(this.post)
  },
    data(){
        return{
            page: {
                title: 'Пост',
                link: '/blog',
                linkTitle: 'Блог'
            },
            menu: false,
            lengthComments: null,
            idForComment: null,
            
        }
    },
    methods: {
        OnMenu(){
            this.menu = true;
        },
    }
}
</script>

<style lang="scss" scoped>

.blog{
    display: flex;
    justify-content: space-between;
}
.blog_page{
    width: 100%;
}
.comments_lenght{
    line-height: 1.5;
    color: #1b212c;
    font-weight: 500;
    font-size: 30px;
    span{
        padding-right: 1em;
    }
}
</style>