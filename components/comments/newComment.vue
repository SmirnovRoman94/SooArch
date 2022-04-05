<template>
  <section class="new_comment">
    <div class="comment_content">
      <h2 class="title"> Leave a comment</h2>
        <h3 v-show="submited" class="submitet_mes">Submited!</h3>
        <form @submit.prevent="newComment">
            <label>Name*</label>
            <input type="tetx" v-model="comment.name" placeholder="Your name"/>
            <label>Email*</label>
            <input type="email" v-model="comment.email" placeholder="Your name"/>
            <label>Message</label>
            <textarea type="tetx" v-model="comment.mes" placeholder="Your name"/>
            <div class="controls">
                <button class="newCom">Post comment</button>
            </div>
        </form>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        postId: {
        type: String,
        requred: true
        }
  },
    data(){
        return{
            comment: {
                name: '',
                email: '',
                mes: '',
                date: new Date()
            },
            submited: false
        }
    },
    methods: {
        newComment(){
            console.log(this.postId)
            this.submited = true
            this.$store.dispatch('addComment', {
                ...this.comment,
                commentId: this.postId,
                status: false,
            })
            .then(() => {
                //reset
                this.comment.name = '',
                this.comment.email = '',
                this.comment.mes = ''
            })
            .catch(e => console.log(e))
        }
    }
}
</script>

<style lang="scss" scoped>
.new_comment{
    width: 50%;
    margin: 2em auto;
    background-color: #dadcdd3f;
    border-radius: 10px;

    .comment_content{
        padding: 2em;
        .title{
            text-align: center;
        }
        .submitet_mes{
            color: #53d397;
            font-size: 20px;
            text-align: center;
        }
        .controls{
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 2em;
            .newCom{
                margin: 1em 1em;
                border: solid 1px black;
                color: #222;
                background-color: rgba(255, 255, 255, 0);
                font-size: 15px;
                padding: 10px 30px;
                text-transform: uppercase;
                text-align: center;
                letter-spacing: 2px;
                display: flex;
                align-items: center;
                justify-content: center;
                &:hover{
                    background-color: #c76572;
                }
            }
        }
    }

}
@media screen and (max-width: 770px) {
    .new_comment{
        width: 100%;
    }
}
</style>