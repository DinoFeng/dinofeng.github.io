(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2d82":function(e,s,i){},3997:function(e,s,i){"use strict";i("2d82")},e344:function(e,s,i){"use strict";i.r(s);var a=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("q-page",{staticClass:"flex flex-center"},[i("div",{staticClass:"sr__scan__item"},[e.scanFlag?i("video",{ref:"scannerRef",attrs:{id:"video","webkit-playsinline":"true",playsinline:"true"}}):e._e(),i("q-btn",{on:{click:e.doScan}},[e._v(e._s(e.canSupport))]),i("q-select",{attrs:{options:e.videoDevices},model:{value:e.device,callback:function(s){e.device=s},expression:"device"}}),i("q-btn",{on:{click:e.switchCamera}},[e._v(e._s(e.cameraNO))]),i("textarea",{attrs:{cols:100,rows:6},domProps:{value:e.info}})],1)])},t=[],n=(i("e01a"),i("224f")),c=i("b178"),o=i("1344"),r=Object(o["a"])();const d=Symbol("privateObj");class l{constructor(e,s={scanVoice:"scan.mp3"}){const{scanVoice:i}=s,a=new Audio(i),t=new n["BrowserMultiFormatReader"],c=[],o=!1,r=async()=>{a.muted&&(a.muted=!1),a.play()};return this[d]={codeReader:t,videoDevices:c,isVideoDevicesInit:o,audio:a,playAudio:r},this.displayEleID=e,this.cameraNO=0,this}get isMediaStreamAPISupported(){return navigator&&navigator.mediaDevices&&"enumerateDevices"in navigator.mediaDevices}async getVideoDevices(){return this[d].isVideoDevicesInit||await this[d].codeReader.listVideoInputDevices().then((e=>{this[d].videoDevices=e,this[d].isVideoDevicesInit=!0})).catch((e=>{throw console.error(e),e})),this[d].videoDevices}async scan(){const e=await this.getVideoDevices();if(e&&e.length>0){const s=this.cameraNO<e.length?this.cameraNO:0,i=e[s].deviceId;return this[d].codeReader.decodeFromVideoDevice(i,this.displayEleID,Object(c["b"])((async(e,s)=>{if(e&&(this[d].playAudio(),r.emit("scaned",e)),s&&!(s instanceof n["NotFoundException"]))throw console.error(s),r.emit("scanError",s),s}),1e3))}}async stopScan(){this[d].codeReader.reset()}}var h=l,u={name:"PageIndex",data(){return{scanFlag:!0,scaner:null,canSupport:"",cameraNO:0,info:"",videoDevices:[],device:null}},destroyed(){r.off("scaned",this.onScaned)},async mounted(){console.info("mounted");const e=new h("video");this.scaner=e,this.canSupport=e.isMediaStreamAPISupported?"Can Supper Media":"Can't Supper Media",setTimeout((()=>{e.scan().then((()=>e.getVideoDevices())).then((e=>this.videoDevices=e))}),50),r.on("scaned",this.onScaned)},methods:{async doScan(){this.scaner.scan()},onScaned(e){console.info(`scan success! value is:${e}`),this.info=e},async switchCamera(){const e=await this.scaner.getVideoDevices();e.length>1&&(await this.scaner.stopScan(),this.scaner.cameraNO=(this.scaner.cameraNO+1)%e.length,this.cameraNO=`${this.scaner.cameraNO}/${e.length}`,await this.scaner.scan())}}},v=u,p=(i("3997"),i("2877")),m=Object(p["a"])(v,a,t,!1,null,"2eab80d0",null);s["default"]=m.exports}}]);