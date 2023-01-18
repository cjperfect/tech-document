---
title: webpack自定义loader解析
date: 2023年1月12日21:04:14
categories:
  - 工程化
tags:
  - Webpack
---

<custom-header/>

案例： webpack 自定义 loader 解析`.chenjiang`后缀名的文件

整体目录：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2733093645d1471096916779c20e4c3d.png)

- chenjiangLoader.js 文件代码

```javascript
// 正则匹配script标签中的内容
const REG = /<script>([\s\S]*)<\/script>/;

module.exports = function (source) {
  const __source = source.match(REG);

  return __source && __source[1] ? __source[1] : source;
};
```

- test.chenjiang 文件代码

```javascript
<script>
    export default {
        name: 'chenjiang',
        age: 24
    }
</script>
```

- 配置 webpack 的 loader

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.chenjiang$/,
        use: [path.resolve(__dirname, "loader/chenjiangLoader.js")],
      },
    ],
  },
};
```

- 主入口文件代码

```javascript
import Utils from "./test.chenjiang";

console.log("自定义文件后缀名：", Utils.name);
```

- 运行命令
  > 前提要 npm install webpack webpack-cli -D

```shell
npx webpack
```

- 访问 index.html 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script type="application/javascript" src="../dist/bundle.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```
