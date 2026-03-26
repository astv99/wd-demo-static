import{d as x,h as n,g as e,t as s,l as g,F as p,r as k,i as h,m as T,u as v,k as y,o as a}from"./iframe-Cuo1OJfX.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const w=""+new URL("be-boulder-white-BRrTlEOO.png",import.meta.url).href,F={class:"footer"},C={key:0,class:"top"},B={class:"subsection"},S={class:"subheader"},O={class:"line"},U=["href"],L={class:"line"},E=["href"],N={class:"line address-first-line"},R={class:"line address"},A={class:"line address"},I={class:"subheader"},P=["href"],V={class:"bottom"},j={class:"line left"},c=x({__name:"FooterDesktop",props:{footer:{default:()=>({block_one:{headerText:"",email:"",phone:"",address_line_one:"",address_line_two:"",address_line_three:""},block_two:{headerText:"",links:[]},block_three:{headerText:"",links:[]},block_four:{headerText:"",links:[]}})}},setup(f){const b=new Date().getFullYear(),o=f;function m(r){return typeof r=="object"&&r!==null&&"headerText"in r&&typeof r.headerText=="string"&&"links"in r&&Array.isArray(r.links)}const u=y(()=>Object.values(o.footer).filter(m));return(r,t)=>(a(),n("div",F,[o.footer.block_one.headerText!=""?(a(),n("div",C,[e("div",B,[e("h3",S,s(o.footer.block_one.headerText),1),e("p",O,[t[0]||(t[0]=e("i",{class:"fa-regular fa-envelope"},null,-1)),e("a",{class:"subsection-link",href:"mailto:"+o.footer.block_one.email},s(" "+o.footer.block_one.email),9,U)]),e("p",L,[t[1]||(t[1]=e("i",{class:"fa-solid fa-phone"},null,-1)),e("a",{class:"subsection-link",href:"tel:"+o.footer.block_one.phone},s(" "+o.footer.block_one.phone),9,E)]),e("p",N,[t[2]||(t[2]=e("i",{class:"fa-regular fa-building"},null,-1)),g(" "+s(o.footer.block_one.address_line_one),1)]),e("p",R,s(o.footer.block_one.address_line_two),1),e("p",A,s(o.footer.block_one.address_line_three),1)]),u.value.length>=1?(a(!0),n(p,{key:0},k(u.value,l=>(a(),n("div",{class:"subsection",key:l.headerText},[e("h3",I,s(l.headerText),1),(a(!0),n(p,null,k(l.links,_=>(a(),n("p",{class:"line",key:`${l.headerText}-${_.text}`},[e("a",{class:"subsection-link",href:_.url},s(_.text),9,P)]))),128))]))),128)):h("",!0),t[3]||(t[3]=T('<div class="subsection ucb" data-v-9b60d714><h3 class="subheader" data-v-9b60d714><img class="beboulder" src="'+w+'" data-v-9b60d714></h3><p class="line ucb-link" data-v-9b60d714><a href="https://www.colorado.edu" data-v-9b60d714>University of Colorado Boulder</a></p><p class="line" data-v-9b60d714>© Regents of the University of Colorado</p><p class="line" data-v-9b60d714> Privacy  •  Legal &amp; Trademarks  •  Campus Map </p></div>',1))])):h("",!0),e("div",V,[e("p",j," © "+s(v(b))+" University of Colorado Boulder. All rights reserved. ",1),t[4]||(t[4]=e("div",{class:"terms"},[e("p",{class:"line right rspace"},"Privacy Policy"),e("p",{class:"line right rspace"},"Terms of Service"),e("p",{class:"line right"},"Accessibility")],-1))])]))}}),M=D(c,[["__scopeId","data-v-9b60d714"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"FooterDesktop",description:"",tags:{},props:[{name:"footer",description:"Content of the footer",required:!0,type:{name:"FooterInfo"},defaultValue:{func:!1,value:`() => ({
  block_one: {
    headerText: "",
    email: "",
    phone: "",
    address_line_one: "",
    address_line_two: "",
    address_line_three: "",
  },
  block_two: {
    headerText: "",
    links: [],
  },
  block_three: {
    headerText: "",
    links: [],
  },
  block_four: {
    headerText: "",
    links: [],
  },
})`}}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/homepage/FooterDesktop.vue"]});const H={headerText:"Contact Us",email:"itlp@colorado.edu",phone:"303-492-3475",address_line_one:"ITLL Building",address_line_two:"1111 Engineering Dr",address_line_three:"Boulder, CO 80309"},Y={headerText:"Quick Links",links:[{text:"Workshop Calendar",url:""},{text:"Equipment Booking",url:""},{text:"Safety Training",url:""},{text:"User Guides",url:""}]},$={headerText:"Resources",links:[{text:"Design Thinking",url:""},{text:"Project Management",url:""},{text:"Technical Documentation",url:""},{text:"Innovation Hub",url:""}]},q={headerText:"University Links",links:[{text:"CU Boulder",url:""},{text:"College of Engineering",url:""},{text:"Student Resources",url:""},{text:"Faculty Portal",url:""}]},{fn:J}=__STORYBOOK_MODULE_TEST__,W={block_one:{headerText:"",email:"info@colorado.edu",phone:"123-456-7890",address_line_one:"123 Main St",address_line_two:"Boulder, CO 80309",address_line_three:"USA"},block_two:{headerText:"",links:[]},block_three:{headerText:"",links:[]},block_four:{headerText:"",links:[]}},X={component:M,title:"FooterDesktop",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},i={args:{footer:W}},d={args:{footer:{block_one:H,block_two:Y,block_three:$,block_four:q}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    footer: FooterDesktopData
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    footer: {
      block_one: footer.block_one,
      block_two: footer.block_two,
      block_three: footer.block_three,
      block_four: footer.block_four
    }
  }
}`,...d.parameters?.docs?.source}}};const Z=["FooterDesktopData","Default","HomepageFooter"];export{i as Default,W as FooterDesktopData,d as HomepageFooter,Z as __namedExportsOrder,X as default};
