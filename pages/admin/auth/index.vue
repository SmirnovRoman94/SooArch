<template>
    <section>
        <div class="container">
            <form @submit.prevent="onSubmit" class="auth__form">
                <input v-model="user.email" required="required" type="email" :class="{'enter': enter, 'error': error}" :placeholder="login"/>
                <input v-model="user.password" required="required" type="password" :class="{'enter': enter, 'error': error}" :placeholder="password"/>
                <div class="controls">
                    <button class="controls_item">Login</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            user: {
                email: '',
                password:''
            },
            error: false,
            enter: false,
            login: "login",
            password: "password"
        }
    },
    computed: {
        eerorMessage(){
            return this.password="error password", this.login="error login"
        }
    },
    methods: {
        onSubmit(){
            this.$store.dispatch('authUser', this.user)
                .then((res) => {
                    this.enter = true,
                    setTimeout(() => {
                        this.$router.push('/admin')
                    },2000)
                })
                .catch(this.error = true,
                    //reset
                    this.user.email = '',
                    this.user.password = '',
                    //error
                    this.eerorMessage
                )
        }
    }
}
</script>
<style lang="scss" scoped>
.error{
    border-color: rgba(165, 42, 42, 1);
    background-color: rgba(240, 121, 121, 0.733);
}
.enter{
    border-color: rgb(46, 165, 42);
    background-color: rgba(135, 240, 121, 0.733);
}
    .auth__form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 40vw;
        margin: 0 auto;
        height: 60vh;
    }
    .controls{
    margin: 1em 0;
    display: flex;
    justify-content: space-around;
    .controls_item{
        margin: 1em 1em;
        border: solid 1px rgba(0, 0, 0, 0.2);
        color: #222;
        background-color: rgba(255, 255, 255, 0);
        font-size: 15px;
        padding: 10px 30px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background-color: #c76572;
            color: #fff;
        }
    }
}
</style>