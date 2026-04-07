import{d as u,o as f,h as g,g as o,n as i,u as v,t as a,j as p,i as C}from"./iframe-DAh--HWo.js";import{L as y}from"./webductorTypes-DbEAYrnH.js";import{g as T}from"./helpers-SDxu2LFN.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";function E(d){return y[d]}const _={class:"top"},L={class:"spots-left"},M={class:"title"},c=u({__name:"WorkshopInfoCard",props:{card:{default:()=>({typeColor:"",level:"DEFAULT",spotsleft:0,title:"",date:"",time:"",location:"",image:""})}},setup(d){const m=C(()=>T(e.card.typeColor)),e=d;return(h,t)=>(f(),g("div",{class:"bottom-layer",style:i({"--after-bg":e.card.typeColor||"#000000"})},[o("div",{class:"outer",style:i({"--card-bg":`url('${e.card.image}')`,"--overlay-color":"rgba(0, 0, 0, 0.28)","--hover-overlay-color":m.value})},[o("div",_,[o("div",{class:"level",style:i({backgroundColor:v(E)(e.card.level),color:e.card.level==="INTERMEDIATE"?"#000000":"#ffffff"})},a(e.card.level),5),o("div",L,a(e.card.spotsleft)+" "+a(e.card.spotsleft>=2?"spots":"spot")+" left ",1)]),o("div",M,a(e.card.title),1),t[3]||(t[3]=o("hr",null,null,-1)),o("p",null,[t[0]||(t[0]=o("span",{class:"label"},"Date:",-1)),p(" "+a(e.card.date),1)]),o("p",null,[t[1]||(t[1]=o("span",{class:"label"},"Time:",-1)),p(" "+a(e.card.time),1)]),o("p",null,[t[2]||(t[2]=o("span",{class:"label"},"Location:",-1)),p(" "+a(e.card.location),1)])],4)],4))}}),A=I(c,[["__scopeId","data-v-bccf3b90"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"WorkshopInfoCard",description:"",tags:{},props:[{name:"card",description:"Composition of the button",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  typeColor: "",
  level: "DEFAULT" as Level,
  spotsleft: 0,
  title: "",
  date: "",
  time: "",
  location: "",
  image: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/workshops/WorkshopInfoCard.vue"]});const{fn:W}=__STORYBOOK_MODULE_TEST__,D={typeColor:"#565656",level:"DEFAULT",spotsleft:0,title:"Test Workshop",date:"Today",time:"10:00 AM - 12:00 PM",location:"Room 101"},O={component:A,title:"WorkshopInfoCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},r={args:{card:D}},s={args:{card:{typeColor:"#457B38",level:"BEGINNER",spotsleft:9,title:"ITLL Tour",date:"Today",time:"10:00 AM - 12:00 PM",location:"ITLL 110 - Launch Point",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/cu_2012_eng-4006-1.jpg"}}},n={args:{card:{typeColor:"#EFA030",level:"INTERMEDIATE",spotsleft:1,title:"Test Workshop",date:"Today",time:"10:00 AM - 12:00 PM",location:"Room 101"}}},l={args:{card:{typeColor:"#A73325",level:"ADVANCED",spotsleft:1,title:"Manufacturing - Level 1 - Safety Orientation + Saws and Drills",date:"Today",time:"10:00 AM - 12:00 PM",location:"ITLL 2B50 - MFC Metal Shop",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    card: WorkshopInfoCardData
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeColor: "#457B38",
      level: "BEGINNER",
      spotsleft: 9,
      title: "ITLL Tour",
      date: "Today",
      time: "10:00 AM - 12:00 PM",
      location: "ITLL 110 - Launch Point",
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/cu_2012_eng-4006-1.jpg"
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeColor: "#EFA030",
      level: "INTERMEDIATE",
      spotsleft: 1,
      title: "Test Workshop",
      date: "Today",
      time: "10:00 AM - 12:00 PM",
      location: "Room 101"
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      typeColor: "#A73325",
      level: "ADVANCED",
      spotsleft: 1,
      title: "Manufacturing - Level 1 - Safety Orientation + Saws and Drills",
      date: "Today",
      time: "10:00 AM - 12:00 PM",
      location: "ITLL 2B50 - MFC Metal Shop",
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"
    }
  }
}`,...l.parameters?.docs?.source}}};const P=["Default","Beginner","Intermediate","Advanced"];export{l as Advanced,s as Beginner,r as Default,n as Intermediate,P as __namedExportsOrder,O as default};
