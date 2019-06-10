(window.webpackJsonp=window.webpackJsonp||[]).push([[60,129,130,131,132],{1156:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(29);function i(){var t=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return t},t}var c=e(27).c.div(i());n.default=function(t){return r.a.createElement(c,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1157:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(29),i=e(27),c=e(6);function o(){var t=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return o=function(){return t},t}function u(){var t=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return u=function(){return t},t}var p=i.c.h3(u(),Object(c.palette)("text",0)),m=i.c.p(o(),Object(c.palette)("text",3)),s=function(t){return r.a.createElement("div",null,t.title?r.a.createElement(p,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?r.a.createElement(m,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function d(){var t=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return d=function(){return t},t}var f=i.c.div(d(),Object(c.palette)("border",0),"");n.default=function(t){return r.a.createElement(f,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},r.a.createElement(s,{title:t.title,subtitle:t.subtitle}),t.children)}},1158:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(29),i=e(27),c=e(6),o=e(47);function u(){var t=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return u=function(){return t},t}var p=i.c.h1(u(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),m=Object(o.a)(p);n.default=function(t){return r.a.createElement(m,{className:"isoComponentTitle"},t.children)}},1161:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(29),i=e(27),c=e(6),o=e(47);function u(){var t=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return u=function(){return t},t}var p=i.c.div(u(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),m=Object(o.a)(p);n.default=function(t){return r.a.createElement(m,{className:"isoExampleWrapper",style:t.style},t.children)}},1163:function(t,n,e){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};n.a=a},2657:function(t,n,e){"use strict";e.r(n);var a=e(18),r=e(19),l=e(25),i=e(23),c=e(24),o=e(0),u=e.n(o),p=e(32),m=e(31),s=e(7),d=e(1158),f=e(1157),h=e(1156),x=e(1161),g=e(1163),b=e(29),w=e(2642).a,E=e(27),y=e(6);function j(){var t=Object(b.a)(["\n  color: ",";\n  font-size: 13px;\n\n  a {\n    color: ",";\n    font-size: 13px;\n  }\n\n  > span:last-child {\n    font-weight: 700;\n    color: ",";\n  }\n"]);return j=function(){return t},t}var v=Object(E.c)(function(t){return u.a.createElement(w,t)})(j(),Object(y.palette)("text",3),Object(y.palette)("text",3),Object(y.palette)("text",1));e.d(n,"default",function(){return O});var O=function(t){function n(){return Object(a.a)(this,n),Object(l.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){var t=g.a.rowStyle,n=g.a.colStyle,e=g.a.gutter;return u.a.createElement(h.default,null,u.a.createElement(d.default,null,"BreadCrumb"),u.a.createElement(p.a,{style:t,gutter:e,justify:"start"},u.a.createElement(m.a,{span:12,style:n},u.a.createElement(f.default,{title:"Basic BreadCrumb",subtitle:"The simplest usage that close the notification box after 4.5s."},u.a.createElement(x.default,null,u.a.createElement(v,null,u.a.createElement(v.Item,null,"Home"),u.a.createElement(v.Item,null,u.a.createElement("a",{href:"# "},"Application Center")),u.a.createElement(v.Item,null,u.a.createElement("a",{href:"# "},"Application List")),u.a.createElement(v.Item,null,"An Application"))))),u.a.createElement(m.a,{span:12,style:n},u.a.createElement(f.default,{title:"Breadcrumb with Icon",subtitle:"The simplest usage that close the notification box after 4.5s."},u.a.createElement(x.default,null,u.a.createElement(v,null,u.a.createElement(v.Item,{href:"# "},u.a.createElement(s.a,{type:"home"})),u.a.createElement(v.Item,{href:"# "},u.a.createElement(s.a,{type:"user"}),u.a.createElement("span",null,"Application List")),u.a.createElement(v.Item,null,"Application")))))),u.a.createElement(p.a,{style:t,gutter:e,justify:"start"},u.a.createElement(m.a,{span:12,style:n},u.a.createElement(f.default,{title:"Breadcrumb Configuring the Separator",subtitle:"The simplest usage that close the notification box after 4.5s."},u.a.createElement(x.default,null,u.a.createElement(v,{separator:">"},u.a.createElement(v.Item,null,"Home"),u.a.createElement(v.Item,{href:"# "},"Application Center"),u.a.createElement(v.Item,{href:"# "},"Application List"),u.a.createElement(v.Item,null,"An Application")))))))}}]),n}(o.Component)}}]);
//# sourceMappingURL=60.31c8894f.chunk.js.map