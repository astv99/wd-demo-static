import{A as V,B as k,C as T,D as _,E as B,G as O,l as o,n as P,H as W,I as S,J as E,K as N,M as G,O as R,P as j,Q as D,R as F,d as K,o as p,s as h,x as a,g as r,T as y,U as w,W as n,y as f,h as l,t as v,k as L,f as q,X as A,Y as M,Z as z,p as Q}from"./iframe-CYZWmCxV.js";import"./preload-helper-PPVm8Dsz.js";const U=""+new URL("logo-DtuIbWiQ.png",import.meta.url).href,J=E({color:String,...F(),...D(),...j(),...R({tag:"kbd"}),...G(),...N()},"VKbd"),H=V()({name:"VKbd",props:J(),setup(e,{slots:g}){const{themeClasses:b}=k(e),{borderClasses:t}=T(e),{roundedClasses:s}=_(e),{backgroundColorClasses:x,backgroundColorStyles:C}=B(()=>e.color),{elevationClasses:I}=S(e);return O(()=>o(e.tag,{class:W(["v-kbd",b.value,x.value,t.value,I.value,s.value,e.class]),style:P([C.value,e.style])},g)),{}}}),X={class:"text-subtitle-1"},Y={class:"text-h6 font-weight-bold"},Z={class:"text-subtitle-1"},c=K({__name:"HelloWorld",props:{message:{default:""},messageTitle:{default:"Info"},growOnHover:{type:Boolean,default:!1}},setup(e){const g=[{href:"https://vuetifyjs.com/",icon:"mdi-text-box-outline",subtitle:"Learn about all things Vuetify in our documentation.",title:"Documentation"},{href:"https://vuetifyjs.com/introduction/why-vuetify/#feature-guides",icon:"mdi-star-circle-outline",subtitle:"Explore available framework Features.",title:"Features"},{href:"https://vuetifyjs.com/components/all",icon:"mdi-widgets-outline",subtitle:"Discover components in the API Explorer.",title:"Components"},{href:"/login",icon:"mdi-login",subtitle:"Access the login page to authenticate.",title:"Login",isInternal:!0}];return(b,t)=>(p(),h(z,{class:"fill-height d-flex align-center flex-wrap","max-width":"900"},{default:a(()=>[r("div",null,[o(y,{class:"mb-4",height:"150",src:U}),t[6]||(t[6]=r("div",{class:"mb-8 text-center"},[r("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to"),r("h1",{class:"text-h2 my-0 font-weight-bold"},"Vuetify")],-1)),o(w,null,{default:a(()=>[o(n,{cols:"12"},{default:a(()=>[o(f,{class:"py-4",color:"surface-variant",image:"https://cdn.vuetifyjs.com/docs/images/one/create/feature.png","prepend-icon":"mdi-rocket-launch-outline",rounded:"lg",variant:"tonal"},{image:a(()=>[o(y,{position:"top right"})]),title:a(()=>[...t[0]||(t[0]=[r("h2",{class:"text-h5 font-weight-bold"},"Get started",-1)])]),subtitle:a(()=>[r("div",X,[t[3]||(t[3]=l(" Change this page by updating ",-1)),o(H,null,{default:a(()=>[...t[1]||(t[1]=[l(v("<HelloWorld />"),-1)])]),_:1}),t[4]||(t[4]=l(" in ",-1)),o(H,null,{default:a(()=>[...t[2]||(t[2]=[l("components/HelloWorld.vue",-1)])]),_:1}),t[5]||(t[5]=l(". ",-1))])]),_:1})]),_:1}),e.message?(p(),h(n,{key:0,cols:"12"},{default:a(()=>[o(f,{class:"py-4",color:"surface-variant",rounded:"lg",variant:"tonal"},{title:a(()=>[r("h3",Y,v(e.messageTitle),1)]),subtitle:a(()=>[r("div",Z,v(e.message),1)]),_:1})]),_:1})):L("",!0),(p(),q(A,null,M(g,s=>o(n,{key:s.href,cols:"6"},{default:a(()=>[o(f,{"append-icon":s.isInternal?"mdi-arrow-right":"mdi-open-in-new",class:W(["py-4",{"growing-card":e.growOnHover}]),color:"surface-variant",href:s.isInternal?void 0:s.href,"prepend-icon":s.icon,rel:s.isInternal?void 0:"noopener noreferrer",rounded:"lg",subtitle:s.subtitle,target:s.isInternal?void 0:"_blank",title:s.title,variant:"tonal",to:s.isInternal?s.href:void 0},null,8,["append-icon","class","href","prepend-icon","rel","subtitle","target","title","to"])]),_:2},1024)),64))]),_:1}),o(w,null,{default:a(()=>[o(n,{cols:"12",class:"text-center"})]),_:1})])]),_:1}))}}),m=Q(c,[["__scopeId","data-v-2cab1a05"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"HelloWorld",description:"",tags:{},props:[{name:"message",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"messageTitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Info"'}},{name:"growOnHover",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/examples/HelloWorld.vue"]});const te={title:"Components/Examples/HelloWorld",component:m},i={render:e=>({components:{HelloWorld:m},setup(){return{args:e}},template:'<HelloWorld v-bind="args" />'}),args:{message:void 0,messageTitle:"Info"}},d={render:e=>({components:{HelloWorld:m},setup(){return{args:e}},template:'<HelloWorld v-bind="args" />'}),args:{message:"This is a custom message displayed between the Get Started section and the links below!",messageTitle:"Welcome"}},u={render:e=>({components:{HelloWorld:m},setup(){return{args:e}},template:'<HelloWorld v-bind="args" />'}),args:{message:"Hover over the link cards below to see them grow!",messageTitle:"Interactive Cards",growOnHover:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      HelloWorld
    },
    setup() {
      return {
        args
      };
    },
    template: '<HelloWorld v-bind="args" />'
  }),
  args: {
    message: undefined,
    messageTitle: "Info"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      HelloWorld
    },
    setup() {
      return {
        args
      };
    },
    template: '<HelloWorld v-bind="args" />'
  }),
  args: {
    message: "This is a custom message displayed between the Get Started section and the links below!",
    messageTitle: "Welcome"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      HelloWorld
    },
    setup() {
      return {
        args
      };
    },
    template: '<HelloWorld v-bind="args" />'
  }),
  args: {
    message: "Hover over the link cards below to see them grow!",
    messageTitle: "Interactive Cards",
    growOnHover: true
  }
}`,...u.parameters?.docs?.source}}};const se=["Basic","WithMessage","WithGrowOnHover"];export{i as Basic,u as WithGrowOnHover,d as WithMessage,se as __namedExportsOrder,te as default};
