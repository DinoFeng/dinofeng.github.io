(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{c850:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",[t._v(t._s(t.info)),i("div",{staticClass:"camera_outer"},[i("video",{attrs:{id:"videoCamera",width:t.videoWidth,height:t.videoHeight,autoplay:""}}),i("canvas",{staticStyle:{display:"none"},attrs:{id:"canvasCamera",width:t.videoWidth,height:t.videoHeight}}),t.imgSrc?i("div",{staticClass:"img_bg_camera"},[i("p",[t._v("效果预览")]),i("img",{staticClass:"tx_img",attrs:{src:t.imgSrc,alt:""}})]):t._e(),i("input",{attrs:{type:"file",name:"cover",accept:"image/*",cature:"camera"}}),i("div",{staticClass:"button"},[i("q-btn",{on:{click:function(e){return t.getCompetence()}}},[t._v("打开摄像头")]),i("q-btn",{on:{click:function(e){return t.stopNavigator()}}},[t._v("关闭摄像头")]),i("q-btn",{on:{click:function(e){return t.setImage()}}},[t._v("拍照")]),i("q-btn",{on:{click:function(e){return t.getInfo()}}},[t._v("GetInfo")]),i("q-btn",{on:{click:function(e){return t.saveImage()}}},[t._v("Save")]),i("q-btn",{on:{click:function(e){return t.test()}}},[t._v("test")]),i("q-btn",{on:{click:function(e){return t.test2()}}},[t._v("test2")])],1)])])},n=[],o=(i("ddb0"),i("2b3d"),i("9861"),{name:"CameraTest",data(){return{videoWidth:1280,videoHeight:720,imgSrc:"",thisCancas:null,thisContext:null,thisVideo:null,openVideo:!1,info:""}},mounted(){},methods:{test(){this.info=navigator.userAgent},test2(){this.info=navigator.platform},async getInfo(){const t=await navigator.mediaDevices.enumerateDevices();this.info=t},getCompetence(){var t=this;t.thisCancas=document.getElementById("canvasCamera"),t.thisContext=this.thisCancas.getContext("2d"),t.thisVideo=document.getElementById("videoCamera"),t.thisVideo.style.display="block",void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(t){var e=navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.getUserMedia;return e?new Promise((function(i,a){e.call(navigator,t,i,a)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))});var e={audio:!1,video:{width:this.videoWidth,height:this.videoHeight,transform:"scaleX(-1)"}};navigator.mediaDevices.getUserMedia(e).then((function(e){"srcObject"in t.thisVideo?t.thisVideo.srcObject=e:t.thisVideo.src=window.URL.createObjectURL(e),t.thisVideo.onloadedmetadata=function(e){t.thisVideo.play()}})).catch((t=>{console.log(t)}))},async saveImage(){this.$axios.request({url:"http://localhost:3000/picture",method:"post",data:{photos:this.imgSrc}}).then((t=>t.data)).then((t=>this.info=t))},setImage(){var t=this;t.thisContext.drawImage(t.thisVideo,0,0);var e=this.thisCancas.toDataURL("image/jpeg");t.imgSrc=e},stopNavigator(){this.thisVideo.srcObject.getTracks()[0].stop()}}}),s=o,r=i("2877"),c=Object(r["a"])(s,a,n,!1,null,null,null);e["default"]=c.exports}}]);