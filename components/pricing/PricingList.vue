<template>
    <section>
        <div class="container">
                <div class="pricing_list">
                    <!-- <div class="pricing_item"> -->
                        <PricePreview 
                            v-for="pricer in filterPrice" :key="pricer.id"
                            :price="pricer"
                            :admin="admin"
                            />
                    <!-- </div> -->
            </div>
            </div>
    </section>
</template>

<script>
import PricePreview from '~/components/pricing/PricePreview'
export default {
    components: {
        PricePreview
    },
    props: {
        pricing: {
            type: Array,
            required: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        filterPrice(){
            let array  = this.pricing
            //filter
            array = array.filter(function (item, index){
                if(index %2==0){
                    return item.aos="fade-left"
                }else{
                    return item.aos="fade-right"
                }
            })
            //error
            return array
        }
    }
}
</script>

<style lang="scss" scoped>
.pricing_list{
    display: flex;
    justify-content: space-around;
}
@media screen and(max-width: 1200px) {
    .pricing_list{
        flex-wrap: wrap;
    }
}

</style>