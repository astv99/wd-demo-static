import{y as g,B as f,G as E,C as e,j as p,a6 as T,E as o,D as c}from"./iframe-BYGVuDJG.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const I={DEFAULT:"#000000",BEGINNER:"#457B38",INTERMEDIATE:"#EFA030",ADVANCED:"#A73325"};function D(d){return I[d]}const L={class:"top"},y={class:"spots-left"},C={class:"title"},u=g({name:"WorkshopInfoCard",__name:"WorkshopInfoCard",props:{card:{default:()=>({id:"",level:"DEFAULT",spotsleft:0,title:"",date:"",time:"",location:"",image:""})},setLogin:{},setSoftware:{},setRequests:{},setEquipment:{}},emits:["set-login","set-software","set-requests","set-equipment"],setup(d,{emit:h}){const t=d;return(A,a)=>(f(),E("div",{class:"outer",style:p({backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('${t.card.image}')`})},[e("div",L,[e("div",{class:"level",style:p({backgroundColor:T(D)(t.card.level),color:t.card.level==="INTERMEDIATE"?"#000000":"#ffffff"})},o(t.card.level),5),e("div",y,o(t.card.spotsleft)+" "+o(t.card.spotsleft>=2?"spots":"spot")+" left ",1)]),e("div",C,o(t.card.title),1),a[3]||(a[3]=e("hr",null,null,-1)),e("p",null,[a[0]||(a[0]=e("span",{class:"label"},"Date:",-1)),c(" "+o(t.card.date),1)]),e("p",null,[a[1]||(a[1]=e("span",{class:"label"},"Time:",-1)),c(" "+o(t.card.time),1)]),e("p",null,[a[2]||(a[2]=e("span",{class:"label"},"Location:",-1)),c(" "+o(t.card.location),1)])],4))}}),_=v(u,[["__scopeId","data-v-737b4e8a"]]);u.__docgenInfo={name:"WorkshopInfoCard",exportName:"default",displayName:"WorkshopInfoCard",description:"",tags:{},props:[{name:"card",description:"Composition of the button",required:!0,type:{name:"CardInfo"},defaultValue:{func:!1,value:`() => ({
  id: "",
  level: "DEFAULT" as Level,
  spotsleft: 0,
  title: "",
  date: "",
  time: "",
  location: "",
  image: "",
})`}},{name:"setLogin",description:"Event to set the button as Login",required:!0,type:{name:"TSFunctionType"}},{name:"setSoftware",description:"Event to set the button as Software",required:!0,type:{name:"TSFunctionType"}},{name:"setRequests",description:"Event to set the button as Requests",required:!0,type:{name:"TSFunctionType"}},{name:"setEquipment",description:"Event to set the button as Equipment",required:!0,type:{name:"TSFunctionType"}}],events:[{name:"set-login",type:{names:["string"]}},{name:"set-software",type:{names:["string"]}},{name:"set-requests",type:{names:["string"]}},{name:"set-equipment",type:{names:["string"]}}],sourceFiles:["/workspaces/Conductor/ConductorFrontend/conductor-cmsd/src/components/homepage/WorkshopInfoCard.vue"]};const{fn:n}=__STORYBOOK_MODULE_TEST__,m={id:"1",level:"DEFAULT",spotsleft:0,title:"Test Workshop",date:"Today",time:"10:00 AM - 12:00 PM",location:"Room 101",events:{setLogin:n(),setSoftware:n(),setRequests:n(),setEquipment:n()}},k={component:_,title:"WorkshopInfoCard",tags:["autodocs"],excludeStories:/.*Data$/,args:{...m.events}},s={args:{card:m}},r={args:{card:{...s.args.card,level:"BEGINNER",spotsleft:9,title:"ITLL Tour",date:"Today",time:"10:00 AM - 12:00 PM",location:"ITLL 110 - Launch Point",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/cu_2012_eng-4006-1.jpg"}}},l={args:{card:{...s.args.card,level:"INTERMEDIATE",spotsleft:1,title:"Test Workshop",date:"Today",time:"10:00 AM - 12:00 PM",location:"Room 101"}}},i={args:{card:{...s.args.card,level:"ADVANCED",spotsleft:1,title:"Manufacturing - Level 1 - Safety Orientation + Saws and Drills",date:"Today",time:"10:00 AM - 12:00 PM",location:"ITLL 2B50 - MFC Metal Shop",image:"https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    card: WorkshopInfoCardData
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      ...Default.args.card,
      level: "BEGINNER",
      spotsleft: 9,
      title: "ITLL Tour",
      date: "Today",
      time: "10:00 AM - 12:00 PM",
      location: "ITLL 110 - Launch Point",
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/cu_2012_eng-4006-1.jpg"
    }
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      ...Default.args.card,
      level: "INTERMEDIATE",
      spotsleft: 1,
      title: "Test Workshop",
      date: "Today",
      time: "10:00 AM - 12:00 PM",
      location: "Room 101"
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      ...Default.args.card,
      level: "ADVANCED",
      spotsleft: 1,
      title: "Manufacturing - Level 1 - Safety Orientation + Saws and Drills",
      date: "Today",
      time: "10:00 AM - 12:00 PM",
      location: "ITLL 2B50 - MFC Metal Shop",
      image: "https://conductor-itll-qa.colorado.edu/api/Content/Images/EventBanners/Saws%20and%20Drills_4.jpg"
    }
  }
}`,...i.parameters?.docs?.source}}};const B=["WorkshopInfoCardData","Default","Beginner","Intermediate","Advanced"];export{i as Advanced,r as Beginner,s as Default,l as Intermediate,m as WorkshopInfoCardData,B as __namedExportsOrder,k as default};
