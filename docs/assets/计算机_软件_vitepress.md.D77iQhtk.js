import{_ as a,c as i,o as n,ag as p}from"./chunks/framework.DPDPlp3K.js";const o=JSON.parse('{"title":"使用vitepress搭建笔记网站","description":"","frontmatter":{},"headers":[],"relativePath":"计算机/软件/vitepress.md","filePath":"计算机/软件/vitepress.md","lastUpdated":null}'),l={name:"计算机/软件/vitepress.md"};function e(t,s,h,k,r,d){return n(),i("div",null,s[0]||(s[0]=[p(`<h1 id="使用vitepress搭建笔记网站" tabindex="-1">使用vitepress搭建笔记网站 <a class="header-anchor" href="#使用vitepress搭建笔记网站" aria-label="Permalink to &quot;使用vitepress搭建笔记网站&quot;">​</a></h1><ul><li>GitHub: <a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">vitepress</a></li><li>官方文档: <a href="https://vitepress.dev/zh/" target="_blank" rel="noreferrer">VitePress-zh</a></li></ul><h2 id="快速使用指南" tabindex="-1">快速使用指南 <a class="header-anchor" href="#快速使用指南" aria-label="Permalink to &quot;快速使用指南&quot;">​</a></h2><p>首先安装nodejs和npm</p><p><code>sudo pacman -S nodejs npm</code></p><p>安装 VitePress, 如果后续使用构建命令时显示未找到vitepress, 也可以运行此命令重新安装.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -D 表示将安装的包添加到 package.json 文件中的 devDependencies 字段, 这将在当前目录生成node_modules文件夹, 包含了安装的各种包.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 然后初始化, 将进入交互回答几个建站的问题.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>这将在当前目录生成几个json文件, md文件和 .vitepress 目录, 除此之外你可以在当前目录建立层级的目录及其下包含的markdown文件, 这些目录和文件就是你的个人笔记. 这次额层级目录需要在.vitepress/config文件中配置(见config.js or config.mjs or config.mts).</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>生成的文件结构</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>├─ .vitepress</span></span>
<span class="line"><span>│  └─ config.js or config.mjs</span></span>
<span class="line"><span>├─ api-examples.md</span></span>
<span class="line"><span>├─ markdown-examples.md</span></span>
<span class="line"><span>├─ index.md</span></span>
<span class="line"><span>├─ yournotes</span></span>
<span class="line"><span>├─ node_modules</span></span>
<span class="line"><span>└─ package.json and package-lock.json</span></span></code></pre></div><p>当你在当前目录下编辑好markdwon笔记后, 然后使用以下命令构建, 预览网页:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用docs:dev 脚本启动具有即时热更新的本地 dev 服务器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者用npx直接调用vitepress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 本地构建html文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预览构建的本地文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:preview</span></span></code></pre></div><h2 id="托管到github仓库" tabindex="-1">托管到GitHub仓库 <a class="header-anchor" href="#托管到github仓库" aria-label="Permalink to &quot;托管到GitHub仓库&quot;">​</a></h2><p>将<code>npm run docs:build</code>生成的文件上传到GitHub仓库, 启动GitHub Pages服务即可. 详见<a href="./git.html">git</a></p><h2 id="vitepress中拓展的markdown语法" tabindex="-1">vitepress中拓展的markdown语法 <a class="header-anchor" href="#vitepress中拓展的markdown语法" aria-label="Permalink to &quot;vitepress中拓展的markdown语法&quot;">​</a></h2><h3 id="自定义容器" tabindex="-1">自定义容器 <a class="header-anchor" href="#自定义容器" aria-label="Permalink to &quot;自定义容器&quot;">​</a></h3><p>容器的type有info tip warning danger details几种</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: info</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is an info box. 灰色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a tip. 紫色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a warning. 黄色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a dangerous warning. 红色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: details</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a details block. 灰色, 折叠框</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p>可以通过在容器的 &quot;type&quot; 之后附加文本来设置自定义容器的标题。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>::: details 点我查看代码</span></span>
<span class="line"><span>折叠内容</span></span>
<span class="line"><span>:::</span></span></code></pre></div><h3 id="其他markdown扩展" tabindex="-1"><a href="https://vitepress.dev/zh/guide/markdown" target="_blank" rel="noreferrer">其他Markdown扩展</a> <a class="header-anchor" href="#其他markdown扩展" aria-label="Permalink to &quot;[其他Markdown扩展](https://vitepress.dev/zh/guide/markdown)&quot;">​</a></h3><h2 id="node-js和npm的简单介绍" tabindex="-1">node.js和npm的简单介绍 <a class="header-anchor" href="#node-js和npm的简单介绍" aria-label="Permalink to &quot;node.js和npm的简单介绍&quot;">​</a></h2><p>Node.js是一个 JavaScript 运行时环境, 能够让 JavaScript 独立运行, 实现一些网页浏览器之外的事情，比如创建服务器、操作文件、连接数据库等. 原本JavaScript 主要是用来做网页的交互效果, Node.js 使其有了更强大的功能，可以用来开发服务器端的应用程序、命令行工具，甚至是桌面应用程序等.</p><p>npm（Node Package Manager）是 Node.js 的默认包管理工具, 仓库中包含了各种能够实现特定功能的 JavaScript 代码包, 使用npm命令可以方便地下载包和处理包之间地依赖关系.</p><p>例如前面所述的静态网站生成工具 Vitepress, docsify 和 Hexo 都可以通过npm命令进行快速安装.</p><p>官网: <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm</a>, 可以查询包和文档</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初始化项目, 该命令会引导你创建一个 package.json 文件，这个文件记录了项目的元数据和依赖信息。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 --save-dev 选项安装的包会被添加到 devDependencies 字段</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 若项目目录下已经存在 package.json 文件，执行此命令会根据文件中记录的依赖信息，安装所有依赖包</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新\\删除依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行脚本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">script-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看包信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看安装的包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre></div><h3 id="一些好用的包" tabindex="-1">一些好用的包 <a class="header-anchor" href="#一些好用的包" aria-label="Permalink to &quot;一些好用的包&quot;">​</a></h3><h4 id="marp-cli" tabindex="-1">marp-cli <a class="header-anchor" href="#marp-cli" aria-label="Permalink to &quot;marp-cli&quot;">​</a></h4><p>marp-cli 可以轻松地将 Marp / Marpit Markdown 文件转换为静态 HTML / CSS，PDF，PowerPoint 文档和图像。</p><ul><li>GitHub: <a href="https://github.com/marp-team/marp-cli" target="_blank" rel="noreferrer">@marp-team/marp-cli</a></li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @marp-team/marp-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">marp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slide.md</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 默认在当前目录下生成html文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成pdf和ppt文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">marp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slide.md</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slide.pdf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">marp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slide.md</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slide.pptx</span></span></code></pre></div><p>slide.md文件示例</p><div class="language-slide.md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">slide.md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>---</span></span>
<span class="line"><span>theme: gaia</span></span>
<span class="line"><span>_class: lead</span></span>
<span class="line"><span>paginate: true</span></span>
<span class="line"><span>backgroundColor: #fff</span></span>
<span class="line"><span>backgroundImage: url(&#39;https://marp.app/assets/hero-background.svg&#39;)</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>![bg left:40% 80%](https://marp.app/assets/marp.svg)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># **Marp**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Markdown Presentation Ecosystem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://marp.app/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span># How to write slides</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Split pages by horizontal ruler (\`---\`). It&#39;s very simple! :satisfied:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span># Slide 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foobar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Slide 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foobar</span></span></code></pre></div><h4 id="md-to-pdf" tabindex="-1">md-to-pdf <a class="header-anchor" href="#md-to-pdf" aria-label="Permalink to &quot;md-to-pdf&quot;">​</a></h4><p>md-to-pdf 使用 Marked 将 markdown 转换为 html，使用 Puppeteer（无头 Chromium）将 html 进一步转换为 pdf.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> md-to-pdf</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装chrome浏览器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> puppeteer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> browsers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chrome</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 为chrome浏览器安装中文字体</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noto-fonts-cjk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noto-fonts-emoji</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用: 在当前目录生成同名的pdf文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">md-to-pdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> markdownfilename.md</span></span></code></pre></div>`,36)]))}const g=a(l,[["render",e]]);export{o as __pageData,g as default};
