(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{312:function(t,o,e){var content=e(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("f20b204a",content,!0,{sourceMap:!1})},319:function(t,o,e){"use strict";e.r(o);var l={props:{blog:{type:Object,required:!0},admin:{type:Boolean,default:!1}},computed:{getLink:function(){return this.admin?"/admin/blog/".concat(this.blog.id):"/blog/".concat(this.blog.id)}}},c=(e(325),e(5)),component=Object(c.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("nuxt-link",{attrs:{to:t.getLink}},[e("div",{staticClass:"blog_card"},[e("div",{staticClass:"blog_content"},[e("div",{staticClass:"blog_header"},[e("span",{staticClass:"blog_header"},[t._v(t._s(t.blog.date))]),t._v(" "),e("span",{staticClass:"blog_header"},[t._v(t._s(t.blog.author.name))]),t._v(" "),e("span",{staticClass:"blog_header"},[e("message-mdi")],1),t._v(" "),e("span",{staticClass:"blog_header"},[t._v(t._s(t.blog.coutnComment))])]),t._v(" "),e("h3",{staticClass:"blog_title"},[t._v(t._s(t.blog.title))]),t._v(" "),e("p",{staticClass:"blog_descr"},[t._v(t._s(t.blog.desc))]),t._v(" "),e("button",{staticClass:"blog_btn"},[t._v("Узнать больше")])]),t._v(" "),e("div",{staticClass:"blog_img"},[e("img",{staticClass:"blog_img_item",attrs:{src:t.blog.url,alt:t.blog.author.name}}),t._v(" "),e("div",{staticClass:"blog_search"},[e("div",{staticClass:"blog_search_item"},[e("div",{staticClass:"blog_serach_i"},[e("magnify-mdi")],1)])])])])])}),[],!1,null,"4ac9ed82",null);o.default=component.exports},325:function(t,o,e){"use strict";e(312)},326:function(t,o,e){var l=e(38)(!1);l.push([t.i,'.blog_card[data-v-4ac9ed82]{display:flex;height:360px}.blog_card .blog_content[data-v-4ac9ed82]{width:50%;padding:1em}.blog_card .blog_content .blog_header[data-v-4ac9ed82]{color:#222;font-size:15px;font-weight:600;padding-bottom:2em}.blog_card .blog_content .blog_title[data-v-4ac9ed82]{line-height:1.5;color:#1b212c;font-weight:600;font-size:20px;padding-bottom:2em}.blog_card .blog_content .blog_descr[data-v-4ac9ed82]{font-family:"Rubik",Arial,sans-serif;font-size:17px;line-height:1.8;font-weight:500;color:#222;padding-bottom:1em}.blog_card .blog_content .blog_btn[data-v-4ac9ed82]{color:#222;background-color:transparent;background-image:none;border-color:#222;padding:7px 9px}.blog_card .blog_content .blog_btn[data-v-4ac9ed82]:hover{background-color:#c76572;color:#fff}.blog_card .blog_img[data-v-4ac9ed82]{width:50%;position:relative}.blog_card .blog_img_item[data-v-4ac9ed82]{-o-object-fit:cover;object-fit:cover;height:100%;width:100%;overflow:hidden;position:relative}.blog_card .blog_search[data-v-4ac9ed82]{position:absolute;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;transition:.3s}.blog_card .blog_search:hover .blog_search_item[data-v-4ac9ed82]{opacity:1;background-color:hsla(0,0%,100%,.527);color:#000}.blog_search_item[data-v-4ac9ed82]{width:23%;height:20%;border-radius:50%;position:relative;opacity:0;transition:.3s}.blog_search_item .blog_serach_i[data-v-4ac9ed82]{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}@media screen and (max-width:1000px){.blog_card .blog_content .blog_descr[data-v-4ac9ed82]{display:none}.blog_search_item[data-v-4ac9ed82]{width:30%}}',""]),t.exports=l}}]);