---
title: Polyfill是什么
date: 2023年2月13日11:39:47
categories:
  - 前端
tags:
  - JavaScript
  - 浏览器
---

<custom-header/>

`Polyfill`是一个`js`库，主要抚平不同浏览器之间对 js 实现的差异。 帮你把这些差异化抹平，不支持的变得支持了。

例如 IE 一直没有实现`Array.includes()`这个方法, 于是我们为了在 IE 实现这个方法，就会引用下面的`polyfill`。

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    value: function (searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return (
          x === y ||
          (typeof x === "number" &&
            typeof y === "number" &&
            isNaN(x) &&
            isNaN(y))
        );
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    },
  });
}
```

加入之后就可以在 IE 浏览器环境下使用`Array.includes()`方法了。

## 如何使用

```html
<script src="//cdn.polyfill.io/v1/polyfill.min.js" async defer></script>
```

这包含了我们默认的 polyfill 设置。这个默认设置是我们人工挑选的一个特性列表，我们认为这个列表中所包含的特性对于现代网络开发来说不可或缺，而且相对应的 polyfill 相当小且十分精确。如果你想指定添加某个 polyfill 特性，只需要这么做：

```html
<!-- 只需要Array.from polyfill -->

<script
  src="//cdn.polyfill.io/v1/polyfill.min.js?features=Array.from"
  async
  defer
></script>

<script
  src="//cdn.polyfill.io/v1/polyfill.min.js?features=default,Navigator.prototype.geolocation"
  async
  defer
></script>
```

参考文章：

- [https://cnodejs.org/topic/57106c9a6a2d2bda52de95dc](https://cnodejs.org/topic/57106c9a6a2d2bda52de95dc)
- [https://medium.com/@alexian853/polyfill%E6%98%AF%E4%BB%80%E9%BA%BC-bc07fd6eb880](https://medium.com/@alexian853/polyfill%E6%98%AF%E4%BB%80%E9%BA%BC-bc07fd6eb880)
