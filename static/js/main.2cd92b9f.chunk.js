(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c.n(a),n=c(6),l=c(15),o=c(5),i=c(13),r=c(14),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},u=c(4),j={query:"",status:"all"},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"status/SET":return Object(u.a)(Object(u.a)({},e),{},{status:t.payload});case"query/SET":return Object(u.a)(Object(u.a)({},e),{},{query:t.payload});default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},m=Object(o.combineReducers)({currentTodo:d,filter:b,todos:h}),O=Object(o.createStore)(m,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(r.a))),v=c(0),x=(c(23),c(24),c(9)),f=c.n(x),p=n.b,y=n.c,N=c(1),g=function(){var e=y((function(e){return e.todos})),t=y((function(e){return e.currentTodo})),c=y((function(e){return e.filter})),a=p(),s=Object(v.useCallback)((function(){var t=(null===c||void 0===c?void 0:c.query.trim().toLowerCase())||"";switch(null===c||void 0===c?void 0:c.status){case"active":return e.filter((function(e){return!e.completed&&e.title.toLowerCase().includes(t)}));case"completed":return e.filter((function(e){return e.completed&&e.title.toLowerCase().includes(t)}));default:return e.filter((function(e){return e.title.toLowerCase().includes(t)}))}return e}),[c,e]);return Object(N.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"#"}),Object(N.jsx)("th",{children:Object(N.jsx)("span",{className:"icon",children:Object(N.jsx)("i",{className:"fas fa-check"})})}),Object(N.jsx)("th",{children:"Title"}),Object(N.jsx)("th",{children:" "})]})}),Object(N.jsx)("tbody",{children:s().map((function(e){return Object(N.jsxs)("tr",{"data-cy":"todo",className:f()({"has-background-info-light":(null===t||void 0===t?void 0:t.id)===e.id}),children:[Object(N.jsx)("td",{className:"is-vcentered",children:e.id}),Object(N.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(N.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(N.jsx)("i",{className:"fas fa-check"})})}),Object(N.jsx)("td",{className:"is-vcentered is-expanded",children:Object(N.jsx)("p",{className:f()({"has-text-success":e.completed},{"has-text-danger":!e.completed}),children:e.title})}),Object(N.jsx)("td",{className:"has-text-right is-vcentered",children:Object(N.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){a({type:"currentTodo/SET",payload:e})}(e)},children:Object(N.jsx)("span",{className:"icon",children:Object(N.jsx)("i",{className:f()("far",{"fa-eye":(null===t||void 0===t?void 0:t.id)!==e.id},{"fa-eye-slash":(null===t||void 0===t?void 0:t.id)===e.id})})})})})]},e.id)}))})]})},T=function(){var e,t=y((function(e){return e.filter})),c=p(),a=function(e){c({payload:e,type:"query/SET"})};return Object(N.jsxs)("form",{className:"field has-addons",children:[Object(N.jsx)("p",{className:"control",children:Object(N.jsx)("span",{className:"select",children:Object(N.jsxs)("select",{"data-cy":"statusSelect",value:(null===t||void 0===t?void 0:t.status)||"all",onChange:function(e){return t=e.target.value,void c({payload:t,type:"status/SET"});var t},children:[Object(N.jsx)("option",{value:"all",children:"All"}),Object(N.jsx)("option",{value:"active",children:"Active"}),Object(N.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(N.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(N.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",value:(null===t||void 0===t?void 0:t.query)||"",onChange:function(e){return a(e.target.value)},placeholder:"Search..."}),Object(N.jsx)("span",{className:"icon is-left",children:Object(N.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(N.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:(null===t||void 0===t||null===(e=t.query)||void 0===e?void 0:e.length)&&Object(N.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")},"aria-label":"Clear"})})]})]})},E=c(3);function k(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(26);var w=function(){return Object(N.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(N.jsx)("div",{className:"Loader__content"})})},S=function(e){var t=e.closeModal,c=Object(v.useState)(!0),a=Object(E.a)(c,2),s=a[0],n=a[1],l=Object(v.useState)(),o=Object(E.a)(l,2),i=o[0],r=o[1],d=y((function(e){return e.currentTodo}));return Object(v.useEffect)((function(){var e;n(!0),(e=(null===d||void 0===d?void 0:d.userId)||0,k("/users/".concat(e))).then((function(e){r(e),n(!1)}))}),[]),Object(N.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(N.jsx)("div",{className:"modal-background"}),s?Object(N.jsx)(w,{}):Object(N.jsxs)("div",{className:"modal-card",children:[Object(N.jsxs)("header",{className:"modal-card-head",children:[Object(N.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===d||void 0===d?void 0:d.id)}),Object(N.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"close",onClick:t})]}),Object(N.jsxs)("div",{className:"modal-card-body",children:[Object(N.jsx)("p",{className:"block","data-cy":"modal-title",children:null===d||void 0===d?void 0:d.title}),Object(N.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==d&&void 0!==d&&d.completed?Object(N.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(N.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(N.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]})]})},C=function(){var e=y((function(e){return e.todos})),t=y((function(e){return e.currentTodo})),c=p();return Object(v.useEffect)((function(){k("/todos").then((function(e){c({type:"todos/SET",payload:e})}))}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"section",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"box",children:[Object(N.jsx)("h1",{className:"title",children:"Todos:"}),Object(N.jsx)("div",{className:"block",children:Object(N.jsx)(T,{})}),Object(N.jsx)("div",{className:"block",children:e.length?Object(N.jsx)(g,{}):Object(N.jsx)(w,{})})]})})}),t&&Object(N.jsx)(S,{closeModal:function(){return c({type:"currentTodo/REMOVE"})}})]})},q=function(){return Object(N.jsx)(n.a,{store:O,children:Object(N.jsx)(l.a,{children:Object(N.jsx)(C,{})})})};s.a.render(Object(N.jsx)(q,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2cd92b9f.chunk.js.map