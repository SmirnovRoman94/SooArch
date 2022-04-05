<template>
    <section>    
        <div class="blog">
            <div class="post">
                <h3 class="blog_title">{{state.title}}</h3>
                <img class="post_img" :src="state.url"/>
                <p class="blog_text">{{state.desc}}</p>
            </div>
            <ul class="blog_content">
                <li class="blog_content_item" v-for="item in state.description" :key="item.id">
                    <h3 class="blog_title"><span class="content_number">{{item.number}}</span>{{item.title}}</h3>
                    <p class="blog_text">{{item.desc}}</p>
                    <img :src="item.url" :alt="item.number"/>
                </li>
            </ul>  

                <div class="blog_tags">
                    <p class="blog_tags_item" v-for="tag in state.tags" :key="tag.id">{{tag.name}}</p>
                </div>
                <div class="blog_author">
                    <img class="blog_author_img" :src="state.author.url" :alt="state.author.name"/>
                    <div class="blog_author_content">
                        <h3 class="blog_author_content_title">{{state.author.name}}</h3>
                        <p class="blog_author_content_text">{{state.author.desc}}</p>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>

export default {
    props: {
        state: {
            type: Object,
            required: true
        }
    }
    
}
</script>

<style lang="scss" scoped>
.blog_title{
            line-height: 1.5;
            color: #1b212c;
            font-weight: 600;
            font-size: 30px;
        }
        .blog_text{
            padding-top: 1em;
            font-family: "Rubik", Arial, sans-serif;
            font-size: 20px;
            line-height: 1.6;
            font-weight: 400;
            color: #798899;
            padding-bottom: 1em;
        }
.blog_content{
    padding-bottom: 2em;
    .blog_content_item{
        padding-bottom: 2em;
        .blog_img{
            padding: 1em 0;
        }
    }
}
.blog_tags{
    display: flex;
    padding-bottom: 3em;
    .blog_tags_item{
        text-transform: uppercase;
        display: inline-block;
        padding: 4px 10px;
        margin-bottom: 7px;
        margin-right: 4px;
        border-radius: 4px;
        color: #4a5562;
        border: 1px solid #ccd3e0;
        font-size: 11px;
        margin-right: 1em;

        &:hover{
            background-color: #4a5562;
            color: #fff;
        }
    }
}
.blog_author{
    background-color: #f8f9fa;
    padding: 3em;
    display: flex;
    justify-content: space-between;
    background-color: #b5b8bb38;

    .blog_author_img{
        margin-right: 3em;
        align-self: center;
        border-radius: 50%;
        width: 15%;
    }
    .blog_author_content_title{
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: 3px;
        line-height: 1.5;
        color: #1b212c;
        font-weight: 400;
        padding-bottom: 1em;
    }
    .blog_author_content_text{
        font-family: "Rubik", Arial, sans-serif;
        font-size: 17px;
        line-height: 1.8;
        font-weight: 400;
        color: #798899;
    }
}
@media screen and (max-width: 500px) {
    .blog_author{
        padding: 1em;
        .blog_author_content_text{
            display: none;
        }
    }
}
</style>