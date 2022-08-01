"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2214],{99226:function(e,t,n){var r=n(61354),o=n(49981);const i=(0,n(68239).Z)(),a=(0,r.Z)({defaultTheme:i,defaultClassName:"MuiBox-root",generateClassName:o.Z.generate});t.Z=a},69368:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(63366),o=n(87462),i=n(67294),a=n(27192),c=n(41796),s=n(21964),l=n(82066),u=n(85893),d=(0,l.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),f=(0,l.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,l.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=n(98216),h=n(33616),v=n(11496),g=n(28979);function b(e){return(0,g.Z)("MuiCheckbox",e)}var y=(0,n(76087).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const S=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],E=(0,v.ZP)(s.Z,{shouldForwardProp:e=>(0,v.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t[`color${(0,m.Z)(n.color)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({color:e.palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:(0,c.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${y.checked}, &.${y.indeterminate}`]:{color:e.palette[t.color].main},[`&.${y.disabled}`]:{color:e.palette.action.disabled}}))),T=(0,u.jsx)(f,{}),w=(0,u.jsx)(d,{}),O=(0,u.jsx)(p,{});var P=i.forwardRef((function(e,t){var n,c;const s=(0,h.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:l=T,color:d="primary",icon:f=w,indeterminate:p=!1,indeterminateIcon:v=O,inputProps:g,size:y="medium"}=s,P=(0,r.Z)(s,S),x=p?v:f,Z=p?v:l,C=(0,o.Z)({},s,{color:d,indeterminate:p,size:y}),R=(e=>{const{classes:t,indeterminate:n,color:r}=e,i={root:["root",n&&"indeterminate",`color${(0,m.Z)(r)}`]},c=(0,a.Z)(i,b,t);return(0,o.Z)({},t,c)})(C);return(0,u.jsx)(E,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":p},g),icon:i.cloneElement(x,{fontSize:null!=(n=x.props.fontSize)?n:y}),checkedIcon:i.cloneElement(Z,{fontSize:null!=(c=Z.props.fontSize)?c:y}),ownerState:C,ref:t},P,{classes:R}))}))},37645:function(e,t,n){var r=n(87462),o=n(63366),i=n(67294),a=n(86010),c=n(27192),s=n(15861),l=n(11496),u=n(33616),d=n(4472),f=n(34182),p=n(85893);const m=["className","id"],h=(0,l.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),v=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiDialogTitle"}),{className:s,id:l}=n,v=(0,o.Z)(n,m),g=n,b=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},d.a,t)})(g),{titleId:y=l}=i.useContext(f.Z);return(0,p.jsx)(h,(0,r.Z)({component:"h2",className:(0,a.Z)(b.root,s),ownerState:g,ref:t,variant:"h6",id:y},v))}));t.Z=v},96514:function(e,t,n){var r=n(87462),o=n(63366),i=n(67294),a=n(98885),c=n(2734),s=n(30577),l=n(51705),u=n(85893);const d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function f(e){return`scale(${e}, ${e**2})`}const p={entering:{opacity:1,transform:f(1)},entered:{opacity:1,transform:"none"}},m=i.forwardRef((function(e,t){const{addEndListener:n,appear:m=!0,children:h,easing:v,in:g,onEnter:b,onEntered:y,onEntering:S,onExit:E,onExited:T,onExiting:w,style:O,timeout:P="auto",TransitionComponent:x=a.ZP}=e,Z=(0,o.Z)(e,d),C=i.useRef(),R=i.useRef(),I=(0,c.Z)(),N=i.useRef(null),M=(0,l.Z)(h.ref,t),_=(0,l.Z)(N,M),k=e=>t=>{if(e){const n=N.current;void 0===t?e(n):e(n,t)}},U=k(S),A=k(((e,t)=>{(0,s.n)(e);const{duration:n,delay:r,easing:o}=(0,s.C)({style:O,timeout:P,easing:v},{mode:"enter"});let i;"auto"===P?(i=I.transitions.getAutoHeightDuration(e.clientHeight),R.current=i):i=n,e.style.transition=[I.transitions.create("opacity",{duration:i,delay:r}),I.transitions.create("transform",{duration:.666*i,delay:r,easing:o})].join(","),b&&b(e,t)})),j=k(y),L=k(w),D=k((e=>{const{duration:t,delay:n,easing:r}=(0,s.C)({style:O,timeout:P,easing:v},{mode:"exit"});let o;"auto"===P?(o=I.transitions.getAutoHeightDuration(e.clientHeight),R.current=o):o=t,e.style.transition=[I.transitions.create("opacity",{duration:o,delay:n}),I.transitions.create("transform",{duration:.666*o,delay:n||.333*o,easing:r})].join(","),e.style.opacity="0",e.style.transform=f(.75),E&&E(e)})),W=k(T);return i.useEffect((()=>()=>{clearTimeout(C.current)}),[]),(0,u.jsx)(x,(0,r.Z)({appear:m,in:g,nodeRef:N,onEnter:A,onEntered:j,onEntering:U,onExit:D,onExited:W,onExiting:L,addEndListener:e=>{"auto"===P&&(C.current=setTimeout(e,R.current||0)),n&&n(N.current,e)},timeout:"auto"===P?null:P},Z,{children:(e,t)=>i.cloneElement(h,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:f(.75),visibility:"exited"!==e||g?void 0:"hidden"},p[e],O,h.props.style),ref:_},t))}))}));m.muiSupportAuto=!0,t.Z=m},78462:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),c=n(27192),s=n(11496),l=n(33616),u=n(59773),d=n(28979);function f(e){return(0,d.Z)("MuiList",e)}(0,n(76087).Z)("MuiList",["root","padding","dense","subheader"]);var p=n(85893);const m=["children","className","component","dense","disablePadding","subheader"],h=(0,s.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((({ownerState:e})=>(0,o.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})));var v=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiList"}),{children:s,className:d,component:v="ul",dense:g=!1,disablePadding:b=!1,subheader:y}=n,S=(0,r.Z)(n,m),E=i.useMemo((()=>({dense:g})),[g]),T=(0,o.Z)({},n,{component:v,dense:g,disablePadding:b}),w=(e=>{const{classes:t,disablePadding:n,dense:r,subheader:o}=e,i={root:["root",!n&&"padding",r&&"dense",o&&"subheader"]};return(0,c.Z)(i,f,t)})(T);return(0,p.jsx)(u.Z.Provider,{value:E,children:(0,p.jsxs)(h,(0,o.Z)({as:v,className:(0,a.Z)(w.root,d),ref:t,ownerState:T},S,{children:[y,s]}))})}))},59773:function(e,t,n){const r=n(67294).createContext({});t.Z=r},26336:function(e,t,n){n.d(t,{L:function(){return o}});var r=n(28979);function o(e){return(0,r.Z)("MuiListItemText",e)}const i=(0,n(76087).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=i},21964:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),c=n(27192),s=n(98216),l=n(11496),u=n(49299),d=n(74423),f=n(82607),p=n(28979);function m(e){return(0,p.Z)("PrivateSwitchBase",e)}(0,n(76087).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var h=n(85893);const v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,l.ZP)(f.Z,{skipSx:!0})((({ownerState:e})=>(0,o.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),b=(0,l.ZP)("input",{skipSx:!0})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var y=i.forwardRef((function(e,t){const{autoFocus:n,checked:i,checkedIcon:l,className:f,defaultChecked:p,disabled:y,disableFocusRipple:S=!1,edge:E=!1,icon:T,id:w,inputProps:O,inputRef:P,name:x,onBlur:Z,onChange:C,onFocus:R,readOnly:I,required:N,tabIndex:M,type:_,value:k}=e,U=(0,r.Z)(e,v),[A,j]=(0,u.Z)({controlled:i,default:Boolean(p),name:"SwitchBase",state:"checked"}),L=(0,d.Z)();let D=y;L&&"undefined"===typeof D&&(D=L.disabled);const W="checkbox"===_||"radio"===_,z=(0,o.Z)({},e,{checked:A,disabled:D,disableFocusRipple:S,edge:E}),F=(e=>{const{classes:t,checked:n,disabled:r,edge:o}=e,i={root:["root",n&&"checked",r&&"disabled",o&&`edge${(0,s.Z)(o)}`],input:["input"]};return(0,c.Z)(i,m,t)})(z);return(0,h.jsxs)(g,(0,o.Z)({component:"span",className:(0,a.Z)(F.root,f),centerRipple:!0,focusRipple:!S,disabled:D,tabIndex:null,role:void 0,onFocus:e=>{R&&R(e),L&&L.onFocus&&L.onFocus(e)},onBlur:e=>{Z&&Z(e),L&&L.onBlur&&L.onBlur(e)},ownerState:z,ref:t},U,{children:[(0,h.jsx)(b,(0,o.Z)({autoFocus:n,checked:i,defaultChecked:p,className:F.input,disabled:D,id:W&&w,name:x,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;j(t),C&&C(e,t)},readOnly:I,ref:P,required:N,ownerState:z,tabIndex:M,type:_},"checkbox"===_&&void 0===k?{}:{value:k},O)),A?l:T]}))}))},61354:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),o=n(63366),i=n(67294),a=n(86010),c=n(30561),s=n(86523),l=n(39707),u=n(96682),d=n(85893);const f=["className","component"];function p(e={}){const{defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:p}=e,m=(0,c.ZP)("div")(s.Z);return i.forwardRef((function(e,i){const c=(0,u.Z)(t),s=(0,l.Z)(e),{className:h,component:v="div"}=s,g=(0,o.Z)(s,f);return(0,d.jsx)(m,(0,r.Z)({as:v,ref:i,className:(0,a.Z)(h,p?p(n):n),theme:c},g))}))}},64599:function(e,t,n){n.r(t),n.d(t,{afterMain:function(){return r.wX},afterRead:function(){return r.r5},afterWrite:function(){return r.MS},applyStyles:function(){return o.Z},arrow:function(){return i.Z},auto:function(){return r.d7},basePlacements:function(){return r.mv},beforeMain:function(){return r.XM},beforeRead:function(){return r.N7},beforeWrite:function(){return r.iv},bottom:function(){return r.I},clippingParents:function(){return r.zV},computeStyles:function(){return a.Z},createPopper:function(){return h.fi},createPopperBase:function(){return p.fi},createPopperLite:function(){return g},detectOverflow:function(){return m.Z},end:function(){return r.ut},eventListeners:function(){return c.Z},flip:function(){return s.Z},hide:function(){return l.Z},left:function(){return r.t$},main:function(){return r.DH},modifierPhases:function(){return r.xs},offset:function(){return u.Z},placements:function(){return r.Ct},popper:function(){return r.k5},popperGenerator:function(){return p.kZ},popperOffsets:function(){return d.Z},preventOverflow:function(){return f.Z},read:function(){return r.ij},reference:function(){return r.YP},right:function(){return r.F2},start:function(){return r.BL},top:function(){return r.we},variationPlacements:function(){return r.bw},viewport:function(){return r.Pj},write:function(){return r.cW}});var r=n(87701),o=n(17824),i=n(66896),a=n(36531),c=n(82372),s=n(68855),l=n(19892),u=n(82122),d=n(77421),f=n(394),p=n(45704),m=n(6486),h=n(20804),v=[c.Z,d.Z,a.Z,o.Z],g=(0,p.kZ)({defaultModifiers:v})},55376:function(e,t,n){n.d(t,{$Q:function(){return p}});var r=n(67294),o=n(53328);const i="label";function a(e,t){"function"===typeof e?e(t):e&&(e.current=t)}function c(e,t){e.labels=t}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;const r=[];e.datasets=t.map((t=>{const o=e.datasets.find((e=>e[n]===t[n]));return o&&t.data&&!r.includes(o)?(r.push(o),Object.assign(o,t),o):{...t}}))}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;const n={labels:[],datasets:[]};return c(n,e.labels),s(n,e.datasets,t),n}function u(e,t){let{height:n=150,width:i=300,redraw:u=!1,datasetIdKey:d,type:f,data:p,options:m,plugins:h=[],fallbackContent:v,...g}=e;const b=(0,r.useRef)(null),y=(0,r.useRef)(),S=()=>{b.current&&(y.current=new o.kL(b.current,{type:f,data:l(p,d),options:m,plugins:h}),a(t,y.current))},E=()=>{a(t,null),y.current&&(y.current.destroy(),y.current=null)};return(0,r.useEffect)((()=>{var e,t;!u&&y.current&&m&&(e=y.current,t=m,e.options={...t})}),[u,m]),(0,r.useEffect)((()=>{!u&&y.current&&c(y.current.config.data,p.labels)}),[u,p.labels]),(0,r.useEffect)((()=>{!u&&y.current&&p.datasets&&s(y.current.config.data,p.datasets,d)}),[u,p.datasets]),(0,r.useEffect)((()=>{y.current&&(u?(E(),setTimeout(S)):y.current.update())}),[u,m,p.labels,p.datasets]),(0,r.useEffect)((()=>(S(),()=>E())),[]),r.createElement("canvas",Object.assign({ref:b,role:"img",height:n,width:i},g),v)}const d=(0,r.forwardRef)(u);function f(e,t){return o.kL.register(t),(0,r.forwardRef)(((t,n)=>r.createElement(d,Object.assign({},t,{ref:n,type:e}))))}const p=f("bar",o.vn)},17295:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294);t.default=function(e){var t,n=e.arrowRef,o=e.placement,i=e.styles.arrow,a=i.color,c=i.display,s=i.length,l=i.position,u=i.spread,d={display:c,position:l},f=u,p=s;return o.startsWith("top")?t="0,0 ".concat(f/2,",").concat(p," ").concat(f,",0"):o.startsWith("bottom")?t="".concat(f,",").concat(p," ").concat(f/2,",0 0,").concat(p):o.startsWith("left")?(p=u,t="0,0 ".concat(f=s,",").concat(p/2," 0,").concat(p)):o.startsWith("right")&&(p=u,t="".concat(f=s,",").concat(p," ").concat(f,",0 0,").concat(p/2)),r.createElement("span",{ref:n,className:"__floater__arrow",style:d},r.createElement("svg",{height:p,version:"1.1",width:f,xmlns:"http://www.w3.org/2000/svg"},r.createElement("polygon",{fill:a,points:t})))}},23455:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(67294);t.default=function(e){var t=e.onClick,n=e.styles,i=n.color,a=n.height,c=n.width,s=r(n,["color","height","width"]);return o.createElement("button",{"aria-label":"close",onClick:t,style:s,type:"button"},o.createElement("svg",{height:"".concat(a,"px"),preserveAspectRatio:"xMidYMid",version:"1.1",viewBox:"0 0 18 18",width:"".concat(c,"px"),xmlns:"http://www.w3.org/2000/svg"},o.createElement("g",null,o.createElement("path",{d:"M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",fill:i}))))}},77830:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),o=n(86944),i=n(23455);t.default=function(e){var t=e.content,n=e.footer,a=e.onClick,c=e.open,s=e.positionWrapper,l=e.showCloseButton,u=e.styles,d=e.title,f={content:r.isValidElement(t)?t:r.createElement("div",{className:"__floater__content",style:u.content},t)};return d&&(f.title=r.isValidElement(d)?d:r.createElement("div",{className:"__floater__title",style:u.title},d)),n&&(f.footer=r.isValidElement(n)?n:r.createElement("div",{className:"__floater__footer",style:u.footer},n)),!l&&!s||o.default.boolean(c)||(f.close=r.createElement(i.default,{onClick:a,styles:u.close})),r.createElement("div",{className:"__floater__container",style:u.container},f.close,f.title,f.content,f.footer)}},3846:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(67294),i=n(17295),a=n(77830),c=n(89830);t.default=o.memo((function(e){var t=e.component,n=e.content,s=e.floaterRef,l=e.hideArrow,u=e.id,d=e.onClick,f=e.placement,p=e.status,m=e.styles,h=o.useMemo((function(){var e=m.arrow.length,n=m.floater,o=m.floaterCentered,i=m.floaterClosing,a=m.floaterOpening,s=m.floaterWithComponent,u=r({},n);return l||(f.startsWith("top")?u.padding="0 0 ".concat(e,"px"):f.startsWith("bottom")?u.padding="".concat(e,"px 0 0"):f.startsWith("left")?u.padding="0 ".concat(e,"px 0 0"):f.startsWith("right")&&(u.padding="0 0 0 ".concat(e,"px"))),p===c.STATUS.CLOSING&&(u=r(r({},u),i)),p!==c.STATUS.OPENING&&p!==c.STATUS.OPEN||(u=r(r({},u),a)),"center"===f&&(u=r(r({},u),o)),t&&(u=r(r({},u),s)),u}),[t,l,f,p,m]),v=["render","open","opening","closing"].includes(p),g={},b=["__floater"],y={id:u,role:"tooltip"};if(t){var S=r({closeFn:d},y);g.content=o.isValidElement(t)?o.cloneElement(t,S):t(S)}else g.content=o.createElement(a.default,r({},e,{content:n}));return p===c.STATUS.OPEN&&b.push("__floater__open"),l||(g.arrow=o.createElement(i.default,r({},e))),v?o.createElement("div",{ref:s},o.createElement("div",r({className:b.join(" "),style:h},y),o.createElement("div",{className:"__floater__body"},g.content,g.arrow))):null}))},20839:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),o=n(73935),i=n(86944),a=n(44138),c=n(13721);t.default=function(e){var t=e.children,n=e.hasChildren,s=e.placement,l=e.portalElement,u=e.target,d=e.zIndex,f=r.useRef(null),p=r.useCallback((function(){if(a.canUseDOM&&(l&&(f.current=i.default.string(l)?document.querySelector(l):l),!l||!f.current)){var e=document.getElementById("react-floater-portal");e?f.current=e:(f.current=document.createElement("div"),f.current.id=a.portalId,f.current.style.zIndex="".concat(d),document.body.appendChild(f.current))}}),[l,d]);return(0,c.useSingleton)(p),(0,c.useMount)((function(){l||document.getElementById(a.portalId)||(f.current?document.body.appendChild(f.current):p())})),(0,c.useUnmount)((function(){if(a.canUseDOM&&f)try{f.current&&f.current.id===a.portalId&&0===f.current.childElementCount&&document.body.contains(f.current)&&(document.body.removeChild(f.current),f.current=null)}catch(e){f.current=null}})),f.current&&(n||u||"center"===s)?o.createPortal(t,f.current):null}},82147:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(67294),i=n(86944),a=n(89830);t.default=o.memo((function(e){var t,n=e.childRef,c=e.children,s=e.id,l=e.isControlled,u=e.onClick,d=e.onMouseEnter,f=e.onMouseLeave,p=e.status,m=e.style,h=e.styles,v=e.wrapperRef,g=o.useMemo((function(){return r(r(r({},h),m),o.isValidElement(c)?c.props.style:void 0)}),[c,m,h]),b={"aria-describedby":[a.STATUS.OPENING,a.STATUS.OPEN,a.STATUS.CLOSING].includes(p)?s:void 0,"data-id":s,style:g};return l||(b=r(r({},b),{onClick:u,onMouseEnter:d,onMouseLeave:f})),c&&(t=1===o.Children.count(c)&&o.isValidElement(c)&&c.type!==o.Fragment?i.default.function(c.type)?o.createElement("span",{ref:v},o.cloneElement(o.Children.only(c),r({innerRef:n},b))):o.cloneElement(o.Children.only(c),r({ref:v},b)):o.createElement("span",r({ref:v},b),c)),t||null}))},25831:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var c=n(67294),s=n(64599),l=n(86944),u=n(19507),d=n(3846),f=n(20839),p=n(82147),m=n(89830),h=n(44138),v=n(13721),g=n(64283);t.default=function(e){var t=(0,h.enhanceProps)(e),n=t.autoOpen,b=t.callback,y=t.children,S=t.component,E=t.content,T=t.debug,w=t.disableFlip,O=t.disableHoverToClick,P=t.event,x=t.eventDelay,Z=t.footer,C=t.getPopper,R=t.hideArrow,I=t.id,N=t.modifiers,M=t.offset,_=t.open,k=t.placement,U=t.portalElement,A=t.showCloseButton,j=t.style,L=t.styles,D=t.target,W=t.title,z=t.wrapperOptions,F=i((0,v.useSetState)({currentPlacement:k||"bottom",positionWrapper:!!(null===z||void 0===z?void 0:z.position)&&!!D,status:m.STATUS.INIT,statusWrapper:m.STATUS.INIT}),2),B=F[0],G=F[1],H=c.useRef(null),V=c.useRef(null),$=c.useRef(),q=c.useRef(null),Y=c.useRef((0,h.randomId)()),X=c.useRef(!1),K=c.useRef(),Q=c.useRef(B),J=c.useRef(),ee=c.useRef(null),te=c.useRef({}),ne=B.currentPlacement,re=B.positionWrapper,oe=B.status,ie=B.statusWrapper,ae=(0,u.default)(B).changed,ce=(0,u.default)(e).changed,se=c.useCallback((function(e,t){X.current&&(G(e),Q.current=r(r({},B),e),t&&t())}),[G,B]),le=c.useCallback((function(e){var t=Q.current.status===m.STATUS.OPEN?m.STATUS.CLOSING:m.STATUS.RENDER;l.default.undefined(e)||(t=e),se({status:t,statusWrapper:t===m.STATUS.CLOSING?m.STATUS.RENDER:m.STATUS.IDLE})}),[se]),ue=c.useRef((function(){return h.canUseDOM?D?l.default.domElement(D)?D:document.querySelector(D):V.current||ee.current:null})),de=c.useMemo((function(){return!(!T&&!h.canUseDOM)&&!!window.ReactFloaterDebug}),[T]),fe=c.useMemo((function(){return"hover"===P&&(0,h.isMobile)()&&!O?"click":P}),[O,P]),pe=c.useMemo((function(){var e,t=(0,g.default)(L),n=ue.current();if(re){var o=void 0;oe!==m.STATUS.IDLE?o=t.wrapperPosition:ie===m.STATUS.RENDER&&(o=null===(e=J.current)||void 0===e?void 0:e.state.styles),t.wrapper=r(r({},t.wrapper),o)}if(n){var i=window.getComputedStyle(n);te.current?t.wrapper=r(r({},t.wrapper),te.current):["relative","static"].includes(i.position)||(te.current={},re||(m.POSITIONING_PROPS.forEach((function(e){te.current[e]=i[e]})),t.wrapper=r(r({},t.wrapper),te.current)))}return t}),[re,oe,ie,L]),me=c.useRef((function(){K.current&&K.current.destroy(),J.current&&J.current.destroy()})),he=c.useRef((function(){var e=Q.current.status===m.STATUS.RENDER?m.STATUS.OPENING:m.STATUS.IDLE,t=ue.current();if("center"===k)setTimeout((function(){se({status:e})}),100);else if(t)if(q.current){var n=(0,h.getModifiers)(N),r=n.arrow,c=n.flip,l=n.offset,u=o(n,["arrow","flip","offset"]);K.current=(0,s.createPopper)(t,q.current,{placement:k,strategy:(0,h.isFixed)(V.current)?"fixed":"absolute",modifiers:a([(0,h.mergeModifier)({name:"arrow",enabled:!R,options:{element:H.current,padding:8}},r),(0,h.mergeModifier)({name:"flip",enabled:!w,options:{altAxis:!1,fallbackPlacements:(0,h.getFallbackPlacements)(k||"bottom")}},c),(0,h.mergeModifier)({name:"offset",options:{offset:[0,M]}},l),{name:"updatePlacement",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.instance,n=e.state;n.placement!==Q.current.currentPlacement&&(K.current=t,se({currentPlacement:n.placement}))}},{name:"applyArrowStyle",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=t.elements.arrow,r=t.placement;n&&(r.startsWith("top")?(n.style.bottom="0px",n.style.right=""):r.startsWith("bottom")?(n.style.top="0px",n.style.right=""):r.startsWith("left")?(n.style.right="0px",n.style.bottom=""):r.startsWith("right")&&(n.style.left="0px",n.style.bottom=""))}}],i(Object.values(u)),!1),onFirstUpdate:function(t){se({currentPlacement:t.placement,status:e}),k!==t.placement&&setTimeout((function(){var e;null===(e=K.current)||void 0===e||e.forceUpdate()}))}}),C&&K.current&&C(K.current,"floater")}else se({status:m.STATUS.IDLE});if(!J.current&&Q.current.positionWrapper&&t&&ee.current&&"center"!==k){var d=(null===z||void 0===z?void 0:z.offset)?z.offset:0;J.current=(0,s.createPopper)(t,ee.current,{placement:(null===z||void 0===z?void 0:z.placement)||k,modifiers:[{name:"arrow",enabled:!1},{name:"offset",options:{offset:[0,d]}},{name:"flip",enabled:!1}],onFirstUpdate:function(e){se({statusWrapper:m.STATUS.RENDER}),k!==e.placement&&setTimeout((function(){var e;null===(e=J.current)||void 0===e||e.forceUpdate()}))}}),C&&C(J.current,"wrapper")}})),ve=c.useRef((function(){K.current&&K.current.forceUpdate(),J.current&&J.current.forceUpdate()})),ge=c.useRef((function(){J.current&&J.current.forceUpdate(),se({status:Q.current.status===m.STATUS.OPENING?m.STATUS.OPEN:m.STATUS.IDLE},(function(){b&&b(Q.current.status===m.STATUS.OPEN?"open":"close",(0,h.enhanceProps)(e))}))})),be=c.useCallback((function(){l.default.boolean(_)||("click"===fe||"hover"===fe&&re)&&((0,h.log)({title:"click",data:[{event:P,status:oe===m.STATUS.OPEN?"closing":"opening"}],debug:de}),le("idle"===oe?m.STATUS.RENDER:void 0))}),[de,fe,P,_,re,oe,le]),ye=c.useCallback((function(){l.default.boolean(_)||(0,h.isMobile)()||"hover"!==fe||((0,h.log)({title:"mouseEnter",data:[{key:"originalEvent",value:P}],debug:de}),oe===m.STATUS.IDLE&&(clearTimeout($.current),$.current=void 0,le(m.STATUS.RENDER)))}),[de,fe,P,_,oe,le]),Se=c.useCallback((function(){if(!l.default.boolean(_)&&!(0,h.isMobile)()&&"hover"===fe){(0,h.log)({title:"mouseLeave",data:[{key:"originalEvent",value:P}],debug:de});var e=[m.STATUS.OPENING,m.STATUS.OPEN].includes(oe);x?re||e&&(clearTimeout($.current),$.current=window.setTimeout((function(){le(),$.current=void 0}),1e3*x)):le(oe===m.STATUS.CLOSING?m.STATUS.IDLE:m.STATUS.CLOSING)}}),[de,fe,P,x,_,re,oe,le]);(0,v.useSingleton)((function(){h.canUseDOM&&window.addEventListener("load",ve.current)})),(0,v.useMount)((function(){X.current=!0,(0,h.log)({title:"init",data:{hasChildren:!!y,hasTarget:!!D,isControlled:l.default.boolean(_),positionWrapper:re,target:ue.current(),floater:q.current},debug:de}),he.current()})),(0,v.useUnmount)((function(){X.current=!1,me.current(),window.removeEventListener("load",ve.current)})),(0,v.useUpdateEffect)((function(){if(h.canUseDOM){if(ce("open")){var e=void 0;l.default.boolean(_)&&(e=_?m.STATUS.RENDER:m.STATUS.CLOSING),le(e)}(ce("wrapperOptions.position")||ce("target"))&&se({positionWrapper:!!(null===z||void 0===z?void 0:z.position)&&!!D}),(ae("status",m.STATUS.IDLE)&&_||ae("status",m.STATUS.IDLE,m.STATUS.INIT)&&n)&&le(m.STATUS.RENDER),ae("status",m.STATUS.RENDER)&&(K.current&&K.current.destroy(),he.current()),q.current&&ae("status",[m.STATUS.RENDER,m.STATUS.CLOSING])&&(0,h.once)(q.current,"transitionend",ge.current),ae("status",m.STATUS.IDLE,m.STATUS.CLOSING)&&K.current&&(K.current.destroy(),K.current=void 0,J.current&&J.current.forceUpdate())}}));var Ee=c.createElement(p.default,{childRef:V,id:I||Y.current,isControlled:l.default.boolean(_),onClick:be,onMouseEnter:ye,onMouseLeave:Se,status:oe,style:j,styles:pe.wrapper,wrapperRef:ee},y);return c.createElement(c.Fragment,null,c.createElement(f.default,{hasChildren:!!y,placement:ne,portalElement:U,target:D,zIndex:pe.options.zIndex},c.createElement(d.default,{arrowRef:H,component:S,content:E,floaterRef:q,footer:Z,hideArrow:R||"center"===ne,id:I||Y.current,onClick:be,placement:ne,positionWrapper:re,showCloseButton:A,status:oe,styles:pe,title:W}),re&&Ee),!re&&Ee)}},89830:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.STATUS=t.POSITIONING_PROPS=void 0,t.POSITIONING_PROPS=["position","top","right","bottom","left"],t.STATUS={INIT:"init",IDLE:"idle",RENDER:"render",OPENING:"opening",OPEN:"open",CLOSING:"closing",ERROR:"error"}},44138:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.randomId=t.once=t.on=t.off=t.noop=t.mergeModifier=t.log=t.isMobile=t.isFixed=t.getModifiers=t.getFallbackPlacements=t.enhanceProps=t.portalId=t.canUseDOM=void 0;var o=n(72182),i=n(58875),a=n(86944);function c(e,t,n,r){void 0===r&&(r=!1),e.removeEventListener(t,n,r)}function s(e,t,n,r){void 0===r&&(r=!1),e.addEventListener(t,n,r)}t.canUseDOM=i.canUseDOM,t.portalId="react-floater-portal",t.enhanceProps=function(e){return r({autoOpen:!1,debug:!1,disableFlip:!1,disableHoverToClick:!1,event:"click",eventDelay:.4,hideArrow:!1,offset:15,placement:"bottom",showCloseButton:!1,styles:{},target:null,wrapperOptions:{position:!1}},e)},t.getFallbackPlacements=function(e){return e.startsWith("left")?["top","bottom"]:e.startsWith("right")?["bottom","top"]:void 0},t.getModifiers=function(e){return o({flip:{name:"flip",enabled:!0,options:{padding:20}},preventOverflow:{name:"preventOverflow",enabled:!0,options:{padding:10}}},e||{})},t.isFixed=function e(t){if(!t)return!1;var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===getComputedStyle(t).position||t.parentNode instanceof HTMLElement&&e(t.parentNode))},t.isMobile=function(){return"ontouchstart"in window&&/Mobi/.test(navigator.userAgent)},t.log=function(e){var t=e.data,n=e.debug,r=void 0!==n&&n,o=e.title,i=e.warn,c=void 0!==i&&i?console.warn||console.error:console.log;r&&o&&t&&(console.groupCollapsed("%creact-floater: ".concat(o),"color: #9b00ff; font-weight: bold; font-size: 12px;"),Array.isArray(t)?t.forEach((function(e){a.default.plainObject(e)&&e.key?c.apply(console,[e.key,e.value]):c.apply(console,[e])})):c.apply(console,[t]),console.groupEnd())},t.mergeModifier=function(e,t){return o(e,t||{},{arrayMerge:function(e,t){return t},isMergeableObject:a.default.plainObject})},t.noop=function(){},t.off=c,t.on=s,t.once=function(e,t,n,r){var o;void 0===r&&(r=!1),s(e,t,o=function(r){n(r),c(e,t,o)},r)},t.randomId=function(){return"rf-".concat(Math.round(1e5*Math.random()))}},13721:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.useUpdateEffect=t.useUnmount=t.useSingleton=t.useSetState=t.useMount=void 0;var i=n(67294);function a(e){(0,i.useEffect)(e,[])}t.useMount=function(e){a(e)},t.useSetState=function(e){void 0===e&&(e={});var t=o((0,i.useState)(e),2),n=t[0],a=t[1];return[n,(0,i.useCallback)((function(e){a((function(t){return r(r({},t),e instanceof Function?e(t):e)}))}),[a])]},t.useSingleton=function(e){var t=(0,i.useRef)(!1);t.current||(e(),t.current=!0)},t.useUnmount=function(e){var t=(0,i.useRef)(e);t.current=e,a((function(){return function(){return t.current()}}))},t.useUpdateEffect=function(e,t){var n=(0,i.useRef)(!0);(0,i.useEffect)((function(){n.current||e()}),t),n.current&&(n.current=!1)}},64283:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(72182),i={zIndex:100};t.default=function(e){var t=e||{},n=t.options,a=void 0===n?{}:n,c=r(t,["options"]);return o({arrow:{color:"#fff",display:"inline-flex",length:16,position:"absolute",spread:32},close:{backgroundColor:"transparent",border:0,borderRadius:0,color:"#555",fontSize:0,height:15,outline:"none",padding:10,position:"absolute",right:0,top:0,width:15,WebkitAppearance:"none"},container:{backgroundColor:"#fff",color:"#666",minHeight:60,minWidth:200,padding:20,position:"relative",zIndex:10},content:{fontSize:15},footer:{borderTop:"1px solid #ccc",fontSize:13,marginTop:10,paddingTop:5},floater:{display:"inline-block",filter:"drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",maxWidth:300,opacity:0,position:"relative",transition:"opacity 0.3s",visibility:"hidden",zIndex:a.zIndex},floaterCentered:{left:"50%",position:"fixed",top:"50%",transform:"translate(-50%, -50%)"},floaterClosing:{opacity:0,visibility:"visible"},floaterOpening:{opacity:1,visibility:"visible"},floaterWithComponent:{maxWidth:"100%"},title:{borderBottom:"1px solid #555",color:"#555",fontSize:18,marginBottom:5,paddingBottom:6,paddingRight:18},wrapper:{cursor:"help",zIndex:a.zIndex},wrapperPosition:{left:-1e3,position:"absolute",top:-1e3,visibility:"hidden"},options:o(i,a)},c)}}}]);