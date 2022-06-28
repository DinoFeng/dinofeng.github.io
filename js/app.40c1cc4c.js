(()=>{"use strict";var e={7127:(e,t,n)=>{n(8964),n(702);var r=n(1957),a=n(1947),o=n(499),s=n(9835);function i(e,t,n,r,a,o){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}var c=n(8910);const u=(0,s.aZ)({name:"App",components:{RouterView:c.MA}});var l=n(1639);const d=(0,l.Z)(u,[["render",i]]),g=d;var m=n(7843),h=n(3340);const p=[{path:"/",component:()=>Promise.all([n.e(736),n.e(900)]).then(n.bind(n,9900)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(183)]).then(n.bind(n,2183))}]},{path:"/:stage",component:()=>Promise.all([n.e(736),n.e(900)]).then(n.bind(n,9900)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(183)]).then(n.bind(n,2183))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(736),n.e(992)]).then(n.bind(n,6992))}],f=p,y=(0,h.BC)((function(){const e=c.PO,t=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/")});return t}));async function S(e,t){const r=e(g);r.use(a.Z,t);const s="function"===typeof m["default"]?await(0,m["default"])({}):m["default"],{storeKey:i}=await Promise.resolve().then(n.bind(n,7843)),c=(0,o.Xl)("function"===typeof y?await y({store:s}):y);return s.$router=c,{app:r,store:s,storeKey:i,router:c}}var v=n(4328);const b={config:{},plugins:{Notify:v.Z}},_="/";async function w({app:e,router:t,store:n,storeKey:r},a){let o=!1;const s=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t)},c=window.location.href.replace(window.location.origin,"");for(let l=0;!1===o&&l<a.length;l++)try{await a[l]({app:e,router:t,store:n,ssrContext:null,redirect:i,urlPath:c,publicPath:_})}catch(u){return u&&u.url?void i(u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&(e.use(t),e.use(n,r),e.mount("#q-app"))}S(r.ri,b).then((e=>Promise.all([Promise.resolve().then(n.bind(n,6825)),Promise.resolve().then(n.bind(n,4136))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,n)}))))},4136:(e,t,n)=>{n.r(t),n.d(t,{api:()=>s,default:()=>i});var r=n(3340),a=n(9981),o=n.n(a);const s=o().create({baseURL:"https://api.example.com"}),i=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=o(),e.config.globalProperties.$api=s}))},6825:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d,i18n:()=>l});var r=n(3340),a=n(9991),o=n(3703);const s={zh:"简",en:"Eng",main_tital:"Make YOUR OWN",NEXT:"NEXT",DONE:"DONE",Name:"Name",Email:"Email",scene_stage_title:"1. What's your favourite scene?",dye_stage_title:"2. What's your favourite dye?",process_stage_title:"Processing...",submit_stage_title:"Your Digital Souvenir",submit_stage_input_title:"3. Tell us more about you",summary_stage_title:"Almost done!\nLet's share to others!",summary_stage_info_title:"Souvenir meta data",summary_stage_info_create_by:"Create by: {createBy}",summary_stage_info_description:"Description: {detailInfo}",summary_stage_info_fabric:"Fabric info:{fabricCode}\n{fabricInfo}",architectural_concepts:"architectural concepts",share_text:"share_text",share_title:"share_title"},i={zh:"简",en:"Eng",main_tital:"打造属于自己的...",NEXT:"下一步",DONE:"完成",Name:"姓名",Email:"电子邮箱",scene_stage_title:"1. 选择您喜欢的场景",dye_stage_title:"2. 选择您喜欢的染料",process_stage_title:"处理中...",submit_stage_title:"您的数字纪念品",submit_stage_input_title:"3. 提供您更多的信息",summary_stage_title:"差不多完成了!\n让我们分享给别人吧!",summary_stage_info_title:"纪念品信息",summary_stage_info_create_by:"创建人: {createBy}",summary_stage_info_description:"描述: {detailInfo}",summary_stage_info_fabric:"布料信息:{fabricCode}\n{fabricInfo}",architectural_concepts:"建筑概念",share_text:"分享文本",share_title:"分享标题"},c={en:s,zh:i};var u=n(8513);const l=(0,a.o)({locale:o.Z.getItem(u.Y)||window.navigator.language.split("-")[0],messages:c}),d=(0,r.xr)((({app:e})=>{e.use(l)}))},8513:(e,t,n)=>{n.d(t,{Y:()=>r});const r="APP_LOCAL_LANG"},7843:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L,storeKey:()=>F,useStore:()=>M});var r=n(3340),a=n(3100);function o(){return{stages:["SceneStage","DyeStage","ProcessStage","SubmitStage","SummaryStage"],currentStage:"SceneStage",sceneImages:[{id:"S01",url:"/scene/S01_Accolades_new.jpeg",desc:{zh:"S01",en:"S01"}},{id:"S02",url:"/scene/S01_design concept.jpeg",desc:{zh:"为了将Esquel的可持续发展从概念变为现实，我们与世界级的合作伙伴合作，包括屡获殊荣的建筑公司Ronald Lu&partners，他在设计花园时考虑了八个关键概念。",en:"To bring Esquel's sustainable development from concept to life, we have worked with world-class partners, including award-winning architecture firm Ronald Lu & Partners, who has designed the garden with eight key concepts in mind."}},{id:"S03",url:"/scene/S02_ A NEW LEASE OF LIFE FOR EACH MATERIAL.jpeg",desc:{zh:"S03",en:"S03"}},{id:"S04",url:"/scene/S02_a welcome to remember.jpeg",desc:{zh:"S04",en:"S04"}},{id:"S05",url:"/scene/S02_CAPTURING THE COLORS OF NATURE.jpeg",desc:{zh:"S05",en:"S05"}},{id:"S06",url:"/scene/S02_inheritance in the landscape.jpeg",desc:{zh:"S06",en:"S06"}},{id:"S07",url:"/scene/S02_managing water with nature.jpeg",desc:{zh:"S07",en:"S07"}},{id:"S08",url:"/scene/S02_mindful energy consumption.jpeg",desc:{zh:"S08",en:"S08"}},{id:"S09",url:"/scene/S02_sailing from the past.jpeg",desc:{zh:"S09",en:"S09"}},{id:"S10",url:"/scene/garden-map.jpeg",desc:{zh:"S10",en:"S10"}},{id:"S11",url:"/scene/S02_the blue bricks.jpeg",desc:{zh:"S11",en:"S11"}},{id:"S12",url:"/scene/S02_where curious minds meet.jpeg",desc:{zh:"S12",en:"S12"}}],dyeImages:[{id:"D01",url:"/dye/MicrosoftTeams-image (4).png",name:{zh:"D01",en:"D01"},desc:{zh:"D01",en:"D01"}},{id:"D02",url:"/dye/MicrosoftTeams-image (5).png",name:{zh:"D02",en:"D02"},desc:{zh:"D02",en:"D02"}},{id:"D03",url:"/dye/MicrosoftTeams-image (3).png",name:{zh:"靛蓝",en:"Indigo"},desc:{zh:"靛蓝染料是从多种植物中提取的，最著名的是靛蓝",en:"Indigo dye is extracted from a variety of plants most notably indigofera"}},{id:"D04",url:"/dye/MicrosoftTeams-image (6).png",name:{zh:"D04",en:"D04"},desc:{zh:"D04",en:"D04"}},{id:"D05",url:"/dye/MicrosoftTeams-image (7).png",name:{zh:"D05",en:"D05"},desc:{zh:"D05",en:"D05"}}],dyeSelected:{id:"D03",url:"/dye/MicrosoftTeams-image (3).png",name:{zh:"靛蓝",en:"Indigo"},desc:{zh:"靛蓝染料是从多种植物中提取的，最著名的是靛蓝",en:"Indigo dye is extracted from a variety of plants most notably indigofera"}},sceneSelected:{id:"S02",url:"/scene/S01_design concept.jpeg",desc:{zh:"为了将Esquel的可持续发展从概念变为现实，我们与世界级的合作伙伴合作，包括屡获殊荣的建筑公司Ronald Lu&partners，他在设计花园时考虑了八个关键概念。",en:"To bring Esquel's sustainable development from concept to life, we have worked with world-class partners, including award-winning architecture firm Ronald Lu & Partners, who has designed the garden with eight key concepts in mind."}},processResult:null,fabricInfo:{fabricCode:"13PDDC00111-10218",description:"100.% CONTTON, Piece Dye, MERCERIZING FINISHING, Dobby",url:"https://images.prd-k8s.esquel.cn/8A032CFB-1F45-49F2-BD3D-92E9FC5D74F5?S=1&W=256&H=0&D=96"},souvenirImage:{id:"pOZoBiFwH6mSjGCTfn8w",createBy:"xxxxxxx",description:"Digital Souvenir\n#Integral-conversation#esquel\nwww.integral-conversation.com"}}}const s=o;var i=n(4409),c=n.n(i),u=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function i(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):a(e.value).then(s,i)}c((r=r.apply(e,t||[])).next())}))};const l=5e3,d={genArrayAsync(e,t){return u(this,void 0,void 0,(function*(){const n=c().isFunction(t)?t:()=>null;return Promise.all("a".repeat(e).split("").map(((e,t)=>n(t))))}))},genArray(e,t){const n=c().isFunction(t)?t:()=>null;return"a".repeat(e).split("").map(((e,t)=>n(t)))},waitAmoment(e){return u(this,void 0,void 0,(function*(){return new Promise((t=>{setTimeout((()=>{t()}),e||l)}))}))}},g=d;var m=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function i(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):a(e.value).then(s,i)}c((r=r.apply(e,t||[])).next())}))};const h={generateImage(e,t){return m(this,void 0,void 0,(function*(){return console.debug({sceneImageId:e,dyeImageId:t}),yield g.waitAmoment(),{id:"E02",url:"/dye/output.png",desc:{zh:"生成返回图片",en:"Return gen image"}}}))}},p=h;var f=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function i(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):a(e.value).then(s,i)}c((r=r.apply(e,t||[])).next())}))};const y={getSceneImageList({dispatch:e}){return f(this,void 0,void 0,(function*(){}))},getDyeImageList({dispatch:e}){return f(this,void 0,void 0,(function*(){}))},requestGenerate({dispatch:e,commit:t},{sceneImageId:n,dyeImageId:r}){return f(this,void 0,void 0,(function*(){try{console.debug({sceneImageId:n,dyeImageId:r});const e=yield p.generateImage(n,r);return t("storeGenerateResult",e),e}catch(a){throw e("errorHandle/doPushError",a,{root:!0}),a}}))}},S=y,v={getCurrentStage(e){return e.currentStage},getCurrentStageIndex(e){return e.stages.findIndex((t=>t===e.currentStage))},getTotalStages(e){return e.stages.length},getStages(e){return e.stages},getSceneImages(e){return e.sceneImages},getDyeImages(e){return e.dyeImages},getCurrentStageIsFinished(e){return e.stages.findIndex((t=>t===e.currentStage))===e.stages.length-1},getSelectedDye(e){return e.dyeSelected},getSelectScene(e){return e.sceneSelected},getSouvenirImage(e){return e.souvenirImage},getFabricInfo(e){return e.fabricInfo},getProcessResult(e){return e.processResult}},b=v,_={setNextStage(e){const t=e.stages.findIndex((t=>t===e.currentStage)),n=t+1<e.stages.length?t+1:0;e.currentStage=e.stages[n]},setStage(e,t){const n=e.stages.findIndex((e=>e===t));n>=0&&(e.currentStage=e.stages[n])},setDyeSelected(e,t){e.dyeSelected=t},setSceneSelected(e,t){e.sceneSelected=t},storeGenerateResult(e,t){e.processResult=t}},w=_,I={namespaced:!0,actions:S,getters:b,mutations:w,state:s},D=I;function E(){return{errors:[]}}const P=E,x={},O=x,T={doPushError:{handler({commit:e},t){e("pushError",t)}}},C=T,j={err(e){return c().get(e,["errors",0])}},A=j,z={shiftError(e){e.errors.shift()},pushError(e,t){e.errors.push(t)}},N=z,k={namespaced:!0,actions:Object.assign(Object.assign({},O),C),getters:A,mutations:N,state:P},R=k,F=Symbol("vuex-key"),L=(0,r.h)((function(){const e=(0,a.MT)({modules:{stage:D,errorHandle:R},strict:!1});return e}));function M(){return(0,a.oR)(F)}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var s=1/0;for(l=0;l<e.length;l++){for(var[r,a,o]=e[l],i=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{183:"69d072e1",900:"fe5a7d60",992:"b3230c53"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"af791c93",183:"9ea9a3bd",736:"7aed3b48",900:"e4fe11a8"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasardemo2:";n.l=(r,a,o,s)=>{if(e[r])e[r].push(a);else{var i,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[a];var g=(t,n)=>{i.onerror=i.onload=null,clearTimeout(m);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},m=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{n.p="/"})(),(()=>{var e=(e,t,n,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=o=>{if(a.onerror=a.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){a=s[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=r=>new Promise(((a,o)=>{var s=n.miniCssF(r),i=n.p+s;if(t(s,i))return a();e(r,i,a,o)})),a={143:0};n.f.miniCss=(e,t)=>{var n={183:1,900:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var s=n.p+n.u(t),i=new Error,c=r=>{if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[s,i,c]=r,u=0;if(s.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var l=c(n)}for(t&&t(r);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=globalThis["webpackChunkquasardemo2"]=globalThis["webpackChunkquasardemo2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[736],(()=>n(7127)));r=n.O(r)})();