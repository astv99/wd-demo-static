import{d as g,h as u,g as o,t as p,n as b,o as d}from"./iframe-DAh--HWo.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const _={class:"qabutton-outer"},A={class:"hex hex-left",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100"},h=["fill"],q=["href"],w={class:"text-section"},E={class:"line-top"},S={class:"line-bottom"},l=g({__name:"QuickActionButton",props:{btn:{default:()=>({title:"",description:"",color:"#000000",icon:""})}},setup(m){const t=m;return(L,n)=>(d(),u("div",_,[o("div",{class:"qabutton",style:b({"--qa-start":t.btn.color})},[(d(),u("svg",A,[o("g",null,[o("path",{d:"M40,24 L60,24 A10,10 0 0 1 68,28 L80,48 A10,10 0 0 1 80,52 L68,72 A10,10 0 0 1 60,76 L40,76 A10,10 0 0 1 32,72 L20,52 A10,10 0 0 1 20,48 L32,28 A10,10 0 0 1 40,24 Z",fill:t.btn.color,stroke:"white","stroke-width":"1"},null,8,h),n[0]||(n[0]=o("circle",{cx:"50",cy:"50",r:"20",fill:"white"},null,-1)),o("image",{href:t.btn.icon,x:"35",y:"35",width:"30",height:"30"},null,8,q)])])),o("div",w,[o("div",E,p(t.btn.title),1),o("div",S,p(t.btn.description),1)]),n[1]||(n[1]=o("svg",{class:"hex hex-right",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:`M40,24 
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
          Z`,fill:"#000000",stroke:"white","stroke-width":"0.2","stroke-linecap":"round","stroke-linejoin":"round"})],-1))],4)]))}}),k=f(l,[["__scopeId","data-v-ad2f7121"]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"QuickActionButton",description:"",tags:{},props:[{name:"btn",description:"Composition of the button",required:!0,type:{name:"ButtonData"},defaultValue:{func:!1,value:`() => ({
  title: "",
  description: "",
  color: "#000000",
  icon: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/homepage/QuickActionButton.vue"]});const{fn:D}=__STORYBOOK_MODULE_TEST__,e={DEFAULT:"#000000",LOGIN:"#993F2B",SOFTWARE:"#5637A9",REQUESTS:"#E2A543",EQUIPMENT:"#52793D"},v={title:"Default Title",description:"Default description",color:e.DEFAULT,icon:""},T={component:k,title:"QuickActionButton",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},s={args:{btn:v}},r={args:{btn:{title:"Login",description:"Access your account",color:e.LOGIN,icon:"@/../.storybook/public/qa-icon-login.svg"}}},i={args:{btn:{title:"Software",description:"Download software",color:e.SOFTWARE,icon:"@/../.storybook/public/qa-icon-software.svg"}}},c={args:{btn:{title:"Requests",description:"Submit requests",color:e.REQUESTS,icon:"@/../.storybook/public/qa-icon-requests.svg"}}},a={args:{btn:{title:"Equipment",description:"Access equipment",color:e.EQUIPMENT,icon:"@/../.storybook/public/qa-icon-equipment.svg"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    btn: QuickActionButtonData
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Login",
      description: "Access your account",
      color: ButtonColors["LOGIN"],
      icon: "@/../.storybook/public/qa-icon-login.svg"
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Software",
      description: "Download software",
      color: ButtonColors["SOFTWARE"],
      icon: "@/../.storybook/public/qa-icon-software.svg"
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Requests",
      description: "Submit requests",
      color: ButtonColors["REQUESTS"],
      icon: "@/../.storybook/public/qa-icon-requests.svg"
    }
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    btn: {
      title: "Equipment",
      description: "Access equipment",
      color: ButtonColors["EQUIPMENT"],
      icon: "@/../.storybook/public/qa-icon-equipment.svg"
    }
  }
}`,...a.parameters?.docs?.source}}};const Q=["Default","Login","Software","Requests","Equipment"];export{s as Default,a as Equipment,r as Login,c as Requests,i as Software,Q as __namedExportsOrder,T as default};
