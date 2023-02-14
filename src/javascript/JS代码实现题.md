---
title: JS代码实现题
date: 2023年2月14日14:21:17
categories:
  - 前端
tags:
  - JavaScript
  - JS手写
---

<custom-header/>

## 写一个方法记录函数运行的时间

```js
function method(callBack) {
  console.time("所用时间");
  callBack();
  console.timeEnd("所用时间");
}

function aa() {
  let num = 0;
  for (let i = 0; i < 5000; i++) {
    num++;
  }
}

method(aa); // 所用时间: 0.10791015625 ms
```

## 通过代码来解释下 new 和 instanceof 的内部机制
