---
title: 浅谈Fiber架构下React是如何更新的
date: 2023年2月15日10:58:25
categories:
  - 前端
tags:
  - React
---

<custom-header/>

简单概括就是两个阶段：

1. render(reconciliation)协调阶段，可中断/异步，主要是新 fiber 树的构建。

2. commit 提交阶段，不可中断/同步，主要是更新最终效果。

## render(reconciliation)协调阶段

这个阶段其实就是在内存中构建一颗新的 fiber 树（即 `workInProgress tree`），构建过程是根据现有的 fiber 树（即 `currentFiber tree`），从 root 开始深度优先遍历在回溯到 root 的过程，这个过程中每个 fiber 阶段会经历两个阶段：`beginWork 阶段`和 `completeWork 阶段`。

- beginWork 阶段：
  组件的状态的计算、diff 的操作以及 render 函数的执行

- completeWork 阶段：
  effect 链表的收集，被跳过的优先级的收集。

在构建`workInProgress tree` 过程中会有一个 `workInProgress 的指针`记录当前构建到哪个 fiber 节点了，这也是 React 更新任务可恢复的重要原因之一。

**render 协调阶段的简要过程：**

![wipgif](./images/wipgif.gif)

## commit 提交阶段

在 render 阶段结束后，就会进入 commit 阶段，主要是依据`workInProgress tree`有变化的节点（即 render 阶段的 completeWork 过程中收集的 effect 链表），去更新 DOM 节点，将更新应用到界面中。除此之外还会异步调用`useEffect`和同步执行`useLayoutEffect`。

:::tip 总结
这两个阶段都是独立的 React 任务，最后会进入 Scheduler 被调度。

render 阶段采用的调度优先级是根据本次更新的优先级来决定的，以便于高优先级进入的时候可以打断低优先级的任务工作；

commit 阶段的调度优先级采用的是最高优先级，以保证 commit 阶段`同步执行`不会被打断。
:::

参考文章：

- [https://juejin.cn/post/6917073781412331533](https://juejin.cn/post/6917073781412331533)
