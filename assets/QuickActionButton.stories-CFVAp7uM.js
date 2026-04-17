import{Q as c}from"./QuickActionButton-Dg6jEMKN.js";import{B as o}from"./webductorTypes-4RQzqXDp.js";import"./iframe-CYZWmCxV.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Default Title",description:"Default description",color:o.DEFAULT,icon:"",route:""},m={component:c,title:"QuickActionButton",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},t={args:{btn:i}},e={args:{btn:{title:"Login",description:"Access your account",color:o.LOGIN,icon:"@/../.storybook/public/qa-icon-login.svg",route:"/login"}}},r={args:{btn:{title:"Software",description:"Download software",color:o.SOFTWARE,icon:"@/../.storybook/public/qa-icon-software.svg",route:"/software"}}},s={args:{btn:{title:"Requests",description:"Submit requests",color:o.REQUESTS,icon:"@/../.storybook/public/qa-icon-requests.svg",route:"/requests"}}},n={args:{btn:{title:"Equipment",description:"Access equipment",color:o.EQUIPMENT,icon:"@/../.storybook/public/qa-icon-equipment.svg",route:"/equipment"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    btn: QuickActionButtonData
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Login",
      description: "Access your account",
      color: ButtonColors["LOGIN"],
      icon: "@/../.storybook/public/qa-icon-login.svg",
      route: "/login"
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Software",
      description: "Download software",
      color: ButtonColors["SOFTWARE"],
      icon: "@/../.storybook/public/qa-icon-software.svg",
      route: "/software"
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Requests",
      description: "Submit requests",
      color: ButtonColors["REQUESTS"],
      icon: "@/../.storybook/public/qa-icon-requests.svg",
      route: "/requests"
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Equipment",
      description: "Access equipment",
      color: ButtonColors["EQUIPMENT"],
      icon: "@/../.storybook/public/qa-icon-equipment.svg",
      route: "/equipment"
    }
  }
}`,...n.parameters?.docs?.source}}};const g=["Default","Login","Software","Requests","Equipment"];export{t as Default,n as Equipment,e as Login,s as Requests,r as Software,g as __namedExportsOrder,m as default};
