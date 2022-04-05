<template>
    <div>
        <Nuxt>
        </Nuxt>
        <div class="social">
            <WhatsApp></WhatsApp>
            <div class="item">
                <Telegram></Telegram>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '~/components/system/footer'
import WhatsApp from '~/components/WhatsApp'
import Telegram from '~/components/Telegram'
export default {
    components: {
        Footer,
        WhatsApp,
        Telegram
    }
}
</script>
<style lang="scss" scoped>
.social{
    z-index: 200;
    position: fixed; 
    top: 70vh; 
    transition: .3s ease-out;
    .item{
        margin-top: 1%;
    }
}
</style>