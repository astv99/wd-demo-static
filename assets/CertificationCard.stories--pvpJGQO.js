import{d as g,h as C,g as e,n as d,t as r,k as u,o as D}from"./iframe-Cuo1OJfX.js";import{h as _}from"./helpers-DGpkKApG.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const E={class:"top"},x={class:"type-outer"},A={class:"type"},b={class:"cert-status"},T={class:"title"},S={class:"details"},I={class:"details-title"},h={class:"details-title"},p=g({__name:"CertificationCard",props:{card:{default:()=>({type:"Default",typeColor:"",status:"",title:"",issueDate:"",expiryDate:"",image:""})}},setup(y){const m=u(()=>t.card.type.replace(/_/g," ")),f=u(()=>{const s=_(t.card.typeColor);return s?`rgba(${s.r}, ${s.g}, ${s.b}, 0.35)`:"rgba(0, 0, 0, 0.35)"}),t=y;return(s,a)=>(D(),C("div",{class:"bottom-layer",style:d({"--after-bg":t.card.typeColor||"#000000"})},[e("div",{class:"outer",style:d({"--card-bg":`url('${t.card.image}')`,"--overlay-color":"rgba(0, 0, 0, 0.28)","--hover-overlay-color":f.value})},[e("div",E,[e("div",x,[e("div",{class:"stub",style:d({backgroundColor:t.card.typeColor})},null,4),e("div",A,r(m.value),1)]),e("div",b,r(t.card.status),1)]),e("div",T,r(t.card.title),1),a[2]||(a[2]=e("hr",{class:"title-line"},null,-1)),a[3]||(a[3]=e("div",{class:"cert-icon"},[e("i",{class:"fa-solid fa-award fa-3x"})],-1)),e("div",S,[e("p",I,[a[0]||(a[0]=e("span",{class:"label"},"Issued: ",-1)),e("span",null,r(t.card.issueDate),1)]),e("p",h,[a[1]||(a[1]=e("span",{class:"label"},"Expires: ",-1)),e("span",null,r(t.card.expiryDate),1)])])],4)],4))}}),k=v(p,[["__scopeId","data-v-3d2bb75c"]]);p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"CertificationCard",description:"",tags:{},props:[{name:"card",description:"Content of the card",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  type: "Default" as (typeof CertificateTypes)[number],
  typeColor: "",
  status: "",
  title: "",
  issueDate: "",
  expiryDate: "",
  image: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/workshops/CertificationCard.vue"]});const{fn:N}=__STORYBOOK_MODULE_TEST__,B={type:"DEFAULT",typeColor:"#DEDEDE",status:"Active",title:"Default Title",issueDate:"",expiryDate:"",image:""},U={component:k,title:"CertificationCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},o={args:{card:B}},i={args:{card:{type:"EQUIPMENT",typeColor:"#0561AE",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}}},n={args:{card:{type:"Access",typeColor:"#457B38",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}}},c={args:{card:{type:"REQUIRED",typeColor:"#A73325",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:""}}},l={args:{card:{type:"SKILL",typeColor:"#8A38F5",status:"Active",title:"Type of Certification",issueDate:"2025-12-31",expiryDate:"2026-12-31",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    card: CertificationCardData
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const w=["CertificationCardData","Default","Equipment","Access","Required","Skill"];export{n as Access,B as CertificationCardData,o as Default,i as Equipment,c as Required,l as Skill,w as __namedExportsOrder,U as default};
