<template>
    <div class="foother">
        <h3 class="contact">inst - <span>@sooarch.design</span></h3>
        <div class="social">
            <div class="foother_icons">
                <a href="https://vk.com/soo_arch"><img src="~/assets/img/social/vk.png"></a>
            </div>
            <div class="foother_icons">
                <a href="https://t.me/soospb"><img src="~/assets/img/social/telegram.png"></a>
            </div>
            <!-- <div class="foother_icons">
                <a href="https://www.instagram.com/sooarch.design/">
                <img src="~/assets/img/social/insta.png"></a>
            </div>         -->
        </div>
        <div class="foother_contact">
            <h3 class="contact">Наши контакты</h3>
            <p class="fother_email">sooarchspb@gmail.com</p>
        </div>
        <div class="copy">
            <p class="copyright">Copyright ©<slot>{{new Date().getFullYear()}}</slot> Все права защищены <heart-mdi class="icon_heart"></heart-mdi> by Colorlib </p>
            <div class="enter">
                <nuxt-link to="/admin/auth"><exitToApp-mdi></exitToApp-mdi></nuxt-link>
            </div>
        </div>
        <!--  ПОДЕЛИТЬСЯ В СОЦ СЕТЯХ!!!<script src="https://yastatic.net/share2/share.js"></script>
<div class="ya-share2" data-curtain data-shape="round" data-services="vkontakte,whatsapp"></div> -->
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.copy{
    display: flex;
    justify-content: center;
    .enter{
        margin-left: 2em;
    }
}
a {
    text-decoration:none;
    color: rgba(255, 255, 255, 0.5);
}
.material-design-icon.instagram-icon{
    color: #fff;
}

    .foother{
       font-size: 16px;
        background: #222;
        padding: 5em 0;

        .social{
            display: flex;
            justify-content: center;
            margin-bottom: 2em;
            width: 100%;
            .foother_icons{
                height: 60px;
                width: 60px;
                display: block;
                float: left;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 50%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center; 
                color: #fff;
                &:last-child{
                    margin-left: 9px;
                }
            }
        }
        .foother_contact{
            text-align: center;
            margin-bottom: 3em;
            .fother_email{
                color: #fff;
            }
        }
        .copyright{
            color: rgba(255, 255, 255, 0.5);
            text-align: center;
            .icon_heart{
                color: rgb(255, 0, 0);
            }
        }
    }
.contact{
                font-weight: 300;
                font-size: 20px;
                text-transform: uppercase;
                letter-spacing: 3px;
                color: #fff;
                margin-bottom: 1em;
                text-align: center;
            }
</style>