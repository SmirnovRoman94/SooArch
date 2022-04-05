<template>
    <nuxt-link :to="getLink">
        <div class="blog_card">
            <div class="blog_content">
                <div class="blog_header">
                    <span class="blog_header">{{blog.date}}</span>
                    <span class="blog_header">{{blog.author.name}}</span>
                    <span class="blog_header"><message-mdi></message-mdi></span>
                    <span class="blog_header">{{blog.coutnComment}}</span>
                </div>
                <h3 class="blog_title">{{blog.title}}</h3>
                <p class="blog_descr">{{blog.desc}}</p>
                <button class="blog_btn">Узнать больше</button>
            </div>
            <div class="blog_img">
                <img class="blog_img_item" :src="blog.url" :alt="blog.author.name"/>
                <div class="blog_search">
                    <div class="blog_search_item">
                        <div class="blog_serach_i">
                            <magnify-mdi></magnify-mdi>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>
        

<script>
export default {
    props: {
        blog: {
            type: Object,
            required: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        getLink(){
            return this.admin ? `/admin/blog/${this.blog.id}` : `/blog/${this.blog.id}`
        }
    }
}
</script>

<style lang="scss" scoped>
.blog_card{
    display: flex;
    height: 360px;

    .blog_content{
        width: 50%;
        padding: 1em;
        .blog_header{
            color: #222;
            font-size: 15px;
            font-weight: 600;
            padding-bottom: 2em;
        }
        .blog_title{
            line-height: 1.5;
            color: #1b212c;
            font-weight: 600;
            font-size: 20px;
            padding-bottom: 2em;

        }
        .blog_descr{
            font-family: "Rubik", Arial, sans-serif;
            font-size: 17px;
            line-height: 1.8;
            font-weight: 500;
            color: #222;
            padding-bottom: 1em;
        }
        .blog_btn{
            color: #222;
            background-color: transparent;
            background-image: none;
            border-color: #222;
            padding: 7px 9px;
            &:hover{
                background-color: #c76572;
                color: #fff;
            }
        }

    }
    .blog_img{
        width: 50%;
        position: relative;
    }
    .blog_img_item{
        object-fit: cover;
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    
    .blog_search{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s;
        &:hover{
            .blog_search_item{
                opacity: 1;
                background-color: rgba(255, 255, 255, 0.527);
                color: #000;
            }
        }
    }
}
.blog_search_item{
            width: 23%;
            height: 20%;
            border-radius: 50%;
            position: relative;
            opacity: 0;
            transition: .3s;
            .blog_serach_i{
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

            }
        }
@media screen and (max-width:1000px) {
    .blog_card{
        .blog_content{
            .blog_descr{
                display: none;
            }
        }
    }
    .blog_search_item{
                width: 30%;
            }
}

</style>