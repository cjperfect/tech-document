---
title: setInterval 不准确的问题
date: 2023年2月7日14:20:58
categories:
  - 前端
tags:
  - JavaScript
---

<custom-header/>

在 js 中如果打算使用 setInterval 进行倒数，计时等功能有可能是是不准确的。

因为 setInterval 的回调函数并不是到时后立即执行，而是等系统计算资源空闲下来后才会执行。

而`下一次触发时间则是在 setInterval 回调函数执行完毕之后才开始计时`。

所以如果 setInterval 内执行的计算过于耗时,或者有其他耗时任务在执行,setInterval 的计时会越来越不准,延迟很厉害

**案例：**

```js
var startTime = +new Date(); // 程序运行的时间戳
var count = 0; // 用来统计定时器运行了多少次

setInterval(function () {
  var i = 0;
  while (i++ < 100000000);
}, 0);

setInterval(function () {
  count++;
  console.log(+new Date() - (startTime + count * 1000));
}, 1000);
```
