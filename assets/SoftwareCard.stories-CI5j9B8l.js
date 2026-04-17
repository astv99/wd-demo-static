import{d as m,o as c,f as l,g as o,t as s,n as g,p as b}from"./iframe-CYZWmCxV.js";import"./preload-helper-PPVm8Dsz.js";const f={class:"bottom-layer"},I={class:"top"},_={class:"app"},C=["src","alt"],h={key:1},k={class:"description"},w={class:"details"},S={class:"details-title"},v={class:"details-title"},M={class:"details-title"},y={class:"details-title"},d=m({__name:"SoftwareCard",props:{card:{default:()=>({app:"",description:"",accessMethod:"",platforms:"",requirements:"",support:"",logoImage:"",backgroundImage:""})}},setup(u){const a=u;return(A,e)=>(c(),l("div",f,[o("div",{class:"outer",style:g({"--card-bg":`url('${a.card.backgroundImage}')`})},[o("div",I,[o("div",_,[a.card.logoImage?(c(),l("img",{key:0,class:"app-logo",src:a.card.logoImage,alt:`${a.card.app} logo`},null,8,C)):(c(),l("span",h,s(a.card.app+" logo"),1))])]),o("div",k,s(a.card.description),1),e[4]||(e[4]=o("hr",{class:"title-line"},null,-1)),o("div",w,[o("p",S,[e[0]||(e[0]=o("span",{class:"label"},"Access Method: ",-1)),o("span",null,s(a.card.accessMethod),1)]),o("p",v,[e[1]||(e[1]=o("span",{class:"label"},"Platforms: ",-1)),o("span",null,s(a.card.platforms),1)]),o("p",M,[e[2]||(e[2]=o("span",{class:"label"},"Requirements: ",-1)),o("span",null,s(a.card.requirements),1)]),o("p",y,[e[3]||(e[3]=o("span",{class:"label"},"Support: ",-1)),o("span",null,s(a.card.support),1)])])],4)]))}}),L=b(d,[["__scopeId","data-v-2d110ca6"]]);d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"SoftwareCard",description:"",tags:{},props:[{name:"card",description:"Content of the card",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  app: "",
  description: "",
  accessMethod: "",
  platforms: "",
  requirements: "",
  support: "",
  logoImage: "",
  backgroundImage: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/software/SoftwareCard.vue"]});const{fn:B}=__STORYBOOK_MODULE_TEST__,q={app:"DefaultApp",description:"Default Description",accessMethod:"",platforms:"",requirements:"",support:"",logoImage:"",backgroundImage:""},O={component:L,title:"SoftwareCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},r={args:{card:q}},t={args:{card:{app:"SolidWorks",description:"3D CAD design and engineering software for mechanical design and simulation.",accessMethod:"Lab computers",platforms:"Windows",requirements:"Engineering student status",support:"IT help desk",logoImage:"@/../.storybook/public/logo-solidworks.png",backgroundImage:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers_1.jpg"}}},n={args:{card:{app:"MATLAB",description:"Computing platform for data analysis, visualization, and algorithm development.",accessMethod:"Download with CU login",platforms:"Windows, MacOS, Linux",requirements:"CU Boulder affiliation",support:"MATLAB support",logoImage:"@/../.storybook/public/logo-matlab.png",backgroundImage:""}}},i={args:{card:{app:"Adobe Creative Cloud",description:"Complete creative suite including Photoshop, Illustrator, InDesign, and more.",accessMethod:"Lab computers",platforms:"Windows, MacOS",requirements:"Student/Staff status",support:"Adobe support",logoImage:"@/../.storybook/public/logo-adobe-cc.png",backgroundImage:""}}},p={args:{card:{app:"LabView",description:"Graphical programming environment for instrument control and data acquisition.",accessMethod:"Lab computers",platforms:"Windows",requirements:"Course enrollment",support:"NI support",logoImage:"@/../.storybook/public/logo-labview.jpg",backgroundImage:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    card: SoftwareCardData
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      app: "SolidWorks",
      description: "3D CAD design and engineering software for mechanical design and simulation.",
      accessMethod: "Lab computers",
      platforms: "Windows",
      requirements: "Engineering student status",
      support: "IT help desk",
      logoImage: "@/../.storybook/public/logo-solidworks.png",
      backgroundImage: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers_1.jpg"
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      app: "MATLAB",
      description: "Computing platform for data analysis, visualization, and algorithm development.",
      accessMethod: "Download with CU login",
      platforms: "Windows, MacOS, Linux",
      requirements: "CU Boulder affiliation",
      support: "MATLAB support",
      logoImage: "@/../.storybook/public/logo-matlab.png",
      backgroundImage: ""
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      app: "Adobe Creative Cloud",
      description: "Complete creative suite including Photoshop, Illustrator, InDesign, and more.",
      accessMethod: "Lab computers",
      platforms: "Windows, MacOS",
      requirements: "Student/Staff status",
      support: "Adobe support",
      logoImage: "@/../.storybook/public/logo-adobe-cc.png",
      backgroundImage: ""
    }
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      app: "LabView",
      description: "Graphical programming environment for instrument control and data acquisition.",
      accessMethod: "Lab computers",
      platforms: "Windows",
      requirements: "Course enrollment",
      support: "NI support",
      logoImage: "@/../.storybook/public/logo-labview.jpg",
      backgroundImage: ""
    }
  }
}`,...p.parameters?.docs?.source}}};const T=["Default","SolidWorks","MatLab","AdobeCreativeCloud","LabView"];export{i as AdobeCreativeCloud,r as Default,p as LabView,n as MatLab,t as SolidWorks,T as __namedExportsOrder,O as default};
