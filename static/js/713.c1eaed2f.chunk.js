"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[713],{713:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(791),u=t(861),a=t(439),s=t(757),c=t.n(s),i=t(87),o={form:"FormSearchMovies_form__c9s3q"},l=t(184),f=function(e){var r=e.onSubmit,t=(0,n.useState)(""),u=(0,a.Z)(t,2),s=u[0],c=u[1],i=(0,n.useRef)(null);(0,n.useEffect)((function(){i.current.focus()}),[]);var f=(0,n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,r){return e+((r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_")}),"")}()}),[]);return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(s)},className:o.form,children:[(0,l.jsxs)("div",{className:o.fieldGroup,children:[(0,l.jsx)("label",{htmlFor:f}),(0,l.jsx)("input",{id:f,ref:i,value:s,onChange:function(e){var r=e.target;c(r.value)},required:!0,type:"text",name:"search",placeholder:"Enter search phrase"})]}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})},h=t(689),m=function(e){var r=e.items,t=(0,h.TH)(),n=r.map((function(e){var r=e.id,n=e.title;return(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/".concat(r),state:{from:t},children:n})},r)}));return(0,l.jsx)("ul",{children:n})},p=t(680),d=t(224),v=function(){var e=(0,n.useState)([]),r=(0,a.Z)(e,2),t=r[0],s=r[1],o=(0,n.useState)(!1),h=(0,a.Z)(o,2),v=h[0],x=h[1],j=(0,n.useState)(null),g=(0,a.Z)(j,2),S=g[0],b=g[1],k=(0,i.lr)(),_=(0,a.Z)(k,2),w=_[0],Z=_[1],y=w.get("search");(0,n.useEffect)((function(){var e=function(){var e=(0,u.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,d.jc)(y);case 4:r=e.sent,t=r.results,s(null!==t&&void 0!==t&&t.length?t:[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b(e.t0.message);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();y&&e()}),[y]);var C=Boolean(t.length);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{onSubmit:function(e){Z({search:e}),s([])}}),S&&(0,l.jsx)("p",{className:p.Z.error,children:S}),v&&(0,l.jsx)("p",{children:"...Loading"}),C&&(0,l.jsx)(m,{items:t})]})},x=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(v,{})})}}}]);
//# sourceMappingURL=713.c1eaed2f.chunk.js.map