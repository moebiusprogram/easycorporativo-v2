(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{230:function(e,a,t){!function(e){"use strict";e.CustomTooltips=function(e){var a=this,t={ABOVE:"above",BELOW:"below",CHARTJS_TOOLTIP:"chartjs-tooltip",NO_TRANSFORM:"no-transform",TOOLTIP_BODY:"tooltip-body",TOOLTIP_BODY_ITEM:"tooltip-body-item",TOOLTIP_BODY_ITEM_COLOR:"tooltip-body-item-color",TOOLTIP_BODY_ITEM_LABEL:"tooltip-body-item-label",TOOLTIP_BODY_ITEM_VALUE:"tooltip-body-item-value",TOOLTIP_HEADER:"tooltip-header",TOOLTIP_HEADER_ITEM:"tooltip-header-item"},l={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},t="_canvas-"+(e()+e());return a._chart.canvas.id=t,t}())+"-tooltip"},s=document.getElementById(l.TOOLTIP);if(s||((s=document.createElement("div")).id=l.TOOLTIP,s.className=t.CHARTJS_TOOLTIP,this._chart.canvas.parentNode.appendChild(s)),0!==e.opacity){if(s.classList.remove(t.ABOVE,t.BELOW,t.NO_TRANSFORM),e.yAlign?s.classList.add(e.yAlign):s.classList.add(t.NO_TRANSFORM),e.body){var r=e.title||[],n=document.createElement(l.DIV);n.className=t.TOOLTIP_HEADER,r.forEach(function(e){var a=document.createElement(l.DIV);a.className=t.TOOLTIP_HEADER_ITEM,a.innerHTML=e,n.appendChild(a)});var c=document.createElement(l.DIV);c.className=t.TOOLTIP_BODY;var m=e.body.map(function(e){return e.lines});m.forEach(function(a,s){var r=document.createElement(l.DIV);r.className=t.TOOLTIP_BODY_ITEM;var n=e.labelColors[s],m=document.createElement(l.SPAN);if(m.className=t.TOOLTIP_BODY_ITEM_COLOR,m.style.backgroundColor=n.backgroundColor,r.appendChild(m),a[0].split(":").length>1){var o=document.createElement(l.SPAN);o.className=t.TOOLTIP_BODY_ITEM_LABEL,o.innerHTML=a[0].split(": ")[0],r.appendChild(o);var i=document.createElement(l.SPAN);i.className=t.TOOLTIP_BODY_ITEM_VALUE,i.innerHTML=a[0].split(": ").pop(),r.appendChild(i)}else{var d=document.createElement(l.SPAN);d.className=t.TOOLTIP_BODY_ITEM_VALUE,d.innerHTML=a[0],r.appendChild(d)}c.appendChild(r)}),s.innerHTML="",s.appendChild(n),s.appendChild(c)}var o=this._chart.canvas.offsetTop,i=this._chart.canvas.offsetLeft;s.style.opacity=1,s.style.left=i+e.caretX+"px",s.style.top=o+e.caretY+"px"}else s.style.opacity=0},Object.defineProperty(e,"__esModule",{value:!0})}(a)},435:function(e,a,t){"use strict";t.r(a);var l=t(7),s=t(8),r=t(10),n=t(9),c=t(11),m=t(36),o=t(1),i=t.n(o),d=t(221),u=t(2),E=t(230),p=t(254);t(109);var g=Object(o.lazy)(function(){return t.e(38).then(t.bind(null,255))}),N=function(){return i.a.createElement("div",null,"Loading...")},b=Object(p.getStyle)("--primary"),v=Object(p.getStyle)("--success"),h=Object(p.getStyle)("--info"),x=Object(p.getStyle)("--warning"),f=Object(p.getStyle)("--danger"),y={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:b,borderColor:"rgba(255,255,255,.55)",data:[65,59,84,84,51,55,40]}]},O={tooltips:{enabled:!1,custom:E.CustomTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,y.datasets[0].data)-5,max:Math.max.apply(Math,y.datasets[0].data)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},T={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:h,borderColor:"rgba(255,255,255,.55)",data:[1,18,9,17,34,22,11]}]},w={tooltips:{enabled:!1,custom:E.CustomTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,T.datasets[0].data)-5,max:Math.max.apply(Math,T.datasets[0].data)+5}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},C={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40]}]},A={tooltips:{enabled:!1,custom:E.CustomTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},M={labels:["","","","","","","","","","","","","","","",""],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.3)",borderColor:"transparent",data:[78,81,80,45,34,12,40,75,34,89,32,68,54,72,18,98]}]},S={tooltips:{enabled:!1,custom:E.CustomTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1,barPercentage:.6}],yAxes:[{display:!1}]}},L=[{data:[65,59,84,84,51,55,40],label:"facebook"},{data:[1,13,9,17,34,41,38],label:"twitter"},{data:[78,81,80,45,34,12,40],label:"linkedin"},{data:[35,23,56,22,97,23,64],label:"google"}],k=function(e){var a=L[e],t={labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:a.data,label:a.label}]};return function(){return t}},R={tooltips:{enabled:!1,custom:E.CustomTooltips},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}},_=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],I=function(e,a){var t=_[e],l={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:a||"#c2cfd6",data:t.data,label:t.label}]};return function(){return l}},B={tooltips:{enabled:!1,custom:E.CustomTooltips},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}};function J(e,a){return Math.floor(Math.random()*(a-e+1)+e)}for(var P=[],j=[],D=[],F=0;F<=27;F++)P.push(J(50,200)),j.push(J(80,100)),D.push(65);var W={labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"],datasets:[{label:"My First dataset",backgroundColor:Object(p.hexToRgba)(h,10),borderColor:h,pointHoverBackgroundColor:"#fff",borderWidth:2,data:P},{label:"My Second dataset",backgroundColor:"transparent",borderColor:v,pointHoverBackgroundColor:"#fff",borderWidth:2,data:j},{label:"My Third dataset",backgroundColor:"transparent",borderColor:f,pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5],data:D}]},z={tooltips:{enabled:!1,custom:E.CustomTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,a){return{backgroundColor:a.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}},H=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(n.a)(a).call(this,e))).toggle=t.toggle.bind(Object(m.a)(Object(m.a)(t))),t.onRadioBtnClick=t.onRadioBtnClick.bind(Object(m.a)(Object(m.a)(t))),t.state={dropdownOpen:!1,radioSelected:2},t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"onRadioBtnClick",value:function(e){this.setState({radioSelected:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.hb,null,i.a.createElement(u.u,{xs:"12",sm:"6",lg:"3"},i.a.createElement(u.i,{className:"text-white bg-info"},i.a.createElement(u.j,{className:"pb-0"},i.a.createElement(u.g,{className:"float-right"},i.a.createElement(u.f,{id:"card1",isOpen:this.state.card1,toggle:function(){e.setState({card1:!e.state.card1})}},i.a.createElement(u.A,{caret:!0,className:"p-0",color:"transparent"},i.a.createElement("i",{className:"icon-settings"})),i.a.createElement(u.z,{right:!0},i.a.createElement(u.y,null,"Action"),i.a.createElement(u.y,null,"Another action"),i.a.createElement(u.y,{disabled:!0},"Disabled action"),i.a.createElement(u.y,null,"Something else here")))),i.a.createElement("div",{className:"text-value"},"9.823"),i.a.createElement("div",null,"Members online")),i.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"70px"}},i.a.createElement(d.c,{data:T,options:w,height:70})))),i.a.createElement(u.u,{xs:"12",sm:"6",lg:"3"},i.a.createElement(u.i,{className:"text-white bg-primary"},i.a.createElement(u.j,{className:"pb-0"},i.a.createElement(u.g,{className:"float-right"},i.a.createElement(u.x,{id:"card2",isOpen:this.state.card2,toggle:function(){e.setState({card2:!e.state.card2})}},i.a.createElement(u.A,{className:"p-0",color:"transparent"},i.a.createElement("i",{className:"icon-location-pin"})),i.a.createElement(u.z,{right:!0},i.a.createElement(u.y,null,"Action"),i.a.createElement(u.y,null,"Another action"),i.a.createElement(u.y,null,"Something else here")))),i.a.createElement("div",{className:"text-value"},"9.823"),i.a.createElement("div",null,"Members online")),i.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"70px"}},i.a.createElement(d.c,{data:y,options:O,height:70})))),i.a.createElement(u.u,{xs:"12",sm:"6",lg:"3"},i.a.createElement(u.i,{className:"text-white bg-warning"},i.a.createElement(u.j,{className:"pb-0"},i.a.createElement(u.g,{className:"float-right"},i.a.createElement(u.x,{id:"card3",isOpen:this.state.card3,toggle:function(){e.setState({card3:!e.state.card3})}},i.a.createElement(u.A,{caret:!0,className:"p-0",color:"transparent"},i.a.createElement("i",{className:"icon-settings"})),i.a.createElement(u.z,{right:!0},i.a.createElement(u.y,null,"Action"),i.a.createElement(u.y,null,"Another action"),i.a.createElement(u.y,null,"Something else here")))),i.a.createElement("div",{className:"text-value"},"9.823"),i.a.createElement("div",null,"Members online")),i.a.createElement("div",{className:"chart-wrapper",style:{height:"70px"}},i.a.createElement(d.c,{data:C,options:A,height:70})))),i.a.createElement(u.u,{xs:"12",sm:"6",lg:"3"},i.a.createElement(u.i,{className:"text-white bg-danger"},i.a.createElement(u.j,{className:"pb-0"},i.a.createElement(u.g,{className:"float-right"},i.a.createElement(u.f,{id:"card4",isOpen:this.state.card4,toggle:function(){e.setState({card4:!e.state.card4})}},i.a.createElement(u.A,{caret:!0,className:"p-0",color:"transparent"},i.a.createElement("i",{className:"icon-settings"})),i.a.createElement(u.z,{right:!0},i.a.createElement(u.y,null,"Action"),i.a.createElement(u.y,null,"Another action"),i.a.createElement(u.y,null,"Something else here")))),i.a.createElement("div",{className:"text-value"},"9.823"),i.a.createElement("div",null,"Members online")),i.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"70px"}},i.a.createElement(d.a,{data:M,options:S,height:70}))))),i.a.createElement(u.hb,null,i.a.createElement(u.u,null,i.a.createElement(u.i,null,i.a.createElement(u.j,null,i.a.createElement(u.hb,null,i.a.createElement(u.u,{sm:"5"},i.a.createElement(u.o,{className:"mb-0"},"Traffic"),i.a.createElement("div",{className:"small text-muted"},"November 2015")),i.a.createElement(u.u,{sm:"7",className:"d-none d-sm-inline-block"},i.a.createElement(u.e,{color:"primary",className:"float-right"},i.a.createElement("i",{className:"icon-cloud-download"})),i.a.createElement(u.h,{className:"float-right","aria-label":"Toolbar with button groups"},i.a.createElement(u.g,{className:"mr-3","aria-label":"First group"},i.a.createElement(u.e,{color:"outline-secondary",onClick:function(){return e.onRadioBtnClick(1)},active:1===this.state.radioSelected},"Day"),i.a.createElement(u.e,{color:"outline-secondary",onClick:function(){return e.onRadioBtnClick(2)},active:2===this.state.radioSelected},"Month"),i.a.createElement(u.e,{color:"outline-secondary",onClick:function(){return e.onRadioBtnClick(3)},active:3===this.state.radioSelected},"Year"))))),i.a.createElement("div",{className:"chart-wrapper",style:{height:"300px",marginTop:"40px"}},i.a.createElement(d.c,{data:W,options:z,height:300}))),i.a.createElement(u.l,null,i.a.createElement(u.hb,{className:"text-center"},i.a.createElement(u.u,{sm:12,md:!0,className:"mb-sm-2 mb-0"},i.a.createElement("div",{className:"text-muted"},"Visits"),i.a.createElement("strong",null,"29.703 Users (40%)"),i.a.createElement(u.gb,{className:"progress-xs mt-2",color:"success",value:"40"})),i.a.createElement(u.u,{sm:12,md:!0,className:"mb-sm-2 mb-0 d-md-down-none"},i.a.createElement("div",{className:"text-muted"},"Unique"),i.a.createElement("strong",null,"24.093 Users (20%)"),i.a.createElement(u.gb,{className:"progress-xs mt-2",color:"info",value:"20"})),i.a.createElement(u.u,{sm:12,md:!0,className:"mb-sm-2 mb-0"},i.a.createElement("div",{className:"text-muted"},"Pageviews"),i.a.createElement("strong",null,"78.706 Views (60%)"),i.a.createElement(u.gb,{className:"progress-xs mt-2",color:"warning",value:"60"})),i.a.createElement(u.u,{sm:12,md:!0,className:"mb-sm-2 mb-0"},i.a.createElement("div",{className:"text-muted"},"New Users"),i.a.createElement("strong",null,"22.123 Users (80%)"),i.a.createElement(u.gb,{className:"progress-xs mt-2",color:"danger",value:"80"})),i.a.createElement(u.u,{sm:12,md:!0,className:"mb-sm-2 mb-0 d-md-down-none"},i.a.createElement("div",{className:"text-muted"},"Bounce Rate"),i.a.createElement("strong",null,"Average Rate (40.15%)"),i.a.createElement(u.gb,{className:"progress-xs mt-2",color:"primary",value:"40"}))))))),i.a.createElement(u.hb,null,i.a.createElement(u.u,{xs:"6",sm:"6",lg:"3"},i.a.createElement(o.Suspense,{fallback:N()},i.a.createElement(g,{dataBox:function(){return{variant:"facebook",friends:"89k",feeds:"459"}}},i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:k(0),options:R,height:90}))))),i.a.createElement(u.u,{xs:"6",sm:"6",lg:"3"},i.a.createElement(o.Suspense,{fallback:N()},i.a.createElement(g,{dataBox:function(){return{variant:"twitter",followers:"973k",tweets:"1.792"}}},i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:k(1),options:R,height:90}))))),i.a.createElement(u.u,{xs:"6",sm:"6",lg:"3"},i.a.createElement(o.Suspense,{fallback:N()},i.a.createElement(g,{dataBox:function(){return{variant:"linkedin",contacts:"500+",feeds:"292"}}},i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:k(2),options:R,height:90}))))),i.a.createElement(u.u,{xs:"6",sm:"6",lg:"3"},i.a.createElement("div",{className:"brand-card"},i.a.createElement("div",{className:"brand-card-header bg-google-plus"},i.a.createElement("i",{className:"fa fa-google-plus"}),i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:k(3),options:R,height:90}))),i.a.createElement("div",{className:"brand-card-body"},i.a.createElement("div",null,i.a.createElement("div",{className:"text-value"},"894"),i.a.createElement("div",{className:"text-uppercase text-muted small"},"followers")),i.a.createElement("div",null,i.a.createElement("div",{className:"text-value"},"92"),i.a.createElement("div",{className:"text-uppercase text-muted small"},"circles")))))),i.a.createElement(u.hb,null,i.a.createElement(u.u,null,i.a.createElement(u.i,null,i.a.createElement(u.n,null,"Traffic "," & "," Sales"),i.a.createElement(u.j,null,i.a.createElement(u.hb,null,i.a.createElement(u.u,{xs:"12",md:"6",xl:"6"},i.a.createElement(u.hb,null,i.a.createElement(u.u,{sm:"6"},i.a.createElement("div",{className:"callout callout-info"},i.a.createElement("small",{className:"text-muted"},"New Clients"),i.a.createElement("br",null),i.a.createElement("strong",{className:"h4"},"9,123"),i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:I(0,b),options:B,width:100,height:30})))),i.a.createElement(u.u,{sm:"6"},i.a.createElement("div",{className:"callout callout-danger"},i.a.createElement("small",{className:"text-muted"},"Recurring Clients"),i.a.createElement("br",null),i.a.createElement("strong",{className:"h4"},"22,643"),i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:I(1,f),options:B,width:100,height:30}))))),i.a.createElement("hr",{className:"mt-0"}),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Monday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"info",value:"34"}),i.a.createElement(u.gb,{className:"progress-xs",color:"danger",value:"78"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Tuesday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"info",value:"56"}),i.a.createElement(u.gb,{className:"progress-xs",color:"danger",value:"94"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Wednesday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"info",value:"12"}),i.a.createElement(u.gb,{className:"progress-xs",color:"danger",value:"67"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Thursday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"info",value:"43"}),i.a.createElement(u.gb,{className:"progress-xs",color:"danger",value:"91"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Friday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"info",value:"22"}),i.a.createElement(u.gb,{className:"progress-xs",color:"danger",value:"73"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Saturday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"info",value:"53"}),i.a.createElement(u.gb,{className:"progress-xs",color:"danger",value:"82"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Sunday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"info",value:"9"}),i.a.createElement(u.gb,{className:"progress-xs",color:"danger",value:"69"}))),i.a.createElement("div",{className:"legend text-center"},i.a.createElement("small",null,i.a.createElement("sup",{className:"px-1"},i.a.createElement(u.b,{pill:!0,color:"info"},"\xa0")),"New clients \xa0",i.a.createElement("sup",{className:"px-1"},i.a.createElement(u.b,{pill:!0,color:"danger"},"\xa0")),"Recurring clients"))),i.a.createElement(u.u,{xs:"12",md:"6",xl:"6"},i.a.createElement(u.hb,null,i.a.createElement(u.u,{sm:"6"},i.a.createElement("div",{className:"callout callout-warning"},i.a.createElement("small",{className:"text-muted"},"Pageviews"),i.a.createElement("br",null),i.a.createElement("strong",{className:"h4"},"78,623"),i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:I(2,x),options:B,width:100,height:30})))),i.a.createElement(u.u,{sm:"6"},i.a.createElement("div",{className:"callout callout-success"},i.a.createElement("small",{className:"text-muted"},"Organic"),i.a.createElement("br",null),i.a.createElement("strong",{className:"h4"},"49,123"),i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(d.c,{data:I(3,v),options:B,width:100,height:30}))))),i.a.createElement("hr",{className:"mt-0"}),i.a.createElement("ul",null,i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-user progress-group-icon"}),i.a.createElement("span",{className:"title"},"Male"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"43%")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"warning",value:"43"}))),i.a.createElement("div",{className:"progress-group mb-5"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-user-female progress-group-icon"}),i.a.createElement("span",{className:"title"},"Female"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"37%")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"warning",value:"37"}))),i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-globe progress-group-icon"}),i.a.createElement("span",{className:"title"},"Organic Search"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"191,235 ",i.a.createElement("span",{className:"text-muted small"},"(56%)"))),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"success",value:"56"}))),i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-social-facebook progress-group-icon"}),i.a.createElement("span",{className:"title"},"Facebook"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"51,223 ",i.a.createElement("span",{className:"text-muted small"},"(15%)"))),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"success",value:"15"}))),i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-social-twitter progress-group-icon"}),i.a.createElement("span",{className:"title"},"Twitter"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"37,564 ",i.a.createElement("span",{className:"text-muted small"},"(11%)"))),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"success",value:"11"}))),i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-social-linkedin progress-group-icon"}),i.a.createElement("span",{className:"title"},"LinkedIn"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},"27,319 ",i.a.createElement("span",{className:"text-muted small"},"(8%)"))),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(u.gb,{className:"progress-xs",color:"success",value:"8"}))),i.a.createElement("div",{className:"divider text-center"},i.a.createElement(u.e,{color:"link",size:"sm",className:"text-muted","data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"show more"},i.a.createElement("i",{className:"icon-options"})))))),i.a.createElement("br",null),i.a.createElement(u.kb,{hover:!0,responsive:!0,className:"table-outline mb-0 d-none d-sm-table"},i.a.createElement("thead",{className:"thead-light"},i.a.createElement("tr",null,i.a.createElement("th",{className:"text-center"},i.a.createElement("i",{className:"icon-people"})),i.a.createElement("th",null,"User"),i.a.createElement("th",{className:"text-center"},"Country"),i.a.createElement("th",null,"Usage"),i.a.createElement("th",{className:"text-center"},"Payment Method"),i.a.createElement("th",null,"Activity"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/1.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-success"}))),i.a.createElement("td",null,i.a.createElement("div",null,"Yiorgos Avraamu"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-us h4 mb-0",title:"us",id:"us"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"50%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(u.gb,{className:"progress-xs",color:"success",value:"50"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-cc-mastercard",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"10 sec ago"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-danger"}))),i.a.createElement("td",null,i.a.createElement("div",null,"Avram Tarasios"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"Recurring")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-br h4 mb-0",title:"br",id:"br"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"10%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(u.gb,{className:"progress-xs",color:"info",value:"10"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-cc-visa",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"5 minutes ago"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-warning"}))),i.a.createElement("td",null,i.a.createElement("div",null,"Quintin Ed"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-in h4 mb-0",title:"in",id:"in"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"74%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(u.gb,{className:"progress-xs",color:"warning",value:"74"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-cc-stripe",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"1 hour ago"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-secondary"}))),i.a.createElement("td",null,i.a.createElement("div",null,"En\xe9as Kwadwo"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-fr h4 mb-0",title:"fr",id:"fr"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"98%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(u.gb,{className:"progress-xs",color:"danger",value:"98"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-paypal",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"Last month"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-success"}))),i.a.createElement("td",null,i.a.createElement("div",null,"Agapetus Tade\xe1\u0161"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-es h4 mb-0",title:"es",id:"es"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"22%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(u.gb,{className:"progress-xs",color:"info",value:"22"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-google-wallet",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"Last week"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),i.a.createElement("span",{className:"avatar-status badge-danger"}))),i.a.createElement("td",null,i.a.createElement("div",null,"Friderik D\xe1vid"),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-pl h4 mb-0",title:"pl",id:"pl"})),i.a.createElement("td",null,i.a.createElement("div",{className:"clearfix"},i.a.createElement("div",{className:"float-left"},i.a.createElement("strong",null,"43%")),i.a.createElement("div",{className:"float-right"},i.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),i.a.createElement(u.gb,{className:"progress-xs",color:"success",value:"43"})),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"fa fa-cc-amex",style:{fontSize:"24px"}})),i.a.createElement("td",null,i.a.createElement("div",{className:"small text-muted"},"Last login"),i.a.createElement("strong",null,"Yesterday"))))))))))}}]),a}(o.Component);a.default=H}}]);
//# sourceMappingURL=25.8ef7180d.chunk.js.map