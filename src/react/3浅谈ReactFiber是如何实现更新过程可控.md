---
title: 浅谈React Fiber如何实现更新过程可控
date: 2023年2月15日10:58:25
categories:
  - 前端
tags:
  - React
---

<custom-header/>

更新过程中可控的主要体现在以下几个方面：

1. 任务拆分
2. 任务的挂起、恢复、终止
3. 任务具备优先级

## 任务的拆分

在 React Fiber 中，它采用的是`化整为零`的战术，将 render 协调阶段递归遍历（深度优先遍历）VDOM 这个大任务拆分成若干个小任务，每个任务只负责一个节点的处理。

```jsx
import React from "react";
import ReactDom from "react-dom";
const jsx = (
  <div id="A1">
    A1     
    <div id="B1">
      B1       
      <div id="C1">C1</div>
      <div id="C2">C2</div>
    </div>
    <div id="B2">B2</div>
  </div>
);
ReactDom.render(jsx, document.getElementById("root"));
```

这个组件在渲染的时候会被分成八个小任务，每个任务用来分别处理 `A1(div)、A1(text)、B1(div)、B1(text)、C1(div)、C1(text)、C2(div)、C2(text)、B2(div)、B2(text)`。

再通过时间分片，在一个时间片中执行一个或者多个任务。这里提一下，所有的小任务并不是一次性被切分完成，而是处理当前任务的时候生成下一个任务，如果没有下一个任务生成了，就代表本次渲染的 Diff 操作完成。

> 时间分片指的是一种将多个粒度小的任务放入一个时间切片（一帧）中执行的一种方案，在 React Fiber 中就是将多个任务放在了一个时间片中去执行。

## 任务的挂起、恢复、终止

在探讨这个知识之前，回顾一下 React 更新过程中涉及到的两棵树，一个是当前的 fiber 树（`currentFiber tree`）和正在构建的新树（`workInProgress tree`）。

- **currentFiber tree**

  指的是上一次渲染构建的 fiber 树，在每次更新完成过后会把 `workInProgress tree` 赋值给`currentFiber tree`，两颗树上面的 fiber 节点是通过`alternate`属性进行联系的。

  在新的`workInProgress tree`的构建过程中，会和`currentFiber tree`对应的节点进行 diff 比较，收集副作用。如果 fiber 节点没有什么变化，那就直接复用和 `currentFiber tree` 对应的节点，减少创建对象带来的开销。也就是说**无论是创建还是更新、挂起、恢复以及终止操作都是发生在 workInProgress tree 创建过程中的**。
  `workInProgress tree` 构建过程其实就是循环的执行任务和创建下一个任务。

### 挂起

当第一个小任务完成后，先判断这一帧是否还有**空闲时间**，没有就挂起下一任务的执行，记住当前挂起的节点，把控制权交还给浏览器去执行更高优先级的任务。

### 恢复

在浏览器渲染一帧后，判断当前帧是否有**空闲时间**，如果有就恢复之前挂起的任务，如果没有任务需要执行，说明协调（reconciliation）阶段完成了，可以开始进入渲染阶段了。

- **如何知道这一帧是否有空闲时间**？

  采用浏览器原生 API，`requestIdleCallback`，React 源码中为了兼容低版本的浏览器，对该方法进行了 P
  olyfill。[MDN---requestIdleCallback](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback)

- **恢复执行的时候有如何知道下一个任务是什么**？

  在前面的文章说到过 fiber 是一个链表结构，每一个任务就是处理一个 FiberNode 对象，然后又生成下一个任务需要处理的 FiberNode 对象。

### 终止

其实并不是每次更新都会走到 commit 阶段，在协调阶段过程中出发了新的更新，在执行下一个任务的时候，会判断**是否存在优先级更好的执行任务**，如果有就要终止原来准备要执行的任务，开始新的 workInProgress tree 树的构建，开始新的更新流程，这样可以避免重复更新操作。

## 任务具备优先级

待续。。。

参考文章：

- [https://segmentfault.com/a/1190000039682751](https://segmentfault.com/a/1190000039682751)
