(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"18c6":function(e,t,s){},"2d44":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-dialog",{ref:"dialog",attrs:{seamless:e.seamless,persistent:e.persistent,position:e.position},on:{hide:e.hide},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[s("q-card",{staticClass:"my-card"},[e.canSupport?s("video",{ref:"scannerRef",attrs:{id:"video","webkit-playsinline":"true",playsinline:"true"}}):e._e(),e.canSwitch?s("div",{staticClass:"absolute-top text-subtitle2 text-right"},[s("q-btn",{attrs:{round:"",icon:"cameraswitch"},on:{click:e.switchCamera}})],1):e._e()])],1)},a=[],n=s("f2c6"),c=s("49e3"),o={name:"Scanner",props:{seamless:Boolean,persistent:Boolean,position:String},data(){return{scaner:null,canSupport:!0,audio:new Audio("scan.mp3"),showDialog:this.isShow,canSwitch:!1}},destroyed(){c["a"].off("scaned",this.onScaned)},async mounted(){const e=new n["a"]("video");this.scaner=e,this.canSupport=e.isMediaStreamAPISupported,c["a"].on("scaned",this.onScaned)},methods:{show(){this.showDialog=!0,this.doScan().then((()=>this.scaner.getVideoDevices())).then((e=>this.canSwitch=e.length>1))},hide(){this.stopScan().then((()=>this.showDialog=!1))},async stopScan(){return this.scaner.stopScan()},async doScan(){return this.scaner.scan()},async playAudio(){this.audio.muted&&(this.audio.muted=!1),this.audio.play()},onScaned(e){console.info(`scan success! value is:${e}`),this.playAudio(),this.$emit("scaned",e)},async switchCamera(){this.scaner.switchCamera()}}},r=o,d=(s("4bf5"),s("2877")),h=Object(d["a"])(r,i,a,!1,null,"b1f9fd86",null);t["a"]=h.exports},"315e":function(e,t,s){},"49e3":function(e,t,s){"use strict";var i=s("1344");t["a"]=Object(i["a"])()},"4bf5":function(e,t,s){"use strict";s("315e")},"5ee4":function(e,t,s){"use strict";s("18c6")},b4c0:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"flex flex-center"},[s("div",{staticClass:"sr__scan__item"},[s("custom-component",{ref:"scanner",on:{scaned:e.onScaned}}),s("q-btn-group",[s("q-btn",{on:{click:e.beginScan}},[e._v("test")])],1),s("textarea",{attrs:{cols:100,rows:6},domProps:{value:e.info}})],1)])},a=[],n=s("2d44"),c={name:"PageIndex",components:{CustomComponent:n["a"]},data(){return{info:""}},methods:{async beginScan(){this.$refs.scanner.show()},onScaned(e){this.info=e,this.$refs.scanner.hide()}}},o=c,r=(s("5ee4"),s("2877")),d=Object(r["a"])(o,i,a,!1,null,"5622e8fc",null);t["default"]=d.exports},f2c6:function(e,t,s){"use strict";s("e01a");var i=s("224f"),a=s("b178"),n=s("49e3");const c=Symbol("privateObj");class o{constructor(e){const t=new i["BrowserMultiFormatReader"],s=[],a=!1,o=()=>{const e=this[c].videoDevices.findIndex((e=>"后置镜头"===e.label));return n["a"].emit("test",{mainCamIndex:e,videoDevices:this[c].videoDevices}),e>-1?e:this[c].videoDevices.length-1};return this[c]={codeReader:t,videoDevices:s,isVideoDevicesInit:a,getDefaultDeviceNO:o},this.displayEleID=e,this.cameraNO=-1,this}get isMediaStreamAPISupported(){return navigator&&navigator.mediaDevices&&"enumerateDevices"in navigator.mediaDevices}get isScanning(){return this[c].codeReader.isVideoPlaying(this[c].codeReader.getMediaElement(this.displayEleID,"video"))}async getVideoDevices(){return this[c].isVideoDevicesInit||await this[c].codeReader.listVideoInputDevices().then((e=>{this[c].videoDevices=e,this[c].isVideoDevicesInit=!0})).catch((e=>{throw console.error(e),e})),this[c].videoDevices}async switchCamera(e){const t=await this.getVideoDevices();if(t.length>1){let s=0;s=e?e<t.length?e:this[c].getDefaultDeviceNO():(this.cameraNO+1)%t.length,this.cameraNO!==s&&(this.isScanning&&await this.stopScan(),this.cameraNO=s,await this.scan())}}async scan(){const e=await this.getVideoDevices();if(e&&e.length>0){this.cameraNO=this.cameraNO>-1&&this.cameraNO<e.length?this.cameraNO:this[c].getDefaultDeviceNO();const t=e[this.cameraNO].deviceId;return this[c].codeReader.decodeFromVideoDevice(t,this.displayEleID,Object(a["b"])((async(e,t)=>{if(e&&n["a"].emit("scaned",e),t&&!(t instanceof i["NotFoundException"]))throw console.error(t),n["a"].emit("scanError",t),t}),1e3))}}async stopScan(){this[c].codeReader.reset()}}t["a"]=o}}]);