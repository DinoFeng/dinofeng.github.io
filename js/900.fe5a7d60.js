"use strict";(globalThis["webpackChunkquasardemo2"]=globalThis["webpackChunkquasardemo2"]||[]).push([[900],{9900:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a(9835),l=a(6970);const s={class:"q-ma-md"};function r(e,t,a,r,o,g){const u=(0,n.up)("q-toolbar-title"),i=(0,n.up)("q-btn"),c=(0,n.up)("q-toolbar"),d=(0,n.up)("q-header"),m=(0,n.up)("router-view"),p=(0,n.up)("q-page-container"),b=(0,n.up)("navigation-bar"),w=(0,n.up)("q-footer"),f=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(f,{view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"text-black"},{default:(0,n.w5)((()=>[(0,n._)("div",s,(0,l.zw)(e.$t("main_tital")),1)])),_:1}),(0,n._)("div",null,[(0,n.Wm)(i,{class:"btn-lang text-black",onClick:e.toggleLanguage,flat:"",padding:"none",icon:"fa-solid fa-globe",align:"left",ripple:!1,label:e.$t(e.getNextLanguage())},null,8,["onClick","label"])])])),_:1})])),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m)])),_:1}),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"text-black"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,{total:e.stagesTotal,current:e.curretnStage},null,8,["total","current"])])),_:1}),e.isProcessing?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(i,{key:0,class:"btn-step",outline:"",rounded:"",onClick:e.goNextPage,label:e.isFinished?e.$t("DONE"):e.$t("NEXT")},null,8,["onClick","label"]))])),_:1})])),_:1})])),_:1})}var o=a(8910),g=a(9991),u=a(3703),i=a(9302),c=a(8513);const d={class:"row"},m={key:0,class:"radius q-ma-xs"},p={key:1,class:"circle q-ma-xs"};function b(e,t,a,l,s,r){return(0,n.wg)(),(0,n.iD)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.total,(t=>((0,n.wg)(),(0,n.iD)("div",null,[t-1===e.current?((0,n.wg)(),(0,n.iD)("div",m)):((0,n.wg)(),(0,n.iD)("div",p))])))),256))])}const w=(0,n.aZ)({name:"NavigationBar",props:{total:Number,current:Number},setup(){return{}}});var f=a(1639);const v=(0,f.Z)(w,[["render",b],["__scopeId","data-v-638f683d"]]),S=v;var _=a(7843),k=a(6825);const q=(0,n.aZ)({name:"MainLayout",components:{NavigationBar:S,RouterView:o.MA,RouterLink:o.rH},setup(){const e=(0,_.useStore)(),t=(0,i.Z)(),a=k.i18n.global.t,l=["zh","en"],{locale:s}=(0,g.QT)({useScope:"global"}),r=()=>{const e=l.findIndex((e=>e===s.value)),t=e+1<l.length?e+1:0;return l[t]},o={SceneStage:()=>{const n=null!==e.getters["stage/getSelectScene"];return n||t.notify({type:"warning",message:a("scene_not_selected")}),n},DyeStage:()=>{const n=null!==e.getters["stage/getSelectedDye"];return n||t.notify({type:"warning",message:a("dye_not_selected")}),n},SubmitStage:()=>!0};return{locale:s,languages:l,stagesTotal:(0,n.Fl)((()=>e.getters["stage/getTotalStages"])),curretnStage:(0,n.Fl)((()=>e.getters["stage/getCurrentStageIndex"])),getNextLanguage:r,toggleLanguage(){s.value=r(),u.Z.set(c.Y,s.value)},goNextPage(){const t=e.getters["stage/getCurrentStage"];o[t]?o[t]()&&e.commit("stage/setNextStage"):e.commit("stage/setNextStage")},isFinished:(0,n.Fl)((()=>e.getters["stage/getCurrentStageIsFinished"])),isProcessing:(0,n.Fl)((()=>{const t=e.getters["stage/getCurrentStage"];return"ProcessStage"===t}))}}});var x=a(7605),y=a(6602),Z=a(1663),h=a(1973),N=a(5157),C=a(2133),T=a(1378),W=a(9984),F=a.n(W);const D=(0,f.Z)(q,[["render",r],["__scopeId","data-v-dcaf9f86"]]),L=D;F()(q,"components",{QLayout:x.Z,QHeader:y.Z,QToolbar:Z.Z,QToolbarTitle:h.Z,QBtn:N.Z,QPageContainer:C.Z,QFooter:T.Z})}}]);