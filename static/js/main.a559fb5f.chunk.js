(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(e,t,a){},124:function(e,t,a){},144:function(e,t,a){},146:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),i=a.n(c),s=(a(123),a(124),a(15)),u=a.n(s),o=a(23),p=a(7),l=a(33),b=a.n(l),d=(a(144),a(1));var f=function(e){var t,a=e.itemData;return Object(d.jsxs)("div",{className:"single-card-container",children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(a.poster_path)}),Object(d.jsx)("p",{className:"card-name",children:a.title}),Object(d.jsx)("p",{className:"year",children:(t=a.first_air_date||a.release_date,t&&t.split("-")[0])})]})};var j=function(e){var t=e.data;return Object(d.jsx)("div",{className:"cards-container",children:t&&t.map((function(e){return Object(d.jsx)(f,{itemData:e})}))})},h=a(4),v=(a(146),a(221)),O=a(230),m=a(5),g=a(206),x=a(20),y=a(101),w=a.n(y),k=Object(m.a)("div")((function(e){var t=e.theme;return Object(h.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(g.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(g.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),_=Object(m.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),N=Object(m.a)(x.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(h.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var C=function(e){var t=e.items,a=void 0===t?[]:t,c=e.title,i=e.searchCallback,s=e.selectedItem,u=e.selectChange,o=r.a.useState(s),l=Object(p.a)(o,2),b=l[0],f=l[1];return Object(n.useEffect)((function(){f(s)}),[s]),Object(d.jsxs)("div",{className:"navbar-container",children:[Object(d.jsx)("h1",{className:"navbar-header",children:c}),Object(d.jsx)("div",{className:"navbar-item-container",children:Object(d.jsx)(v.a,{value:b,onChange:function(e,t){f(t),u(t)},children:a.map((function(e){return Object(d.jsx)(O.a,{label:e.label,value:e.id})}))})}),Object(d.jsx)("div",{className:"navbar-search-container",children:Object(d.jsxs)(k,{children:[Object(d.jsx)(_,{children:Object(d.jsx)(w.a,{})}),Object(d.jsx)(N,{placeholder:"Search\u2026",onChange:function(e){console.log(e.target.value),i(e.target.value)},inputProps:{"aria-label":"search"}})]})})]})},S=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=3a94078fb34b772a31d9a1348035bed7"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=3a94078fb34b772a31d9a1348035bed7"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=3a94078fb34b772a31d9a1348035bed7"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get("https://api.themoviedb.org/3/movie/popular?api_key=3a94078fb34b772a31d9a1348035bed7"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get("https://api.themoviedb.org/3/search/multi?api_key=3a94078fb34b772a31d9a1348035bed7&query=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get("https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&with_genres=".concat(t.genre,"&year=").concat(t.year)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get("https://api.themoviedb.org/3/discover/tv?api_key=3a94078fb34b772a31d9a1348035bed7&with_genres=".concat(t.genre,"&year=").concat(t.year)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=3a94078fb34b772a31d9a1348035bed7"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get("https://api.themoviedb.org/3/genre/tv/list?api_key=3a94078fb34b772a31d9a1348035bed7"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=a(46),M={type:[{id:"movie",name:"Movie"},{id:"tv",name:"TV"}]},V=(a(154),a(224)),B=a(231),H=a(220),J=a(223),W=function(e){var t=e.options,a=void 0===t?[]:t,r=e.label,c=e.changeHandler,i=e.currentValue,s=e.disabled,u=Object(n.useState)(i),o=Object(p.a)(u,2),l=o[0],b=o[1];Object(n.useEffect)((function(){b(i)}),[i]);return Object(d.jsxs)("div",{className:"select-container",children:[Object(d.jsx)(V.a,{className:"label",children:r}),Object(d.jsx)(B.a,{fullWidth:!0,children:Object(d.jsx)(H.a,{labelId:"simple-select-label",id:"simple-select",value:l,onChange:function(e){b(e.target.value),c(e)},disabled:s,children:a&&a.map((function(e){return Object(d.jsx)(J.a,{value:e.id,children:e.name})}))})})]})},Y=a(219),q=a(217),G=a(218),U=(a(155),a(226));var z=function(e){var t=e.getFilters,a=e.typeChange,r=e.genreOptions,c=Object(n.useState)(null),i=Object(p.a)(c,2),s=i[0],u=i[1],o=Object(n.useState)({genre:"",year:""}),l=Object(p.a)(o,2),b=l[0],f=l[1],j=Object(n.useState)(),h=Object(p.a)(j,2),v=h[0],O=h[1],m=Object(n.useState)(),g=Object(p.a)(m,2),x=g[0],y=g[1];return Object(n.useEffect)((function(){t(b,v)}),[b]),Object(d.jsxs)("div",{className:"sidebar-container",children:[Object(d.jsx)("h2",{children:"Discover Options"}),Object(d.jsx)(W,{changeHandler:function(e){O(e.target.value),a(e.target.value),y(void 0)},options:M.type,currentValue:v,label:"Type"}),Object(d.jsx)(W,{changeHandler:function(e){y(e.target.value),f((function(t){return Object(A.a)(Object(A.a)({},t),{},{genre:e.target.value})}))},options:r,currentValue:x,disabled:!v,label:"Genre"}),Object(d.jsxs)("div",{className:"year-container",children:[Object(d.jsx)(V.a,{className:"label",children:"Year"}),Object(d.jsx)(q.b,{dateAdapter:Y.a,children:Object(d.jsx)(G.a,{views:["year"],value:s,onChange:function(e){u(e),f((function(t){return Object(A.a)(Object(A.a)({},t),{},{year:new Date(e).getFullYear()})}))},renderInput:function(e){return Object(d.jsx)(U.a,Object(A.a)(Object(A.a)({},e),{},{helperText:null}))}})})]})]})};a(156);var K=function(e){var t={popular:D,top_rated:T,trending:S,newest:E,search:I,tvfilter:L,moviefilter:F},a=Object(n.useState)("popular"),r=Object(p.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)([]),l=Object(p.a)(s,2),b=l[0],f=l[1],h=Object(n.useState)(),v=Object(p.a)(h,2),O=v[0],m=v[1],g=function(){var e=Object(o.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t[c]();case 2:a=e.sent,n=a.data.results,f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){c&&g()}),[c]);var x=function(){var e=Object(o.a)(u.a.mark((function e(a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(null===a||void 0===a?void 0:a.length)?i(""):i("popular"),e.next=3,t.search(a);case 3:n=e.sent,r=n.data.results,f(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=Object(n.useMemo)((function(){return function(e,t){var a;return function(){var n=this,r=arguments;clearTimeout(a),a=setTimeout((function(){return e.apply(n,r)}),t)}}(x,300)}),[]),w=function(){var e=Object(o.a)(u.a.mark((function e(a,n){var r,c,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("tv"!==n){e.next=8;break}return e.next=3,t.tvfilter(a);case 3:r=e.sent,c=r.data.results,f(c),e.next=13;break;case 8:return e.next=10,t.moviefilter(a);case 10:i=e.sent,s=i.data.results,f(s);case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(u.a.mark((function e(t){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("tv"!==t){e.next=9;break}return e.next=3,R();case 3:a=e.sent,n=a.data.genres,console.log(b),m(n),e.next=14;break;case 9:return e.next=11,P();case 11:r=e.sent,c=r.data.genres,m(c);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"homepage-container",children:[Object(d.jsx)(C,{title:"Discover",items:[{id:"popular",label:"POPULAR"},{id:"trending",label:"TREND"},{id:"newest",label:"NEWEST"},{id:"top_rated",label:"TOP RATED"}],selectChange:function(e){i(e)},selectedItem:c,searchCallback:y}),Object(d.jsx)(j,{data:b}),Object(d.jsx)(z,{getFilters:w,genreOptions:O,typeChange:k})]})};var Q=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(K,{})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,235)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(Q,{})}),document.getElementById("root")),X()}},[[157,1,2]]]);
//# sourceMappingURL=main.a559fb5f.chunk.js.map