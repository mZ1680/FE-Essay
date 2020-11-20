(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{288:function(v,a,_){"use strict";_.r(a);var t=_(6),e=Object(t.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"聊聊如何搭建高性能网站"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#聊聊如何搭建高性能网站"}},[v._v("#")]),v._v(" 聊聊如何搭建高性能网站")]),v._v(" "),_("p",[v._v("在开发中经常会遇到网站的性能瓶颈，打开慢的情况。我们平常开发中应该怎么一步步排查这些问题并解决呢？")]),v._v(" "),_("blockquote",[_("p",[v._v("在快节奏的时代中，慢是个不容忍受的事情。")])]),v._v(" "),_("h2",{attrs:{id:"为什么会「慢」"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么会「慢」"}},[v._v("#")]),v._v(" 为什么会「慢」")]),v._v(" "),_("p",[v._v("慢的情况是多种多样的，比如：")]),v._v(" "),_("ul",[_("li",[v._v("用户体验感差，感觉「慢」")]),v._v(" "),_("li",[v._v("JavaScript 执行慢")]),v._v(" "),_("li",[v._v("接口响应慢")]),v._v(" "),_("li",[v._v("资源加载慢")]),v._v(" "),_("li",[v._v("浏览器渲染慢")]),v._v(" "),_("li",[v._v("。。。")])]),v._v(" "),_("p",[v._v("反正一定是我们的问题，不能是用户的问题。")]),v._v(" "),_("h2",{attrs:{id:"排查手段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#排查手段"}},[v._v("#")]),v._v(" 排查手段")]),v._v(" "),_("p",[v._v("我们从几个方面着手讲一下排查问题的手段。")]),v._v(" "),_("h3",{attrs:{id:"技术上的选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#技术上的选择"}},[v._v("#")]),v._v(" 技术上的选择")]),v._v(" "),_("p",[v._v("在日常开发中，技术上的选择是非常重要的。")]),v._v(" "),_("p",[v._v("为什么要说这个，因为现象频发。前端工程化严重的当下，轻量化的框架逐渐被遗忘。然而并不是所有业务场景都适合使用工程化框架，react / vue 并不轻量。")]),v._v(" "),_("blockquote",[_("p",[v._v("复杂的框架是为了解决复杂的业务场景。")])]),v._v(" "),_("p",[v._v("如果只是研发宣发、展示等场景简单的业务场景时，原生开发配合一些轻量化的插件更合适。")]),v._v(" "),_("p",[v._v("多页面应用也并不都是缺点，根绝业务场景选择不一样的技术都是非常重要的，是每个前端都应该反思的事情。")]),v._v(" "),_("p",[v._v("这方面是导致卡顿的关键问题。")]),v._v(" "),_("h3",{attrs:{id:"network"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[v._v("#")]),v._v(" NetWork")]),v._v(" "),_("p",[v._v("我们的老朋友 NetWork 想必每位前端开发都非常熟悉，我们先来看一下 network 面板：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87dbcd5fcd6c46b6b8b153f570e183ed~tplv-k3u1fbpfcp-zoom-1.image?imageslim",alt:"img"}})]),v._v(" "),_("p",[v._v("从面板上我们可以看出一些信息：")]),v._v(" "),_("ul",[_("li",[v._v("请求资源 size")]),v._v(" "),_("li",[v._v("请求资源时长")]),v._v(" "),_("li",[v._v("请求资源数量")]),v._v(" "),_("li",[v._v("接口响应时长")]),v._v(" "),_("li",[v._v("接口发起数量")]),v._v(" "),_("li",[v._v("接口报文 size")]),v._v(" "),_("li",[v._v("接口响应状态")]),v._v(" "),_("li",[v._v("瀑布图")])]),v._v(" "),_("p",[v._v("瀑布图就是上方图片后面的 waterfall 纵列。")]),v._v(" "),_("p",[v._v("瀑布图是一个级联图，展示了浏览器如何加载资源并渲染页面。图中的每一行都是一次单独的浏览器请求。这个图越长，说明加载网页过程中所发的请求越多。每一行的宽度，代表浏览器发出请求并下载该资源的过程中所耗费的时间，它的侧重点在于分析网路链路。")]),v._v(" "),_("p",[v._v("瀑布图颜色说明：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("DNS Lookup 【深绿色】")]),v._v(" ：在浏览器和服务器通信之前，必须经过 DNS 查询，将域名转换成 IP 地址，在这个阶段你可以处理的东西很少。但幸运的是，并非所有请求都需要经过这一步。")]),v._v(" "),_("li",[_("strong",[v._v("Initial Connection 【橙色】")]),v._v(" ：在浏览器发送请求之前，必须建立 TCP 连接。这个过程仅仅发生在瀑布图中的开头几行，否则这就是个性能问题。")]),v._v(" "),_("li",[v._v("SSL / TLS Negotiation【紫色】：如果你的页面是通过 SSL / TLS 这类安全协议加载资源，这段时间就是浏览器建立安全连接的过程。目前 Google 将 HTTPS 作为其搜索排名因素之一，SSL / TLS 协议的使用变得越来越普遍。")]),v._v(" "),_("li",[_("strong",[v._v("Time To First Byte（TTFB）【绿色】：")]),v._v(" TTFB 是浏览器请求发送到服务器的时间 + 服务器处理请求时间 + 响应报文的第一字节到达浏览器的时间。我们用这个指标来判断你的 web 服务器是否性能不够，或者你是否需要 CDN。")]),v._v(" "),_("li",[_("strong",[v._v("Downloading【蓝色】")]),v._v(" ：这是浏览器用来下载资源所用时间。这段时间越长，说明资源越大。理想情况下，你可以通过控制资源的大小来控制这段时间的长度。")])]),v._v(" "),_("p",[v._v("那么除了瀑布图的长度外，我们如何才能判断一个瀑布图的状态是 "),_("strong",[v._v("健康")]),v._v(" 的呢？")]),v._v(" "),_("ul",[_("li",[v._v("首先，减少所有资源的加载时间，即减小瀑布图的宽度。瀑布图越窄，网站的访问速度越快。")]),v._v(" "),_("li",[v._v("其次，减少请求数量，也就是降低瀑布图的高度，瀑布图越矮越好。")]),v._v(" "),_("li",[v._v("最后，通过优化资源请求顺序来加快渲染时间。从图上看，就是将绿色的「开始渲染」线左移，这条线向左移动的越远远好。")])]),v._v(" "),_("p",[v._v("这样我们就可以从 Network 角度去排查「慢」的问题。")]),v._v(" "),_("h3",{attrs:{id:"webpack-bundle-analyzer"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webpack-bundle-analyzer"}},[v._v("#")]),v._v(" webpack-bundle-analyzer")]),v._v(" "),_("p",[v._v("项目构建后生成的 bundle包是压缩后的。webpack-bundle-analyzer 是一款包分析工具。我们先来看看它能带来的效果：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9917c642fa5a4045839b4d0af2c299b2~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"}})]),v._v(" "),_("p",[v._v("从上图来看，我们的 bundle 包被解析的一览无余。其中模块面积越大说明在 bundle 包中的体积越大，就值得注意和优化。")]),v._v(" "),_("p",[v._v("它能够排查出来的信息有：")]),v._v(" "),_("ul",[_("li",[v._v("显示包中所有打入的模块")]),v._v(" "),_("li",[v._v("显示模块 size 以及 gzip 后的 size")])]),v._v(" "),_("p",[v._v("排查包中的模块情形是非常有必要的，通过 webpack-bundle-analyzer 来排查出一些无用的模块，过大的模块，然后进行优化，减小我们 bundle 的体积，减少加载市场")]),v._v(" "),_("h3",{attrs:{id:"performance"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[v._v("#")]),v._v(" Performance")]),v._v(" "),_("p",[v._v("Chrome 自带的 performance 模块，先附上一个官网文档传送门："),_("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/?utm_source=devtools",target:"_blank",rel:"noopener noreferrer"}},[v._v("Performance"),_("OutboundLink")],1),v._v(" 。")]),v._v(" "),_("p",[v._v("可以检测出很多方面的问题，多数情况的性能排查上用的比较多，如果想要深入了解的同学可以看一下官方文档。")]),v._v(" "),_("p",[v._v("我们来看一下 performance 面板能够为我们提供什么信息：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3027b177f77f49e3866eeecedefaa70b~tplv-k3u1fbpfcp-zoom-1.image?imageslim",alt:"img"}})]),v._v(" "),_("p",[v._v("从上图中我们可以分析出一些指标")]),v._v(" "),_("ul",[_("li",[v._v("FCP / LCP 时间是否过长")]),v._v(" "),_("li",[v._v("请求并发情况，是否并发频繁")]),v._v(" "),_("li",[v._v("请求发起顺序是否不对")]),v._v(" "),_("li",[v._v("JavaScript 执行是否过慢")])]),v._v(" "),_("p",[v._v("这些指标是我们需要重点关注的，当然 performance 的功能不止于此。")]),v._v(" "),_("h3",{attrs:{id:"抓包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抓包"}},[v._v("#")]),v._v(" 抓包")]),v._v(" "),_("p",[v._v("有一些业务状况是没有上述的一些调试工具的，此时我们可以利用抓包工具进行对页面信息的抓取，这里我推荐一款抓包工具"),_("a",{attrs:{href:"https://www.charlesproxy.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("charles"),_("OutboundLink")],1),v._v(" 。使用教程网上很多，自行搜索即可。")]),v._v(" "),_("h2",{attrs:{id:"优化指标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化指标"}},[v._v("#")]),v._v(" 优化指标")]),v._v(" "),_("p",[v._v("这里我们讲一下如何优化上述指标和一些导致满的情况。")]),v._v(" "),_("h3",{attrs:{id:"tree-shaking"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[v._v("#")]),v._v(" tree shaking")]),v._v(" "),_("p",[v._v("摇树是 webpack 构建优化中重要的一环，主要用于清除我们项目中一些无用代码，它依赖于 ES 中的模块语法。")]),v._v(" "),_("p",[v._v("比如日常使用lodash的时候")]),v._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("import")]),v._v(" _ "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("from")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'lodash'")]),v._v("\n")])])]),_("p",[v._v("如果如上引用lodash库，在构建包的时候是会把整个lodash包打入到我们的bundle包中的。")]),v._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("import")]),v._v(" _isEmpty "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("from")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'lodash/isEmpty'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])])]),_("p",[v._v("如果如上引用lodash库，在构建包的时候只会把isEmpty这个方法抽离出来再打入到我们的bundle包中。")]),v._v(" "),_("p",[v._v("这样的化就会大大减少我们包的size。所以在日常引用第三方库的时候，需要注意导入的方式。")]),v._v(" "),_("p",[v._v("在 Webpack 4.x 中只需要 mode 换成 production 即可默认开启摇树。")]),v._v(" "),_("h3",{attrs:{id:"split-chunks"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#split-chunks"}},[v._v("#")]),v._v(" split chunks")]),v._v(" "),_("p",[v._v("拆包。")]),v._v(" "),_("p",[v._v("在没有配置任何东西的情况下，webpack 4 就能只能帮你做代码切割。入口文件依赖的文件都被打包到 main.js ，而那些大于 30kb 的第三方依赖都会被打包到 vendors 中。")]),v._v(" "),_("p",[v._v("其他被我们设置了一步加载的页面或者组件也会变成一个个 chunk，也就是被打包成一个个独立的 bundle。")]),v._v(" "),_("p",[v._v("它内置的代码分割策略大致如下：")]),v._v(" "),_("ul",[_("li",[v._v("新的 chunk 是否被共享或者是否来自 node_modules")]),v._v(" "),_("li",[v._v("新的 chunk 提及在压缩之前是否大于 30kb")]),v._v(" "),_("li",[v._v("按需加载 chunk 的并发请求数量小于等于 5 个")]),v._v(" "),_("li",[v._v("页面初始加载时的并发请求数量小于等于 5 个")])]),v._v(" "),_("p",[v._v("同时，我们在打包过程中，对于一些不太会变动的第三方依赖，可以选择不将它们打包进来，而是采用 CDN 的方式，这样既加快了打包速度，也可以充分利用缓存提高加载速度。")]),v._v(" "),_("h3",{attrs:{id:"gzip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[v._v("#")]),v._v(" gzip")]),v._v(" "),_("p",[v._v("服务端配置 gzip 压缩后可以大大缩减资源的大小，从而达到加载速度的提升。")]),v._v(" "),_("h3",{attrs:{id:"图片压缩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图片压缩"}},[v._v("#")]),v._v(" 图片压缩")]),v._v(" "),_("p",[v._v("开发中比较重要的一个环节，因为设备像素点的关系，UI 给予的图片一般都是 x2，x4的，所以压缩就非常有必要。")]),v._v(" "),_("h3",{attrs:{id:"图片分割"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图片分割"}},[v._v("#")]),v._v(" 图片分割")]),v._v(" "),_("p",[v._v("如果页面中有一张效果图，比如真机渲染图，UI 手拿着刀不让你压缩。这时候不妨考虑一下分割图片。")]),v._v(" "),_("p",[v._v("建议单张土图片的大小不要超过 100k，我们在分割完图片后，通过布局再拼接在一起。可以图片加载效率。")]),v._v(" "),_("p",[v._v("这里注意一点，分割后的每张图片一定要给高度，否则网速慢的情况下样式会塌陷。")]),v._v(" "),_("h3",{attrs:{id:"sprite"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sprite"}},[v._v("#")]),v._v(" sprite")]),v._v(" "),_("p",[v._v("雪碧图，通过将多个小图标合并成一张大图片，从而减少请求数量达到加快加载速度的方法。")]),v._v(" "),_("p",[v._v("目前随着 HTTP/2 的推动，已经不需要这种方式了。")]),v._v(" "),_("h3",{attrs:{id:"cdn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[v._v("#")]),v._v(" CDN")]),v._v(" "),_("p",[v._v("内容分发网络，将资源分发到多台不同的服务器上，这样客户端请求的时候直接请求距离最近的服务器，从而让资源加载速度变快。")]),v._v(" "),_("h3",{attrs:{id:"懒加载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[v._v("#")]),v._v(" 懒加载")]),v._v(" "),_("p",[v._v("在长网页中，例如购物网站，当资源没有滚动到可视区域的时候，不选择加载，可以减少客户端渲染的压力。")]),v._v(" "),_("h3",{attrs:{id:"逻辑后移"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#逻辑后移"}},[v._v("#")]),v._v(" 逻辑后移")]),v._v(" "),_("p",[v._v("逻辑后移是一种比较常见的优化手段。用一个打开文章网站的操作来举个例子。")]),v._v(" "),_("p",[v._v("没有逻辑后移处理的请求顺序是这个样子的")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/46f8e43dbe2345af85aa232e59a79fc1~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"}})]),v._v(" "),_("p",[v._v("页面的展示主体是文章展示，如果文章展示的请求靠后了，那么渲染文章出来的时间必然靠后，因为有可能因为请求阻塞等情况，影响请求响应情况，如果超过一次并发的情况的话，会更加的慢。如图的这种情况也是在我们项目中发生过的。")]),v._v(" "),_("p",[v._v("很明显我们应该把主体“请求文章”接口前移，把一些非主体的请求逻辑后移。这样的话可以尽快的把主体渲染出来，就会快很多。")]),v._v(" "),_("p",[v._v("优化后的顺序是这个样子的。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d161a61ec94d42ed9b48cf3b00eb12fa~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"}})]),v._v(" "),_("p",[v._v("在平常的开发中建议时常注意逻辑后移的情况，突出主体逻辑。可以极大的提升用户体验。")]),v._v(" "),_("h3",{attrs:{id:"算法复杂度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#算法复杂度"}},[v._v("#")]),v._v(" 算法复杂度")]),v._v(" "),_("p",[v._v("在数据量大的应用场景中，需要着重注意算法复杂度问题。")]),v._v(" "),_("p",[v._v("如上面 Performance 解析出的 Javascript 执行指标上，可以推测出来你的代码执行效率如何，如果执行时间过长就要考虑一下是否要优化一下复杂度了。")]),v._v(" "),_("blockquote",[_("p",[v._v("在时间换空间，空间换时间的选择上，要根据业务场景来进行取舍。")])]),v._v(" "),_("h3",{attrs:{id:"组件渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件渲染"}},[v._v("#")]),v._v(" 组件渲染")]),v._v(" "),_("p",[v._v("拿 react 举例，组件分割方面不要太深。需要控制组件的渲染，尤其是深层组件的 render。")]),v._v(" "),_("p",[v._v("老生常谈的话题，我们可以一些方式来优化组件渲染")]),v._v(" "),_("ul",[_("li",[v._v("声明周期控制：比如 react 的 shouldComponentUpdate 来控制组件渲染。")]),v._v(" "),_("li",[v._v("官网提供的api：PureComponent")]),v._v(" "),_("li",[v._v("控制注入组件的参数")]),v._v(" "),_("li",[v._v("分配组件唯一 key")])]),v._v(" "),_("p",[v._v("没有必要的渲染是对性能的极大浪费。")]),v._v(" "),_("h3",{attrs:{id:"node-middleware"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#node-middleware"}},[v._v("#")]),v._v(" node middleware")]),v._v(" "),_("p",[v._v("中间件。")]),v._v(" "),_("p",[v._v("中间件主要是指封装所有 Http 请求细节处理的方法。一次 Http 请求通常包含很多工作，如记录日志、ip过滤、查询字符串、请求体解析、Cookie处理、权限验证、参数验证、异常处理等，但对于 Web 应用而言，并不希望接触到这么多细节性的处理，因此引入中间件来简化和隔离这些基础设施与业务逻辑之间的细节，让我们能够关注在业务的开发上，以达到提升开发效率的目的。")]),v._v(" "),_("p",[v._v("使用 node middleware 合并请求。减少请求次数。这种方式也是非常实用的。")]),v._v(" "),_("h3",{attrs:{id:"web-worker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-worker"}},[v._v("#")]),v._v(" Web Worker")]),v._v(" "),_("p",[v._v("Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢")]),v._v(" "),_("h3",{attrs:{id:"缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[v._v("#")]),v._v(" 缓存")]),v._v(" "),_("p",[v._v("充分利用缓存，达到根本不需要请求。")])])}),[],!1,null,null,null);a.default=e.exports}}]);