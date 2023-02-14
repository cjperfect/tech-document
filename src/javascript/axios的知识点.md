---
title: axios的知识点
date: 2023年2月7日10:45:52
categories:
  - 前端
tags:
  - JavaScript
  - ajax
  - axios
---

<custom-header/>

## axios 为什么能在浏览器中环境运行又能在 node 中环境运行？

源码中 defaults.js 文件里有 getDefaultAdapter 这个方法，用来判断环境。如果是浏览器就实例 new XMLHttpRequest()来发送请求响应服务，node 环境就引用 http 和 https 库处理和响应 http 服务。

## axios 相比原生 ajax 的优点有哪些呢？

- 从 node.js 创建 http 请求
- 在浏览器中创建 XMLHttpRequests
- 支持 Promise API
- 提供了一些并发请求的接口（重要，方便了很多的操作）
- 支持拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防止 CSRF
- 客户端支持防御 XSS
- 可以并发多个请求，如 axios.all()

## axios 拦截器原理是什么？

[原文地址](https://github.com/haizlin/fe-interview/issues/2420)

开发者用 use 注册的拦截器回调函数，包括成功回调和失败回调，会成对的推入 `chain` 数组，请求拦截器的回调在前，dispatchRequest 在中间，响应拦截器的回调在后，然后通过 promise 的链式调用，将 `chain` 中的回调`成对`注册为微任务异步队列中去，这样在执行异步队列时，就会先执行请求拦截器的回调，再执行 dispatchRequest 发起 xhr 请求，有了结果后再执行响应拦截器的回调。

```js
// 组成`Promise`链
// Hook up interceptors middleware
// 把 xhr 请求 的 dispatchRequest 和 undefined 放在一个数组里
var chain = [dispatchRequest, undefined];
// 创建 Promise 实例
var promise = Promise.resolve(config);

// 遍历用户设置的请求拦截器 放到数组的 chain 前面
this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
  chain.unshift(interceptor.fulfilled, interceptor.rejected);
});

// 遍历用户设置的响应拦截器 放到数组的 chain 后面
this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
  chain.push(interceptor.fulfilled, interceptor.rejected);
});

// 遍历 chain 数组，直到遍历 chain.length 为 0
while (chain.length) {
  // 两两对应移出来 放到 then 的两个参数里。
  promise = promise.then(chain.shift(), chain.shift());
}

return promise;
```
