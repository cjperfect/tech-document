---
title: 通用算法
categories:
  - 算法
tags:
  - 通用算法
date: 2023年1月15日09:22:55
---

<custom-header/>

[[toc]]

## 反转字符串

```js
/* 
    反转字符串
*/

{
  const reverseString = (str) => {
    return str.split("").reverse().join("");
  };
  const str = "chenjiang";
  console.log(reverseString(str));
}

{
  const reverseString = (str) => {
    // 从后遍历，依次存放字符
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str.charAt(i);
    }
    return result;
  };

  const str = "abcdefg";
  console.log(reverseString(str));
}

{
  /* 
    使用递归方式，每调用一次存放一位
  */
  const reverseString = (strIn, position, strOut) => {
    if (position < 0) return strOut;
    strOut += strIn.charAt(position);
    position--;
    return reverseString(strIn, position, strOut);
  };

  const str = "qwerdf";
  const position = str.length;
  const result = "";
  console.log(reverseString(str, position, result));
}
```

## 取字符串中出现次数最多的字符

```js
/* 
    获取字符串中，出现次数最多的字符
*/

{
  /**
   * 使用对象的方式存储每一个字符串，key为字符， value为出现的次数
   * @param {*} str
   * @return {*}
   */
  const getStringMaxCount = (str) => {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str.charAt(i)]) {
        obj[str.charAt(i)]++;
      } else {
        obj[str.charAt(i)] = 1;
      }
    }
    let char = "";
    let maxCount = 0;
    for (let k in obj) {
      if (obj[k] > maxCount) {
        char = k;
        maxCount = obj[k];
      }
    }
    return `字符串中出现最多的字符：${char}，出现的次数：${maxCount}`;
  };
  const str = "chenjiangcmtcjcjcjcmtcmt";
  console.log(getStringMaxCount(str));
}

{
  /**
   * 通过排序字符串，每个字符出现的最后一次的位置 - 第一次出现的位置， 即可获得出现的次数
   *
   * @param {*} str
   */
  const getStringMaxCount = (str) => {
    str = str.split("").sort().join("");
    let maxCountChar = "",
      maxCount = 0;
    for (let startPos = 0; startPos < str.length; startPos++) {
      let char = str.charAt(startPos);
      let lastPos = str.lastIndexOf(char);
      let charCount = lastPos - startPos + 1;
      if (charCount > maxCount) {
        maxCount = charCount;
        maxCountChar = char;
      }
      startPos = lastPos;
    }

    return `字符串中出现最多的字符：${maxCountChar}，出现的次数：${maxCount}`;
  };
  const str = "chenjiangcmtcjcjcjmmmmmtmt";
  console.log(getStringMaxCount(str));
}
```

## 判断回文字符串

```js
/* 
    判断回文字符串
*/

{
  /**
   * 使用js自带的方法
   * @param {*} str
   * @return {*}
   */
  const isPalindromicStr = (str) => {
    return str === str.split("").reverse().join("");
  };
  const str = "abcba";
  //   console.log(isPalindromicStr(str));
}

{
  /**
   * 遍历
   * @param {*} str
   * @return {*}
   */
  const isPalindromicStr = (str) => {
    let tempStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      tempStr += str.charAt(i);
    }
    return str === tempStr;
  };
  const str = "abcba";
  //   console.log(isPalindromicStr(str));
}

{
  /**
   * 双指针
   * @param {*} str
   * @return {*}
   */
  const isPalindromicStr = (str) => {
    if (!str.length) return true;
    let head = 0,
      rear = str.length - 1;
    while (head < rear) {
      if (str.charAt(head) !== str.charAt(rear)) return false;
      head++;
      rear--;
    }
    return true;
  };
  const str = "abcddcbac";
  // console.log(isPalindromicStr(str));
}

{
  /**
   * 使用递归方式
   * @param {*} str
   * @return {*}
   */
  const isPalindromicStr = (str) => {
    if (str.length <= 1) return true;
    // 每次比较完了字符给去掉, 用slice裁切掉
    return str.charAt(0) === str.charAt(str.length - 1)
      ? isPalindromicStr(str.slice(1, str.length - 1))
      : false;
  };
  const str = "abcddcba";
  console.log(isPalindromicStr(str));
}
```

## 判断回文数

> [LeetCode 判断回文数](https://leetcode-cn.com/problems/palindrome-number/)

```js
/* 
    判断回文数, 你能不将整数转为字符串来解决这个问题吗？
    给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
    回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
*/
{
  /**
   * 遍历, 获取每一位数字并且拼成一个数, 然后对比先后数值是否相等
   * @param {*} num
   * @return {*}
   */
  const isPalindrome = (num) => {
    // 特殊情况：
    // 如上所述，当 x < 0 时，x 不是回文数。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性

    if (num < 0 || (num % 10 === 0 && num !== 0)) return false;
    let tempNum = num; // 存放截取一位数字后的值
    let result = 0; // 存在拼接的数6
    // console.log(tempNum, tempNum.length) //数字没有length属性
    while (tempNum) {
      result = result * 10 + (tempNum % 10);
      tempNum = ~~(tempNum / 10); // ~是按位取反运算，~~是取反两次。~~的作用是去掉小数部分
    }
    return result === num;
  };
  const num = 1234321;
  console.log(isPalindrome(num));
}
```

## 字符串去重

```javascript
/* 
    字符串去重
*/

{
  /**
   * 循环存放字符到结果字符串中, 如果字符不存在于结果字符串中才存放
   * @param {*} str
   * @returns
   */
  const strUnique = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (result.indexOf(char) === -1) {
        result += char;
      }
    }
    return result;
  };
  const str = "cjcjcjiang";
  //   console.log(strUnique(str));
}

{
  /**
   * 利用数组的filter过滤, 将每个字符索引和对应字符第一次出现的索引不同的过滤掉(说明重复出现了)
   * @param {*} str
   * @returns
   */
  const strUnique = (str) => {
    const result = Array.prototype.filter.call(str, (char, index) => {
      /**
       *  cjcjcjiang
       *  第一次遍历: c的indexOf = 0, index = 0
       *  第二次遍历: j的indexOf = 1, index = 1
       *  第三次遍历: c的indexOf = 0, index = 2; ==>两者不匹配, 那说明c第一次出现的位置是0, 再次出现的位置为2, 即为重复字符
       * */
      return str.indexOf(char) === index;
    });
    return result.join("");
  };
  const str = "cjcjcjiang";
  //   console.log(strUnique(str));
}

{
  /**
   * 利用ES6的Set
   *
   * @param {*} str
   */
  const strUnique = (str) => {
    /**
     * Set里面不存在重复元素, 可以将数组放在里面进行过滤掉重复元素
     */
    return [...new Set(str.split(""))].join("");
  };
  const str = "cjcjcjiang";
  console.log(strUnique(str));
}
```

## 两数之和

> [LeetCode 两数之和](https://leetcode-cn.com/problems/two-sum/)

```javascript
/* 
    两数之和
    给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
    你可以按任意顺序返回答案。

    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

    输入：nums = [3,2,4], target = 6
    输出：[1,2]

    输入：nums = [3,3], target = 6
    输出：[0,1]
*/

{
  /**
   * 两层for, 暴力解决
   * @param {*} nums
   * @param {*} target
   */
  var twoSum = function (nums, target) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  };
  const nums = [2, 7, 11, 15],
    target = 9;
  console.log(twoSum(nums, target));
}

{
  /**
   * 使用对象方式存储数值, key为nums的元素, value为元素的位置, 需要判断target - nums[i]是否存在于对象中
   * 如果有说明形成两数之和的另一个数出现了
   * nums = [2,7,11,15] ==> obj = {2: 0, 7: 1, 11: 2, 15: 3}
   * 遍历到{7: 1}时候, 如果存在 obj[target - 7]说明找到答案了
   * @param {*} nums
   * @param {*} target
   */
  var twoSum = function (nums, target) {
    let hash = {};
    const len = nums.length;
    for (let i = 0; i < len; i++) {
      hash[nums[i]] = i;
    }

    for (let i = 0; i < len; i++) {
      if (hash[target - nums[i]]) {
        return [i, hash[target - nums[i]]];
      }
    }
    return [];
  };
  const nums = [2, 7, 11, 15],
    target = 9;
  console.log(twoSum(nums, target));
}

{
  /**
   * 对上面的方法进行优化, 使用map而不使用对象(map性能要好一些), 两个for整合成一个
   * js中map和普通对象性能差距有多大？: https://www.cnblogs.com/geck/p/13610410.html
   * @param {*} nums
   * @param {*} target
   */
  var twoSum = function (nums, target) {
    let map = new Map();
    const len = nums.length;
    for (let i = 0; i < len; i++) {
      if (map.has(target - nums[i])) {
        // 有了第二个值, 才能找到第一个值, 只有到了7这一项, 才能与之对应找到2, 所以map.get(target - nums[i])找到的是2这一项,
        // 返回的[map.get(target - nums[i]), i], 而不是[i, map.get(target - nums[i])]
        return [map.get(target - nums[i]), i];
      }
      map.set(nums[i], i);
    }
    return [];
  };
  const nums = [2, 1, 11, 15],
    target = 9;
  console.log(twoSum(nums, target));
}
```

## 删除有序数组中的重复项

```javascript
/* 
    删除有序数组中的重复项
    
    给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
    不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

    输入：nums = [1,1,2]
    输出：2, nums = [1,2]

    输入：nums = [0,0,1,1,1,2,2,3,3,4]
    输出：5, nums = [0,1,2,3,4]
*/

{
  /**
   * 双指针, 从前往后移动, 遇到相同不能直接删除而是替换, 是因为从前往后, 如果删除, 那么原有的元素的索引发生了变化
   * [0, 0, 1] ==> [0, 1, 1]  第二项的0替换成后一项(前提不相同), 那么当前指针的位置就是整个不重复数组的最后一位, return i + 1;
   * @param {*} nums
   */
  var removeDuplicates = function (nums) {
    let slow = 0,
      fast = 1,
      len = nums.length;
    while (fast < len) {
      if (nums[slow] === nums[fast]) {
        fast++;
      } else {
        slow++;
        nums[slow] = nums[fast];
        fast++;
      }
    }
    return slow + 1;
  };
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  console.log(removeDuplicates(nums));
}
```

## 深度优先和广度优先

```javascript
/* 
    深度优先遍历和广度优先遍历
    相关知识: https://www.cnblogs.com/qzhc/p/10291430.html
*/

const map = {}; // 各个顶点之间的关系; 例如: {a:[e, f], e: [c, d]}, 每个顶点保存相连接的点

/**
 * 通过两点构建连线
 * @param {*} point1
 * @param {*} point2
 */
const addSide = (point1, point2) => {
  map[point1] = map[point1] || [];
  if (map[point1].indexOf(point2) === -1) {
    map[point1].push(point2);
  }

  map[point2] = map[point2] || [];
  if (map[point2].indexOf(point1) === -1) {
    map[point2].push(point1);
  }
};

addSide("a", "b");
addSide("a", "d");
addSide("a", "f");
addSide("b", "a");
addSide("b", "g");
addSide("d", "a");
addSide("d", "c");
addSide("f", "h");
addSide("g", "e");
addSide("g", "h");
addSide("c", "d");
addSide("c", "e");

/* 
{
  a: [ 'b', 'd', 'f' ],
  b: [ 'a', 'g' ],
  d: [ 'a', 'c' ],
  f: [ 'a', 'h' ],
  g: [ 'b', 'e', 'h' ],
  c: [ 'd', 'e' ],
  h: [ 'f', 'g' ],
  e: [ 'g', 'c' ]
}
*/
// console.log(map)

/**
 * 深度优先遍历
 * @param {*} startPoint
 */
const DFS = (startPoint) => {
  const visited = []; //已经访问过的顶点

  const search = (point) => {
    visited.push(point);
    for (let val of map[point]) {
      if (visited.indexOf(val) === -1) {
        search(val);
      }
    }
  };
  search(startPoint);
  return visited;
};

// console.log(DFS("a"));

/**
 * 广度优先遍历
 * @param {*} startPoint
 * @returns
 */
const BFS = (startPoint) => {
  const visited = [];
  const waitVisitPoint = [startPoint]; // 等待访问的顶点, 每次访问, 将相连的顶点存放进去
  // 访问完就出队; 例如: 访问a ==> [abdf] 访问完后出队 ==>[bdf]
  //                   访问b ==> [bdfg] 访问完后出队 ==>[dfg]
  //                   访问d ==> [dfgc] 访问完后出队 ==>[fgc]

  while (waitVisitPoint.length > 0) {
    const currentPoint = waitVisitPoint.shift();
    if (visited.indexOf(currentPoint) === -1) {
      visited.push(currentPoint);

      map[currentPoint].forEach((p) => {
        waitVisitPoint.push(p);
      });
    }
  }
  return visited;
};

console.log(BFS("a"));
```

## 旋转数组

```javascript
/* 
    旋转数组
    给定一个数组，将数组中的元素向右移动k个位置，其中k为非负数
    输入[1, 2, 3, 4, 5, 6, 7] 和 k = 3
    输出[5, 6, 7, 1, 2, 3, 4]

    输入[-1, -100, 3, 99] 和 k = 2
    输出[3, 99, -1, -100]
*/

const rotateArray = (arr, k) => {
  // 如果k大于数组的长度，取模即可
  k = k % arr.length;

  // 所有元素向右移动k个位置，换种思维，从k位置开始，后面的元素移动到前面
  arr.unshift(...arr.splice(arr.length - k, k));
  return arr;
};

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 4));

// 优化
const rotateArray1 = (arr, k) => {
  k = k % arr.length;
  // 如果k移动的位置大于数组的一半，理解成向左移动，这样移动次数少
  //（k = 6，常规思路：每个元素要向右移动6位），变向思路：每个向做移动length - k个位置
  if (k >= arr.length / 2) {
    arr.push(...arr.splice(0, arr.length - k));
  } else {
    arr.unshift(...arr.splice(arr.length - k, k));
  }
  return arr;
};
console.log(rotateArray1([1, 2, 3, 4, 5, 6, 7], 6));
```

## 随机生成一个长度为 10 的整数类型的数组，例如[2,10,3,4,5,11,10,11,20], 将其排列成一个新的数组，形式如下[[2,3,4,5],[10,11],[20]]

```javascript
// 区间段的数字放在一起，去重
/* 生成随机数组 */
let arr = Array.from({ length: 10 }, (_, index) =>
  parseInt(Math.random() * 100)
);

let map = {};
arr.forEach((val) => {
  let n = Math.floor(val / 10); // 分类标准 0-9为一类，10-19为一类...

  if (!map[n]) {
    // map[n] = [];
    map[n] = {}; // 用对象可以解决重复的问题
  }
  map[n][val] = "chenjiang";
});

console.log(map);

const result = [];
for (let key in map) {
  // 字典是无序，可能打印看起来是有序的
  const arr = [];
  for (let k in map[key]) {
    arr.push(k);
  }

  result.push(arr.sort());
}
console.log(result);
```

## 小根堆

```javascript
/* 小根堆 */
class MinHead {
  constructor() {
    this.heap = [];
  }

  /**
   * 交换heap两个元素
   * @param {*} index1
   * @param {*} index2
   */
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  /**
   * 获取父节点的索引
   * @param {*} index
   * @returns
   */
  getParentIndex(index) {
    // 固定公式
    return (index - 1) >> 1;
  }

  /**
   * 上移操作, 每次插入要保证堆的正确性
   * @param {*} index
   * @returns
   */
  shiftUp(index) {
    if (index === 0) return;
    // 跟父级比较, 如果小于父级, 应该替换, 坐到父级的位置
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      // 交换位置
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  /**
   * 插入元素
   * @param {*} value
   */
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1); // 上移操作, 构建小根堆
  }

  /**
   * 获取左侧节点的索引
   * @param {*} index
   */
  getLeftIndex(index) {
    return index * 2 + 1;
  }

  /**
   * 获取右侧节点的索引
   * @param {*} index
   */
  getRightIndex(index) {
    return index * 2 + 2;
  }

  /**
   * 下移操作
   * @param {*} index
   */
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (this.heap[index] > this.heap[leftIndex]) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (this.heap[index] > this.heap[rightIndex]) {
      this.swap(index, rightIndex);
      this.shiftDown(rightIndex);
    }
  }

  /**
   * 删除堆顶
   */
  pop() {
    // 不直接删除数组的第一个元素, 是因为会损坏堆结构
    // 而是用最后一个元素替换堆顶, 然后执行"下移"操作
    this.heap[0] = this.heap.pop();
    this.shiftDown(0); // 下移操作
  }

  /**
   * 获取堆顶
   * @returns
   */
  peek() {
    return this.heap[0];
  }

  /**
   * 获取堆的大小
   * @returns
   */
  size() {
    return this.heap.length;
  }
}

/**
 * 四个功能
 * 插入操作
 * 删除堆顶操作
 * 获取堆顶元素
 * 获取对的大小
 */

const h = new MinHead();

h.insert(3);
h.insert(2);
h.insert(1);

h.pop();
```

## 快速排序

```javascript
/* 
    快速排序    
    选择数组中的一个值作为基准，将数组中小于该值的数置于该数之前，大于该值的数置于该数之后，接着对该数前后的两个数组进行重复操作直至排序完成。
*/
const arr = [1, 5, 3, 7, 6, 8, 12, 0];

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  /* 找基准 */
  let middleIndex = Math.floor(arr.length / 2);
  let middleValue = arr.splice(middleIndex, 1)[0];

  let leftArr = [],
    rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] > middleValue ? rightArr.push(arr[i]) : leftArr.push(arr[i]);
  }

  return quickSort(leftArr).concat(middleValue, quickSort(rightArr));
}

console.log(quickSort(arr));
```

## [["a", "b"], ["n", "m"], ["0", "1"]] 转为 ["am0", "am1", "an0", "an1", "bm0", "bm1", "bn0", "bn1"]

```javascript
/* 
    [["a", "b"], ["n", "m"], ["0", "1"]] 转为 ["am0", "am1", "an0", "an1", "bm0", "bm1", "bn0", "bn1"]
*/

const matrix = [
  ["a", "b"],
  ["m", "n"],
  ["0", "1"],
];

/* 常规写法 */
{
  const fn = (arr) => {
    let result = arr[0];

    const generate = (temp) => {
      const a = [];
      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < temp.length; j++) {
          a.push(result[i] + temp[j]);
        }
      }
      return a;
    };

    for (let i = 1; i < arr.length; i++) {
      result = generate(arr[i]);
      if (i === arr.length - 1) {
        return result;
      }
    }
  };
  console.log(fn(matrix));
}
```
