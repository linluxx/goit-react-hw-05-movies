"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{281:function(e,t,r){var n=r(861),s=r(757),c=r.n(s),i=r(44),a="7cc6d6f36e893764d456caf842646015";function o(){return(o=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.ZP.get("".concat(t,"?api_key=").concat(a,"&").concat(r));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}i.ZP.defaults.baseURL="https://api.themoviedb.org/3/",t.Z=function(e,t){return o.apply(this,arguments)}},884:function(e,t,r){r.r(t);var n=r(885),s=r(281),c=r(791),i=r(689),a=r(731),o=r(184);t.default=function(){var e,t,r=(0,c.useState)([]),l=(0,n.Z)(r,2),d=l[0],h=l[1],u=(0,i.UO)().movieId,p=(0,i.TH)();(0,c.useEffect)((function(){(0,s.Z)("movie/".concat(u)).then((function(e){return h(e.data)}))}),[u]);var f=d.poster_path,v=d.title,x=d.original_title,j=d.release_date,m=d.overview,w=d.genres,k=new Date(j).getFullYear();return(0,o.jsxs)("main",{children:[(0,o.jsx)(a.rU,{to:null!==(e=null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",children:"Return back"}),(0,o.jsxs)("section",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(f),alt:v}),(0,o.jsxs)("h1",{children:[x," (",k,")"]}),(0,o.jsx)("p",{children:"User score: 100%"}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:m}),(0,o.jsx)("h2",{children:"Genres"}),w?w.map((function(e){return(0,o.jsx)("p",{children:e.name},e.id)})):"Unknown"]}),(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Additional information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"cast",state:{from:p.state.from},children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"reviews",state:{from:p.state.from},children:"Reviews"})})]}),(0,o.jsx)(c.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(i.j3,{})})]})]})}}}]);
//# sourceMappingURL=884.bc3e9945.chunk.js.map