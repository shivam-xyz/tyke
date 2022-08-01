"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9067],{19067:function(e,t,n){n.d(t,{Z:function(){return be}});var i=n(85893),r=n(45678),a=n(53669),o=n(17341),s=n(67720),l=n(83321),d=n(98456),c=n(76798),m=n(82175),u=n(25675),h=n(67294),p=n(88767),g=n(74231),v=n(28520),f=n.n(v),x=n(36158);function b(e,t,n,i,r,a,o){try{var s=e[a](o),l=s.value}catch(d){return void n(d)}s.done?t(l):Promise.resolve(l).then(i,r)}var y,w,j,k=(y=f().mark((function e(t){var n,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,x.Y.post("/yes-connect/applications",t);case 4:n=e.sent,e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(1),i=e.t0,new Error(i.response?i.response.data.message||i.response.data:i.message);case 11:return e.abrupt("return",n.data);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})),function(){var e=this,t=arguments;return new Promise((function(n,i){var r=y.apply(e,t);function a(e){b(r,n,i,a,o,"next",e)}function o(e){b(r,n,i,a,o,"throw",e)}a(void 0)}))});function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=(0,n(6005).Z)((function(e){var t,n,i,r,a,o,s,l,d,c,m,u;return{logos_container:Z({display:"flex",justifyContent:"center","&>div":{"&>div":(w={position:"relative",width:"7.5rem",height:"calc(0.45 * 7.5rem)"},Z(w,null===(t=e.breakpoints)||void 0===t?void 0:t.down("lg"),{width:"6rem",height:"calc(0.45 * 6rem)"}),Z(w,null===(n=e.breakpoints)||void 0===n?void 0:n.down("md"),{width:"5rem",height:"calc(0.45 * 5rem)"}),w),"&:first-of-type":{paddingRight:"1rem",borderRight:"2px solid ".concat(null===(i=e.palette)||void 0===i?void 0:i.grey[600])},"&:last-of-type":{paddingLeft:"1rem"}}},null===(r=e.breakpoints)||void 0===r?void 0:r.down("md"),{justifyContent:"flex-start",margin:0}),form_logo_div:Z({position:"relative",margin:"1rem auto 2rem",width:"25%",paddingTop:"calc(0.35 * 25%)"},null===(a=e.breakpoints)||void 0===a?void 0:a.down("sm"),{width:"50%",paddingTop:"calc(0.35 * 50%)"}),form_container:{margin:"5rem 0"},divider_container:{margin:"2rem 0",display:"flex",alignItems:"center",gap:"1rem",color:null===(o=e.palette)||void 0===o?void 0:o.grey[600],width:"60%","& hr":{width:"100%"}},form_name_div:Z({display:"flex",gap:"1rem",margin:"-1.5rem 0 -2rem","&>*":{flex:1}},null===(s=e.breakpoints)||void 0===s?void 0:s.down("sm"),{marginBottom:0,flexDirection:"column",gap:0}),form_button_div:Z({display:"flex",justifyContent:"flex-end","& button":(j={padding:"1rem",width:"35%"},Z(j,null===(l=e.breakpoints)||void 0===l?void 0:l.down("md"),{width:"50%"}),Z(j,null===(d=e.breakpoints)||void 0===d?void 0:d.down("sm"),{width:"100%"}),j)},null===(c=e.breakpoints)||void 0===c?void 0:c.down("sm"),{marginTop:"1.5rem"}),submit_message:{padding:"1rem 2rem",color:null===(m=e.palette)||void 0===m?void 0:m.background.default,backgroundColor:null===(u=e.palette)||void 0===u?void 0:u.primary.main,borderRadius:"0.5rem"}}}),{index:1}),S=n(59225),I=n(1853),_=n(13815),C=n(17475),T={firstName:"",lastName:"",email:"",phone:"",pinCode:""};g.i_({mixed:{required:"Please fill this field"}});var P=g.Ry({firstName:g.Z_().trim().matches(/^[a-zA-Z]{2,}(\s[a-zA-Z]+){0,39}$/,{message:"Name cannot contain special characters",excludeEmptyString:!0}).required(),lastName:g.Z_().trim().matches(/^[a-zA-Z]+$/,{message:"Last name cannot contain special characters and only one word is allowed",excludeEmptyString:!0}).required(),email:g.Z_().email("Please enter a valid email").required(),pinCode:g.Z_().trim().matches(/^([1-9][0-9]{5})|([1-9][0-9]{2}\s[0-9]{3})$/,{message:"Please enter a valid 6 digit pincode",excludeEmptyString:!0}).required(),phone:g.Z_().trim().matches(/^\+?\d{10,15}$/,"Please enter a valid phone number").required()}),F=function(){var e=N(),t=(0,h.useState)(!1),n=t[0],r=t[1],a=(0,p.useMutation)(k,{onSuccess:function(){return r(!0)}}),o=a.isLoading,g=a.mutate,v=a.error,f=a.isSuccess;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:e.form_container,children:(0,i.jsxs)(S.Z,{width:50,children:[(0,i.jsx)("div",{className:e.form_logo_div,children:(0,i.jsx)(u.default,{src:"".concat("https://ds0zssdpdgkzg.cloudfront.net","/Yes-Connect/Yes-Connect-Logo.png"),layout:"fill",objectFit:"contain",alt:"yes-connect"})}),(0,i.jsxs)("div",{className:e.divider_container,children:[(0,i.jsx)(C.Z,{variant:"overline",weight:600,color:"inherit",children:"Application"}),(0,i.jsx)(s.Z,{})]}),(0,i.jsx)(m.J9,{initialValues:T,validationSchema:P,onSubmit:function(e){return g(e)},children:(0,i.jsxs)(m.l0,{children:[(0,i.jsxs)("div",{className:e.form_name_div,children:[(0,i.jsx)(_.Z,{name:"firstName",placeholder:"First Name",type:"text",label:"First Name"}),(0,i.jsx)(_.Z,{name:"lastName",placeholder:"Last Name",type:"text",label:"Last Name"})]}),(0,i.jsx)(_.Z,{name:"email",placeholder:"Email",type:"text",label:"Email"}),(0,i.jsx)(_.Z,{name:"phone",placeholder:"Contact Number",type:"text",inputmode:"numeric",label:"Contact Number"}),(0,i.jsx)(_.Z,{name:"pinCode",placeholder:"Pin Code",type:"text",inputmode:"numeric",label:"Pin Code"}),(0,i.jsx)("div",{className:e.form_button_div,children:(0,i.jsx)(l.Z,{type:"submit",variant:"contained",color:"primary",disabled:o||f,children:o?(0,i.jsx)(d.Z,{size:20,color:"primary"}):"Submit"})}),v&&(0,i.jsx)(I.Z,{children:v.message})]})})]})}),(0,i.jsx)(c.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:2500,onClose:function(){return r(!1)},open:n,children:(0,i.jsx)(C.Z,{variant:"body2",weight:400,className:e.submit_message,children:"Form Submitted Successfully"})})]})},z=n(23842),E=n(11163),L=n(36455),H=n(31009),D=function(){var e=(0,z.n)().isLoggedIn,t=(0,h.useMemo)((function(){return[{imageName:"Investors/invest-minute",title:"Invest in a minute",subtitle:"From signing up to investing, complete the entire process in a jiffy. Transact securely and Sign your Termsheets online. Startup Investing was never this easy.",link:{label:"Get Started",href:e?"/deals":"/sign-up",trackEventName:"Invest in a minute [Get Started] - Investors"}},{imageName:"Investors/interact-invest",title:"Interact before you Invest",subtitle:"Our Community is built for you to connect with fellow investors & founders, discuss investment strategies and take informed decisions.",link:{label:"Community",href:"https://community.tykeinvest.com",trackEventName:"Interact before you Invest [Community] - Investors"}},{imageName:"Investors/manage-investments",title:"Stay informed",subtitle:"Know how your portfolio startups are faring. Keep track of all the key metrics with our inbuilt Analytics.",link:{label:"Dashboard",href:"/profile",trackEventName:"Stay informed [Dashboard] - Investors"}}]}),[e]);return(0,i.jsx)(H.Ok,{page:"Investors",children:t.map((function(e){return(0,i.jsx)(L.Z,{data:e},e.title)}))})},O=n(80876),R=n(15401),B=n(9411),A=n(11496);function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q,V,K,W=(0,A.ZP)("div")((function(){return{position:"relative",display:"grid",placeItems:"center",height:"100%"}})),Y=(0,A.ZP)(R.Z)((function(e){var t=e.theme;return M(q={position:"absolute",width:"70%",right:"0",bottom:"18%",zIndex:-1},t.breakpoints.down("md"),{width:"50%",bottom:"30%"}),M(q,t.breakpoints.down("sm"),{bottom:"10%",right:"unset",left:"-50%",width:"100%"}),q})),G=(0,A.ZP)(O.Z)((function(e){var t=e.theme;return M(V={position:"absolute",width:"40%",bottom:"12%",left:"7%",zIndex:-1},t.breakpoints.down("md"),{left:"15%",bottom:"20%"}),M(V,t.breakpoints.down("sm"),{left:"unset",bottom:"60%",right:"-10%",width:"75%"}),V})),U=(0,A.ZP)("div")((function(e){var t=e.theme;return M(K={width:"60%",borderRadius:10,boxShadow:"0px 3px 7px #0000001A",overflow:"hidden"},t.breakpoints.down("lg"),{width:"80%"}),M(K,"@media (min-width: 900px) and (max-width: 1000px)",{width:"92%"}),M(K,t.breakpoints.down("md"),{width:"50%"}),M(K,"@media (min-width: 600px) and (max-width: 750px)",{width:"80%"}),M(K,t.breakpoints.down("sm"),{width:"100%"}),K})),$=(0,A.ZP)("div")((function(e){return M({paddingTop:"1.7rem",backgroundColor:"#fff"},e.theme.breakpoints.down("lg"),{padding:"1rem"})})),J=(0,A.ZP)(B.ZP)((function(e){return{display:"block",margin:"1.25rem auto",width:"75%","& .MuiSlider-rail":{backgroundColor:e.theme.palette.grey[200]},"& .MuiSlider-track":{border:"none",background:"linear-gradient(243.97deg, #0066EB -3.11%, #00F5F3 144.37%)"},"& .MuiSlider-thumb":{height:"1.5rem",width:"1.5rem",background:"linear-gradient(243.97deg, #0066EB -3.11%, #00F5F3 144.37%)"}}})),Q=(0,A.ZP)("div")((function(e){var t=e.theme;return{marginTop:"1rem",borderTop:"1px solid ".concat(t.palette.grey[100])}})),X=n(92525),ee=n(32483);var te,ne=(0,A.ZP)("div")((function(e){var t,n,i,r=e.theme;return t={padding:"1rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"3rem"},n=r.breakpoints.down("sm"),i={padding:"1rem"},n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t})),ie=(0,A.ZP)("div")((function(){return{display:"flex",gap:"1rem",alignItems:"center"}})),re=(0,A.ZP)("div")((function(){return{position:"relative",width:"3rem",height:"2rem",borderRadius:5,overflow:"hidden"}})),ae=function(e){var t=e.image,n=e.name,r=e.amount;return(0,i.jsxs)(ne,{children:[(0,i.jsxs)(ie,{children:[(0,i.jsx)(re,{children:(0,i.jsx)(u.default,{src:"".concat("https://ds0zssdpdgkzg.cloudfront.net","/Home/Why-Startups/").concat(t),layout:"fill",objectFit:"contain",alt:n,sizes:"".concat((0,ee.W)(3),"px")})}),(0,i.jsx)(C.Z,{variant:"body2",weight:700,children:n})]}),(0,i.jsx)(C.Z,{variant:"body2",children:(0,X.M)(r)})]})},oe=[{name:"Ola",logo:"Ola.png",multiple:2492},{name:"Byjus",logo:"byjus.svg",multiple:665},{name:"Unacademy",logo:"Unacademy.png",multiple:334},{name:"Razorpay",logo:"razorpay.svg",multiple:125}],se=function(){var e=(0,h.useState)(5e3),t=e[0],n=e[1];return(0,i.jsxs)(W,{children:[(0,i.jsx)(Y,{}),(0,i.jsx)(G,{}),(0,i.jsx)(U,{children:(0,i.jsxs)($,{children:[(0,i.jsxs)(C.Z,{variant:"body1",align:"center",gutterBottom:!0,children:["If you had invested",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsx)(C.Z,{variant:"h3",align:"center",weight:500,children:t.toLocaleString("en-IN",{maximumFractionDigits:0,minimumFractionDigits:0,style:"currency",currency:"INR"})}),(0,i.jsx)(J,{min:5e3,max:1e5,value:t,defaultValue:5e3,onChange:function(e,t){return n(t)},step:1e3}),(0,i.jsx)(C.Z,{variant:"body2",align:"center",sx:{width:"60%",margin:"0 auto",color:"grey.400",lineHeight:"1"},children:"You could have theoretically made"}),(0,i.jsx)(Q,{children:oe.map((function(e){return(0,i.jsx)(ae,{name:e.name,image:e.logo,amount:t*e.multiple},e.name)}))}),(0,i.jsx)("div",{style:{textAlign:"center",padding:"0 0 1rem 0"},children:(0,i.jsx)(C.Z,{variant:"overline",align:"center",sx:{width:"60%",color:"grey.300",lineHeight:"1",textTransform:"lowercase"},children:"*in the initial rounds"})})]})})]})},le=n(60151),de=n(58119),ce=n(2734),me=n(98396),ue=n(50122),he=n(41664);function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ge=(0,A.ZP)("div")((function(e){var t=e.theme;return pe(te={display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",gap:"5rem",justifyContent:"space-between",minHeight:"75vh",maxHeight:560,width:"100%",maxWidth:.9*t.breakpoints.values.lg,margin:"6rem auto"},t.breakpoints.down("lg"),{minHeight:"unset",maxHeight:"unset",width:"100%",padding:"0 2rem"}),pe(te,t.breakpoints.down("md"),{gridTemplateColumns:"1fr",textAlign:"center"}),pe(te,t.breakpoints.down("sm"),{marginTop:"3rem"}),te})),ve=((0,A.ZP)("div")((function(){return{width:"50px",height:"50px",fontSize:"50px",marginBottom:"20px"}})),function(e){var t=e.deals,n=(0,ce.Z)(),r=(0,me.Z)(n.breakpoints.only("sm"));return(0,i.jsxs)(ge,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(C.Z,{variant:"h2",sx:{mb:"1.5rem"},children:"Live Now"}),(0,i.jsxs)(C.Z,{variant:"body1",sx:{lineHeight:"1.4em",margin:"0 auto",mb:"1.5rem",width:r?"75%":"100%"},children:["With their community along with marquee investors backing them, our startups are set to be the next big things.",(0,i.jsx)("br",{})," Start investing with as little as \u20b95000."]}),(0,i.jsx)(he.default,{href:"/deals",passHref:!0,children:(0,i.jsx)(ue.Z,{sx:{"&:hover":{textDecoration:"underline"}},color:"secondary",onClick:function(){(0,de.wl)("Live now View all - Investors",{tykeEventValue:""})},children:"View All"})})]}),(0,i.jsx)("div",{children:(0,i.jsx)(le.Z,{investorPage:!0,onGoingDeals:t,trackEventName:"View all deals - Investors"})})]})}),fe=[{image:"".concat("https://ds0zssdpdgkzg.cloudfront.net","/Home/Testimonials/Ajay_Rajan.png"),testimonial:"Tyke helps democratize  investments in Start-ups and provides its users, access to equity-participate in an amazing array of innovative companies. Moreso, the entire onboarding & investment experience is  very seamless, along-with great analytical dashboards to monitor your portfolio. Kudos Karan & Team Tyke \ud83d\udc4d",name:"Ajay Rajan",position:(0,i.jsxs)(i.Fragment,{children:["Senior Group President & Transaction Banking",(0,i.jsx)("br",{}),"Yes Bank"]}),companyLogo:"".concat("https://ds0zssdpdgkzg.cloudfront.net","/Home/Testimonials/YesBank.png")}],xe=[{image:"".concat("https://ds0zssdpdgkzg.cloudfront.net","/Home/Testimonials/Srinivas_Jain.png"),testimonial:"Tyke is set to become the one-stop platform for startup investments. Its proprietary tech and simple process have helped me build a well-rounded portfolio.",name:"Srinivas Jain",position:(0,i.jsxs)(i.Fragment,{children:["Executive Director & Head of Strategy",(0,i.jsx)("br",{}),"SBI Mutual Funds"]}),companyLogo:"".concat("https://ds0zssdpdgkzg.cloudfront.net","/Home/Testimonials/Sbi_mutual_funds.png")}],be=function(e){var t=e.deals,n=(0,E.useRouter)().pathname,s=(0,z.n)().isLoggedIn;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{title:(0,i.jsxs)(i.Fragment,{children:["Invest in startups",(0,i.jsx)("br",{}),"that you love"]}),subtitle:"Invest, learn, interact and grow your wealth while helping the best founders build successful startups.",cta:{label:s?"Invest now":"Sign Up",link:s?"/deals":"/sign-up",trackEventName:"Sign Up - Investors"},illustration:(0,i.jsx)(se,{})}),(0,i.jsx)(o.Z,{data:fe}),(0,i.jsx)(ve,{deals:t}),(0,i.jsx)(D,{}),(0,i.jsx)(o.Z,{data:xe}),"/yes-connect"===n&&(0,i.jsx)(F,{}),(0,i.jsx)(r.Z,{title:(0,i.jsxs)(i.Fragment,{children:["Start investing with as",(0,i.jsx)("br",{})," little as \u20b95000"]}),buttons:[{label:s?"Invest now":"Sign Up",link:s?"/deals":"/sign-up",trackEventName:"Get Started [bottom CTA] - Investor"},{label:"Learn",link:"/learn",trackEventName:"Learn [bottom CTA] - Investor"}]})]})}},13815:function(e,t,n){var i=n(85893),r=n(82175),a=n(67294),o=n(71855),s=n(17475),l=n(1853);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){d(e,t,n[t])}))}return e}t.Z=function(e){var t=(0,o.t)(),n=(0,r.u6)(),d=e.minChars-(n.values[e.name]||"").toString().length,m=e.maxChars-(n.values[e.name]||"").toString().length;return(0,a.useEffect)((function(){e.credit&&function(){var t=n.values[e.name],i=n.values[e.name].split(" ").join("");i.length>0&&(i=i.match(new RegExp(".{1,4}","g")).join(" ")),t!=i&&n.setFieldValue(e.name,i)}()}),[e.credit,e.name,n]),(0,i.jsxs)("div",{className:t.form_control,children:[(0,i.jsxs)("div",{className:t.label_div,children:[""!==e.label&&(0,i.jsx)("label",{htmlFor:e.name,children:(0,i.jsxs)(s.Z,{variant:"body2",component:"p",gutterBottom:!0,weight:600,children:[e.label,e.required&&(0,i.jsx)(s.Z,{variant:"inherit",component:"sup",color:"error",children:"*"})]})}),e.minChars&&d>0&&(0,i.jsxs)(s.Z,{variant:"uiSmall",color:"primary",children:["Min."," ",(0,i.jsx)(s.Z,{variant:"inherit",color:"inherit",weight:700,display:"inline",children:d})," ","characters more"]})]}),e.infoText&&(0,i.jsx)(s.Z,{variant:"subtitle",component:"p",weight:300,gutterBottom:!0,className:t.input_overline,children:e.infoText}),(0,i.jsx)(r.gN,{name:e.name,children:function(r){var a,o=r.field,d=r.meta;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:t.input_div,children:[e.icon&&(0,i.jsx)("div",{className:t.input_div_icon,children:e.icon}),(0,i.jsx)("input",c({type:e.type,placeholder:e.placeholder,disabled:!!e.disabled},o,{onFocus:function(){return e.showHelperText&&e.showHelperText()},onBlur:function(t){n.handleBlur(t),e.hideHelperText&&e.hideHelperText()},className:"".concat(t.input," ").concat(d.touched&&d.error?"error":""),value:o.value||""},e.inputmode?{inputMode:e.inputmode}:{},{maxLength:e.maxChars||e.maxDigit,style:{textTransform:null!==(a=e.textTransform)&&void 0!==a?a:"none"},onWheel:function(e){return e.currentTarget.blur()}})),e.maxChars&&(0,i.jsxs)(s.Z,{variant:"body2",color:m>5?"primary":"error",align:"right",children:[(0,i.jsx)(s.Z,{variant:"inherit",color:"inherit",weight:700,children:m>0||0===m?m:"0"})," ","characters remaining"]})]}),d.touched&&d.error&&(0,i.jsx)(l.Z,{small:!0,children:d.error})]})}})]})}},92525:function(e,t,n){n.d(t,{M:function(){return i},W:function(){return r}});var i=function(e){var t=1e6,n=1e9,i="0",r="K";return e<t?i=(e/1e3).toLocaleString("en-IN",{maximumFractionDigits:1,minimumFractionDigits:0,style:"currency",currency:"INR"}):e<n?(i=(e/t).toLocaleString("en-IN",{maximumFractionDigits:1,minimumFractionDigits:0,style:"currency",currency:"INR"}),r="M"):(i=(e/n).toLocaleString("en-IN",{maximumFractionDigits:1,minimumFractionDigits:0,style:"currency",currency:"INR"}),r="B"),"".concat(i).concat(r)},r=function(e){var t=function(e){var t,n=e.toString().split(".");return"".concat(n[0],".").concat((null===(t=n[1])||void 0===t?void 0:t.length)?n[1].slice(0,2):0)},n=1e5,i=1e7,r="0",a="K";return e<n?r=(e/1e3).toFixed(1):e<i?(r=t(e/n),a="L"):(r=t(e/i),a="CR"),"".concat(r).concat(a)}}}]);