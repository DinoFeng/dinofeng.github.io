(()=>{"use strict";var e={7127:(e,t,r)=>{r(8964),r(702);var n=r(1957),a=r(1947),s=r(499),o=r(9835);function i(e,t,r,n,a,s){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(i)}var c=r(8910);const l=(0,o.aZ)({name:"App",components:{RouterView:c.MA}});var d=r(1639);const u=(0,d.Z)(l,[["render",i]]),g=u;var m=r(2588),p=r(3340);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(900)]).then(r.bind(r,9900)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(525)]).then(r.bind(r,7525))}]},{path:"/:stage",component:()=>Promise.all([r.e(736),r.e(900)]).then(r.bind(r,9900)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(525)]).then(r.bind(r,7525))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(992)]).then(r.bind(r,6992))}],f=h,S=(0,p.BC)((function(){const e=c.PO,t=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/")});return t}));async function y(e,t){const n=e(g);n.use(a.Z,t);const o="function"===typeof m["default"]?await(0,m["default"])({}):m["default"],{storeKey:i}=await Promise.resolve().then(r.bind(r,2588)),c=(0,s.Xl)("function"===typeof S?await S({store:o}):S);return o.$router=c,{app:n,store:o,storeKey:i,router:c}}var _=r(4328);const v={config:{},plugins:{Notify:_.Z}},b="/";async function w({app:e,router:t,store:r,storeKey:n},a){let s=!1;const o=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(s=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t)},c=window.location.href.replace(window.location.origin,"");for(let d=0;!1===s&&d<a.length;d++)try{await a[d]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:c,publicPath:b})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==s&&(e.use(t),e.use(r,n),e.mount("#q-app"))}y(n.ri,v).then((e=>Promise.all([Promise.resolve().then(r.bind(r,6825)),Promise.resolve().then(r.bind(r,4136))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,r)}))))},4136:(e,t,r)=>{r.r(t),r.d(t,{api:()=>o,default:()=>i});var n=r(3340),a=r(9981),s=r.n(a);const o=s().create({baseURL:"https://api.example.com"}),i=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=s(),e.config.globalProperties.$api=o}))},6825:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,i18n:()=>d});var n=r(3340),a=r(9991),s=r(3703);const o={zh:"简",en:"Eng",main_tital:"Make YOUR OWN",NEXT:"NEXT",DONE:"DONE",Name:"Name",Email:"Email",scene_stage_title:"1. What's your favourite scene?",dye_stage_title:"2. What's your favourite dye?",process_stage_title:"Processing...",submit_stage_title:"Your Digital Souvenir",submit_stage_input_title:"3. Tell us more about you",summary_stage_title:"Almost done!\nLet's share to others!",summary_stage_info_title:"Souvenir meta data",summary_stage_info_create_by:"Create by: {createBy}",summary_stage_info_description:"Description: {detailInfo}",summary_stage_info_fabric:"Fabric info:{fabricCode}\n{fabricInfo}",architectural_concepts:"architectural concepts",share_text:"share_text",share_title:"share_title"},i={zh:"简",en:"Eng",main_tital:"打造属于自己的...",NEXT:"下一步",DONE:"完成",Name:"姓名",Email:"电子邮箱",scene_stage_title:"1. 选择您喜欢的场景",dye_stage_title:"2. 选择您喜欢的染料",process_stage_title:"处理中...",submit_stage_title:"您的数字纪念品",submit_stage_input_title:"3. 提供您更多的信息",summary_stage_title:"差不多完成了!\n让我们分享给别人吧!",summary_stage_info_title:"纪念品信息",summary_stage_info_create_by:"创建人: {createBy}",summary_stage_info_description:"描述: {detailInfo}",summary_stage_info_fabric:"布料信息:{fabricCode}\n{fabricInfo}",architectural_concepts:"建筑概念",share_text:"分享文本",share_title:"分享标题"},c={en:o,zh:i};var l=r(8513);const d=(0,a.o)({locale:s.Z.getItem(l.Y)||window.navigator.language.split("-")[0],messages:c}),u=(0,n.xr)((({app:e})=>{e.use(d)}))},8513:(e,t,r)=>{r.d(t,{Y:()=>n});const n="APP_LOCAL_LANG"},2588:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f,storeKey:()=>h,useStore:()=>S});var n=r(3340),a=r(3100);function s(){return{stages:["SceneStage","DyeStage","ProcessStage","SubmitStage","SummaryStage"],currentStage:"SceneStage",sceneImages:[{id:"S01",url:"/scene/S01_Accolades_new.jpeg",desc:{zh:"S01",en:"S01"}},{id:"S02",url:"/scene/S01_design concept.jpeg",desc:{zh:"为了将Esquel的可持续发展从概念变为现实，我们与世界级的合作伙伴合作，包括屡获殊荣的建筑公司Ronald Lu&partners，他在设计花园时考虑了八个关键概念。",en:"To bring Esquel's sustainable development from concept to life, we have worked with world-class partners, including award-winning architecture firm Ronald Lu & Partners, who has designed the garden with eight key concepts in mind."}},{id:"S03",url:"/scene/S02_ A NEW LEASE OF LIFE FOR EACH MATERIAL.jpeg",desc:{zh:"S03",en:"S03"}},{id:"S04",url:"/scene/S02_a welcome to remember.jpeg",desc:{zh:"S04",en:"S04"}},{id:"S05",url:"/scene/S02_CAPTURING THE COLORS OF NATURE.jpeg",desc:{zh:"S05",en:"S05"}},{id:"S06",url:"/scene/S02_inheritance in the landscape.jpeg",desc:{zh:"S06",en:"S06"}},{id:"S07",url:"/scene/S02_managing water with nature.jpeg",desc:{zh:"S07",en:"S07"}},{id:"S08",url:"/scene/S02_mindful energy consumption.jpeg",desc:{zh:"S08",en:"S08"}},{id:"S09",url:"/scene/S02_sailing from the past.jpeg",desc:{zh:"S09",en:"S09"}},{id:"S10",url:"/scene/garden-map.jpeg",desc:{zh:"S10",en:"S10"}},{id:"S11",url:"/scene/S02_the blue bricks.jpeg",desc:{zh:"S11",en:"S11"}},{id:"S12",url:"/scene/S02_where curious minds meet.jpeg",desc:{zh:"S12",en:"S12"}}],dyeImages:[{id:"D01",url:"/dye/MicrosoftTeams-image (4).png",name:{zh:"D01",en:"D01"},desc:{zh:"D01",en:"D01"}},{id:"D02",url:"/dye/MicrosoftTeams-image (5).png",name:{zh:"D02",en:"D02"},desc:{zh:"D02",en:"D02"}},{id:"D03",url:"/dye/MicrosoftTeams-image (3).png",name:{zh:"靛蓝",en:"Indigo"},desc:{zh:"靛蓝染料是从多种植物中提取的，最著名的是靛蓝",en:"Indigo dye is extracted from a variety of plants most notably indigofera"}},{id:"D04",url:"/dye/MicrosoftTeams-image (6).png",name:{zh:"D04",en:"D04"},desc:{zh:"D04",en:"D04"}},{id:"D05",url:"/dye/MicrosoftTeams-image (7).png",name:{zh:"D05",en:"D05"},desc:{zh:"D05",en:"D05"}}],dyeSelected:{id:"D03",url:"/dye/MicrosoftTeams-image (3).png",name:{zh:"靛蓝",en:"Indigo"},desc:{zh:"靛蓝染料是从多种植物中提取的，最著名的是靛蓝",en:"Indigo dye is extracted from a variety of plants most notably indigofera"}},sceneSelected:{id:"S02",url:"/scene/S01_design concept.jpeg",desc:{zh:"为了将Esquel的可持续发展从概念变为现实，我们与世界级的合作伙伴合作，包括屡获殊荣的建筑公司Ronald Lu&partners，他在设计花园时考虑了八个关键概念。",en:"To bring Esquel's sustainable development from concept to life, we have worked with world-class partners, including award-winning architecture firm Ronald Lu & Partners, who has designed the garden with eight key concepts in mind."}},processResult:null,fabricInfo:{fabricCode:"13PDDC00111-10218",description:"100.% CONTTON, Piece Dye, MERCERIZING FINISHING, Dobby",url:"https://images.prd-k8s.esquel.cn/8A032CFB-1F45-49F2-BD3D-92E9FC5D74F5?S=1&W=256&H=0&D=96"},souvenirImage:{id:"pOZoBiFwH6mSjGCTfn8w",createBy:"xxxxxxx",description:"Digital Souvenir\n#Integral-conversation#esquel\nwww.integral-conversation.com"}}}const o=s,i={someAction(){}},c=i,l={getCurrentStage(e){return e.currentStage},getCurrentStageIndex(e){return e.stages.findIndex((t=>t===e.currentStage))},getTotalStages(e){return e.stages.length},getStages(e){return e.stages},getSceneImages(e){return e.sceneImages},getDyeImages(e){return e.dyeImages},getCurrentStageIsFinished(e){return e.stages.findIndex((t=>t===e.currentStage))===e.stages.length-1},getSelectedDye(e){return e.dyeSelected},getSelectScene(e){return e.sceneSelected},getSouvenirImage(e){return e.souvenirImage},getFabricInfo(e){return e.fabricInfo}},d=l,u={setNextStage(e){const t=e.stages.findIndex((t=>t===e.currentStage)),r=t+1<e.stages.length?t+1:0;e.currentStage=e.stages[r]},setStage(e,t){const r=e.stages.findIndex((e=>e===t));r>=0&&(e.currentStage=e.stages[r])},setDyeSelected(e,t){e.dyeSelected=t},setSceneSelected(e,t){e.sceneSelected=t}},g=u,m={namespaced:!0,actions:c,getters:d,mutations:g,state:o},p=m,h=Symbol("vuex-key"),f=(0,n.h)((function(){const e=(0,a.MT)({modules:{stage:p},strict:!1});return e}));function S(){return(0,a.oR)(h)}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,s)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){for(var[n,a,s]=e[d],i=!0,c=0;c<n.length;c++)(!1&s||o>=s)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,s<o&&(o=s));if(i){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,a,s]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{525:"4ae9d828",900:"f9302544",992:"c3e61817"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"af791c93",525:"9acf4b20",736:"cbaf894b",900:"e4fe11a8"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasardemo2:";r.l=(n,a,s,o)=>{if(e[n])e[n].push(a);else{var i,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){i=u;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[a];var g=(t,r)=>{i.onerror=i.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},m=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=s=>{if(a.onerror=a.onload=null,"load"===s.type)r();else{var o=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=i,a.parentNode.removeChild(a),n(c)}};return a.onerror=a.onload=s,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){a=o[n],s=a.getAttribute("data-href");if(s===e||s===t)return a}},n=n=>new Promise(((a,s)=>{var o=r.miniCssF(n),i=r.p+o;if(t(o,i))return a();e(n,i,a,s)})),a={143:0};r.f.miniCss=(e,t)=>{var r={525:1,900:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var s=new Promise(((r,n)=>a=e[t]=[r,n]));n.push(a[2]=s);var o=r.p+r.u(t),i=new Error,c=n=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,a[1](i)}};r.l(o,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var a,s,[o,i,c]=n,l=0;if(o.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var d=c(r)}for(t&&t(n);l<o.length;l++)s=o[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},n=self["webpackChunkquasardemo2"]=self["webpackChunkquasardemo2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(7127)));n=r.O(n)})();