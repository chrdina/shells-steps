(this["webpackJsonpshells-steps"]=this["webpackJsonpshells-steps"]||[]).push([[0],{106:function(e,t,a){e.exports=a(287)},111:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(63),i=a.n(l),c=(a(111),a(10)),s=a(11),o=a(14),u=a(13),m=(a(68),a(12)),d=a(3),f=a(288).createClient({space:"r1wogzr4p3xm",accessToken:"503f757960e1eb1b131f90222821301097a03523d3bcbc470b4ff842fb9cf17d"}),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getAsset("71TyxViSSevOn2SFzybHtE").then((function(t){return e.setState({data:"".concat(t.fields.file.url,"?fm=jpg&fl=progressive")})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero-image-main",style:{backgroundImage:"url(".concat(this.state.data,")")}},r.a.createElement("div",{className:"title-area"},r.a.createElement("h1",null,"Shell's Steps"),r.a.createElement("p",null,"My travel tales from around the world."),r.a.createElement(m.Link,{to:"/trips/"},r.a.createElement("button",{"aria-label":"View my trips",className:"title-cta"},"View my trips")))))}}]),a}(r.a.Component);var v=function(e){var t={pathname:e.to,data:e.data};return r.a.createElement("div",null,r.a.createElement(m.Link,{className:"below-fixed-header",id:e.id,to:t},r.a.createElement("div",{className:"tile ".concat(e.filteredOut&&"filtered"),style:{backgroundImage:"url(".concat(e.imgSrc,"?fm=jpg&w=600&fl=progressive)")}},r.a.createElement("div",{className:"tile-text"},r.a.createElement("h2",null,e.text)))))},h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getEntries({content_type:"country",order:"fields.countryName"}).then((function(t){return e.setState({data:t.items})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h1",null,"Countries")),r.a.createElement("div",{className:"tiles"},this.state.data&&this.state.data.map((function(e){return r.a.createElement(v,{key:e.sys.id,id:e.sys.id,to:"/countries/".concat(e.sys.id),text:e.fields.countryName,imgSrc:e.fields.tilePicCountry&&null!=e.fields.tilePicCountry.fields?e.fields.tilePicCountry.fields.file.url:void 0,data:e})}))))}}]),a}(r.a.Component),E=a(26),g=a(25),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(E.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(e){this.props.onDateSelect(e.target.text)}},{key:"getAnchorData",value:function(){return this.props.data.map((function(e){return{id:e.sys.id,date:e.fields.tripDate.split("-")[0]}}))}},{key:"removeDuplicates",value:function(e,t){for(var a=[],n=0;n<e.length-1;){if(a.push(e[n]),n+1<e.length-1)for(;e[n][t]===e[n+1][t];)n++;n++}return a}},{key:"render",value:function(){var e=this,t=this.getAnchorData(),a=this.props.selectedYear;return r.a.createElement("div",{id:"side-nav-left"},r.a.createElement("ul",{className:"no-style"},this.props.data&&this.removeDuplicates(t,"date").map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(g.HashLink,{key:t.id,to:"#".concat(t.id),onClick:e.handleClick,className:a===t.date?"active":"inactive",smooth:!0},t.date))}))))}}]),a}(r.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleDateSelect=n.handleDateSelect.bind(Object(E.a)(n)),n.state={data:[],selectedYear:"",filterActive:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getEntries({content_type:"Trip",order:"-fields.tripDate"}).then((function(t){return e.setState({data:t.items})}))}},{key:"handleDateSelect",value:function(e){e===this.state.selectedYear?(this.setState({selectedYear:""}),this.setState({filterActive:!1})):(this.setState({selectedYear:e}),this.setState({filterActive:!0}))}},{key:"render",value:function(){var e=this.state.selectedYear,t=this.state.filterActive;return r.a.createElement(r.a.Fragment,null,this.state.data&&r.a.createElement(y,{data:this.state.data,selectedYear:e,onDateSelect:this.handleDateSelect}),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h1",null,"Trips")),r.a.createElement("div",{className:"tiles"},this.state.data&&this.state.data.map((function(a){return r.a.createElement(v,{key:a.sys.id,id:a.sys.id,to:"/trips/".concat(a.sys.id),text:a.fields.tripName,imgSrc:a.fields.tilePicTrip&&null!==a.fields.tilePicTrip.fields?a.fields.tilePicTrip.fields.file.url:void 0,filteredOut:t&&e!==a.fields.tripDate.split("-")[0]})})))))}}]),a}(r.a.Component),k=a(27),N=a.n(k),O=a(41),w=a(17),j=a(19),C=a.n(j),S=a(105),x=a.n(S),D=(a(284),a(32)),P=a(33),F=a(22);P.b.add(F.d,F.b,F.c);var L=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChange=function(e){return n.setState({value:e})},n.handleKeyPress=function(e){console.log("key pressed: "+e.key),"ArrowRight"===e.key?n.setState({value:n.state.value+1}):"ArrowLeft"===e.key&&n.setState({value:n.state.value-1})},n.state={value:0},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"carousel",tabIndex:"0",onKeyDown:function(t){return e.handleKeyPress(t)}},r.a.createElement(x.a,{value:this.state.value,onChange:this.onChange,centered:!0,infinite:!0,arrowLeft:r.a.createElement(D.a,{className:"carousel-arrow",icon:"chevron-left"}),arrowRight:r.a.createElement(D.a,{className:"carousel-arrow",icon:"chevron-right"}),addArrowClickHandler:!0,keepDirectionWhenDragging:!0},this.props.items&&this.props.items.map((function(e,t){return r.a.createElement("img",{src:"".concat(e.fields.file.url,"?fm=jpg&fl=progressive&q=30"),key:t,alt:e.fields.title})}))))}}]),a}(r.a.Component);var T=function(e,t){var a=e.split("-"),n=new Date(a[0],a[1]-1,a[2]);return n.getDate().toString()+" "+n.toLocaleString("default",{month:t})+" "+n.getFullYear().toString()};var M=function(e){var t=e.icon,a=e.text;return r.a.createElement("div",{className:"tag"},r.a.createElement(D.a,{icon:t,className:"icon"}),r.a.createElement("div",{className:"tag-text"},a))};var A=function(e){var t=Object(n.useState)(!0),a=Object(w.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)({}),s=Object(w.a)(c,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(O.a)(N.a.mark((function t(){var a,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.location.pathname.split("/")[2],t.next=3,f.getEntry(a);case 3:n=t.sent,u(n),i(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.location.data?(u(e.location.data),i(!1)):t()}),[e.location]),l?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"trip-hero"},r.a.createElement("div",{className:"hero-text-area"},r.a.createElement("div",{className:"hero-title"},r.a.createElement("h1",null,o.fields.tripName)),r.a.createElement("hr",{className:"style-1"}),r.a.createElement("div",{className:"hero-tags"},r.a.createElement(M,{icon:F.a,text:T(o.fields.tripDate,"long")}),r.a.createElement(M,{icon:F.e,text:o.fields.tripLocations})),r.a.createElement("ul",{className:"no-style-light-blue"},o.fields.countriesVisitedInTrip.map((function(e,t){return r.a.createElement("li",{className:"hero-inline-list_item",key:t},r.a.createElement(g.HashLink,{to:"/countries/".concat(e.sys.id),className:"country-link"},e.fields.countryName))})))),o.fields.tilePicTrip&&r.a.createElement("div",{className:"hero-image",style:{backgroundImage:"url(".concat(o.fields.tilePicTrip.fields.file.url,"?fm=jpg&fl=progressive)")}})),r.a.createElement("div",{className:"content-container"},r.a.createElement(L,{items:o.fields.tripPhotos}),r.a.createElement("div",{className:"content-section"},r.a.createElement(C.a,null,o.fields.highlights),r.a.createElement(C.a,null,o.fields.tripItinirary)),r.a.createElement("div",{className:"content-section"},r.a.createElement("div",{className:"blog"},r.a.createElement(C.a,null,o.fields.tripDetails.replace(/.JPG/gi,".JPG?fl=progressive"))))))};var I=function(e){var t=Object(n.useState)(!0),a=Object(w.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)({}),s=Object(w.a)(c,2),o=s[0],u=s[1];if(console.log("Country Props: "),console.log(e.location),Object(n.useEffect)((function(){var t=function(){var t=Object(O.a)(N.a.mark((function t(){var a,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.location.pathname.split("/")[2],t.next=3,f.getEntry(a);case 3:n=t.sent,u(n),i(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.location.data?(u(e.location.data),i(!1)):t()}),[e.location]),l)return r.a.createElement(r.a.Fragment,null);var m=o.fields.tripsInThisCountry,d=m.length?m.map((function(e){return console.info("trip",e)||r.a.createElement(v,{key:e.sys.id,to:"/trips/".concat(e.sys.id),text:e.fields.tripName,imgSrc:e.fields.tilePicTrip&&null!=e.fields.tilePicTrip.fields?e.fields.tilePicTrip.fields.file.url:void 0,data:e})})):r.a.createElement(r.a.Fragment,null);return r.a.createElement(r.a.Fragment,null,o.fields.tilePicCountry&&r.a.createElement("div",{className:"country-hero",style:{backgroundImage:"url(".concat(o.fields.tilePicCountry.fields.file.url,"?fm=jpg&fl=progressive)")}},r.a.createElement("div",{className:"country-hero-text"},o.fields.countryName)),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"content-section"},r.a.createElement(C.a,null,o.fields.countryHighlights)),r.a.createElement("div",{className:"content-section"},r.a.createElement(C.a,null,o.fields.countryTips)),r.a.createElement("div",{className:"content-section"},r.a.createElement(C.a,null,o.fields.countryLocations)),r.a.createElement("div",{className:"content-section"},r.a.createElement("h2",null," Trips in ",o.fields.countryName," "),r.a.createElement("div",{className:"tiles"},d))))};var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"map"},r.a.createElement("iframe",{src:"https://www.google.com.au/maps/d/embed?mid=14Xxl8D0RNCmZcCREEImvSxx7QpE"})))};var H=function(e){var t=e.navLinks,a=Object(n.useState)(!1),l=Object(w.a)(a,2),i=l[0],c=l[1];return console.log(t),r.a.createElement("div",{className:"collapsible-menu-container"},r.a.createElement("div",{className:"hamburger ".concat(i?"open":null),onClick:function(){return c(!i)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:"collapsible-menu ".concat(i?"collapsible-menu-active":null)},r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(m.NavLink,{key:t,to:"/"+("Home"===e?"":e),exact:!0,activeClassName:"nav-active-collapsible",onClick:function(){return c(!1)}},r.a.createElement("li",null,e))})))))};function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var W=r.a.createElement("defs",null,r.a.createElement("style",{type:"text/css"},"\r\n           /* merienda-regular - latin */\r\n            @font-face {\r\n                font-family: 'Merienda';\r\n                font-style: normal;\r\n                font-weight: 400;\r\n                src: url('./fonts/merienda-v9-latin-regular.eot'); /* IE9 Compat Modes */\r\n                src: local('Merienda'), local('Merienda-Regular_0_wt'),\r\n                url('./fonts/merienda-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\r\n                url('./fonts/merienda-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\r\n                url('./fonts/merienda-v9-latin-regular.woff') format('woff'), /* Modern Browsers */\r\n                url('./fonts/merienda-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\r\n                url('./fonts/merienda-v9-latin-regular.svg#Merienda') format('svg'); /* Legacy iOS */\r\n            }\r\n        ")),_=r.a.createElement("g",{id:"Artboard-Copy-2",strokeWidth:3,fill:"none",fillRule:"evenodd"},r.a.createElement("text",{fontFamily:"Merienda",fontSize:32,fill:"#383838"},r.a.createElement("tspan",{x:100,y:46},"Shell\u2019s"),r.a.createElement("tspan",{x:100,y:78},"Steps")),r.a.createElement("g",{id:"Marker-Copy-5",transform:"translate(1.000000, 1.000000)",fill:"#656565",stroke:"#E6E6E6",strokeWidth:1.166},r.a.createElement("path",{d:"M35.5,0.583 C45.1414709,0.583 53.8699442,4.52650337 60.1882075,10.9015495 C66.5083502,17.2784919 70.417,26.0882768 70.417,35.819042 C70.417,48.851565 58.6738494,68.6066622 35.3457478,95.1122108 C12.2237295,68.605258 0.583,48.8509652 0.583,35.819042 C0.583,26.0882768 4.49164984,17.2784919 10.8117925,10.9015495 C17.1300558,4.52650337 25.8585291,0.583 35.5,0.583 Z",id:"Oval"})),r.a.createElement("path",{d:"M41.963681,1 C35.9297308,2.84121783 25.0141219,2.50257348 21.2625951,10.9276738 C19.9828164,13.801774 16.3289458,18.9513319 18.889322,20.2335044 C26.8520058,24.2210177 36.2687373,21.0427362 44.81976,22.7245141 C76.128966,28.8822723 25.6193533,34.0421464 21.3942694,44.8090428 C15.6924511,59.3391416 50.6780641,46.1619105 41.6533058,64.9989495 C39.091225,70.3466844 33.623185,73.9406974 32.4078867,79.8940967 C31.6127573,83.7892085 35.033013,87.2980322 36.3455762,91",id:"Path-Copy-3",stroke:"#FFFFFF",strokeDasharray:2})),J=function(e){var t=e.svgRef,a=e.title,n=B(e,["svgRef","title"]);return r.a.createElement("svg",Y({width:"100%",height:"100%",viewBox:"0 0 200 100",ref:t},n),a?r.a.createElement("title",null,a):null,W,_)},V=r.a.forwardRef((function(e,t){return r.a.createElement(J,Y({svgRef:t},e))}));a.p;var z=function(e){var t=e.navLinks,a=Object(n.useState)(!1),l=Object(w.a)(a,2);return l[0],l[1],console.log(t),r.a.createElement("div",{className:"navbar"},r.a.createElement(m.Link,{to:"/","aria-label":"Logo linking to Shell's Steps homepage"},r.a.createElement("div",{id:"logo"},r.a.createElement(V,null))),r.a.createElement("div",{className:"menu"},r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(m.NavLink,{to:"/"+("Home"===e?"":e),exact:!0,activeClassName:"nav-active"},r.a.createElement("li",null," ",e," "))})))),r.a.createElement(H,{navLinks:t}))},K=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFirstTab=function(e){9===e.keyCode&&(document.body.classList.add("user-is-tabbing"),console.log("User is tabbing"),window.removeEventListener("keydown",n.handleFirstTab))},n.state={menuActive:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return window.addEventListener("keydown",this.handleFirstTab),console.log(window.location),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.HashRouter,{basename:"/"},r.a.createElement("div",{id:"top"}),r.a.createElement(z,{navLinks:["Home","Trips","Countries","Map"]}),r.a.createElement("div",{className:"container-main"},r.a.createElement(d.g,null,r.a.createElement(d.d,{path:"/",exact:!0,component:p}),r.a.createElement(d.d,{path:"/trips/",exact:!0,component:b}),r.a.createElement(d.d,{path:"/trips/:id",component:A}),r.a.createElement(d.d,{path:"/countries/",exact:!0,component:h}),r.a.createElement(d.d,{path:"/countries/:id",component:I}),r.a.createElement(d.d,{path:"/map",component:R})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,t){},68:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.c58f322a.chunk.js.map