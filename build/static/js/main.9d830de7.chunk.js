(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{36:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),c=n.n(r),u=n(32),o=n(19),i=n(28),m=n.n(i);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"  I'll Keep It"))};var p=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()))},f=n(30),s=n.n(f);var v=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(s.a,null)))},d=n(26),b=n(31),h=n.n(b),j=n(63),k=n(64);var O=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],E=i[1];function p(e){var t=e.target,n=t.name,a=t.value;E((function(e){return Object(d.a)(Object(d.a)({},e),{},{[n]:a})}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r&&l.a.createElement("input",{name:"title",onChange:p,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){c(!0)},onChange:p,value:m.content,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(k.a,{in:r},l.a.createElement(j.a,{onClick:function(t){e.onAdd(m),E({title:"",content:""}),t.preventDefault()}},l.a.createElement(h.a,null)))))};var g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(O,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(v,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(p,null))};c.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9d830de7.chunk.js.map