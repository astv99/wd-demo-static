import{d as f,h as C,g as e,n as p,t as s,i as d,o as g}from"./iframe-C9Iv9W0s.js";import{g as D}from"./helpers-SDxu2LFN.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const v={class:"top"},E={class:"type-outer"},x={class:"type"},A={class:"cert-status"},S={class:"title"},T={class:"details"},I={class:"details-title"},b={class:"details-title"},l=f({__name:"CertificationCard",props:{card:{default:()=>({type:"",typeColor:"",status:"",title:"",issueDate:"",expiryDate:"",image:""})}},setup(u){const y=d(()=>t.card.type.replace(/_/g," ")),m=d(()=>D(t.card.typeColor)),t=u;return(O,a)=>(g(),C("div",{class:"bottom-layer",style:p({"--after-bg":t.card.typeColor||"#000000"})},[e("div",{class:"outer",style:p({"--card-bg":`url('${t.card.image}')`,"--overlay-color":"rgba(0, 0, 0, 0.28)","--hover-overlay-color":m.value})},[e("div",v,[e("div",E,[e("div",{class:"stub",style:p({backgroundColor:t.card.typeColor})},null,4),e("div",x,s(y.value),1)]),e("div",A,s(t.card.status),1)]),e("div",S,s(t.card.title),1),a[2]||(a[2]=e("hr",{class:"title-line"},null,-1)),a[3]||(a[3]=e("div",{class:"cert-icon"},[e("i",{class:"fa-solid fa-award fa-3x"})],-1)),e("div",T,[e("p",I,[a[0]||(a[0]=e("span",{class:"label"},"Issued: ",-1)),e("span",null,s(t.card.issueDate),1)]),e("p",b,[a[1]||(a[1]=e("span",{class:"label"},"Expires: ",-1)),e("span",null,s(t.card.expiryDate),1)])])],4)],4))}}),h=_(l,[["__scopeId","data-v-80ae02d0"]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"CertificationCard",description:"",tags:{},props:[{name:"card",description:"Content of the card",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  type: "",
  typeColor: "",
  status: "",
  title: "",
  issueDate: "",
  expiryDate: "",
  image: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/workshops/CertificationCard.vue"]});const{fn:N}=__STORYBOOK_MODULE_TEST__,B={type:"DEFAULT",typeColor:"#DEDEDE",status:"Active",title:"Default Title",issueDate:"",expiryDate:"",image:""},U={component:h,title:"CertificationCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},r={args:{card:B}},o={args:{card:{type:"EQUIPMENT",typeColor:"#0561AE",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}}},i={args:{card:{type:"Access",typeColor:"#457B38",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}}},n={args:{card:{type:"REQUIRED",typeColor:"#A73325",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}}},c={args:{card:{type:"SKILL",typeColor:"#8A38F5",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const w=["Default","Equipment","Access","Required","Skill"];export{i as Access,r as Default,o as Equipment,n as Required,c as Skill,w as __namedExportsOrder,U as default};
