(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{5559:function(e,a,s){"use strict";s("bfca")},bfca:function(e,a,s){},e344:function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("q-page",{staticClass:"flex flex-center"},[s("div",{staticClass:"sr__scan__item"},[e.scanFlag?s("video",{ref:"scannerRef",attrs:{id:"video","webkit-playsinline":"true",playsinline:"true"}}):e._e(),s("q-btn",{on:{click:e.doScan}},[e._v(e._s(e.canSupport))]),s("q-btn",{on:{click:e.switchCamera}},[e._v(e._s(e.cameraNO))])],1)])},i=[],n=(s("e01a"),s("224f")),c=s("b178"),o=s("1344"),r=Object(o["a"])();const d=Symbol("privateObj");class u{constructor(e,a={scanVoice:"/scan.mp3"}){const{scanVoice:s}=a,t=new Audio(s),i=new n["BrowserMultiFormatReader"],c=[],o=!1,r=async()=>{t.muted&&(t.muted=!1),t.play()};return this[d]={codeReader:i,videoDevices:c,isVideoDevicesInit:o,audio:t,playAudio:r},this.displayEleID=e,this.cameraNO=0,this}get isMediaStreamAPISupported(){return navigator&&navigator.mediaDevices&&"enumerateDevices"in navigator.mediaDevices}async getVideoDevices(){return this[d].isVideoDevicesInit||await this[d].codeReader.listVideoInputDevices().then((e=>{this[d].videoDevices=e,this[d].isVideoDevicesInit=!0})).catch((e=>{throw console.error(e),e})),this[d].videoDevices}async scan(){const e=await this.getVideoDevices();if(e&&e.length>0){const a=this.cameraNO<e.length?this.cameraNO:0,s=e[a].deviceId;return this[d].codeReader.decodeFromVideoDevice(s,this.displayEleID,Object(c["b"])((async(e,a)=>{if(e&&(this[d].playAudio(),r.emit("scaned",e)),a&&!(a instanceof n["NotFoundException"]))throw console.error(a),r.emit("scanError",a),a}),1e3))}}async stopScan(){this[d].codeReader.reset()}}var l=u,h={name:"PageIndex",data(){return{scanFlag:!0,scaner:null,canSupport:"",cameraNO:0}},destroyed(){r.off("scaned",this.onScaned)},async mounted(){console.info("mounted");const e=new l("video");this.scaner=e,this.canSupport=e.isMediaStreamAPISupported?"Can Supper Media":"Can't Supper Media",setTimeout((()=>{e.scan()}),50),r.on("scaned",this.onScaned)},methods:{async doScan(){this.scaner.scan()},onScaned(e){console.info(`scan success! value is:${e}`)},async switchCamera(){const e=await this.scaner.getVideoDevices();if(console.debug({videoDevices:e}),e.length>1)return await this.scaner.stopScan(),this.scaner.cameraNO=++this.scaner.cameraNO%e.length,this.cameraNO=this.scaner.cameraNO,this.scaner.scan()}}},p=h,v=(s("5559"),s("2877")),m=Object(v["a"])(p,t,i,!1,null,"0ec102f3",null);a["default"]=m.exports}}]);