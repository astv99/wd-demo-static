import{d as g,h as u,g as t,t as p,n as f,o as d}from"./iframe-C9Iv9W0s.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const A={class:"qabutton-outer"},h={class:"hex hex-left",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100"},q=["fill"],w=["href"],E={class:"text-section"},b={class:"line-top"},S={class:"line-bottom"},l=g({__name:"QuickActionButton",props:{btn:{default:()=>({title:"",description:"",color:"#000000",icon:""})}},setup(m){const o=m;return(B,s)=>(d(),u("div",A,[t("div",{class:"qabutton",style:f({"--qa-start":o.btn.color})},[(d(),u("svg",h,[t("g",null,[t("path",{d:"M40,24 L60,24 A10,10 0 0 1 68,28 L80,48 A10,10 0 0 1 80,52 L68,72 A10,10 0 0 1 60,76 L40,76 A10,10 0 0 1 32,72 L20,52 A10,10 0 0 1 20,48 L32,28 A10,10 0 0 1 40,24 Z",fill:o.btn.color,stroke:"white","stroke-width":"1"},null,8,q),s[0]||(s[0]=t("circle",{cx:"50",cy:"50",r:"20",fill:"white"},null,-1)),t("image",{href:o.btn.icon,x:"35",y:"35",width:"30",height:"30"},null,8,w)])])),t("div",E,[t("div",b,p(o.btn.title),1),t("div",S,p(o.btn.description),1)]),s[1]||(s[1]=t("svg",{class:"hex hex-right",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:`M40,24 
          L60,24 
          A10,10 0 0 1 68,28
          L80,48 
          A10,10 0 0 1 80,52
          L68,72 
          A10,10 0 0 1 60,76
          L40,76 
          A10,10 0 0 1 32,72
          L20,52 
          A10,10 0 0 1 20,48
          L32,28 
          A10,10 0 0 1 40,24 
          Z`,fill:"#000000",stroke:"white","stroke-width":"0.2","stroke-linecap":"round","stroke-linejoin":"round"})],-1))],4)]))}}),v=_(l,[["__scopeId","data-v-ad2f7121"]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"QuickActionButton",description:"",tags:{},props:[{name:"btn",description:"Composition of the button",required:!0,type:{name:"ButtonData"},defaultValue:{func:!1,value:`() => ({
  title: "",
  description: "",
  color: "#000000",
  icon: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/homepage/QuickActionButton.vue"]});const{fn:T}=__STORYBOOK_MODULE_TEST__,e={DEFAULT:"#000000",LOGIN:"#993F2B",SOFTWARE:"#5637A9",REQUESTS:"#E2A543",EQUIPMENT:"#52793D"},L={title:"Default Title",description:"Default description",color:e.DEFAULT,icon:""},Q={component:v,title:"QuickActionButton",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},n={args:{btn:L}},r={args:{btn:{title:"Login",description:"Access your account",color:e.LOGIN,icon:"../assets/qa-icon-login.svg"}}},i={args:{btn:{title:"Software",description:"Download software",color:e.SOFTWARE,icon:"../assets/qa-icon-software.svg"}}},c={args:{btn:{title:"Requests",description:"Submit requests",color:e.REQUESTS,icon:"../assets/qa-icon-requests.svg"}}},a={args:{btn:{title:"Equipment",description:"Access equipment",color:e.EQUIPMENT,icon:"../assets/qa-icon-equipment.svg"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    btn: QuickActionButtonData
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Login",
      description: "Access your account",
      color: ButtonColors["LOGIN"],
      icon: "../assets/qa-icon-login.svg"
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Software",
      description: "Download software",
      color: ButtonColors["SOFTWARE"],
      icon: "../assets/qa-icon-software.svg"
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Requests",
      description: "Submit requests",
      color: ButtonColors["REQUESTS"],
      icon: "../assets/qa-icon-requests.svg"
    }
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Equipment",
      description: "Access equipment",
      color: ButtonColors["EQUIPMENT"],
      icon: "../assets/qa-icon-equipment.svg"
    }
  }
}`,...a.parameters?.docs?.source}}};const O=["Default","Login","Software","Requests","Equipment"];export{n as Default,a as Equipment,r as Login,c as Requests,i as Software,O as __namedExportsOrder,Q as default};
