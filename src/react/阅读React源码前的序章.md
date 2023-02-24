---
title: 阅读React源码前的序章
date: 2023年2月24日17:18:52
categories:
  - 前端
tags:
  - React
---

<custom-header/>

## 浏览器的一帧

浏览器中，页面都是一帧一帧的绘制出来的，渲染的帧率和设备的刷新率是一致的，以常用的显示器为例，它的刷新率是 60 次 / 秒，也就是说当每秒绘制的帧数(FPS) >= 60，页面渲染就是流畅的，一旦小于了就会出现卡顿的情况。
![在这里插入图片描述](https://img-blog.csdnimg.cn/bf686392709241199d7b0fafa7d9527f.png)
**为什么每一帧需要 16.6ms**

- 1s 绘制 60 帧，那么每一帧所要占用的时间就是 1000ms / 60 ≈ 16.6ms。

**分析每一帧浏览器具体做了哪些事情：**

1. 首先处理输入事件，能够让用户尽早的得到反馈。
2. 处理定时器，需要检查定时器是否到了指定的时间，如果到了就要执行对应的回调函数。
3. 开始每一帧，执行对应的事件。
4. 执行请求动画帧`requestAnimationFrame`，每次绘制之前，执行`requestAnimationFrame`的回调函数。
5. 进行页面的布局。
6. 进行绘制渲染外观。
7. 一帧的事情都干完了，接下来就是空闲时间了，这里执行`requestIdleCallback`的回调函数。

并不是每一帧都有空余时间的, 主要是要看到前面 16.6ms 是否做完了前面的事情，如果有并且提前做完了才有空闲时间。

## 浏览器的空闲时间是什么？

浏览器的一个原生 API，`requestIdleCallback`函数
[MDN 的一段介绍](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback)

说白了，就是捡浏览器的空闲时间来执行任务，但并不是每一帧都有空闲时间的，如果浏览器一直处于非常忙碌的状态，那么 requestIdleCallback 注册的任务永远都不会执行的。一般用来执行优先级比较低的任务。

### requestIdleCallback 的使用

```js
window.requestIdleCallback(callback, options);
```

**参数：**

callback()：回调函数也就是空闲时需要执行的任务，接收一个 IdleDeadline 对象作为入参。其中 IdleDeadline 对象包含：

- didTimeout，布尔值，表示任务是否超时，结合 timeRemaining 使用。
- timeRemaining()，表示当前帧剩余的时间，也可理解为留给任务的时间还有多少。

options：目前 options 只有一个参数

- timeout 。表示超过这个时间后，如果任务还没执行，则强制执行，不必等待空闲。

**使用案例**

任务队列中有四个任务，要在浏览器空闲时间时候执行。

```js
const taskQueue = [
  () => {
    console.log("task1");
  },
  () => {
    console.log("task2");
  },
  () => {
    console.log("task3");
  },
  () => {
    console.log("task4");
  },
];

const performUnitOfWork = (deadline) => {
  console.log(`这一帧还剩余多少时间${deadline.timeRemaining()}`);
  const currentTask = taskQueue.shift();
  currentTask();
};

const wookLoop = (deadline) => {
  // 这一帧还有剩余时间或者定义的时间到了, 就要执行任务了, 前提是有任务
  // 这一帧没有剩余时间了, 直接放弃任务控制权, 执行权交给浏览器
  while (
    (deadline.timeRemaining() > 0 || deadline.didTimeout()) &&
    taskQueue.length > 0
  ) {
    performUnitOfWork(deadline);
  }

  // 还有任务的话, 接着向浏览器申请下一个时间片
  if (taskQueue.length > 0) {
    requestIdleCallback(wookLoop, { timeout: 1000 });
  }
};

requestIdleCallback(wookLoop, { timeout: 1000 });
```

## 副作用是什么？

`副作用`是函数式编程中的概念，是指`在函数执行过程中对外部环境的影响`。如果一个函数同时满足以下两个条件，则这个函数称为`纯函数`。

1. 相同的输入始终获得相同的输出。
2. 不会修改程序的状态或者引起副作用

**纯函数**
相同的输入一直能够得到相同的输出，没有修改程序的状态。因此**是纯函数**

```js
function calc(x) {
  return x + 1;
}
```

**不是纯函数**
这里有一个随机数，导致相同的输入出现不同的输出结果。**不是纯函数**

```js
function calc(x) {
  return x + 1 + Math.random();
}
```

修改了函数外部的变量， 因此**也不是纯函数**

```js
function calc(x) {
  document.title = "chenjiang";
  return x + 1;
}
```

**注：除了修改函数外部变量之外，调用 DOM 的 API、I/O 操作、控制台打印信息等`函数调用过程中，外部可观察到变化`都属于副作用。**

## 时间切片（Time slice）

JS 是单线程，但我们在运行比较大的任务时候，很容易造成页面假死状态。

原理：就是将一个大任务，切割成许多小任务，分散到每一帧中执行，留足时间给`layout`和`paint`阶段，这样就可以保证流畅度。

做一个简单的案例：往页面中插入 10w 条 DOM 元素。

### 简单暴力做法

```js
<ul class="list"></ul>;

const listDom = document.querySelector(".list");

for (let i = 0; i < 100000; i++) {
  const li = document.createElement("li");
  li.innerHTML = Math.random();
  listDom.appendChild(li);
}
```

发现页面一直加载中，出现假死的情况

![在这里插入图片描述](https://img-blog.csdnimg.cn/2d097ab17d894b6193f8f04b19120e2f.png)

### 使用 documentFragment 文档碎片稍作优化

```js
<ul class="list"></ul>;

const listDom = document.querySelector(".list");

const documentFragment = document.createDocumentFragment();

for (let i = 0; i < 100000; i++) {
  const li = document.createElement("li");
  li.innerHTML = Math.random();
  documentFragment.appendChild(li);
}

listDom.appendChild(documentFragment);
```

比暴力解法稍微好点，但是还是有些卡顿。这一帧卡了 10s 多

![在这里插入图片描述](https://img-blog.csdnimg.cn/133e7c3309074c9a8f786636225711dc.png)

### 使用 requestAnimationFrame

```js
<ul class="list"></ul>;

const listDom = document.querySelector(".list");
// 总共10w条
const total = 100000;
// 每页20条数据，也就是每一帧需要渲染多少数据
const once = 20;
// 总共多少页
const page = total / once;
// 当前渲染到多少条了, 索引值
const index = 0;
/**
 *
 * @param {*} currentTotal 还剩下多少条
 * @param {*} currentIndex 当前渲染第几页
 */
const render = (currentTotal, currentIndex) => {
  if (currentTotal <= 0) return false;

  // 每页多少条
  const pageSize = Math.min(currentTotal, once);

  requestAnimationFrame(() => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < pageSize; i++) {
      const li = document.createElement("li");
      li.innerHTML = currentIndex + i;
      fragment.appendChild(li);
    }

    listDom.appendChild(fragment);

    // 下一帧渲染
    render(currentTotal - pageSize, currentIndex + pageSize);
  });
};

render(total, index);
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/12e2cdd46abf4ffc86e43fa9dbec62f9.png)
任务都分给每一帧渲染了，一帧只花费 16.7ms，看起来不卡顿。

参考文章：

- https://juejin.cn/post/6844903938894872589
