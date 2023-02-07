---
title: 什么渲染劫持
date: 2023年1月29日11:56:22
categories:
  - 前端
tags:
  - React
---

<custom-header/>

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
