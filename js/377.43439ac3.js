"use strict";(globalThis["webpackChunkquasardemo2"]=globalThis["webpackChunkquasardemo2"]||[]).push([[377],{2377:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ue});var l=a(9835);const s=e=>((0,l.dD)("data-v-f4a37a1e"),e=e(),(0,l.Cn)(),e),o={class:"footer"},c={class:"column q-ma-md text-white text-caption"},r=(0,l.Uk)("About"),n=(0,l.Uk)("Demo"),i=(0,l.Uk)("Cookie & Privacy Policy"),u=s((()=>(0,l._)("img",{src:"/十如.png",style:{"max-height":"100px","max-width":"100px"}},null,-1)));function d(e,t,a,s,d,m){const g=(0,l.up)("router-link"),p=(0,l.up)("q-toolbar-title"),v=(0,l.up)("q-toolbar"),w=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(w,{class:"items-center"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)((0,l.LL)(e.stage))),(0,l._)("div",o,[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l._)("div",c,[(0,l.Wm)(g,{to:"/page"},{default:(0,l.w5)((()=>[r])),_:1}),(0,l.Wm)(g,{to:"/page"},{default:(0,l.w5)((()=>[n])),_:1}),(0,l.Wm)(g,{to:"/page"},{default:(0,l.w5)((()=>[i])),_:1})])])),_:1}),u])),_:1})])])),_:1})}var m=a(8910),g=a(7843),p=a(6970);const v={class:"text-h6",style:{"white-space":"pre-wrap"}},w={class:"row justify-center"},f={key:0,class:"absolute-full"},_={class:"absolute-top-right"},y={class:"absolute-bottom"},h={class:"text-subtitle1 text-weight-medium"},S={class:"text-body2 text-weight-thin"};function b(e,t,a,s,o,c){const r=(0,l.up)("q-card-section"),n=(0,l.up)("q-btn"),i=(0,l.up)("q-img"),u=(0,l.up)("q-intersection"),d=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",v,(0,p.zw)(e.$t("dye_stage_title")),1)])),_:1}),(0,l.Wm)(r,{class:"q-pa-none"},{default:(0,l.w5)((()=>[(0,l._)("div",w,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.images,(t=>((0,l.wg)(),(0,l.j4)(u,{class:"card",key:t.id},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{onClick:a=>e.selectedDye(t),src:t.url,ratio:e.isSelected(t)?0:4},{default:(0,l.w5)((()=>[e.isSelected(t)?((0,l.wg)(),(0,l.iD)("div",f,[(0,l._)("div",_,[(0,l.Wm)(n,{class:"q-ma-md",rounded:"",label:"selected",color:"secondary",icon:"fa-solid fa-check"})]),(0,l._)("div",y,[(0,l._)("div",h,(0,p.zw)(t.name[e.currentLang]),1),(0,l._)("div",S,(0,p.zw)(t.desc[e.currentLang]),1)])])):(0,l.kq)("",!0)])),_:2},1032,["onClick","src","ratio"])])),_:2},1024)))),128))])])),_:1})])),_:1})}const I=(0,l.aZ)({name:"DyeStage",setup(){const e=(0,g.useStore)();return{images:(0,l.Fl)((()=>e.getters["stage/getDyeImages"])),selectedDye(t){e.commit("stage/setDyeSelected",t)},isSelected(t){const a=e.getters["stage/getSelectedDye"];return!!a&&t.id===a.id}}},computed:{currentLang(){return this.$i18n.locale}}});var W=a(1639),Z=a(4458),q=a(3190),C=a(8988),k=a(1517),Q=a(335),x=a(5157),D=a(9984),L=a.n(D);const F=(0,W.Z)(I,[["render",b],["__scopeId","data-v-47621afd"]]),j=F;L()(I,"components",{QCard:Z.Z,QCardSection:q.Z,QDialog:C.Z,QIntersection:k.Z,QImg:Q.Z,QBtn:x.Z});const $={class:"text-h6",style:{"white-space":"pre-wrap"}},H={class:"row justify-center"},z={key:0,class:"absolute-full flex flex-center"};function P(e,t,a,s,o,c){const r=(0,l.up)("q-card-section"),n=(0,l.up)("dialog-for-image-selector"),i=(0,l.up)("q-icon"),u=(0,l.up)("q-img"),d=(0,l.up)("q-intersection"),m=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"header"},{default:(0,l.w5)((()=>[(0,l._)("div",$,(0,p.zw)(e.$t("scene_stage_title")),1)])),_:1}),(0,l.Wm)(r,{class:"q-pa-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:e.showSelector,"onUpdate:modelValue":t[0]||(t[0]=t=>e.showSelector=t),selectedImage:e.selectedImage,"onUpdate:selectedImage":t[1]||(t[1]=t=>e.selectedImage=t),persistent:"",imageList:e.images,currentImage:e.clickedImage},null,8,["modelValue","selectedImage","imageList","currentImage"]),(0,l._)("div",H,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.images,(t=>((0,l.wg)(),(0,l.j4)(d,{class:"card",key:t.id},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{fit:"cover",src:t.url,ratio:1,onClick:a=>e.imageClick(t)},{default:(0,l.w5)((()=>[e.imageIsSelected(t)?((0,l.wg)(),(0,l.iD)("div",z,[(0,l.Wm)(i,{name:"fa-solid fa-circle-check",size:"md"})])):(0,l.kq)("",!0)])),_:2},1032,["src","onClick"])])),_:2},1024)))),128))])])),_:1})])),_:1})}var U=a(499);const B={class:"text-subtitle1 text-white text-uppercase"},V={class:"text-caption text-white"};function T(e,t,a,s,o,c){const r=(0,l.up)("q-btn"),n=(0,l.up)("q-space"),i=(0,l.up)("q-card-actions"),u=(0,l.up)("q-img"),d=(0,l.up)("q-card-section"),m=(0,l.up)("q-card"),g=(0,l.up)("q-dialog"),v=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(g,{id:"imgSelector",ref:"dialog",value:e.isShow,onHide:[t[2]||(t[2]=t=>e.$emit("change",!1)),e.hide],seamless:e.seamless,persistent:e.persistent,position:e.position,onShow:e.show},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"my-card",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(r,{round:"",color:"grey-7",icon:"fa-solid fa-xmark"},null,512),[[v]]),(0,l.Wm)(n),e.currentIsSelected?((0,l.wg)(),(0,l.j4)(r,{key:0,rounded:"",color:"secondary",icon:"check",label:"selected",onClick:t[0]||(t[0]=t=>e.imageSelected(void 0))})):((0,l.wg)(),(0,l.j4)(r,{key:1,rounded:"",color:"white","text-color":"secondary",label:"select",onClick:t[1]||(t[1]=t=>e.imageSelected(e.current))}))])),_:1}),(0,l.Wm)(u,{fit:"cover",src:e.currentImageUrl,ratio:1},null,8,["src"]),(0,l.Wm)(i,{align:"right"},{default:(0,l.w5)((()=>[(0,l._)("div",B,(0,p.zw)(e.$t("architectural_concepts")),1),(0,l.Wm)(n),(0,l.Wm)(r,{round:"",color:"grey-7",icon:"fa-solid fa-angle-left",onClick:e.movePrevious},null,8,["onClick"]),(0,l.Wm)(r,{round:"",color:"grey-7",icon:"fa-solid fa-angle-right",onClick:e.moveNext},null,8,["onClick"])])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l._)("div",V,(0,p.zw)(e.currentDesc),1)])),_:1})])),_:1})])),_:1},8,["value","seamless","persistent","position","onHide","onShow"])}var A=a(4409),N=a(6825);const O=(0,l.aZ)({name:"DialogForImageSelector",props:{imageList:{required:!0,type:Array},currentImage:Object,selectedImage:Object,isShow:Boolean,seamless:Boolean,persistent:Boolean,position:String},emits:["change","update:selectedImage"],setup(e,{emit:t}){const{imageList:a,currentImage:s,selectedImage:o}=(0,U.BK)(e),c=(0,U.iH)(void 0),r=(0,U.iH)(void 0),n=()=>{},i=()=>{c.value=s.value?s.value:a.value?a.value[0]:void 0,r.value=o.value?o.value:r.value},u=e=>{var t;const l=null===(t=a.value)||void 0===t?void 0:t.findIndex((e=>{var t;return e.id===(null===(t=c.value)||void 0===t?void 0:t.id)})),s=(l+a.value.length+e)%a.value.length;c.value=a.value[s]},d=()=>{u(1)},m=()=>{u(-1)},g=e=>{r.value=e,t("update:selectedImage",r.value)},p=(0,l.Fl)((()=>N.i18n.global.locale)),v=(0,l.Fl)((()=>A.get(c,["value","desc",p.value])));return{current:c,currentImageUrl:(0,l.Fl)((()=>c.value?c.value.url:"")),currentDesc:v,currentLang:p,currentIsSelected:(0,l.Fl)((()=>{var e,t;return(null===(e=c.value)||void 0===e?void 0:e.id)===(null===(t=r.value)||void 0===t?void 0:t.id)})),hide:n,show:i,moveNext:d,movePrevious:m,imageSelected:g}}});var K=a(1821),R=a(136),Y=a(2146);const E=(0,W.Z)(O,[["render",T],["__scopeId","data-v-025c6826"]]),G=E;L()(O,"components",{QDialog:C.Z,QCard:Z.Z,QCardActions:K.Z,QBtn:x.Z,QSpace:R.Z,QImg:Q.Z,QCardSection:q.Z}),L()(O,"directives",{ClosePopup:Y.Z});const M=(0,l.aZ)({name:"SceneStage",components:{DialogForImageSelector:G},setup(){const e=(0,g.useStore)(),t=(0,U.iH)(!1),a=(0,U.iH)(void 0),s=(0,l.Fl)({get:()=>e.getters["stage/getSelectScene"],set:t=>{e.commit("stage/setSceneSelected",t)}});return{showSelector:t,clickedImage:a,selectedImage:s,images:(0,l.Fl)((()=>e.getters["stage/getSceneImages"])),imageClick(e){t.value=!0,a.value=e},imageIsSelected(e){var t;return e.id===(null===(t=s.value)||void 0===t?void 0:t.id)}}},methods:{isReady(){return!0}}});var J=a(2857);const X=(0,W.Z)(M,[["render",P],["__scopeId","data-v-3e03365a"]]),ee=X;L()(M,"components",{QCard:Z.Z,QCardSection:q.Z,QIntersection:k.Z,QImg:Q.Z,QIcon:J.Z});const te={class:"row justify-center"},ae={class:"col-6 q-pa-md"},le={class:"col-6 q-pa-md"},se={class:"row justify-center"},oe={class:"col q-pa-md"},ce={class:"centered"};function re(e,t,a,s,o,c){const r=(0,l.up)("q-img"),n=(0,l.up)("q-card-section"),i=(0,l.up)("q-card"),u=(0,l.Q2)("morph");return(0,l.wg)(),(0,l.j4)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,null,{default:(0,l.w5)((()=>[(0,l._)("div",te,[(0,l._)("div",ae,[(0,l.wy)((0,l.Wm)(r,{class:"absolute sceneSource",fit:"cover",src:e.selectedScene.url,ratio:1,onLoad:e.onSceneLoad},null,8,["src","onLoad"]),[[u,e.morphScene,"soruceScene:Scene"]]),(0,l.Wm)(r,{class:(0,p.C_)(e.sourceClass),fit:"cover",src:e.selectedScene.url,ratio:1,onLoad:e.onSceneLoad},null,8,["class","src","onLoad"])]),(0,l._)("div",le,[(0,l.wy)((0,l.Wm)(r,{class:"absolute dyeSource",fit:"cover",src:e.selectedDye.url,ratio:1,onLoad:e.onDyeLoad},null,8,["src","onLoad"]),[[u,e.morphDye,"soruceDye:Dye"]]),(0,l.Wm)(r,{class:(0,p.C_)(e.sourceClass),fit:"cover",src:e.selectedDye.url,ratio:1,onLoad:e.onDyeLoad},null,8,["class","src","onLoad"])])])])),_:1}),(0,l.Wm)(n,null,{default:(0,l.w5)((()=>[(0,l._)("div",se,[(0,l._)("div",oe,[(0,l._)("div",ce,[(0,l.wy)((0,l.Wm)(r,{class:(0,p.C_)(["absolute scene blurOut",e.isHide]),fit:"cover",src:e.selectedScene.url,ratio:1},null,8,["src","class"]),[[u,e.morphScene,"target:Scene:2000"]]),(0,l.wy)((0,l.Wm)(r,{class:(0,p.C_)(["absolute dye blurOut",e.isHide]),fit:"cover",src:e.selectedDye.url,ratio:1},null,8,["src","class"]),[[u,e.morphDye,"target:Dye:2000"]])]),(0,l.Wm)(r,{fit:"cover",src:e.output&&e.output.url,ratio:1,class:(0,p.C_)(e.showTarget),onLoad:e.onLoad},null,8,["src","class","onLoad"])])])])),_:1})])),_:1})}const ne=(0,l.aZ)({name:"ProcessStage",setup(){const e=(0,g.useStore)(),t=(0,U.iH)(!1),a=(0,U.iH)("soruceScene"),s=(0,U.iH)("soruceDye"),o=(0,l.Fl)((()=>({unvisibility:!t.value,blurShow:t.value}))),c=(0,l.Fl)((()=>e.getters["stage/getProcessResult"])),r=(0,l.Fl)((()=>({hide:t.value}))),n=(0,l.Fl)((()=>({target:t.value}))),i=(0,l.Fl)((()=>e.getters["stage/getSelectedDye"])),u=(0,l.Fl)((()=>e.getters["stage/getSelectScene"])),d=()=>{a.value="target"},m=()=>{s.value="target"},p=e=>{console.debug(`${e} is loaded`),t.value=!0};return(0,l.bv)((()=>{console.log("Component is mounted!"),e.dispatch("stage/requestGenerate",{sceneImageId:u.value.id,dyeImageId:i.value.id})})),{output:c,isHide:r,showTarget:n,morphScene:a,morphDye:s,sourceClass:o,onLoad:p,onSceneLoad:d,onDyeLoad:m,selectedDye:i,selectedScene:u}}});var ie=a(2432);const ue=(0,W.Z)(ne,[["render",re]]),de=ue;L()(ne,"components",{QCard:Z.Z,QCardSection:q.Z,QImg:Q.Z}),L()(ne,"directives",{Morph:ie.Z});const me={class:"text-h6",style:{"white-space":"pre-wrap"}},ge={class:"row justify-center"},pe={class:"col"},ve={class:"text-h6",style:{"white-space":"pre-wrap"}},we={class:"text-subtitle2"},fe={class:"text-body",style:{"white-space":"pre-wrap"}},_e={class:"text-body",style:{"white-space":"pre-wrap"}},ye={class:"text-body",style:{"white-space":"pre-wrap"}};function he(e,t,a,s,o,c){const r=(0,l.up)("q-card-section"),n=(0,l.up)("q-img"),i=(0,l.up)("q-btn"),u=(0,l.up)("q-card-actions"),d=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",me,(0,p.zw)(e.$t("summary_stage_title")),1)])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",ge,[(0,l._)("div",pe,[(0,l.Wm)(n,{fit:"cover",src:"/dye/output.png",ratio:1}),(0,l.Wm)(n,{class:"fabric absolute",src:e.fabricInfo.url,ratio:1},null,8,["src"])])])])),_:1}),(0,l.Wm)(u,{align:"right"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{flat:"",round:"",icon:"fa-solid fa-images"}),e.canShare?((0,l.wg)(),(0,l.j4)(i,{key:0,flat:"",round:"",icon:"fa-solid fa-share-nodes",onClick:e.share},null,8,["onClick"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",ve,(0,p.zw)(e.$t("summary_stage_info_title")),1),(0,l._)("div",we,(0,p.zw)(e.souvenirImage.id),1)])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",fe,(0,p.zw)(e.$t("summary_stage_info_create_by",{createBy:e.souvenirImage.createBy})),1)])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",_e,(0,p.zw)(e.$t("summary_stage_info_description",{detailInfo:e.souvenirImage.description})),1)])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",ye,(0,p.zw)(e.$t("summary_stage_info_fabric",{fabricCode:e.fabricInfo.fabricCode,fabricInfo:e.fabricInfo.description})),1)])),_:1})])),_:1})}const Se=(0,l.aZ)({name:"SummaryStage",setup(){const e=(0,g.useStore)(),t=N.i18n.global.t,a=(0,l.Fl)((()=>e.getters["stage/getFabricInfo"])),s=(0,l.Fl)((()=>e.getters["stage/getSouvenirImage"])),o="https://shiru.esquel.cn",c=(0,l.Fl)((()=>!A.isNil(navigator.share)&&A.isFunction(navigator.share)));return{fabricInfo:a,souvenirImage:s,fabricInfoUrl:(0,l.Fl)((()=>`img:${a.value.url}`)),canShare:c,share(){const e={url:`${o}/${s.value.id}`,text:t("share_text"),title:t("share_title")};c.value&&navigator.share(e).catch((e=>alert(e.message)))}}}}),be=(0,W.Z)(Se,[["render",he],["__scopeId","data-v-12b5df6c"]]),Ie=be;L()(Se,"components",{QCard:Z.Z,QCardSection:q.Z,QImg:Q.Z,QCardActions:K.Z,QBtn:x.Z});const We={class:"text-h6",style:{"white-space":"pre-wrap"}},Ze={class:"row justify-center"},qe={class:"col"},Ce={class:"text-h6"};function ke(e,t,a,s,o,c){const r=(0,l.up)("q-card-section"),n=(0,l.up)("q-img"),i=(0,l.up)("q-input"),u=(0,l.up)("q-form"),d=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",We,(0,p.zw)(e.$t("submit_stage_title")),1)])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",Ze,[(0,l._)("div",qe,[(0,l.Wm)(n,{fit:"cover",src:"/dye/output.png",ratio:1})])])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",Ce,(0,p.zw)(e.$t("submit_stage_input_title")),1)])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t),label:e.$t("Name")},null,8,["modelValue","label"]),(0,l.Wm)(i,{modelValue:e.email,"onUpdate:modelValue":t[1]||(t[1]=t=>e.email=t),label:e.$t("Email")},null,8,["modelValue","label"])])),_:1})])),_:1})])),_:1})}const Qe=(0,l.aZ)({name:"SubmitStage",setup(){const e=(0,U.iH)(""),t=(0,U.iH)("");return{name:e,email:t}}});var xe=a(8326),De=a(7496);const Le=(0,W.Z)(Qe,[["render",ke]]),Fe=Le;L()(Qe,"components",{QCard:Z.Z,QCardSection:q.Z,QImg:Q.Z,QForm:xe.Z,QInput:De.Z});const je=(0,l.aZ)({name:"IndexPage",components:{RouterLink:m.rH,DyeStage:j,SceneStage:ee,ProcessStage:de,SummaryStage:Ie,SubmitStage:Fe},setup(){const e=(0,g.useStore)(),t=(0,m.yj)(),{params:a}=t,{stage:s}=a;return console.debug({params:a}),s&&e.commit("stage/setStage",s),{stage:(0,l.Fl)((()=>e.getters["stage/getCurrentStage"]))}}});var $e=a(9885),He=a(1663),ze=a(1973);const Pe=(0,W.Z)(je,[["render",d],["__scopeId","data-v-f4a37a1e"]]),Ue=Pe;L()(je,"components",{QPage:$e.Z,QToolbar:He.Z,QToolbarTitle:ze.Z})}}]);