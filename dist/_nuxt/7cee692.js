(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{366:function(t,o,e){var content=e(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("7421f71e",content,!0,{sourceMap:!1})},405:function(t,o,e){"use strict";e(366)},406:function(t,o,e){var r=e(38)(!1);r.push([t.i,'.port[data-v-3a5865d4]{background-color:#222;padding:3em 0}.portfolio[data-v-3a5865d4]{display:flex;flex-wrap:wrap;margin:0 0 0 1em;grid-column-gap:1em;-moz-column-gap:1em;column-gap:1em;grid-row-gap:1em;row-gap:1em}.controls[data-v-3a5865d4]{margin:1em 0;display:flex;justify-content:space-around}.controls .controls_item[data-v-3a5865d4]{margin:1em;border:1px solid hsla(0,0%,99.2%,.2);color:#fff;background-color:hsla(0,0%,100%,0);font-size:15px;padding:10px 30px;text-transform:uppercase;text-align:center;letter-spacing:2px;display:flex;align-items:center;justify-content:center}.controls .controls_item[data-v-3a5865d4]:hover{background-color:#c76572;color:#fff}.potrtfolio_header[data-v-3a5865d4]{font-weight:400;font-size:28px;text-transform:uppercase;letter-spacing:3px;color:#fff;position:relative}.potrtfolio_header[data-v-3a5865d4]:after{position:absolute;left:0;bottom:0;width:60px;height:2px;content:"";background:#c76572}.potrtfolio_text[data-v-3a5865d4]{font-family:"Rubik",Arial,sans-serif;font-size:17px;line-height:1.8;font-weight:400;color:#798899}.portfolio_img[data-v-3a5865d4]{position:relative;width:32%;height:400px}.portfolio_img:hover .cont[data-v-3a5865d4]{-webkit-animation:darkened-data-v-3a5865d4 .5s forwards;animation:darkened-data-v-3a5865d4 .5s forwards}.portfolio_img:hover .portfolio_img_item[data-v-3a5865d4]{-webkit-animation:increased-data-v-3a5865d4 .5s forwards;animation:increased-data-v-3a5865d4 .5s forwards}.cont[data-v-3a5865d4]{position:absolute;z-index:10;width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-end;opacity:0}@-webkit-keyframes darkened-data-v-3a5865d4{0%{opacity:0}to{opacity:1;background-color:rgba(0,0,0,.315);color:#fff}}@keyframes darkened-data-v-3a5865d4{0%{opacity:0}to{opacity:1;background-color:rgba(0,0,0,.315);color:#fff}}@-webkit-keyframes increased-data-v-3a5865d4{0%{transform:scale(1)}to{transform:scale(1.2)}}@keyframes increased-data-v-3a5865d4{0%{transform:scale(1)}to{transform:scale(1.2)}}.residence[data-v-3a5865d4]{font-size:13px;letter-spacing:0;text-transform:capitalize;color:hsla(0,0%,100%,.7)}.portfolio_cont[data-v-3a5865d4]{font-size:20px;text-transform:uppercase}.img_item[data-v-3a5865d4]{display:inline-block;overflow:hidden;width:100%;height:100%;position:relative}.portfolio_img_item[data-v-3a5865d4]{-o-object-fit:cover;object-fit:cover;height:100%;width:100%;display:block}@media screen and (min-width:1280px){.portfolio[data-v-3a5865d4]{width:1280px;margin:0 auto}}@media screen and (max-width:980px){.portfolio[data-v-3a5865d4]{grid-column-gap:7px;-moz-column-gap:7px;column-gap:7px;grid-row-gap:8px;row-gap:8px}.controls[data-v-3a5865d4]{flex-wrap:wrap}.controls .controls_item[data-v-3a5865d4]{margin:1%;width:45%}}@media screen and (max-width:770px){.portfolio_img[data-v-3a5865d4]{height:300px}}@media screen and (max-width:500px){.port[data-v-3a5865d4]{margin-top:130px}.portfolio[data-v-3a5865d4]{grid-column-gap:1%;-moz-column-gap:1%;column-gap:1%;grid-row-gap:3px;row-gap:3px}.portfolio_img[data-v-3a5865d4]{width:47%;height:250px}.controls .controls_item[data-v-3a5865d4]{width:100%}}',""]),t.exports=r},412:function(t,o,e){"use strict";e.r(o);e(112),e(48),e(20);var r={props:{images:{type:Array,required:!0},admin:{type:Boolean,default:!1}},data:function(){return{loadImages:[],living:"living",commertial:"commertial",architect:"architect"}},mounted:function(){setTimeout(this.allproject,2e3)},computed:{Workfilter:function(){var t=this.loadImages;return t=t.filter((function(t,o){if(o<=8)return t}))}},methods:{allproject:function(){this.loadImages=this.images},livingProject:function(){this.filterProject(this.living)},commertProject:function(){this.filterProject(this.commertial)},archProject:function(){this.filterProject(this.architect)},filterProject:function(t){var o=this.images;return o=o.filter((function(o){if(o.filter==t)return o})),this.loadImages=o}}},n=(e(405),e(5)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"port"},[e("div",{staticClass:"container"},[e("div",{staticClass:"portfolio_content"},[e("h1",{staticClass:"potrtfolio_header"},[t._v("Портфолио")]),t._v(" "),e("p",{staticClass:"potrtfolio_text"},[t._v("Примеры работ, которые Вы можете увидеть")]),t._v(" "),e("div",{staticClass:"controls"},[e("button",{staticClass:"controls_item",on:{click:t.allproject}},[t._v("Все проекты")]),t._v(" "),e("button",{staticClass:"controls_item",on:{click:t.livingProject}},[t._v("Жилые Интерьеры")]),t._v(" "),e("button",{staticClass:"controls_item",on:{click:t.commertProject}},[t._v("Коммерческие Интерьеры")]),t._v(" "),e("button",{staticClass:"controls_item",on:{click:t.archProject}},[t._v("Архитектурное проектирование")])])])]),t._v(" "),e("div",{staticClass:"portfolio"},t._l(t.Workfilter,(function(image){return e("div",{key:image.id,staticClass:"portfolio_img",attrs:{id:image.grid}},[e("nuxt-link",{attrs:{to:t.admin?"/admin/portfolio/"+image.id:"/portfolio/"+image.id}},[e("div",{staticClass:"cont"},[e("h3",{staticClass:"portfolio_cont"},[t._v(t._s(image.title))])]),t._v(" "),e("div",{staticClass:"img_item"},[e("img",{staticClass:"portfolio_img_item",class:image.grid,attrs:{"data-aos":"zoom-in",src:image.url,alt:image.alt}})])])],1)})),0)])}),[],!1,null,"3a5865d4",null);o.default=component.exports}}]);