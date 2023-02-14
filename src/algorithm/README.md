---
title: 两数之和
date: 2023年2月14日14:47:12
categories:
  - 算法
tags:
  - 数组算法
---

<custom-header/>

### 题目描述

[leetcode](https://leetcode.cn/problems/two-sum/)

给定一个整数数组 nums  和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

### 题目示例

```js
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

```js
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

```js
输入：nums = [3,3], target = 6
输出：[0,1]
```

### 暴力解法

两层 for 循环，两两相加，找到之和等于 target 的两个数即可

```js
const nums = [2, 7, 11, 15],
  target = 9;

const twoSum = function (nums, target) {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));
```

**复杂度分析：**

- 时间复杂度：O(N^2)，其中 N 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次。

- 空间复杂度：O(1)。

### 优化解法（哈希表）

**思路：**

每次遍历，判断当前元素和目标值之差（另一个数）是否在哈希表中，

如果在直接返回当前元素和另一个数的索引位置

如果不在，就将当前元素的值作为 key，索引值作为 value，插入到哈希表中

**举个例子：**

`nums = [2, 7, 11, 15], target = 9;`

| key(元素值)         | 2   | 7   | 11  | 15  |
| ------------------- | --- | --- | --- | --- |
| value(元素索引位置) | 0   | 1   | 2   | 3   |

```js
const nums = [2, 7, 11, 15],
  target = 9;

const twoSum = function (nums, target) {
  const len = nums.length;
  const map = {};

  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    // 可能索引值为0，因此不能直接写map[target - cur]
    if (map[target - cur] !== undefined) {
      return [map[target - cur], i];
    }
    map[cur] = i;
  }
};

console.log(twoSum(nums, target));
```
