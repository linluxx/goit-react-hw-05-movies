"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{281:function(t,e,r){var n=r(861),c=r(757),a=r.n(c),s=r(44),o="7cc6d6f36e893764d456caf842646015";function u(){return(u=(0,n.Z)(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.ZP.get("".concat(e,"?api_key=").concat(o,"&").concat(r));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}s.ZP.defaults.baseURL="https://api.themoviedb.org/3/",e.Z=function(t,e){return u.apply(this,arguments)}},247:function(t,e,r){r.r(e);var n=r(885),c=r(281),a=r(791),s=r(689),o=r(184);e.default=function(){var t=(0,a.useState)([]),e=(0,n.Z)(t,2),r=e[0],u=e[1],i=(0,s.UO)().movieId;return(0,a.useEffect)((function(){(0,c.Z)("/movie/".concat(i,"/credits")).then((function(t){u(t.data.cast)}))}),[i]),(0,o.jsx)("ul",{children:r&&r.map((function(t){var e=t.profile_path,r=t.name,n=t.character,c=t.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e),alt:r}),(0,o.jsxs)("p",{children:["Name: ",r]}),(0,o.jsxs)("p",{children:["Character: ",n]})]},c)}))})}}}]);
//# sourceMappingURL=247.7a9471b2.chunk.js.map