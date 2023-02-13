const { readFile } = require("../utils");
module.exports = {
  "/css/": [
    {
      title: "HTML/CSS",
      collapsable: true,
      children: readFile("css"),
    },
  ],
  "/javascript/": [
    {
      title: "JavaScript",
      collapsable: true,
      children: readFile("javascript"),
    },
  ],
  "/react/": [
    {
      title: "React",
      collapsable: true,
      children: readFile("react"),
    },
  ],
  "/vue/": [
    {
      title: "Vue",
      collapsable: true,
      children: readFile("vue"),
    },
  ],
  "/typescript/": [
    {
      title: "Typescript",
      collapsable: true,
      children: readFile("typescript"),
    },
  ],
  "/webpack/": [
    {
      title: "Webpack",
      collapsable: true,
      children: readFile("webpack"),
    },
  ],
  "/network/": [
    {
      title: "网络知识",
      collapsable: true,
      children: readFile("network"),
    },
  ],
  "/algorithm/": [
    {
      title: "算法",
      collapsable: true,
      children: readFile("algorithm"),
    },
    // {
    //   title: "字符串算法",
    //   collapsable: true,
    //   children: readFile("algorithm/string", "/algorithm/string/"), // md文件目录和标题名称,
    // },
  ],
};
