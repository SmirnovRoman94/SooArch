<template>
  <transition name="modal">
    <div class="modal__wrapper">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-title"> {{ title }} </span>
          <span class="button-close" @click="$emit('close')">×</span>
        </div>
        <div class="modal-body">
          <form @submit.prevent="sendMessage" class="message_form">
            <div class="form_group">
              <label>Ваше имя:</label>
              <input
                class="form_control"
                required
                v-model="user.name"
                placeholder="Имя"
              />
            </div>
            <div class="form_group">
              <label>Email:</label>
              <input
                type="email"
                class="form_control"
                required
                v-model="user.email"
                placeholder="Email"
              />
            </div>
              <div class="form_group">
                <label>Укажите удобное для Вас время:</label>
                <div class="time">
                  <select
                    size="1"
                    onmousedown="if (this.options.length > 8){this.size = 8}"
                    onchange="this.size = 0"
                    onblur="this.size = 1"
                    type="text"
                    class="form_control"
                    required
                    v-model="user.time"
                    placeholder="Время"
                  >
                    <option>10:00-11.00</option>
                    <option>11:00-12.00</option>
                    <option>12:00-13.00</option>
                    <option>13:00-14.00</option>
                    <option>14:00-15.00</option>
                    <option>15:00-16.00</option>
                    <option>16:00-17.00</option>
                    <option>17:00-18.00</option>
                    <option>18:00-19.00</option>
                    <option>19:00-20.00</option>
                    <option>20:00-21.00</option>
                  </select>
                </div>
              </div>
            <div class="form_group">
              <label>Ваше сообщение:</label>
              <textarea
                class="form_control"
                v-model="user.message"
                placeholder="Сообщение"
              />
            </div>
            <div class="button_group">
              <button @click="sendMessage" class="btn btnDanger">Отправить сообщение</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        date: "",
        time: "",
        message: "",
      }
    };
  },
  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        this.$emit("close");
      }
    });
  },
  computed: {},
  methods: {
    sendMessage() {
      this.sendTelegram();
      let url = `https://api.whatsapp.com/send/?phone=79046147741&text=${this.user.name}%20${this.user.email}%20${this.user.date}%20${this.user.time}%20${this.user.message}`;
      window.open(url);
    },
    sendTelegram(){
      axios.post('http://sooarch.ru/telegram.php', {
        ...this.user
      })
      .then(() => {
        this.user.name = '',
        this.user.email = '',
        this.user.date = '',
        this.user.time = '',
        this.user.message = '',
        this.$emit("close");
      })
    }
  },
};
</script>

<style lang="scss" scoped>
// Animation
.btnDanger:hover {
  background-color: #fff;
  color: black;
}
.button_group {
  margin-top: 1em;
}
.contex_form {
  display: flex;
  justify-content: space-between;
}
.form_group_time {
  width: 50%;
}
.time {
  width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 6em;
}
select {
  max-height: 100px;
  overflow-y: scroll;
  position: absolute;
  padding: 16px 26px;
  margin-bottom: 30px;
  border-radius: 20px;
  height: 10%;
  width: 95%;
}
option{
  text-align: center;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}

.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00, 00, 00, 0.48);
}

.modal-content {
  position: relative;
  width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all 0.2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  text-align: center;
}
@media screen and (max-width: 900px) {
  .modal-content{
    width: 70%;
  }
  select{
    height: 9%;
    width: 95%;
  }
  
}
@media screen and(max-width:500px) {
  .modal-content{
    width: 100%;
  }
}
</style>
