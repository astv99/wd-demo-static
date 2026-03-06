import{y as d,G as p,C as o,E as u,B as A}from"./iframe-BYGVuDJG.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABrCAMAAAC7dKf0AAAAM1BMVEVMaXHPuX3PuX3////////////////PuX3////PuX3////////////////PuX3////PuX3bOML+AAAAD3RSTlMAoBAQwIAwQECAcCCgkCABo+EEAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuklEQVRoge3ayw6DIBBAUVQUsc///9ouGjskYlCcSWhy79IQz4pZAK4PxvUuvI0LEBBGRKe9H7oNEZ1yEQICAsKKmOaaThH+VRMEBET7RHaALPKz+/UBkm0WYiyvhoCAaJJ4+LWpSPyW+lOEjMFk8OwQlWMQAgICAgICoi0ixG9POyLBICAg/p3YObXQJLJBQEAcJ+T4cZCPg2zZW7K2eKlhdgsjQUBAQFwm1F+zrAlhFgSENmH++tF9AGkVKYmc/EimAAAAAElFTkSuQmCC",g={class:"header"},h={class:"title"},r=d({name:"SectionHeader",__name:"SectionHeader",props:{header:{default:()=>({id:"",text:"Default Header"})},setLogin:{},setSoftware:{},setRequests:{},setEquipment:{}},setup(c){const i=c;return(E,s)=>(A(),p("div",g,[s[0]||(s[0]=o("img",{class:"icon",src:l},null,-1)),o("h1",h,u(i.header.text),1)]))}}),S=m(r,[["__scopeId","data-v-8f473e33"]]);r.__docgenInfo={name:"SectionHeader",exportName:"default",displayName:"SectionHeader",description:"",tags:{},props:[{name:"header",description:"Composition of the header",required:!0,type:{name:"HeaderInfo"},defaultValue:{func:!1,value:`() => ({
  id: "",
  text: "Default Header",
})`}},{name:"setLogin",description:"Event to set the header as Login",required:!0,type:{name:"TSFunctionType"}},{name:"setSoftware",description:"Event to set the header as Software",required:!0,type:{name:"TSFunctionType"}},{name:"setRequests",description:"Event to set the header as Requests",required:!0,type:{name:"TSFunctionType"}},{name:"setEquipment",description:"Event to set the header as Equipment",required:!0,type:{name:"TSFunctionType"}}],sourceFiles:["/workspaces/Conductor/ConductorFrontend/conductor-cmsd/src/components/homepage/SectionHeader.vue"]};const{fn:t}=__STORYBOOK_MODULE_TEST__,n={id:"1",text:"Default Header",events:{setLogin:t(),setSoftware:t(),setRequests:t(),setEquipment:t()}},B={component:S,title:"SectionHeader",tags:["autodocs"],excludeStories:/.*Data$/,args:{...n.events}},e={args:{header:n}},a={args:{header:{...e.args.header,text:"Upcoming Workshops"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    header: SectionHeaderData
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    header: {
      ...Default.args.header,
      text: "Upcoming Workshops"
    }
  }
}`,...a.parameters?.docs?.source}}};const H=["SectionHeaderData","Default","UpcomingWorkshops"];export{e as Default,n as SectionHeaderData,a as UpcomingWorkshops,H as __namedExportsOrder,B as default};
