(this["webpackJsonptodo-machine"]=this["webpackJsonptodo-machine"]||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(8),r=n.n(a),s=(n(22),n(5)),l=n(4),i=n(0);function d(){return Object(i.jsxs)("button",{className:"btn btn-blue","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:[Object(i.jsx)("span",{className:"mr-3",children:"Nuevo "}),Object(i.jsx)(s.a,{icon:l.b})]})}function u(e){var t=e.completedTodos,n=e.allTodos,c=e.loading;return Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-12 col-md-6 offset-md-3 d-flex align-items-center justify-content-between",children:[Object(i.jsxs)("h2",{className:"my-5 ".concat(!!c&&"Todo-counter--loading"," "),children:["Has completado ",t," de ",n," TODOs"]}),Object(i.jsx)(d,{})]})})}n(29);function j(e){var t=e.searchValue,n=e.setSearchValue,c=e.loading;return Object(i.jsx)("section",{className:"container mb-4",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12 col-md-6 offset-md-3",children:Object(i.jsx)("input",{className:"form-control",type:"text",placeholder:"Buscar TO-DO",value:t,onChange:function(e){n(e.target.value)},disabled:c})})})})}function m(e){var t=e.error,n=e.onError,c=e.loading,o=e.onLoading,a=e.searchedtodos,r=e.onEmpty,s=e.render,l=e.allTodos,d=e.searchText,u=e.onEmptyResult;return Object(i.jsx)("section",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-12 col-md-6 offset-md-3",children:[t&&n(),c&&o(),!c&&!l&&r(),!!l&&!a.length&&u(d),!c&&Object(i.jsx)("ul",{className:"m-0 p-0",children:a.map(s)})]})})})}n(30);function b(e){return Object(i.jsxs)("li",{className:"Todo-Item",children:[Object(i.jsx)(s.a,{className:"icon ".concat(e.complete?"text-success":"text-muted"," "),icon:l.a,onClick:e.onComplete}),Object(i.jsx)("span",{className:"".concat(e.complete&&"text-decoration-line-through"),children:e.text}),Object(i.jsx)(s.a,{className:"text-danger icon float-end",icon:l.c,onClick:e.onDelete})]})}function h(e){var t=e.children,n=e.loading;return Object(i.jsx)("header",{className:"container",children:o.a.Children.toArray(t).map((function(e){return o.a.cloneElement(e,{loading:n})}))})}var f=n(3),O=n(14);function x(e){var t=e.addTodo,n=e.modalRef,c=o.a.useState(""),a=Object(f.a)(c,2),r=a[0],s=a[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r);var c=n.current;O.Modal.getInstance(c).hide(),s("")},children:[Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",id:"nuevo-todo",rows:"3",value:r,placeholder:"Ir al cine a las 8:00",onChange:function(e){s(e.target.value)}})}),Object(i.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Guardar"})]})}function p(){return Object(i.jsx)("p",{children:"Ocurri\xf3 un error..."})}function v(){return Object(i.jsx)("p",{children:"Estamos cargando..."})}function g(){return Object(i.jsx)("p",{children:"Cree tu primer todo!"})}function N(e){return r.a.createPortal(Object(i.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:e.reference,children:Object(i.jsx)("div",{className:"modal-dialog",children:Object(i.jsxs)("div",{className:"modal-content",children:[Object(i.jsxs)("div",{className:"modal-header",children:[Object(i.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:e.title?e.title:""}),Object(i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(i.jsx)("div",{className:"modal-body",children:e.children})]})})}),document.querySelector("#modal"))}var T=n(10);function S(){var e=function(e,t){var n=o.a.useState(t),c=Object(f.a)(n,2),a=c[0],r=c[1],s=o.a.useState(!0),l=Object(f.a)(s,2),i=l[0],d=l[1],u=o.a.useState(!1),j=Object(f.a)(u,2),m=j[0],b=j[1],h=o.a.useState(!0),O=Object(f.a)(h,2),x=O[0],p=O[1];return o.a.useEffect((function(){setTimeout((function(){try{var n,c=localStorage.getItem(e);c?n=JSON.parse(c):(localStorage.setItem(e,JSON.stringify(t)),n=t),r(n),d(!1),p(!0)}catch(m){b(!0)}}),1e3)}),[x]),{item:a,saveItem:function(t){localStorage.setItem(e,JSON.stringify(t)),r(t)},loading:i,error:m,sincronizeItem:function(){d(!0),p(!1)}}}("TODOS_V1",[]),t=e.item,n=e.saveItem,c=e.loading,a=e.error,r=e.sincronizeItem,s=o.a.useState(""),l=Object(f.a)(s,2),i=l[0],d=l[1],u=o.a.createRef(null),j=t.filter((function(e){return!!e.complete})).length,m=t.length,b=t.filter((function(e){return e.text.toLowerCase().includes(i.toLowerCase())}));return{loading:c,error:a,completedTodos:j,allTodos:m,searchValue:i,setSearchValue:d,searchedtodos:b,completeTodo:function(e){var c=t.findIndex((function(t){return t.id===e})),o=Object(T.a)(t);o[c].complete=!o[c].complete,n(o)},deleteTodo:function(e){var c=t.findIndex((function(t){return t.id===e})),o=Object(T.a)(t);o.splice(c,1),n(o)},addTodo:function(e){var c,o=Object(T.a)(t);c=o.length>0?o.reduce((function(e,t){return e.id>t.id?e.id:t.id})):1,o.push({id:c+1,complete:!1,text:e}),n(o)},modalRef:u,sincronizeTodo:r}}function y(e){var t=function(e){var t=o.a.useState(!1),n=Object(f.a)(t,2),c=n[0],a=n[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&a(!0)})),{show:c,toggleShow:function(){e(),a(!1)}}}(e.sincronize),n=t.show,c=t.toggleShow;return n?Object(i.jsx)("section",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12 col-md-6 offset-3",children:Object(i.jsxs)("div",{className:"alert alert-success",role:"alert",children:[Object(i.jsx)("p",{children:"Hubo Cambios"}),Object(i.jsx)("button",{className:"btn btn-success",onClick:function(){return c()},children:"Volver a cargar la informaci\xf3n"})]})})})}):null}var w=function(){var e=S(),t=e.error,n=e.loading,c=e.searchedtodos,a=e.completeTodo,r=e.deleteTodo,s=e.modalRef,l=e.completedTodos,d=e.allTodos,f=e.searchValue,O=e.setSearchValue,T=e.addTodo,w=e.sincronizeTodo;return Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsxs)(h,{loading:n,children:[Object(i.jsx)(u,{completedTodos:l,allTodos:d}),Object(i.jsx)(j,{searchValue:f,setSearchValue:O})]}),Object(i.jsx)(m,{error:t,loading:n,searchedtodos:c,allTodos:d,searchText:f,onError:function(){return Object(i.jsx)(p,{})},onLoading:function(){return Object(i.jsx)(v,{})},onEmpty:function(){return Object(i.jsx)(g,{})},onEmptyResult:function(e){return Object(i.jsxs)("p",{children:["No hay resultados para ",e]})},render:function(e){return Object(i.jsx)(b,{complete:e.complete,text:e.text,onComplete:function(){return a(e.id)},onDelete:function(){return r(e.id)}},e.id)}}),Object(i.jsx)(N,{reference:s,title:"Crear nuevo To-do",children:Object(i.jsx)(x,{addTodo:T,modalRef:s})}),Object(i.jsx)(y,{sincronize:w})]})};n(52),n(53);r.a.render(Object(i.jsx)(w,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.30dc2c2e.chunk.js.map