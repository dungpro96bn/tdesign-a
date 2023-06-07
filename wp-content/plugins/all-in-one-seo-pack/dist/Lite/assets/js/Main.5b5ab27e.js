import L from"./BadBotBlocker.3fd6d6f2.js";import{C as O}from"./Index.2530b106.js";import B from"./DatabaseTools.a704ef11.js";import{m as N,a as V}from"./vuex.esm-bundler.2e787911.js";import{C as I}from"./index.c8bcf9e5.js";import{C as E}from"./Card.8a160590.js";import{C as U}from"./Tabs.ac7026b6.js";import{C as Y}from"./Index.67d5329e.js";import{C as H}from"./NetworkSiteSelector.1e1395b8.js";import{C as R}from"./SettingsRow.f70a9906.js";import{B as K}from"./Checkbox.01664e13.js";import{G as z,a as G}from"./Row.3c6833bf.js";import{_ as v,r as a,o as n,c as m,d as g,w as d,F as M,G as T,b as u,y as w,t as p,a as l,f as A,x as D,D as P}from"./_plugin-vue_export-helper.1252226d.js";import{D as F}from"./index.fef507ce.js";import{S as W}from"./Caret.21cdd163.js";import q from"./HtaccessEditor.fac6b389.js";import j from"./ImportExport.3cedc1a5.js";import J from"./RobotsEditor.6a0268f8.js";import Q from"./SystemStatus.afcc6a78.js";import X from"./WpCode.38be0dbb.js";import"./Textarea.244cf717.js";import"./default-i18n.ab92175e.js";import"./_commonjsHelpers.f84db168.js";import"./Tooltip.ce066015.js";import"./Slide.8b22672f.js";/* empty css             */import"./params.597cd0f5.js";import"./WpTable.6ebd2781.js";import"./Index.25975920.js";import"./helpers.de7566d0.js";import"./RequiresUpdate.52f5acf2.js";import"./postContent.d5640333.js";import"./cleanForSlug.3cf2e377.js";import"./isArrayLikeObject.da221b94.js";import"./constants.449145d5.js";import"./html.14f2a8b9.js";import"./SaveChanges.03404395.js";import"./Header.df904d7f.js";import"./LicenseKeyBar.9186083c.js";import"./LogoGear.764f01c9.js";import"./AnimatedNumber.515a72b4.js";import"./Logo.ca2c08a1.js";import"./Support.a2e4b5e5.js";import"./Date.461dc30a.js";import"./Exclamation.b493e7b4.js";import"./Url.c71d5763.js";import"./Gear.a5ac87f6.js";import"./Checkmark.b071baa5.js";import"./Blur.fd3c040c.js";import"./TruSeoScore.76897846.js";import"./Information.c2ec1d40.js";import"./Editor.ad30dcf7.js";import"./Plus.95ac3054.js";import"./History.f65dc97a.js";import"./Refresh.d002c52c.js";import"./Download.d3e8e6b2.js";import"./Radio.42b6d623.js";import"./External.e319cd0f.js";import"./Row.4078cfc9.js";const Z={emits:["update"],components:{BaseCheckbox:K,GridColumn:z,GridRow:G},props:{loading:Boolean,disabled:Boolean},data(){return{options:{},strings:{updateOptions:this.$t.__("Update Options",this.$td)}}},mounted(){this.$aioseo.deprecatedOptions.forEach(e=>{e.enabled&&(this.options[e.value]=!0)})}},ee={class:"aioseo-deprecated-options"},te=l("br",null,null,-1),oe=l("br",null,null,-1),se=l("br",null,null,-1);function ne(e,o,i,h,t,r){const c=a("base-checkbox"),b=a("grid-column"),y=a("grid-row"),f=a("base-button");return n(),m("div",ee,[g(y,{class:"settings"},{default:d(()=>[(n(!0),m(M,null,T(e.$aioseo.deprecatedOptions,(_,k)=>(n(),u(b,{key:k,xl:"6",sm:"12"},{default:d(()=>[g(c,{size:"medium",modelValue:t.options[_.value],"onUpdate:modelValue":C=>t.options[_.value]=C,disabled:i.disabled},{default:d(()=>[w(p(_.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024))),128))]),_:1}),te,g(f,{type:"blue",size:"medium",onClick:o[0]||(o[0]=_=>e.$emit("update",t.options)),loading:i.loading,disabled:i.disabled},{default:d(()=>[w(p(t.strings.updateOptions),1)]),_:1},8,["loading","disabled"]),oe,se])}const ie=v(Z,[["render",ne]]);const re={computed:{...N(["internalOptions"]),infoItems(){return[{label:"Migrated Version",value:this.internalOptions.internal.migratedVersion},{label:"First Activated",value:this.internalOptions.internal.firstActivated!==0?F.fromMillis(this.internalOptions.internal.firstActivated*1e3).toFormat("MMMM d, yyyy"):!1}]}}},ae={class:"v3-migration-info aioseo-description"},le={class:"info-items"},ce={key:0},de={key:1};function ue(e,o,i,h,t,r){return n(),m("div",ae,[l("ul",le,[(n(!0),m(M,null,T(r.infoItems,(c,b)=>(n(),m("li",{key:b},[c.value?(n(),m("span",ce,p(c.label),1)):A("",!0),c.value?(n(),m("span",de,p(c.value),1)):A("",!0)]))),128))])])}const pe=v(re,[["render",ue]]);const me={props:{extraActions:{type:Array,required:!1}},components:{CoreAlert:I,CoreCard:E,CoreMainTabs:U,CoreModal:Y,CoreNetworkSiteSelector:H,CoreSettingsRow:R,DeprecatedOptions:ie,MigrationInfo:pe,SvgClose:W},data(){return{site:{},tabsKey:0,doingActionKey:0,activeTab:"general",currentAction:"",showAreYouSureModal:!1,doingAction:[],strings:{selectSite:"Select Site",cardLabel:"Debug",selectLabel:"Select a Debug Action:",buttonLabel:"Run Action",alertWarning:"Before you run any action, please make sure that you have fully read the description and understand the consequences as these cannot be reverted.",cannotBeUndone:"This action cannot be undone.",yesDoAction:"Yes, run this action",noChangedMind:"No, I changed my mind"},alertLink:this.$links.getPlainLink("Click here to open to the Scheduled Actions panel",this.$aioseo.urls.admin.scheduledActions,!0)}},computed:{areYouSureTitle(){return`Are you sure you want to run the "${this.currentAction.label}" action?`},tabs(){const e=this.$t.sprintf('<a href="%1$s" target="_blank">Scheduled Actions</a>',this.$aioseo.urls.admin.scheduledActions),o=this.$aioseo.data.isNetworkAdmin?"<br><strong>NOTE: If no site is selected, this will clear the network cache.</strong>":"",i=this.$aioseo.data.isNetworkAdmin?"<br><strong>NOTE: If no site is selected, this will clear the network plugin updates transient.</strong>":"";return[{slug:"general",name:"General",actions:[{label:"Clear Cache",slug:"clear-cache",shortDescription:`This action deletes all records of the <code>aioseo_cache</code> table in the database.${o}`,longDescription:"",showModal:!1,network:!0},{label:"Clear Plugin Updates Transient",slug:"clear-plugin-updates-transient",shortDescription:`This action clears the plugin updates transient, which forces WordPress Core to check for plugin updates.${i}`,longDescription:"",showModal:!1,network:!0},{label:"Readd Capabilities",slug:"readd-capabilities",shortDescription:"This action will readd our capabilities (access permissions) for all users.",longDescription:"",showModal:!1},{label:"Reset Data",slug:"reset-data",shortDescription:"This action will <strong>delete</strong> all our custom tables and options.",longDescription:"",showModal:!0}]},{slug:"sitemap",name:"Sitemap",actions:[{label:"Clear Image Data",slug:"clear-image-data",shortDescription:"This action removes all image data from the database, forcing a site-wide rescan via Action Scheduler.",longDescription:this.$t.sprintf("To speed up the image scan, go to %1$s and run the <code>aioseo_image_sitemap_scan</code> action.",e),showModal:!1}]},{slug:"migrations",name:"Migrations",actions:[{label:"Rerun V4+ Migrations",slug:"rerun-migrations",shortDescription:"This action will rerun all update migrations since 4.0.0, excluding the V3 migration.",longDescription:"",showModal:!0}]},{slug:"old-issues",name:"Old Issues",actions:[{label:"Remove Duplicates",slug:"remove-duplicates",shortDescription:"This action will delete any duplicate records that are found in the <code>aioseo_posts</code> and <code>aioseo_terms</code> tables.",longDescription:"",showModal:!1},{label:"Unescape Data",slug:"unescape-data",shortDescription:"This action will clean <code>aioseo_posts</code> and <code>aioseo_term</code> records whose data is corrupted.",longDescription:this.$t.sprintf("The action will trigger a routine which runs in batches via Action Scheduler. It may take some time for this routine to complete, To speed up this process, go to %1$s and run the <code>aioseo_unslash_escaped_data_posts</code> or <code>aioseo_unslash_escaped_data_terms</code> action.",e),showModal:!1}]},{slug:"deprecated-options",name:"Deprecated Options",actions:[{label:"Deprecated Options",slug:"deprecated-options",shortDescription:"Enable or disable any options that have been deprecated in AIOSEO.",longDescription:"<strong>These options are not guaranteed to work and all support has been dropped.</strong>",showModal:!1,component:"deprecated-options"}]}]},activeTabObject(){return this.tabs.find(e=>e.slug===this.activeTab)}},methods:{...V(["doTask"]),isActionDisabled(e){return this.$aioseo.data.isNetworkAdmin?this.site.blog_id?this.site.blog_id==="network"&&e.network?!1:this.site.blog_id==="network"&&!e.network:!0:!1},isLoading(e){return!!this.doingAction[e.slug]},getSelectedActionObject(e){let o=null;return this.actions.forEach(i=>{const h=i.options.find(t=>t.value===e);h&&(o=h)}),o},maybeDoAction(e,o){if(this.currentAction=e,e.showModal){this.showAreYouSureModal=!0;return}this.doAction(o)},doAction(e){this.doingAction[this.currentAction.slug]=!0,this.showAreYouSureModal=!1,this.doingActionKey++,this.doTask({action:this.currentAction.slug,siteId:this.site.blog_id,data:e}).then(()=>{console.log(`Action "${this.currentAction.label}" has been completed.`)}).catch(o=>{console.error(`Action "${this.currentAction.label}" could not be completed: `,o)}).finally(()=>{this.doingAction[this.currentAction.slug]=!1,this.doingActionKey++})}},beforeMount(){var o;let e=-1;if(this.$aioseo.data.v3Options&&(e=this.tabs.findIndex(i=>i.slug.toLowerCase()==="migrations"),e!==-1)){const i=this.$t.sprintf('<a href="%1$s" target="_blank">Scheduled Actions</a>',this.$aioseo.urls.admin.scheduledActions);this.tabs[e].actions.push({label:"Rerun V3 Migration",slug:"restart-v3-migration",shortDescription:"This action restarts the migration from V3 to V4.",longDescription:this.$t.sprintf("All settings will be migrated immediately. However, the post/term meta needs to be migrated via a routine which runs in batches via Action Scheduler. To speed up the post/term meta migration, go to %1$s and run the <code>aioseo_migrate_post_meta</code> or <code>aioseo_migrate_term_meta</code> action.",i),infoComponent:"MigrationInfo",showModal:!0})}(o=this.extraActions)!=null&&o.length&&this.extraActions.forEach(i=>{if(e=this.tabs.findIndex(h=>h.slug.toLowerCase()===i.slug.toLowerCase()),e!==-1){this.tabs[e].actions=this.tabs[e].actions.concat(i.actions);return}this.tabs.push(i)})}},he={class:"aioseo-tools-debug"},ge={key:0,class:"aioseo-settings-row"},_e={class:"select-site"},be=["innerHTML"],fe=["innerHTML"],we=["innerHTML"],Ae={class:"aioseo-modal-body"},ve=["innerHTML"];function ye(e,o,i,h,t,r){const c=a("core-network-site-selector"),b=a("core-alert"),y=a("core-main-tabs"),f=a("base-button"),_=a("core-settings-row"),k=a("svg-close"),C=a("core-modal"),S=a("core-card");return n(),m("div",he,[g(S,{slug:"debug","header-text":t.strings.cardLabel},{default:d(()=>[e.$aioseo.data.isNetworkAdmin?(n(),m("div",ge,[l("div",_e,p(t.strings.selectSite),1),g(c,{onSelectedSite:o[0]||(o[0]=s=>t.site=s),"show-network":""})])):A("",!0),g(b,{type:"yellow"},{default:d(()=>[l("div",null,p(t.strings.alertWarning),1),l("div",{innerHTML:t.alertLink},null,8,be)]),_:1}),(n(),u(y,{internal:"",key:t.tabsKey,tabs:r.tabs,active:t.activeTab,showSaveButton:!1,onChanged:o[1]||(o[1]=s=>t.activeTab=s)},null,8,["tabs","active"])),(n(!0),m(M,null,T(r.activeTabObject.actions,(s,x)=>(n(),u(_,{key:t.activeTab+x,name:s.label,align:""},{content:d(()=>[s.component?(n(),u(D(s.component),{key:0,onUpdate:$=>r.maybeDoAction(s,$),loading:t.doingAction[s.slug],disabled:r.isActionDisabled(s)},null,40,["onUpdate","loading","disabled"])):(n(),u(f,{type:"blue",size:"medium",onClick:$=>r.maybeDoAction(s),loading:t.doingAction[s.slug],key:t.doingActionKey,disabled:r.isActionDisabled(s)},{default:d(()=>[w(p(t.strings.buttonLabel),1)]),_:2},1032,["onClick","loading","disabled"])),l("div",{class:"aioseo-description",innerHTML:s.shortDescription},null,8,fe),l("div",{class:"aioseo-description",innerHTML:s.longDescription},null,8,we),s.infoComponent?(n(),u(D(s.infoComponent),{key:2})):A("",!0)]),_:2},1032,["name"]))),128)),t.showAreYouSureModal?(n(),u(C,{key:1,"no-header":"",onClose:o[5]||(o[5]=s=>t.showAreYouSureModal=!1)},{body:d(()=>[l("div",Ae,[l("button",{class:"close",onClick:o[3]||(o[3]=P(s=>t.showAreYouSureModal=!1,["stop"]))},[g(k,{onClick:o[2]||(o[2]=s=>t.showAreYouSureModal=!1)})]),l("h3",null,p(r.areYouSureTitle),1),l("div",{class:"description",innerHTML:t.strings.cannotBeUndone},null,8,ve),g(f,{type:"blue",size:"medium",onClick:r.doAction},{default:d(()=>[w(p(t.strings.yesDoAction),1)]),_:1},8,["onClick"]),g(f,{type:"gray",size:"medium",onClick:o[4]||(o[4]=s=>t.showAreYouSureModal=!1)},{default:d(()=>[w(p(t.strings.noChangedMind),1)]),_:1})])]),_:1})):A("",!0)]),_:1},8,["header-text"])])}const ke=v(me,[["render",ye]]),Ce={components:{Debug:ke}};function De(e,o,i,h,t,r){const c=a("debug",!0);return n(),u(c)}const Me=v(Ce,[["render",De]]),Te={components:{BadBotBlocker:L,CoreMain:O,DatabaseTools:B,Debug:Me,HtaccessEditor:q,ImportExport:j,RobotsEditor:J,SystemStatus:Q,WpCode:X},data(){return{strings:{pageName:this.$aioseo.data.isNetworkAdmin?this.$t.__("Network Tools",this.$td):this.$t.__("Tools",this.$td)}}},computed:{showSaveButton(){return this.$route.name!=="system-status"&&this.$route.name!=="import-export"&&this.$route.name!=="database-tools"&&this.$route.name!=="debug"&&this.$route.name!=="wp-code"}}};function $e(e,o,i,h,t,r){const c=a("core-main");return n(),u(c,{"page-name":t.strings.pageName,"show-save-button":r.showSaveButton},{default:d(()=>[(n(),u(D(e.$route.name)))]),_:1},8,["page-name","show-save-button"])}const Nt=v(Te,[["render",$e]]);export{Nt as default};