import{d as m,h as p,g as a,t as o,n as g,o as l}from"./iframe-Cuo1OJfX.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const b={class:"bottom-layer"},_={class:"top"},I={class:"app"},C=["src","alt"],h={key:1},w={class:"description"},S={class:"details"},k={class:"details-title"},v={class:"details-title"},M={class:"details-title"},L={class:"details-title"},i=m({__name:"SoftwareCard",props:{card:{default:()=>({app:"",description:"",accessMethod:"",platforms:"",requirements:"",support:"",logoImage:"",backgroundImage:""})}},setup(u){const e=u;return(D,s)=>(l(),p("div",b,[a("div",{class:"outer",style:g({"--card-bg":`url('${e.card.backgroundImage}')`})},[a("div",_,[a("div",I,[e.card.logoImage?(l(),p("img",{key:0,class:"app-logo",src:e.card.logoImage,alt:`${e.card.app} Logo`},null,8,C)):(l(),p("span",h,o(e.card.app),1))])]),a("div",w,o(e.card.description),1),s[4]||(s[4]=a("hr",{class:"title-line"},null,-1)),a("div",S,[a("p",k,[s[0]||(s[0]=a("span",{class:"label"},"Access Method: ",-1)),a("span",null,o(e.card.accessMethod),1)]),a("p",v,[s[1]||(s[1]=a("span",{class:"label"},"Platforms: ",-1)),a("span",null,o(e.card.platforms),1)]),a("p",M,[s[2]||(s[2]=a("span",{class:"label"},"Requirements: ",-1)),a("span",null,o(e.card.requirements),1)]),a("p",L,[s[3]||(s[3]=a("span",{class:"label"},"Support: ",-1)),a("span",null,o(e.card.support),1)])])],4)]))}}),q=f(i,[["__scopeId","data-v-c4c91928"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"SoftwareCard",description:"",tags:{},props:[{name:"card",description:"Content of the card",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  app: "",
  description: "",
  accessMethod: "",
  platforms: "",
  requirements: "",
  support: "",
  logoImage: "",
  backgroundImage: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/software/SoftwareCard.vue"]});const{fn:O}=__STORYBOOK_MODULE_TEST__,A={app:"App Name",description:"Default Description",accessMethod:"",platforms:"",requirements:"",support:"",logoImage:"",backgroundImage:""},T={component:q,title:"SoftwareCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},r={args:{card:A}},t={args:{card:{app:"SolidWorks",description:"3D CAD design and engineering software for mechanical design and simulation.",accessMethod:"Lab computers",platforms:"Windows",requirements:"Engineering student status",support:"IT help desk",logoImage:"/src/assets/logo-solidworks.png",backgroundImage:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers_1.jpg"}}},n={args:{card:{app:"MATLAB",description:"Computing platform for data analysis, visualization, and algorithm development.",accessMethod:"Download with CU login",platforms:"Windows, MacOS, Linux",requirements:"CU Boulder affiliation",support:"MATLAB support",logoImage:"/src/assets/logo-matlab.png",backgroundImage:""}}},c={args:{card:{app:"Adobe Creative Cloud",description:"Complete creative suite including Photoshop, Illustrator, InDesign, and more.",accessMethod:"Lab computers",platforms:"Windows, MacOS",requirements:"Student/Staff status",support:"Adobe support",logoImage:"/src/assets/logo-adobe-cc.png",backgroundImage:""}}},d={args:{card:{app:"LabView",description:"Graphical programming environment for instrument control and data acquisition.",accessMethod:"Lab computers",platforms:"Windows",requirements:"Course enrollment",support:"NI support",logoImage:"/src/assets/logo-labview.jpg",backgroundImage:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      logoImage: "/src/assets/logo-solidworks.png",
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
      logoImage: "/src/assets/logo-matlab.png",
      backgroundImage: ""
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      app: "Adobe Creative Cloud",
      description: "Complete creative suite including Photoshop, Illustrator, InDesign, and more.",
      accessMethod: "Lab computers",
      platforms: "Windows, MacOS",
      requirements: "Student/Staff status",
      support: "Adobe support",
      logoImage: "/src/assets/logo-adobe-cc.png",
      backgroundImage: ""
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      app: "LabView",
      description: "Graphical programming environment for instrument control and data acquisition.",
      accessMethod: "Lab computers",
      platforms: "Windows",
      requirements: "Course enrollment",
      support: "NI support",
      logoImage: "/src/assets/logo-labview.jpg",
      backgroundImage: ""
    }
  }
}`,...d.parameters?.docs?.source}}};const x=["SoftwareCardData","Default","SolidWorks","MatLab","AdobeCreativeCloud","LabView"];export{c as AdobeCreativeCloud,r as Default,d as LabView,n as MatLab,A as SoftwareCardData,t as SolidWorks,x as __namedExportsOrder,T as default};
