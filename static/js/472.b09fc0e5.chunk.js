"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[472],{5472:function(e,t,i){i.r(t),i.d(t,{default:function(){return F}});var n=i(2791),a=i(9434),s=i(132),r=i(9439),l=i(3418),o=i(7609),d=i(9248),c=i(184),u=function(e){var t=e.className,i=(0,d.$)().boardById;return(0,c.jsx)("div",{className:t,children:(0,c.jsxs)("div",{className:l.Z.KkWrapFilters,children:[(0,c.jsx)("h2",{className:l.Z.KkTitle,children:i.title}),(0,c.jsxs)("button",{className:l.Z.KkBtnFilters,onClick:function(){console.log("Filters ckick")},children:[(0,c.jsx)("svg",{width:"16px",height:"16px",children:(0,c.jsx)("use",{href:"".concat(o.Z,"#icon-filter")})}),(0,c.jsx)("p",{children:"Filters"})]})]})})},h=i(3733),m=function(e){var t=e.className,i=e.title,n=e.theme,a=e.onClick;return(0,c.jsx)("div",{className:t,children:(0,c.jsxs)("button",{className:(0,h.Z)(l.Z.KkBtnColumn,l.Z[n]),onClick:a,children:[(0,c.jsx)("div",{className:(0,h.Z)(l.Z.KkIconPlusColumn,l.Z[n]),children:(0,c.jsx)("svg",{className:(0,h.Z)(l.Z[n]),width:"14px",height:"14px",children:(0,c.jsx)("use",{href:"".concat(o.Z,"#icon-plus")})})}),(0,c.jsx)("p",{className:(0,h.Z)(l.Z[n]),children:i})]})})},p=i(5488),x=i(4942),Z=i(1413),j=i(7689),f=function(e){var t=e.modalTitle,i=e.modalBtnTitle,s=e.onClose,u=e.operation,h=e.idColumn,m=e.infoData,p=(0,d.a)().user,f=(0,j.UO)(),C=(0,a.I0)(),g=(0,n.useState)(m?{title:m.title}:{title:""}),v=(0,r.Z)(g,2),b=v[0],B=v[1];return(0,c.jsxs)("div",{className:l.Z.AAColumnContainer,"data-theme":p.theme,children:[(0,c.jsx)("h4",{className:l.Z.AAColumnTitle,children:t}),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=h?{title:b.title,idColumn:h}:{title:b.title,board:f.boardName};C(u(t)),s()},autoComplete:"off",children:[(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0,className:l.Z.AAColumnInput,value:b.title||"",onChange:function(e){var t=e.target,i=t.name,n=t.value;B((function(e){return(0,Z.Z)((0,Z.Z)({},e),{},(0,x.Z)({},i,n))}))}})}),(0,c.jsxs)("button",{type:"submit",className:l.Z.AAColumnBtn,children:[(0,c.jsx)("div",{className:l.Z.AAColumnSvgContainer,children:(0,c.jsx)("svg",{className:l.Z.AAColumnSvg,children:(0,c.jsx)("use",{href:o.Z+"#icon-plus"})})}),i]})]})]})},C=function(e){var t=e.title,i=e.className,n=e.theme,a=e.onClick;return(0,c.jsx)("div",{className:i,children:(0,c.jsxs)("button",{className:(0,h.Z)(l.Z.KkBtnCard,l.Z[n]),onClick:a,children:[(0,c.jsx)("div",{className:(0,h.Z)(l.Z.KkIconPlusCard,l.Z[n]),children:(0,c.jsx)("svg",{className:(0,h.Z)(l.Z[n]),width:"14px",height:"14px",children:(0,c.jsx)("use",{href:"".concat(o.Z,"#icon-plus")})})}),(0,c.jsx)("p",{className:(0,h.Z)(l.Z[n]),children:t})]})})},g=i(8546),v=i(4378),b=i(9852),B=i(5519),k=i(1862),N=i(3466),M=i(7892),y=i.n(M),A=i(1652),O=i(4750),w=i(2707),D=function(e){var t=e.modalTitle,i=e.idColumn,s=e.id,u=e.cardTitle,h=e.description,m=e.priority,p=e.deadline,x=e.modalBtnTitle,f=e.onClose,C=e.operation,M=(0,d.a)().user,D=(0,a.I0)(),S=(0,j.UO)().boardName,T=(0,n.useState)(u),I=(0,r.Z)(T,2),P=I[0],K=I[1],F=(0,n.useState)(h),W=(0,r.Z)(F,2),E=W[0],Y=W[1],z=(0,n.useState)(m||"without"),H=(0,r.Z)(z,2),L=H[0],U=H[1],_=(0,n.useState)("auto"),V=(0,r.Z)(_,2),q=V[0],R=V[1],$=(0,n.useState)(!1),G=(0,r.Z)($,2),J=G[0],Q=G[1],X=(0,n.useState)(p?y()(p,"DD/MM/YYYY"):y()()),ee=(0,r.Z)(X,2),te=ee[0],ie=ee[1],ne=y()(te).format("dddd, MMMM D")===y()().format("dddd, MMMM D")?"[Today,] MMMM D":"dddd, MMMM D",ae={low:g.Z[200],medium:v.Z[200],high:b.Z[200],without:B.Z[400]};return(0,n.useEffect)((function(){var e=9*te.format(ne).length;R("".concat(e,"px"))}),[te,ne]),(0,c.jsxs)("div",{className:l.Z.OBAddContainer,"data-theme":M.theme,children:[(0,c.jsx)("h4",{className:l.Z.OBAddTitle,children:t}),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:e.target.elements.title.value.trim(),description:e.target.elements.description.value.trim(),priority:e.target.elements.priority.value,deadLine:y()(te).format("DD/MM/YYYY")};D(C(s?(0,Z.Z)((0,Z.Z)({},t),{},{taskOwner:i,idTask:s,boardId:S}):(0,Z.Z)((0,Z.Z)({},t),{},{taskOwner:i,boardId:S}))),e.target.reset(),e.currentTarget===e.target&&(f(),document.body.style.overflow="visible")},autoComplete:"off",children:[(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0,className:l.Z.OBAddInput,defaultValue:P,onChange:function(e){return K(e.target.value)}})}),(0,c.jsx)("label",{children:(0,c.jsx)("textarea",{type:"text",name:"description",placeholder:"Description",className:"".concat(l.Z.OBAddInput," ").concat(l.Z.OBAddDescription),defaultValue:E,onChange:function(e){return Y(e.target.value)}})}),(0,c.jsxs)("div",{className:l.Z.OBAddlabel,children:["Label color",(0,c.jsx)("div",{className:l.Z.OBAddRadioGroup,children:Object.keys(ae).map((function(e){return(0,c.jsx)(k.Z,(0,Z.Z)((0,Z.Z)({className:l.Z.OBAddradioBtn},{value:t=e,onChange:function(e){return U(e.target.value)},checked:L===t,name:"priority",inputProps:{"aria-label":t}}),{},{sx:{color:ae[e],"&.Mui-checked":{color:ae[e]},"&.Mui-checked .MuiSvgIcon-root":{fontSize:"17px"},"&:not(.Mui-checked) .MuiSvgIcon-root":{fontSize:"14px",backgroundColor:ae[e],borderRadius:"50%"}}}),e);var t}))})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:l.Z.OBAddlabel,children:"Deadline"}),(0,c.jsx)(A._,{dateAdapter:O.y,children:(0,c.jsx)(w.M,{open:J,onClose:function(){return Q(!1)},onChange:function(e){return ie(e)},value:te,format:ne,disablePast:!0,outsideCurrentMonth:!0,dayOfWeekFormatter:function(e){return e.slice(0,2).toUpperCase()},slots:{openPickerButton:function(){return null}},slotProps:{popper:{placement:"bottom-start",sx:{".css-71vzt-MuiPaper-root-MuiPickersPopper-paper":{border:"1px solid",borderColor:"violet"===M.theme?"#585bbe":"#bedfad",borderRadius:"8px",padding:"18px",width:"233px",height:"254px"},".MuiPickersLayout-root.":{width:"197px"},".MuiDateCalendar-root":{width:"197px",hight:"166px"},".css-cwhad8-MuiDateCalendar-root":{height:"215px"},".MuiPickersLayout-contentWrapper":{width:"197px"},".MuiPickersCalendarHeader-root":{textAlign:"center",borderBottom:"1px solid rgba(22, 22, 22, 0.20)"},".MuiPickersCalendarHeader-label":{margin:0},".MuiTypography-root":{marginTop:"14px",width:"23px",height:"23px"},".MuiDayCalendar-monthContainer":{width:"197px",hight:"166px"},".MuiDayCalendar-weekContainer":{marginBottom:"3px"},".MuiPickersDay-dayWithMargin":{width:"23px",height:"23px"},".MuiButtonBase-root":{width:"23px",height:"23px"},".MuiPickersDay-root":{fontFamily:"Poppins",fontSize:"14px",fontweight:"400",lineHeight:"18px"},".MuiPickersDay-root.Mui-selected":{backgroundColor:"violet"===M.theme?"#585bbe":"#bedfad","&:hover":{backgroundColor:"violet"===M.theme?"#8d8fc9":"#9fd186"}}}},calendarHeader:{sx:{".MuiPickersCalendarHeader-root":{position:"relative"},".MuiPickersCalendarHeader-labelContainer":{fontFamily:"Poppins, sans-serif",fontSize:"16px",fontWeight:500,letterSpacing:"-0.32px",display:"grid"},".MuiPickersCalendarHeader-label":{display:"inline-block"},".MuiPickersCalendarHeader-switchViewButton":{display:"none"},".MuiIconButton-edgeEnd":{position:"absolute",top:"17px",left:"14px"},".MuiIconButton-edgeStart":{position:"absolute",top:"17px",right:"12px"}},style:{display:"inline",margin:0,padding:0}},previousIconButton:{sx:{stroke:"violet"===M.theme?"#5255BC":"#BEDBB0"}},nextIconButton:{sx:{stroke:"violet"===M.theme?"#5255BC":"#BEDBB0"}},textField:{fullWidth:!1,onClick:function(){return Q(!0)},variant:"standard",size:"small",sx:{width:q,minWidth:"130px",".css-nz481w-MuiInputBase-input-MuiInput-input":{padding:0}},InputProps:{disableUnderline:!0,"aria-label":"deadline",style:{fontSize:"14px",fontFamily:"Poppins, sans-serif",color:"violet"===M.theme?"#5255BC":"#BEDBB0",fontWeight:500},endAdornment:(0,c.jsx)(N.Z,{position:"start",sx:{cursor:"pointer"},children:(0,c.jsx)("svg",{className:l.Z.OBAddDateIcon,width:"18px",children:(0,c.jsx)("use",{href:o.Z+"#icon-chevron-down","aria-label":"open calendar",edge:"start"})})})}}}})})]}),(0,c.jsxs)("button",{type:"submit",className:l.Z.OBAddSubmitBtn,children:[(0,c.jsx)("div",{className:l.Z.OBAddIconWrapper,children:(0,c.jsx)("svg",{className:l.Z.OBAddSubmitIcon,children:(0,c.jsx)("use",{href:o.Z+"#icon-plus"})})}),x]})]})]})},S=function(e){switch(e){case"low":return"#8FA1D0";case"medium":return"rgba(224, 156, 181, 1)";case"high":return"#BEDBB0";case"without":return"rgba(22, 22, 22, 0.30)"}},T=function(e){var t=e.id,i=e.cardTitle,u=e.description,h=e.priority,m=e.deadline,x=e.idColumn,Z=(0,d.a)().user,f=(0,j.UO)().boardName,C=(0,n.useState)(!1),g=(0,r.Z)(C,2),v=g[0],b=g[1],B=(0,a.I0)(),k=y()().format("DD/MM/YYYY")===m,N=function(){b(!1)};return(0,c.jsxs)("div",{style:{borderLeftColor:S(h)},className:l.Z.OBCardContainer,"data-theme":Z.theme,children:[(0,c.jsx)("h4",{className:l.Z.OBCardTitle,children:i}),(0,c.jsx)("p",{className:l.Z.OBCardDescription,children:u}),(0,c.jsx)("hr",{className:l.Z.OBCardSeparator}),(0,c.jsxs)("div",{className:l.Z.OBCardFooterContainer,children:[(0,c.jsxs)("table",{className:l.Z.OBCardValuesContainer,children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{className:l.Z.OBCardProreties,children:"Priority"}),(0,c.jsx)("th",{className:l.Z.OBCardProreties,children:"Deadline"})]})}),(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("div",{style:{backgroundColor:S(h)},className:l.Z.OBCardPriorityCircle})}),(0,c.jsx)("td",{className:l.Z.OBCardDate,children:m})]})})]}),(0,c.jsxs)("div",{className:l.Z.OBCardIconsWrapper,children:[k&&(0,c.jsx)("svg",{className:l.Z.OBCardBellIcon,width:"16",height:"16",style:{stroke:"violet"===Z.theme?"#585bbe":"#bedfad"},children:(0,c.jsx)("use",{href:o.Z+"#icon-bell"})}),(0,c.jsx)("button",{type:"button",className:l.Z.OBCardBtnIcon,"aria-label":"edit task",onClick:function(){b(!0)},children:(0,c.jsx)("svg",{width:"16",height:"16",children:(0,c.jsx)("use",{href:o.Z+"#icon-pencil"})})}),v&&(0,c.jsx)(p.u,{isOpen:v,onClose:N,children:(0,c.jsx)(D,{idColumn:x,modalTitle:"Edit card",id:t,cardTitle:i,description:u,priority:h,deadline:m,modalBtnTitle:"Edit",operation:s.tq,onClose:N})}),(0,c.jsx)("button",{type:"button",className:l.Z.OBCardBtnIcon,"aria-label":"delete task",onClick:function(){return B((0,s.il)({id:t,boardName:f}))},children:(0,c.jsx)("svg",{width:"16",height:"16",children:(0,c.jsx)("use",{href:o.Z+"#icon-trash"})})})]})]})]})},I=function(e){var t=e.className,i=e.title,n=e.theme,a=e.onEdit,s=e.onTrash;return(0,c.jsx)("div",{className:t,children:(0,c.jsxs)("div",{className:(0,h.Z)(l.Z.KkWrapTitleCards,l.Z[n]),children:[(0,c.jsxs)("p",{className:(0,h.Z)(l.Z[n]),children:[" ",i]}),(0,c.jsxs)("div",{className:l.Z.KkSvgTitleCards,children:[(0,c.jsx)("button",{className:l.Z.KkBtnIcons,onClick:a,children:(0,c.jsx)("svg",{className:(0,h.Z)(l.Z[n]),width:"16px",height:"16px",children:(0,c.jsx)("use",{href:"".concat(o.Z,"#icon-pencil")})})}),(0,c.jsx)("button",{className:l.Z.KkBtnIcons,onClick:s,children:(0,c.jsx)("svg",{className:(0,h.Z)(l.Z[n]),width:"16px",height:"16px",children:(0,c.jsx)("use",{href:"".concat(o.Z,"#icon-trash")})})})]})]})})},P=function(){var e=(0,d.$)().columns,t=(0,a.I0)(),i=(0,n.useState)(!1),o=(0,r.Z)(i,2),h=o[0],x=o[1],Z=(0,n.useState)(!1),j=(0,r.Z)(Z,2),g=j[0],v=j[1],b=(0,n.useState)(!1),B=(0,r.Z)(b,2),k=B[0],N=B[1],M=(0,n.useState)(""),y=(0,r.Z)(M,2),A=y[0],O=y[1],w=(0,n.useState)(""),S=(0,r.Z)(w,2),P=S[0],K=S[1],F=function(){x(!1)},W=function(){v(!1)},E=function(){N(!1)},Y=function(e){O(e)};return(0,c.jsxs)("section",{className:l.Z.KkSectionMainDashboard,children:[(0,c.jsx)(u,{className:l.Z.KkFilters}),(0,c.jsxs)("ul",{className:l.Z.KkColums,children:[e&&e.map((function(e){var i=e._id,n=e.title,a=e.tasks;return(0,c.jsxs)("li",{children:[(0,c.jsx)(I,{className:l.Z.TitleCards,title:n,onEdit:function(){v(!0),Y(i),function(e){K(e)}(n)},onTrash:function(){return t((0,s.eA)(i))}}),a&&(0,c.jsx)("ul",{className:l.Z.KkCards,children:a.map((function(e){var t=e.title,n=e.description,a=e.priority,s=e.deadLine,r=e._id;return(0,c.jsx)("li",{children:(0,c.jsx)(T,{cardTitle:t,id:r,description:n,priority:a,deadline:s,idColumn:i})},r)}))}),(0,c.jsx)(C,{className:l.Z.KkBtnAddCard,title:"Add another card",theme:"light",onClick:function(){N(!0),Y(i)}})]},i)})),(0,c.jsx)(m,{className:l.Z.KkBtnAddColumnMain,title:0!==e.length?"Add another column":"Add column",theme:"light",onClick:function(){x(!0)}})]}),h&&(0,c.jsx)(p.u,{isOpen:h,onClose:F,children:(0,c.jsx)(f,{modalTitle:"Add column",modalBtnTitle:"Add",onClose:F,operation:s.Wf})}),g&&(0,c.jsx)(p.u,{isOpen:g,onClose:W,children:(0,c.jsx)(f,{modalTitle:"Edit column",modalBtnTitle:"Add",onClose:W,idColumn:A,infoData:{title:P},operation:s.L9})}),k&&(0,c.jsx)(p.u,{isOpen:k,onClose:E,children:(0,c.jsx)(D,{modalTitle:"Add card",modalBtnTitle:"Add",onClose:E,idColumn:A,operation:s.Sv})})]})},K=function(){var e=(0,a.I0)(),t=(0,j.UO)().boardName;return(0,n.useEffect)((function(){e((0,s.sj)()),e((0,s.WU)(t))}),[t,e]),(0,c.jsx)("section",{children:(0,c.jsx)(P,{})})},F=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(K,{})})}}}]);
//# sourceMappingURL=472.b09fc0e5.chunk.js.map