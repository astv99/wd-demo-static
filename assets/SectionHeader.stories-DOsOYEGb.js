import{d as n,o as c,f as d,g as t,t as l,s as i}from"./iframe-DoOFpFcX.js";import"./preload-helper-PPVm8Dsz.js";const p={class:"header d-flex"},m=["src"],g={class:"title"},s=n({__name:"SectionHeader",props:{header:{default:()=>({text:"Default Header",iconUrl:"/assets/itll-logo.png"})}},setup(r){const a=r;return(f,h)=>(c(),d("div",p,[t("img",{class:"icon",src:a.header.iconUrl,alt:"logo"},null,8,m),t("h1",g,l(a.header.text),1)]))}}),u=i(s,[["__scopeId","data-v-58feb3f6"]]);s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"SectionHeader",description:"",tags:{},props:[{name:"header",description:"Composition of the header",required:!0,type:{name:"HeaderInfo"},defaultValue:{func:!1,value:`() => ({
  text: "Default Header",
  iconUrl: "/assets/itll-logo.png",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/homepage/SectionHeader.vue"]});const{fn:H}=__STORYBOOK_MODULE_TEST__,_={text:"Default Header",iconUrl:"/assets/itll-logo.png"},U={component:u,title:"SectionHeader",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},e={args:{header:_}},o={args:{header:{text:"Upcoming Workshops",iconUrl:"/assets/itll-logo.png"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    header: SectionHeaderData
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    header: {
      text: "Upcoming Workshops",
      iconUrl: "/assets/itll-logo.png"
    }
  }
}`,...o.parameters?.docs?.source}}};const D=["Default","UpcomingWorkshops"];export{e as Default,o as UpcomingWorkshops,D as __namedExportsOrder,U as default};
