(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{67720:function(e,t,r){"use strict";var n=r(63366),i=r(87462),a=r(67294),o=r(86010),l=r(27192),c=r(41796),s=r(11496),u=r(33616),d=r(35097),h=r(85893);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,c.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,i.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),p=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),v=a.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:c,className:s,component:v=(c?"div":"hr"),flexItem:m=!1,light:b=!1,orientation:x="horizontal",role:w=("hr"!==v?"separator":void 0),textAlign:j="center",variant:y="fullWidth"}=r,Z=(0,n.Z)(r,f),k=(0,i.Z)({},r,{absolute:a,component:v,flexItem:m,light:b,orientation:x,role:w,textAlign:j,variant:y}),P=(e=>{const{absolute:t,children:r,classes:n,flexItem:i,light:a,orientation:o,textAlign:c,variant:s}=e,u={root:["root",t&&"absolute",s,a&&"light","vertical"===o&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===c&&"vertical"!==o&&"textAlignRight","left"===c&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(u,d.V,n)})(k);return(0,h.jsx)(g,(0,i.Z)({as:v,className:(0,o.Z)(P.root,s),role:w,ref:t,ownerState:k},Z,{children:c?(0,h.jsx)(p,{className:P.wrapper,ownerState:k,children:c}):null}))}));t.Z=v},35097:function(e,t,r){"use strict";r.d(t,{V:function(){return i}});var n=r(28979);function i(e){return(0,n.Z)("MuiDivider",e)}const a=(0,r(76087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},66970:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deals",function(){return r(16005)}])},16005:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return T},default:function(){return M}});var n,i=r(85893),a=r(67720),o=r(11496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=(0,o.ZP)(a.Z)((function(e){var t=e.theme;return l(n={position:"relative",right:"calc((100vw - ".concat(t.breakpoints.values.lg,"px) / 2)"),width:"100vw"},t.breakpoints.down("lg"),{right:"2rem"}),l(n,t.breakpoints.down("sm"),{right:"1.5rem"}),n})),s=function(){return(0,i.jsx)(c,{})},u=r(16706),d=r(41664),h=r(83321);var f=(0,o.ZP)(h.Z)((function(e){var t,r,n,i=e.theme;return t={display:"block",margin:"2rem auto 0",width:"30%",maxWidth:250},r=i.breakpoints.down("sm"),n={width:"50%",maxWidth:"unset"},r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t})),g=function(e){var t=e.link;return(0,i.jsx)(d.default,{href:"/deals/".concat(t),passHref:!0,children:(0,i.jsx)(f,{component:"a",variant:"black",children:"View All"})})},p=r(17475);var v=(0,o.ZP)("div")((function(e){var t,r,n,i=e.theme;return t={marginBottom:"3rem"},r=i.breakpoints.down("sm"),n={marginBottom:"2rem"},r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t})),m=function(e){var t=e.title,r=e.subtitle;return(0,i.jsxs)(v,{children:[(0,i.jsx)(p.Z,{variant:"h2",children:t}),r&&(0,i.jsx)(p.Z,{variant:"body1",weight:300,sx:{mt:"0.5rem"},children:r})]})},b=r(52956),x=function(e){var t=e.data;return(0,i.jsxs)("section",{children:[(0,i.jsx)(m,{title:"Closed Deals"}),(0,i.jsx)(u.Z,{children:t.map((function(e){return(0,i.jsx)(b.Z,{data:e},e.slug)}))}),(0,i.jsx)(g,{link:"closed"})]})},w=function(e){var t=e.data;return(0,i.jsxs)("section",{children:[(0,i.jsx)(m,{title:"Launching Soon"}),(0,i.jsx)(u.Z,{children:t.map((function(e){return(0,i.jsx)(b.Z,{data:e},e.slug)}))})]})},j=r(44695),y=r(98345),Z=r(1853),k=r(37702),P=r(98456),S=r(67294),O=r(88767),A=r(53203);function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C,D=["All","Public","Private"],L=function(e){var t=e.data,r=(0,S.useState)(t),n=r[0],a=r[1],o=(0,S.useState)(""),l=o[0],c=o[1],s=(0,S.useState)(""),d=s[0],h=s[1],f=(0,S.useState)("All"),g=f[0],v=f[1],x=(0,O.useMutation)(j.x),w=x.data,C=x.isLoading,L=x.error,E=x.mutate;(0,S.useEffect)((function(){var e;switch(g){case"Public":e=["public"];break;case"Private":e=["private"];break;case"All":default:e=["public","private"]}E(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_(e,t,r[t])}))}return e}({type:e,status:["active"]},l?{sortBy:l}:{},(null===d||void 0===d?void 0:d.length)>2?{searchText:d}:{}))}),[d,l,g]),(0,S.useEffect)((function(){a(w||t)}),[w,t]);var N=n.sort((function(e,t){return e.type>t.type?-1:t.type>e.type?1:0}));return(0,i.jsxs)(A.s,{children:[(0,i.jsx)(m,{title:"Live Deals",subtitle:(0,i.jsxs)(i.Fragment,{children:["Browse current investment opportunities on Tyke.",(0,i.jsx)("br",{})]})}),(0,i.jsx)(y.Z,{sortBy:l,setSort:function(e){return c(e)},setSearch:function(e){return h(e)}}),(0,i.jsx)(A.o,{children:(0,i.jsx)(k.Z,{options:D,currentOption:g,changeOption:function(e){return v(e)}})}),C?(0,i.jsx)(A.o,{children:L?(0,i.jsx)(Z.Z,{children:L.message}):(0,i.jsx)(P.Z,{size:"3rem"})}):n.length>0?(0,i.jsx)(u.Z,{children:N.map((function(e){return(0,i.jsx)(b.Z,{data:e},e.slug)}))}):(0,i.jsx)(p.Z,{variant:"body1",color:"grey.300",align:"center",children:"No Results Found"})]})};function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N=(0,o.ZP)("div")((function(e){var t=e.theme;return E(C={display:"flex",flexDirection:"column",gap:"4rem",margin:"4rem 0"},t.breakpoints.down("lg"),{margin:"3rem auto"}),E(C,t.breakpoints.down("md"),{margin:"1.5rem 0"}),E(C,t.breakpoints.down("sm"),{gap:"1.5rem"}),C})),R=function(e){var t=e.data;return(0,i.jsxs)("section",{children:[(0,i.jsx)(m,{title:"Private Deals",subtitle:(0,i.jsx)(i.Fragment,{children:"Exclusively for You"})}),(0,i.jsx)(u.Z,{children:t.map((function(e){return(0,i.jsx)(b.Z,{data:e},e.slug)}))})]})},I=function(e){var t=e.tykeX,r=e.allActive,n=e.threeClosed,a=e.upcoming;return(0,i.jsxs)(N,{children:[(null===t||void 0===t?void 0:t.length)>0&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(R,{data:t})}),r.length>0&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(L,{data:r})}),a.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{}),(0,i.jsx)(w,{data:a})]}),n.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{}),(0,i.jsx)(x,{data:n})]})]})},B=r(30549),V=r(23842);function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var F=function(e){var t=e.tykeX,r=e.allActive,n=e.threeClosed,a=e.upcoming,o=(0,V.n)(),l=o.isLoggedIn,c=o.logout;return(0,S.useEffect)((function(){l&&"Unauthorized"===t&&c()}),[l,t,c]),(0,i.jsx)(I,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){W(e,t,r[t])}))}return e}({},"Unauthorized"!==t?{tykeX:t}:{},{allActive:r,threeClosed:n,upcoming:a}))};F.Layout=B.Z;var T=!0,M=F}},function(e){e.O(0,[3593,8538,2654,5752,9774,2888,179],(function(){return t=66970,e(e.s=t);var t}));var t=e.O();_N_E=t}]);