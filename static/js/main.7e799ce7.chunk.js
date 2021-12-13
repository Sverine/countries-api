(this["webpackJsonpcountries-api"]=this["webpackJsonpcountries-api"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(21),s=c.n(a),r=c(7),o=c(2),u=c(0),l=function(){return Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("img",{src:"./img/logo192.png",alt:"logo"}),Object(u.jsx)("h3",{children:"React World"})]})},j=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"navigation",children:[Object(u.jsx)(r.b,{className:function(e){return e.isActive?"nav-active":""},to:"/",children:"Accueil"}),Object(u.jsx)(r.b,{className:function(e){return e.isActive?"nav-active":""},to:"/news",children:"News"}),Object(u.jsx)(r.b,{className:function(e){return e.isActive?"nav-active":""},to:"/a-propos",children:"A propos"})]})})},d=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{}),Object(u.jsx)(l,{}),Object(u.jsx)("h1",{className:"about",children:"A propos"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas minus impedit iste fugit pariatur consequuntur quisquam, possimus explicabo consectetur quas aut debitis dignissimos veniam nobis facere suscipit non earum porro? Quisquam distinctio quas voluptatem, debitis eligendi aliquid blanditiis iste maiores mollitia ex iure id laboriosam commodi facere tempora! Necessitatibus possimus nesciunt quasi, eligendi dicta omnis? Nesciunt impedit porro fugit."})]})},b=c(3),O=c(6),h=c.n(O),x=function(e){var t,c=e.country;return Object(u.jsxs)("li",{className:"card",children:[Object(u.jsx)("img",{src:c.flags.svg,alt:"flag"}),Object(u.jsx)("div",{className:"data-container",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:c.name.common}),Object(u.jsx)("li",{children:c.capital}),Object(u.jsxs)("li",{children:["Pop. ",(t=c.population,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))]})]})})]})},m=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(40),s=Object(b.a)(a,2),r=s[0],o=s[1],l=Object(n.useState)(""),j=Object(b.a)(l,2),d=j[0],O=j[1];return Object(n.useEffect)((function(){h.a.get("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region").then((function(e){i(e.data)}))}),[]),Object(u.jsxs)("div",{className:"countries",children:[Object(u.jsxs)("div",{className:"sort-container",children:[Object(u.jsx)("input",{type:"range",min:"1",max:"250",value:r,onChange:function(e){return o(e.target.value)}}),Object(u.jsx)("ul",{children:["Africa","America","Asia","Europe","Oceania"].map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"radio",value:e,id:e,checked:e===d,onChange:function(e){return O(e.target.value)}}),Object(u.jsx)("label",{htmlFor:e,children:e})]},e)}))})]}),Object(u.jsx)("div",{className:"cancel",children:d&&Object(u.jsx)("h5",{onClick:function(){return O("")},children:"Annuler la recherche"})}),Object(u.jsx)("ul",{className:"countries-list",children:c.filter((function(e){return e.region.includes(d)})).sort((function(e,t){return t.population-e.population})).filter((function(e,t){return t<r})).map((function(e){return Object(u.jsx)(x,{country:e},e.name.common)}))})]})},p=function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(j,{}),Object(u.jsx)(l,{}),Object(u.jsx)(m,{})]})},f=c(12),v=function(e){var t=e.id;return Object(u.jsx)("button",{onClick:function(){window.confirm("Voulez-vous supprimer cet article ?")&&(h.a.delete("http://localhost:3003/articles/".concat(t)),window.location.reload())},children:"Supprimer"})},g=function(e){var t,c=e.article,n=Object(f.useState)(!1),i=Object(b.a)(n,2),a=i[0],s=i[1],r=Object(f.useState)(""),o=Object(b.a)(r,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{className:"article",style:{background:a?"#f3feff":"white"},children:[Object(u.jsxs)("div",{className:"card-header",children:[Object(u.jsx)("h3",{children:c.author}),Object(u.jsxs)("em",{children:["Post\xe9 le ",(t=c.date,new Date(t).toLocaleDateString("fr-FR",{month:"long",year:"numeric",day:"numeric"}))]})]}),a?Object(u.jsx)("textarea",{autoFocus:!0,defaultValue:l||c.content,onChange:function(e){return j(e.target.value)}}):Object(u.jsx)("p",{children:l||c.content}),Object(u.jsxs)("div",{className:"btn-container",children:[a?Object(u.jsx)("button",{onClick:function(){var e={author:c.author,content:l||c.content,date:c.date};h.a.put("http://localhost:3003/articles/".concat(c.id),e).then((function(){s(!1)}))},children:"Valider"}):Object(u.jsx)("button",{onClick:function(){return s(!0)},children:"Edit"}),Object(u.jsx)(v,{id:c.id})]})]})},N=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),s=Object(b.a)(a,2),r=s[0],o=s[1],d=Object(n.useState)(""),O=Object(b.a)(d,2),x=O[0],m=O[1],p=Object(n.useState)(!1),f=Object(b.a)(p,2),v=f[0],N=f[1];Object(n.useEffect)((function(){w()}),[]);var w=function(){h.a.get("http://localhost:3003/articles").then((function(e){return i(e.data)}))};return Object(u.jsxs)("div",{className:"news-container",children:[Object(u.jsx)(j,{}),Object(u.jsx)(l,{}),Object(u.jsx)("h1",{children:"News"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.length<140?N(!0):h.a.post("http://localhost:3003/articles",{author:r,content:x,date:Date.now()}).then((function(){N(!1),o(""),m(""),w()}))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Nom",onChange:function(e){return o(e.target.value)},value:r}),Object(u.jsx)("textarea",{placeholder:"Message",onChange:function(e){return m(e.target.value)},value:x,style:{border:v?"1px solid red":"1px solid #61dafb"}}),v&&Object(u.jsx)("p",{children:"Veuillez \xe9crire un minimum de 140 caract\xe8res"}),Object(u.jsx)("input",{type:"submit",value:"Envoyer"})]}),Object(u.jsx)("ul",{children:c.sort((function(e,t){return t.date-e.date})).map((function(e){return Object(u.jsx)(g,{article:e},e.id)}))})]})},w=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"404",children:"Erreur 404"})})},S=function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",element:Object(u.jsx)(p,{})}),Object(u.jsx)(o.a,{path:"/a-propos",element:Object(u.jsx)(d,{})}),Object(u.jsx)(o.a,{path:"/news",element:Object(u.jsx)(N,{})}),Object(u.jsx)(o.a,{path:"*",element:Object(u.jsx)(w,{})})]})})};c(45);s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.7e799ce7.chunk.js.map