(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("Quasar App")]),a("div",[e._v("Quasar v"+e._s(e.quasarVersion))]),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:e.logout}})],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("Essential Links")]),e._l(e.essentialLinks,(function(t){return a("essential-link",e._b({key:t.title},"essential-link",t,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"a",href:e.link}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.caption))])],1)],1)},r=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=o,c=a("2877"),u=Object(c["a"])(s,l,r,!1,null,null,null),p=u.exports;const d=[{title:"Native Camera Test",caption:"原生代码调用Camera测试",icon:"code",link:"/#/NativeCodeTest"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Check Platform",caption:"检测当前机器平台",icon:"record_voice_over",link:"/#/CheckPlatform"},{title:"My Uploader Test",caption:"客制化 Input file component测试",icon:"rss_feed",link:"/#/MyInputFileTest"},{title:"QR Scan Test",caption:"扫二维码测试",icon:"public",link:"/#/QrScanTest"},{title:"My Barcode Scaner Test",caption:"自制扫二维码控件测试",icon:"favorite",link:"/#/MyBarcodeScanerTest"}];var f={name:"MainLayout",components:{EssentialLink:p},data(){return{leftDrawerOpen:!1,essentialLinks:d,quasarVersion:this.$q.version}},methods:{logout(){this.$keycloak.logout()}}},k=f,v=Object(c["a"])(k,n,i,!1,null,null,null);t["default"]=v.exports}}]);