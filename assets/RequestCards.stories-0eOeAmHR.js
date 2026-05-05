import u from"./RequestCards-BbahCFuM.js";import{i as p}from"./misc-Dv5UcT8H.js";import"./iframe-5H8Udzkd.js";import"./preload-helper-PPVm8Dsz.js";import"./helpers-SDxu2LFN.js";const{fn:I}=__STORYBOOK_MODULE_TEST__;let d="DEFAULT";p(d);const m={statusId:"REQ-2026-000",typeIcon:"../../.storybook/public/req-star-circle-white.svg",typeText:"DEFAULT_TYPE",typeColor:"#000000",statusText:"Closed",statusColor:"#6b7280",title:"Default Title",description:"Default description",details:[{label:"Turnaround",content:"N/A"},{label:"Pricing",content:"N/A"},{label:"Assigned To",content:"IT Support"},{label:"Updated Date",content:"2025-12-04"}],examples:[],backgroundImage:"",link:""},q={component:u,title:"RequestCards",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},e={args:{...m}},t={args:{typeIcon:"../../.storybook/public/req-wrench-white.svg",typeText:"EQUIPMENT",typeColor:"#0561AE",title:"Equipment Repair & Maintenance",description:"Request repairs, calibration, or preventive maintenance for lab equipment.",details:[{label:"Turnaround",content:"3-5 business days",icon:"../../.storybook/public/req-clock-outline-white.svg"},{label:"Pricing",content:"Free minor repairs, quoted for major work",icon:"../../.storybook/public/req-currency-usd-white.svg"}],examples:[{exampleName:"3D printer repair"},{exampleName:"Oscilloscope calibration"}],backgroundImage:"",link:""}},n={args:{typeIcon:"../../.storybook/public/req-lightbulb-outline-white.svg",typeText:"FABRICATION",typeColor:"#457B38",title:"Custom Fabrication",description:"Request custom parts or prototypes manufactured by our skilled technicians.",details:[{label:"Turnaround",content:"3-5 weeks",icon:"../../.storybook/public/req-clock-outline-white.svg"},{label:"Pricing",content:"Materials + labor ($25/hour)",icon:"../../.storybook/public/req-currency-usd-white.svg"}],examples:[{exampleName:"Custom Enclosures"},{exampleName:"Prototype Parts"}],backgroundImage:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg",link:""}},o={args:{typeIcon:"../../.storybook/public/req-monitor-account-white.svg",typeText:"IT_SUPPORT",typeColor:"#8A38F5",title:"IT Support",description:"Get help with software installation, troubleshooting, and technical issues.",details:[{label:"Turnaround",content:"1-2 business days",icon:"../../.storybook/public/req-clock-outline-white.svg"},{label:"Pricing",content:"Free for standard support",icon:"../../.storybook/public/req-currency-usd-white.svg"}],examples:[{exampleName:"Software installation"},{exampleName:"Network connectivity"}],backgroundImage:"",link:""}},r={args:{typeIcon:"../../.storybook/public/req-school-outline-white.svg",typeText:"TRAINING",typeColor:"#EFA030",title:"Training & Consultation",description:"Request specialized training sessions or expert consultation for your projects.",details:[{label:"Turnaround",content:"1-2 weeks",icon:"../../.storybook/public/req-clock-outline-white.svg"},{label:"Pricing",content:"Free group sessions, $50/hour individual",icon:"../../.storybook/public/req-currency-usd-white.svg"}],examples:[{exampleName:"CAD training"},{exampleName:"Project consultation"}],backgroundImage:"",link:""}},s={args:{typeIcon:"../../.storybook/public/req-domain-white.svg",typeText:"FACILITIES",typeColor:"#A73325",title:"Space Reservation",description:"Reserve project rooms, meeting spaces, or specialized lab areas.",details:[{label:"Turnaround",content:"Immediate",icon:"../../.storybook/public/req-clock-outline-white.svg"},{label:"Pricing",content:"Free for students, $25/hour for external",icon:"../../.storybook/public/req-currency-usd-white.svg"}],examples:[{exampleName:"Project room"},{exampleName:"Meeting space"}],backgroundImage:"",link:""}},a={args:{typeIcon:"../../.storybook/public/req-currency-usd-white.svg",typeText:"PROCUREMENT",typeColor:"#A2613F",title:"Material Procurement",description:"Request special materials, components, or supplies for your projects.",details:[{label:"Turnaround",content:"1-4 weeks",icon:"../../.storybook/public/req-clock-outline-white.svg"},{label:"Pricing",content:"Cost + 10% handling fee",icon:"../../.storybook/public/req-currency-usd-white.svg"},{label:"Assigned To",content:""},{label:"Updated Date",content:""}],examples:[{exampleName:"Electronic components"},{exampleName:"Raw materials"}],backgroundImage:"",link:""}},i={args:{statusId:"REQ-2026-001",typeIcon:"../../.storybook/public/req-wrench-white.svg",typeText:"EQUIPMENT",typeColor:"#0561AE",statusText:"In Progress",statusColor:"#efa030",title:"Ultimaker S3 Nozzle Replacement",details:[{label:"Assigned To",content:"Tech Team"},{label:"Updated Date",content:"2025-12-04"}],backgroundImage:"",link:""}},c={args:{statusId:"REQ-2026-002",typeIcon:"../../.storybook/public/req-monitor-account-white.svg",typeText:"IT_SUPPORT",typeColor:"#8A38F5",statusText:"Completed",statusColor:"#457B38",title:"MATLAB License Installation",details:[{label:"Assigned To",content:"IT Support"},{label:"Updated Date",content:"2025-12-04"}],backgroundImage:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg",link:""}},l={args:{statusId:"REQ-2026-003",typeIcon:"../../.storybook/public/req-lightbulb-outline-white.svg",typeText:"FABRICATION",typeColor:"#457B38",statusText:"Pending",statusColor:"#a73325",title:"Custom PCB Enclosure",details:[{label:"Assigned To",content:"Fabrication"},{label:"Updated Date",content:"2025-12-07"}],backgroundImage:"",link:""}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequestCardsData
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    typeIcon: "../../.storybook/public/req-wrench-white.svg",
    typeText: "EQUIPMENT",
    typeColor: "#0561AE",
    title: "Equipment Repair & Maintenance",
    description: "Request repairs, calibration, or preventive maintenance for lab equipment.",
    details: [{
      label: "Turnaround",
      content: "3-5 business days",
      icon: "../../.storybook/public/req-clock-outline-white.svg"
    }, {
      label: "Pricing",
      content: "Free minor repairs, quoted for major work",
      icon: "../../.storybook/public/req-currency-usd-white.svg"
    }],
    examples: [{
      exampleName: "3D printer repair"
    }, {
      exampleName: "Oscilloscope calibration"
    }],
    backgroundImage: "",
    link: ""
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    typeIcon: "../../.storybook/public/req-lightbulb-outline-white.svg",
    typeText: "FABRICATION",
    typeColor: "#457B38",
    title: "Custom Fabrication",
    description: "Request custom parts or prototypes manufactured by our skilled technicians.",
    details: [{
      label: "Turnaround",
      content: "3-5 weeks",
      icon: "../../.storybook/public/req-clock-outline-white.svg"
    }, {
      label: "Pricing",
      content: "Materials + labor ($25/hour)",
      icon: "../../.storybook/public/req-currency-usd-white.svg"
    }],
    examples: [{
      exampleName: "Custom Enclosures"
    }, {
      exampleName: "Prototype Parts"
    }],
    backgroundImage: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg",
    link: ""
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    typeIcon: "../../.storybook/public/req-monitor-account-white.svg",
    typeText: "IT_SUPPORT",
    typeColor: "#8A38F5",
    title: "IT Support",
    description: "Get help with software installation, troubleshooting, and technical issues.",
    details: [{
      label: "Turnaround",
      content: "1-2 business days",
      icon: "../../.storybook/public/req-clock-outline-white.svg"
    }, {
      label: "Pricing",
      content: "Free for standard support",
      icon: "../../.storybook/public/req-currency-usd-white.svg"
    }],
    examples: [{
      exampleName: "Software installation"
    }, {
      exampleName: "Network connectivity"
    }],
    backgroundImage: "",
    link: ""
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    typeIcon: "../../.storybook/public/req-school-outline-white.svg",
    typeText: "TRAINING",
    typeColor: "#EFA030",
    title: "Training & Consultation",
    description: "Request specialized training sessions or expert consultation for your projects.",
    details: [{
      label: "Turnaround",
      content: "1-2 weeks",
      icon: "../../.storybook/public/req-clock-outline-white.svg"
    }, {
      label: "Pricing",
      content: "Free group sessions, $50/hour individual",
      icon: "../../.storybook/public/req-currency-usd-white.svg"
    }],
    examples: [{
      exampleName: "CAD training"
    }, {
      exampleName: "Project consultation"
    }],
    backgroundImage: "",
    link: ""
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    typeIcon: "../../.storybook/public/req-domain-white.svg",
    typeText: "FACILITIES",
    typeColor: "#A73325",
    title: "Space Reservation",
    description: "Reserve project rooms, meeting spaces, or specialized lab areas.",
    details: [{
      label: "Turnaround",
      content: "Immediate",
      icon: "../../.storybook/public/req-clock-outline-white.svg"
    }, {
      label: "Pricing",
      content: "Free for students, $25/hour for external",
      icon: "../../.storybook/public/req-currency-usd-white.svg"
    }],
    examples: [{
      exampleName: "Project room"
    }, {
      exampleName: "Meeting space"
    }],
    backgroundImage: "",
    link: ""
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    typeIcon: "../../.storybook/public/req-currency-usd-white.svg",
    typeText: "PROCUREMENT",
    typeColor: "#A2613F",
    title: "Material Procurement",
    description: "Request special materials, components, or supplies for your projects.",
    details: [{
      label: "Turnaround",
      content: "1-4 weeks",
      icon: "../../.storybook/public/req-clock-outline-white.svg"
    }, {
      label: "Pricing",
      content: "Cost + 10% handling fee",
      icon: "../../.storybook/public/req-currency-usd-white.svg"
    }, {
      label: "Assigned To",
      content: ""
    }, {
      label: "Updated Date",
      content: ""
    }],
    examples: [{
      exampleName: "Electronic components"
    }, {
      exampleName: "Raw materials"
    }],
    backgroundImage: "",
    link: ""
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    statusId: "REQ-2026-001",
    typeIcon: "../../.storybook/public/req-wrench-white.svg",
    typeText: "EQUIPMENT",
    typeColor: "#0561AE",
    statusText: "In Progress",
    statusColor: "#efa030",
    title: "Ultimaker S3 Nozzle Replacement",
    details: [{
      label: "Assigned To",
      content: "Tech Team"
    }, {
      label: "Updated Date",
      content: "2025-12-04"
    }],
    backgroundImage: "",
    link: ""
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    statusId: "REQ-2026-002",
    typeIcon: "../../.storybook/public/req-monitor-account-white.svg",
    typeText: "IT_SUPPORT",
    typeColor: "#8A38F5",
    statusText: "Completed",
    statusColor: "#457B38",
    title: "MATLAB License Installation",
    details: [{
      label: "Assigned To",
      content: "IT Support"
    }, {
      label: "Updated Date",
      content: "2025-12-04"
    }],
    backgroundImage: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg",
    link: ""
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    statusId: "REQ-2026-003",
    typeIcon: "../../.storybook/public/req-lightbulb-outline-white.svg",
    typeText: "FABRICATION",
    typeColor: "#457B38",
    statusText: "Pending",
    statusColor: "#a73325",
    title: "Custom PCB Enclosure",
    details: [{
      label: "Assigned To",
      content: "Fabrication"
    }, {
      label: "Updated Date",
      content: "2025-12-07"
    }],
    backgroundImage: "",
    link: ""
  }
}`,...l.parameters?.docs?.source}}};const h=["Default","RequestEquipment","RequestFabrication","RequestITSupport","RequestTraining","RequestFacilities","RequestProcurement","StatusInProgress","StatusCompleted","StatusPending"];export{e as Default,t as RequestEquipment,n as RequestFabrication,s as RequestFacilities,o as RequestITSupport,a as RequestProcurement,r as RequestTraining,c as StatusCompleted,i as StatusInProgress,l as StatusPending,h as __namedExportsOrder,q as default};
