import{N as t,L as u}from"./iframe-CYZWmCxV.js";import"./preload-helper-PPVm8Dsz.js";const d={component:t,argTypes:{menuItems:{control:"object",description:"Array of navigation items. Edit as JSON (e.g. [{ title: 'Home', to: '/' }])."},showStaff:{control:"boolean",description:"Whether to show items in the staffMenuItems array. When false, the staff bar is hidden."},roles:{control:"object",description:"Array of user roles to evaluate menu item visibility."}},parameters:{controls:{include:["showStaff","roles"]},docs:{description:{component:`The NavigationBar component provides standard and staff-specific menus.

**Warning:** Clicking the login button or the home icon causes a minor crash in the current Storybook environment due to missing router context. If this happens, simply refresh the page to restore the view.`}}},title:"NavigationBar",tags:["autodocs"]},a=[{title:"Workshops",children:[{title:"Browse Workshops",to:"/signup/upcomingworkshops"},{title:"My Workshops",to:"/signup/myevents"}]},{title:"Equipment",children:[{title:"Equipment Reservations",to:"/about/team"},{title:"Equipment List",to:"/about/careers"}]},{title:"Store",children:[{title:"Go to Store",to:"/requests/navigate"},{title:"Previous Purchases",to:"/requests/myrequests"},{title:"Make a Payment",to:"/payment/store"}]},{title:"Fabrication",children:[{title:"New Request",to:"/requests/navigate"},{title:"My Requests",to:"/requests/myrequests"},{title:"Poster Printing",to:"/about/team"},{title:"PCB Fabrication",to:"/about/careers"},{title:"HD 3D Printing",to:"/about/careers"},{title:"About Fabrication",to:"/resources/faq"}]},{title:"Software",children:[{title:"Catalog",to:"/resources/docs"},{title:"SolidWorks",to:"/resources/faq"},{title:"CEAS Cloud",to:"/resources/faq"},{title:"License Request",to:"/resources/faq"}]},{title:"Help",children:[{title:"Report a Problem",to:"/resources/docs"},{title:"Provide Feedback",to:"/resources/faq"},{title:"Submit an IT Ticket",to:"/about/team"},{title:"Engineering Consultation",to:"/about/careers"}]},{title:"About",children:[{title:"Hours and Locations",to:"/resources/docs"},{title:"People",to:"/resources/faq"},{title:"Undergraduate Job Opportunities",to:"/about/team"},{title:"Donate",to:"/about/careers"}]},{title:"Profile",children:[{title:"My Workshops",to:"/signup/myevents"},{title:"My Reservations",to:"/resources/faq"},{title:"My Fabrication",to:"/requests/myrequests"}]},{title:"Scheduling",children:[{title:"Schedule Event Instance",to:"/scheduling/scheduleinstance"},{title:"Manage Event Instances",to:"/scheduling/manageinstances"},{title:"Calendar Manager",to:"/calendarmanager"},{title:"View Calendars",to:"/calendars"}],staffBar:!0},{title:"Requests",children:[{title:"Manage Requests",to:"/requests/manage"},{title:"View Submissions",to:"/requests/viewsubmissions"}],staffBar:!0},{title:"Tools",children:[{title:"Inventory System",to:"https://itlp-inventory.int.colorado.edu/login",external:!0},{title:"Links Manager",to:"/tools/linksmanager"},{title:"Internal Documentation",to:"https://itlp.link/portal-docs",external:!0}],staffBar:!0},{title:"Reporting",children:[{title:"Workshop Attendance",to:"/reporting/workshopattendance"},{title:"Transaction Viewer",to:"/transactionsviewer"}],staffBar:!0},{title:"Administration",children:[{title:"Class Manager",to:"/admin/classes"},{title:"Store Manager",to:"/admin/manageStore"},{title:"Balance Manager",to:"/admin/balanceManager"},{title:"Prereq Manager",to:"/admin/prereqManager"},{title:"Discount Group Manager",to:"/admin/discount"},{title:"Debug",to:"/admin/debug"},{title:"Center Manager",to:"/centers/manage"}],staffBar:!0}],n={render:e=>({components:{NavigationBar:t},setup(){return{args:e}},template:'<NavigationBar v-bind="args" />'}),args:{menuItems:a,showStaff:!0,title:"Integrated Teaching and Learning Program",roles:Object.values(u).filter(e=>typeof e=="number")},argTypes:{showStaff:{control:"boolean",description:"When true, shows the staff menu items."},roles:{control:"object",description:"Array of user roles to evaluate menu item visibility."}},parameters:{controls:{include:["showStaff","roles"]},layout:"fullscreen"},name:"Generic View"},o={render:e=>({components:{NavigationBar:t},setup(){return{args:e}},template:'<NavigationBar v-bind="args" />'}),args:{menuItems:a,showStaff:!0,title:"Integrated Teaching and Learning Program"},argTypes:{showStaff:{control:"boolean",description:"When true, shows the staff menu items."}},parameters:{controls:{include:["showStaff"]},layout:"fullscreen"},globals:{viewport:{value:"desktop"}},tags:["!autodocs"],name:"Desktop View"},r={render:e=>({components:{NavigationBar:t},setup(){return{args:e}},template:'<NavigationBar v-bind="args" />'}),args:{menuItems:a,showStaff:!0,title:"Integrated Teaching and Learning Program",bannerMessage:"This is a banner message!",bannerColor:"red"},argTypes:{showStaff:{control:"boolean",description:"When true, shows the staff menu items."}},parameters:{controls:{include:["showStaff"]},layout:"fullscreen"},globals:{viewport:{value:"desktop"}},tags:["!autodocs"],name:"Desktop View with Banner"},s={render:e=>({components:{NavigationBar:t},setup(){return{args:e}},template:`<NavigationBar v-bind="args" />
    <div style="padding: 20px; height: 200vh; background: linear-gradient(to bottom, #cfcfcf, #0f0f0f); align-items: center; display: flex; flex-direction: column;">
      <h1>Page Content</h1>
      <p>This is an example of page content below the navigation bar.</p> <p>Please use it to gauge the opacity and readability of the navigation bar.</p>
    </div>`}),args:{menuItems:a,showStaff:!1,title:"Integrated Teaching and Learning Program"},argTypes:{showStaff:{control:"boolean",description:"When true, shows the staff menu items."}},parameters:{controls:{include:["showStaff"]},layout:"fullscreen"},tags:["!autodocs"],name:"With Content"},i={render:e=>({components:{NavigationBar:t},setup(){return{args:e}},template:'<NavigationBar v-bind="args" />'}),args:{menuItems:a,showStaff:!0,title:"Integrated Teaching and Learning Program"},argTypes:{showStaff:{control:"boolean",description:"When true, shows the staff menu items."}},parameters:{controls:{include:["showStaff"]},layout:"fullscreen"},globals:{viewport:{value:"mobile1",isRotated:!1}},tags:["!autodocs"],name:"Mobile View"},l={render:e=>({components:{NavigationBar:t},setup(){return{args:e}},template:'<NavigationBar v-bind="args" />'}),args:{menuItems:a,showStaff:!0,title:"Integrated Teaching and Learning Program",bannerMessage:"This is a banner message!",bannerColor:"blue"},argTypes:{showStaff:{control:"boolean",description:"When true, shows the staff menu items."}},parameters:{controls:{include:["showStaff"]},layout:"fullscreen"},globals:{viewport:{value:"mobile1",isRotated:!1}},tags:["!autodocs"],name:"Mobile View with Banner"},c={render:e=>({components:{NavigationBar:t},setup(){return{args:e}},template:`<NavigationBar v-bind="args" />
    <div style="padding: 20px; height: 200vh; background: linear-gradient(to bottom, #ffffff, #0f0f0f); align-items: center; display: flex; flex-direction: column;">
      <h1>Page Content</h1>
      <p>This is an example of page content below the navigation bar.</p> <p>Please use it to gauge the opacity and readability of the navigation bar.</p>
    </div>`}),args:{menuItems:a,showStaff:!0,title:"Integrated Teaching and Learning Program"},argTypes:{showStaff:{control:"boolean",description:"When true, shows the staff menu items."}},parameters:{controls:{include:["showStaff"]},layout:"fullscreen"},globals:{viewport:{value:"mobile1",isRotated:!1}},tags:["!autodocs"],name:"Mobile With Content"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      NavigationBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<NavigationBar v-bind="args" />'
  }),
  args: {
    menuItems: canonicalMain,
    showStaff: true,
    title: "Integrated Teaching and Learning Program",
    roles: Object.values(LIURole).filter(v => typeof v === "number") as LIURole[]
  },
  argTypes: {
    showStaff: {
      control: "boolean",
      description: "When true, shows the staff menu items."
    },
    roles: {
      control: "object",
      description: "Array of user roles to evaluate menu item visibility."
    }
  } as any,
  parameters: {
    controls: {
      include: ["showStaff", "roles"]
    },
    layout: "fullscreen"
  },
  name: "Generic View"
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      NavigationBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<NavigationBar v-bind="args" />'
  }),
  args: {
    menuItems: canonicalMain,
    showStaff: true,
    title: "Integrated Teaching and Learning Program"
  },
  argTypes: {
    showStaff: {
      control: "boolean",
      description: "When true, shows the staff menu items."
    }
  } as any,
  parameters: {
    controls: {
      include: ["showStaff"]
    },
    layout: "fullscreen"
  },
  globals: {
    viewport: {
      value: "desktop"
    }
  },
  tags: ["!autodocs"],
  name: "Desktop View"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      NavigationBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<NavigationBar v-bind="args" />'
  }),
  args: {
    menuItems: canonicalMain,
    showStaff: true,
    title: "Integrated Teaching and Learning Program",
    bannerMessage: "This is a banner message!",
    bannerColor: "red"
  },
  argTypes: {
    showStaff: {
      control: "boolean",
      description: "When true, shows the staff menu items."
    }
  } as any,
  parameters: {
    controls: {
      include: ["showStaff"]
    },
    layout: "fullscreen"
  },
  globals: {
    viewport: {
      value: "desktop"
    }
  },
  tags: ["!autodocs"],
  name: "Desktop View with Banner"
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      NavigationBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<NavigationBar v-bind="args" />\\n    <div style="padding: 20px; height: 200vh; background: linear-gradient(to bottom, #cfcfcf, #0f0f0f); align-items: center; display: flex; flex-direction: column;">\\n      <h1>Page Content</h1>\\n      <p>This is an example of page content below the navigation bar.</p> <p>Please use it to gauge the opacity and readability of the navigation bar.</p>\\n    </div>'
  }),
  args: {
    menuItems: canonicalMain,
    showStaff: false,
    title: "Integrated Teaching and Learning Program"
  },
  argTypes: {
    showStaff: {
      control: "boolean",
      description: "When true, shows the staff menu items."
    }
  } as any,
  parameters: {
    controls: {
      include: ["showStaff"]
    },
    layout: "fullscreen"
  },
  tags: ["!autodocs"],
  name: "With Content"
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      NavigationBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<NavigationBar v-bind="args" />'
  }),
  args: {
    menuItems: canonicalMain,
    showStaff: true,
    title: "Integrated Teaching and Learning Program"
  },
  argTypes: {
    showStaff: {
      control: "boolean",
      description: "When true, shows the staff menu items."
    }
  } as any,
  parameters: {
    controls: {
      include: ["showStaff"]
    },
    layout: "fullscreen"
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  tags: ["!autodocs"],
  name: "Mobile View"
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      NavigationBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<NavigationBar v-bind="args" />'
  }),
  args: {
    menuItems: canonicalMain,
    showStaff: true,
    title: "Integrated Teaching and Learning Program",
    bannerMessage: "This is a banner message!",
    bannerColor: "blue"
  },
  argTypes: {
    showStaff: {
      control: "boolean",
      description: "When true, shows the staff menu items."
    }
  } as any,
  parameters: {
    controls: {
      include: ["showStaff"]
    },
    layout: "fullscreen"
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  tags: ["!autodocs"],
  name: "Mobile View with Banner"
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      NavigationBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<NavigationBar v-bind="args" />\\n    <div style="padding: 20px; height: 200vh; background: linear-gradient(to bottom, #ffffff, #0f0f0f); align-items: center; display: flex; flex-direction: column;">\\n      <h1>Page Content</h1>\\n      <p>This is an example of page content below the navigation bar.</p> <p>Please use it to gauge the opacity and readability of the navigation bar.</p>\\n    </div>'
  }),
  args: {
    menuItems: canonicalMain,
    showStaff: true,
    title: "Integrated Teaching and Learning Program"
  },
  argTypes: {
    showStaff: {
      control: "boolean",
      description: "When true, shows the staff menu items."
    }
  } as any,
  parameters: {
    controls: {
      include: ["showStaff"]
    },
    layout: "fullscreen"
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  tags: ["!autodocs"],
  name: "Mobile With Content"
}`,...c.parameters?.docs?.source}}};const p=["CanonicalMain","OnDesktop","OnDesktopWithBanner","WithContent","OnMobile","OnMobileWithBanner","WithContentMobile"];export{n as CanonicalMain,o as OnDesktop,r as OnDesktopWithBanner,i as OnMobile,l as OnMobileWithBanner,s as WithContent,c as WithContentMobile,p as __namedExportsOrder,d as default};
