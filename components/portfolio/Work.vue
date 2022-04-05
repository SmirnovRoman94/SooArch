<template>
    <section>
        <div class="container">
            <div class="work_page">
                <div class="work">
                    <div class="work_content">
                        <h3 class="work_header">{{work.title}}</h3>
                        <p class="work_text">{{work.desc}}</p>
                    </div>
                    <div class="work_example" v-for="(item, i) in work.example" :key="item.id">
                        <div class="work_example_img">
                            <img class="work_example_img_item" :src="item.url" :alt="item.id" @click="index = i"/>
                             <client-only>
                                <VueGallerySlideshow :images="work.example" :index="index" @close="index = null"></VueGallerySlideshow>
                            </client-only>
                        </div>
                        <p class="work_example_text">{{item.desc}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Loading from '~/components/Loading'
import VueGallerySlideshow from 'vue-gallery-slideshow';
export default {
    props: {
        work: {
            type: Object,
            required: true
        },
        
    },
    data(){
        return{
            images: [

            ],
            index: null
        }
    },
    components: {
        Loading,
        VueGallerySlideshow
    },
    mounted(){
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 2000)
        })
    }
}
</script>
<style lang="scss" scoped>
.work_page{
    padding: 7em 0;
    .work_header{
        font-weight: 400;
        font-size: 28px;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #1b212c;
        padding-bottom: 1em;
    }
    .work_text{
        font-family: "Rubik", Arial, sans-serif;
        font-size: 20px;
        line-height: 1.8;
        font-weight: 400;
        text-align: justify;
        color: #222;
        padding-bottom: 2em;
    }
    .work_example_img{
            width: 100%;
        }
        .work_example_text{
            width: 100%;
            padding: 1em 0;
            font-size: 20px;
            line-height: 1.8;
            font-weight: 400;
            color: #222;
            text-align: justify;
        }
}
@media screen and(max-width:770px) {
    .work_example{
        flex-direction: column;
        .work_example_img{
            width: 100%;
        }
        .work_example_text{
            width: 100%;
        }
    }
}
@media screen and(max-width: 500px) {
    .work_page .work_text{
        font-size: 14px;
    }
    .work_page .work_example_text{
        font-size: 14px;
    }
    .work_page .work_example{
        padding:  0;
    }
}
</style>