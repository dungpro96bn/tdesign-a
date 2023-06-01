import{D as P}from"./index.fef507ce.js";import{a as L}from"./vuex.esm-bundler.2e787911.js";import{C as N}from"./Card.8a160590.js";import{G as R,a as U}from"./Row.3c6833bf.js";import{S as V}from"./Checkmark.b071baa5.js";import{a as B}from"./index.c8bcf9e5.js";import{S as F}from"./Download.d3e8e6b2.js";import{T as z,a as j}from"./Row.4078cfc9.js";import{_ as G,c as a,d as s,w as e,r as o,N as O,o as n,a as l,y as c,t as r,H as M,b as S,F as d,f as h,B as w,G as C}from"./_plugin-vue_export-helper.1252226d.js";import"./isArrayLikeObject.da221b94.js";import"./default-i18n.ab92175e.js";import"./_commonjsHelpers.f84db168.js";import"./helpers.de7566d0.js";import"./Tooltip.ce066015.js";import"./Caret.21cdd163.js";import"./Slide.8b22672f.js";const J={components:{CoreCard:N,GridColumn:R,GridRow:U,SvgCheckmark:V,SvgCopy:B,SvgDownload:F,TableColumn:z,TableRow:j},data(){return{copied:!1,emailError:null,emailAddress:null,sendingEmail:!1,strings:{systemStatusInfo:this.$t.__("System Status Info",this.$td),downloadSystemInfoFile:this.$t.__("Download System Info File",this.$td),copyToClipboard:this.$t.__("Copy to Clipboard",this.$td),emailDebugInformation:this.$t.__("Email Debug Information",this.$td),submit:this.$t.__("Submit",this.$td),wordPress:this.$t.__("WordPress",this.$td),serverInfo:this.$t.__("Server Info",this.$td),activeTheme:this.$t.__("Active Theme",this.$td),muPlugins:this.$t.__("Must-Use Plugins",this.$td),activePlugins:this.$t.__("Active Plugins",this.$td),inactivePlugins:this.$t.__("Inactive Plugins",this.$td),copied:this.$t.__("Copied!",this.$td)}}},computed:{copySystemStatusInfo(){return JSON.stringify(this.$aioseo.data.status)}},methods:{...L(["emailDebugInfo"]),onCopy(){this.copied=!0,setTimeout(()=>{this.copied=!1},2e3)},onError(){},downloadSystemStatusInfo(){const _=new Blob([JSON.stringify(this.$aioseo.data.status)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(_),i.download=`aioseo-system-status-${P.now().toFormat("yyyy-MM-dd")}.json`,i.click(),URL.revokeObjectURL(i.href)},processEmailDebugInfo(){if(this.emailError=!1,!this.emailAddress||!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailAddress)){this.emailError=!0;return}this.sendingEmail=!0,this.emailDebugInfo(this.emailAddress).then(()=>{this.emailAddress=null,this.sendingEmail=!1})}}},H={class:"aioseo-tools-system-status-info"},W={class:"actions"},q={class:"aioseo-settings-row"},K={key:0,class:"settings-group"},Q={class:"settings-name"},X={class:"name"},Y={class:"settings-content"},Z={class:"system-status-table"};function tt(_,i,st,et,t,m){const k=o("svg-download"),p=o("base-button"),I=o("svg-copy"),$=o("svg-checkmark"),g=o("grid-column"),E=o("base-input"),D=o("grid-row"),y=o("table-column"),A=o("table-row"),T=o("core-card"),f=O("clipboard");return n(),a("div",H,[s(T,{slug:"systemStatusInfo","header-text":t.strings.systemStatusInfo},{default:e(()=>[l("div",W,[s(D,null,{default:e(()=>[s(g,{sm:"6",class:"left"},{default:e(()=>[s(p,{type:"blue",size:"small",onClick:m.downloadSystemStatusInfo},{default:e(()=>[s(k),c(" "+r(t.strings.downloadSystemInfoFile),1)]),_:1},8,["onClick"]),M((n(),S(p,{type:"blue",size:"small"},{default:e(()=>[t.copied?h("",!0):(n(),a(d,{key:0},[s(I),c(" "+r(t.strings.copyToClipboard),1)],64)),t.copied?(n(),a(d,{key:1},[s($),c(" "+r(t.strings.copied),1)],64)):h("",!0)]),_:1})),[[f,m.copySystemStatusInfo,"copy"],[f,m.onCopy,"success"],[f,m.onError,"error"]])]),_:1}),s(g,{sm:"6",class:"right"},{default:e(()=>[s(E,{size:"small",placeholder:t.strings.emailDebugInformation,modelValue:t.emailAddress,"onUpdate:modelValue":i[0]||(i[0]=u=>t.emailAddress=u),class:w({"aioseo-error":t.emailError})},null,8,["placeholder","modelValue","class"]),s(p,{type:"blue",size:"small",onClick:m.processEmailDebugInfo,loading:t.sendingEmail},{default:e(()=>[c(r(t.strings.submit),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1})]),l("div",q,[(n(!0),a(d,null,C(_.$aioseo.data.status,(u,x)=>(n(),a(d,{key:x},[u.results.length?(n(),a("div",K,[l("div",Q,[l("div",X,r(u.label),1)]),l("div",Y,[l("div",Z,[(n(!0),a(d,null,C(u.results,(b,v)=>(n(),S(A,{key:v,class:w({even:v%2===0})},{default:e(()=>[s(y,{class:"system-status-header"},{default:e(()=>[c(r(b.header),1)]),_:2},1024),s(y,null,{default:e(()=>[c(r(b.value),1)]),_:2},1024)]),_:2},1032,["class"]))),128))])])])):h("",!0)],64))),128))])]),_:1},8,["header-text"])])}const bt=G(J,[["render",tt]]);export{bt as default};
