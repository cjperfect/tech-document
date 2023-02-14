(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{321:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("custom-header"),t._v(" "),s("h2",{attrs:{id:"解释下什么是暂时性死区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解释下什么是暂时性死区"}},[t._v("#")]),t._v(" 解释下什么是暂时性死区？")]),t._v(" "),s("p",[t._v("如果用 ES6 新出的语法 let 和 const，这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。总之，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区。")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明前获取就会报错")]),t._v("\n")])])]),s("h2",{attrs:{id:"请说说-new-string-a-和-string-a-分别返回的结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请说说-new-string-a-和-string-a-分别返回的结果"}},[t._v("#")]),t._v(' 请说说 new String("A")和 String("A")分别返回的结果')]),t._v(" "),s("ol",[s("li",[t._v('new String("A") :')])]),t._v(" "),s("ul",[s("li",[t._v("返回类型：引用类型，堆内存存储")]),t._v(" "),s("li",[t._v("返回值：字符串对象")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v('String("A”) ：')])]),t._v(" "),s("ul",[s("li",[t._v("返回类型：基本类型，栈内存存储")]),t._v(" "),s("li",[t._v("返回值：字符串值")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String {'A'}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "A"')]),t._v("\n")])])]),s("h2",{attrs:{id:"let、const、var-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#let、const、var-的区别"}},[t._v("#")]),t._v(" let、const、var 的区别")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("块级作用域")]),t._v("： 块作用域由 { }包括，let 和 const 具有块级作用域，var 不存在块级作用域。块级作用域解决了 ES5 中的两个问题：")])]),t._v(" "),s("ul",[s("li",[t._v("内层变量可能覆盖外层变量")]),t._v(" "),s("li",[t._v("用来计数的循环变量泄露为全局变量")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("strong",[t._v("变量提升")]),t._v("：var 存在变量提升，let 和 const 不存在变量提升，即在变量只能在声明之后使用，否在会报错。")]),t._v(" "),s("li",[s("strong",[t._v("给全局添加属性")]),t._v("：浏览器的全局对象是 window，Node 的全局对象是 global。var 声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是 let 和 const 不会。")]),t._v(" "),s("li",[s("strong",[t._v("重复声明")]),t._v("：var 声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const 和 let 不允许重复声明变量。")]),t._v(" "),s("li",[s("strong",[t._v("暂时性死区")]),t._v("：在使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用 var 声明的变量不存在暂时性死区。")]),t._v(" "),s("li",[s("strong",[t._v("初始值设置")]),t._v("：在变量声明时，var 和 let 可以不用设置初始值。而 const 声明变量必须设置初始值。")]),t._v(" "),s("li",[s("strong",[t._v("指针指向")]),t._v("：let 和 const 都是 ES6 新增的用于创建变量的语法。 let 创建的变量是可以更改指针指向（可以重新赋值）。但 const 声明的变量是不允许改变指针的指向。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("区别")])]),t._v(" "),s("th",[s("strong",[t._v("var")])]),t._v(" "),s("th",[s("strong",[t._v("let")])]),t._v(" "),s("th",[s("strong",[t._v("const")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("是否有块级作用域")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("✔️")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("是否存在变量提升")]),t._v(" "),s("td",[t._v("✔️")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("×")])]),t._v(" "),s("tr",[s("td",[t._v("是否添加全局属性")]),t._v(" "),s("td",[t._v("✔️")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("×")])]),t._v(" "),s("tr",[s("td",[t._v("能否重复声明变量")]),t._v(" "),s("td",[t._v("✔️")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("×")])]),t._v(" "),s("tr",[s("td",[t._v("是否存在暂时性死区")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("✔️")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("是否必须设置初始值")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("能否改变指针指向")]),t._v(" "),s("td",[t._v("✔️")]),t._v(" "),s("td",[t._v("✔️")]),t._v(" "),s("td",[t._v("×")])])])]),t._v(" "),s("h2",{attrs:{id:"object-assign-和扩展运算法是深拷贝还是浅拷贝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-assign-和扩展运算法是深拷贝还是浅拷贝"}},[t._v("#")]),t._v(" object.assign 和扩展运算法是深拷贝还是浅拷贝")]),t._v(" "),s("h3",{attrs:{id:"扩展运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展运算符"}},[t._v("#")]),t._v(" 扩展运算符")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chenjiang"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("obj "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nnewObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n{\n    "info": {\n        "name": "chenjiang",\n        "age": 25\n    }\n}\n */')]),t._v("\n")])])]),s("h3",{attrs:{id:"object-assign"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-assign"}},[t._v("#")]),t._v(" Object.assign()")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chenjiang"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lala"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lala"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nnewObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n{\n    "info": {\n        "name": "chenjiang",\n        "age": 25\n    }\n}\n */')]),t._v("\n")])])]),s("h3",{attrs:{id:"结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[t._v("#")]),t._v(" 结果")]),t._v(" "),s("p",[t._v("可以看出，两者都是浅拷贝。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发 ES6 setter。")])]),t._v(" "),s("li",[s("p",[t._v("扩展操作符，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制 ES6 的 symbols 属性。另外扩展运算符语法更加简洁，并且比 "),s("code",[t._v("Object.assign()")]),t._v("提供了性能优势。")])])]),t._v(" "),s("h2",{attrs:{id:"object-is-和-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-is-和-区别"}},[t._v("#")]),t._v(" Object.is 和===区别")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 介绍"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("判断两个值是否为同一个值。")]),t._v(" "),s("p",[t._v("基本语法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("语法")]),t._v(" "),s("p",[t._v("参数：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("value1 被比较的第一个值。")])]),t._v(" "),s("li",[s("p",[t._v("value2 被比较的第二个值。")])])]),t._v(" "),s("p",[t._v("返回值：")]),t._v(" "),s("ul",[s("li",[t._v("一个布尔值，表示两个参数是否是同一个值。")])])]),t._v(" "),s("p",[t._v("Object.is 满足一下条件则两个值相同：")]),t._v(" "),s("ul",[s("li",[t._v("都是 undefined")]),t._v(" "),s("li",[t._v("都是 null")]),t._v(" "),s("li",[t._v("都是 true 或都是 false")]),t._v(" "),s("li",[t._v("都是相同长度、相同字符、按相同顺序排列的字符串")]),t._v(" "),s("li",[t._v("都是相同对象（意味着都是同一个对象的值引用）")]),t._v(" "),s("li",[t._v("都是数字且\n"),s("ul",[s("li",[t._v("都是 +0")]),t._v(" "),s("li",[t._v("都是 -0")]),t._v(" "),s("li",[t._v("都是 NaN")]),t._v(" "),s("li",[t._v("都是同一个值，非零且都不是 NaN")])])])]),t._v(" "),s("p",[s("code",[t._v("Object.is()")]),t._v(" 与 == 不同。== 运算符在判断相等前对两边的变量（如果它们不是同一类型）进行强制转换（这种行为将 "),s("code",[t._v('"" == false')]),t._v(" 判断为 true），而 Object.is 不会强制转换两边的值。")]),t._v(" "),s("p",[s("code",[t._v("Object.is()")]),t._v(" 与 === 也不相同。"),s("strong",[s("code",[t._v("差别是它们对待有符号的零和 NaN 不同")])]),t._v("，例如，=== 运算符（也包括 == 运算符）将数字 -0 和 +0 视为相等，而将 Number.NaN 与 NaN 视为不相等。")]),t._v(" "),s("h3",{attrs:{id:"polyfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polyfill"}},[t._v("#")]),t._v(" Polyfill")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"is"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SameValue algorithm")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return true if x and y are not 0, OR")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if x and y are both 0 of the same sign.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This checks for cases 1 and 2 above.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return true if both x AND y evaluate to NaN.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The only possibility for a variable to not be strictly equal to itself")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This checks for case 3.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);