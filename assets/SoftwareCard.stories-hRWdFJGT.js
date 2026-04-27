import{d as m,o as c,f as l,g as a,t as o,p as g,s as f}from"./iframe-DoOFpFcX.js";import"./preload-helper-PPVm8Dsz.js";const b={class:"bottom-layer"},I={class:"top"},_={class:"app"},C=["src","alt"],h={key:1},w={class:"description"},S={class:"details"},k={class:"details-title"},v={class:"details-title"},M={class:"details-title"},L={class:"details-title"},p=m({__name:"SoftwareCard",props:{card:{default:()=>({app:"",description:"",accessMethod:"",platforms:"",requirements:"",support:"",logoImage:"",backgroundImage:""})}},setup(u){const e=u;return(D,s)=>(c(),l("div",b,[a("div",{class:"outer",style:g({"--card-bg":`url('${e.card.backgroundImage}')`})},[a("div",I,[a("div",_,[e.card.logoImage?(c(),l("img",{key:0,class:"app-logo",src:e.card.logoImage,alt:`${e.card.app} logo`},null,8,C)):(c(),l("span",h,o(e.card.app+" logo"),1))])]),a("div",w,o(e.card.description),1),s[4]||(s[4]=a("hr",{class:"title-line"},null,-1)),a("div",S,[a("p",k,[s[0]||(s[0]=a("span",{class:"label"},"Access Method: ",-1)),a("span",null,o(e.card.accessMethod),1)]),a("p",v,[s[1]||(s[1]=a("span",{class:"label"},"Platforms: ",-1)),a("span",null,o(e.card.platforms),1)]),a("p",M,[s[2]||(s[2]=a("span",{class:"label"},"Requirements: ",-1)),a("span",null,o(e.card.requirements),1)]),a("p",L,[s[3]||(s[3]=a("span",{class:"label"},"Support: ",-1)),a("span",null,o(e.card.support),1)])])],4)]))}}),q=f(p,[["__scopeId","data-v-2d110ca6"]]);p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"SoftwareCard",description:"",tags:{},props:[{name:"card",description:"Content of the card",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  app: "",
  description: "",
  accessMethod: "",
  platforms: "",
  requirements: "",
  support: "",
  logoImage: "",
  backgroundImage: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/software/SoftwareCard.vue"]});const{fn:y}=__STORYBOOK_MODULE_TEST__,A={app:"DefaultApp",description:"Default Description",accessMethod:"",platforms:"",requirements:"",support:"",logoImage:"",backgroundImage:""},O={component:q,title:"SoftwareCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},t={args:{card:A}},r={args:{card:{app:"SolidWorks",description:"3D CAD design and engineering software for mechanical design and simulation.",accessMethod:"Lab computers",platforms:"Windows",requirements:"Engineering student status",support:"IT help desk",logoImage:"/assets/logo-solidworks.png",backgroundImage:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers_1.jpg"}}},n={args:{card:{app:"MATLAB",description:"Computing platform for data analysis, visualization, and algorithm development.",accessMethod:"Download with CU login",platforms:"Windows, MacOS, Linux",requirements:"CU Boulder affiliation",support:"MATLAB support",logoImage:"/assets/logo-matlab.png",backgroundImage:""}}},d={args:{card:{app:"Adobe Creative Cloud",description:"Complete creative suite including Photoshop, Illustrator, InDesign, and more.",accessMethod:"Lab computers",platforms:"Windows, MacOS",requirements:"Student/Staff status",support:"Adobe support",logoImage:"/assets/logo-adobe-cc.png",backgroundImage:""}}},i={args:{card:{app:"LabView",description:"Graphical programming environment for instrument control and data acquisition.",accessMethod:"Lab computers",platforms:"Windows",requirements:"Course enrollment",support:"NI support",logoImage:"/assets/logo-labview.jpg",backgroundImage:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    card: SoftwareCardData
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      app: "SolidWorks",
      description: "3D CAD design and engineering software for mechanical design and simulation.",
      accessMethod: "Lab computers",
      platforms: "Windows",
      requirements: "Engineering student status",
      support: "IT help desk",
      logoImage: "/assets/logo-solidworks.png",
      backgroundImage: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers_1.jpg"
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      app: "MATLAB",
      description: "Computing platform for data analysis, visualization, and algorithm development.",
      accessMethod: "Download with CU login",
      platforms: "Windows, MacOS, Linux",
      requirements: "CU Boulder affiliation",
      support: "MATLAB support",
      logoImage: "/assets/logo-matlab.png",
      backgroundImage: ""
    }
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      app: "Adobe Creative Cloud",
      description: "Complete creative suite including Photoshop, Illustrator, InDesign, and more.",
      accessMethod: "Lab computers",
      platforms: "Windows, MacOS",
      requirements: "Student/Staff status",
      support: "Adobe support",
      logoImage: "/assets/logo-adobe-cc.png",
      backgroundImage: ""
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      app: "LabView",
      description: "Graphical programming environment for instrument control and data acquisition.",
      accessMethod: "Lab computers",
      platforms: "Windows",
      requirements: "Course enrollment",
      support: "NI support",
      logoImage: "/assets/logo-labview.jpg",
      backgroundImage: ""
    }
  }
}`,...i.parameters?.docs?.source}}};const T=["Default","SolidWorks","MatLab","AdobeCreativeCloud","LabView"];export{d as AdobeCreativeCloud,t as Default,i as LabView,n as MatLab,r as SolidWorks,T as __namedExportsOrder,O as default};
