import{Q as r}from"./QuickActionButton-BRZCG_8c.js";import"./iframe-DoOFpFcX.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Action",description:"Resource",color:"#000000",icon:"",link:""},l={component:r,title:"QuickActionButton",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},e={args:{...i}},o={args:{title:"Login",description:"Account",color:"#993F2B",icon:"../../assets/qa-icon-login.svg",link:"/login"}},s={args:{title:"Download",description:"Software",color:"#5637A9",icon:"../../assets/qa-icon-software.svg",link:"/software"}},t={args:{title:"Submit",description:"Requests",color:"#E2A543",icon:"../../assets/qa-icon-requests.svg",link:"/requests"}},n={args:{title:"Reserve",description:"Equipment",color:"#52793D",icon:"../../assets/qa-icon-equipment.svg",link:"/equipment"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...QuickActionButtonData
  }
}`,...e.parameters?.docs?.source},description:{story:`QuickActionButtons will be accurately positioned in actual placement in Webductor;
misalignment here is only due to component isolation`,...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Login",
    description: "Account",
    color: "#993F2B",
    icon: "../../assets/qa-icon-login.svg",
    link: "/login"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Download",
    description: "Software",
    color: "#5637A9",
    icon: "../../assets/qa-icon-software.svg",
    link: "/software"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Submit",
    description: "Requests",
    color: "#E2A543",
    icon: "../../assets/qa-icon-requests.svg",
    link: "/requests"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Reserve",
    description: "Equipment",
    color: "#52793D",
    icon: "../../assets/qa-icon-equipment.svg",
    link: "/equipment"
  }
}`,...n.parameters?.docs?.source}}};const p=["Default","Login","Software","Requests","Equipment"];export{e as Default,n as Equipment,o as Login,t as Requests,s as Software,p as __namedExportsOrder,l as default};
