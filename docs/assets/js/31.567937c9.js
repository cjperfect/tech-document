(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{340:function(t,v,_){"use strict";_.r(v);var e=_(8),o=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("custom-header"),t._v(" "),v("h3",{attrs:{id:"浏览器渲染步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染步骤"}},[t._v("#")]),t._v(" 浏览器渲染步骤")]),t._v(" "),v("ol",[v("li",[v("p",[v("strong",[t._v("DOM")]),t._v("：将 HTML 解析成 DOM 树，开发者可以在控制台输入"),v("code",[t._v("document")]),t._v("感知它的存在。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Style")]),t._v("：解析 CSS，开发者可以在控制输入"),v("code",[t._v("document.styleSheets")]),t._v("感知它的存在。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Layout")]),t._v("：构建布局树，布局树会移除 DOM 树不可见的部分，并计算可见部分的"),v("code",[t._v("几何位置")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Layer")]),t._v("：将页面划分多个图层，一些层叠上下文 CSS 属性（比如 z-index、opacity、\nposition）、“由于显示不全被裁剪的内容”等会使 DOM 元素形成独立的图层。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Paint")]),t._v("：为每个图层生成包含“绘制信息”的绘制列表，将绘制列表提交给渲染进程的合成线程用于绘制。")])])]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("执行上述任务的流程被称为“渲染流水线”，每次执行流水线时，上述所有任务并不一定全部执行，比如：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("当通过 JS 或者 CSS 修改了 DOM 元素的几何位置（比如长度、宽度）时，会触发完成的渲染流水线，这种情况成为"),v("code",[t._v("重排")]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("当修改的属性不涉及几何属性（比如字体颜色）时，会省略流流水线中的"),v("code",[t._v("Layout、Layer")]),t._v("过程，这种情况成为"),v("code",[t._v("重绘")]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("当修改“不涉及重排、重绘的属性”（比如 transform 属性）时，会省略流水线中的"),v("code",[t._v("Layout、Layer、Paint")]),t._v("过程，仅执行"),v("code",[t._v("合成线程")]),t._v("的绘制工作，这种情况称为"),v("code",[t._v("合成")])])])]),t._v(" "),v("p",[t._v("按照“性能高低“对这些流程进行排序："),v("code",[t._v("重排 < 重绘 < 合成")]),t._v("。这也是 CSS 动画性能优于 JS 动画性能的原因，前者可能仅涉及"),v("code",[t._v("合成")]),t._v("，后者会涉及到"),v("code",[t._v("重排、重绘")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"重绘和回流-重排-详细描述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重绘和回流-重排-详细描述"}},[t._v("#")]),t._v(" 重绘和回流（重排）详细描述")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("重绘（repaint）")]),t._v(" "),v("p",[t._v("当 render tree 中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如 background-color。则就叫称为重绘。")]),t._v(" "),v("p",[t._v("当你给一个元素更换颜色，这样的行为是不会影响页面布局的，DOM 树不会变化，但颜色变了，渲染树得重新渲染页面，这就是重绘。")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("回流（重排）（reflow）")]),t._v(" "),v("p",[t._v("当 render tree 中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)。")]),t._v(" "),v("p",[t._v("增删 DOM 节点，修改一个元素的宽高，页面布局发生变化，DOM 树结构发生变化，那么肯定要重新构建 DOM 树，而 DOM 树与渲染树是紧密相连的，DOM 树构建完，渲染树也会随之对页面进行再次渲染，这个过程就叫回流。")])]),t._v(" "),v("p",[v("strong",[v("font",{attrs:{color:"red"}},[t._v("如何减少回流（重排）")])],1)]),t._v(" "),v("ol",[v("li",[v("p",[t._v("DOM 的增删行为\n比如你要删除某个节点，给某个父元素增加子元素，这类操作都会引起回流。如果要加多个子元素，最好使用 documentfragment。")])]),t._v(" "),v("li",[v("p",[t._v("几何属性的变化\n比如元素宽高变了，border 变了，字体大小变了，这种直接会引起页面布局变化的操作也会引起回流。如果你要改变多个属性，最好将这些属性定义在一个 class 中，直接修改 class 名，这样只用引起一次回流。")])]),t._v(" "),v("li",[v("p",[t._v("元素位置的变化\n修改一个元素的左右 margin，padding 之类的操作，所以在做元素位移的动画，不要更改 margin 之类的属性，使用定位脱离文档流后改变位置会更好。")])]),t._v(" "),v("li",[v("p",[t._v("获取元素的偏移量属性\n例如获取一个元素的 scrollTop、scrollLeft、scrollWidth、offsetTop、offsetLeft、offsetWidth、offsetHeight 之类的属性，浏览器为了保证值的正确也会回流取得最新的值，所以如果你要多次操作，最好取完做个缓存。")])]),t._v(" "),v("li",[v("p",[t._v("页面初次渲染\n这样的回流无法避免")])]),t._v(" "),v("li",[v("p",[t._v("浏览器窗口尺寸改变\nresize 事件发生也会引起回流。")])])]),t._v(" "),v("hr"),t._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/qq_39583550/article/details/128381589",target:"_blank",rel:"noopener noreferrer"}},[t._v("重绘和回流的应用场景"),v("OutboundLink")],1)])],1)}),[],!1,null,null,null);v.default=o.exports}}]);