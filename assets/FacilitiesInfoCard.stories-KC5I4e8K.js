import{y as p,G as l,C as r,E as o,j as u,B as m}from"./iframe-BYGVuDJG.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const f={class:"card-content"},_={class:"stat"},y={class:"description"},i=p({name:"FacilitiesInfoCard",__name:"FacilitiesInfoCard",props:{card:{default:()=>({id:"",stat:"",byline:"",image:""})},setLogin:{},setSoftware:{},setRequests:{},setEquipment:{}},setup(d){const n=d;return(b,C)=>(m(),l("div",{class:"card",style:u({backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 82.22%), url(${n.card.image})`})},[r("div",f,[r("p",_,o(n.card.stat),1),r("p",y,o(n.card.byline),1)])],4))}}),S=g(i,[["__scopeId","data-v-7bab62b5"]]);i.__docgenInfo={name:"FacilitiesInfoCard",exportName:"default",displayName:"FacilitiesInfoCard",description:"",tags:{},props:[{name:"card",description:"Composition of the card",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  id: "",
  stat: "",
  byline: "",
  image: "",
})`}},{name:"setLogin",description:"Event to set the card as Login",required:!0,type:{name:"TSFunctionType"}},{name:"setSoftware",description:"Event to set the card as Software",required:!0,type:{name:"TSFunctionType"}},{name:"setRequests",description:"Event to set the card as Requests",required:!0,type:{name:"TSFunctionType"}},{name:"setEquipment",description:"Event to set the card as Equipment",required:!0,type:{name:"TSFunctionType"}}],sourceFiles:["/workspaces/Conductor/ConductorFrontend/conductor-cmsd/src/components/homepage/FacilitiesInfoCard.vue"]};const{fn:a}=__STORYBOOK_MODULE_TEST__,c={id:"1",stat:"Stat",byline:"Byline",image:"",events:{setLogin:a(),setSoftware:a(),setRequests:a(),setEquipment:a()}},h={component:S,title:"FacilitiesInfoCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{...c.events}},e={args:{card:c}},t={args:{card:{...e.args.card,stat:"15+",byline:"Lab Spaces",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/itll_facilities.jpg"}}},s={args:{card:{...e.args.card,stat:" ",byline:"Maker spaces with 3D printing and fabrication tools",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers.jpg"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    card: FacilitiesInfoCardData
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      ...Default.args.card,
      stat: "15+",
      byline: "Lab Spaces",
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/itll_facilities.jpg"
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      ...Default.args.card,
      stat: " ",
      byline: "Maker spaces with 3D printing and fabrication tools",
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers.jpg"
    }
  }
}`,...s.parameters?.docs?.source}}};const F=["FacilitiesInfoCardData","Default","LabSpaces","MakerSpaces"];export{e as Default,c as FacilitiesInfoCardData,t as LabSpaces,s as MakerSpaces,F as __namedExportsOrder,h as default};
