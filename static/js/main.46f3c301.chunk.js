(this.webpackJsonpportfoliopagev2=this.webpackJsonpportfoliopagev2||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/background.3969ffae.jpg"},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(49),a(8)),i=a(9),s=a(11),m=a(10),u=a(12),d=(a(50),a(51),a(52),a(3)),E=a(16),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(d.Grid,{className:"landing-grid"},r.a.createElement(d.Cell,{col:12},r.a.createElement("img",{src:"/me_cropped.png",alt:"avatar",className:"avatar-image"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"brian betancourt "),r.a.createElement("hr",null),r.a.createElement("p",null,"Software Engineering ",r.a.createElement("i",{className:"fa fa-code","aria-hidden":"true"}),"  | Data Science  ",r.a.createElement("i",{class:"fa fa-flask","aria-hidden":"true"})),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/bibetancourt/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/sulfuroussquares",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})))))))}}]),t}(n.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"aboutme-box",style:{width:"100%",margin:"auto"}},r.a.createElement(d.Grid,{className:"landing-grid"},r.a.createElement(d.Cell,{col:12}),r.a.createElement(d.Cell,{col:12},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"About Me "),r.a.createElement("hr",null),r.a.createElement("p",{style:{whiteSpace:"pre-wrap"}}," I am passionate about solving problems using technology. ")))))}}]),t}(n.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null," ",r.a.createElement("h1",null," Contact "))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={activeTab:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},r.a.createElement(d.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(d.CardTitle,{style:{color:"#fff",height:"20em",background:"url(/logreg2.png) center / cover"}}," "),r.a.createElement(d.CardText,null,"Logistic Regression classification applied to crime data."),r.a.createElement(d.CardActions,{border:!0},r.a.createElement("div",{class:"center-align"},r.a.createElement(d.Button,{colored:!0,href:"https://github.com/sulfuroussquares"},"GitHub"))),r.a.createElement(d.CardMenu,{style:{color:"#fff"}}))):1===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},r.a.createElement(d.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(d.CardTitle,{style:{color:"#fff",height:"20em",background:"url(/comingsoon.png) center / cover"}}," "),r.a.createElement(d.CardText,null,"Coming Soon"),r.a.createElement(d.CardActions,{border:!0},r.a.createElement("div",{class:"center-align"},r.a.createElement(d.Button,{colored:!0,href:"https://github.com/sulfuroussquares"},"GitHub"))),r.a.createElement(d.CardMenu,{style:{color:"#fff"}}))):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"category-tabs"},r.a.createElement(d.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(d.Tab,null,"Data Science"),r.a.createElement(d.Tab,null,"Software Engineering")),r.a.createElement(d.Grid,null,r.a.createElement(d.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories())))))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null," ",r.a.createElement("h1",null," Resume "))}}]),t}(n.Component),v=function(){return r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:b}),r.a.createElement(E.a,{path:"/aboutme",component:h}),r.a.createElement(E.a,{path:"/contact",component:p}),r.a.createElement(E.a,{path:"/projects",component:f}),r.a.createElement(E.a,{path:"/resume",component:g}))},j=a(15),O=(a(103),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"background"},r.a.createElement(d.Layout,{fixedHeader:!0},r.a.createElement(d.Header,{transparent:!0,className:"header-color",title:r.a.createElement("span",null,r.a.createElement("span",{style:{color:"#ddd"}}," "),r.a.createElement(j.b,{style:{textDecoration:"none",color:"white"},to:"/"},r.a.createElement("strong",null,"Home")))},r.a.createElement(d.Navigation,null,r.a.createElement(j.b,{to:"/aboutme"},"About Me"),r.a.createElement(j.b,{to:"/projects"},"Projects"))),r.a.createElement(d.Drawer,{title:"Portfolio"},r.a.createElement(d.Navigation,null,r.a.createElement(j.b,{to:"/aboutme"},"About Me"),r.a.createElement(j.b,{to:"/projects"},"Projects"))),r.a.createElement(d.Content,null,r.a.createElement(v,null))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,t,a){e.exports=a(104)},49:function(e,t,a){},50:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.46f3c301.chunk.js.map