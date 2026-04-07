import{d as l,e as d,w as n,n as p,o as u,f as m,g as o,t as i}from"./iframe-DAh--HWo.js";import{V as g,a as f}from"./VCard-DacZoaMB.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const b={class:"stat-value text-white font-weight-bold"},y={class:"text-body-1 text-center text-white mt-3"},s=l({__name:"FacilitiesInfoCard",props:{stat:{default:""},byline:{default:""},image:{default:""}},setup(c){const r=c;return(I,x)=>(u(),d(g,{style:p({backgroundImage:`
        linear-gradient(
          180deg, 
          rgba(0, 0, 0, 0) 0%, 
          rgba(0, 0, 0, 0.9) 82.22%), 
          url(${r.image})
      `}),height:"160",width:"300",rounded:"lg"},{default:n(()=>[m(f,{class:"d-flex flex-column align-center justify-end pb-6 h-100"},{default:n(()=>[o("div",b,i(r.stat),1),o("div",y,i(r.byline),1)]),_:1})]),_:1},8,["style"]))}}),h=_(s,[["__scopeId","data-v-95378563"]]);s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"FacilitiesInfoCard",description:"",tags:{},props:[{name:"stat",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"byline",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/homepage/FacilitiesInfoCard.vue"]});const C={stat:"Stat",byline:"Byline",image:""},B={component:h,title:"FacilitiesInfoCard",tags:["autodocs"],args:{}},e={args:{...C}},a={args:{stat:"15+",byline:"Lab Spaces",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/itll_facilities.jpg"}},t={args:{stat:" ",byline:"Maker spaces with 3D printing and fabrication tools",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers.jpg"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...FacilitiesInfoCardData
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    stat: "15+",
    byline: "Lab Spaces",
    image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/itll_facilities.jpg"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    stat: " ",
    byline: "Maker spaces with 3D printing and fabrication tools",
    image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers.jpg"
  }
}`,...t.parameters?.docs?.source}}};const F=["Default","LabSpaces","MakerSpaces"];export{e as Default,a as LabSpaces,t as MakerSpaces,F as __namedExportsOrder,B as default};
