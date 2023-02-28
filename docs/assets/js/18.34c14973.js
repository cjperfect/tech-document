(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{294:function(e,r,t){e.exports=t.p+"assets/img/wipgif.63d37786.gif"},341:function(e,r,t){"use strict";t.r(r);var o=t(11),i=Object(o.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("custom-header"),e._v(" "),r("p",[e._v("简单概括就是两个阶段：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("render(reconciliation)协调阶段，可中断/异步，主要是新 fiber 树的构建。")])]),e._v(" "),r("li",[r("p",[e._v("commit 提交阶段，不可中断/同步，主要是更新最终效果。")])])]),e._v(" "),r("h2",{attrs:{id:"render-reconciliation-协调阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#render-reconciliation-协调阶段"}},[e._v("#")]),e._v(" render(reconciliation)协调阶段")]),e._v(" "),r("p",[e._v("这个阶段其实就是在内存中构建一颗新的 fiber 树（即 "),r("code",[e._v("workInProgress tree")]),e._v("），构建过程是根据现有的 fiber 树（即 "),r("code",[e._v("currentFiber tree")]),e._v("），从 root 开始深度优先遍历在回溯到 root 的过程，这个过程中每个 fiber 阶段会经历两个阶段："),r("code",[e._v("beginWork 阶段")]),e._v("和 "),r("code",[e._v("completeWork 阶段")]),e._v("。")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("beginWork 阶段：\n组件的状态的计算、diff 的操作以及 render 函数的执行")])]),e._v(" "),r("li",[r("p",[e._v("completeWork 阶段：\neffect 链表的收集，被跳过的优先级的收集。")])])]),e._v(" "),r("p",[e._v("在构建"),r("code",[e._v("workInProgress tree")]),e._v(" 过程中会有一个 "),r("code",[e._v("workInProgress 的指针")]),e._v("记录当前构建到哪个 fiber 节点了，这也是 React 更新任务可恢复的重要原因之一。")]),e._v(" "),r("p",[r("strong",[e._v("render 协调阶段的简要过程：")])]),e._v(" "),r("p",[r("img",{attrs:{src:t(294),alt:"wipgif"}})]),e._v(" "),r("h2",{attrs:{id:"commit-提交阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#commit-提交阶段"}},[e._v("#")]),e._v(" commit 提交阶段")]),e._v(" "),r("p",[e._v("在 render 阶段结束后，就会进入 commit 阶段，主要是依据"),r("code",[e._v("workInProgress tree")]),e._v("有变化的节点（即 render 阶段的 completeWork 过程中收集的 effect 链表），去更新 DOM 节点，将更新应用到界面中。除此之外还会异步调用"),r("code",[e._v("useEffect")]),e._v("和同步执行"),r("code",[e._v("useLayoutEffect")]),e._v("。")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("总结")]),e._v(" "),r("p",[e._v("这两个阶段都是独立的 React 任务，最后会进入 Scheduler 被调度。")]),e._v(" "),r("p",[e._v("render 阶段采用的调度优先级是根据本次更新的优先级来决定的，以便于高优先级进入的时候可以打断低优先级的任务工作；")]),e._v(" "),r("p",[e._v("commit 阶段的调度优先级采用的是最高优先级，以保证 commit 阶段"),r("code",[e._v("同步执行")]),e._v("不会被打断。")])]),e._v(" "),r("p",[e._v("参考文章：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.cn/post/6917073781412331533",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.cn/post/6917073781412331533"),r("OutboundLink")],1)])])],1)}),[],!1,null,null,null);r.default=i.exports}}]);