(this.webpackJsonpartpix3d=this.webpackJsonpartpix3d||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),s=a(3),c=a(8),m=a(7),i=a(10),u="SET_ORDER",_="SET_SEARCH_QUERY",d="SET_SORT_QUERY",p="Work in progress",g="Ready",b="Downloaded",h={order:[{id:1,photos:["img/photo_1.png","img/photo_2.png","img/photo_3.png"],number:1160,shape:"Rectangle",name:"John Ivanov",address:"45 Grand Central Terminal, New York",date:"4/18/2018",total:250,status:p,statusId:"progress"},{id:2,photos:["img/photo_1.png","img/photo_2.png","img/photo_3.png"],number:1160,shape:"Rectangle",name:"John Ivanov",address:"45 Grand Central Terminal, New York",date:"4/18/2018",total:250,status:p,statusId:"progress"},{id:3,photos:["img/photo_1.png","img/photo_2.png","img/photo_3.png"],number:1160,shape:"Rectangle",name:"John Ivanov",address:"45 Grand Central Terminal, New York",date:"4/18/2018",total:250,status:g,statusId:"ready"},{id:4,photos:["img/photo_1.png","img/photo_2.png","img/photo_3.png"],number:1160,shape:"Rectangle",name:"John Ivanov",address:"45 Grand Central Terminal, New York",date:"4/18/2018",total:250,status:g,statusId:"ready"},{id:5,photos:["img/photo_1.png","img/photo_2.png","img/photo_3.png"],number:1160,shape:"Rectangle",name:"John Ivanov",address:"45 Grand Central Terminal, New York",date:"4/18/2018",total:250,status:p,statusId:"progress"},{id:6,photos:["img/photo_1.png","img/photo_2.png","img/photo_3.png"],number:1160,shape:"Rectangle",name:"John Ivanov",address:"45 Grand Central Terminal, New York",date:"4/18/2018",total:250,status:p,statusId:"progress"},{id:7,photos:["img/photo_1.png","img/photo_2.png","img/photo_3.png"],number:1160,shape:"Rectangle",name:"John Ivanov",address:"45 Grand Central Terminal, New York",date:"4/18/2018",total:250,status:b,statusId:"downloaded"},{id:8,photos:["img/photo_1.png","img/photo_2.png","img/photo_3.png"],number:1160,shape:"Rectangle",name:"John Ivanov",address:"45 Grand Central Terminal, New York",date:"4/18/2018",total:250,status:b,statusId:"downloaded"},{id:9,photos:["img/photo_1.png","img/photo_2.png","img/photo_3.png"],number:1160,shape:"Rectangle",name:"John Ivanov",address:"45 Grand Central Terminal, New York",date:"4/18/2018",total:250,status:b,statusId:"downloaded"}]},E={query:""},N={query:"all"},v=Object(i.b)({orderReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{order:t.order};default:return e}},searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{query:t.query};default:return e}},sortReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{query:t.query};default:return e}}}),y=Object(i.c)(v),f=function(e){var t=e.children;return r.a.createElement("main",{className:"main"},t,r.a.createElement("footer",null,r.a.createElement("p",{className:"footer"},"Copyright \xa9 2018 ArtPix3D. All rights reserved.")))},k=function(){return r.a.createElement(f,null,r.a.createElement("h1",null,"Home Page"))},w=function(){return r.a.createElement(f,null,r.a.createElement("img",{src:"img/maintenance.png",alt:"maintenance"}))},C=(a(32),{setSearchQuery:function(e){return{type:_,query:e}}}),R=Object(m.b)((function(e){return{query:e.searchReducer.query}}),C)((function(e){var t=e.query,a=e.setSearchQuery;return r.a.createElement("header",{className:"header"},r.a.createElement(s.b,{to:"/",className:"header__logo-link"},r.a.createElement("img",{className:"header__logo",src:"img/logo.png",alt:"logo"})),r.a.createElement("div",{className:"header__actions"},r.a.createElement("input",{className:"header__search",type:"text",placeholder:"Type in to Search...",value:t,onChange:function(e){return function(e){a(e.target.value)}(e)}}),r.a.createElement("div",{className:"header__button-wrapper"},r.a.createElement("button",{className:"header__news",type:"button"},r.a.createElement("img",{src:"img/notification.png",alt:"notification"})),r.a.createElement("span",{className:"header__news-number"},6))))})),I=function(){return r.a.createElement("aside",{className:"menu"},r.a.createElement("div",{className:"user"},r.a.createElement("img",{src:"img/avatar.png",alt:"avatar"}),r.a.createElement("div",{className:"user__info"},r.a.createElement("h3",{className:"user__name"},"John Ivanov"),r.a.createElement("button",{type:"button",className:"user__button"},r.a.createElement("img",{src:"img/settings.png",alt:"settings"})),r.a.createElement("p",{className:"user__position"},"photographer"))),r.a.createElement("nav",{className:"navigation"},r.a.createElement(s.c,{className:"navigation__link",activeClassName:"navigation__link--active",to:"/place_order"},"Place order"),r.a.createElement(s.c,{className:"navigation__link",activeClassName:"navigation__link--active",to:"/order"},"Orders"),r.a.createElement(s.c,{className:"navigation__link",activeClassName:"navigation__link--active",to:"/demo"},"Product demo"),r.a.createElement(s.c,{className:"navigation__link",activeClassName:"navigation__link--active",to:"/packages"},"Packages")))},q=a(22),S={setSortQuery:function(e){return{type:d,query:e}}},T=Object(m.b)((function(e){return{query:e.sortReducer.query}}),S)((function(e){var t=e.setSortQuery,a=e.query,o=function(e){t(e.currentTarget.name)},l=Object(n.useState)(20),s=Object(q.a)(l,2),c=s[0],m=s[1];return r.a.createElement("div",{className:"order__actions"},r.a.createElement("div",{className:"order__sort-bar"},r.a.createElement("button",{type:"button",name:"all",className:"all"===a?"order__sort-button order__sort-button--all active-sort":"order__sort-button order__sort-button--all",onClick:function(e){return o(e)}},"All"),r.a.createElement("button",{type:"button",name:"progress",className:"progress"===a?"order__sort-button order__sort-button--work active-sort":"order__sort-button order__sort-button--work",onClick:function(e){return o(e)}},"Work in progress"),r.a.createElement("button",{type:"button",name:"ready",className:"ready"===a?"order__sort-button order__sort-button--ready active-sort":"order__sort-button order__sort-button--ready",onClick:function(e){return o(e)}},"Ready"),r.a.createElement("button",{type:"button",name:"downloaded",className:"downloaded"===a?"order__sort-button order__sort-button--downloaded active-sort":"order__sort-button order__sort-button--downloaded",onClick:function(e){return o(e)}},"Downloaded")),r.a.createElement("div",{className:"order__show"},r.a.createElement("p",{className:"order__show-title"},"Show"),r.a.createElement("div",{className:"input-number"},r.a.createElement("span",{className:"input-number__text"},c),r.a.createElement("div",{className:"input-number__controls"},r.a.createElement("button",{type:"button",className:"input-number__button",onClick:function(){c<=50&&m((function(e){return e+1}))}},r.a.createElement("img",{src:"img/up.png",alt:"up"})),r.a.createElement("button",{type:"button",className:"input-number__button",onClick:function(){c>0&&m((function(e){return e-1}))}},r.a.createElement("img",{src:"img/down.png",alt:"down"}))))))})),x=function(){return r.a.createElement("ul",{className:"table table-header"},r.a.createElement("li",{className:"table__item table__item-photo"}),r.a.createElement("li",{className:"table__item table__item-number"},"Product Name",r.a.createElement("button",{className:"order__header-button",type:"button"},r.a.createElement("img",{src:"img/sort.png",alt:"sort"}))),r.a.createElement("li",{className:"table__item table__item-shape"},"Shape"),r.a.createElement("li",{className:"table__item table__item-name"},"UnitPrice"),r.a.createElement("li",{className:"table__item table__item-date"},"Date"),r.a.createElement("li",{className:"table__item table__item-total"},"Subtotal"),r.a.createElement("li",{className:"table__item table__item-comments"},"Comment"),r.a.createElement("li",{className:"table__item table__item-status"},"Status"))},J=Object(m.b)((function(e){return{order:e.orderReducer.order,searchQuery:e.searchReducer.query,sortQuery:e.sortReducer.query}}))((function(e){var t=e.order,a=e.searchQuery,o=e.sortQuery,l=Object(n.useMemo)((function(){var e=a.toLowerCase(),n="all"===o?"":o;return t.filter((function(t){return t.statusId.includes(n)&&(t.name.includes(e)||t.status.toLowerCase().includes(e)||t.address.toLowerCase().includes(e)||String(t.number).includes(a)||t.name.toLowerCase().includes(e)||t.shape.toLowerCase().includes(e))}))}),[t,a,o]);return r.a.createElement("div",{className:"order__table"},l.map((function(e){return r.a.createElement("ul",{className:"table",key:e.id},r.a.createElement("li",{className:"table__item table__item-photo"},r.a.createElement("label",{className:"table__label",htmlFor:"".concat(e.id)},r.a.createElement("input",{id:"".concat(e.id),type:"checkbox",className:"table__checkbox"}),r.a.createElement("span",{className:"table__checkmark"})),r.a.createElement("div",{className:"table__photos"},e.photos.map((function(e){return r.a.createElement("img",{src:e,alt:"order",className:"photo",key:e})}))),r.a.createElement("p",{className:"table__paragraph"},"x",e.photos.length)),r.a.createElement("li",{className:"table__item table__item-number"},r.a.createElement(s.b,{to:"/product",className:"table__number-link"},"Order#".concat(e.number))),r.a.createElement("li",{className:"table__item table__item-shape"},e.shape),r.a.createElement("li",{className:"table__item table__item-name"},r.a.createElement("p",{className:"table__paragraph"},e.name),r.a.createElement("p",{className:"table__paragraph address"},e.address)),r.a.createElement("li",{className:"table__item table__item-date"},e.date),r.a.createElement("li",{className:"table__item table__item-total"},"".concat(e.total,"$")),r.a.createElement("li",{className:"table__item table__item-comments"},r.a.createElement(s.b,{to:"/comments"},r.a.createElement("img",{src:"img/chat.png",alt:"comment"}))),r.a.createElement("li",{className:"table__item table__item-status ".concat(e.statusId)},e.status),r.a.createElement("li",{className:"table__item table__item-edit"},r.a.createElement(s.b,{to:"/edit"},r.a.createElement("img",{src:"img/edit.png",alt:"edit"}))))})))})),O=function(){return r.a.createElement(f,null,r.a.createElement(T,null),r.a.createElement(x,null),r.a.createElement(J,null))},Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement(I,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:k}),r.a.createElement(c.a,{path:"/order",exact:!0,component:O}),r.a.createElement(c.a,{path:"*",exact:!0,component:w}))))};l.a.render(r.a.createElement(m.a,{store:y},r.a.createElement(s.a,null,r.a.createElement(c.a,{component:Y}))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4d5b3c26.chunk.js.map