(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{2588:function(t,e,a){},"2da0":function(t,e,a){"use strict";a("2588")},"713b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"shadow-2 rounded-borders",staticStyle:{height:"100vh"},attrs:{view:"hHh Lpr lff",container:""}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",{staticClass:"q-electron-drag"},[t.loggedIn?a("drawer-toggle",{staticClass:"q-electron-drag--exception",on:{"toggle-drawer":function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}):a("q-btn",{staticClass:"q-electron-drag--exception",attrs:{rounded:"",color:"grey-4","text-color":"secondary",label:"Click Here to Enter"},on:{click:function(e){t.card=!t.card}}}),a("q-space"),a("q-toolbar-title",{staticClass:"text-h5 text-bold absolute-center"},[a("span",{attrs:{color:"secondary"}},[t._v("ProPlayer v8")])]),a("q-btn",{attrs:{size:"25px",color:"secondary",to:"/browser",icon:"mdi-magnify",split:"",flat:""}}),t.loggedIn?a("auth-button"):t._e(),t.isElectron?a("control-buttons"):t._e(),a("q-dialog",{model:{value:t.card,callback:function(e){t.card=e},expression:"card"}},[a("q-card",{staticClass:"auth-tabs"},[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"login",label:"Login"}}),a("q-tab",{attrs:{name:"register",label:"Register"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"login"}},[a("login-register",{attrs:{tab:t.tab}})],1),a("q-tab-panel",{attrs:{name:"register"}},[a("login-register",{attrs:{tab:t.tab}})],1)],1)],1)],1)],1)],1),t.loggedIn?a("q-drawer",{attrs:{"show-if-above":"",bordered:"",width:350,breakpoint:500},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("dynamic-tab",{attrs:{tabList:t.tabs}})],1):t._e(),a("q-page-container",[a("transition",{attrs:{mode:"out-in"}},[a("router-view",{on:{"toggle-drawer":function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1)],1)],1)},n=[],s=a("7619"),l=a.n(s),o=(a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-btn",{attrs:{dense:"",flat:"",icon:"minimize"},on:{click:t.minimize}}),a("q-btn",{attrs:{dense:"",flat:"",icon:"crop_square"},on:{click:t.maximize}}),a("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:t.closeApp}})],1)}),i=[],c={methods:{minimize(){0},maximize(){0},closeApp(){0}}},u={mixins:[c]},d=u,b=a("42e1"),m=a("9c40"),p=a("eebe"),f=a.n(p),g=Object(b["a"])(d,o,i,!1,null,null,null),h=g.exports;f()(g,"components",{QBtn:m["a"]});var v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",color:"secondary"},on:{click:t.toggleDrawer}})],1)},w=[],q={name:"DrawerToggleButton",data(){return{}},methods:{toggleDrawer(){this.$emit("toggle-drawer")}}},y=q,_=Object(b["a"])(y,v,w,!1,null,null,null),x=_.exports;f()(_,"components",{QBtn:m["a"]});var C=a("ad8b"),D=a("c715"),Q=a("2f62"),k={name:"MainLayout",components:{DynamicTab:()=>Promise.all([a.e(0),a.e(14)]).then(a.bind(null,"3c48")),DrawerToggle:x,AuthButton:C["a"],LoginRegister:D["a"],ControlButtons:h},data:()=>({leftDrawerOpen:!1,tab:"login",card:!1}),computed:l()(l()(l()({},Object(Q["e"])("auth",["loggedIn"])),Object(Q["e"])("default",{tabs:t=>t.sidebarTabs})),{},{isElectron(){return!1}}),mounted(){this.resetSideBar()},methods:l()({},Object(Q["c"])("default",["resetSideBar"]))},O=k,E=(a("2da0"),a("4d5a")),B=a("e359"),j=a("65c6"),P=a("2c91"),T=a("6ac5"),$=a("24e8"),z=a("f09f"),I=a("429bb"),L=a("7460"),S=a("eb85"),A=a("adad"),F=a("823b"),H=a("9404"),M=a("09e3"),J=Object(b["a"])(O,r,n,!1,null,null,null);e["default"]=J.exports;f()(J,"components",{QLayout:E["a"],QHeader:B["a"],QToolbar:j["a"],QBtn:m["a"],QSpace:P["a"],QToolbarTitle:T["a"],QDialog:$["a"],QCard:z["a"],QTabs:I["a"],QTab:L["a"],QSeparator:S["a"],QTabPanels:A["a"],QTabPanel:F["a"],QDrawer:H["a"],QPageContainer:M["a"]})},ad8b:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-btn",t._b({attrs:{glossy:"",push:"",ripple:"",icon:"account_circle"}},"q-btn",t.authBtnProps,!1),[a("q-menu",[a("div",{staticClass:"row q-pa-lg no-wrap "},[a("div",{staticClass:"column "},[a("div",{staticClass:"text-h6 q-mb-md"},[t._v("Settings")]),a("default-tool-list")],1),a("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),a("div",{staticClass:"column items-center"},[a("div",{staticClass:"text-center text-subtitle1 q-mt-md q-mb-xs"},[t._v("\n          "+t._s(t.userEmail)+"\n        ")]),t.loggedIn?a("q-btn",{attrs:{icon:"fa fa-power-off",color:"primary",label:"Logout",push:""},on:{click:function(e){return e.preventDefault(),t.logout_user.apply(null,arguments)}}}):t._e()],1)],1)])],1)},n=[],s=a("7619"),l=a.n(s),o=(a("ddb0"),a("fc1b")),i=a("2f62"),c={name:"AuthButton",components:{DefaultToolList:()=>Promise.all([a.e(0),a.e(11)]).then(a.bind(null,"1024"))},computed:l()(l()({},Object(i["e"])("auth",["loggedIn"])),{},{authBtnProps(){const t=this.loggedIn?{round:!0}:{"icon-right":"fas fa-sign-in-alt",label:"Login"};return Object.assign({flat:!0,dense:!0},t)},round(){return this.loggedIn},userEmail(){var t,e;return null!==(t=null===(e=o["b"].currenUser)||void 0===e?void 0:e.email)&&void 0!==t?t:"Default@email.com"}}),methods:l()({},Object(i["c"])("auth",["login_user","logout_user"]))},u=c,d=a("42e1"),b=a("9c40"),m=a("4e73"),p=a("eb85"),f=a("eebe"),g=a.n(f),h=Object(d["a"])(u,r,n,!1,null,null,null);e["a"]=h.exports;g()(h,"components",{QBtn:b["a"],QMenu:m["a"],QSeparator:p["a"]})},c715:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm.apply(null,arguments)}}},[a("div",{staticClass:"row q-mb-md"},[a("q-banner",{scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[a("span",{staticClass:"text-capitalize"},[t._v(t._s(t.tab))]),t._v(" to access your TXBA experience!\n    ")])],1),a("div",{staticClass:"row q-mb-md"},[a("q-input",{ref:"email",staticClass:"col",attrs:{rules:[function(e){return t.isValidEmailAddress(e)||"Please enter a valid email address"}],"lazy-rules":"",outlined:"",label:"Email","stack-label":""},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),a("div",{staticClass:"row q-mb-md"},[a("q-input",{ref:"password",staticClass:"col",attrs:{outlined:"","stack-label":"",type:"password",label:"Password",rules:[function(t){return t.length>=6||"Please enter at least six characters"}],"lazy-rules":""},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),a("div",{staticClass:"row"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cancel",icon:"close",color:"primary"}}),a("q-space"),a("q-btn",{attrs:{color:"primary",label:t.tab,type:"submit"}})],1)])},n=[],s=a("7619"),l=a.n(s),o=a("2f62"),i={props:["tab"],data:()=>({formData:{email:"",password:""}}),methods:l()(l()({},Object(o["c"])("auth",["register_user","login_user"])),{},{submitForm(){this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.email.hasError||this.$refs.password.hasError||("login"==this.tab?this.login_user(this.formData):this.register_user(this.formData))},isValidEmailAddress(t){const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())}})},c=i,u=a("42e1"),d=a("54e1"),b=a("0016"),m=a("27f9"),p=a("9c40"),f=a("2c91"),g=a("7f67"),h=a("eebe"),v=a.n(h),w=Object(u["a"])(c,r,n,!1,null,null,null);e["a"]=w.exports;v()(w,"components",{QBanner:d["a"],QIcon:b["a"],QInput:m["a"],QBtn:p["a"],QSpace:f["a"]}),v()(w,"directives",{ClosePopup:g["a"]})}},0,[0,14]]);