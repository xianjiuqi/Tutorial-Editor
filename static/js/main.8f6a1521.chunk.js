(this["webpackJsonptutorial-editor"]=this["webpackJsonptutorial-editor"]||[]).push([[0],{338:function(t,e,n){t.exports=n(592)},587:function(t,e,n){},589:function(t,e,n){},592:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(70),c=n.n(r),i=n(155),u=n(328);n(587);var s=function(){var t=Object(o.useState)({}),e=Object(i.a)(t,2),n=e[0],r=e[1],c=Object(o.useState)({}),s=Object(i.a)(c,2),l=s[0],f=s[1],d=Object(o.useState)({}),h=Object(i.a)(d,2),m=h[0],j=h[1];Object(o.useEffect)((function(){fetch("".concat("/Tutorial-Editor","/tutorial-schema.json")).then((function(t){return t.json()})).then((function(t){r(t)}))}),[]),Object(o.useEffect)((function(){fetch("".concat("/Tutorial-Editor","/ui-schema.json")).then((function(t){return t.json()})).then((function(t){f(t)}))}),[]);var p=function(t){var e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t)),n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download","form-data.json"),document.body.appendChild(n),n.click(),n.remove()};return a.a.createElement("div",{className:"App"},a.a.createElement("input",{type:"file",accept:".json",onChange:function(t){var e=t.target.files[0],n=new FileReader;n.onload=function(t){try{var e=JSON.parse(t.target.result);j(e)}catch(n){alert("error when trying to parse json = "+n)}},n.readAsText(e)}}),a.a.createElement(u.a,{schema:n,uiSchema:l,formData:m,onSubmit:function(t,e){var n=t.formData;p(n)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(588),n(589);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[338,1,2]]]);
//# sourceMappingURL=main.8f6a1521.chunk.js.map