<template>
    <div class="page-loader" v-if="loading">
    <div class="item_logo">
                    <p class="logo">SOO</p>
                    <div class="logo_left">
                        <div class="logo_span">A
                            <span class="logo_span3"></span>
                        </div>
                        <p class="logo2">RC</p>
                        <div class="logo_span">H
                             <span class="logo_span2"></span>
                        </div>
                    </div>
                </div>
  </div>
</template>

<script>
export default {
    data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 3000;
}

//logo
.item_logo{
    margin-top: 50vh;
}
.logo_left{
    margin-left: 40vw;
    display: flex;
    font-size: 40px;
    padding-left: 10px;
    color: rgb(0, 0, 0);
}

.logo_span{
    position: relative;
}
.logo_span3{
    position: absolute;
    left: -84px;
    transform: rotate(110deg);
    border-bottom: 4px solid rgb(0, 0, 0);
    width: 201px;
    animation: logo;
    animation-duration: 2s;
}
.logo_span2{
    position: absolute;
    left: -45px;
    transform: rotate(90deg);
    border-bottom: 4px solid rgb(0, 0, 0);
    width: 137px;
    animation: logo2 ;
    animation-duration: 2s;
}
@keyframes logo {
    from{
        width: 0;

    }
    to{
        width: 200px;
        
    }
}
@keyframes logo2 {
    from{
        width: 0;
       
    }
    to{
        width: 137px;
       
    }
}
.logo{
                width: 40vw;
                margin-left: 40vw;
                font-size: 40px;
                text-align: left;
                animation: logo3;
                animation-duration: 1s;
            }
            @keyframes logo3 {
                from{
                    margin-left: 0;
                }
                to{
                    margin-left: 40vw;
                }
            }
@media screen and(max-width: 350px) {
    .logo{
        margin-left: 30vw;
        animation: logo4;
        animation-duration: 1s;
    }
    @keyframes logo3 {
                from{
                    margin-left: 0;
                }
                to{
                    margin-left: 30vw;
                }
            }
    .logo_left{
        margin-left: 30vw;
    }
}
</style>