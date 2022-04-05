<template>
    <section>
        <div class="container">
            <div class="post_edit">
                <h1 class="form_header">New post </h1>
                <p v-show="error" class="error_text">Заполни поля!!</p>
                <form>
                    <div class="post_content">
                        <h5 class="post_header">Главное о посте</h5>
                        <p v-show="editing" class="editing">Изменения сохранены!</p>
                        <input type="text" :class="{'error': error}" ref="elform" v-model="post.title" placeholder="Заголовок поста"/>
                        <input type="text" :class="{'error': error}"  v-model="post.desc" placeholder="Красткое содержание поста"/>
                        <input type="text" :class="{'error': error}"  v-model="post.url" placeholder="Ссылка изображения поста"/>
                        <div class="new_url">
                            <label class="custom-file-upload">
                            <input type="file" ref="imgDropzone" @change="onFileUrlPost" />
                            Выберите картинку
                            </label>
                        </div>
                        <p class="progress_load">{{ this.process }}</p>
                    </div>
                    <div class="post_content">
                        <h5 class="post_header">Теги</h5>
                        <p v-show="editing" class="editing">Изменения сохранены!</p>
                        <input  type="text" :class="{'error': error}" v-model="tag.name" placeholder="Тэг"/>
                        <button class="tag_item"  @click.prevent="deleteTag(item)" v-for="item in post.tags" :key="item.id">{{item.name}}</button>
                    </div>
                    <div class="post_content">
                        <h5 class="post_header">Об авторе</h5>
                        <p v-show="editing" class="editing">Изменения сохранены!</p>
                        <input type="text" :class="{'error': error}" v-model="post.author.url" placeholder="Фото автора"/>
                        <div class="new_url">
                            <label class="custom-file-upload">
                            <input type="file" ref="imgDropzone" @change="onFileUrAuthor" />
                            Выберите картинку
                            </label>
                        </div>
                        <input type="text" :class="{'error': error}" v-model="post.author.name" placeholder="Имя автора"/>
                        <input type="text" :class="{'error': error}" v-model="post.author.desc" placeholder="Профессия автора"/>
                    </div>
                    <div class="post_content">
                        <h5 class="post_header">Пункты поста</h5>
                        <p v-show="editing" class="editing">Изменения сохранены!</p>
                        <input type="text" :class="{'error': error}" v-model="itemPost.title" placeholder="Заголовок пункта"/>
                        <input type="text" :class="{'error': error}" v-model="itemPost.desc" placeholder="Текст пункта"/>
                        <input type="text" :class="{'error': error}" v-model="itemPost.number" placeholder="Номер пункта (#1, #2,...)"/>
                        <input type="text" :class="{'error': error}" v-model="itemPost.url" placeholder="Картинка пункта"/>
                        <div class="new_url">
                            <label class="custom-file-upload">
                            <input type="file" ref="imgDropzone" @change="onFileUrlItemPost" />
                            Выберите картинку
                            </label>
                        </div>
                        <div class="delete_point">
                            <div class="point_content" v-for="item in post.description" :key="item.id">
                                <p>{{item.number}}</p>
                                <p>{{item.title}}</p>
                                <p>{{item.desc}}</p>
                                <img class="" :src="item.url"/>
                                <div v-if="editpoint === item">
                                    <form>
                                        <p v-show="editingPoint" class="editing">Editing</p>
                                        <input type="text" :class="{'error': error}" v-model="item.title" placeholder="Заголовок пункта"/>
                                        <input type="text" :class="{'error': error}" v-model="item.desc" placeholder="Текст пункта"/>
                                        <input type="text" :class="{'error': error}" v-model="item.number" placeholder="Номер пункта (#1, #2,...)"/>
                                        <input type="text" :class="{'error': error}" v-model="item.url" placeholder="Картинка пункта"/>
                                        <div class="new_url">
                                            <label class="custom-file-upload">
                                            <input type="file" ref="imgDropzone" @change="onFileUrlEditPoint" />
                                            Выберите картинку
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <button class="point_btn_item" @click.prevent="deletePoint(item)">Удалить пункт</button>
                                <button class="point_btn_item" @click.prevent="editPoint(item)">Редактировать пункт</button>
                                <button class="point_btn_item" @click.prevent="savePoint()">Сохранить пункт</button>
                            </div>
                        </div>
                    </div>
                    <div class="post_content">
                        <h5 class="post_header">Дата последнего редактирования</h5>
                        <p class="post_cont">{{post.date}}</p>
                        <h5 class="post_header">колличество комментариев</h5>
                        <p class="post_cont">Comments: <span>{{post.countComment}}</span></p>
                    </div>
                    <div class="controls">
                        <button class="controls_item" @click.prevent="adpost">Добавить пост</button>
                        <button class="controls_item" @click.prevent="addtags">Добавить тэг</button>
                        <button class="controls_item" @click.prevent="addPostItem">Добавить пукнт поста</button>
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
    data(){
        return{
            url: "",
            file: null,
            process: "",
            urlPost: null,
            editpoint: null,
            error: false, 
            editing: false,
            editingPoint: false,
            tag: {
                name: '',
                id: null
            },
            itemPost: {
                title: '',
                desc: '',
                number: '',
                url: '',
                id: null
            },
            post: {
                title: '',
                desc: '',
                url: '',
                tags: [],
                author: {
                    url: '',
                    name: '',
                    desc: ''
                },
                description: [],
                date: new Date(),
                countComment: null
            }
        }
    },
     methods: {
        adpost(){
            let ter = this.$refs.elform
            if(ter.value === ''){
                this.error = true
            }else{
                this.$emit('addPost', this.post)
                this.editing = true
            }
        },
        addtags(){
            this.post.tags.push({
                name: this.tag.name,
                id: Math.floor(Math.random() * 10000),
            })
            this.tag.name = ''
            this.editing = true
        },
        addPostItem(){
            this.post.description.push({
                title: this.itemPost.title,
                desc: this.itemPost.desc,
                number: this.itemPost.number,
                url: this.itemPost.url,
                id: Math.floor(Math.random() * 10000)
            })
            this.itemPost.title = ''
            this.itemPost.desc = ''
            this.itemPost.number = ''
            this.itemPost.url = ''
            this.editing = true

            
        },
        cancel(){
            this.$router.push('/admin/blog')
        },
        deleteTag(item){
            let index = this.post.tags.indexOf(item)
            if(index >-1){
                this.post.tags.splice(index,1)
            }
        },
        deletePoint(item){
            let index = this.post.description.indexOf(item)
            if(index > -1){
                this.post.description.splice(index,1)
            }
        },
        editPoint(item){
            this.editpoint = (this.editpoint === item) ? null : item;
        },
        savePoint(){
            this.editpoint = null
            this.editingPoint = true
        },
        save(){
            this.editing = true
            this.post.date = new Date()
            this.$store.dispatch('editPost', this.post)
            this.$router.push('/admin/blog')
        },
        onFileUrlPost(event){
            this.urlPost = 1
            this.onFileSelected(event)
        },
        onFileUrAuthor(event){
            this.urlPost = 2
            this.onFileSelected(event)
        },
        onFileUrlItemPost(event){
            this.urlPost = 3
            this.onFileSelected(event)
        },
        onFileUrlEditPoint(event){
            this.urlPost = 4
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

      const storageRef = ref(storage, "blog/" + this.file.name);
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
            switch(this.urlPost){
                case 1: 
                    this.url = downloadURL;
                    this.post.url = this.url;
                    console.log("File available at", downloadURL);
                    break;
                case 2: 
                    this.url = downloadURL;
                    this.post.author.url = this.url;
                    console.log("File available at", downloadURL);
                    break;
                case 3:
                    this.url = downloadURL;
                    this.itemPost.url = this.url;
                    console.log("File available at", downloadURL);
                    break;
                case 4: 
                    this.url = downloadURL;
                    this.editpoint.url = this.url;
                    console.log("File available at", downloadURL);
                    break;
                default:
                    console.log("error")
            }
          });
        }
      );
    },
     }
}
</script>

<style lang="scss" scoped>
.post_edit{
    width: 50%;
    margin: 0 auto;
    .form_header{
        font-weight: 400;
        font-size: 28px;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #1b212c;
        padding-bottom: 2em;
        text-align: center;
    }
    .post_content{
        padding: 2em 0;
        border-bottom: 1px solid #000;
        .post_header{
            font-weight: 400;
            font-size: 20px;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #1b212c;
        }
    }
    .controls{
        padding: 1em 0;
        display: flex;
        justify-content: space-around;
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
}
.editing{
    color: #53d397;
    font-size: 20px;
    text-align: center;
}
.error{
    background-color: rgba(241, 149, 149, 0.726);
}
.error_text{
    font-size: 20px;
    color: rgb(255, 0, 0);
}
.post_header{
    padding-bottom: 1em;
}
.post_cont{
    font-size: 20px;
    font-family: "Rubik", Arial, sans-serif;
    line-height: 1.8;
    font-weight: 400;
    color: #798899;
    padding-bottom: 1em;
}
.tag_item{
    padding: 5px 10px;
    background: #c76572;
    color: #fff;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: .1em;
    font-weight: 400;
    border-radius: 4px;
    margin-left: 1em;
}
.point_content{
    padding: 1em 0;
    border-bottom: 1px solid #000;
}
.point_btn_item{
    padding: 5px 10px;
    background: #c76572;
    color: #fff;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: .1em;
    font-weight: 400;
    border-radius: 4px;
    margin: 2em 1em;
}
@media screen and(max-width:900px) {
    .post_edit{
        width: 90%;
    }
    .controls{
        flex-wrap: wrap;
    }
}
@media screen and(max-width:500px) {
    .post_edit{
        width: 100%;
    }
}
</style>