import{d as E,o as t,f as n,g as s,t as r,k as i,l as P,m as A,y as x,A as D,s as S,p as q,K as F,n as k,q as v}from"./iframe-C1zJSMRn.js";import{g as N}from"./helpers-SDxu2LFN.js";import{i as w}from"./webductorTypes-DbEAYrnH.js";import"./preload-helper-PPVm8Dsz.js";const U={class:"req-info"},O={class:"description"},B={key:0,class:"details-line"},j={key:0,class:"details-title"},$={class:"label"},M={key:1,class:"details"},Q={key:1,class:"details-line"},f=E({__name:"RequestDetails",props:{description:{},details:{},examples:{}},setup(a){const d=c=>c?c.length>0:!1;return(c,e)=>(t(),n("div",U,[s("div",O,r(a.description),1),a.details&&a.details.length>0?(t(),n("hr",B)):i("",!0),(t(!0),n(P,null,A(a.details,(o,l)=>(t(),n("div",{key:l,class:"detail-item"},[o&&d(o.content)?(t(),n("p",j,[x(D,{icon:o?.icon,class:"detail-icon"},null,8,["icon"]),s("span",$,r(o?.label)+":",1)])):i("",!0),o&&d(o.content)?(t(),n("p",M,r(o?.content),1)):i("",!0)]))),128)),a.examples&&a.examples.length>0?(t(),n("hr",Q)):i("",!0),e[0]||(e[0]=s("p",{class:"examples"},[s("span",{class:"label"},"Examples:")],-1)),(t(!0),n(P,null,A(a.examples,(o,l)=>(t(),n("div",{key:l,class:"example"},r(o),1))),128))]))}}),z=S(f,[["__scopeId","data-v-fb6bff6f"]]);f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"RequestDetails",description:"",tags:{},props:[{name:"description",required:!1,type:{name:"string"}},{name:"details",required:!1,type:{name:"Array",elements:[{name:`{
  label?: string;
  content?: string;
  icon?: string;
}`}]}},{name:"examples",required:!1,type:{name:"Array",elements:[{name:"string"}]}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/requests/RequestDetails.vue"]});const L={class:"details-title"},V={class:"label"},G={class:"label-for"},R=E({__name:"StatusDetails",props:{statuses:{}},setup(a){return(d,c)=>(t(!0),n(P,null,A(a.statuses,(e,o)=>(t(),n("p",L,[s("span",V,r(e?.label)+":",1),s("span",G,r(e?.content),1)]))),256))}}),W=S(R,[["__scopeId","data-v-b6eb5f83"]]);R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:"default",displayName:"StatusDetails",description:"",tags:{},props:[{name:"statuses",required:!1,type:{name:"Array",elements:[{name:`{
  label?: string;
  content?: string;
  icon?: string;
}`}]}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/requests/StatusDetails.vue"]});const K={class:"top"},Y={key:0,class:"status-id"},H={class:"icon-outer"},J={class:"icon"},X={class:"type"},Z={class:"title"},h=E({__name:"RequestCards",props:{card:{default:()=>({statusId:"",type:"",typeColor:"",status:"",title:"",details:[],image:""})}},setup(a){const d=v(()=>e.card.type.replace(/_/g," ")),c=v(()=>N(e.card.typeColor)),e=a;return(o,l)=>(t(),n("div",{class:"bottom-layer",style:q({"--after-bg":e.card.typeColor||"#000000"})},[s("div",{class:"outer",style:q({"--card-bg":`url('${e.card.image}')`,"--overlay-color":"rgba(80, 80, 80, 0.28)","--hover-overlay-color":c.value})},[s("div",K,[e.card.statusId?(t(),n("div",Y,r(e.card.statusId),1)):i("",!0),s("div",H,[s("p",J,[x(D,{icon:e.card.typeIcon,class:"type-icon",style:q({backgroundColor:e.card.typeColor})},null,8,["icon","style"])])]),s("div",X,r(d.value),1),e.card.status?(t(),n("div",{key:1,class:F(["req-status",e.card.statusClass])},r(e.card.status),3)):i("",!0)]),s("div",Z,r(e.card.title),1),l[0]||(l[0]=s("hr",{class:"title-line"},null,-1)),e.card.details&&e.card.details.length>0&&!e.card.description?(t(),k(W,{key:0,statuses:e.card.details,class:"status-info"},null,8,["statuses"])):e.card.details&&e.card.details.length>0||e.card.examples&&e.card.examples.length>0||e.card.description?(t(),k(z,{key:1,description:e.card.description,details:e.card.details,examples:e.card.examples,class:"req-info"},null,8,["description","details","examples"])):i("",!0)],4)],4))}}),ee=S(h,[["__scopeId","data-v-478214fe"]]);h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:"default",displayName:"RequestCards",description:"",tags:{},props:[{name:"card",description:"Content of the card",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  statusId: "",
  type: "",
  typeColor: "",
  status: "",
  title: "",
  details: [],
  image: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/requests/RequestCards.vue"]});const{fn:ie}=__STORYBOOK_MODULE_TEST__;let te="DEFAULT";w(te);const ne={statusId:"REQ-2026-000",typeIcon:"mdi-cube-outline",type:"DEFAULT_TYPE",typeColor:"#000000",status:"Closed",statusClass:"status-default",title:"Default Title",description:"Default description",details:[{label:"Turnaround",content:"N/A"},{label:"Pricing",content:"N/A"},{label:"Assigned To",content:"IT Support"},{label:"Updated Date",content:"2025-12-04"}],examples:[],image:""},ce={component:ee,title:"RequestCards",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},u={args:{card:ne}},p={args:{card:{typeIcon:"mdi-wrench",type:"EQUIPMENT",typeColor:"#0561AE",title:"Equipment Repair & Maintenance",description:"Request repairs, calibration, or preventive maintenance for lab equipment.",details:[{label:"Turnaround",content:"3-5 business days",icon:"mdi-clock-outline"},{label:"Pricing",content:"Free minor repairs, quoted for major work",icon:"mdi-currency-usd"}],examples:["3D printer repair","Oscilloscope calibration"],image:""}}},m={args:{card:{typeIcon:"mdi-lightbulb-outline",type:"FABRICATION",typeColor:"#457B38",title:"Custom Fabrication",description:"Request custom parts or prototypes manufactured by our skilled technicians.",details:[{label:"Turnaround",content:"3-5 weeks",icon:"mdi-clock-outline"},{label:"Pricing",content:"Materials + labor ($25/hour)",icon:"mdi-currency-usd"}],examples:["Custom Enclosures","Prototype Parts"],image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}},g={args:{card:{typeIcon:"mdi-monitor-account",type:"IT_SUPPORT",typeColor:"#8A38F5",title:"IT Support",description:"Get help with software installation, troubleshooting, and technical issues.",details:[{label:"Turnaround",content:"1-2 business days",icon:"mdi-clock-outline"},{label:"Pricing",content:"Free for standard support",icon:"mdi-currency-usd"}],examples:["Software installation","Network connectivity"],image:""}}},y={args:{card:{typeIcon:"mdi-school",type:"TRAINING",typeColor:"#EFA030",title:"Training & Consultation",description:"Request specialized training sessions or expert consultation for your projects.",details:[{label:"Turnaround",content:"1-2 weeks",icon:"mdi-clock-outline"},{label:"Pricing",content:"Free group sessions, $50/hour individual",icon:"mdi-currency-usd"}],examples:["CAD training","Project consultation"],image:""}}},b={args:{card:{typeIcon:"mdi-domain",type:"FACILITIES",typeColor:"#A73325",title:"Space Reservation",description:"Reserve project rooms, meeting spaces, or specialized lab areas.",details:[{label:"Turnaround",content:"Immediate",icon:"mdi-clock-outline"},{label:"Pricing",content:"Free for students, $25/hour for external",icon:"mdi-currency-usd"}],examples:["Project room","Meeting space"],image:""}}},C={args:{card:{typeIcon:"mdi-currency-usd",type:"PROCUREMENT",typeColor:"#A2613F",title:"Material Procurement",description:"Request special materials, components, or supplies for your projects.",details:[{label:"Turnaround",content:"1-4 weeks",icon:"mdi-clock-outline"},{label:"Pricing",content:"Cost + 10% handling fee",icon:"mdi-currency-usd"},{label:"Assigned To",content:""},{label:"Updated Date",content:""}],examples:["Electronic components","Raw materials"],image:""}}},I={args:{card:{statusId:"REQ-2026-001",typeIcon:"mdi-wrench",type:"EQUIPMENT",typeColor:"#0561AE",status:"In Progress",statusClass:"status-in-progress",title:"Ultimaker S3 Nozzle Replacement",details:[{label:"Assigned To",content:"Tech Team"},{label:"Updated Date",content:"2025-12-04"}],image:""}}},_={args:{card:{statusId:"REQ-2026-002",typeIcon:"mdi-monitor",type:"IT_SUPPORT",typeColor:"#8A38F5",status:"Completed",statusClass:"status-completed",title:"MATLAB License Installation",details:[{label:"Assigned To",content:"IT Support"},{label:"Updated Date",content:"2025-12-04"}],image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}},T={args:{card:{statusId:"REQ-2026-003",typeIcon:"mdi-lightbulb-outline",type:"FABRICATION",typeColor:"#457B38",status:"Pending",statusClass:"status-pending",title:"Custom PCB Enclosure",details:[{label:"Assigned To",content:"Fabrication"},{label:"Updated Date",content:"2025-12-07"}],image:""}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    card: RequestCardsData
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "mdi-wrench",
      type: "EQUIPMENT",
      typeColor: "#0561AE",
      title: "Equipment Repair & Maintenance",
      description: "Request repairs, calibration, or preventive maintenance for lab equipment.",
      details: [{
        label: "Turnaround",
        content: "3-5 business days",
        icon: "mdi-clock-outline"
      }, {
        label: "Pricing",
        content: "Free minor repairs, quoted for major work",
        icon: "mdi-currency-usd"
      }],
      examples: ["3D printer repair", "Oscilloscope calibration"],
      image: ""
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "mdi-lightbulb-outline",
      type: "FABRICATION",
      typeColor: "#457B38",
      title: "Custom Fabrication",
      description: "Request custom parts or prototypes manufactured by our skilled technicians.",
      details: [{
        label: "Turnaround",
        content: "3-5 weeks",
        icon: "mdi-clock-outline"
      }, {
        label: "Pricing",
        content: "Materials + labor ($25/hour)",
        icon: "mdi-currency-usd"
      }],
      examples: ["Custom Enclosures", "Prototype Parts"],
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "mdi-monitor-account",
      type: "IT_SUPPORT",
      typeColor: "#8A38F5",
      title: "IT Support",
      description: "Get help with software installation, troubleshooting, and technical issues.",
      details: [{
        label: "Turnaround",
        content: "1-2 business days",
        icon: "mdi-clock-outline"
      }, {
        label: "Pricing",
        content: "Free for standard support",
        icon: "mdi-currency-usd"
      }],
      examples: ["Software installation", "Network connectivity"],
      image: ""
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "mdi-school",
      type: "TRAINING",
      typeColor: "#EFA030",
      title: "Training & Consultation",
      description: "Request specialized training sessions or expert consultation for your projects.",
      details: [{
        label: "Turnaround",
        content: "1-2 weeks",
        icon: "mdi-clock-outline"
      }, {
        label: "Pricing",
        content: "Free group sessions, $50/hour individual",
        icon: "mdi-currency-usd"
      }],
      examples: ["CAD training", "Project consultation"],
      image: ""
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "mdi-domain",
      type: "FACILITIES",
      typeColor: "#A73325",
      title: "Space Reservation",
      description: "Reserve project rooms, meeting spaces, or specialized lab areas.",
      details: [{
        label: "Turnaround",
        content: "Immediate",
        icon: "mdi-clock-outline"
      }, {
        label: "Pricing",
        content: "Free for students, $25/hour for external",
        icon: "mdi-currency-usd"
      }],
      examples: ["Project room", "Meeting space"],
      image: ""
    }
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeIcon: "mdi-currency-usd",
      type: "PROCUREMENT",
      typeColor: "#A2613F",
      title: "Material Procurement",
      description: "Request special materials, components, or supplies for your projects.",
      details: [{
        label: "Turnaround",
        content: "1-4 weeks",
        icon: "mdi-clock-outline"
      }, {
        label: "Pricing",
        content: "Cost + 10% handling fee",
        icon: "mdi-currency-usd"
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
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      statusId: "REQ-2026-001",
      typeIcon: "mdi-wrench",
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
}`,...I.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      statusId: "REQ-2026-002",
      typeIcon: "mdi-monitor",
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
}`,..._.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      statusId: "REQ-2026-003",
      typeIcon: "mdi-lightbulb-outline",
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
}`,...T.parameters?.docs?.source}}};const le=["Default","RequestEquipment","RequestFabrication","RequestITSupport","RequestTraining","RequestFacilities","RequestProcurement","StatusInProgress","StatusCompleted","StatusPending"];export{u as Default,p as RequestEquipment,m as RequestFabrication,b as RequestFacilities,g as RequestITSupport,C as RequestProcurement,y as RequestTraining,_ as StatusCompleted,I as StatusInProgress,T as StatusPending,le as __namedExportsOrder,ce as default};
