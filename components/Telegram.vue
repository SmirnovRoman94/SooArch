<template>
    <a href="https://t.me/soospb">
        <button class="btnTelegram"><img class="tlega_img" src="~/assets/img/social/telegram.png" alt="telega"></button>
    </a>
</template>

<style lang="scss" scoped>
.btnTelegram{
    border-radius: 50%;
    padding: 1em 10px;
    background-color: #5399d3;
    border: 1px solid #4a5562;
    color: #fff;
    margin-bottom: 1em;
    width: 60px;
    a{
        text-decoration: none;
        color: #fff;
    }
}
.tlega_img{
    width: 24px;
    height: 24px;
}
@media screen and(max-height: 1000px){
    .btnTelegram{
        top: 80vh; 
    }
}
</style>