<template>
   <section>
       <div class="container">
           <div class="new_work">
               <h1 class="new_work_header"> New Work</h1>
               <p v-show="error" class="error_text">Заполни поля!!</p>
               <form>
                   <p v-show="editing" class="editing">Изменения сохранены!</p>
                   <input type="text" :class="{'error': error}" ref="elform" v-model="work.url" placeholder="Ссылка на главную картинку"/>
                   <div class="new_url">
                        <label class="custom-file-upload">
                        <input type="file" ref="imgDropzone" @change="onFileUrlWork" />
                        Выберите картинку
                        </label>
                    </div>
                    <p class="progress_load">{{ this.process }}</p>
                   <input type="text" :class="{'error': error}" v-model="work.filter" placeholder="вставь одно из приведенных значений (английскую версию): Жилая - living; Коммерческая - commertial; Архитектурная - architect"/>
                   <input type="text" :class="{'error': error}" v-model="work.title" placeholder="Заголовок товара"/>
                   <input type="tetx" :class="{'error': error}" v-model="work.desc" placeholder="Текст данного товара"/>
                   <label class="example_title">Example </label>
                   <input type="text" :class="{'error': error}" v-model="point.url" placeholder="Ссылка на пример работы"/>
                   <div class="new_url">
                        <label class="custom-file-upload">
                        <input type="file" ref="imgDropzone" @change="onFileUrlPoint" />
                        Выберите картинку
                        </label>
                    </div>
                   <input type="text" :class="{'error': error}" v-model="point.desc" placeholder="Пример текст"/>
                   <div class="example" v-for="item in work.example" :key="item.id">
                       <img :src="item.url"/>
                       <p>{{item.desc}}</p>
                       <div class="controls_example">
                           <button class="controls_example_item" :disabled="diablePoint" :class="{'disable' :diablePoint}" @click.prevent="deletePoint(item)">Удалить пункт</button>
                           <button class="controls_example_item" @click.prevent="editPoint(item)">Изменить пункт</button>
                           <button class="controls_example_item" @click.prevent="savePoint">Сохранить пункт</button>
                       </div>
                        <div v-if="editpoint === item" class="editPoint">
                            <form>
                                <p v-show="editing" class="editing">Изменения сохранены!</p>
                                <input type="text" v-model="item.url"/>
                                <div class="new_url">
                                    <label class="custom-file-upload">
                                    <input type="file" ref="imgDropzone" @change="onFileUrlEditPoint" />
                                    Выберите картинку
                                    </label>
                                </div>
                                <input type="text" v-model="item.desc"/>
                            </form>
                       </div>
                   </div>
                   <div class="controls">
                       <button class="controls_item" @click.prevent="cancel">Закрыть</button>
                       <button class="controls_item" @click.prevent="save">Сохранить</button>
                       <button class="controls_item" @click.prevent="addExample">Добавить пункт(пример)</button>
                   </div>
               </form>
               <div class="work_content">
                   <h5 class="post_header">Дата последнего редактирования</h5>
                    <p class="post_cont">{{work.date}}</p>
               </div>
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
        editWork: {
            type: Object,
            required: false
        }
    },  
    data(){
        return{
            url: "",
            file: null,
            process: "",
            urlWork: null,
            editing: false,
            error: false, 
            editpoint: null,
            editingPoint: false,
            work: this.editWork ? { ...this.editWork } : {
                url: '',
                filter: '',
                title: '',
                desc: '',
                date: new Date(),
                example: []
            },
            point: {
                url: '',
                desc: '',
                id: null
            },
            diablePoint: false
        }
    },
    mounted(){
        let a = this.editWork.example
        let b = Object.keys(a).length
        if(b == 1){
            this.diablePoint = true
        }
    },
    methods: {
        addExample(){
            this.work.example.push({
                url: this.point.url,
                desc: this.point.desc,
                id: Math.floor(Math.random() * 10000)
            })
            this.point.url = '',
            this.point.desc = ''
            console.log(this.work)
        },
        cancel(){
            this.$router.push('/admin/portfolio')
        },
        save(){
            this.editing = true
            this.work.date = new Date()
            this.$store.dispatch('editWork', this.work)
            this.$router.push('/admin/portfolio')
        },
        // points
        deletePoint(item){
            let index = this.work.example.indexOf(item)
            if(index >-1){
                this.work.example.splice(index,1)
            }
        },
        editPoint(item){
           this.editpoint = (this.editpoint === item) ? null : item;
        },
        savePoint(){
            this.editing = true
        },
        onFileUrlWork(event){
            this.urlWork = 1
            this.onFileSelected(event)
        },
        onFileUrlPoint(event){
            this.urlWork = 2
            this.onFileSelected(event)
        },
        onFileUrlEditPoint(event){
            this.urlWork = 3
            this.onFileSelected(event)
        },
        //urlFile
        onFileSelected(event) {
      this.file = event.target.files[0];
      const storage = getStorage()

      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg/png",
      };

      const storageRef = ref(storage, "works/" + this.file.name);
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
              switch(this.urlWork){
                  case 1:
                      this.url = downloadURL;
                    this.work.url = this.url;
                    console.log("File available at", downloadURL);
                    break;
                    case 2:
                        this.url = downloadURL;
                this.point.url = this.url;
                console.log("File available at", downloadURL);
                break;
                case 3:
                    this.url = downloadURL;
                    this.editpoint.url = this.url
                    console.log("File available at", downloadURL);
                    break;
                default: 
                console.log("error")
              }
          });
        }
      );
    }
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
.new_work{
    width: 50%;
    margin: 0 auto;
    .new_work_header{
        font-weight: 400;
        font-size: 28px;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #1b212c;
        padding-bottom: 2em;
        text-align: center;
    }
    .example_title{
        font-weight: 400;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #1b212c;
        padding-bottom: 2em;
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
    .example{
        border-bottom: 1px solid #000;
    }
    .controls_example_item{
        margin: 2em 1em;
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
    .controls_example_item.disable{
        background-color: rgb(219, 170, 170);

    }
}
@media screen and(max-width:900px) {
    .new_work{
        width: 100%;
        .controls{
            flex-wrap: wrap;
        }
    }
}
</style>