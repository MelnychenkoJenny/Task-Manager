"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[610],{8610:function(e,r,a){a.r(r),a.d(r,{default:function(){return w}});var s=a(4165),o=a(5861),n=a(9439),c=a(2791),i=a(7689),l=a(1087),t=a(5705),m=a(3418),d=a(7609),u=a(6727),h=(0,u.Ry)({email:(0,u.Z_)().matches(/^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,"Type in correct email").required("Email is required"),password:(0,u.Z_)().matches(/^[0-9a-zA-Z!@#$%^&*]{6,64}$/,"Type in correct password, at least 6 characters").required("Password is required")}),f=a(9434),p=a(5147),Z=a(4546),g=a(4225),v=a(3329),x={email:"",password:"",show:!1},N=function(){var e=(0,g.a)().loading,r=(0,i.s0)(),a=(0,f.I0)(),u=(0,c.useState)(!1),N=(0,n.Z)(u,2),W=N[0],w=N[1],j=(0,c.useState)(""),A=(0,n.Z)(j,2),F=A[0],R=A[1],y=function(){w(!W)},C=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(o,n){var c,i,l,t,m,d;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.email,i=o.password,l=n.resetForm,t={email:c,password:i},e.next=5,a((0,p.n$)(t));case 5:(m=e.sent).error?(d=(0,Z.Z)(m.payload),R(d)):(r("/home"),l());case 7:case"end":return e.stop()}}),e)})));return function(r,a){return e.apply(this,arguments)}}();return(0,v.jsx)(t.J9,{validationSchema:h,initialValues:x,onSubmit:C,children:function(r){var a=r.handleChange;r.values;return(0,v.jsxs)(t.l0,{autoComplete:"off",className:m.Z.AfWelcomRegForm,children:[(0,v.jsxs)("div",{className:m.Z.AfWelcomRegFormNav,children:[(0,v.jsx)(l.OL,{to:"/auth/register",className:m.Z.AfWelcomLogFormNavReg,children:"Registration"}),(0,v.jsx)(l.OL,{to:"/auth/login",className:m.Z.AfWelcomLogFormNavLog,children:"Log In"})]}),(0,v.jsx)("div",{className:m.Z.AfWelcomBacError,children:F}),(0,v.jsxs)("div",{className:m.Z.AfWelcomRegFormInCn,children:[(0,v.jsxs)("div",{className:m.Z.AfWelcomRegFormWrInp,children:[(0,v.jsx)("div",{className:m.Z.AfWelcomFormWrError,children:(0,v.jsx)(t.Bc,{className:m.Z.AfWelcomFormError,name:"email",component:"div"})}),(0,v.jsx)(t.gN,{className:m.Z.AfWelcomRegFormInput,type:"email",name:"email",placeholder:"Enter your email",onChange:a("email"),required:!0})]}),(0,v.jsxs)("div",{className:m.Z.AfWelcomRegFormWrInp,children:[(0,v.jsx)("div",{className:m.Z.AfWelcomFormWrError,children:(0,v.jsx)(t.Bc,{className:m.Z.AfWelcomFormError,name:"password",component:"div"})}),(0,v.jsxs)("div",{className:m.Z.AfWelcomShowPassWr,children:[(0,v.jsx)(t.gN,{className:m.Z.AfWelcomRegFormInput,id:"password",type:W?"text":"password",name:"password",placeholder:"Confirm your password",onChange:a("password"),required:!0}),(0,v.jsx)("svg",{className:m.Z.AfWelcomFormIconShowPass,alt:"watch password icon",onClick:y,children:(0,v.jsx)("use",{href:d.Z+"#icon-eye"})})]})]})]}),(0,v.jsxs)("button",{type:"submit",className:m.Z.AfWelcomRegFormButton,children:["Log In Now",e&&(0,v.jsx)("div",{className:m.Z.AfWelcomRegFormButtonLoad})]})]})}})},W=function(){var e=(0,g.a)().user;return(0,v.jsx)("section",{className:m.Z.AfWelcomReg,"data-theme":e.theme,children:(0,v.jsx)("div",{className:m.Z.AfWelcomRegWr,children:(0,v.jsx)(N,{})})})},w=function(){return(0,v.jsx)(W,{})}},4546:function(e,r,a){a.d(r,{Z:function(){return o}});var s={400:"Please enter correct email or password",401:"Password or email is incorrect",403:"Forbidden",404:"No Such Page",409:"The email address you have entered is already associated with another account"};function o(e){return s[e]}}}]);
//# sourceMappingURL=610.ff2e624d.chunk.js.map