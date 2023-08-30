"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[52],{5052:function(e,r,a){a.r(r),a.d(r,{default:function(){return A}});var s=a(4165),o=a(1413),n=a(5861),c=a(9439),m=a(2791),l=a(3418),i=a(7609),t=a(7689),d=a(1087),u=a(5822),h=a(5705),f=a(9434),Z=a(6727),p=(0,Z.Ry)({name:(0,Z.Z_)().matches(/^[0-9a-zA-Z!@#$%^&*]{2,32}$/,"Type in correct name").trim().required("Name is required"),email:(0,Z.Z_)().matches(/^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,"Type in correct email").required("Email is required"),password:(0,Z.Z_)().matches(/^[0-9a-zA-Z!@#$%^&*]{6,64}$/,"Type in correct password, at least 6 characters").required("Password is required")}),g=a(4546),N=a(184),v={name:"",email:"",password:""},x=function(){var e=(0,t.s0)(),r=(0,f.I0)(),a=(0,m.useState)(!1),Z=(0,c.Z)(a,2),x=Z[0],W=Z[1],A=(0,m.useState)(""),j=(0,c.Z)(A,2),w=j[0],F=j[1],R=function(){var a=(0,n.Z)((0,s.Z)().mark((function a(n,c){var m,l,i,t;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return m=c.resetForm,l=(0,o.Z)({},n),a.next=4,r(u.Z.userRegistration(l));case 4:(i=a.sent).error?(t=(0,g.Z)(i.payload),F(t)):(e("/home"),m());case 6:case"end":return a.stop()}}),a)})));return function(e,r){return a.apply(this,arguments)}}(),y=function(){W(!x),console.log(x)};return(0,N.jsx)(h.J9,{validationSchema:p,initialValues:v,onSubmit:R,children:function(e){var r=e.handleChange,a=e.values;return(0,N.jsxs)(h.l0,{className:l.Z.AfWelcomRegForm,children:[(0,N.jsxs)("div",{className:l.Z.AfWelcomRegFormNav,children:[(0,N.jsx)(d.OL,{to:"/auth/register",className:l.Z.AfWelcomRegFormNavReg,children:"Registration"}),(0,N.jsx)(d.OL,{to:"/auth/login",className:l.Z.AfWelcomRegFormNavLog,children:"Log In"})]}),(0,N.jsx)("div",{className:l.Z.AfWelcomBacError,children:w}),(0,N.jsxs)("div",{className:l.Z.AfWelcomRegFormInCn,children:[(0,N.jsxs)("div",{className:l.Z.AfWelcomRegFormWrInp,children:[(0,N.jsx)("div",{className:l.Z.AfWelcomFormWrError,children:(0,N.jsx)(h.Bc,{className:l.Z.AfWelcomFormError,name:"name",component:"div"})}),(0,N.jsx)(h.gN,{autoFocus:!0,className:l.Z.AfWelcomRegFormInput,type:"text",name:"name",placeholder:"Enter your name",onChange:r("name"),value:a.name||"",required:!0})]}),(0,N.jsxs)("div",{className:l.Z.AfWelcomRegFormWrInp,children:[(0,N.jsx)("div",{className:l.Z.AfWelcomFormWrError,children:(0,N.jsx)(h.Bc,{className:l.Z.AfWelcomFormError,name:"email",component:"div"})}),(0,N.jsx)(h.gN,{className:l.Z.AfWelcomRegFormInput,type:"email",name:"email",placeholder:"Enter your email",onChange:r("email"),value:a.email||"",required:!0})]}),(0,N.jsxs)("div",{className:l.Z.AfWelcomRegFormWrInp,children:[(0,N.jsx)("div",{className:l.Z.AfWelcomFormWrError,children:(0,N.jsx)(h.Bc,{className:l.Z.AfWelcomFormError,name:"password",component:"div"})}),(0,N.jsxs)("div",{className:l.Z.AfWelcomShowPassWr,children:[(0,N.jsx)(h.gN,{className:l.Z.AfWelcomRegFormInput,type:x?"text":"password",name:"password",placeholder:"Create a password",onChange:r("password"),value:a.password||"",required:!0}),(0,N.jsx)("svg",{className:l.Z.AfWelcomFormIconShowPass,alt:"watch password icon",onClick:y,children:(0,N.jsx)("use",{href:i.Z+"#icon-eye"})})]})]})]}),(0,N.jsx)("button",{type:"submit",className:l.Z.AfWelcomRegFormButton,children:"Register Now"})]})}})},W=function(){return(0,N.jsx)("section",{className:l.Z.AfWelcomReg,children:(0,N.jsx)("div",{className:l.Z.AfWelcomRegWr,children:(0,N.jsx)(x,{})})})},A=function(){return(0,N.jsx)(W,{})}},4546:function(e,r,a){a.d(r,{Z:function(){return o}});var s={400:"Please enter correct email or password",401:"Password or email is incorrect",403:"Forbidden",404:"No Such Page",409:"The email address you have entered is already associated with another account"};function o(e){return s[e]}}}]);
//# sourceMappingURL=52.5b8b417c.chunk.js.map