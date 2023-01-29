---
title: 对line-height 的理解及其赋值方式
date: 2023年1月29日11:44:35
categories:
  - 前端
tags:
  - CSS
---

<custom-header/>

### line-height 的概念：

line-height 指一行文本的高度，包含了字间距，实际上是下一行基线到上一行基线距离；
如果一个标签没有定义 height 属性，那么其最终表现的高度由 line-height 决定；
一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容；
把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中；
line-height 和 height 都能撑开一个高度；

### line-height 的赋值方式：

带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 \* 18 = 27px
百分比：将计算后的值传递给后代
