import{d as m,o as f,r as g,i as a,ao as u,p as v,t as o,al as c,z as y,ap as I}from"./iframe-5H8Udzkd.js";import{g as C}from"./misc-Dv5UcT8H.js";import{g as T}from"./helpers-SDxu2LFN.js";import"./preload-helper-PPVm8Dsz.js";const E={class:"top"},_={class:"spots-left"},L={class:"title"},d=m({__name:"WorkshopInfoCard",props:{typeColor:{default:""},level:{default:"DEFAULT"},spotsleft:{default:0},title:{default:""},date:{default:""},time:{default:""},location:{default:""},backgroundImage:{default:""}},setup(p){const i=y(()=>T(e.typeColor)),e=p;return(A,t)=>(f(),g("div",{class:"bottom-layer",style:u({"--after-bg":e.typeColor||"#000000"})},[a("div",{class:"outer",style:u({"--card-bg":e.backgroundImage?`url(${e.backgroundImage})`:"none","--overlay-color":"rgba(0, 0, 0, 0.28)","--hover-overlay-color":i.value})},[a("div",E,[a("div",{class:"level",style:u({backgroundColor:v(C)(e.level),color:e.level==="INTERMEDIATE"?"#000000":"#ffffff"})},o(e.level),5),a("div",_,o(e.spotsleft)+" "+o(e.spotsleft>=2?"spots":"spot")+" left ",1)]),a("div",L,o(e.title),1),t[3]||(t[3]=a("hr",null,null,-1)),a("p",null,[t[0]||(t[0]=a("span",{class:"label"},"Date:",-1)),c(" "+o(e.date),1)]),a("p",null,[t[1]||(t[1]=a("span",{class:"label"},"Time:",-1)),c(" "+o(e.time),1)]),a("p",null,[t[2]||(t[2]=a("span",{class:"label"},"Location:",-1)),c(" "+o(e.location),1)])],4)],4))}}),M=I(d,[["__scopeId","data-v-7a86477c"]]);d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"WorkshopInfoCard",description:"",tags:{},props:[{name:"typeColor",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"level",required:!0,type:{name:"Level"},defaultValue:{func:!1,value:'"DEFAULT" as Level'}},{name:"spotsleft",required:!0,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"title",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"date",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"time",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"location",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"backgroundImage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/workshops/WorkshopInfoCard.vue"]});const{fn:B}=__STORYBOOK_MODULE_TEST__,k={typeColor:"#565656",level:"DEFAULT",spotsleft:0,title:"Test Workshop",date:"Today",time:"10:00 AM - 12:00 PM",location:"Room 101"},N={component:M,title:"WorkshopInfoCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},r={args:{...k}},s={args:{typeColor:"#457B38",level:"BEGINNER",spotsleft:9,title:"ITLL Tour",date:"Today",time:"10:00 AM - 12:00 PM",location:"ITLL 110 - Launch Point",backgroundImage:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/cu_2012_eng-4006-1.jpg"}},l={args:{typeColor:"#EFA030",level:"INTERMEDIATE",spotsleft:1,title:"Test Workshop",date:"Today",time:"10:00 AM - 12:00 PM",location:"Room 101"}},n={args:{typeColor:"#A73325",level:"ADVANCED",spotsleft:1,title:"Manufacturing - Level 1 - Safety Orientation + Saws and Drills",date:"Today",time:"10:00 AM - 12:00 PM",location:"ITLL 2B50 - MFC Metal Shop",backgroundImage:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...WorkshopInfoCardData
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    typeColor: "#457B38",
    level: "BEGINNER",
    spotsleft: 9,
    title: "ITLL Tour",
    date: "Today",
    time: "10:00 AM - 12:00 PM",
    location: "ITLL 110 - Launch Point",
    backgroundImage: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/cu_2012_eng-4006-1.jpg"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    typeColor: "#EFA030",
    level: "INTERMEDIATE",
    spotsleft: 1,
    title: "Test Workshop",
    date: "Today",
    time: "10:00 AM - 12:00 PM",
    location: "Room 101"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    typeColor: "#A73325",
    level: "ADVANCED",
    spotsleft: 1,
    title: "Manufacturing - Level 1 - Safety Orientation + Saws and Drills",
    date: "Today",
    time: "10:00 AM - 12:00 PM",
    location: "ITLL 2B50 - MFC Metal Shop",
    backgroundImage: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"
  }
}`,...n.parameters?.docs?.source}}};const q=["Default","Beginner","Intermediate","Advanced"];export{n as Advanced,s as Beginner,r as Default,l as Intermediate,q as __namedExportsOrder,N as default};
