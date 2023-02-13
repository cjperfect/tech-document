---
title: Object.is和===区别
date: 2023年2月1日17:18:40
categories:
  - 前端
tags:
  - JavaScript
---

<custom-header/>

## Object.is

[MDN 介绍](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

判断两个值是否为同一个值。

基本语法：

```js
Object.is(value1, value2);
```

::: details 语法

参数：

- value1 被比较的第一个值。

- value2 被比较的第二个值。

返回值：

- 一个布尔值，表示两个参数是否是同一个值。

:::

Object.is 满足一下条件则两个值相同：

- 都是 undefined
- 都是 null
- 都是 true 或都是 false
- 都是相同长度、相同字符、按相同顺序排列的字符串
- 都是相同对象（意味着都是同一个对象的值引用）
- 都是数字且
  - 都是 +0
  - 都是 -0
  - 都是 NaN
  - 都是同一个值，非零且都不是 NaN

`Object.is()` 与 == 不同。== 运算符在判断相等前对两边的变量（如果它们不是同一类型）进行强制转换（这种行为将 `"" == false` 判断为 true），而 Object.is 不会强制转换两边的值。

`Object.is()` 与 === 也不相同。**`差别是它们对待有符号的零和 NaN 不同`**，例如，=== 运算符（也包括 == 运算符）将数字 -0 和 +0 视为相等，而将 Number.NaN 与 NaN 视为不相等。

### Polyfill

```js
if (!Object.is) {
  Object.defineProperty(Object, "is", {
    value: function (x, y) {
      // SameValue algorithm
      if (x === y) {
        // return true if x and y are not 0, OR
        // if x and y are both 0 of the same sign.
        // This checks for cases 1 and 2 above.
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // return true if both x AND y evaluate to NaN.
        // The only possibility for a variable to not be strictly equal to itself
        // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
        // This checks for case 3.
        return x !== x && y !== y;
      }
    },
  });
}
```
