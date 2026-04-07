import{d as n,h as c,g as s,t as i,o as d}from"./iframe-CBCvX78k.js";import{_ as l}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const p={class:"header d-flex"},m=["src"],u={class:"title"},t=n({__name:"SectionHeader",props:{header:{default:()=>({text:"Default Header",iconUrl:"@/../.storybook/public/itll-logo.png"})}},setup(r){const a=r;return(f,h)=>(d(),c("div",p,[s("img",{class:"icon",src:a.header.iconUrl,alt:"logo"},null,8,m),s("h1",u,i(a.header.text),1)]))}}),g=l(t,[["__scopeId","data-v-f6572300"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"SectionHeader",description:"",tags:{},props:[{name:"header",description:"Composition of the header",required:!0,type:{name:"HeaderInfo"},defaultValue:{func:!1,value:`() => ({
  text: "Default Header",
  iconUrl: "@/../.storybook/public/itll-logo.png",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/homepage/SectionHeader.vue"]});const{fn:U}=__STORYBOOK_MODULE_TEST__,_={text:"Default Header",iconUrl:"@/../.storybook/public/itll-logo.png"},k={component:g,title:"SectionHeader",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},e={args:{header:_}},o={args:{header:{text:"Upcoming Workshops",iconUrl:"/wd-demo-static/assets/itll-logo.png"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    header: SectionHeaderData
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    header: {
      text: "Upcoming Workshops",
      iconUrl: "/wd-demo-static/assets/itll-logo.png"
    }
  }
}`,...o.parameters?.docs?.source}}};const D=["Default","UpcomingWorkshops"];export{e as Default,o as UpcomingWorkshops,D as __namedExportsOrder,k as default};
