(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5801],{25496:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-up",function(){return n(97607)}])},97607:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return G},default:function(){return X}});var r=n(85893),i=n(25291),a=n(49381),s=n(83913),l=n(25932),o=n(96152),u=n(17475),c=n(67720),m=n(50122),d=n(14332),f=n(41664),p=n(67294),h=n(28520),g=n.n(h),v=n(36158);function x(e,t,n,r,i,a,s){try{var l=e[a](s),o=l.value}catch(u){return void n(u)}l.done?t(o):Promise.resolve(o).then(r,i)}var b,j=(b=g().mark((function e(t){var n,r;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,v.Y.post("/auth/sign-up/verify-email",{email:t.toLowerCase()});case 4:n=e.sent,e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(1),r=e.t0,new Error(r.response?r.response.data.message||r.response.data:r.message);case 11:return e.abrupt("return",n.data);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var i=b.apply(e,t);function a(e){x(i,n,r,a,s,"next",e)}function s(e){x(i,n,r,a,s,"throw",e)}a(void 0)}))}),y=n(89551),Z=n(1853),S=n(13815),w=n(2734),N=n(98456),_=n(82175),O=n(62286),P=n(88767),E=n(74231);var k=(0,n(11496).ZP)("div")((function(e){var t,n,r,i=e.theme;return t={display:"flex",gap:"0.5rem",marginBottom:"-3rem","&>*":{flex:1}},n=i.breakpoints.down("sm"),r={flexDirection:"column",gap:0,marginTop:"1.5rem",marginBottom:"-1.5rem","&>div":{marginTop:"0rem"}},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}));function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){L(e,t,n[t])}))}return e}E.i_({mixed:{required:"Please fill this field"}});var F=E.Ry({firstName:E.Z_().min(2,"First name cannot contain single letter").trim().matches(/^[a-zA-Z]{2,}(\s[a-zA-Z]+){0,39}$/,{message:"First name cannot contain special characters or number",excludeEmptyString:!0}).required(),lastName:E.Z_().min(2,"Last name cannot contain single letter").trim().matches(/^[a-zA-Z]{2,}(\s[a-zA-Z]+){0,39}$/,{message:"Last name cannot contain special characters or number",excludeEmptyString:!0}).required(),email:E.Z_().email("Please enter a valid email").required()});function z(){var e=(0,O.parseCookies)(),t=(null===e||void 0===e?void 0:e.magicData)?JSON.parse(e.magicData):void 0;if(t){var n=t.user[0].name.split(" "),r="",i="";return 1===n.length?r=n[0]:(i=n.pop(),r=n.join(" ")),{lastName:i,firstName:r,email:t.user[0].email}}return{firstName:"",lastName:"",email:""}}var T=function(e){var t=e.goToNextStep,n=e.setValuesFn,i=(0,w.Z)(),a=(0,P.useMutation)(j,{onSuccess:function(){return t()}}),s=a.isLoading,l=a.isSuccess,o=a.error,u=a.mutate;return(0,r.jsx)(_.J9,{initialValues:z(),validationSchema:F,enableReinitialize:!0,onSubmit:function(e){u(e.email),n({email:e.email,first:e.firstName,last:e.lastName})},children:(0,r.jsxs)(_.l0,{children:[(0,r.jsxs)(k,{children:[(0,r.jsx)(S.Z,{type:"text",label:"",name:"firstName",placeholder:"First Name"}),(0,r.jsx)(S.Z,{type:"text",label:"",name:"lastName",placeholder:"Last Name"})]}),(0,r.jsx)(S.Z,{type:"text",label:"",name:"email",placeholder:"Email"}),!s&&o&&(0,r.jsx)(Z.Z,{children:o.message}),(0,r.jsx)(y.Z,A({disabled:s||l},s?{text:(0,r.jsx)(N.Z,{size:"1rem",color:"inherit"})}:{text:"Sign Up"},{fullWidth:!0,sx:L({mt:"-1rem !important"},i.breakpoints.down("sm"),{mt:"0.5rem !important"}),size:"medium"}))]})})},q=n(61722),D=n(62023),I=n(58119),R=n(23842),W=n(11163);function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){H(e,t,n[t])}))}return e}E.i_({mixed:{required:"Please fill this field"}});var B=E.Ry({otp:E.Z_().matches(/^\d{6}$/,"Please enter all 6 digits").required()}),C={otp:""},M=function(e){var t=e.values,n=(0,W.useRouter)().push,i=(0,R.n)(),l=i.isLoading,o=i.signUp,c=i.login,m=(0,P.useMutation)(q.q,{onSuccess:function(e){(0,I.wl)("Signup Successful",{tykeEventValue:t.email,channel:"email"}),o(e)}}),d=m.isLoading,f=m.isSuccess,h=m.error,g=m.mutate;return(0,p.useEffect)((function(){!l&&f&&n("/sign-up/nationality").then((function(){return c()}))}),[l,f]),(0,r.jsx)(a.Z,{children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(u.Z,{variant:"body1",color:"grey.500",children:"We\u2019ve sent an OTP to your registered email ID. Enter it here to verify your email and continue!"}),(0,r.jsx)(_.J9,{initialValues:C,validationSchema:B,onSubmit:function(e){return g({email:t.email,otp:e.otp,firstName:t.first,lastName:t.last})},children:(0,r.jsxs)(_.l0,{children:[(0,r.jsx)(D.Z,{label:"",name:"otp",resend_value:t.email,resend:j}),!d&&h&&(0,r.jsx)(Z.Z,{children:h.message}),(0,r.jsx)(y.Z,V({disabled:d||f},d?{text:(0,r.jsx)(N.Z,{size:"1rem",color:"inherit"})}:{},{fullWidth:!0}))]})})]})})},U=function(e){var t=e.defaultEmail,n=void 0===t?"":t,i=e.defaultFirst,a=void 0===i?"":i,h=e.defaultLast,g=void 0===h?"":h,v=(0,p.useState)(n?2:1),x=v[0],b=v[1],j=(0,p.useState)({email:n,first:a,last:g}),y=j[0],Z=j[1];return(0,r.jsx)(d.M,{exitBeforeEnter:!0,children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{title:"Get Started",headerSx:{textAlign:"center",mb:"2rem"}}),1===x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{isSignUp:!0}),(0,r.jsx)(c.Z,{sx:{mt:"2rem"},children:(0,r.jsx)(u.Z,{variant:"overline",display:"block",color:"grey.300",sx:{lineHeight:"1em"},children:"OR SIGN UP WITH EMAIL"})}),(0,r.jsx)(T,{goToNextStep:function(){return b(2)},setValuesFn:function(e){return Z(e)}}),(0,r.jsx)(c.Z,{sx:{mt:"2.5rem",mb:"1.5rem"}}),(0,r.jsxs)(u.Z,{variant:"uiSmall2",display:"block",weight:300,gutterBottom:!0,children:["Already have an account?"," ",(0,r.jsx)(f.default,{href:"/login",passHref:!0,children:(0,r.jsx)(m.Z,{variant:"inherit",color:"secondary.main",sx:{fontWeight:600},underline:"hover",children:"Log in instead"})})]}),(0,r.jsxs)(u.Z,{variant:"uiSmall2",display:"block",weight:300,children:["Are you a founder looking to raise funds?"," ",(0,r.jsx)(f.default,{href:"/founders",passHref:!0,children:(0,r.jsx)(m.Z,{variant:"inherit",color:"secondary.main",sx:{fontWeight:600},underline:"hover",children:"Apply Here"})})]})]}):(0,r.jsx)(M,{values:y})]})})},J=n(62492),$=function(e){var t=e.defaultEmail,n=e.defaultFirst,s=e.defaultLast,l=(0,R.n)(),o=l.isLoggedIn,u=l.isLoading,c=l.status,m=(0,W.useRouter)().push,d=(0,i.A)();return(0,p.useEffect)((function(){var e=sessionStorage.getItem("signup_origin");!u&&o&&(c.nationality?c.risks?m(e||"/profile"):m("/sign-up/risks"):m("/sign-up/nationality"))}),[u]),u||d?null:(0,r.jsx)(a.Z,{children:(0,r.jsx)(U,{defaultEmail:null!==t&&void 0!==t?t:"",defaultFirst:null!==n&&void 0!==n?n:"",defaultLast:null!==s&&void 0!==s?s:""})})};$.Layout=J.Z;var G=!0,X=$}},function(e){e.O(0,[1653,4838,6629,9774,2888,179],(function(){return t=25496,e(e.s=t);var t}));var t=e.O();_N_E=t}]);