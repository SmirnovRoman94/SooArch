<template>
    <section>
        <div class="container">
            <div class="new_price">
                <h1 class="new_price_header">New Price / Editing!</h1>
                <p v-show="error" class="error_text">Заполни поля!!</p>
                <form>
                    <p v-show="editing" class="editing">Изменения сохранены!</p>
                    <input type="text" :class="{'error': error}" ref="elform" v-model="price.url" placeholder="Ссылка на картинку"/>
                    <div class="new_url">
                        <label class="custom-file-upload">
                        <input type="file" ref="imgDropzone" @change="onFileSelected" />
                        Выберите картинку
                        </label>
                    </div>
                    <p class="progress_load">{{ this.process }}</p>
                    <input type="text" :class="{'error': error}" v-model="price.header" placeholder="Заголовок прайа"/>
                    <input type="text" :class="{'error': error}" v-model="price.desc" placeholder="Что входит"/>
                    <input type="text" :class="{'error': error}" v-model="price.cost" placeholder="Стоимость"/>
                    <input type="text" :class="{'error': error}" v-model="price.limit" placeholder="Премущества тарифного плана Кратко в 2-3 слова "/>
                    <div class="controls">
                        <button class="controls_item" @click.prevent="addPrice">Добавить тариф</button>
                        <button class="controls_item" @click.prevent="cancel">Закрыть</button>
                        <button class="controls_item" @click.prevent="save">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default {
    props: {
        editPrice: {
            type: Object,
            required: false
        }
    },
    data(){
        return{
            url: "",
            file: null,
            process: "",
            error: false, 
            editing: false,
            price: this.editPrice ? {...this.editPrice} : {
                url: '',
                header: '',
                desc: '',
                cost: '',
                limit: ''
            }
        }
    },
    methods: {
        addPrice(){
            let ter = this.$refs.elform
            if(ter.value === ''){
                this.error = true
            }else{
                this.$emit('addPrice', this.price)
                this.editing = true
            }
        },
        cancel(){
            this.$router.push('/admin/pricing')
        },
        save(){
            this.editing = true
            this.$store.dispatch('editPrice', this.price)
            this.$router.push('/admin/pricing')
        },
        onFileSelected(event) {
      this.file = event.target.files[0];
      const storage = getStorage()

      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg/png",
      };

      const storageRef = ref(storage, "prices/" + this.file.name);
      const uploadTask = uploadBytesResumable(storageRef, this.file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.process = `Upload is ${progress}  % done`;
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            this.url = downloadURL;
            this.price.url = this.url;
            console.log("File available at", downloadURL);
          });
        }
      );
    },
    }
}
</script>

<style lang="scss" scoped>
.error{
    background-color: rgba(241, 149, 149, 0.726);
}
.error_text{
    font-size: 20px;
    color: rgb(255, 0, 0);
}
.editing{
    color: #53d397;
    font-size: 20px;
    text-align: center;
}
.controls{
    display: flex;
        justify-content: space-around;
        margin: 2em 0;
        .controls_item{
            padding: 10px 15px;
            background: #c76572;
            color: #fff;
            text-transform: uppercase;
            font-size: 17px;
            letter-spacing: .1em;
            font-weight: 400;
            border-radius: 20px;
            &:hover{
                background-color: #000;
            }
        }
    }
.new_price{
    width: 50%;
    margin:  0 auto;
    .new_price_header{
         font-weight: 400;
        font-size: 28px;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #1b212c;
        padding-bottom: 2em;
        text-align: center;
    }
}
@media screen and(max-width:900px) {
    .new_price{
        width: 100%;
        .controls{
            flex-wrap: wrap;
        }
    }
}
</style>