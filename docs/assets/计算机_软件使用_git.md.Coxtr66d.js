import{_ as i,c as a,ag as t,o as n}from"./chunks/framework.mHuDn-wg.js";const g=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"计算机/软件使用/git.md","filePath":"计算机/软件使用/git.md","lastUpdated":null}'),l={name:"计算机/软件使用/git.md"};function h(e,s,p,k,r,F){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><ul><li>git是个分布式版本管理工具，与集中式版本管理工具svn相反</li><li>windows平台, 像安装普通软件一样安装, <a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">官网</a></li><li>linux平台, 使用包管理器安装, <code>sudo pacman -S git</code></li><li>git有GUI, 但主要使用bash终端</li></ul><h2 id="基本配置" tabindex="-1">基本配置 <a class="header-anchor" href="#基本配置" aria-label="Permalink to &quot;基本配置&quot;">​</a></h2><ul><li>linux平台, git配置文件<code>~/.gticonfig</code></li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;你的用户名&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;你的邮箱地址&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初始化</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 克隆</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://仓库地址</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加到暂存区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交-本地</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;注释&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 管理远程仓库, origin是仓库默认的别名, 仓库的完整名称是仓库地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://仓库地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://仓库地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repositoryname</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rename</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oldname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newname</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拉取最新的远程仓库到本地</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送-远程(以前主分支叫master, 现在叫main)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看当前状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre></div><ul><li>设置git代理</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://proxyuser:proxypwd@proxy.server.com:8080</span></span></code></pre></div><h2 id="远程仓库" tabindex="-1">远程仓库 <a class="header-anchor" href="#远程仓库" aria-label="Permalink to &quot;远程仓库&quot;">​</a></h2><ul><li>GitHub</li><li>远程仓库地址有两种: HTTPS, SHH</li></ul><h2 id="通过code连接github" tabindex="-1">通过code连接GitHub <a class="header-anchor" href="#通过code连接github" aria-label="Permalink to &quot;通过code连接GitHub&quot;">​</a></h2><ul><li>code的&quot;源代码管理&quot;支持git功能, 可以通过鼠标完成大部分操作而无需使用命令</li><li>登陆github账号即可</li></ul><h2 id="通过ssh连接github" tabindex="-1"><a href="https://blog.csdn.net/qq_35206244/article/details/97698815" target="_blank" rel="noreferrer">通过SSH连接GitHub</a> <a class="header-anchor" href="#通过ssh连接github" aria-label="Permalink to &quot;[通过SSH连接GitHub](https://blog.csdn.net/qq_35206244/article/details/97698815)&quot;">​</a></h2><ul><li>生成SSH <code>ssh-keygen -t rsa -C &quot;自己的邮箱&quot;</code></li><li>SSH文件存放在C:/User/用户/.ssh下，id_rsa为私钥，id_rsa.pub为公钥。</li><li>打开id_rsa.pub文件，全选，复制全文</li><li>github &gt;账户 &gt;setting &gt;选择SSH and GPGkeys，New SSH key &gt;自定义一个title，然后粘贴从公钥文件中拷贝的key</li><li>测试SSH连接 <code>ssh -T 邮箱</code></li><li>按照提示输入yes，回车，提示successfully之类的就说明SSH连接正常，github上的钥匙也会变成绿色</li></ul>`,13)]))}const o=i(l,[["render",h]]);export{g as __pageData,o as default};
