(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1217:function(e,n,t){"use strict";var a=t(40),r=t(29),o=t(27),i=t(6);function s(){var e=Object(r.a)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n    vertical-align: middle;\n\n    .ant-checkbox {\n      top: inherit;\n    }\n  }\n"]);return s=function(){return e},e}var l=function(e){return Object(o.c)(e)(s(),Object(i.palette)("text",1))};t.d(n,"a",function(){return p});var c=l(a.a),p=a.a.Group;n.b=c},1492:function(e,n,t){"use strict";t.d(n,"a",function(){return v});var a=t(3),r=t.n(a),o=t(55),i=t(18),s=t(19),l=t(25),c=t(23),p=t(24),d=t(12),g=t(0),m=t.n(g),u=t(190),h=t(118),b=t(411),f=t(225),x=t(62),v=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),p=0;p<a;p++)s[p]=arguments[p];return(t=Object(l.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(s)))).state={visible:!1,email:"demo@gmail.com",password:"demodemo",confirmLoading:!1},t.showModal=function(){t.setState({visible:!0})},t.handleCancel=function(e){t.setState({visible:!1})},t.handleLogin=Object(o.a)(r.a.mark(function e(){var n,a,o,i,s,l,c,p;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,a=n.email,o=n.password,a&&o){e.next=4;break}return Object(f.c)("error","Please fill in email. and password"),e.abrupt("return");case 4:if(t.setState({confirmLoading:!0}),i=Object(d.a)(Object(d.a)(t)),!t.props.signup){e.next=12;break}return e.next=9,x.a.signup(x.a.EMAIL,{email:a,password:o});case 9:s=e.sent,e.next=15;break;case 12:return e.next=14,x.a.login(x.a.EMAIL,{email:a,password:o});case 14:s=e.sent;case 15:if(l=!(!s||!s.user)&&s.user,c=!1===l&&s&&s.message?s.message:"Sorry Some error occurs",!l){e.next=25;break}return e.next=20,l.getIdToken();case 20:p=e.sent,t.props.login(p),t.props.history.push("/dashboard"),e.next=27;break;case 25:Object(f.c)("error",c),i.setState({confirmLoading:!1});case 27:case"end":return e.stop()}},e)})),t.resetPassword=function(){var e=t.state.email;e?x.a.resetPassword(e).then(function(){return Object(f.c)("success","Password reset email sent to ".concat(e,"."))}).catch(function(e){return Object(f.c)("error","Email address not found.")}):Object(f.c)("error","Please fill in email.")},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(u.b,{type:"primary",onClick:this.showModal,className:"btnFirebase"},this.props.signup?"Sign up with Firebase":"Sign in with Firebase"),m.a.createElement(b.a,{title:this.props.signup?"Sign up with Firebase":"Sign in with Firebase",visible:this.state.visible,confirmLoading:this.state.confirmLoading,onCancel:this.handleCancel,onOk:this.handleLogin,className:"isoFirebaseLoginModal",cancelText:"Cancel",okText:"Login"},m.a.createElement("form",null,m.a.createElement("div",{className:"isoInputWrapper"},m.a.createElement("label",null,"Email"),m.a.createElement(h.d,{ref:function(n){return e.email=n},size:"large",placeholder:"Email",value:this.state.email,onChange:function(n){e.setState({email:n.target.value})}})),m.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:10}},m.a.createElement("label",null,"Password"),m.a.createElement(h.d,{type:"password",size:"large",placeholder:"Password",value:this.state.password,onChange:function(n){e.setState({password:n.target.value})}})),m.a.createElement("span",{className:"isoResetPass",onClick:this.resetPassword},"Reset Password"))))}}]),n}(g.Component)},1888:function(e,n,t){e.exports=t.p+"static/media/sign.adf5846b.jpg"},2669:function(e,n,t){"use strict";t.r(n);var a=t(18),r=t(19),o=t(25),i=t(23),s=t(24),l=t(0),c=t.n(l),p=t(2651),d=t(2591),g=t(38),m=t(118),u=t(1217),h=t(190),b=t(57),f=t(63),x=t(444),v=t(62),w=t(1492),E=t(42),y=t(29),k=t(27),j=t(6),O=t(1888),L=t.n(O),I=t(47);function C(){var e=Object(y.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",";\n    right: ",";\n  }\n\n  .isoLoginContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoLoginContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ",";\n      }\n    }\n\n    .isoSignInForm {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-of-type {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n      }\n\n      .isoHelperText {\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 1.2;\n        color: ",";\n        padding-left: ",";\n        padding-right: ",";\n        margin: 15px 0;\n        position: relative;\n        display: flex;\n        align-items: center;\n\n        &:before {\n          content: '*';\n          color: ",";\n          padding-right: 3px;\n          font-size: 14px;\n          line-height: 1;\n          position: absolute;\n          top: 2px;\n          left: ",";\n          right: ",";\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoOtherLogin {\n        padding-top: 40px;\n        margin-top: 35px;\n        border-top: 1px dashed ",";\n\n        > a {\n          display: flex;\n          margin-bottom: 10px;\n\n          &:last-child {\n            margin-bottom: 0;\n          }\n        }\n\n        button {\n          width: 100%;\n          height: 42px;\n          border: 0;\n          font-weight: 500;\n\n          &.btnFacebook {\n            background-color: #3b5998;\n\n            &:hover {\n              background-color: darken(#3b5998, 5%);\n            }\n          }\n\n          &.btnGooglePlus {\n            background-color: #dd4b39;\n            margin-top: 15px;\n\n            &:hover {\n              background-color: darken(#dd4b39, 5%);\n            }\n          }\n\n          &.btnAuthZero {\n            background-color: #e14615;\n            margin-top: 15px;\n\n            &:hover {\n              background-color: darken(#e14615, 5%);\n            }\n          }\n\n          &.btnFirebase {\n            background-color: ",";\n            margin-top: 15px;\n\n            &:hover {\n              background-color: ",";\n            }\n          }\n        }\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ",";\n        margin-bottom: 10px;\n        text-decoration: none;\n\n        &:hover {\n          color: ",";\n        }\n      }\n\n      button {\n        font-weight: 500;\n      }\n    }\n  }\n"]);return C=function(){return e},e}var N=k.c.div(C(),L.a,function(e){return"rtl"===e["data-rtl"]?"inherit":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"inherit"},Object(j.palette)("secondary",2),Object(j.palette)("grayscale",0),Object(j.palette)("grayscale",0),Object(j.palette)("grayscale",0),Object(j.palette)("grayscale",0),Object(j.palette)("grayscale",1),function(e){return"rtl"===e["data-rtl"]?"inherit":"13px"},function(e){return"rtl"===e["data-rtl"]?"13px":"inherit"},Object(j.palette)("error",0),function(e){return"rtl"===e["data-rtl"]?"inherit":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"inherit"},Object(j.palette)("grayscale",2),Object(j.palette)("color",5),Object(j.palette)("color",6),Object(j.palette)("text",3),Object(j.palette)("primary",0)),P=Object(I.a)(N),S=b.a.login,F=f.a.clearMenu,z=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(s)))).state={redirectToReferrer:!1},t.handleLogin=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t.props,a=n.login,r=n.clearMenu;e?a(e):a(),r(),t.props.history.push("/dashboard/main")},t}return Object(s.a)(n,e),Object(r.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.props.isLoggedIn!==e.isLoggedIn&&!0===e.isLoggedIn&&this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){var e=this.props.history;return this.state.redirectToReferrer?c.a.createElement(p.a,{to:{pathname:"/dashboard/main"}}):c.a.createElement(P,{className:"isoSignInPage"},c.a.createElement("div",{className:"isoLoginContentWrapper"},c.a.createElement("div",{className:"isoLoginContent"},c.a.createElement("div",{className:"isoLogoWrapper"},c.a.createElement(d.a,{to:"/dashboard/main"},c.a.createElement(E.a,{id:"page.signInTitle"}))),c.a.createElement("div",{className:"isoSignInForm"},c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(m.d,{size:"large",placeholder:"Username"})),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(m.d,{size:"large",type:"password",placeholder:"Password"})),c.a.createElement("div",{className:"isoInputWrapper isoLeftRightComponent"},c.a.createElement(u.b,null,c.a.createElement(E.a,{id:"page.signInRememberMe"})),c.a.createElement(h.b,{type:"primary",onClick:this.handleLogin},c.a.createElement(E.a,{id:"page.signInButton"}))),c.a.createElement("p",{className:"isoHelperText"},c.a.createElement(E.a,{id:"page.signInPreview"})),c.a.createElement("div",{className:"isoInputWrapper isoOtherLogin"},c.a.createElement(h.b,{onClick:this.handleLogin,type:"primary",className:"btnFacebook"},c.a.createElement(E.a,{id:"page.signInFacebook"})),c.a.createElement(h.b,{onClick:this.handleLogin,type:"primary",className:"btnGooglePlus"},c.a.createElement(E.a,{id:"page.signInGooglePlus"})),x.a.isValid&&c.a.createElement(h.b,{onClick:function(){x.a.login()},type:"primary",className:"btnAuthZero"},c.a.createElement(E.a,{id:"page.signInAuth0"})),v.a.isValid&&c.a.createElement(w.a,{history:e,login:this.props.login})),c.a.createElement("div",{className:"isoCenterComponent isoHelperWrapper"},c.a.createElement(d.a,{to:"/forgotpassword",className:"isoForgotPass"},c.a.createElement(E.a,{id:"page.signInForgotPass"})),c.a.createElement(d.a,{to:"/signup"},c.a.createElement(E.a,{id:"page.signInCreateAccount"})))))))}}]),n}(l.Component);n.default=Object(g.c)(function(e){return{isLoggedIn:null!==e.Auth.idToken}},{login:S,clearMenu:F})(z)}}]);
//# sourceMappingURL=13.aae97352.chunk.js.map