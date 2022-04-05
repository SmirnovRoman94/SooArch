<template>
    <section>
        <div class="comments_list">
            <div class="card_comment" v-for="item in commet" :key="item.id">
                <div class="comment_cont">
                    <div class="card_img">
                        <img class="card_img_item" src="~/assets/img/Clients/png-clipart-computer-icons-cross-delete-management-business-man-miscellaneous-white.png"/>
                    </div>
                    <div class="content">
                        <h3 class="card_title">{{item.name}}</h3>
                        <p class="card_date">{{item.date}}</p>
                        <p class="card_desc">{{item.mes}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        commet: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.card_comment{
    margin: 2em 0;
    padding: 2em;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10;
    }
}
.comment_cont{
    display: flex;
   .content{
       padding: 0 2em;
       .card_title{
           line-height: 1.5;
            color: #1b212c;
            font-weight: 400;
            font-size: 30px;
       }
       .card_date{
           text-transform: uppercase;
            font-size: 13px;
            letter-spacing: .1em;
            color: #b3bbc5;
       }
       .card_desc{
           font-family: "Rubik", Arial, sans-serif;
            font-size: 17px;
            line-height: 1.8;
            font-weight: 400;
            color: #798899;
       }
   }
}
.card_img{
        width: 10%;
        .card_img_item{
            border-radius: 50%;
        }
    }
@media screen and(max-width:770px) {
    .card_img{
        width: 100%;
    }
}
@media screen and(max-width:400px) {
    .comment_cont{
        flex-direction: column;
    }
}
</style>