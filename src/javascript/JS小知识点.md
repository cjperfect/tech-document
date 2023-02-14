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

## let、const、var 的区别

1. **块级作用域**： 块作用域由 { }包括，let 和 const 具有块级作用域，var 不存在块级作用域。块级作用域解决了 ES5 中的两个问题：

- 内层变量可能覆盖外层变量
- 用来计数的循环变量泄露为全局变量

2. **变量提升**：var 存在变量提升，let 和 const 不存在变量提升，即在变量只能在声明之后使用，否在会报错。
3. **给全局添加属性**：浏览器的全局对象是 window，Node 的全局对象是 global。var 声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是 let 和 const 不会。
4. **重复声明**：var 声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const 和 let 不允许重复声明变量。
5. **暂时性死区**：在使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用 var 声明的变量不存在暂时性死区。
6. **初始值设置**：在变量声明时，var 和 let 可以不用设置初始值。而 const 声明变量必须设置初始值。
7. **指针指向**：let 和 const 都是 ES6 新增的用于创建变量的语法。 let 创建的变量是可以更改指针指向（可以重新赋值）。但 const 声明的变量是不允许改变指针的指向。

| **区别**           | **var** | **let** | **const** |
| ------------------ | ------- | ------- | --------- |
| 是否有块级作用域   | ×       | ✔️      | ✔️        |
| 是否存在变量提升   | ✔️      | ×       | ×         |
| 是否添加全局属性   | ✔️      | ×       | ×         |
| 能否重复声明变量   | ✔️      | ×       | ×         |
| 是否存在暂时性死区 | ×       | ✔️      | ✔️        |
| 是否必须设置初始值 | ×       | ×       | ✔️        |
| 能否改变指针指向   | ✔️      | ✔️      | ×         |

## object.assign 和扩展运算法是深拷贝还是浅拷贝

### 扩展运算符

```js
const obj = {
  info: { name: "chenjiang", age: 24 },
};

let newObj = { ...obj };

newObj.info.age = 25;

console.log(newObj);

/**
{
    "info": {
        "name": "chenjiang",
        "age": 25
    }
}
 */
```

### Object.assign()

```js
const obj = {
  info: { name: "chenjiang", age: 24 },
  [Symbol("lala")]: "lala",
};

let newObj = Object.assign({}, obj);

newObj.info.age = 25;

console.log(newObj);

/**
{
    "info": {
        "name": "chenjiang",
        "age": 25
    }
}
 */
```

### 结果

可以看出，两者都是浅拷贝。

- Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发 ES6 setter。

- 扩展操作符，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制 ES6 的 symbols 属性。另外扩展运算符语法更加简洁，并且比 `Object.assign()`提供了性能优势。

## Object.is 和===区别

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
