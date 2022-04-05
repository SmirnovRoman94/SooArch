<template>
    <div>
        <Nuxt />
        <h3>Страница администратора!</h3>
        <Footer></Footer>
    </div>
</template>

<script>

import Footer from '~/components/system/footer'
export default {
    components: {
        Footer
    },
    middleware: ['auth'],
}
</script>