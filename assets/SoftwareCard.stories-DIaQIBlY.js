import t from"./SoftwareCard-DZLaLyVS.js";import"./iframe-5H8Udzkd.js";import"./preload-helper-PPVm8Dsz.js";import"./misc-Dv5UcT8H.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,n={appName:"DefaultApp",description:"Default Description",accessMethod:"",platforms:"",requirements:"",support:"",logoImage:"",backgroundImage:"",link:""},m={component:t,title:"SoftwareCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},e={args:{...n}},a={args:{appName:"SolidWorks",description:"3D CAD design and engineering software for mechanical design and simulation.",accessMethod:"Lab computers",platforms:"Windows",requirements:"Engineering student status",support:"IT help desk",logoImage:"/assets/logo-solidworks.png",backgroundImage:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers_1.jpg",link:"/solidworks"}},o={args:{...n,appName:"MATLAB",description:"Computing platform for data analysis, visualization, and algorithm development.",accessMethod:"Download with CU login",platforms:"Windows, MacOS, Linux",requirements:"CU Boulder affiliation",support:"MATLAB support",logoImage:"/assets/logo-matlab.png",backgroundImage:"",link:"/matlab"}},s={args:{appName:"Adobe Creative Cloud",description:"Complete creative suite including Photoshop, Illustrator, InDesign, and more.",accessMethod:"Lab computers",platforms:"Windows, MacOS",requirements:"Student/Staff status",support:"Adobe support",logoImage:"/assets/logo-adobe-cc.png",backgroundImage:"",link:"/adobecc"}},r={args:{appName:"LabView",description:"Graphical programming environment for instrument control and data acquisition.",accessMethod:"Lab computers",platforms:"Windows",requirements:"Course enrollment",support:"NI support",logoImage:"/assets/logo-labview.jpg",backgroundImage:"",link:"/labview"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...SoftwareCardData
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    appName: "SolidWorks",
    description: "3D CAD design and engineering software for mechanical design and simulation.",
    accessMethod: "Lab computers",
    platforms: "Windows",
    requirements: "Engineering student status",
    support: "IT help desk",
    logoImage: "/assets/logo-solidworks.png",
    backgroundImage: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/3d_printers_1.jpg",
    link: "/solidworks"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...SoftwareCardData,
    appName: "MATLAB",
    description: "Computing platform for data analysis, visualization, and algorithm development.",
    accessMethod: "Download with CU login",
    platforms: "Windows, MacOS, Linux",
    requirements: "CU Boulder affiliation",
    support: "MATLAB support",
    logoImage: "/assets/logo-matlab.png",
    backgroundImage: "",
    link: "/matlab"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    appName: "Adobe Creative Cloud",
    description: "Complete creative suite including Photoshop, Illustrator, InDesign, and more.",
    accessMethod: "Lab computers",
    platforms: "Windows, MacOS",
    requirements: "Student/Staff status",
    support: "Adobe support",
    logoImage: "/assets/logo-adobe-cc.png",
    backgroundImage: "",
    link: "/adobecc"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    appName: "LabView",
    description: "Graphical programming environment for instrument control and data acquisition.",
    accessMethod: "Lab computers",
    platforms: "Windows",
    requirements: "Course enrollment",
    support: "NI support",
    logoImage: "/assets/logo-labview.jpg",
    backgroundImage: "",
    link: "/labview"
  }
}`,...r.parameters?.docs?.source}}};const g=["Default","SolidWorks","MatLab","AdobeCreativeCloud","LabView"];export{s as AdobeCreativeCloud,e as Default,r as LabView,o as MatLab,a as SolidWorks,g as __namedExportsOrder,m as default};
