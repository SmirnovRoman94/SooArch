<template>
    <div>
         <Header :pageName="this.page" @hideMenu="OnMenu"/>
         <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <section>
            <EditWork @addwork="addwork" :editWork="work"/>
        </section>
    </div>
</template>

<script>
import axios from "axios";
import Header from '~/components/system/header'
import Menu from '~/components/system/Menu'
import EditWork from '~/components/admin/EditWork'
export default {
    components: {
        Header,
        Menu,
        EditWork
    },
    lauouts: 'admin',
    asyncData(contex){
        return axios
            .get(`https://sooarch-46978-default-rtdb.firebaseio.com/works/${contex.params.workId}.json`)
            .then((res) => {
                return {
                    work: {...res.data, id: contex.params.workId}
                }
            })
            .catch((e) => contex.error(e))
    },
    data(){
        return{
            page: {
                title: 'Edit Post',
                link: '/admin/portfolio',
                linkTitle: 'admin Portfolio'
            },
            menu: false,
        }
    },
    methods: {
        OnMenu(){
            this.menu = true;
        },
        addwork(work){
            console.log(work)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>