import{d as f,o as g,h as v,g as o,n as i,u as C,t as a,l as p,k as T}from"./iframe-Cuo1OJfX.js";import{g as y}from"./types-CQl_3gJK.js";import{h as I}from"./helpers-DGpkKApG.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const _={class:"top"},M={class:"spots-left"},h={class:"title"},c=f({__name:"WorkshopInfoCard",props:{card:{default:()=>({typeColor:"",level:"DEFAULT",spotsleft:0,title:"",date:"",time:"",location:"",image:""})}},setup(m){const u=T(()=>{const r=I(e.card.typeColor);return r?`rgba(${r.r}, ${r.g}, ${r.b}, 0.35)`:"rgba(0, 0, 0, 0.35)"}),e=m;return(r,t)=>(g(),v("div",{class:"bottom-layer",style:i({"--after-bg":e.card.typeColor||"#000000"})},[o("div",{class:"outer",style:i({"--card-bg":`url('${e.card.image}')`,"--overlay-color":"rgba(0, 0, 0, 0.28)","--hover-overlay-color":u.value})},[o("div",_,[o("div",{class:"level",style:i({backgroundColor:C(y)(e.card.level),color:e.card.level==="INTERMEDIATE"?"#000000":"#ffffff"})},a(e.card.level),5),o("div",M,a(e.card.spotsleft)+" "+a(e.card.spotsleft>=2?"spots":"spot")+" left ",1)]),o("div",h,a(e.card.title),1),t[3]||(t[3]=o("hr",null,null,-1)),o("p",null,[t[0]||(t[0]=o("span",{class:"label"},"Date:",-1)),p(" "+a(e.card.date),1)]),o("p",null,[t[1]||(t[1]=o("span",{class:"label"},"Time:",-1)),p(" "+a(e.card.time),1)]),o("p",null,[t[2]||(t[2]=o("span",{class:"label"},"Location:",-1)),p(" "+a(e.card.location),1)])],4)],4))}}),A=E(c,[["__scopeId","data-v-3b1d4d5b"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"WorkshopInfoCard",description:"",tags:{},props:[{name:"card",description:"Composition of the button",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  typeColor: "",
  level: "DEFAULT" as Level,
  spotsleft: 0,
  title: "",
  date: "",
  time: "",
  location: "",
  image: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/workshops/WorkshopInfoCard.vue"]});const{fn:N}=__STORYBOOK_MODULE_TEST__,D={typeColor:"#565656",level:"DEFAULT",spotsleft:0,title:"Test Workshop",date:"Today",time:"10:00 AM - 12:00 PM",location:"Room 101"},W={component:A,title:"WorkshopInfoCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},s={args:{card:D}},n={args:{card:{typeColor:"#457B38",level:"BEGINNER",spotsleft:9,title:"ITLL Tour",date:"Today",time:"10:00 AM - 12:00 PM",location:"ITLL 110 - Launch Point",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/cu_2012_eng-4006-1.jpg"}}},l={args:{card:{typeColor:"#EFA030",level:"INTERMEDIATE",spotsleft:1,title:"Test Workshop",date:"Today",time:"10:00 AM - 12:00 PM",location:"Room 101"}}},d={args:{card:{typeColor:"#A73325",level:"ADVANCED",spotsleft:1,title:"Manufacturing - Level 1 - Safety Orientation + Saws and Drills",date:"Today",time:"10:00 AM - 12:00 PM",location:"ITLL 2B50 - MFC Metal Shop",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    card: WorkshopInfoCardData
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const R=["WorkshopInfoCardData","Default","Beginner","Intermediate","Advanced"];export{d as Advanced,n as Beginner,s as Default,l as Intermediate,D as WorkshopInfoCardData,R as __namedExportsOrder,W as default};
