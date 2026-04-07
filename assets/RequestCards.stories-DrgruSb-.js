import{d as A,h as s,g as a,t as r,k as l,F as P,r as E,l as v,o as t,n as q,e as k,i as x}from"./iframe-DAh--HWo.js";import{g as F}from"./helpers-SDxu2LFN.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{i as D}from"./webductorTypes-DbEAYrnH.js";import"./preload-helper-PPVm8Dsz.js";const w={class:"req-info"},N={class:"description"},U={key:0,class:"details-line"},O={key:0,class:"details-title"},B={class:"label"},j={key:1,class:"details"},$={key:1,class:"details-line"},T=A({__name:"RequestDetails",props:{description:{},details:{},examples:{}},setup(n){const d=i=>i?i.length>0:!1;return(i,e)=>(t(),s("div",w,[a("div",N,r(n.description),1),n.details&&n.details.length>0?(t(),s("hr",U)):l("",!0),(t(!0),s(P,null,E(n.details,(o,c)=>(t(),s("div",{key:c,class:"detail-item"},[o&&d(o.content)?(t(),s("p",O,[a("i",{class:v(o?.icon)},null,2),a("span",B,r(o?.label)+":",1)])):l("",!0),o&&d(o.content)?(t(),s("p",j,r(o?.content),1)):l("",!0)]))),128)),n.examples&&n.examples.length>0?(t(),s("hr",$)):l("",!0),e[0]||(e[0]=a("p",{class:"examples"},[a("span",{class:"label"},"Examples:")],-1)),(t(!0),s(P,null,E(n.examples,(o,c)=>(t(),s("div",{key:c,class:"example"},r(o),1))),128))]))}}),M=S(T,[["__scopeId","data-v-3e6db026"]]);T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:"default",displayName:"RequestDetails",description:"",tags:{},props:[{name:"description",required:!1,type:{name:"string"}},{name:"details",required:!1,type:{name:"Array",elements:[{name:`{
  label?: string;
  content?: string;
  icon?: string;
}`}]}},{name:"examples",required:!1,type:{name:"Array",elements:[{name:"string"}]}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/requests/RequestDetails.vue"]});const Q={class:"details-title"},z={class:"label"},L={class:"label-for"},h=A({__name:"StatusDetails",props:{statuses:{}},setup(n){return(d,i)=>(t(!0),s(P,null,E(n.statuses,(e,o)=>(t(),s("p",Q,[a("span",z,r(e?.label)+":",1),a("span",L,r(e?.content),1)]))),256))}}),G=S(h,[["__scopeId","data-v-b6eb5f83"]]);h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:"default",displayName:"StatusDetails",description:"",tags:{},props:[{name:"statuses",required:!1,type:{name:"Array",elements:[{name:`{
  label?: string;
  content?: string;
  icon?: string;
}`}]}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/requests/StatusDetails.vue"]});const V={class:"top"},W={key:0,class:"status-id"},Y={class:"icon-outer"},H={class:"icon"},K={class:"type"},J={class:"title"},R=A({__name:"RequestCards",props:{card:{default:()=>({statusId:"",type:"",typeColor:"",status:"",title:"",details:[],image:""})}},setup(n){const d=x(()=>e.card.type.replace(/_/g," ")),i=x(()=>F(e.card.typeColor)),e=n;return(o,c)=>(t(),s("div",{class:"bottom-layer",style:q({"--after-bg":e.card.typeColor||"#000000"})},[a("div",{class:"outer",style:q({"--card-bg":`url('${e.card.image}')`,"--overlay-color":"rgba(80, 80, 80, 0.28)","--hover-overlay-color":i.value})},[a("div",V,[e.card.statusId?(t(),s("div",W,r(e.card.statusId),1)):l("",!0),a("div",Y,[a("p",H,[a("i",{class:v(e.card.typeIcon),style:q({backgroundColor:e.card.typeColor})},null,6)])]),a("div",K,r(d.value),1),e.card.status?(t(),s("div",{key:1,class:v(["req-status",e.card.statusClass])},r(e.card.status),3)):l("",!0)]),a("div",J,r(e.card.title),1),c[0]||(c[0]=a("hr",{class:"title-line"},null,-1)),e.card.details&&e.card.details.length>0&&!e.card.description?(t(),k(G,{key:0,statuses:e.card.details,class:"status-info"},null,8,["statuses"])):e.card.details&&e.card.details.length>0||e.card.examples&&e.card.examples.length>0||e.card.description?(t(),k(M,{key:1,description:e.card.description,details:e.card.details,examples:e.card.examples,class:"req-info"},null,8,["description","details","examples"])):l("",!0)],4)],4))}}),X=S(R,[["__scopeId","data-v-9f1ec350"]]);R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:"default",displayName:"RequestCards",description:"",tags:{},props:[{name:"card",description:"Content of the card",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  statusId: "",
  type: "",
  typeColor: "",
  status: "",
  title: "",
  details: [],
  image: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/requests/RequestCards.vue"]});const{fn:re}=__STORYBOOK_MODULE_TEST__;let Z="DEFAULT";D(Z);const ee={statusId:"REQ-2026-000",typeIcon:"fa-solid fa-cubes",type:"DEFAULT_TYPE",typeColor:"#000000",status:"Closed",statusClass:"status-default",title:"Default Title",description:"Default description",details:[{label:"Turnaround",content:"N/A"},{label:"Pricing",content:"N/A"},{label:"Assigned To",content:"IT Support"},{label:"Updated Date",content:"2025-12-04"}],examples:[],image:""},le={component:X,title:"RequestCards",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},p={args:{card:ee}},u={args:{card:{typeIcon:"fa-solid fa-wrench",type:"EQUIPMENT",typeColor:"#0561AE",title:"Equipment Repair & Maintenance",description:"Request repairs, calibration, or preventive maintenance for lab equipment.",details:[{label:"Turnaround",content:"3-5 business days",icon:"fa-solid fa-clock"},{label:"Pricing",content:"Free minor repairs, quoted for major work",icon:"fa-solid fa-dollar-sign"}],examples:["3D printer repair","Oscilloscope calibration"],image:""}}},m={args:{card:{typeIcon:"fa-solid fa-wrench",type:"FABRICATION",typeColor:"#457B38",title:"Custom Fabrication",description:"Request custom parts or prototypes manufactured by our skilled technicians.",details:[{label:"Turnaround",content:"3-5 weeks",icon:"fa-solid fa-clock"},{label:"Pricing",content:"Materials + labor ($25/hour)",icon:"fa-solid fa-dollar-sign"}],examples:["Custom Enclosures","Prototype Parts"],image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}},g={args:{card:{typeIcon:"fa-solid fa-tv",type:"IT_SUPPORT",typeColor:"#8A38F5",title:"IT Support",description:"Get help with software installation, troubleshooting, and technical issues.",details:[{label:"Turnaround",content:"1-2 business days",icon:"fa-solid fa-clock"},{label:"Pricing",content:"Free for standard support",icon:"fa-solid fa-dollar-sign"}],examples:["Software installation","Network connectivity"],image:""}}},f={args:{card:{typeIcon:"fa-solid fa-chalkboard-teacher",type:"TRAINING",typeColor:"#EFA030",title:"Training & Consultation",description:"Request specialized training sessions or expert consultation for your projects.",details:[{label:"Turnaround",content:"1-2 weeks",icon:"fa-solid fa-clock"},{label:"Pricing",content:"Free group sessions, $50/hour individual",icon:"fa-solid fa-dollar-sign"}],examples:["CAD training","Project consultation"],image:""}}},y={args:{card:{typeIcon:"fa-solid fa-building",type:"FACILITIES",typeColor:"#A73325",title:"Space Reservation",description:"Reserve project rooms, meeting spaces, or specialized lab areas.",details:[{label:"Turnaround",content:"Immediate",icon:"fa-solid fa-clock"},{label:"Pricing",content:"Free for students, $25/hour for external",icon:"fa-solid fa-dollar-sign"}],examples:["Project room","Meeting space"],image:""}}},b={args:{card:{typeIcon:"fa-solid fa-dollar-sign",type:"PROCUREMENT",typeColor:"#A2613F",title:"Material Procurement",description:"Request special materials, components, or supplies for your projects.",details:[{label:"Turnaround",content:"1-4 weeks",icon:"fa-solid fa-clock"},{label:"Pricing",content:"Cost + 10% handling fee",icon:"fa-solid fa-dollar-sign"},{label:"Assigned To",content:""},{label:"Updated Date",content:""}],examples:["Electronic components","Raw materials"],image:""}}},C={args:{card:{statusId:"REQ-2026-001",typeIcon:"fa-solid fa-wrench",type:"EQUIPMENT",typeColor:"#0561AE",status:"In Progress",statusClass:"status-in-progress",title:"Ultimaker S3 Nozzle Replacement",details:[{label:"Assigned To",content:"Tech Team"},{label:"Updated Date",content:"2025-12-04"}],image:""}}},I={args:{card:{statusId:"REQ-2026-002",typeIcon:"fa-solid fa-tv",type:"IT_SUPPORT",typeColor:"#8A38F5",status:"Completed",statusClass:"status-completed",title:"MATLAB License Installation",details:[{label:"Assigned To",content:"IT Support"},{label:"Updated Date",content:"2025-12-04"}],image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}},_={args:{card:{statusId:"REQ-2026-003",typeIcon:"fa-regular fa-lightbulb",type:"FABRICATION",typeColor:"#457B38",status:"Pending",statusClass:"status-pending",title:"Custom PCB Enclosure",details:[{label:"Assigned To",content:"Fabrication"},{label:"Updated Date",content:"2025-12-07"}],image:""}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    card: RequestCardsData
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "fa-solid fa-wrench",
      type: "EQUIPMENT",
      typeColor: "#0561AE",
      title: "Equipment Repair & Maintenance",
      description: "Request repairs, calibration, or preventive maintenance for lab equipment.",
      details: [{
        label: "Turnaround",
        content: "3-5 business days",
        icon: "fa-solid fa-clock"
      }, {
        label: "Pricing",
        content: "Free minor repairs, quoted for major work",
        icon: "fa-solid fa-dollar-sign"
      }],
      examples: ["3D printer repair", "Oscilloscope calibration"],
      image: ""
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "fa-solid fa-wrench",
      type: "FABRICATION",
      typeColor: "#457B38",
      title: "Custom Fabrication",
      description: "Request custom parts or prototypes manufactured by our skilled technicians.",
      details: [{
        label: "Turnaround",
        content: "3-5 weeks",
        icon: "fa-solid fa-clock"
      }, {
        label: "Pricing",
        content: "Materials + labor ($25/hour)",
        icon: "fa-solid fa-dollar-sign"
      }],
      examples: ["Custom Enclosures", "Prototype Parts"],
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "fa-solid fa-tv",
      type: "IT_SUPPORT",
      typeColor: "#8A38F5",
      title: "IT Support",
      description: "Get help with software installation, troubleshooting, and technical issues.",
      details: [{
        label: "Turnaround",
        content: "1-2 business days",
        icon: "fa-solid fa-clock"
      }, {
        label: "Pricing",
        content: "Free for standard support",
        icon: "fa-solid fa-dollar-sign"
      }],
      examples: ["Software installation", "Network connectivity"],
      image: ""
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "fa-solid fa-chalkboard-teacher",
      type: "TRAINING",
      typeColor: "#EFA030",
      title: "Training & Consultation",
      description: "Request specialized training sessions or expert consultation for your projects.",
      details: [{
        label: "Turnaround",
        content: "1-2 weeks",
        icon: "fa-solid fa-clock"
      }, {
        label: "Pricing",
        content: "Free group sessions, $50/hour individual",
        icon: "fa-solid fa-dollar-sign"
      }],
      examples: ["CAD training", "Project consultation"],
      image: ""
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "fa-solid fa-building",
      type: "FACILITIES",
      typeColor: "#A73325",
      title: "Space Reservation",
      description: "Reserve project rooms, meeting spaces, or specialized lab areas.",
      details: [{
        label: "Turnaround",
        content: "Immediate",
        icon: "fa-solid fa-clock"
      }, {
        label: "Pricing",
        content: "Free for students, $25/hour for external",
        icon: "fa-solid fa-dollar-sign"
      }],
      examples: ["Project room", "Meeting space"],
      image: ""
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "fa-solid fa-dollar-sign",
      type: "PROCUREMENT",
      typeColor: "#A2613F",
      title: "Material Procurement",
      description: "Request special materials, components, or supplies for your projects.",
      details: [{
        label: "Turnaround",
        content: "1-4 weeks",
        icon: "fa-solid fa-clock"
      }, {
        label: "Pricing",
        content: "Cost + 10% handling fee",
        icon: "fa-solid fa-dollar-sign"
      }, {
        label: "Assigned To",
        content: ""
      }, {
        label: "Updated Date",
        content: ""
      }],
      examples: ["Electronic components", "Raw materials"],
      image: ""
    }
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      statusId: "REQ-2026-001",
      typeIcon: "fa-solid fa-wrench",
      type: "EQUIPMENT",
      typeColor: "#0561AE",
      status: "In Progress",
      statusClass: "status-in-progress",
      title: "Ultimaker S3 Nozzle Replacement",
      details: [{
        label: "Assigned To",
        content: "Tech Team"
      }, {
        label: "Updated Date",
        content: "2025-12-04"
      }],
      image: ""
    }
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      statusId: "REQ-2026-002",
      typeIcon: "fa-solid fa-tv",
      type: "IT_SUPPORT",
      typeColor: "#8A38F5",
      status: "Completed",
      statusClass: "status-completed",
      title: "MATLAB License Installation",
      details: [{
        label: "Assigned To",
        content: "IT Support"
      }, {
        label: "Updated Date",
        content: "2025-12-04"
      }],
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"
    }
  }
}`,...I.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      statusId: "REQ-2026-003",
      typeIcon: "fa-regular fa-lightbulb",
      type: "FABRICATION",
      typeColor: "#457B38",
      status: "Pending",
      statusClass: "status-pending",
      title: "Custom PCB Enclosure",
      details: [{
        label: "Assigned To",
        content: "Fabrication"
      }, {
        label: "Updated Date",
        content: "2025-12-07"
      }],
      image: ""
    }
  }
}`,..._.parameters?.docs?.source}}};const ie=["Default","RequestEquipment","RequestFabrication","RequestITSupport","RequestTraining","RequestFacilities","RequestProcurement","StatusInProgress","StatusCompleted","StatusPending"];export{p as Default,u as RequestEquipment,m as RequestFabrication,y as RequestFacilities,g as RequestITSupport,b as RequestProcurement,f as RequestTraining,I as StatusCompleted,C as StatusInProgress,_ as StatusPending,ie as __namedExportsOrder,le as default};
