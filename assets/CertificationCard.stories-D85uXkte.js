import{d as C,o as f,f as g,g as e,n as p,t as s,l as D,z as _,m as d,p as v}from"./iframe-CYZWmCxV.js";import{g as E}from"./helpers-SDxu2LFN.js";import"./preload-helper-PPVm8Dsz.js";const A={class:"top"},x={class:"type-outer"},S={class:"type"},T={class:"cert-status"},I={class:"title"},b={class:"cert-block"},h={class:"details"},k={class:"details-title"},B={class:"details-title"},l=C({__name:"CertificationCard",props:{card:{default:()=>({type:"",typeColor:"",status:"",title:"",issueDate:"",expiryDate:"",image:""})}},setup(u){const y=d(()=>t.card.type.replace(/_/g," ")),m=d(()=>E(t.card.typeColor)),t=u;return(N,a)=>(f(),g("div",{class:"bottom-layer",style:p({"--after-bg":t.card.typeColor||"#000000"})},[e("div",{class:"outer",style:p({"--card-bg":`url('${t.card.image}')`,"--overlay-color":"rgba(0, 0, 0, 0.28)","--hover-overlay-color":m.value})},[e("div",A,[e("div",x,[e("div",{class:"stub",style:p({backgroundColor:t.card.typeColor})},null,4),e("div",S,s(y.value),1)]),e("div",T,s(t.card.status),1)]),e("div",I,s(t.card.title),1),a[2]||(a[2]=e("hr",{class:"title-line"},null,-1)),e("div",b,[D(_,{icon:"mdi-certificate-outline",class:"cert-icon"})]),e("div",h,[e("p",k,[a[0]||(a[0]=e("span",{class:"label"},"Issued: ",-1)),e("span",null,s(t.card.issueDate),1)]),e("p",B,[a[1]||(a[1]=e("span",{class:"label"},"Expires: ",-1)),e("span",null,s(t.card.expiryDate),1)])])],4)],4))}}),O=v(l,[["__scopeId","data-v-b5f1d93a"]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"CertificationCard",description:"",tags:{},props:[{name:"card",description:"Content of the card",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  type: "",
  typeColor: "",
  status: "",
  title: "",
  issueDate: "",
  expiryDate: "",
  image: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/workshops/CertificationCard.vue"]});const{fn:w}=__STORYBOOK_MODULE_TEST__,q={type:"DEFAULT",typeColor:"#DEDEDE",status:"Active",title:"Default Title",issueDate:"",expiryDate:"",image:""},F={component:O,title:"CertificationCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},r={args:{card:q}},o={args:{card:{type:"EQUIPMENT",typeColor:"#0561AE",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}}},i={args:{card:{type:"Access",typeColor:"#457B38",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}}},n={args:{card:{type:"REQUIRED",typeColor:"#A73325",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}}},c={args:{card:{type:"SKILL",typeColor:"#8A38F5",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    card: CertificationCardData
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      type: "EQUIPMENT",
      typeColor: "#0561AE",
      status: "Active",
      title: "Type of Certification",
      issueDate: "2025-12-31",
      expiryDate: "2026-12-31",
      image: ""
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      type: "Access",
      typeColor: "#457B38",
      status: "Active",
      title: "Type of Certification",
      issueDate: "2025-12-31",
      expiryDate: "2026-12-31",
      image: ""
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      type: "REQUIRED",
      typeColor: "#A73325",
      status: "Active",
      title: "Type of Certification",
      issueDate: "2025-12-31",
      expiryDate: "2026-12-31",
      image: ""
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      type: "SKILL",
      typeColor: "#8A38F5",
      status: "Active",
      title: "Type of Certification",
      issueDate: "2025-12-31",
      expiryDate: "2026-12-31",
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"
    }
  }
}`,...c.parameters?.docs?.source}}};const Q=["Default","Equipment","Access","Required","Skill"];export{i as Access,r as Default,o as Equipment,n as Required,c as Skill,Q as __namedExportsOrder,F as default};
