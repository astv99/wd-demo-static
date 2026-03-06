import{y as c,G as i,C as e,B as u}from"./iframe-BYGVuDJG.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const d={class:"searchbar"},o=c({name:"Searchbar",__name:"Searchbar",props:{bar:{default:()=>({id:""})},setLogin:{},setSoftware:{},setRequests:{},setEquipment:{}},setup(l){return(b,s)=>(u(),i("div",d,[...s[0]||(s[0]=[e("form",{class:"search-container",role:"search"},[e("div",{class:"input-wrapper"},[e("i",{class:"fa-solid fa-magnifying-glass search-icon"}),e("input",{type:"search",id:"search-input",placeholder:"Search our knowledgebase for tutorials, guides, and documentation","aria-label":"Search"})]),e("button",{type:"submit",class:"search-button"},"Search")],-1)])]))}}),m=p(o,[["__scopeId","data-v-ae10206e"]]);o.__docgenInfo={name:"Searchbar",exportName:"default",displayName:"Searchbar",description:"",tags:{},props:[{name:"bar",description:"Composition of the button",required:!0,type:{name:"BarData"},defaultValue:{func:!1,value:`() => ({
  id: "",
})`}},{name:"setLogin",description:"Event to set the button as Login",required:!0,type:{name:"TSFunctionType"}},{name:"setSoftware",description:"Event to set the button as Software",required:!0,type:{name:"TSFunctionType"}},{name:"setRequests",description:"Event to set the button as Requests",required:!0,type:{name:"TSFunctionType"}},{name:"setEquipment",description:"Event to set the button as Equipment",required:!0,type:{name:"TSFunctionType"}}],sourceFiles:["/workspaces/Conductor/ConductorFrontend/conductor-cmsd/src/components/homepage/Searchbar.vue"]};const{fn:a}=__STORYBOOK_MODULE_TEST__,n={id:"1",events:{setLogin:a(),setSoftware:a(),setRequests:a(),setEquipment:a()}},_={component:m,title:"Searchbar",tags:["autodocs"],excludeStories:/.*Data$/,args:{...n.events}},t={args:{bar:n}},r={args:{bar:{...t.args.bar}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    bar: SearchbarData
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    bar: {
      ...Default.args.bar
    }
  }
}`,...r.parameters?.docs?.source}}};const g=["SearchbarData","Default","BottomBar"];export{r as BottomBar,t as Default,n as SearchbarData,g as __namedExportsOrder,_ as default};
