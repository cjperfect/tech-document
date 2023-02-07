---
title: 数组算法
date: 2023年2月7日13:36:08
categories:
  - 算法
tags:
  - 数组算法
---

<custom-header/>

## 将一个数组中的元素，从前到后依次两两组合，最后一个与第一个组合

```js
const array = [1, 2, 3, 4, 5, 6];

// 数组元素长度为奇数或者偶数，两种情况
const combinedNumbers = (arr) => {
  const newArray = [];

  if (arr.length % 2 !== 0) {
    return "数组长度不是偶数";
  }

  while (arr.length && arr.length % 2 === 0) {
    newArray.push(arr.shift() + "-" + arr.pop());
  }
  return newArray;
};

console.log(combinedNumbers(array));
// ['1-6', '2-5', '3-4']
```
