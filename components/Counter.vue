<template>
    <!-- <section class="container"> -->
        <div data-aos="fade-up">
        <div class="counter">
            <div class="counter_item">
                <div class="counter_item_count">
                    <countTo
                    class="counter_number"
                    :startVal="startVal"
                    :endVal="project"
                    :separator="count"
                    :duration="3000">
                    </countTo>
                    <span class="counter_content">Рабочих часов</span>
                </div>
                <div class="counter_item_count">
                    <countTo
                    class="counter_number"
                    :startVal="startVal"
                    :endVal="customers"
                    :separator="count"
                    :duration="3000">
                    </countTo>
                    <span class="counter_content">Квадратных метров</span>
                </div>
                <div class="counter_item_count">
                    <countTo
                    class="counter_number"
                    :startVal="startVal"
                    :endVal="working"
                    :separator="count"
                    :duration="3000">
                    </countTo>
                    <span class="counter_content">Года опыта</span>
                </div>
                <div class="counter_item_count">
                    <countTo
                    class="counter_number"
                    :startVal="startVal"
                    :endVal="coffe"
                    :separator="count"
                    :duration="3000">
                    </countTo>
                    <span class="counter_content">Бутылок вина</span>
                </div>
                <div class="counter_item_count">
                    <p class="counter_number">30+</p>
                    <span class="counter_content">реализованных объектов</span>
                </div>
                <div class="counter_item_count">
                    <p class="counter_number">∞</p>
                    <span class="counter_content">довольных клиентов</span>
                </div>
            </div>
            <div class="counter_explore">
                <div class="counter_explore_item">
                </div>
            </div>
        </div>
        </div>
    <!-- </section> -->
</template>

<script>
import countTo from "vue-count-to";
export default {
    components: { countTo },
    data() {
    return {
      startVal: 0,
      project: 5300,
      customers: 25000,
      working: 4,
      coffe: 115,
      count: "0"
    };
  }
}
</script>


<style lang="scss" scoped>
    .counter{
        display: flex;
        height: 450px;
    }
    .counter_item{
        width: 100%;
        position: absolute;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 2em;
        z-index: 20;
        height: 100%;
        padding-left: 50%;
    }
    .counter_item_count{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    .counter_number{
        font-weight: 300;
        font-size: 30px;
        color: #ffffff;
    }
    .counter_content{
        font-size: 14px;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 3px;
    }
    .counter_explore{
        width: 100%;
        background-image: url('~/assets/img/Counter/image_1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

    }
    .counter_explore_item{
        height: 100%;
        display: flex;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.450);
        height:100%;
        position:fixed;
        width:100%;
        top:0;
        left:0;
        .butn{
            margin: auto;
        }
    }
@media screen and (max-width: 770px) {
    .counter{
        flex-wrap: wrap;
        .counter_item{
            width: 100%;
            padding: 20px;
        }
        .counter_explore{
            width: 100%;
        }
    }
}
@media screen and(max-width:500px) {
    // .counter{
    //     margin-top: 500px;
    // }
}
</style>