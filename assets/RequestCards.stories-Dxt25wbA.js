import{d as h,h as n,g as s,t as a,i,n as I,j as _,F as x,r as k,k as c,o}from"./iframe-Cuo1OJfX.js";import{R as q,i as N}from"./types-CQl_3gJK.js";import{h as U}from"./helpers-DGpkKApG.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const O={class:"top"},B={key:0,class:"status-id"},j={class:"icon-outer"},M={class:"icon"},L={class:"type"},$={class:"title"},Q={key:0,class:"req-info"},z={class:"description"},G={class:"details"},Y={class:"details"},V={key:1,class:"status-info"},Z={key:0,class:"details-title"},K={key:1,class:"details-title"},E=h({__name:"RequestCards",props:{card:{default:()=>({statusId:"",type:"DEFAULT_TYPE",typeColor:"",status:"",title:"",turnaround:"",pricing:"",description:"",assignedTo:"",updatedDate:"",examples:[],image:""})}},setup(S){const P=c(()=>{const r=e.card.type.toUpperCase().replace(/[^A-Z0-9]+/g,"_").replace(/^_+|_+$/g,"");return q[r]??q.DEFAULT_TYPE}),A=c(()=>e.card.type.replace(/_/g," ")),b=c(()=>{const r=U(e.card.typeColor);return r?`rgba(${r.r}, ${r.g}, ${r.b}, 0.35)`:"rgba(0, 0, 0, 0.35)"}),f={OPEN:"status-open",IN_PROGRESS:"status-in-progress",COMPLETED:"status-completed",PENDING:"status-pending",DEFAULT:"status-default"},F=c(()=>{const r=e.card.status?.trim().toUpperCase().replace(/[^A-Z0-9]+/g,"_")??"DEFAULT";return f[r]??f.DEFAULT}),e=S;return(r,t)=>(o(),n("div",{class:"bottom-layer",style:I({"--after-bg":e.card.typeColor||"#000000"})},[s("div",{class:"outer",style:I({"--card-bg":`url('${e.card.image}')`,"--overlay-color":"rgba(0, 0, 0, 0.28)","--hover-overlay-color":b.value})},[s("div",O,[e.card.statusId?(o(),n("div",B,a(e.card.statusId),1)):i("",!0),s("div",j,[s("p",M,[s("i",{class:_(P.value),style:I({backgroundColor:e.card.typeColor})},null,6)])]),s("div",L,a(A.value),1),e.card.status?(o(),n("div",{key:1,class:_(["req-status",F.value])},a(e.card.status),3)):i("",!0)]),s("div",$,a(e.card.title),1),t[7]||(t[7]=s("hr",{class:"title-line"},null,-1)),e.card.description||e.card.turnaround||e.card.pricing||e.card.examples&&e.card.examples.length>0?(o(),n("div",Q,[s("div",z,a(e.card.description),1),t[0]||(t[0]=s("hr",{class:"details-line"},null,-1)),t[1]||(t[1]=s("p",{class:"details-title"},[s("i",{class:"fa-solid fa-clock"}),s("span",{class:"label"},"Turnaround:")],-1)),s("p",G,a(e.card.turnaround),1),t[2]||(t[2]=s("p",{class:"details-title"},[s("i",{class:"fa-solid fa-dollar-sign"}),s("span",{class:"label"},"Pricing:")],-1)),s("p",Y,a(e.card.pricing),1),t[3]||(t[3]=s("hr",{class:"details-line"},null,-1)),t[4]||(t[4]=s("p",{class:"examples"},[s("span",{class:"label"},"Examples:")],-1)),(o(!0),n(x,null,k(e.card.examples,(v,D)=>(o(),n("div",{key:D,class:"example"},a(v),1))),128))])):i("",!0),e.card.statusId?(o(),n("div",V,[e.card.assignedTo?(o(),n("p",Z,[t[5]||(t[5]=s("span",{class:"label"},"Assigned To: ",-1)),s("span",null,a(e.card.assignedTo),1)])):i("",!0),e.card.updatedDate?(o(),n("p",K,[t[6]||(t[6]=s("span",{class:"label"},"Updated: ",-1)),s("span",null,a(e.card.updatedDate),1)])):i("",!0)])):i("",!0)],4)],4))}}),W=w(E,[["__scopeId","data-v-98f29fc8"]]);E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:"default",displayName:"RequestCards",description:"",tags:{},props:[{name:"card",description:"Content of the card",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  statusId: "",
  type: "DEFAULT_TYPE" as (typeof RequestTypes)[number],
  typeColor: "",
  status: "",
  title: "",
  turnaround: "",
  pricing: "",
  description: "",
  assignedTo: "",
  updatedDate: "",
  examples: [],
  image: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/requests/RequestCards.vue"]});const{fn:re}=__STORYBOOK_MODULE_TEST__;let H="DEFAULT";N(H);const J={statusId:"REQ-2026-000",type:"DEFAULT_TYPE",typeColor:"#000000",status:"Closed",title:"Default Title",assignedTo:"",updatedDate:"",image:"",examples:[]},ne={component:W,title:"RequestCards",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},p={args:{card:J}},l={args:{card:{type:"EQUIPMENT",typeColor:"#0561AE",title:"Equipment Repair & Maintenance",description:"Request repairs, calibration, or preventive maintenance for lab equipment.",turnaround:"3-5 business days",pricing:"Free minor repairs, quoted for major work",examples:["3D printer repair","Oscilloscope calibration"],image:""}}},d={args:{card:{type:"FABRICATION",typeColor:"#457B38",title:"Custom Fabrication",description:"Request custom parts or prototypes manufactured by our skilled technicians.",turnaround:"3-5 weeks",pricing:"Materials + labor ($25/hour)",examples:["Custom Enclosures","Prototype Parts"],image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}},u={args:{card:{type:"IT_SUPPORT",typeColor:"#8A38F5",title:"IT Support",description:"Get help with software installation, troubleshooting, and technical issues.",turnaround:"1-2 business days",pricing:"Free for standard support",examples:["Software installation","Network connectivity"],image:""}}},m={args:{card:{type:"TRAINING",typeColor:"#EFA030",title:"Training & Consultation",description:"Request specialized training sessions or expert consultation for your projects.",turnaround:"1-2 weeks",pricing:"Free group sessions, $50/hour individual",examples:["CAD training","Project consultation"],image:""}}},g={args:{card:{type:"FACILITIES",typeColor:"#A73325",title:"Space Reservation",description:"Reserve project rooms, meeting spaces, or specialized lab areas.",turnaround:"Immediate",pricing:"Free for students, $25/hour for external",examples:["Project room","Meeting space"],image:""}}},y={args:{card:{type:"PROCUREMENT",typeColor:"#A2613F",title:"Material Procurement",description:"Request special materials, components, or supplies for your projects.",turnaround:"1-4 weeks",pricing:"Cost + 10% handling fee",examples:["Electronic components","Raw materials"],image:""}}},C={args:{card:{statusId:"REQ-2026-001",type:"EQUIPMENT",typeColor:"#0561AE",status:"In Progress",title:"Ultimaker S3 Nozzle Replacement",assignedTo:"Tech Team",updatedDate:"2025-12-04",image:""}}},T={args:{card:{statusId:"REQ-2026-002",type:"IT_SUPPORT",typeColor:"#8A38F5",status:"Completed",title:"MATLAB License Installation",assignedTo:"IT Support",updatedDate:"2025-12-04",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}},R={args:{card:{statusId:"REQ-2026-003",type:"FABRICATION",typeColor:"#457B38",status:"Pending",title:"Custom PCB Enclosure",assignedTo:"Fabrication",updatedDate:"2025-12-04",image:""}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    card: RequestCardsData
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      type: "EQUIPMENT",
      typeColor: "#0561AE",
      title: "Equipment Repair & Maintenance",
      description: "Request repairs, calibration, or preventive maintenance for lab equipment.",
      turnaround: "3-5 business days",
      pricing: "Free minor repairs, quoted for major work",
      examples: ["3D printer repair", "Oscilloscope calibration"],
      image: ""
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      type: "FABRICATION",
      typeColor: "#457B38",
      title: "Custom Fabrication",
      description: "Request custom parts or prototypes manufactured by our skilled technicians.",
      turnaround: "3-5 weeks",
      pricing: "Materials + labor ($25/hour)",
      examples: ["Custom Enclosures", "Prototype Parts"],
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      type: "IT_SUPPORT",
      typeColor: "#8A38F5",
      title: "IT Support",
      description: "Get help with software installation, troubleshooting, and technical issues.",
      turnaround: "1-2 business days",
      pricing: "Free for standard support",
      examples: ["Software installation", "Network connectivity"],
      image: ""
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      type: "TRAINING",
      typeColor: "#EFA030",
      title: "Training & Consultation",
      description: "Request specialized training sessions or expert consultation for your projects.",
      turnaround: "1-2 weeks",
      pricing: "Free group sessions, $50/hour individual",
      examples: ["CAD training", "Project consultation"],
      image: ""
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      type: "FACILITIES",
      typeColor: "#A73325",
      title: "Space Reservation",
      description: "Reserve project rooms, meeting spaces, or specialized lab areas.",
      turnaround: "Immediate",
      pricing: "Free for students, $25/hour for external",
      examples: ["Project room", "Meeting space"],
      image: ""
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      type: "PROCUREMENT",
      typeColor: "#A2613F",
      title: "Material Procurement",
      description: "Request special materials, components, or supplies for your projects.",
      turnaround: "1-4 weeks",
      pricing: "Cost + 10% handling fee",
      examples: ["Electronic components", "Raw materials"],
      image: ""
    }
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      statusId: "REQ-2026-001",
      type: "EQUIPMENT",
      typeColor: "#0561AE",
      status: "In Progress",
      title: "Ultimaker S3 Nozzle Replacement",
      assignedTo: "Tech Team",
      updatedDate: "2025-12-04",
      image: ""
    }
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      statusId: "REQ-2026-002",
      type: "IT_SUPPORT",
      typeColor: "#8A38F5",
      status: "Completed",
      title: "MATLAB License Installation",
      assignedTo: "IT Support",
      updatedDate: "2025-12-04",
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"
    }
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      statusId: "REQ-2026-003",
      type: "FABRICATION",
      typeColor: "#457B38",
      status: "Pending",
      title: "Custom PCB Enclosure",
      assignedTo: "Fabrication",
      updatedDate: "2025-12-04",
      image: ""
    }
  }
}`,...R.parameters?.docs?.source}}};const oe=["RequestCardsData","Default","RequestEquipment","RequestFabrication","RequestITSupport","RequestTraining","RequestFacilities","RequestProcurement","StatusInProgress","StatusCompleted","StatusPending"];export{p as Default,J as RequestCardsData,l as RequestEquipment,d as RequestFabrication,g as RequestFacilities,u as RequestITSupport,y as RequestProcurement,m as RequestTraining,T as StatusCompleted,C as StatusInProgress,R as StatusPending,oe as __namedExportsOrder,ne as default};
