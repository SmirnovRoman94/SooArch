<template>
    <section>
        <div class="blog_page">
            <BlogPreview v-for="blogr in blogs" :key="blogr.id" :blog="blogr" :admin="admin"/>
        </div>
    </section>
</template>

<script>
import BlogPreview from '~/components/blog/BlogPreview'
export default {
    components: {
        BlogPreview
    },
    props: {
        blogs: {
            type: Array,
            require: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.blog_page{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 2em;
}
@media screen and (max-width: 770px) {
    .blog_page{
        grid-template-columns: 1fr;
    }
}
</style>