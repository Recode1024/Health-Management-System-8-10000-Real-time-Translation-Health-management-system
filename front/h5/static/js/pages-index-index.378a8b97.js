(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac4d"),i("8a81"),i("ac6a"),i("96cf");var r=n(i("3b8d")),o=n(i("2971"));i("651d");var a=n(i("b704")),s={components:{uniIcons:a.default},data:function(){return{options2:{effect:"flip",loop:!0},options3:{effect:"cube",loop:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",aboutUsDetail:{},systemIntroductionDetail:{},menuList:[],swiperMenuList:[],user:{},tableName:"",swiperList:[],yinshixinxilist:[],news:[]}},watch:{},mounted:function(){},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),onShow:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t,i,n,r,a,s,c,l,u,p,d=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.swiperMenuList=[],this.role=uni.getStorageSync("appRole"),t=uni.getStorageSync("nowTable"),e.next=5,this.$api.session(t);case 5:return i=e.sent,this.user=i.data,this.tableName=t,n=o.default.list(),this.menuList=n,this.menuList.forEach((function(e,t){0==t&&e.frontMenu.forEach((function(e,t){e.child[0].buttons.indexOf("查看")>-1&&d.swiperMenuList.push(e)}))})),r=[],e.next=14,this.$api.list("config",{page:1,limit:5});case 14:for(i=e.sent,a=!0,s=!1,c=void 0,e.prev=18,l=i.data.list[Symbol.iterator]();!(a=(u=l.next()).done);a=!0)p=u.value,p.name.indexOf("picture")>=0&&p.value&&""!=p.value&&null!=p.value&&r.push({img:p.value,title:p.name,url:p.url});e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](18),s=!0,c=e.t0;case 26:e.prev=26,e.prev=27,a||null==l.return||l.return();case 29:if(e.prev=29,!s){e.next=32;break}throw c;case 32:return e.finish(29);case 33:return e.finish(26);case 34:r&&(this.swiperList=r),this.getAboutUs(),this.getSystemIntroduction(),this.getRecommendList(),this.getHomeList(),this.getNewsList();case 40:case"end":return e.stop()}}),e,this,[[18,22,26,34],[27,,29,33]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{uGetRect:function(e,t){var i=this;return new Promise((function(n){uni.createSelectorQuery().in(i)[t?"selectAll":"select"](e).boundingClientRect((function(e){t&&Array.isArray(e)&&e.length&&n(e),!t&&e&&n(e)})).exec()}))},cloneData:function(e){return JSON.parse(JSON.stringify(e))},newsTabClick2:function(e){this.newsIndex2=e,this.getNewsList()},getNewsList:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={page:1,limit:4,sort:"id",order:"desc"},e.next=3,this.$api.list("news",i);case 3:t=e.sent,this.news=t.data.list;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),homeTabClick2:function(e,t){this["home"+t+"Index2"]=e,this.getHomeList()},getHomeList:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),recommendTabClick2:function(e,t){this[t+"Index2"]=e,this.getRecommendList()},getRecommendList:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i={page:1,limit:4},!uni.getStorageSync("appUserid")){e.next=7;break}return e.next=4,this.$api.recommend2("yinshixinxi",i);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,this.$api.recommend("yinshixinxi",i);case 9:t=e.sent;case 10:this.yinshixinxilist=t.data.list;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSwiperTap:function(e){e.url&&(-1!=e.url.indexOf("https")?window.open(e.url):this.$utils.jump(e.url))},getAboutUs:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.info("aboutus",1);case 2:t=e.sent,this.aboutUsDetail=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getSystemIntroduction:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.info("systemintro",1);case 2:t=e.sent,this.systemIntroductionDetail=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onNewsDetailTap:function(e){this.$utils.jump("../news-detail/news-detail?id=".concat(e))},onDetailTap:function(e,t){this.$utils.jump("../".concat(e,"/detail?id=").concat(t))},onPageTap:function(e){uni.navigateTo({url:"../".concat(e,"/list"),fail:function(){uni.switchTab({url:"../".concat(e,"/list")})}})},onPageTap2:function(e){uni.setStorageSync("useridTag",0),uni.navigateTo({url:e,fail:function(){uni.switchTab({url:e})}})}}};t.default=s},"3d6e":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-7aaf76fb]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},8069:function(e,t,i){"use strict";i.r(t);var n=i("0d9b"),r=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},"8c42":function(e,t,i){var n=i("3d6e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("404fc86f",n,!0,{sourceMap:!1,shadowMode:!1})},ec2f:function(e,t,i){"use strict";var n,r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{style:{minHeight:"100vh",padding:"40rpx 0px 0",overflow:"hidden",alignItems:"flex-start",flexWrap:"wrap",background:"#f1f1f1",flexDirection:"row",display:"flex",width:"100%",height:"auto"}},[i("v-uni-swiper",{staticClass:"swiper",style:{border:"2rpx solid #000",margin:"0 auto",borderRadius:"8rpx",background:"url(http://codegen.caihongy.cn/20240222/772e7c2b8323449c81ceb2c4faf0e109.png) no-repeat center top / 100% 100%,#fff",width:"calc(100% - 48rpx)",height:"360rpx",order:"1"},attrs:{"indicator-dots":!0,autoplay:!0,circular:!0,"indicator-active-color":"#000000","indicator-color":"rgba(0, 0, 0, .3)",duration:500,interval:5e3,vertical:!1}},e._l(e.swiperList,(function(t,n){return i("v-uni-swiper-item",{key:n,style:{width:"100%",background:"#fff",height:"100%"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSwiperTap(t)}}},[i("v-uni-image",{style:{width:"100%",padding:"24rpx",objectFit:"cover",background:"url(http://codegen.caihongy.cn/20240222/772e7c2b8323449c81ceb2c4faf0e109.png) no-repeat center top / 100% 100%,#fff",display:"block",height:"100%"},attrs:{mode:"aspectFill",src:e.baseUrl+t.img}}),e._e()],1)})),1),i("v-uni-view",{staticClass:"menu",style:{border:"2rpx solid #000",padding:"20rpx",margin:"40rpx auto",borderRadius:"8rpx",flexWrap:"wrap",background:"url(http://codegen.caihongy.cn/20240222/772e7c2b8323449c81ceb2c4faf0e109.png) no-repeat center top / 100% 100%,#fff",display:"flex",width:"calc(100% - 48rpx)",justifyContent:"space-between",order:"0"}},[e._l(e.menuList,(function(t,n){return[e._l(t.frontMenu,(function(t,r){return 0==n?[e._l(t.child,(function(t,n){return[e._l(t.buttons,(function(n,r){return["查看"==n&&"yifahuodingdan"!=t.tableName&&"yituikuandingdan"!=t.tableName&&"yiquxiaodingdan"!=t.tableName&&"weizhifudingdan"!=t.tableName&&"yizhifudingdan"!=t.tableName&&"yiwanchengdingdan"!=t.tableName?i("v-uni-view",{key:r+"_0",staticClass:"menu-list",style:{width:"25%",padding:"12rpx 0",margin:"10rpx 0",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onPageTap2("../"+t.tableName+"/list")}}},[i("v-uni-view",{staticClass:"iconarr",class:t.appFrontIcon,style:{padding:"0px",margin:"0px auto",color:"#0d75d6",borderRadius:"100%",textAlign:"center",background:"none",display:"block",width:"88rpx",lineHeight:"88rpx",fontSize:"64rpx",height:"88rpx"}}),i("v-uni-view",{style:{padding:"0",margin:"12rpx auto 0",color:"#0d75d6",textAlign:"center",width:"100%",lineHeight:"28rpx",fontSize:"28rpx"}},[e._v(e._s(t.menu.split("列表")[0]))])],1):e._e()]}))]}))]:e._e()}))]}))],2),i("v-uni-view",{style:{padding:"80rpx 24rpx",margin:"40rpx auto 0",borderRadius:"0px",alignItems:"flex-start",flexWrap:"wrap",background:"url(http://codegen.caihongy.cn/20240223/4eb834b8c753407b8611b447ef50e882.png) no-repeat center top / 100% auto,#FFF7DF",flexDirection:"column",display:"flex",width:"calc(100% - 0px)",position:"relative",height:"auto",order:"1"}},[i("v-uni-view",{style:{padding:"0 12rpx",margin:"0",borderColor:"#38bf3e",color:"#fff",textAlign:"center",background:"none",borderWidth:"0 0 0 0px",width:"100%",fontSize:"40rpx",lineHeight:"36rpx",borderStyle:"solid","text-stroke":"2rpx #000000",fontWeight:"600",height:"36rpx"}},[e._v(e._s(e.aboutUsDetail.title))]),i("v-uni-view",{style:{margin:"40rpx 0 0",color:"#333",textAlign:"center",display:"block",width:"100%",lineHeight:"1",fontSize:"32rpx"}},[e._v(e._s(e.aboutUsDetail.subtitle))]),i("v-uni-view",{style:{padding:"0 0px",margin:"40rpx 0 0",borderRadius:"0",background:"none",display:"flex",width:"100%",justifyContent:"space-between",height:"auto",order:"2"}},[e.aboutUsDetail.picture1?i("img",{style:{width:"100%",margin:"0 0px",objectFit:"cover",borderRadius:"16rpx",display:"block",height:"300rpx"},attrs:{src:e.baseUrl+e.aboutUsDetail.picture1}}):e._e(),e.aboutUsDetail.picture2?i("img",{style:{width:"31%",margin:"0 0px",objectFit:"cover",borderRadius:"16rpx",display:"none",height:"160rpx"},attrs:{src:e.baseUrl+e.aboutUsDetail.picture2}}):e._e(),e.aboutUsDetail.picture3?i("img",{style:{width:"31%",margin:"0 0px",objectFit:"cover",borderRadius:"16rpx",display:"none",height:"160rpx"},attrs:{src:e.baseUrl+e.aboutUsDetail.picture3}}):e._e()]),i("v-uni-view",{style:{padding:"0px",margin:"24rpx 0 0px 0",color:"#333",borderRadius:"0",background:"none",width:"100%",lineHeight:"48rpx",fontSize:"28rpx",order:"2"},domProps:{innerHTML:e._s(e.aboutUsDetail.content)}}),i("v-uni-view",{style:{border:"0",padding:"0 30rpx",margin:"40rpx auto 20rpx",borderRadius:"8rpx",textAlign:"center",background:"#a5ccc4",display:"none",width:"auto",lineHeight:"56rpx",order:"3"}},[i("v-uni-text",{style:{color:"#f5f5f5",fontSize:"24rpx"}},[e._v("更多")]),i("v-uni-text",{staticClass:"icon iconfont icon-gengduo1",style:{color:"#f5f5f5",fontSize:"24rpx"}})],1),i("v-uni-view",{style:{width:"100%",position:"absolute",top:"-200rpx",background:"url(http://codegen.caihongy.cn/20231220/f7e2906a88da4261917ac452b2a8858c.png) no-repeat center top /100% 100%",display:"none",height:"160rpx"}}),i("v-uni-view",{style:{width:"50%",background:"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat",display:"none",height:"160rpx"}})],1),i("v-uni-view",{style:{padding:"64rpx 24rpx",margin:"0px auto",flexWrap:"wrap",background:"url(http://codegen.caihongy.cn/20240223/eece8113785146e0a55f0092d5c98ca1.png) no-repeat center top / 100% auto,#FFF7DF",display:"flex",width:"calc(100% - 0px)",height:"auto",order:"6"}},[i("v-uni-view",{style:{padding:"0 0 0 12rpx",margin:"0 auto",borderColor:"#38bf3e",color:"#fff",textAlign:"center",background:"none",borderWidth:"0px",width:"100%",lineHeight:"36rpx",fontSize:"40rpx",borderStyle:"solid","text-stroke":"2rpx #000000",fontWeight:"600"}},[e._v(e._s(e.systemIntroductionDetail.title))]),i("v-uni-view",{style:{padding:"0 0 24rpx",margin:"32rpx auto 0px",color:"#333",borderRadius:"0 0 40rpx 40rpx",textAlign:"center",background:"none",display:"block",width:"calc(100% - 48rpx)",lineHeight:"1",fontSize:"32rpx"}},[e._v(e._s(e.systemIntroductionDetail.subtitle))]),i("v-uni-view",{style:{padding:"20rpx",margin:"20rpx 0 0",borderColor:"#333",borderRadius:"16rpx 16rpx 0 0",flexWrap:"wrap",background:"none",borderWidth:"2rpx 2rpx 0 2rpx",display:"block",width:"100%",borderStyle:"solid",justifyContent:"space-between",height:"auto"}},[e.systemIntroductionDetail.picture1?i("img",{style:{margin:"0 0px",objectFit:"cover",borderRadius:"8rpx",display:"block",width:"48%",float:"left",height:"400rpx"},attrs:{src:e.baseUrl+e.systemIntroductionDetail.picture1}}):e._e(),e.systemIntroductionDetail.picture2?i("img",{style:{margin:"0 0px",objectFit:"cover",borderRadius:"8rpx",display:"block",width:"48%",float:"right",height:"190rpx"},attrs:{src:e.baseUrl+e.systemIntroductionDetail.picture2}}):e._e(),e.systemIntroductionDetail.picture3?i("img",{style:{margin:"20rpx 0 0",objectFit:"cover",borderRadius:"8rpx",display:"block",width:"48%",float:"right",height:"190rpx"},attrs:{src:e.baseUrl+e.systemIntroductionDetail.picture3}}):e._e()]),i("v-uni-view",{style:{padding:"20rpx 20rpx 40rpx",margin:"0",borderColor:"#000",color:"#333",borderRadius:"0 0 16rpx 16rpx",background:"none",borderWidth:"0 2rpx 2rpx",width:"100%",clear:"both",lineHeight:"48rpx",fontSize:"28rpx",borderStyle:"solid"},domProps:{innerHTML:e._s(e.systemIntroductionDetail.content)}}),i("v-uni-view",{style:{border:"0",padding:"0 30rpx",margin:"0 auto",textAlign:"center",background:"#409EFF",display:"none",width:"auto",lineHeight:"56rpx",order:"3"}},[i("v-uni-text",{style:{color:"#f5f5f5",fontSize:"24rpx"}},[e._v("更多")]),i("v-uni-text",{staticClass:"icon iconfont icon-gengduo1",style:{color:"#f5f5f5",fontSize:"24rpx"}})],1),i("v-uni-view",{style:{width:"50%",background:"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat",display:"none",height:"160rpx"}}),i("v-uni-view",{style:{width:"50%",background:"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat",display:"none",height:"160rpx"}})],1),i("v-uni-view",{staticClass:"listBox recommend",style:{width:"calc(100% - 0px)",padding:"60rpx 24rpx",margin:"0 auto",borderRadius:"0",background:"url(http://codegen.caihongy.cn/20240223/73a4808da5734644ad6d17fe0195e700.png) no-repeat center top / 100% auto,#F6BE1E",order:"1"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0 24rpx",margin:"0",textAlign:"center",background:"none",width:"100%",lineHeight:"80rpx",height:"auto"}},[i("v-uni-view",{style:{fontSize:"40rpx",color:"#fff","text-stroke":"2rpx #000000",fontWeight:"600"}},[e._v("饮食信息推荐")])],1),i("v-uni-view",{staticClass:"list-box style3",style:{width:"100%",padding:"0 0 24rpx",margin:"40rpx 0 0",height:"auto"}},e._l(e.yinshixinxilist,(function(t,n){return i("v-uni-view",{key:n,staticClass:"list-item",style:{border:"2rpx solid #000",padding:"20rpx",margin:"0 0 40rpx",borderRadius:"8rpx",alignItems:"center",flexWrap:"wrap",background:"#F7F1DF",display:"flex",width:"100%",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onDetailTap("yinshixinxi",t.id)}}},["http"==t.yinshitupian.substring(0,4)?i("v-uni-image",{staticClass:"list-item-image",style:{width:"260rpx",objectFit:"cover",borderRadius:"8rpx",display:"block",height:"260rpx"},attrs:{mode:"aspectFill",src:t.yinshitupian}}):i("v-uni-image",{staticClass:"list-item-image",style:{width:"260rpx",objectFit:"cover",borderRadius:"8rpx",display:"block",height:"260rpx"},attrs:{mode:"aspectFill",src:t.yinshitupian?e.baseUrl+t.yinshitupian.split(",")[0]:""}}),i("v-uni-view",{staticClass:"list-item-body",style:{minHeight:"200rpx",padding:"0 0 0 20rpx",margin:"0",flexWrap:"wrap",display:"flex",width:"calc(100% - 260rpx)",position:"relative",height:"auto"}},[i("v-uni-view",{staticClass:"list-item-title",style:{padding:"0 0px",margin:"0",overflow:"hidden",whiteSpace:"nowrap",color:"#333",width:"100%",lineHeight:"48rpx",fontSize:"28rpx",textOverflow:"ellipsis"}},[e._v(e._s(t.yinshimingcheng))]),i("v-uni-view",{style:{width:"100%",padding:"0 0px",order:"6"}},[i("v-uni-text",{staticClass:"icon iconfont icon-shijian21",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"24rpx",color:"#666"}}),i("v-uni-text",{style:{color:"#666",lineHeight:"1.5",fontSize:"24rpx"}},[e._v(e._s(t.addtime))])],1),i("v-uni-view",{style:{padding:"0 0px",margin:"0 10rpx 0 0",display:"inline-block"}},[i("v-uni-text",{staticClass:"icon iconfont icon-shoucang10",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"24rpx",color:"#666"}}),i("v-uni-text",{style:{color:"#666",lineHeight:"1.5",fontSize:"24rpx"}},[e._v(e._s(t.storeupnum))])],1),i("v-uni-view",{style:{padding:"0 0px",margin:"0 10rpx 0 0",display:"inline-block"}},[i("v-uni-text",{staticClass:"icon iconfont icon-chakan2",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"24rpx",color:"#666"}}),i("v-uni-text",{style:{color:"#666",lineHeight:"1.5",fontSize:"24rpx"}},[e._v(e._s(t.clicknum))])],1)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"listBox news",style:{width:"calc(100% - 0px)",padding:"60rpx 24rpx",margin:"0 auto",background:"url(http://codegen.caihongy.cn/20240223/73a4808da5734644ad6d17fe0195e700.png) no-repeat center top / 100% auto,#F6BE1E",order:"5"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0 0 0 12rpx",margin:"0 auto",borderColor:"#38bf3e",textAlign:"center",display:"block",justifyContent:"space-between",background:"none",borderWidth:"0 0 0 0px",width:"calc(100% - 48rpx)",lineHeight:"60rpx",position:"relative",borderStyle:"solid",height:"60rpx"}},[i("v-uni-view",{style:{fontSize:"40rpx",color:"#fff","text-stroke":"2rpx #000000",fontWeight:"600"}},[e._v("公告信息")]),i("v-uni-view",{style:{position:"absolute",right:"60rpx",alignItems:"center",top:"0px",justifyContent:"center",display:"flex"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("news")}}},[i("v-uni-text",{style:{color:"#eee",fontSize:"24rpx"}},[e._v("查看更多")]),i("v-uni-text",{staticClass:"icon iconfont icon-jiantou25",style:{color:"#eee",fontSize:"24rpx"}})],1)],1),i("v-uni-view",{staticClass:"news-box2",style:{width:"100%",padding:"0",margin:"60rpx 0 0",height:"auto"}},[e._l(e.news,(function(t,n){return[0==n?i("v-uni-view",{key:n+"_0",staticClass:"list-item",style:{border:"2rpx solid #000000",padding:"20rpx",margin:"0 0 20rpx",borderRadius:"8rpx",background:"#F7F1DF",width:"100%",position:"relative",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onNewsDetailTap(t.id)}}},[i("v-uni-image",{staticClass:"listmpic",style:{width:"100%",objectFit:"cover",borderRadius:"8rpx",display:"block",height:"328rpx"},attrs:{mode:"aspectFill",src:e.baseUrl+t.picture}}),i("v-uni-view",{style:{width:"100%",background:"rgba(0,0,0,0)"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0 0px",overflow:"hidden",whiteSpace:"nowrap",color:"#333",width:"100%",lineHeight:"48rpx",fontSize:"inherit",textOverflow:"ellipsis"}},[e._v(e._s(t.title))]),i("v-uni-view",{staticClass:"text",style:{padding:"0 0px",margin:"0",overflow:"hidden",whiteSpace:"nowrap",color:"inherit",width:"100%",lineHeight:"48rpx",fontSize:"inherit",textOverflow:"ellipsis"}},[e._v(e._s(t.introduction))]),i("v-uni-view",{style:{width:"100%",padding:"0 0px"}},[i("v-uni-text",{staticClass:"icon iconfont icon-shijian21",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"inherit",color:"inherit"}}),i("v-uni-text",{style:{color:"inherit",lineHeight:"1.5",fontSize:"inherit"}},[e._v(e._s(t.addtime))])],1),i("v-uni-view",{style:{padding:"0 0px",margin:"0 20rpx 0 0",display:"inline-block"}},[i("v-uni-text",{staticClass:"icon iconfont icon-geren16",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"inherit",color:"inherit"}}),i("v-uni-text",{style:{color:"inherit",lineHeight:"1.5",fontSize:"inherit"}},[e._v(e._s(t.name))])],1),i("v-uni-view",{style:{padding:"0 0px",margin:"0 20rpx 0 0",display:"inline-block"}},[i("v-uni-text",{staticClass:"icon iconfont icon-zan10",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"inherit",color:"inherit"}}),i("v-uni-text",{style:{color:"inherit",lineHeight:"1.5",fontSize:"inherit"}},[e._v(e._s(t.thumbsupnum))])],1),i("v-uni-view",{style:{padding:"0 0px",margin:"0 20rpx 0 0",display:"inline-block"}},[i("v-uni-text",{staticClass:"icon iconfont icon-shoucang10",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"inherit",color:"inherit"}}),i("v-uni-text",{style:{color:"inherit",lineHeight:"1.5",fontSize:"inherit"}},[e._v(e._s(t.storeupnum))])],1),i("v-uni-view",{style:{padding:"0 0px",margin:"0 20rpx 0 0",display:"inline-block"}},[i("v-uni-text",{staticClass:"icon iconfont icon-chakan2",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"inherit",color:"inherit"}}),i("v-uni-text",{style:{color:"inherit",lineHeight:"1.5",fontSize:"inherit"}},[e._v(e._s(t.clicknum))])],1)],1)],1):e._e(),n>0?i("v-uni-view",{key:n+"_1",staticClass:"list-item",style:{padding:"20rpx",borderColor:"#000",margin:"0 0 20rpx 0",borderRadius:"8rpx",flexWrap:"wrap",borderWidth:"2rpx",background:"#F7F1DF",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onNewsDetailTap(t.id)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0 0px",overflow:"hidden",whiteSpace:"nowrap",color:"#333",width:"100%",lineHeight:"48rpx",fontSize:"28rpx",textOverflow:"ellipsis"}},[e._v(e._s(t.title))]),i("v-uni-view",{staticClass:"text",style:{padding:"0 0px",margin:"0",overflow:"hidden",whiteSpace:"nowrap",color:"#666",width:"100%",lineHeight:"48rpx",fontSize:"28rpx",textOverflow:"ellipsis"}},[e._v(e._s(t.introduction))]),i("v-uni-view",{style:{width:"100%",padding:"0 0px",order:"3"}},[i("v-uni-text",{staticClass:"icon iconfont icon-shijian21",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"inherit",color:"inherit"}}),i("v-uni-text",{style:{color:"inherit",lineHeight:"1.5",fontSize:"inherit"}},[e._v(e._s(t.addtime))])],1),i("v-uni-view",{style:{padding:"0 0px",margin:"0 20rpx 0 0",display:"inline-block"}},[i("v-uni-text",{staticClass:"icon iconfont icon-geren16",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"inherit",color:"inherit"}}),i("v-uni-text",{style:{color:"inherit",lineHeight:"1.5",fontSize:"inherit"}},[e._v(e._s(t.name))])],1),i("v-uni-view",{style:{padding:"0 0px",margin:"0 20rpx 0 0",display:"inline-block"}},[i("v-uni-text",{staticClass:"icon iconfont icon-zan10",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"inherit",color:"inherit"}}),i("v-uni-text",{style:{color:"inherit",lineHeight:"1.5",fontSize:"inherit"}},[e._v(e._s(t.thumbsupnum))])],1),i("v-uni-view",{style:{padding:"0 0px",margin:"0 20rpx 0 0",display:"inline-block"}},[i("v-uni-text",{staticClass:"icon iconfont icon-shoucang10",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"inherit",color:"inherit"}}),i("v-uni-text",{style:{color:"inherit",lineHeight:"1.5",fontSize:"inherit"}},[e._v(e._s(t.storeupnum))])],1),i("v-uni-view",{style:{padding:"0 0px",margin:"0 20rpx 0 0",display:"inline-block"}},[i("v-uni-text",{staticClass:"icon iconfont icon-chakan9",style:{margin:"0 4rpx 0 0",lineHeight:"1.5",fontSize:"inherit",color:"inherit"}}),i("v-uni-text",{style:{color:"inherit",lineHeight:"1.5",fontSize:"inherit"}},[e._v(e._s(t.clicknum))])],1)],1):e._e()]}))],2)],1)],1)],1)},o=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},f38e:function(e,t,i){"use strict";var n=i("8c42"),r=i.n(n);r.a},f75a:function(e,t,i){"use strict";i.r(t);var n=i("ec2f"),r=i("8069");for(var o in r)"default"!==o&&function(e){i.d(t,e,(function(){return r[e]}))}(o);i("f38e");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7aaf76fb",null,!1,n["a"],a);t["default"]=c.exports}}]);