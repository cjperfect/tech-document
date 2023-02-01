(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{311:function(t,e,s){"use strict";s.r(e);var o=s(11),r=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("custom-header"),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("重绘（repaint）")]),t._v(" "),e("p",[t._v("当 render tree 中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如 background-color。则就叫称为重绘。")]),t._v(" "),e("p",[t._v("当你给一个元素更换颜色，这样的行为是不会影响页面布局的，DOM 树不会变化，但颜色变了，渲染树得重新渲染页面，这就是重绘。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("回流（reflow）")]),t._v(" "),e("p",[t._v("当 render tree 中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)。")]),t._v(" "),e("p",[t._v("增删 DOM 节点，修改一个元素的宽高，页面布局发生变化，DOM 树结构发生变化，那么肯定要重新构建 DOM 树，而 DOM 树与渲染树是紧密相连的，DOM 树构建完，渲染树也会随之对页面进行再次渲染，这个过程就叫回流。")])]),t._v(" "),e("p",[e("strong",[e("font",{attrs:{color:"red"}},[t._v("如何减少回流")])],1)]),t._v(" "),e("ol",[e("li",[e("p",[t._v("DOM 的增删行为\n比如你要删除某个节点，给某个父元素增加子元素，这类操作都会引起回流。如果要加多个子元素，最好使用 documentfragment。")])]),t._v(" "),e("li",[e("p",[t._v("几何属性的变化\n比如元素宽高变了，border 变了，字体大小变了，这种直接会引起页面布局变化的操作也会引起回流。如果你要改变多个属性，最好将这些属性定义在一个 class 中，直接修改 class 名，这样只用引起一次回流。")])]),t._v(" "),e("li",[e("p",[t._v("元素位置的变化\n修改一个元素的左右 margin，padding 之类的操作，所以在做元素位移的动画，不要更改 margin 之类的属性，使用定位脱离文档流后改变位置会更好。")])]),t._v(" "),e("li",[e("p",[t._v("获取元素的偏移量属性\n例如获取一个元素的 scrollTop、scrollLeft、scrollWidth、offsetTop、offsetLeft、offsetWidth、offsetHeight 之类的属性，浏览器为了保证值的正确也会回流取得最新的值，所以如果你要多次操作，最好取完做个缓存。")])]),t._v(" "),e("li",[e("p",[t._v("页面初次渲染\n这样的回流无法避免")])]),t._v(" "),e("li",[e("p",[t._v("浏览器窗口尺寸改变\nresize 事件发生也会引起回流。")])])]),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_39583550/article/details/128381589",target:"_blank",rel:"noopener noreferrer"}},[t._v("重绘和回流的应用场景"),e("OutboundLink")],1)])],1)}),[],!1,null,null,null);e.default=r.exports}}]);