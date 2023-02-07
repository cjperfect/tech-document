const { description } = require("../../package");
const nav = require("./config/nav");
const sidebar = require("./config/sidebar");

module.exports = {
  base: "/tech-document/",
  dest: "./docs", // 设置build输出目录
  title: "技术文档",
  description: description,
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    sidebarDepth: 0,
    author: "陈江",
    // repo: "https://github.com/cjperfect/tech-document.git",
    nav,
    sidebar,
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/medium-zoom",
    "@vuepress/active-header-links",
    "vuepress-plugin-smooth-scroll",
    [
      "vuepress-plugin-right-anchor",
      {
        showDepth: 2,
        expand: {
          trigger: "click",
          clickModeDefaultOpen: true,
        },
        disableGlobalUI: false,
      },
    ],
  ],
};
