/*! For license information please see 761.4bc2000b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[761],{2761:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var s=n(2791),i=n(9434),l=n(132),a=n(9439),o=n(3418),r=n(7609),c=n(9248),d=n(184),u=function(e){var t=e.className,n=(0,c.$)().boardById;return(0,d.jsx)("div",{className:t,children:(0,d.jsxs)("div",{className:o.Z.KkWrapFilters,children:[(0,d.jsx)("h2",{className:o.Z.KkTitle,children:n.title}),(0,d.jsxs)("button",{className:o.Z.KkBtnFilters,onClick:function(){console.log("Filters ckick")},children:[(0,d.jsx)("svg",{width:"16px",height:"16px",children:(0,d.jsx)("use",{href:"".concat(r.Z,"#icon-filter")})}),(0,d.jsx)("p",{children:"Filters"})]})]})})},m=n(3733),h=function(e){var t=e.className,n=e.title,s=e.theme,i=e.onClick;return(0,d.jsx)("div",{className:t,children:(0,d.jsxs)("button",{className:(0,m.Z)(o.Z.KkBtnColumn,o.Z[s]),onClick:i,children:[(0,d.jsx)("div",{className:(0,m.Z)(o.Z.KkIconPlusColumn,o.Z[s]),children:(0,d.jsx)("svg",{className:(0,m.Z)(o.Z[s]),width:"14px",height:"14px",children:(0,d.jsx)("use",{href:"".concat(r.Z,"#icon-plus")})})}),(0,d.jsx)("p",{className:(0,m.Z)(o.Z[s]),children:n})]})})},x=n(5488),p=n(4942),f=n(1413),Z=n(7689),j=function(e){var t=e.modalTitle,n=e.modalBtnTitle,l=e.onClose,c=e.operation,u=e.idColumn,m=e.infoData,h=(0,Z.UO)(),x=(0,i.I0)(),j=(0,s.useState)(m?{title:m.title}:{title:""}),v=(0,a.Z)(j,2),g=v[0],C=v[1];console.log("idColumn :>> ",u);return(0,d.jsxs)("div",{className:o.Z.AAColumnContainer,children:[(0,d.jsx)("h4",{className:o.Z.AAColumnTitle,children:t}),(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=u?{title:g.title,idColumn:u}:{title:g.title,board:h.boardName};x(c(t)),l()},autoComplete:"off",children:[(0,d.jsx)("label",{children:(0,d.jsx)("input",{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0,className:o.Z.AAColumnInput,value:g.title||"",onChange:function(e){var t=e.target,n=t.name,s=t.value;C((function(e){return(0,f.Z)((0,f.Z)({},e),{},(0,p.Z)({},n,s))}))}})}),(0,d.jsxs)("button",{type:"submit",className:o.Z.AAColumnBtn,children:[(0,d.jsx)("div",{className:o.Z.AAColumnSvgContainer,children:(0,d.jsx)("svg",{className:o.Z.AAColumnSvg,children:(0,d.jsx)("use",{href:r.Z+"#icon-plus"})})}),n]})]})]})},v=function(e){var t=e.title,n=e.className,s=e.theme,i=e.onClick;return(0,d.jsx)("div",{className:n,children:(0,d.jsxs)("button",{className:(0,m.Z)(o.Z.KkBtnCard,o.Z[s]),onClick:i,children:[(0,d.jsx)("div",{className:(0,m.Z)(o.Z.KkIconPlusCard,o.Z[s]),children:(0,d.jsx)("svg",{className:(0,m.Z)(o.Z[s]),width:"14px",height:"14px",children:(0,d.jsx)("use",{href:"".concat(r.Z,"#icon-plus")})})}),(0,d.jsx)("p",{className:(0,m.Z)(o.Z[s]),children:t})]})})},g=n(5984),C=n(8546),B=n(4378),k=n(9852),N=n(5519),b=n(1862),A=n(3466),M=n(7892),S=n.n(M),I=n(1652),y=n(4750),O=n(2707),D=function(e){var t=e.modalTitle,n=e.id,i=e.cardTitle,l=e.description,u=e.priority,m=e.deadline,h=e.modalBtnTitle,x=(e.onClose,(0,c.a)().user),p=(0,s.useState)(i),Z=(0,a.Z)(p,2),j=Z[0],v=Z[1],M=(0,s.useState)(l),D=(0,a.Z)(M,2),T=D[0],w=D[1],F=(0,s.useState)(u||"without"),P=(0,a.Z)(F,2),K=P[0],L=P[1],W=(0,s.useState)(!1),Y=(0,a.Z)(W,2),E=Y[0],z=Y[1],H=(0,s.useState)(m?S()(m,"DD/MM/YYYY"):S()()),U=(0,a.Z)(H,2),_=U[0],R=U[1],V=S()(_).format("dddd, MMMM D")===S()().format("dddd, MMMM D")?"[Today,] MMMM D":"dddd, MMMM D",q={low:C.Z[200],medium:B.Z[200],high:k.Z[200],without:N.Z[400]};return(0,d.jsxs)("div",{className:o.Z.OBAddContainer,"data-theme":x.theme,children:[(0,d.jsx)("h4",{className:o.Z.OBAddTitle,children:t}),(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.title.value.trim(),s=e.target.elements.description.value.trim(),i=e.target.elements.priority.value,l=S()(_).format("DD/MM/YYYY"),a={id:n||(0,g.x0)(),title:t,description:s,priority:i,deadline:l};console.log(a),e.target.reset()},autoComplete:"off",children:[(0,d.jsx)("label",{children:(0,d.jsx)("input",{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0,className:o.Z.OBAddInput,defaultValue:j,onChange:function(e){return v(e.target.value)}})}),(0,d.jsx)("label",{children:(0,d.jsx)("textarea",{type:"text",name:"description",placeholder:"Description",className:"".concat(o.Z.OBAddInput," ").concat(o.Z.OBAddDescription),defaultValue:T,onChange:function(e){return w(e.target.value)}})}),(0,d.jsxs)("div",{className:o.Z.OBAddlabel,children:["Label color",(0,d.jsx)("div",{className:o.Z.OBAddRadioGroup,children:Object.keys(q).map((function(e){return(0,d.jsx)(b.Z,(0,f.Z)((0,f.Z)({className:o.Z.OBAddradioBtn},{value:t=e,onChange:function(e){return L(e.target.value)},checked:K===t,name:"priority",inputProps:{"aria-label":t}}),{},{sx:{color:q[e],"&.Mui-checked":{color:q[e]},"&.Mui-checked .MuiSvgIcon-root":{fontSize:"17px"},"&:not(.Mui-checked) .MuiSvgIcon-root":{fontSize:"14px",backgroundColor:q[e],borderRadius:"50%"}}}),e);var t}))})]}),(0,d.jsx)("div",{children:(0,d.jsx)(I._,{dateAdapter:y.y,children:(0,d.jsx)(O.M,{open:E,onClose:function(){return z(!1)},onChange:function(e){return R(e)},value:_,format:V,disablePast:!0,outsideCurrentMonth:!0,dayOfWeekFormatter:function(e){return e.slice(0,2).toUpperCase()},sx:{display:"inline"},slots:{openPickerButton:function(){return null}},slotProps:{calendarHeader:{sx:{".MuiPickersCalendarHeader-root":{position:"relative"},".MuiPickersCalendarHeader-labelContainer":{fontFamily:"Poppins, sans-serif",fontSize:"16px",fontWeight:500,letterSpacing:"-0.32px",display:"grid"},".MuiPickersCalendarHeader-label":{display:"inline-block",marginLeft:"50%",transform:"translateX(-50%)"},".MuiPickersCalendarHeader-switchViewButton":{display:"none"},".MuiIconButton-edgeEnd":{position:"absolute",top:"10px",left:"3px"},".MuiIconButton-edgeStart":{position:"absolute",top:"10px",right:"3px"}},style:{marginTop:"18px",marginBottom:"14px",display:"inline",paddingLeft:"18px",paddingRight:"18px"}},previousIconButton:{sx:{stroke:"violet"===x.theme?"#5255BC":"#BEDBB0"}},nextIconButton:{sx:{stroke:"violet"===x.theme?"#5255BC":"#BEDBB0"}},textField:{fullWidth:!1,onClick:function(){return z(!0)},variant:"standard",size:"small",InputProps:{disableUnderline:!0,"aria-label":"deadline",style:{fontSize:"14px",fontFamily:"Poppins, sans-serif",color:"violet"===x.theme?"#5255BC":"#BEDBB0",fontWeight:500,letterSpacing:"-0.28px"},endAdornment:(0,d.jsx)(A.Z,{position:"start",sx:{cursor:"pointer"},children:(0,d.jsx)("svg",{className:o.Z.OBAddDateIcon,width:"18px",children:(0,d.jsx)("use",{href:r.Z+"#icon-chevron-down","aria-label":"open calendar",edge:"start"})})})}}}})})}),(0,d.jsxs)("button",{className:o.Z.OBAddSubmitBtn,children:[(0,d.jsx)("div",{className:o.Z.OBAddIconWrapper,children:(0,d.jsx)("svg",{className:o.Z.OBAddSubmitIcon,children:(0,d.jsx)("use",{href:r.Z+"#icon-plus"})})}),h]})]})]})},T=function(){var e=(0,c.$)(),t=e.columns,n=e.tasks;console.log("columns",t),console.log("tasks",n);var m=(0,i.v9)((function(e){return e}));console.log("state :>> ",m);var p=(0,s.useState)(!1),f=(0,a.Z)(p,2),Z=f[0],g=f[1],C=(0,s.useState)(!1),B=(0,a.Z)(C,2),k=B[0],N=B[1],b=(0,s.useState)(!1),A=(0,a.Z)(b,2),M=A[0],S=A[1],I=(0,s.useState)(""),y=(0,a.Z)(I,2),O=y[0],T=y[1],w=(0,s.useState)(""),F=(0,a.Z)(w,2),P=F[0],K=F[1];console.log("activeColumnId565 :>> ",O);var L=(0,i.I0)(),W=function(){g(!1)},Y=function(){N(!1)},E=function(){S(!1)},z=function(e){T(e)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{className:o.Z.KkFilters}),(0,d.jsxs)("ul",{className:o.Z.KkColums,children:[t&&t.map((function(e){var t=e._id,n=e.title;return(0,d.jsxs)("li",{children:[(0,d.jsxs)("p",{children:["title Column: ",n]}),(0,d.jsxs)("p",{children:["id Column: ",t]}),(0,d.jsxs)("div",{className:o.Z.boardsListItemButtons,children:[(0,d.jsx)("button",{type:"button",className:o.Z.boardsListItemButton,onClick:function(){N(!0),z(t),function(e){K(e)}(n)},children:(0,d.jsx)("svg",{className:o.Z.boardsListItemSvg,width:"16px",height:"16px",children:(0,d.jsx)("use",{href:"".concat(r.Z,"#icon-pencil")})})}),(0,d.jsx)("button",{type:"button",className:o.Z.boardsListItemButton,onClick:function(){return L((0,l.eA)(t))},children:(0,d.jsx)("svg",{className:o.Z.boardsListItemSvg,width:"16px",height:"16px",children:(0,d.jsx)("use",{href:"".concat(r.Z,"#icon-trash")})})})]}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{})}),(0,d.jsx)(v,{className:o.Z.KkBtnAddColumnMain,title:"Add another card",theme:"light",onClick:function(){S(!0),z(t)}})]},t)})),(0,d.jsx)(h,{className:o.Z.KkBtnAddColumnMain,title:"Add another column",theme:"light",onClick:function(){g(!0)}})]}),Z&&(0,d.jsx)(x.u,{isOpen:Z,onClose:W,children:(0,d.jsx)(j,{modalTitle:"Add column",modalBtnTitle:"Add",onClose:W,operation:l.Wf})}),k&&(0,d.jsx)(x.u,{isOpen:k,onClose:Y,children:(0,d.jsx)(j,{modalTitle:"Edit column",modalBtnTitle:"Add",onClose:Y,idColumn:O,infoData:{title:P},operation:l.L9})}),M&&(0,d.jsx)(x.u,{isOpen:M,onClose:E,children:(0,d.jsx)(D,{modalTitle:"Add card",modalBtnTitle:"Add",onClose:E})})]})},w=function(){var e=(0,i.I0)(),t=(0,Z.UO)().boardName;return(0,s.useEffect)((function(){e((0,l.sj)()),e((0,l.WU)(t))}),[t,e]),(0,d.jsx)("section",{children:(0,d.jsx)(T,{})})},F=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(w,{})})}}}]);
//# sourceMappingURL=761.4bc2000b.chunk.js.map