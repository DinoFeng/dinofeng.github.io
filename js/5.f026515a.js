(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"3bf0":function(e,n,t){"use strict";t("6ea8")},5128:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-page",{staticClass:"flex flex-center"},[t("div",{staticClass:"sr__scan__item"},[e.scanFlag?t("video",{ref:"scannerRef",attrs:{id:"video","webkit-playsinline":"true",playsinline:"true"}}):e._e(),t("q-btn",{on:{click:e.doScan}},[e._v("Scan")])],1)])},o=[],i=(t("ddb0"),t("224f")),s=t("b178"),c={name:"PageIndex",data(){return{scanFlag:!0}},async mounted(){console.info("mounted"),setTimeout((()=>{this.doScan()}),500)},methods:{async doScan(){const{codeReader:e,isMediaStreamAPISupported:n}=await this.getCodeReader();if(!n)return void console.error("Your device does not support scanning operation. Please change the device and try again!");const{videoDevices:t}=await this.getVideoDevices(e);return t&&t.length>0?this.scan(e,t[0].deviceId,"video"):void 0},async getVideoDevices(e){const n=[];return await e.listVideoInputDevices().then((e=>{n.push(...e)})).catch((()=>{console.error("Your device does not support scanning operation. Please change the device and try again!")})),{videoDevices:n}},async getCodeReader(){const e=new Map,n=[i["BarcodeFormat"].CODE_39,i["BarcodeFormat"].CODABAR,i["BarcodeFormat"].QR_CODE];e.set(i["DecodeHintType"].POSSIBLE_FORMATS,n);const t=new i["BrowserMultiFormatReader"](e),a=navigator&&navigator.mediaDevices&&"enumerateDevices"in navigator.mediaDevices;return{codeReader:t,isMediaStreamAPISupported:a}},async scan(e,n,t){const a=new Audio("/scan.mp3");return e.decodeFromVideoDevice(n,t,Object(s["b"])((async(n,t)=>{if(n&&(a.muted&&(a.muted=!1),a.play(),console.info(`scan success, value is:${n}`),setTimeout((()=>{e.reset()}))),t&&!(t instanceof i["NotFoundException"]))throw console.error(t),t}),1e3))}}},r=c,d=(t("3bf0"),t("2877")),u=Object(d["a"])(r,a,o,!1,null,"e86e011c",null);n["default"]=u.exports},"6ea8":function(e,n,t){}}]);