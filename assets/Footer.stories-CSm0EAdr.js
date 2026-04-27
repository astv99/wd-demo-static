import{F as _}from"./iframe-DggbHyIc.js";import"./preload-helper-PPVm8Dsz.js";const e={email:"itlp@colorado.edu",phone:"303-492-3475",address_line_one:"ITLL Building",address_line_two:"1111 Engineering Dr",address_line_three:"Boulder, CO 80309"},o={headerText:"Quick Links",links:[{text:"Workshop Calendar",url:""},{text:"Equipment Booking",url:""},{text:"Safety Training",url:""},{text:"User Guides",url:""}]},r={headerText:"Resources",links:[{text:"Design Thinking",url:""},{text:"Project Management",url:""},{text:"Technical Documentation",url:""},{text:"Innovation Hub",url:""}]},n={headerText:"University Links",links:[{text:"CU Boulder",url:""},{text:"College of Engineering",url:""},{text:"Student Resources",url:""},{text:"Faculty Portal",url:""}]},k={contactBlock:{email:"info@colorado.edu",phone:"123-456-7890",address:"123 Main St<br/>Boulder, CO 80309<br/>USA"},linkBlocks:[]},f={component:_,title:"Footer",tags:["autodocs"],excludeStories:/.*Data$/,args:{}},t={args:{footer:k}},s={args:{footer:{contactBlock:{email:e.email,phone:e.phone,address:`${e.address_line_one}<br/>${e.address_line_two}<br/>${e.address_line_three}`},linkBlocks:[o,r,n]}}},a={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{footer:{contactBlock:{email:e.email,phone:e.phone,address:`${e.address_line_one}<br/>${e.address_line_two}<br/>${e.address_line_three}`},linkBlocks:[o,r,n]}}},l={globals:{viewport:{value:"mobile2",isRotated:!1}},args:{footer:{contactBlock:{email:e.email,phone:e.phone,address:`${e.address_line_one}<br/>${e.address_line_two}<br/>${e.address_line_three}`},linkBlocks:[o,r,n]}}},c={globals:{viewport:{value:"tablet",isRotated:!1}},args:{footer:{contactBlock:{email:e.email,phone:e.phone,address:`${e.address_line_one}<br/>${e.address_line_two}<br/>${e.address_line_three}`},linkBlocks:[o,r,n]}}},i={globals:{viewport:{value:"desktop",isRotated:!1}},args:{footer:{contactBlock:{email:e.email,phone:e.phone,address:`${e.address_line_one}<br/>${e.address_line_two}<br/>${e.address_line_three}`},linkBlocks:[o,r,n]}}},d={globals:{viewport:{value:"desktopFHD",isRotated:!1}},args:{footer:{contactBlock:{email:e.email,phone:e.phone,address:`${e.address_line_one}<br/>${e.address_line_two}<br/>${e.address_line_three}`},linkBlocks:[o,r,n]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    footer: FooterData
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    footer: {
      contactBlock: {
        email: footer.block_one.email,
        phone: footer.block_one.phone,
        address: \`\${footer.block_one.address_line_one}<br/>\${footer.block_one.address_line_two}<br/>\${footer.block_one.address_line_three}\`
      },
      linkBlocks: [footer.block_two, footer.block_three, footer.block_four]
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  args: {
    footer: {
      contactBlock: {
        email: footer.block_one.email,
        phone: footer.block_one.phone,
        address: \`\${footer.block_one.address_line_one}<br/>\${footer.block_one.address_line_two}<br/>\${footer.block_one.address_line_three}\`
      },
      linkBlocks: [footer.block_two, footer.block_three, footer.block_four]
    }
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  },
  args: {
    footer: {
      contactBlock: {
        email: footer.block_one.email,
        phone: footer.block_one.phone,
        address: \`\${footer.block_one.address_line_one}<br/>\${footer.block_one.address_line_two}<br/>\${footer.block_one.address_line_three}\`
      },
      linkBlocks: [footer.block_two, footer.block_three, footer.block_four]
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "tablet",
      isRotated: false
    }
  },
  args: {
    footer: {
      contactBlock: {
        email: footer.block_one.email,
        phone: footer.block_one.phone,
        address: \`\${footer.block_one.address_line_one}<br/>\${footer.block_one.address_line_two}<br/>\${footer.block_one.address_line_three}\`
      },
      linkBlocks: [footer.block_two, footer.block_three, footer.block_four]
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  args: {
    footer: {
      contactBlock: {
        email: footer.block_one.email,
        phone: footer.block_one.phone,
        address: \`\${footer.block_one.address_line_one}<br/>\${footer.block_one.address_line_two}<br/>\${footer.block_one.address_line_three}\`
      },
      linkBlocks: [footer.block_two, footer.block_three, footer.block_four]
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    // 👇 Override viewport for this story
    viewport: {
      value: "desktopFHD",
      isRotated: false
    }
  },
  args: {
    footer: {
      contactBlock: {
        email: footer.block_one.email,
        phone: footer.block_one.phone,
        address: \`\${footer.block_one.address_line_one}<br/>\${footer.block_one.address_line_two}<br/>\${footer.block_one.address_line_three}\`
      },
      linkBlocks: [footer.block_two, footer.block_three, footer.block_four]
    }
  }
}`,...d.parameters?.docs?.source}}};const m=["FooterData","Default","HomepageFooter","HomepageFooterOnSmallMobile","HomepageFooterOnLargeMobile","HomepageFooterOnTablet","HomepageFooterOnDesktop","HomepageFooterOnFullHD"];export{t as Default,k as FooterData,s as HomepageFooter,i as HomepageFooterOnDesktop,d as HomepageFooterOnFullHD,l as HomepageFooterOnLargeMobile,a as HomepageFooterOnSmallMobile,c as HomepageFooterOnTablet,m as __namedExportsOrder,f as default};
