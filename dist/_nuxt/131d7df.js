(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{353:function(e,t,o){var content=o(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(39).default)("3bcd19a8",content,!0,{sourceMap:!1})},376:function(e,t,o){"use strict";o(353)},377:function(e,t,o){var r=o(38)(!1);r.push([e.i,".error[data-v-410a5ed6]{background-color:rgba(241,149,149,.726)}.error_text[data-v-410a5ed6]{font-size:20px;color:red}.editing[data-v-410a5ed6]{color:#53d397;font-size:20px;text-align:center}.new_work[data-v-410a5ed6]{width:50%;margin:0 auto}.new_work .new_work_header[data-v-410a5ed6]{font-size:28px}.new_work .example_title[data-v-410a5ed6],.new_work .new_work_header[data-v-410a5ed6]{font-weight:400;text-transform:uppercase;letter-spacing:3px;color:#1b212c;padding-bottom:2em;text-align:center}.new_work .example_title[data-v-410a5ed6]{font-size:20px}.new_work .controls[data-v-410a5ed6]{display:flex;justify-content:space-around;margin:2em 0}.new_work .controls .controls_item[data-v-410a5ed6]{padding:10px 15px;background:#c76572;color:#fff;text-transform:uppercase;font-size:17px;letter-spacing:.1em;font-weight:400;border-radius:20px}.new_work .controls .controls_item[data-v-410a5ed6]:hover{background-color:#000}.new_work .example[data-v-410a5ed6]{border-bottom:1px solid #000}.new_work .controls_example_item[data-v-410a5ed6]{margin:2em 1em;padding:10px 15px;background:#c76572;color:#fff;text-transform:uppercase;font-size:17px;letter-spacing:.1em;font-weight:400;border-radius:20px}.new_work .controls_example_item[data-v-410a5ed6]:hover{background-color:#000}@media screen and (max-width:900px){.new_work[data-v-410a5ed6]{width:100%}.new_work .controls[data-v-410a5ed6]{flex-wrap:wrap}}",""]),e.exports=r},433:function(e,t,o){"use strict";o.r(t);o(217),o(50);var r=o(316),n={data:function(){return{url:"",file:null,process:"",urlWork:!1,editing:!1,error:!1,editpoint:null,editingPoint:!1,work:{url:"",filter:"",title:"",desc:"",date:new Date,example:[]},point:{url:"",desc:"",id:null}}},methods:{addWork:function(){""===this.$refs.elform.value?this.error=!0:(this.$emit("addwork",this.work),this.editing=!0)},addExample:function(){this.work.example.push({url:this.point.url,desc:this.point.desc,id:Math.floor(1e4*Math.random())}),this.point.url="",this.point.desc=""},cancel:function(){this.$router.push("/admin/portfolio")},save:function(){this.editing=!0,this.work.date=new Date,this.$store.dispatch("editWork",this.work),this.$router.push("/admin/portfolio")},deletePoint:function(e){var t=this.work.example.indexOf(e);t>-1&&this.work.example.splice(t,1)},editPoint:function(e){this.editpoint=this.editpoint===e?null:e},savePoint:function(){this.editing=!0},onFileUrlWork:function(e){this.urlWork=!0,this.onFileSelected(e)},onFileUrlPoint:function(e){this.urlWork=!1,this.onFileSelected(e)},onFileSelected:function(e){var t=this;this.file=e.target.files[0];var o=Object(r.b)(),n=Object(r.c)(o,"works/"+this.file.name),l=Object(r.d)(n,this.file,{contentType:"image/jpeg/png"});l.on("state_changed",(function(e){var progress=e.bytesTransferred/e.totalBytes*100;switch(t.process="Upload is ".concat(progress,"  % done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(function(e){e.code}),(function(){Object(r.a)(l.snapshot.ref).then((function(e){1==t.urlWork?(t.url=e,t.work.url=t.url,console.log("File available at",e)):(t.url=e,t.point.url=t.url,console.log("File available at",e))}))}))}}},l=(o(376),o(5)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("div",{staticClass:"container"},[o("div",{staticClass:"new_work"},[o("h1",{staticClass:"new_work_header"},[e._v(" New Work")]),e._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"error_text"},[e._v("Заполни поля!!")]),e._v(" "),o("form",[o("p",{directives:[{name:"show",rawName:"v-show",value:e.editing,expression:"editing"}],staticClass:"editing"},[e._v("Изменения сохранены!")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.work.url,expression:"work.url"}],ref:"elform",class:{error:e.error},attrs:{type:"text",placeholder:"Ссылка на главную картинку"},domProps:{value:e.work.url},on:{input:function(t){t.target.composing||e.$set(e.work,"url",t.target.value)}}}),e._v(" "),o("div",{staticClass:"new_url"},[o("label",{staticClass:"custom-file-upload"},[o("input",{ref:"imgDropzone",attrs:{type:"file"},on:{change:e.onFileUrlWork}}),e._v("\n                     Выберите картинку\n                     ")])]),e._v(" "),o("p",{staticClass:"progress_load"},[e._v(e._s(this.process))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.work.filter,expression:"work.filter"}],class:{error:e.error},attrs:{type:"text",placeholder:"вставь одно из приведенных значений (английскую версию): Жилая - living; Коммерческая - commertial; Архитектурная - architect"},domProps:{value:e.work.filter},on:{input:function(t){t.target.composing||e.$set(e.work,"filter",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.work.title,expression:"work.title"}],class:{error:e.error},attrs:{type:"text",placeholder:"Заголовок товара"},domProps:{value:e.work.title},on:{input:function(t){t.target.composing||e.$set(e.work,"title",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.work.desc,expression:"work.desc"}],class:{error:e.error},attrs:{type:"tetx",placeholder:"Текст данного товара"},domProps:{value:e.work.desc},on:{input:function(t){t.target.composing||e.$set(e.work,"desc",t.target.value)}}}),e._v(" "),o("label",{staticClass:"example_title"},[e._v("Example ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.point.url,expression:"point.url"}],class:{error:e.error},attrs:{type:"text",placeholder:"Ссылка на пример работы"},domProps:{value:e.point.url},on:{input:function(t){t.target.composing||e.$set(e.point,"url",t.target.value)}}}),e._v(" "),o("div",{staticClass:"new_url"},[o("label",{staticClass:"custom-file-upload"},[o("input",{ref:"imgDropzone",attrs:{type:"file"},on:{change:e.onFileUrlPoint}}),e._v("\n                     Выберите картинку\n                     ")])]),e._v(" "),o("p",{staticClass:"progress_load"},[e._v(e._s(this.process))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.point.desc,expression:"point.desc"}],class:{error:e.error},attrs:{type:"text",placeholder:"Пример текст"},domProps:{value:e.point.desc},on:{input:function(t){t.target.composing||e.$set(e.point,"desc",t.target.value)}}}),e._v(" "),e._l(e.work.example,(function(t){return o("div",{key:t.id,staticClass:"example"},[o("img",{attrs:{src:t.url}}),e._v(" "),o("p",[e._v(e._s(t.desc))]),e._v(" "),o("div",{staticClass:"controls_example"},[o("button",{staticClass:"controls_example_item",on:{click:function(o){return o.preventDefault(),e.deletePoint(t)}}},[e._v("Удалить пункт")]),e._v(" "),o("button",{staticClass:"controls_example_item",on:{click:function(o){return o.preventDefault(),e.editPoint(t)}}},[e._v("Изменить пункт")]),e._v(" "),o("button",{staticClass:"controls_example_item",on:{click:function(t){return t.preventDefault(),e.savePoint.apply(null,arguments)}}},[e._v(" Сохранить пункт")])]),e._v(" "),e.editpoint===t?o("div",{staticClass:"editPoint"},[o("form",[o("p",{directives:[{name:"show",rawName:"v-show",value:e.editing,expression:"editing"}],staticClass:"editing"},[e._v("Изменения сохранены!")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"item.url"}],attrs:{type:"text"},domProps:{value:t.url},on:{input:function(o){o.target.composing||e.$set(t,"url",o.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"item.desc"}],attrs:{type:"text"},domProps:{value:t.desc},on:{input:function(o){o.target.composing||e.$set(t,"desc",o.target.value)}}})])]):e._e()])})),e._v(" "),o("div",{staticClass:"controls"},[o("button",{staticClass:"controls_item",on:{click:function(t){return t.preventDefault(),e.addWork.apply(null,arguments)}}},[e._v("Добавить работу")]),e._v(" "),o("button",{staticClass:"controls_item",on:{click:function(t){return t.preventDefault(),e.cancel.apply(null,arguments)}}},[e._v("Закрыть")]),e._v(" "),o("button",{staticClass:"controls_item",on:{click:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[e._v("Сохранить")]),e._v(" "),o("button",{staticClass:"controls_item",on:{click:function(t){return t.preventDefault(),e.addExample.apply(null,arguments)}}},[e._v("Добавить пункт(пример)")])])],2),e._v(" "),o("div",{staticClass:"work_content"},[o("h5",{staticClass:"post_header"},[e._v("Дата последнего редактирования")]),e._v(" "),o("p",{staticClass:"post_cont"},[e._v(e._s(e.work.date))])])])])])}),[],!1,null,"410a5ed6",null);t.default=component.exports}}]);