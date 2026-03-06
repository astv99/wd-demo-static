import{y as q,G as u,C as t,j as p,E as m,B as l}from"./iframe-BYGVuDJG.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const L={class:"hex hex-left",viewBox:"0 0 100 100"},_=["href"],h={class:"text-section"},S={class:"line-top"},y={class:"line-bottom"},w={class:"hex hex-right",viewBox:"0 0 100 100"},d=q({name:"QuickActionButton",__name:"QuickActionButton",props:{btn:{default:()=>({id:"",title:"",description:"",state:"default",color:"#000000",icon:""})},setLogin:{},setSoftware:{},setRequests:{},setEquipment:{}},emits:["set-login","set-software","set-requests","set-equipment"],setup(f,{emit:B}){const s=f;return(D,n)=>(l(),u("button",{class:"custom-button",style:p({backgroundColor:s.btn.color})},[(l(),u("svg",L,[n[0]||(n[0]=t("defs",null,[t("clipPath",{id:"hex-clip"},[t("path",{d:"M28,10 L72,10 L95,50 L72,90 L28,90 L5,50 Z"})])],-1)),t("path",{style:p({fill:s.btn.color}),class:"hex-fill",d:"M28,10 L72,10 L95,50 L72,90 L28,90 L5,50 Z"},null,4),t("image",{href:s.btn.icon,x:"2",y:"3",width:"95",height:"95","clip-path":"url(#hex-clip)"},null,8,_),n[1]||(n[1]=t("path",{class:"hex-partial-border",d:"M28,10 L72,10 L95,50 L72,90 L28,90 L5,50 Z"},null,-1))])),t("div",h,[t("div",S,m(s.btn.title),1),t("div",y,m(s.btn.description),1)]),(l(),u("svg",w,[t("path",{style:p({fill:s.btn.color}),class:"hex-fill",d:"M28,10 L72,10 L95,50 L72,90 L28,90 L5,50 Z"},null,4)]))],4))}}),A=b(d,[["__scopeId","data-v-99031fbc"]]);d.__docgenInfo={name:"QuickActionButton",exportName:"default",displayName:"QuickActionButton",description:"",tags:{},props:[{name:"btn",description:"Composition of the button",required:!0,type:{name:"ButtonData"},defaultValue:{func:!1,value:`() => ({
  id: "",
  title: "",
  description: "",
  state: "default",
  color: "#000000",
  icon: "",
})`}},{name:"setLogin",description:"Event to set the button as Login",required:!0,type:{name:"TSFunctionType"}},{name:"setSoftware",description:"Event to set the button as Software",required:!0,type:{name:"TSFunctionType"}},{name:"setRequests",description:"Event to set the button as Requests",required:!0,type:{name:"TSFunctionType"}},{name:"setEquipment",description:"Event to set the button as Equipment",required:!0,type:{name:"TSFunctionType"}}],events:[{name:"set-login",type:{names:["string"]}},{name:"set-software",type:{names:["string"]}},{name:"set-requests",type:{names:["string"]}},{name:"set-equipment",type:{names:["string"]}}],sourceFiles:["/workspaces/Conductor/ConductorFrontend/conductor-cmsd/src/components/homepage/QuickActionButton.vue"]};const{fn:o}=__STORYBOOK_MODULE_TEST__,E={DEFAULT:"#000000"},g={id:"1",title:"Test Button",description:"Default description",state:"button",events:{setLogin:o(),setSoftware:o(),setRequests:o(),setEquipment:o()},color:E.DEFAULT,icon:""},T={component:A,title:"QuickActionButton",tags:["autodocs"],excludeStories:/.*Data$/,args:{...g.events}},e={args:{btn:g}},a={args:{btn:{...e.args.btn,state:"login",title:"Login",description:"Access your account",color:"#67261E",icon:"/assets/qa-icons-login-sm.png"}}},r={args:{btn:{...e.args.btn,state:"software",title:"Software",description:"Download software",color:"#3A2865",icon:"/assets/qa-icons-software-sm.png"}}},i={args:{btn:{...e.args.btn,state:"requests",title:"Requests",description:"Submit requests",color:"#775A2C",icon:"/assets/qa-icons-requests-sm.png"}}},c={args:{btn:{...e.args.btn,state:"equipment",title:"Equipment",description:"Access equipment",color:"#304D27",icon:"/assets/qa-icons-equipment-sm.png"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    btn: QuickActionButtonData
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      ...Default.args.btn,
      state: "login",
      title: "Login",
      description: "Access your account",
      color: "#67261E",
      // #993F2B
      icon: "/assets/qa-icons-login-sm.png"
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      ...Default.args.btn,
      state: "software",
      title: "Software",
      description: "Download software",
      color: "#3A2865",
      // #5637A9
      icon: "/assets/qa-icons-software-sm.png"
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      ...Default.args.btn,
      state: "requests",
      title: "Requests",
      description: "Submit requests",
      color: "#775A2C",
      // #E2A543
      icon: "/assets/qa-icons-requests-sm.png"
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      ...Default.args.btn,
      state: "equipment",
      title: "Equipment",
      description: "Access equipment",
      color: "#304D27",
      // #52793D
      icon: "/assets/qa-icons-equipment-sm.png"
    }
  }
}`,...c.parameters?.docs?.source}}};const Q=["QuickActionButtonData","Default","Login","Software","Requests","Equipment"];export{e as Default,c as Equipment,a as Login,g as QuickActionButtonData,i as Requests,r as Software,Q as __namedExportsOrder,T as default};
