"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[562],{6562:function(e,t,s){s.r(t),s.d(t,{default:function(){return K}});var a=s(2791),n=s(9434),i=s(3418),r=s(132),l=s(4942),c=s(1413),o=s(9439),d=s(7609),u=s(8916),h=s(5822),m=s(184),x=function(){var e=(0,a.useState)(!1),t=(0,o.Z)(e,2),s=t[0],x=t[1],p=(0,u.$)(),j=p.allBoards,Z=p.boardById,g=(0,u.a)().user;console.log("user",g);var v=(0,n.I0)(),f=(0,a.useState)({title:"",icon:"",background:""}),N=(0,o.Z)(f,2),C=N[0],k=N[1],b=(0,a.useState)(""),B=(0,o.Z)(b,2),y=B[0],A=B[1],I=(0,a.useState)(g.avatarURL),O=(0,o.Z)(I,2),w=O[0],F=O[1];(0,a.useEffect)((function(){k({title:Z.title,icon:Z.icon,background:Z.background})}),[Z]);var T=function(e){var t=e.target,s=t.name,a=t.value;k((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,l.Z)({},s,a))}))};var S=function(e){if("light"===e||"dark"===e||"violet"===e){if(e===g.theme&&!e)return;v((0,h.xz)(e))}};return(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:i.Z.dropdownThemeWrap,children:[(0,m.jsxs)("div",{className:i.Z.themeHeaderWrap,children:[(0,m.jsx)("p",{className:i.Z.themeText,children:"Theme"}),(0,m.jsx)("button",{type:"button",className:i.Z.btnThemeOpen,onClick:function(){x(!s)},children:(0,m.jsx)("svg",{className:i.Z.svgTheme,width:"16",height:"16",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-chevron-down")})})})]}),s&&(0,m.jsx)("div",{className:i.Z.dropdownThemeMenu,style:{position:"relative"},children:(0,m.jsxs)("ul",{className:i.Z.dropdownThemeList,children:[(0,m.jsx)("li",{className:i.Z.themeMenuItem,onClick:function(){S("light")},children:"Light"}),(0,m.jsx)("li",{className:i.Z.themeMenuItem,onClick:function(){S("dark")},children:"Dark"}),(0,m.jsx)("li",{className:i.Z.themeMenuItem,onClick:function(){S("violet")},children:"Violet"})]})})]}),(0,m.jsx)("div",{children:Z&&(0,m.jsxs)("p",{children:["Title active board:",Z.title]})}),(0,m.jsx)("input",{type:"file",name:"avatarURL",onChange:function(e){!function(e){var t=e;if(t){A(t);var s=new FileReader;s.onload=function(e){F(e.target.result)},s.readAsDataURL(t)}}(e.currentTarget.files[0])},accept:"image/*,.png,.jpg,.gif,.web"}),(0,m.jsx)("img",{alt:"user avatar",src:w||y,srcSet:w||"".concat(y," 1x, ").concat(y," 2x")}),0!==(null===j||void 0===j?void 0:j.length)&&(0,m.jsx)("ul",{style:{display:"flex",gap:"20px"},children:null===j||void 0===j?void 0:j.map((function(e){var t=e.title,s=e._id,a=e.icon,n=e.background;return(0,m.jsxs)("li",{style:{padding:"5px",border:"grey solid 2px"},onClick:function(){return v((0,r.WU)(s))},children:[(0,m.jsxs)("p",{children:["Title: ",t]}),(0,m.jsx)("p",{children:a}),(0,m.jsx)("p",{children:n}),(0,m.jsx)("button",{onClick:function(){return v((0,r.LI)(s))},children:"DELETE"})]},s)}))}),(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target,s=e.target.elements,a=s.title,n=s.icon,i=s.background,l={_id:Z._id,title:a.value,icon:n.value,background:i.value};console.log(l),v((0,r.wN)(l)),t.reset()},className:i.Z.AfWelcomRegForm,children:[(0,m.jsx)("h2",{style:{color:"white"},children:"Update board"}),(0,m.jsx)("input",{autoFocus:!0,className:i.Z.AfWelcomRegFormInput,type:"text",name:"title",placeholder:"Title",value:C.title||"",onChange:T,required:!0}),(0,m.jsx)("input",{autoFocus:!0,className:i.Z.AfWelcomRegFormInput,type:"text",name:"icon",placeholder:"icon",value:C.icon||"",onChange:T}),(0,m.jsx)("input",{autoFocus:!0,className:i.Z.AfWelcomRegFormInput,type:"text",name:"background",placeholder:"background",value:C.background||"",onChange:T}),(0,m.jsx)("button",{type:"submit",className:i.Z.AfWelcomRegFormButton,children:"Update board"})]}),(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target,s=e.target.elements,a=s.title,n=s.icon,i=s.background,l={title:a.value,icon:n.value,background:i.value};v((0,r.hN)(l)),t.reset()},className:i.Z.AfWelcomRegForm,children:[(0,m.jsx)("input",{autoFocus:!0,className:i.Z.AfWelcomRegFormInput,type:"text",name:"title",placeholder:"Title",required:!0}),(0,m.jsx)("input",{autoFocus:!0,className:i.Z.AfWelcomRegFormInput,type:"text",name:"icon",placeholder:"icon"}),(0,m.jsx)("input",{autoFocus:!0,className:i.Z.AfWelcomRegFormInput,type:"text",name:"background",placeholder:"background"}),(0,m.jsx)("button",{type:"submit",className:i.Z.AfWelcomRegFormButton,children:"Add new board"})]})]})},p=s(3733),j=function(e){var t=e.className,s=e.title,a=e.theme,n=e.onClick;return(0,m.jsx)("div",{className:t,children:(0,m.jsxs)("button",{className:(0,p.Z)(i.Z.KkBtnColumn,i.Z[a]),onClick:n,children:[(0,m.jsx)("div",{className:(0,p.Z)(i.Z.KkIconPlusColumn,i.Z[a]),children:(0,m.jsx)("svg",{className:(0,p.Z)(i.Z[a]),width:"14px",height:"14px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-plus")})})}),(0,m.jsx)("p",{className:(0,p.Z)(i.Z[a]),children:s})]})})},Z=function(e){var t=e.className,s=e.titleBoard,a=e.theme;return(0,m.jsx)("div",{className:t,children:(0,m.jsxs)("div",{className:i.Z.KkWrapFilters,children:[(0,m.jsx)("h2",{className:(0,p.Z)(i.Z.KkTitle,i.Z[a]),children:s}),(0,m.jsxs)("button",{className:(0,p.Z)(i.Z.KkBtnFilters,i.Z[a]),onClick:function(){console.log("Filters ckick")},children:[(0,m.jsx)("svg",{className:(0,p.Z)(i.Z[a]),width:"16px",height:"16px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-filter")})}),(0,m.jsx)("p",{className:(0,p.Z)(i.Z[a]),children:"Filters"})]})]})})},g=function(e){var t=e.titleCard,s=e.description;return(0,m.jsxs)("div",{className:i.Z.OBCardContainer,children:[(0,m.jsx)("h4",{className:i.Z.OBCardTitle,children:t}),(0,m.jsx)("p",{children:s}),(0,m.jsx)("hr",{className:i.Z.OBCardSeparator}),(0,m.jsxs)("div",{className:i.Z.OBCardFooterContainer,children:[(0,m.jsxs)("table",{className:i.Z.OBCardValuesContainer,children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:i.Z.OBCardProreties,children:"Priority"}),(0,m.jsx)("th",{className:i.Z.OBCardProreties,children:"Deadline"})]})}),(0,m.jsx)("tbody",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:(0,m.jsx)("div",{className:i.Z.OBCardPriorityCircle})}),(0,m.jsx)("td",{className:i.Z.OBCardDate,children:"12/05/2023"})]})})]}),(0,m.jsxs)("div",{className:i.Z.OBCardIconsWrapper,children:[(0,m.jsx)("svg",{className:i.Z.OBCardIcon,width:"16",height:"16",children:(0,m.jsx)("use",{href:d.Z+"#icon-bell"})}),(0,m.jsx)("svg",{className:i.Z.OBCardIcon,width:"16",height:"16",children:(0,m.jsx)("use",{href:d.Z+"#icon-pencil"})}),(0,m.jsx)("svg",{className:i.Z.OBCardIcon,width:"16",height:"16",children:(0,m.jsx)("use",{href:d.Z+"#icon-arrow"})}),(0,m.jsx)("svg",{className:i.Z.OBCardIcon,width:"16",height:"16",children:(0,m.jsx)("use",{href:d.Z+"#icon-trash",width:"16",height:"16"})})]})]})]})},v=function(e){var t=e.title,s=e.className,a=e.theme,n=e.onClick;return(0,m.jsx)("div",{className:s,children:(0,m.jsxs)("button",{className:(0,p.Z)(i.Z.KkBtnCard,i.Z[a]),onClick:n,children:[(0,m.jsx)("div",{className:(0,p.Z)(i.Z.KkIconPlusCard,i.Z[a]),children:(0,m.jsx)("svg",{className:(0,p.Z)(i.Z[a]),width:"14px",height:"14px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-plus")})})}),(0,m.jsx)("p",{className:(0,p.Z)(i.Z[a]),children:t})]})})},f=function(e){var t=e.className,s=e.title,a=e.theme;return(0,m.jsx)("div",{className:t,children:(0,m.jsxs)("div",{className:(0,p.Z)(i.Z.KkWrapTitleCards,i.Z[a]),children:[(0,m.jsxs)("p",{className:(0,p.Z)(i.Z[a]),children:[" ",s]}),(0,m.jsxs)("div",{className:i.Z.KkSvgTitleCards,children:[(0,m.jsx)("button",{className:i.Z.KkBtnIcons,onClick:function(){console.log("icon pensil click")},children:(0,m.jsx)("svg",{className:(0,p.Z)(i.Z[a]),width:"16px",height:"16px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-pencil")})})}),(0,m.jsx)("button",{className:i.Z.KkBtnIcons,onClick:function(){console.log("icon trash click")},children:(0,m.jsx)("svg",{className:(0,p.Z)(i.Z[a]),width:"16px",height:"16px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-trash")})})})]})]})})},N=function(e){var t=e.className,s=e.titleCards,n=e.cards,r=(0,a.useState)("light"),l=(0,o.Z)(r,1)[0];return(0,m.jsxs)("div",{className:t,children:[(0,m.jsx)(f,{className:i.Z.TitleCards,title:s,theme:l}),n.map((function(e){var t=e.id,s=e.titleCard,a=e.description;return(0,m.jsx)("ul",{children:(0,m.jsx)(g,{titleCard:s,description:a})},t)})),(0,m.jsx)(v,{className:i.Z.KkBtnAddCard,title:"Add another card",onClick:function(){console.log("Add Card click")},theme:l})]})},C=function(){var e=(0,a.useState)([{id:"01",titleCards:"Title Cards 01",cards:[{id:"01",titleCard:"Design and Prototyping SoYummy",description:"Create visually appealing and functional design prototypes based on the pproved concepts"},{id:"02",titleCard:"Research and Analysis",description:"Conduct in-depth research and analysis on the project topic, gather relevant data, and identify"},{id:"03",titleCard:"Hi hi hi",description:"Conduct in-depth research and analysis on the project topic, gather relevant data, and identify"}]},{id:"02",titleCards:"Title Cards 02",cards:[{id:"01",titleCard:"Title card 2222",description:"Create visually appealing and functional design prototypes based on the pproved concepts"},{id:"02",titleCard:"Title cadr 3333",description:"Conduct in-depth research and analysis on the project topic, gather relevant data, and identify"}]}]),t=(0,o.Z)(e,1)[0];return(0,m.jsxs)("section",{className:i.Z.KkSectionMainDashboard,children:[(0,m.jsx)(Z,{className:i.Z.KkFilters,titleBoard:"Title Board",theme:"light"}),(0,m.jsxs)("ul",{className:i.Z.KkColums,children:[t.map((function(e){var t=e.id,s=e.titleCards,a=e.cards;return(0,m.jsx)("li",{children:(0,m.jsx)(N,{className:i.Z.KkTaskColumn,titleCards:s,cards:a})},t)})),(0,m.jsx)(j,{className:i.Z.KkBtnAddColumnMain,title:"Add column",theme:"light",onClick:function(){console.log("Add column click")}})]})]})},k=s(5984),b=s(8546),B=s(4378),y=s(9852),A=s(5519),I=s(1862),O=s(3466),w=s(7892),F=s.n(w),T=s(1652),S=s(4750),W=s(2707),M=function(){var e=(0,a.useState)("without"),t=(0,o.Z)(e,2),s=t[0],n=t[1],r=(0,a.useState)(F()()),l=(0,o.Z)(r,2),u=l[0],h=l[1],x=(0,a.useState)(!1),p=(0,o.Z)(x,2),j=p[0],Z=p[1],g=function(e){n(e.target.value)},v={low:b.Z[200],medium:B.Z[200],high:y.Z[200],without:A.Z[400]};return(0,m.jsxs)("div",{className:i.Z.OBAddContainer,children:[(0,m.jsx)("h4",{className:i.Z.OBAddTitle,children:"Add card"}),(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.title.value.trim(),s=e.target.elements.description.value.trim(),a=e.target.elements.priority.value,n=F()(u).format("DD/MM/YYYY"),i={id:(0,k.x0)(),title:t,description:s,priority:a,deadline:n};console.log(i),e.target.reset()},autoComplete:"off",children:[(0,m.jsx)("label",{children:(0,m.jsx)("input",{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0,className:i.Z.OBAddInput})}),(0,m.jsx)("label",{children:(0,m.jsx)("textarea",{type:"text",name:"description",placeholder:"Description",className:"".concat(i.Z.OBAddInput," ").concat(i.Z.OBAddDescription)})}),(0,m.jsxs)("div",{className:i.Z.OBAddlabel,children:["Label color",(0,m.jsx)("div",{className:i.Z.OBAddRadioGroup,children:Object.keys(v).map((function(e){return(0,m.jsx)(I.Z,(0,c.Z)((0,c.Z)({className:i.Z.OBAddradioBtn},{value:t=e,onChange:g,checked:s===t,name:"priority",inputProps:{"aria-label":t}}),{},{sx:{color:v[e],"&.Mui-checked":{color:v[e]},"&.Mui-checked .MuiSvgIcon-root":{fontSize:"17px"},"&:not(.Mui-checked) .MuiSvgIcon-root":{fontSize:"14px",backgroundColor:v[e],borderRadius:"50%"}}}),e);var t}))})]}),(0,m.jsx)("div",{children:(0,m.jsx)(T._,{dateAdapter:S.y,children:(0,m.jsx)(W.M,{open:j,onClose:function(){return Z(!1)},className:i.Z.OBAddDeadline,onChange:function(e){return h(e)},value:u,format:"dddd, MMMM D",disablePast:!0,outsideCurrentMonth:!0,dayOfWeekFormatter:function(e){return e.slice(0,2).toUpperCase()},slots:{openPickerButton:function(){return null}},slotProps:{textField:{onClick:function(){return Z(!0)},variant:"standard",size:"small",InputProps:{disableUnderline:!0,"aria-label":"deadline",endAdornment:(0,m.jsx)(O.Z,{sx:{color:"rgba(82, 85, 188, 1)",cursor:"pointer"},position:"start",children:(0,m.jsx)("svg",{className:i.Z.OBCardIcon,width:"18px",children:(0,m.jsx)("use",{href:d.Z+"#icon-chevron-down","aria-label":"open calendar",edge:"start"})})})}}}})})}),(0,m.jsxs)("button",{className:i.Z.OBAddSubmitBtn,children:[(0,m.jsx)("div",{className:i.Z.OBAddIconWrapper,children:(0,m.jsx)("svg",{className:i.Z.OBAddIcon,children:(0,m.jsx)("use",{href:d.Z+"#icon-plus"})})}),"Add"]})]})]})},R=function(){var e=(0,n.I0)();return(0,a.useEffect)((function(){e((0,r.sj)())}),[e]),(0,m.jsx)("section",{className:i.Z.YMScreenReg,children:(0,m.jsxs)("div",{className:i.Z.AfWelcomRegWr,style:{display:"flex",flexWrap:"wrap"},children:[(0,m.jsx)(x,{}),(0,m.jsx)(C,{}),(0,m.jsx)(M,{}),(0,m.jsx)(g,{})]})})},K=function(){var e=(0,u.a)().user;return console.log(222,e),(0,m.jsx)(m.Fragment,{children:e&&(0,m.jsx)("div",{"data-theme":e.theme,children:(0,m.jsx)(R,{})})})}}}]);
//# sourceMappingURL=562.2e3b8d17.chunk.js.map