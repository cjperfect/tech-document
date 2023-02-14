(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{324:function(t,s,n){"use strict";n.r(s);var a=n(8),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("custom-header"),t._v(" "),s("h2",{attrs:{id:"axios-为什么能在浏览器中环境运行又能在-node-中环境运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios-为什么能在浏览器中环境运行又能在-node-中环境运行"}},[t._v("#")]),t._v(" axios 为什么能在浏览器中环境运行又能在 node 中环境运行？")]),t._v(" "),s("p",[t._v("源码中 defaults.js 文件里有 getDefaultAdapter 这个方法，用来判断环境。如果是浏览器就实例 new XMLHttpRequest()来发送请求响应服务，node 环境就引用 http 和 https 库处理和响应 http 服务。")]),t._v(" "),s("h2",{attrs:{id:"axios-相比原生-ajax-的优点有哪些呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios-相比原生-ajax-的优点有哪些呢"}},[t._v("#")]),t._v(" axios 相比原生 ajax 的优点有哪些呢？")]),t._v(" "),s("ul",[s("li",[t._v("从 node.js 创建 http 请求")]),t._v(" "),s("li",[t._v("在浏览器中创建 XMLHttpRequests")]),t._v(" "),s("li",[t._v("支持 Promise API")]),t._v(" "),s("li",[t._v("提供了一些并发请求的接口（重要，方便了很多的操作）")]),t._v(" "),s("li",[t._v("支持拦截请求和响应")]),t._v(" "),s("li",[t._v("转换请求和响应数据")]),t._v(" "),s("li",[t._v("取消请求")]),t._v(" "),s("li",[t._v("自动转换 JSON 数据")]),t._v(" "),s("li",[t._v("客户端支持防止 CSRF")]),t._v(" "),s("li",[t._v("客户端支持防御 XSS")]),t._v(" "),s("li",[t._v("可以并发多个请求，如 axios.all()")])]),t._v(" "),s("h2",{attrs:{id:"axios-拦截器原理是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios-拦截器原理是什么"}},[t._v("#")]),t._v(" axios 拦截器原理是什么？")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/haizlin/fe-interview/issues/2420",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("开发者用 use 注册的拦截器回调函数，包括成功回调和失败回调，会成对的推入 "),s("code",[t._v("chain")]),t._v(" 数组，请求拦截器的回调在前，dispatchRequest 在中间，响应拦截器的回调在后，然后通过 promise 的链式调用，将 "),s("code",[t._v("chain")]),t._v(" 中的回调"),s("code",[t._v("成对")]),t._v("注册为微任务异步队列中去，这样在执行异步队列时，就会先执行请求拦截器的回调，再执行 dispatchRequest 发起 xhr 请求，有了结果后再执行响应拦截器的回调。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组成`Promise`链")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hook up interceptors middleware")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 xhr 请求 的 dispatchRequest 和 undefined 放在一个数组里")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" chain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dispatchRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 Promise 实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" promise "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历用户设置的请求拦截器 放到数组的 chain 前面")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unshiftRequestInterceptors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("interceptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unshift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fulfilled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rejected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历用户设置的响应拦截器 放到数组的 chain 后面")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushResponseInterceptors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("interceptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fulfilled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rejected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历 chain 数组，直到遍历 chain.length 为 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 两两对应移出来 放到 then 的两个参数里。")]),t._v("\n  promise "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);