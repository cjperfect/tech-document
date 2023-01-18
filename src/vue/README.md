---
title: 模拟vue响应式
date: 2023年1月12日21:05:05
categories:
  - 前端
tags:
  - Vue
---

<custom-header/>

> `Object.defineProperty`缺点是不能监听数组的操作, 因此不能更新视图
>
> 解决办法: 覆盖数组的方法, 添加更新视图的操作, 并且也执行数组相同的功能

```js
let data = {
  name: "chenjiang",
  age: 20,
  info: {
    hobby: "computer game",
  },
  score: [100, 80, 90],
};
let originPrototype = Array.prototype;
let newPrototype = Object.create(originPrototype);
["push", "pop", "shift", "unshift", "splice", "reverse"].forEach((methodName) => {
  newPrototype[methodName] = function () {
    console.log("更新视图");
    originPrototype[methodName].call(this, ...arguments);
  };
});
observer(data);
/**
 * 监听者, 监听对象, 若有改动, 就更新视图
 * @param {*} obj
 */
function observer(data) {
  // typeof null === 'object'
  if (typeof data !== "object" || data === null) {
    return data;
  }

  // 判断是否为数组
  if (Array.isArray(data)) {
    data.__proto__ = newPrototype;
  }

  // 依次给对象的属性, 做响应式处理
  for (let key in data) {
    defineReactive(data, key, data[key]);
  }
}

function defineReactive(obj, key, value) {
  // 如果对象的值也是对象, 应该再做响应式处理
  observer(value);
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(newValue) {
      // 如果将原有的基本类型, 设置为对象, 也应该响应式处理
      observer(newValue);
      if (newValue != value) {
        value = newValue;
        console.log("更新视图操作");
      }
    },
  });
}

// console.log(data.name);
// data.name = 'cmt';
// data.info.hobby = 'programmer'
// data.age = {
//     num: 20
// }
// data.age.num = 22;
```
