"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1281:function(n,t,e){var r=e(5861),c=e(4687),o=e.n(c),i=e(1044),a="7cc6d6f36e893764d456caf842646015";function s(){return(s=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("".concat(t,"?api_key=").concat(a,"&").concat(e));case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}i.ZP.defaults.baseURL="https://api.themoviedb.org/3/",t.Z=function(n,t){return s.apply(this,arguments)}},7047:function(n,t,e){e.d(t,{Z:function(){return d}});var r,c,o,i,a=e(168),s=e(6088),u=e(6731),l=s.Z.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  justify-content: center;\n"]))),f=s.Z.li(c||(c=(0,a.Z)([""]))),p=(0,s.Z)(u.OL)(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  font-family: ",";\n  font-weight: 600;\n  color: ",";\n  transition: ",";\n\n  :hover {\n    scale: 1.05;\n    color: ",";\n  }\n"])),(function(n){return n.theme.font.main}),(function(n){return n.theme.color.secondText}),(function(n){return n.theme.transition}),(function(n){return n.theme.color.accent})),h=s.Z.img(i||(i=(0,a.Z)(["\n  display: block;\n  height: 300px;\n  width: 200px;\n  margin-bottom: 5px;\n"]))),m=e(184),d=function(n){var t=n.movies,e=n.location;return(0,m.jsx)(l,{children:t.map((function(n){var t=n.title,r=n.id,c=n.poster_path;return(0,m.jsx)(f,{children:(0,m.jsxs)(p,{to:"/movies/".concat(r),state:{from:e},children:[(0,m.jsx)(h,{src:"https://image.tmdb.org/t/p/w200".concat(c),alt:t}),t]})},r)}))})}},9544:function(n,t,e){e.r(t);var r=e(885),c=e(2791),o=e(7689),i=e(1281),a=e(7047),s=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],u=t[1],l=(0,o.TH)();return(0,c.useEffect)((function(){(0,i.Z)("trending/movie/week").then((function(n){u(n.data.results)}))}),[]),(0,s.jsx)("main",{children:(0,s.jsx)(a.Z,{movies:e,location:l})})}}}]);
//# sourceMappingURL=544.65e6d435.chunk.js.map