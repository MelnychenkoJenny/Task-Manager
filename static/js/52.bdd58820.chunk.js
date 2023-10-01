"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[52],{5052:function(e,a,r){r.r(a),r.d(a,{default:function(){return j}});var s=r(4165),o=r(1413),n=r(5861),c=r(9439),m=r(2791),l=r(3418),i=r(7609),t=r(7689),d=r(1087),u=r(5147),h=r(5705),f=r(9434),Z=r(6727),p=(0,Z.Ry)({name:(0,Z.Z_)().matches(/^[0-9a-zA-Z!@#$%^&*]{2,32}$/,"Type in correct name").trim().required("Name is required"),email:(0,Z.Z_)().matches(/^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,"Type in correct email").required("Email is required"),password:(0,Z.Z_)().matches(/^[0-9a-zA-Z!@#$%^&*]{6,64}$/,"Type in correct password, at least 6 characters").required("Password is required")}),g=r(4546),v=r(4225),N=r(3329),x={name:"",email:"",password:""},W=function(){var e=(0,v.a)().loading,a=(0,t.s0)(),r=(0,f.I0)(),Z=(0,m.useState)(!1),W=(0,c.Z)(Z,2),A=W[0],j=W[1],F=(0,m.useState)(""),w=(0,c.Z)(F,2),R=w[0],y=w[1],E=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(n,c){var m,l,i,t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=c.resetForm,l=(0,o.Z)({},n),e.next=4,r((0,u.f0)(l));case 4:(i=e.sent).error?(t=(0,g.Z)(i.payload),y(t)):(a("/home"),m());case 6:case"end":return e.stop()}}),e)})));return function(a,r){return e.apply(this,arguments)}}(),I=function(){j(!A),console.log(A)};return(0,N.jsx)(h.J9,{validationSchema:p,initialValues:x,onSubmit:E,children:function(a){var r=a.handleChange,s=a.values;return(0,N.jsxs)(h.l0,{className:l.Z.AfWelcomRegForm,children:[(0,N.jsxs)("div",{className:l.Z.AfWelcomRegFormNav,children:[(0,N.jsx)(d.OL,{to:"/auth/register",className:l.Z.AfWelcomRegFormNavReg,children:"Registration"}),(0,N.jsx)(d.OL,{to:"/auth/login",className:l.Z.AfWelcomRegFormNavLog,children:"Log In"})]}),(0,N.jsx)("div",{className:l.Z.AfWelcomBacError,children:R}),(0,N.jsxs)("div",{className:l.Z.AfWelcomRegFormInCn,children:[(0,N.jsxs)("div",{className:l.Z.AfWelcomRegFormWrInp,children:[(0,N.jsx)("div",{className:l.Z.AfWelcomFormWrError,children:(0,N.jsx)(h.Bc,{className:l.Z.AfWelcomFormError,name:"name",component:"div"})}),(0,N.jsx)(h.gN,{autoFocus:!0,className:l.Z.AfWelcomRegFormInput,type:"text",name:"name",placeholder:"Enter your name",onChange:r("name"),value:s.name||"",required:!0})]}),(0,N.jsxs)("div",{className:l.Z.AfWelcomRegFormWrInp,children:[(0,N.jsx)("div",{className:l.Z.AfWelcomFormWrError,children:(0,N.jsx)(h.Bc,{className:l.Z.AfWelcomFormError,name:"email",component:"div"})}),(0,N.jsx)(h.gN,{className:l.Z.AfWelcomRegFormInput,type:"email",name:"email",placeholder:"Enter your email",onChange:r("email"),value:s.email||"",required:!0})]}),(0,N.jsxs)("div",{className:l.Z.AfWelcomRegFormWrInp,children:[(0,N.jsx)("div",{className:l.Z.AfWelcomFormWrError,children:(0,N.jsx)(h.Bc,{className:l.Z.AfWelcomFormError,name:"password",component:"div"})}),(0,N.jsxs)("div",{className:l.Z.AfWelcomShowPassWr,children:[(0,N.jsx)(h.gN,{className:l.Z.AfWelcomRegFormInput,type:A?"text":"password",name:"password",placeholder:"Create a password",onChange:r("password"),value:s.password||"",required:!0}),(0,N.jsx)("svg",{className:l.Z.AfWelcomFormIconShowPass,alt:"watch password icon",onClick:I,children:(0,N.jsx)("use",{href:i.Z+"#icon-eye"})})]})]})]}),(0,N.jsxs)("button",{type:"submit",className:l.Z.AfWelcomRegFormButton,children:["Register Now",e&&(0,N.jsx)("div",{className:l.Z.AfWelcomRegFormButtonLoad})]})]})}})},A=function(){var e=(0,v.a)().user;return(0,N.jsx)("section",{className:l.Z.AfWelcomReg,"data-theme":e.theme,children:(0,N.jsx)("div",{className:l.Z.AfWelcomRegWr,children:(0,N.jsx)(W,{})})})},j=function(){return(0,N.jsx)(A,{})}},4546:function(e,a,r){r.d(a,{Z:function(){return o}});var s={400:"Please enter correct email or password",401:"Password or email is incorrect",403:"Forbidden",404:"No Such Page",409:"The email address you have entered is already associated with another account"};function o(e){return s[e]}}}]);
//# sourceMappingURL=52.bdd58820.chunk.js.map