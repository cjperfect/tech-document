---
title: JS小知识点
date: 2023年2月8日20:53:59
categories:
  - 前端
tags:
  - 原生JS
---

<custom-header/>

## 解释下什么是暂时性死区？

如果用 ES6 新出的语法 let 和 const，这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。总之，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区。

例子：

```js
console.log(a); // ReferenceError
let a; // 声明前获取就会报错
```

## 请说说 new String("A")和 String("A")分别返回的结果

1. new String("A") :

- 返回类型：引用类型，堆内存存储
- 返回值：字符串对象

2. String("A”) ：

- 返回类型：基本类型，栈内存存储
- 返回值：字符串值

```js
new String("A"); // String {'A'}

String("A"); // "A"
```
