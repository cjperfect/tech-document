(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{262:function(t,a,e){},290:function(t,a,e){"use strict";e(262)},303:function(t,a,e){"use strict";e.r(a);var s=e(0),n={__name:"custom-header",setup(t){const a=Object(s.d)({tags:[],categories:[],date:"",author:"",title:""});return Object(s.c)(()=>{const{$page:t,$themeConfig:{author:e="陈江"}}=Object(s.b)().proxy,{frontmatter:{categories:n,tags:r,date:i,author:c,title:o}}=t;a.title=o,a.tags=r,a.categories=n,a.date=i,a.author=c||e}),{__sfc:!0,data:a}}},r=(e(290),e(8)),i=Object(r.a)(n,(function(){var t=this,a=t._self._c,e=t._self._setupProxy;return a("div",{staticClass:"custom-header"},[a("h1",{staticClass:"title"},[t._v(t._s(e.data.title))]),t._v(" "),a("div",{staticClass:"name"},[t._v("\n    作者:\n    "),a("span",[t._v(t._s(e.data.author))])]),t._v(" "),a("div",{staticClass:"categories"},[t._v("\n    分类:\n    "),t._l(e.data.categories,(function(e,s){return a("router-link",{key:s,attrs:{to:"/archive/?type=category&name="+e}},[t._v(t._s(e))])}))],2),t._v(" "),a("div",{staticClass:"tags"},[t._v("\n    标签:\n    "),t._l(e.data.tags,(function(e,s){return a("router-link",{key:s,attrs:{to:"/archive/?type=tag&name="+e}},[t._v(t._s(e))])}))],2),t._v(" "),a("div",{staticClass:"date"},[t._v("\n    创建时间:\n    "),a("span",[t._v(t._s(e.data.date))])])])}),[],!1,null,"46893521",null);a.default=i.exports}}]);