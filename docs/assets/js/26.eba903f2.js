(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{319:function(t,a,s){"use strict";s.r(a);var e=s(11),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("custom-header"),t._v(" "),a("h2",{attrs:{id:"componentwillupdate-可以直接修改-state-的值吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentwillupdate-可以直接修改-state-的值吗"}},[t._v("#")]),t._v(" componentWillUpdate 可以直接修改 state 的值吗？")]),t._v(" "),a("p",[t._v("react 类组件在每次需要重新渲染时候都会调用 "),a("code",[t._v("componentWillUpdate()")])]),t._v(" "),a("p",[t._v("在这个函数中我们之所以不调用 this.setState()是因为该方法会触发另一个 componentWillUpdate(),如果我们 componentWillUpdate()中触发状态更改,我们将以无限循环结束.")]),t._v(" "),a("h2",{attrs:{id:"在-react-中你有经常使用常量吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-react-中你有经常使用常量吗"}},[t._v("#")]),t._v(" 在 React 中你有经常使用常量吗？")]),t._v(" "),a("p",[t._v("在写 react 应用的时候，在结合 redux 处理 react 应用层中的数据层的时候, 会单独写一个 actionType 文件，这个文件中定义的都是常量，这样写的好处是，单纯的引入字符串内容，容易出错且很难排查，中间做这个文件做一个过渡，就是这种引用常量的方式")]),t._v(" "),a("h2",{attrs:{id:"为什么说-react-中的-props-是只读的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么说-react-中的-props-是只读的"}},[t._v("#")]),t._v(" 为什么说 React 中的 props 是只读的？")]),t._v(" "),a("p",[t._v("react 官方文档中说道，组件无论是使用函数声明还是通过 class 声明，都绝不能修改自身的 props，props 作为组件对外通信的一个接口，为了保证组件像纯函数一样没有响应的副作用，所有的组件都必须像纯函数一样保护它们的 props 不被修改")]),t._v(" "),a("h2",{attrs:{id:"super-和-super-props-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#super-和-super-props-有什么区别"}},[t._v("#")]),t._v(" super()和 super(props)有什么区别？")]),t._v(" "),a("p",[t._v("react 中的 class 是基于 es6 的规范实现的, 继承是使用 extends 关键字实现继承的，子类必须在 constructor()中调用 super() 方法否则新建实例\n就会报错。\n报错的原因是：子类是没有自己的 this 对象的，它只能继承父类的 this 对象，然后对其进行加工，而 super()就是将父类中的 this 对象继承给子类的，没有 super() 子类就得不到 this 对象。")]),t._v(" "),a("p",[t._v("如果你使用了 constructor 就必须写 super() 这个是用来初始化 this 的，可以绑定事件到 this 上\n如果你想要在 constructor 中使用 this.props,就必须给 super 添加参数 super(props)\n注意，无论有没有 constructor，在 render 中的 this.props 都是可以使用的，这是 react 自动附带的\n如果没有用到 constructor 是可以不写的，react 会默认添加一个空的 constroctor.")]),t._v(" "),a("h2",{attrs:{id:"你有使用过-loadable-组件吗-它帮我们解决了什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你有使用过-loadable-组件吗-它帮我们解决了什么问题"}},[t._v("#")]),t._v(" 你有使用过 loadable 组件吗？它帮我们解决了什么问题？")]),t._v(" "),a("p",[t._v("react-loadable，用于代码分割，解决打包体积过大的问题；\nreact-loadable 的作用\n由于路由只是组件，我们仍然可以在路由级别轻松地进行代码拆分。\n在你的应用程序中引入新的代码分割点应该是如此简单，以至于你不会再三考虑。这应该是一个改变几行代码和其他一切都应该自动化的问题。\nLoadable 是一个高阶组件(一个创建组件的函数)，它允许您在将任何模块呈现到应用程序之前动态加载它。")]),t._v(" "),a("h2",{attrs:{id:"你有使用过-suspense-组件吗-它帮我们解决了什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你有使用过-suspense-组件吗-它帮我们解决了什么问题"}},[t._v("#")]),t._v(" 你有使用过 suspense 组件吗？它帮我们解决了什么问题？")]),t._v(" "),a("p",[t._v("动态加载(异步组件)加载时候会有延迟,在这延迟期间可以将一些内容展示给用户,比如 loading")]),t._v(" "),a("h2",{attrs:{id:"怎样动态导入组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎样动态导入组件"}},[t._v("#")]),t._v(" 怎样动态导入组件？")]),t._v(" "),a("ul",[a("li",[t._v("自己使用 import 和 async/await 实现的异步组件")]),t._v(" "),a("li",[t._v("React.lazy")]),t._v(" "),a("li",[t._v("开源库 react-loadable 库/react-lazyload 库")]),t._v(" "),a("li",[t._v("babel 动态导入（Dynamic Import）")])]),t._v(" "),a("h2",{attrs:{id:"使用-hooks-要遵守哪些原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-hooks-要遵守哪些原则"}},[t._v("#")]),t._v(" 使用 Hooks 要遵守哪些原则？")]),t._v(" "),a("ul",[a("li",[t._v("只在最顶层使用 Hook\n不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。")]),t._v(" "),a("li",[t._v("只在 React 函数中调用 Hook")]),t._v(" "),a("li",[t._v("不要在普通的 JavaScript 函数中调用 Hook。你可以：\n"),a("ul",[a("li",[t._v("在 React 的函数组件中调用 Hook")]),t._v(" "),a("li",[t._v("在自定义 Hook 中调用其他 Hook")])])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);