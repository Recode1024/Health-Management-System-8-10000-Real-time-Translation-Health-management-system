(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-newstype-add-or-update"],{"0790":function(e,t,r){"use strict";r.r(t);var n=r("e305"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},"0cb6":function(e,t,r){"use strict";r.r(t);var n=r("9307"),a=r("0790");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("e6a5");var s,u=r("f0c5"),o=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"4145b982",null,!1,n["a"],s);t["default"]=o.exports},"6a61":function(e,t,r){var n=r("82e1");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("4f06").default;a("5c495e2b",n,!0,{sourceMap:!1,shadowMode:!1})},"82e1":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-4145b982]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},9307:function(e,t,r){"use strict";var n,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"24rpx",position:"relative",background:"#F1F1F1",height:"auto"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",borderRadius:"16rpx",background:"#fff",display:"block",height:"auto"}},[r("v-uni-view",{style:{padding:"0px 24rpx",margin:"0 0 24rpx 0",borderColor:"#7D7D7D",alignItems:"center",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("分类名称")]),r("v-uni-input",{style:{border:"2rpx solid #fff",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255,255,255,.6)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.typename,placeholder:"分类名称",type:"text"},model:{value:e.ruleForm.typename,callback:function(t){e.$set(e.ruleForm,"typename",t)},expression:"ruleForm.typename"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",flexWrap:"wrap",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"0 40rpx 40rpx 0",color:"#fff",borderRadius:"60rpx",background:"#F6BE1E",width:"40%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},i=[];r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}))},e305:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("f559"),r("ac6a"),r("c5f6"),r("96cf");var a=n(r("3b8d")),i=n(r("e2b1")),s=n(r("064f")),u=n(r("bd56")),o={data:function(){return{cross:"",ruleForm:{typename:""},user:{},ro:{typename:!1}}},components:{wPicker:i.default,xiaEditor:s.default,multipleSelect:u.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var r,n,a,i,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.userid=uni.getStorageSync("appUserid"),t.refid&&(this.ruleForm.refid=Number(t.refid),this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("newstype",this.ruleForm.id);case 11:n=e.sent,this.ruleForm=n.data;case 13:if(this.cross=t.cross,!t.cross){e.next=25;break}a=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(a);case 17:if((e.t1=e.t0()).done){e.next=25;break}if(i=e.t1.value,"typename"!=i){e.next=23;break}return this.ruleForm.typename=a[i],this.ro.typename=!0,e.abrupt("continue",17);case 23:e.next=17;break;case 25:this.styleChange(),this.$forceUpdate(),uni.getStorageSync("raffleType")&&null!=uni.getStorageSync("raffleType")&&(uni.removeStorageSync("raffleType"),setTimeout((function(){s.onSubmitTap()}),300));case 28:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,r,n,a,i,s,u,o,c,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.typename){e.next=3;break}return this.$utils.msg("分类名称不能为空"),e.abrupt("return");case 3:if(!this.cross){e.next=20;break}if(uni.setStorageSync("crossCleanType",!0),i=uni.getStorageSync("statusColumnName"),s=uni.getStorageSync("statusColumnValue"),""==i){e.next=20;break}if(t||(t=uni.getStorageSync("crossObj")),i.startsWith("[")){e.next=16;break}for(u in t)u==i&&(t[u]=s);return o=uni.getStorageSync("crossTable"),e.next=14,this.$api.update("".concat(o),t);case 14:e.next=20;break;case 16:r=Number(uni.getStorageSync("appUserid")),n=t["id"],a=uni.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 20:if(!n||!r){e.next=43;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=n,c={page:1,limit:10,crossuserid:r,crossrefid:n},e.next=26,this.$api.list("newstype",c);case 26:if(p=e.sent,!(p.data.total>=a)){e.next=33;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 33:if(!this.ruleForm.id){e.next=38;break}return e.next=36,this.$api.update("newstype",this.ruleForm);case 36:e.next=40;break;case 38:return e.next=40,this.$api.add("newstype",this.ruleForm);case 40:this.$utils.msgBack("提交成功");case 41:e.next=51;break;case 43:if(!this.ruleForm.id){e.next=48;break}return e.next=46,this.$api.update("newstype",this.ruleForm);case 46:e.next=50;break;case 48:return e.next=50,this.$api.add("newstype",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){if(this.ro[e])return!1;this.$refs[e].show()}}};t.default=o},e6a5:function(e,t,r){"use strict";var n=r("6a61"),a=r.n(n);a.a}}]);