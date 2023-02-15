---
title: React中小知识点
date: 2023年2月7日11:38:46
categories:
  - 前端
tags:
  - React
---

<custom-header/>

## componentWillUpdate 可以直接修改 state 的值吗？

react 类组件在每次需要重新渲染时候都会调用 `componentWillUpdate()`

在这个函数中我们之所以不调用 this.setState()是因为该方法会触发另一个 componentWillUpdate(),如果我们 componentWillUpdate()中触发状态更改,我们将以无限循环结束.

## 在 React 中你有经常使用常量吗？

在写 react 应用的时候，在结合 redux 处理 react 应用层中的数据层的时候, 会单独写一个 actionType 文件，这个文件中定义的都是常量，这样写的好处是，单纯的引入字符串内容，容易出错且很难排查，中间做这个文件做一个过渡，就是这种引用常量的方式

## 为什么说 React 中的 props 是只读的？

react 官方文档中说道，组件无论是使用函数声明还是通过 class 声明，都绝不能修改自身的 props，props 作为组件对外通信的一个接口，为了保证组件像纯函数一样没有响应的副作用，所有的组件都必须像纯函数一样保护它们的 props 不被修改

## super()和 super(props)有什么区别？

react 中的 class 是基于 es6 的规范实现的, 继承是使用 extends 关键字实现继承的，子类必须在 constructor()中调用 super() 方法否则新建实例
就会报错。
报错的原因是：子类是没有自己的 this 对象的，它只能继承父类的 this 对象，然后对其进行加工，而 super()就是将父类中的 this 对象继承给子类的，没有 super() 子类就得不到 this 对象。

如果你使用了 constructor 就必须写 super() 这个是用来初始化 this 的，可以绑定事件到 this 上
如果你想要在 constructor 中使用 this.props,就必须给 super 添加参数 super(props)
注意，无论有没有 constructor，在 render 中的 this.props 都是可以使用的，这是 react 自动附带的
如果没有用到 constructor 是可以不写的，react 会默认添加一个空的 constroctor.

## 你有使用过 loadable 组件吗？它帮我们解决了什么问题？

react-loadable，用于代码分割，解决打包体积过大的问题；
react-loadable 的作用
由于路由只是组件，我们仍然可以在路由级别轻松地进行代码拆分。
在你的应用程序中引入新的代码分割点应该是如此简单，以至于你不会再三考虑。这应该是一个改变几行代码和其他一切都应该自动化的问题。
Loadable 是一个高阶组件(一个创建组件的函数)，它允许您在将任何模块呈现到应用程序之前动态加载它。

## 你有使用过 suspense 组件吗？它帮我们解决了什么问题？

动态加载(异步组件)加载时候会有延迟,在这延迟期间可以将一些内容展示给用户,比如 loading

## 怎样动态导入组件？

- 自己使用 import 和 async/await 实现的异步组件
- React.lazy
- 开源库 react-loadable 库/react-lazyload 库
- babel 动态导入（Dynamic Import）

## 使用 Hooks 要遵守哪些原则？

- 只在最顶层使用 Hook
  不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
- 只在 React 函数中调用 Hook
- 不要在普通的 JavaScript 函数中调用 Hook。你可以：
  - 在 React 的函数组件中调用 Hook
  - 在自定义 Hook 中调用其他 Hook

## 什么渲染劫持

渲染劫持的概念是控制组件从另一个组件输出的能力，当然这个概念一般和 react 中的高阶组件（HOC）放在一起解释比较有明了。

高阶组件可以在 render 函数中做非常多的操作，从而控制原组件的渲染输出，只要改变了原组件的渲染，我们都将它称之为一种渲染劫持。

实际上，在高阶组件中，组合渲染和条件渲染都是渲染劫持的一种，通过反向继承，不仅可以实现以上两点，还可以增强由原组件 render 函数产生的 React 元素。

实际的操作中 通过 操作 state、props 都可以实现渲染劫持

## 组合渲染

组合（composition）是一种通过将各组件联合在一起以创建更大组件的方式。组合是 React 的核心。

## 条件渲染

在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。

- if else
- &&
- 三元表达式
- switch
- 枚举对象的多重条件渲染
  ```js
  const ALERT_STATUS = {
    warning: <AlertComponent status="warning" />,
    error: <AlertComponent status="error" />,
    success: <AlertComponent status="success" />,
    info: <AlertComponent status="info" />,
  };
  ```
- HOC
