(this.webpackJsonpreact_single_page_board=this.webpackJsonpreact_single_page_board||[]).push([[0],{52:function(t,e,n){},53:function(t,e,n){},94:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(45),o=n.n(s),r=(n(52),n(53),n(11)),j=n(3),i=n(15),l=n.n(i),b=n(46),u=n(9),d=n(10),O=n.n(d),h=n.p+"static/media/logo.42627872.svg",p=n(0);function x(t){var e=t.content;return Object(p.jsxs)("tr",{className:"rowrow",children:[Object(p.jsx)("td",{children:e.author}),Object(p.jsx)("td",{children:Object(p.jsx)(r.b,{to:{pathname:"/modify",state:e},children:e.subject})}),Object(p.jsx)("td",{children:e.created})]})}var m=function(){var t=Object(c.useState)(1),e=Object(u.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)([]),o=Object(u.a)(s,2),r=o[0],j=o[1],i=Object(c.useState)(!0),d=Object(u.a)(i,2),m=d[0],f=d[1],g="https://kenken0803.asuscomm.com:3030/getDB?id=".concat(n-1,"&start=").concat(n),v=function(){var t=Object(b.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get(g);case 2:e=t.sent,j(e),f(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[n]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\uc791\uc131\uc790"}),Object(p.jsx)("td",{children:"\uc81c\ubaa9"}),Object(p.jsx)("td",{children:"\uc791\uc131\uc77c"})]})}),Object(p.jsx)("tbody",{children:m?Object(p.jsx)("img",{src:h,className:"App-logo",alt:"LOADING..."}):r.data.map((function(t,e){return Object(p.jsx)(x,{content:t},e)}))}),Object(p.jsx)("tfoot",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("button",{onClick:function(){if(n<11)return!1;a(n-10)},children:"\uc774\uc804"})}),Object(p.jsxs)("td",{children:["\ud604\uc7ac \ud398\uc774\uc9c0 : ",n]}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{onClick:function(){a(n+10)},children:"\ub2e4\uc74c"})})]})})]})})},f=n(2),g=n(16),v=n(17),w=n.n(v);var C=function(){var t=Object(c.useState)({author:"",email:"",subject:"",contents:"",password:""}),e=Object(u.a)(t,2),n=e[0],a=e[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"form-wrapper",children:["\uc81c\ubaa9",Object(p.jsx)("input",{className:"title-input",type:"text",onChange:function(t){var e=t.target,c=(e.name,e.value);a(Object(f.a)(Object(f.a)({},n),{},{subject:c})),console.log(n.subject)}}),Object(p.jsx)("br",{}),"Email",Object(p.jsx)("input",{type:"text",onChange:function(t){var e=t.target,c=(e.name,e.value);a(Object(f.a)(Object(f.a)({},n),{},{email:c})),console.log(n.email)}}),"\uc791\uc131\uc790",Object(p.jsx)("input",{type:"text",onChange:function(t){var e=t.target,c=(e.name,e.value);a(Object(f.a)(Object(f.a)({},n),{},{author:c})),console.log(n.author)}}),Object(p.jsx)(g.CKEditor,{editor:w.a,data:"",onChange:function(t,e){var c=e.getData();a(Object(f.a)(Object(f.a)({},n),{},{contents:c})),console.log(n.contents)}})]}),"\ud328\uc2a4\uc6cc\ub4dc",Object(p.jsx)("input",{type:"password",onChange:function(t){var e=t.target,c=(e.name,e.value);a(Object(f.a)(Object(f.a)({},n),{},{password:c})),console.log(n.password)}}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(){O.a.post("https://kenken0803.asuscomm.com:3030/insertDB",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json;charset=utf-8"},author:n.author,email:n.email,subject:n.subject,contents:n.contents,password:n.password}).then(alert("\ub4f1\ub85d\uc644\ub8cc"))},children:"\uc804\uc1a1"})]})};var k=function(t){console.log(t);var e=Object(c.useState)({author:t.location.state.author,email:t.location.state.email,subject:t.location.state.subject,contents:t.location.state.contents,password:t.location.state.password,id:t.location.state.id}),n=Object(u.a)(e,2),a=n[0],s=n[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"form-wrapper",children:[Object(p.jsx)("input",{className:"title-input",type:"text",defaultValue:t.location.state.subject,onChange:function(t){var e=t.target,n=(e.name,e.value);s(Object(f.a)(Object(f.a)({},a),{},{subject:n})),console.log(a.subject)}}),Object(p.jsx)("br",{}),"Email:",Object(p.jsx)("input",{type:"text",defaultValue:t.location.state.email,onChange:function(t){var e=t.target,n=(e.name,e.value);s(Object(f.a)(Object(f.a)({},a),{},{email:n})),console.log(a.email)}}),"\uc791\uc131\uc790:",Object(p.jsx)("input",{type:"text",defaultValue:t.location.state.author,onChange:function(t){var e=t.target,n=(e.name,e.value);s(Object(f.a)(Object(f.a)({},a),{},{author:n})),console.log(a.author)}}),Object(p.jsx)(g.CKEditor,{editor:w.a,data:t.location.state.contents,onChange:function(t,e){var n=e.getData();s(Object(f.a)(Object(f.a)({},a),{},{contents:n})),console.log(a.contents)}})]}),"\ud328\uc2a4\uc6cc\ub4dc",Object(p.jsx)("input",{type:"password",onChange:function(t){var e=t.target,n=(e.name,e.value);s(Object(f.a)(Object(f.a)({},a),{},{password:n})),console.log(a.password)}}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(){O.a.post("https://kenken0803.asuscomm.com:3030/deleteDB",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json;charset=utf-8"},id:a.id}).then(alert("\uc0ad\uc81c\ud568"))},children:"\uc0ad\uc81c\ud558\uae30"}),Object(p.jsx)("button",{onClick:function(){O.a.post("https://kenken0803.asuscomm.com:3030/updateDB",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json;charset=utf-8"},author:a.author,email:a.email,subject:a.subject,contents:a.contents,password:a.password,id:a.id}).then(alert("\ub4f1\ub85d\uc644\ub8cc"))},children:"\uc804\uc1a1\ud558\uae30"})]})};var y=function(){return Object(p.jsx)("h1",{className:"header",children:"\ud5e4\ub354\uc601\uc5ed"})};var N=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(r.b,{to:"/",children:"\ub9ac\uc2a4\ud2b8\ubcf4\uae30"})," \u2003",Object(p.jsx)(r.b,{to:"/writer",children:"\uc0c8 \uae00 \uc4f0\uae30"})]})};var A=function(){return Object(p.jsx)("h4",{className:"footer",children:"\ud48b\ud130 \uc601\uc5ed"})};var D=function(){return Object(p.jsxs)(r.a,{children:[Object(p.jsx)(y,{}),Object(p.jsx)(N,{}),Object(p.jsx)(j.a,{path:"/",exact:!0,component:m}),Object(p.jsx)(j.a,{path:"/writer",component:C}),Object(p.jsx)(j.a,{path:"/modify",component:k}),Object(p.jsx)(A,{})]})};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.b21b521d.chunk.js.map