---
title: 字符串算法
categories:
  - 算法
tags:
  - 字符串算法
date: 2023年1月15日09:22:55
---

<custom-header/>

[[toc]]

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
