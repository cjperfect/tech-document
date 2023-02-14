---
title: script 标签中 defer 和 async 的区别
date: 2023年2月5日17:04:26
categories:
  - 前端
tags:
  - HTML
---

<custom-header/>

## script

当浏览器加载`html`中遇到`script`标签，它就无法继续构建`DOM`。它必须立即执行脚本。浏览器必须要等待脚本下载，执行下载的脚本，然后才能处理页面的其余部分。



::: danger 存在的问题

如果页面中存在一个庞大的脚本，它就会`阻塞`页面的加载。在下载和运行完成之前，用于无法看到页面的内容。

解决办法：

- 把脚本放到最底部，但是也会存在一个问题（对于长的html文档，就有可能有明显的延迟）

:::

## defer

`defer`属性会通知浏览器不需要等待脚本，浏览继续处理构建`DOM`，该脚本在后台加载，等待DOM构建完成了，再来运行脚本。

```html
<script defer src="xxxxx"></script>
```

::: tip 执行时机

`defer`脚本总是在DOM准备好的时机执行，在`DOMContentLoaded`事件之前。

:::

```html
<script>
	document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM全部加载完成了， defer脚本也执行完成了')
    })
</script>
<script defer src="defer.js"></script> 
// 假如defer.js的代码是console.log('我是带有defer的脚本')

// 打印结果
我是带有defer的脚本
DOM全部加载完成了， defer脚本也执行完成了
```

### 总结

1. 页面可以立刻显示
2. `DOMContentLoaded`事件要等待defer脚本执行完之后执行

::: danger 注意

HTML5规范要求脚本按照它们出现的先后顺序执行，因此第一个延迟脚本会先于第二个延迟脚本执行，而这两个脚本会先于`DOMContentLoaded`事件执行。**在现实当中**，延迟脚本并不一定会按照顺序执行，也不一定会在`DOMContentLoad`时间触发前执行，因此最好只包含一个延迟脚本。

:::

## async

- 浏览器不会阻止async脚本
- 其他脚本也不会等待async脚本，async脚本也不会等待其他脚本

- `DOMContentLoaded`和async脚本不会互相等待 
    - `DOMContentLoaded`可能在async脚本执行之前触发（如果async脚本在页面解析完成后完成加载；或在async脚本执行之后触发（如果async脚本很快加载完成或在`HTTP`缓存中）



::: danger 注意

async和defer属性都仅适用于`外部脚本`，如果script标签没有src属性，尽管写了async、defer属性也会被忽略；

:::

## 两者区别

defer 和 async有一个共同点：下载此类脚本都不会阻止页面呈现（异步加载），区别在于：

1. async 执行与文档顺序无关，先加载哪个就先执行哪个；defer会按照文档中的顺序执行
2. async 脚本加载完成后立即执行，可以在DOM尚未完全下载完成就加载和执行；而defer脚本需要等到文档所有元素解析完成之后才执行