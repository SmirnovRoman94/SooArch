<template>
    <section>
        <div class="container">
            <div class="service">
                <div class="service_left">
                    <p class="service_header"><strong>{{service.content.header}}</strong></p>
                    <p class="service_gltext">{{service.content.globaltext}}</p>
                    <div class="content">
                        <h1 class="content_header">Этапы проектов:</h1>
                        <div class="content_item" v-for="item in sortTabs" :key="item.id">
                            <hr>
                            <h3 class="content_item_header"><slot>{{item.number}}</slot>{{item.title}}</h3>
                            <p class="content_desc">{{item.description}}</p>
                        </div>
                    </div>
                </div>
                <div class="service_right">
                    <div class="service_right_item" v-for="item in sortUrl" :key="item.id">
                        <img class="service_right_item_img" :src="item.img">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        service: {
            type: Object,
            require: true
        }
    },
    computed: {
        sortTabs(){

            return this.service.content.tabs.slice(1,4)
        },
        sortUrl(){
            return this.service.content.url.slice(1,4)
        }
    }
}

</script>

<style lang="scss" scoped>
.service{
    margin-top: 5%;
    display: flex;
    .service_left{
        width: 60%;
        padding-right: 3em;
        .service_header{
            padding-bottom: 2em;
            text-align: justify;
        }
        .service_gltext{
            color: grey;
            text-align: justify;
        }
        .content_header{
            padding: 2em 0;
            font-size: 30px;
        }
        .content_desc{
            color: grey;
            text-align: justify;
        }
        .content_item{
           padding-left: 1em;
           .content_item_header{
               font-size: 23px;
               padding-bottom: 1em;
           }
        }
    }
    .service_right{
        width: 40%;
    }
}
.service_right{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.service_right_item_img{
    padding: 1em 0;
}
hr{
    border-top: solid 1px #555;
    margin-top: 2em;
}
@media screen and(max-width:950px) {
    .service_header{
        font-size: 14px;
    }
    .service_gltext{
        font-size: 14px;
    }
    .service .service_left .content_header{
        padding: 1em 0 0 0;
    }
    .service .service_left .content_item{
        padding: 0;
    }
    .service .service_left .content_item .content_item_header{
        padding: 2%;
    }
    .content_desc{
        font-size: 14px;
    }
}
@media screen and(max-width:700px) {
    .service{
        flex-direction: column;
        .service_left{
            width: 100%;
            padding: 0;
            .content_item .content_item_header{
                font-size: 20px;
            }
        }
        .service_right{
            width: 100%;
        }
    }
}
</style>