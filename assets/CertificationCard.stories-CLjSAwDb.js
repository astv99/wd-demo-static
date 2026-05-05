import{d as f,o as g,r as C,i as e,ao as u,t as s,g as D,as as v,z as p,ap as _}from"./iframe-5H8Udzkd.js";import{g as E}from"./helpers-SDxu2LFN.js";import"./preload-helper-PPVm8Dsz.js";const A={class:"top"},x={class:"type-outer"},S={class:"type"},T={class:"cert-status"},q={class:"title"},b={class:"cert-block"},I={class:"details"},h={class:"details-title"},V={class:"details-title"},c=f({__name:"CertificationCard",props:{type:{default:""},typeColor:{default:""},status:{default:""},title:{default:""},issueDate:{default:""},expiryDate:{default:""},image:{default:""}},setup(d){const m=p(()=>t.type.replace(/_/g," ")),y=p(()=>E(t.typeColor)),t=d;return(O,a)=>(g(),C("div",{class:"bottom-layer",style:u({"--after-bg":t.typeColor||"#000000"})},[e("div",{class:"outer",style:u({"--card-bg":`url('${t.image}')`,"--overlay-color":"rgba(0, 0, 0, 0.28)","--hover-overlay-color":y.value})},[e("div",A,[e("div",x,[e("div",{class:"stub",style:u({backgroundColor:t.typeColor})},null,4),e("div",S,s(m.value),1)]),e("div",T,s(t.status),1)]),e("div",q,s(t.title),1),a[2]||(a[2]=e("hr",{class:"title-line"},null,-1)),e("div",b,[D(v,{icon:"mdi-certificate-outline",class:"cert-icon"})]),e("div",I,[e("p",h,[a[0]||(a[0]=e("span",{class:"label"},"Issued: ",-1)),e("span",null,s(t.issueDate),1)]),e("p",V,[a[1]||(a[1]=e("span",{class:"label"},"Expires: ",-1)),e("span",null,s(t.expiryDate),1)])])],4)],4))}}),k=_(c,[["__scopeId","data-v-60e2696b"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"CertificationCard",description:"",tags:{},props:[{name:"type",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"typeColor",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"status",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"title",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"issueDate",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"expiryDate",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"image",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/workshops/CertificationCard.vue"]});const{fn:U}=__STORYBOOK_MODULE_TEST__,B={type:"DEFAULT",typeColor:"#DEDEDE",status:"Active",title:"Default Title",issueDate:"",expiryDate:"",image:""},w={component:k,title:"CertificationCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},r={args:{...B}},o={args:{type:"EQUIPMENT",typeColor:"#0561AE",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}},i={args:{type:"Access",typeColor:"#457B38",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}},n={args:{type:"REQUIRED",typeColor:"#A73325",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}},l={args:{type:"SKILL",typeColor:"#8A38F5",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...CertificationCardData
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "EQUIPMENT",
    typeColor: "#0561AE",
    status: "Active",
    title: "Type of Certification",
    issueDate: "2025-12-31",
    expiryDate: "2026-12-31",
    image: ""
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: "Access",
    typeColor: "#457B38",
    status: "Active",
    title: "Type of Certification",
    issueDate: "2025-12-31",
    expiryDate: "2026-12-31",
    image: ""
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "REQUIRED",
    typeColor: "#A73325",
    status: "Active",
    title: "Type of Certification",
    issueDate: "2025-12-31",
    expiryDate: "2026-12-31",
    image: ""
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: "SKILL",
    typeColor: "#8A38F5",
    status: "Active",
    title: "Type of Certification",
    issueDate: "2025-12-31",
    expiryDate: "2026-12-31",
    image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"
  }
}`,...l.parameters?.docs?.source}}};const F=["Default","Equipment","Access","Required","Skill"];export{i as Access,r as Default,o as Equipment,n as Required,l as Skill,F as __namedExportsOrder,w as default};
