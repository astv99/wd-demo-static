import p from"./Hero-DI2fOtws.js";import"./iframe-CYZWmCxV.js";import"./preload-helper-PPVm8Dsz.js";import"./QuickActionButton-Dg6jEMKN.js";import"./webductorTypes-4RQzqXDp.js";import"./misc-DYem7NqQ.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,l={page:null},e={data:{value:{data:[{PageContent:[{BackgroundImage:{url:"/uploads/Home_Page_Poster_463289b2c6.png"},BodyText:"Access cutting-edge facilities, equipment, and training programs designed to bring your engineering ideas to life.",BoldHeader:"Hands-On Learning",Logo:{url:"/uploads/ITL_Icon_Primary_Reversed_3f3678d29b.png"},TopHeader:"Empowering Innovation Through"}]}]}}},b={component:p,title:"Hero",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},o={args:{hero:l}},i={args:{hero:{page:e}}},r={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{hero:{page:e}}},a={globals:{viewport:{value:"mobile2",isRotated:!1}},args:{hero:{page:e}}},s={globals:{viewport:{value:"tablet",isRotated:!1}},args:{hero:{page:e}}},t={globals:{viewport:{value:"desktop",isRotated:!1}},args:{hero:{page:e}}},n={globals:{viewport:{value:"desktopFHD",isRotated:!1}},args:{hero:{page:e}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hero: HeroData
  }
}`,...o.parameters?.docs?.source},description:{story:`Default Hero story will not render most of the content or images since those are defined & uploaded in Strapi CMS (and are not provided in the args for this story).
The other stories below use sample data to show how the component renders with content.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    hero: {
      page: SampleData
    }
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
    hero: {
      page: SampleData
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Small mobile: 320px to 480px (mobile1)",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  },
  args: {
    hero: {
      page: SampleData
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Large mobile: 481px to 767px (mobile2)",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "tablet",
      isRotated: false
    }
  },
  args: {
    hero: {
      page: SampleData
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Tablet: 768px to 1024px (tablet)",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  args: {
    hero: {
      page: SampleData
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Desktop: 1025px to 1440px (desktop)",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "desktopFHD",
      isRotated: false
    }
  },
  args: {
    hero: {
      page: SampleData
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Full HD: 1920px (desktopFHD)",...n.parameters?.docs?.description}}};const h=["Default","HeroHome","HeroHomeOnSmallMobile","HeroHomeOnLargeMobile","HeroHomeOnTablet","HeroHomeOnDesktop","HeroHomeOnFullHD"];export{o as Default,i as HeroHome,t as HeroHomeOnDesktop,n as HeroHomeOnFullHD,a as HeroHomeOnLargeMobile,r as HeroHomeOnSmallMobile,s as HeroHomeOnTablet,h as __namedExportsOrder,b as default};
