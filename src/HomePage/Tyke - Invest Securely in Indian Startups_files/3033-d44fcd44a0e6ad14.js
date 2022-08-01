"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3033],{10098:function(e,t,n){n.d(t,{_:function(){return a},q:function(){return s}});var r=n(11496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i,a=(0,r.ZP)("div")((function(e){return o({margin:"5rem auto"},e.theme.breakpoints.down("md"),{margin:"5rem 1.5rem"})})),s=(0,r.ZP)("div")((function(e){var t=e.theme;return o(i={display:"flex",justifyContent:"center",gap:"1.5rem",width:"40%",maxWidth:t.breakpoints.values.sm,margin:"2rem auto 0"},t.breakpoints.down("md"),{width:"64%"}),o(i,t.breakpoints.down("sm"),{flexDirection:"column",width:"75%",marginBottom:"5rem"}),i}))},45678:function(e,t,n){var r=n(85893),o=n(17475),i=n(83321),a=n(10098),s=n(41664),l=n(58119);t.Z=function(e){var t=e.title,n=e.buttons;return(0,r.jsxs)(a._,{children:[(0,r.jsx)(o.Z,{variant:"h3",align:"center",children:t}),(0,r.jsxs)(a.q,{children:[(0,r.jsx)(s.default,{href:n[0].link,passHref:!0,children:(0,r.jsx)(i.Z,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){(0,l.wl)(n[0].trackEventName,{tykeEventValue:""})},children:n[0].label})}),(0,r.jsx)(s.default,{href:n[1].link,passHref:!0,children:(0,r.jsx)(i.Z,{variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){(0,l.wl)(n[1].trackEventName,{tykeEventValue:""})},children:n[1].label})})]})]})}},60151:function(e,t,n){n.d(t,{Z:function(){return W}});var r=n(85893),o=n(58119),i=n(88919),a=n(11163),s=n(76800),l=n(45107),c=n(17475),d=n(39596),u=n(2734),p=n(98396),m=n(25675),f=n(41664),h=n(80876),g=n(15401),y=n(83321),b=n(11496);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}var w,j=(0,b.ZP)("div")((function(){return{position:"relative",display:"grid",placeItems:"center",height:"100%"}})),k=(0,b.ZP)(g.Z)((function(e){var t=e.investorPage,n=e.theme;return v({position:"absolute",width:t?"40%":"65%"},t?{right:0}:{left:"0"},{bottom:"-25px",zIndex:-1},t?x({},n.breakpoints.down("md"),{width:"40%",right:"10%"}):{},x({},n.breakpoints.down("sm"),{width:"125%",top:"-5%",bottom:"unset",left:"-50%"}))})),Z=(0,b.ZP)(h.Z)((function(e){var t=e.investorPage,n=e.theme;return v({position:"absolute",width:t?"75%":"40%",top:"-40px"},t?{left:0}:{right:"5%"},{zIndex:-1},t?x({},n.breakpoints.down("md"),{width:"50%",left:"10%"}):{},x({},n.breakpoints.down("sm"),{top:"2rem",right:"-15%",width:"75%",left:"unset"}))})),P=(0,b.ZP)("div")((function(e){var t=e.theme;return x(w={borderRadius:4,boxShadow:"13px 14px 62px 0px #0B469424",overflow:"hidden",width:"100%",textAlign:"left"},t.breakpoints.only("sm"),{width:"75%"}),x(w,"@media(min-width: 280px) and (max-width:653px)",{width:"110%"}),w})),O=(0,b.ZP)("div")((function(e){var t=e.theme;return x({display:"flex",flexDirection:"column",gap:"4rem",padding:"2rem 2rem 1rem 2rem",backgroundColor:t.palette.common.white},t.breakpoints.down("sm"),{padding:"2rem 1rem 1rem"})})),C=(0,b.ZP)(y.Z)((function(e){var t=e.theme;return{position:"relative",display:"block",padding:0,color:t.palette.common.black,textAlign:"unset","&:after":{content:'""',position:"absolute",left:0,bottom:"-2rem",height:1,width:"100%",backgroundColor:t.palette.grey[200]},"&:hover":{color:t.palette.common.black,backgroundColor:"transparent"}}})),S=(0,b.ZP)("div")((function(){return{display:"flex",gap:"1rem",alignItems:"flex-start",marginBottom:"1.25rem"}})),L=(0,b.ZP)("div")((function(){return{position:"relative",width:"4.5rem",height:"4.5rem",flexShrink:0,borderRadius:4,overflow:"hidden"}})),E=(0,b.ZP)("div")((function(e){return x({display:"flex",justifyContent:"space-between",alignItems:"flex-end"},e.theme.breakpoints.down("sm"),{gap:"0.4rem"})})),M=(0,b.ZP)("div")((function(e){return x({display:"flex",gap:"0.5rem",flexWrap:"wrap",maxWidth:"60%"},e.theme.breakpoints.down("sm"),{maxWidth:"unset",gap:"0.25rem",flex:1})})),N=(0,b.ZP)("div")((function(){return{display:"flex",gap:"1rem","&>*":{flexShrink:0}}})),z=(0,b.ZP)(y.Z)((function(){return{marginTop:"-1rem",gap:"0.5rem",fontWeight:700,border:"none","&>div":{display:"grid",placeItems:"center"}}})),I=function(e){var t=e.deal,n=(0,u.Z)(),o=(0,p.Z)(n.breakpoints.down("sm")),i=(0,d.U)(new Date(t.endDate)),a="NaN"===(t.amountRaised/t.target*100).toFixed(2).toString()?"0.00%":"".concat((t.amountRaised/t.target*100).toFixed(2),"%");return(0,r.jsx)(f.default,{href:"/campaign/".concat(t.slug),passHref:!0,children:(0,r.jsxs)(C,{variant:"grey",children:[(0,r.jsxs)(S,{children:[(0,r.jsx)(L,{children:(0,r.jsx)(m.default,{src:t.avatar,layout:"fill",objectFit:"cover",alt:"Campaign Logo"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z,{variant:"body2",weight:700,gutterBottom:!0,children:t.name}),(0,r.jsx)(c.Z,{variant:"subtitle",color:"grey.400",display:"block",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"2",height:"2rem",overflow:"hidden"},children:t.bio?t.bio:""})]})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(M,{children:t.Tags.slice(0,2).map((function(e){return void 0===e?null:(0,r.jsx)(l.Z,{tagName:e.name,grey:!0,small:!o,smallest:o},e.name)}))}),"upcoming"===t.status?(0,r.jsx)(s.Z,{}):(0,r.jsxs)(N,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z,{variant:o?"uiMicro":"subtitle",color:"grey.300",display:"block",sx:{textTransform:"none"},children:"Raised"}),(0,r.jsx)(c.Z,{variant:o?"subtitle":"body2",weight:500,display:"block",children:a})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z,{variant:o?"uiMicro":"subtitle",color:"boolean"!==typeof i?"grey.300":"transparent",display:"block",sx:{textTransform:"none"},children:"Closes In"}),(0,r.jsx)(c.Z,{variant:o?"subtitle":"body2",weight:500,display:"block",color:"boolean"!==typeof i?"common.black":"grey.500",children:"boolean"!==typeof i?"".concat(i.number," ").concat(i.time):"Completed"})]})]})]})]})})},W=function(e){var t=e.investorPage,n=void 0!==t&&t,s=e.onGoingDeals,l=e.trackEventName,c=(0,a.useRouter)(),d=s.sort((function(e,t){return e.type>t.type?-1:t.type>e.type?1:0}));return d=s.length>2?s.slice(0,2):s,(0,r.jsxs)(j,{children:[(0,r.jsx)(k,{investorPage:n}),(0,r.jsx)(Z,{investorPage:n}),(0,r.jsx)(P,{children:(0,r.jsxs)(O,{children:[null===d||void 0===d?void 0:d.map((function(e){return(0,r.jsx)(I,{deal:e},e.slug)})),(0,r.jsxs)(z,{variant:"black-outline",onClick:function(){l&&(0,o.wl)(l,{tykeEventValue:""}),c.push("/deals")},size:"small",children:["View All",(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{})})]})]})})]})}},22060:function(e,t,n){var r=n(85893),o=n(9008),i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}t.Z=function(e){var t=e.title,n=e.description,a=e.schema,l=e.image,c=void 0===l?"".concat("https://ds0zssdpdgkzg.cloudfront.net","/Logos/Logo.png"):l,d=e.robotsContent,u=(0,i.useState)(""),p=u[0],m=u[1];return(0,i.useEffect)((function(){m(window.location.href)}),[]),(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("link",{rel:"canonical",href:p}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{name:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:p}),(0,r.jsx)("meta",{property:"og:image",content:c}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{property:"twitter:image",content:c}),(0,r.jsx)("meta",{property:"twitter:url",content:p}),(0,r.jsx)("meta",{name:"robots",content:d}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s({"@context":"http://schema.org","@type":"Organization",description:"Tyke offer opportunities to investors to invest their money in vetted startups with trusted Angel Investors in India",image:"".concat("https://ds0zssdpdgkzg.cloudfront.net","/Logos/Logo.svg"),logo:"".concat("https://ds0zssdpdgkzg.cloudfront.net","/Logos/Logo.svg"),url:"https://www.tykeinvest.com/",telephone:"+91 9619936409",sameAs:["https://twitter.com/TykeInvest","https://www.linkedin.com/company/tyke-india","https://www.facebook.com/tykeinvest","https://www.youtube.com/channel/UCw_K7DW1CiarJ7g-mtML0eg","https://www.instagram.com/tykeinvest","https://www.crunchbase.com/organization/tyke","https://yourstory.com/companies/tyke/amp"],address:{"@type":"PostalAddress",streetAddress:"Jyoti, 15th Rd, Vithaldas Nagar, Santacruz West,",addressLocality:"Mumbai, Maharashtra",postalCode:"400052",addressCountry:"India"}},a))}})]})}},80876:function(e,t,n){var r=n(85893);t.Z=function(e){var t=e.className;return(0,r.jsxs)("svg",{className:t,viewBox:"0 0 209 209",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{opacity:".4",d:"M167.468 17.028c27.354 1.644 46.347 27.93 39.319 54.417l-11.422 43.046a43.358 43.358 0 0 0-1.373 8.522l-2.672 44.455c-1.644 27.355-27.93 46.347-54.417 39.319l-43.046-11.422a43.35 43.35 0 0 0-8.522-1.373l-44.455-2.671c-27.355-1.645-46.347-27.93-39.32-54.417l11.423-43.047c.74-2.787 1.2-5.642 1.373-8.521l2.671-44.456c1.645-27.354 27.93-46.347 54.417-39.319l43.047 11.422c2.787.74 5.642 1.2 8.521 1.373l44.456 2.672Z",fill:"url(#b)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"b",x1:"-146.624",y1:"714.447",x2:"-434.144",y2:"318.988",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#07D3FC"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#DAF5FB"})]})})]})}},15401:function(e,t,n){var r=n(85893);t.Z=function(e){var t=e.className;return(0,r.jsxs)("svg",{viewBox:"0 0 447 447",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[(0,r.jsx)("path",{d:"M51.498 79.751c7.307-56.682 64.697-92.465 118.81-74.078l87.943 29.882a90.457 90.457 0 0 0 17.535 4.067l92.119 11.876c56.683 7.307 92.465 64.697 74.079 118.81l-29.882 87.943a90.393 90.393 0 0 0-4.067 17.535l-11.876 92.119c-7.307 56.683-64.697 92.465-118.81 74.079l-87.943-29.882a90.402 90.402 0 0 0-17.536-4.067l-92.119-11.876c-56.682-7.307-92.465-64.697-74.078-118.81l29.882-87.943a90.46 90.46 0 0 0 4.067-17.536l11.876-92.119Z",fill:"url(#a)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"a",x1:"65.633",y1:"-29.894",x2:"382.024",y2:"477.551",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#F4F4F3"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#EAEAEA"})]})})]})}},76800:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(85893),o=n(17475),i=(0,n(11496).ZP)("div")((function(e){var t=e.theme;return{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem",padding:"0.8125rem 1rem",backgroundColor:t.palette.grey[50],color:t.palette.grey[400],borderRadius:2,boxShadow:"0px 0px 3px rgba(0, 0, 0, 0.05)"}})),a=function(){return(0,r.jsx)(i,{children:(0,r.jsx)(o.Z,{variant:"overline",color:"inherit",display:"block",sx:{lineHeight:"1em"},children:"Coming soon"})})}},45107:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(85893),o=n(11496),i=n(17475),a=(0,o.ZP)(i.Z,{shouldForwardProp:function(e){return"tykeX"!==e&&"grey"!==e}})((function(e){var t=e.tykeX,n=e.grey,r=e.theme;return{display:"grid",placeItems:"center",padding:"0.75em 1.5em",borderRadius:"0.25rem",backgroundColor:t?"".concat(r.palette.primary.dark,"26"):n?"".concat(r.palette.grey[100]):"".concat(r.palette.primary.light,"80"),color:n?r.palette.grey[400]:r.palette.primary.main,lineHeight:1}}));function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}var c=function(e){var t=e.tagName,n=e.tykeX,o=e.small,i=e.smallest,s=e.grey;return(0,r.jsx)(a,{variant:o||i?"uiMicro":"overline",weight:500,tykeX:n,grey:s,sx:l({},i?{fontSize:"0.4rem"}:{}),children:t})}},39596:function(e,t,n){n.d(t,{U:function(){return r}});var r=function(e){var t=(new Date).getTime(),n=e.getTime(),r=Math.round((n-t)/6e4);if(r<=0)return!1;if(r<60)return{number:r,time:1===r?"minute":"minutes",error:!0};var o=Math.round(r/60);if(o<=24)return{number:o,time:1===o?"hour":"hours",error:!0};var i=1===Math.floor(o/24)?2:Math.round(o/24);return{number:i,time:1===i?"day":"days",error:i<=1}}},88919:function(e,t,n){var r=n(85893),o=n(53219);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.Z=function(e){var t=e.svgProps,n=void 0===t?{fontSize:"inherit",color:"inherit"}:t;return(0,r.jsxs)(o.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({viewBox:"0 0 16 10"},n,{children:[(0,r.jsx)("path",{d:"M1 5H15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M11 9L15 5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M11 1L15 5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}}]);