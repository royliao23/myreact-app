(this["webpackJsonpmyreact-app"]=this["webpackJsonpmyreact-app"]||[]).push([[0],{151:function(e,t,a){},152:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),r=a.n(c),o=(a(151),a(227)),s=(a(152),a(72)),l=a(38),d=a(7),m=[{field:"id",headerName:"ID",width:90},{field:"firstname",headerName:"First name",width:150,editable:!0},{field:"lastname",headerName:"Last name",width:150,editable:!0},{field:"email",headerName:"Email",editable:!0,width:140},{field:"address",headerName:"Address",width:140,editable:!0},{field:"income",headerName:"Income",width:140,editable:!0},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:120,valueGetter:function(e){return"".concat(e.getValue(e.id,"firstname")||""," ").concat(e.getValue(e.id,"lastname")||"")}}],b={Authorization:"Token \t8854d62680edf3c63c27ee8bf6d2c320cb902f51"};function h(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.birds}));return Object(n.useEffect)((function(){fetch("https://royliao.pythonanywhere.com/medical/employees/?format=json",{method:"GET",headers:b}).then((function(e){return e.json()})).then((function(t){e({type:"SHOW_EMPLOYEE",arr:t})})).catch((function(e){return console.log(e)}))}),"errors"),console.log("state:"),console.log(t),Object(d.jsx)("div",{style:{height:400,width:"100%"},children:Object(d.jsx)(s.a,{rows:t,columns:m,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0})})}var j=a(39),u=a(60),f=a(6),p=a(231),O=a(96),x=a(124),g=a.n(x),v=a(56),w={firstname:"",lastname:"",email:"",address:"",income:""},y=function(){var e=Object(n.useState)(w),t=Object(f.a)(e,2),a=t[0],i=t[1],c=Object(l.b)(),r=function(e){var t=e.target.name,n=e.target.value;i(Object(u.a)(Object(u.a)({},a),{},Object(j.a)({},t,n)))},o={Authorization:"Token \t8854d62680edf3c63c27ee8bf6d2c320cb902f51"};return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),sessionStorage.setItem("added",""),console.log(a),g.a.post("https://royliao.pythonanywhere.com/medical/employees/",a,{headers:o}).then((function(e){c({type:"ADD_EMPLOYEE",rec:e.data}),console.log("add the reco:"),console.log(e),sessionStorage.setItem("added",e.data),i(w)}))},children:Object(d.jsxs)(p.a,{container:!0,alignItems:"center",justify:"center",direction:"column",children:[Object(d.jsx)(p.a,{item:!0,children:Object(d.jsx)(O.a,{id:"firstname-input",name:"firstname",label:"firstname",type:"text",value:a.firstname,onChange:r})}),Object(d.jsx)(p.a,{item:!0,children:Object(d.jsx)(O.a,{id:"lastname-input",name:"lastname",label:"lastname",type:"text",value:a.lastname,onChange:r})}),Object(d.jsx)(p.a,{item:!0,children:Object(d.jsx)(O.a,{id:"email-input",name:"email",label:"email",type:"text",value:a.email,onChange:r})}),Object(d.jsx)(p.a,{item:!0,children:Object(d.jsx)(O.a,{id:"address-input",name:"address",label:"address",type:"text",value:a.address,onChange:r})}),Object(d.jsx)(p.a,{item:!0,children:Object(d.jsx)(O.a,{id:"income-input",name:"income",label:"income",type:"text",value:a.income,onChange:r})}),Object(d.jsx)(v.a,{variant:"contained",color:"primary",style:{marginTop:"65px"},type:"submit",children:"Submit"})]})})},E=a(232),k=a(230),N=a(61),S=a(189),D=a(233),A=a(92),I=a(125),C=a.n(I),L=a(109),M=Object(L.a)({paper:{width:"100%",height:"96.4%",border:"none",boxShadow:"none"}});function P(){var e=M();return Object(d.jsxs)("div",{className:"nest",children:[Object(d.jsx)(E.a,{position:"static",children:Object(d.jsxs)(k.a,{children:[Object(d.jsx)(N.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(d.jsx)(C.a,{})}),Object(d.jsx)(S.a,{variant:"h6",children:"Awesome App"}),Object(d.jsx)(v.a,{color:"inherit",children:"Login"})]})}),Object(d.jsx)(D.a,{style:{marginTop:"1em"},children:Object(d.jsxs)(p.a,{container:!0,spacing:0,children:[Object(d.jsx)(p.a,{item:!0,container:!0,alignItems:"center",xs:4,children:Object(d.jsx)(A.a,{className:e.paper,children:Object(d.jsx)(y,{})})}),Object(d.jsx)(p.a,{item:!0,xs:8,children:Object(d.jsx)(A.a,{className:e.paper,children:Object(d.jsx)(h,{})})})]})})]})}a(234),a(55),a(12);Object(L.a)((function(e){return{navlinks:{marginLeft:e.spacing(10),display:"flex"},logo:{flexGrow:"1",cursor:"pointer"},link:{textDecoration:"none",color:"white",fontSize:"20px",marginLeft:e.spacing(20),"&:hover":{color:"yellow",borderBottom:"1px solid white"}}}}));var T=function(){return Object(d.jsx)(D.a,{maxWidth:"xl",className:"App",children:Object(d.jsx)(A.a,{children:Object(d.jsx)(P,{})})})},B=a(83),_=a(48),W=Object(_.b)({palette:{type:"light",primary:{main:"#61dafb",light:"#61dafb",dark:"#21a1c4"},secondary:{main:"#b5ecfb",light:"#61dafb",dark:"#21a1c4"},error:{main:B.a.A400},background:{default:"#282c34"}},overrides:{MuiPaper:{root:{padding:"10px 5px",margin:"5px",backgroundColor:"#fff"}},MuiButton:{root:{margin:"5px"}}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(80),Y=a(19),G="ADD_BIRD",R="INCREMENT_BIRD",F="ADD_EMPLOYEE",H="SHOW_EMPLOYEE";var J=Object(z.a)({birds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return[].concat(Object(Y.a)(e),[{name:t.bird,views:1}]);case F:return[].concat(Object(Y.a)(e),[t.rec]);case H:return t.arr;case R:var a=e.find((function(e){return t.bird===e.name})),n=e.filter((function(e){return t.bird!==e.name}));return[].concat(Object(Y.a)(n),[Object(u.a)(Object(u.a)({},a),{},{views:a.views+1})]);default:return e}}}),V=Object(z.b)(J);r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(l.a,{store:V,children:Object(d.jsx)(o.a,{theme:W,children:Object(d.jsx)(T,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[181,1,2]]]);
//# sourceMappingURL=main.08fec128.chunk.js.map