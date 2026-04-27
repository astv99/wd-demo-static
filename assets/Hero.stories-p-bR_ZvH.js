import p from"./Hero-DqejFxN0.js";import"./iframe-DggbHyIc.js";import"./preload-helper-PPVm8Dsz.js";import"./QuickActionButton-jtcX3piV.js";import"./misc-ClPnoM_H.js";import"./webductorTypes-DbEAYrnH.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,l={topHeader:"",boldHeader:"",bodyText:"",backgroundImage:"",logo:"",quickActionButtons:[]},e={topHeader:"Empowering Innovation Through",boldHeader:"Hands-On Learning",bodyText:"Access cutting-edge facilities, equipment, and training programs designed to bring your engineering ideas to life.",backgroundImage:"../assets/hero-bg-demo.png",logo:"assets/itll-logo.png",quickActionButtons:[{title:"Explore",description:"Workshops",color:"#E2A543",icon:"assets/qa-icon-requests.svg",link:"/workshops"},{title:"Reserve",description:"Equipment",color:"#52793D",icon:"assets/qa-icon-equipment.svg",link:"/equipment"},{title:"Download",description:"Software",color:"#5637A9",icon:"assets/qa-icon-software.svg",link:"/software"}]},v={component:p,title:"Hero",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},o={args:{...l}},i={args:{...e}},r={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{...e}},s={globals:{viewport:{value:"mobile2",isRotated:!1}},args:{...e}},t={globals:{viewport:{value:"tablet",isRotated:!1}},args:{...e}},a={globals:{viewport:{value:"desktop",isRotated:!1}},args:{...e}},n={globals:{viewport:{value:"desktopFHD",isRotated:!1}},args:{...e}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...HeroData
  }
}`,...o.parameters?.docs?.source},description:{story:`Default Hero story will not render most of the content or images since those are defined & uploaded in Strapi CMS (and are not provided in the args for this story).
The other stories below use sample data to show how the component renders with content.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...SampleData
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  args: {
    ...SampleData
  }
}`,...r.parameters?.docs?.source},description:{story:"Small mobile: 320px to 480px (mobile1)",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  },
  args: {
    ...SampleData
  }
}`,...s.parameters?.docs?.source},description:{story:"Large mobile: 481px to 767px (mobile2)",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "tablet",
      isRotated: false
    }
  },
  args: {
    ...SampleData
  }
}`,...t.parameters?.docs?.source},description:{story:"Tablet: 768px to 1024px (tablet)",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  args: {
    ...SampleData
  }
}`,...a.parameters?.docs?.source},description:{story:"Desktop: 1025px to 1440px (desktop)",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "desktopFHD",
      isRotated: false
    }
  },
  args: {
    ...SampleData
  }
}`,...n.parameters?.docs?.source},description:{story:"Full HD: 1920px (desktopFHD)",...n.parameters?.docs?.description}}};const f=["Default","HeroHome","HeroHomeOnSmallMobile","HeroHomeOnLargeMobile","HeroHomeOnTablet","HeroHomeOnDesktop","HeroHomeOnFullHD"];export{o as Default,i as HeroHome,a as HeroHomeOnDesktop,n as HeroHomeOnFullHD,s as HeroHomeOnLargeMobile,r as HeroHomeOnSmallMobile,t as HeroHomeOnTablet,f as __namedExportsOrder,v as default};
