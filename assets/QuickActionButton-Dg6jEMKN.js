import{d as r,q as a,o as s,s as u,x as d,g as t,n as p,f as h,t as i,p as _}from"./iframe-CYZWmCxV.js";const m={class:"hex hex-left",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100"},f=["fill"],w=["href"],g={class:"text-section"},x={class:"line-top"},k={class:"line-bottom"},n=r({__name:"QuickActionButton",props:{btn:{default:()=>({title:"",description:"",color:"#000000",icon:"",route:""})}},setup(c){const o=c;return(A,e)=>{const l=a("RouterLink");return s(),u(l,{class:"qabutton-outer",to:o.btn.route},{default:d(()=>[t("div",{class:"qabutton",style:p({"--qa-start":o.btn.color})},[(s(),h("svg",m,[t("g",null,[t("path",{d:"M40,24 L60,24 A10,10 0 0 1 68,28 L80,48 A10,10 0 0 1 80,52 L68,72 A10,10 0 0 1 60,76 L40,76 A10,10 0 0 1 32,72 L20,52 A10,10 0 0 1 20,48 L32,28 A10,10 0 0 1 40,24 Z",fill:o.btn.color,stroke:"white","stroke-width":"1"},null,8,f),e[0]||(e[0]=t("circle",{cx:"50",cy:"50",r:"20",fill:"white"},null,-1)),t("image",{href:o.btn.icon,x:"35",y:"35",width:"30",height:"30"},null,8,w)])])),t("div",g,[t("div",x,i(o.btn.title),1),t("div",k,i(o.btn.description),1)]),e[1]||(e[1]=t("svg",{class:"hex hex-right",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:`M40,24 
          L60,24 
          A10,10 0 0 1 68,28
          L80,48 
          A10,10 0 0 1 80,52
          L68,72 
          A10,10 0 0 1 60,76
          L40,76 
          A10,10 0 0 1 32,72
          L20,52 
          A10,10 0 0 1 20,48
          L32,28 
          A10,10 0 0 1 40,24 
          Z`,fill:"#000000",stroke:"white","stroke-width":"0.2","stroke-linecap":"round","stroke-linejoin":"round"})],-1))],4)]),_:1},8,["to"])}}}),v=_(n,[["__scopeId","data-v-321748f3"]]);n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"QuickActionButton",description:"",tags:{},props:[{name:"btn",description:"Composition of the button",required:!0,type:{name:"ButtonData"},defaultValue:{func:!1,value:`() => ({
  title: "",
  description: "",
  color: "#000000",
  icon: "",
  route: "",
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/homepage/QuickActionButton.vue"]});export{v as Q};
