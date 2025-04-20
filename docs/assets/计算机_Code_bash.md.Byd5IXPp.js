import{_ as s,c as n,o as l,ag as e}from"./chunks/framework.DPDPlp3K.js";const u=JSON.parse('{"title":"bash概述","description":"","frontmatter":{},"headers":[],"relativePath":"计算机/Code/bash.md","filePath":"计算机/Code/bash.md","lastUpdated":null}'),p={name:"计算机/Code/bash.md"};function i(c,a,o,t,d,h){return l(),n("div",null,a[0]||(a[0]=[e(`<h1 id="bash概述" tabindex="-1">bash概述 <a class="header-anchor" href="#bash概述" aria-label="Permalink to &quot;bash概述&quot;">​</a></h1><ul><li><a href="https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_01_02.html" target="_blank" rel="noreferrer">bash的优点和特性</a></li><li>shell内置命令包含在shell本身中, 在shell程序内部实现, 不需要外部程序或者二进制文件来执行.</li><li>当执行脚本文件中的命令, bash将创建一个新的子bash, 当shell脚本中没有更多的行可供读取时，子shell终止。父shell将被唤醒并显示一个新的提示。</li><li>当bash启动时，它读取其配置文件 <ul><li><code>/etc/profile</code></li><li><code>~/.bash_profile</code></li><li><code>~/.bashrc</code></li></ul></li><li>Shell命令可以分为三组：shell函数，shell内置程序和系统目录中的现有命令。</li><li>Shell脚本由这些命令组成，这些命令按照shell语法进行排列。文件是逐行读取和执行的，并且应该具有逻辑结构。</li><li>构建块(building blocks)是组成脚本的基本单元, 包括基本命令, 语法, 函数, 参数...</li><li>命令的几种执行方式 <ul><li>添加执行权限<code>chmod +x script.sh</code></li><li><code>bash *.sh</code></li><li><code>source *.sh</code></li><li><code>cat *.sh | bash</code></li><li><code>bash &lt; *.sh</code></li><li>调试模式, 使用选项<code>-x</code></li></ul></li><li>环境变量: 查看当前有哪些变量<code>env</code>或<code>printenv</code></li></ul><h2 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h2><h3 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h3><ul><li>四种变量: String, Integer, Constant, Array variables</li><li>保留变量是指那些具有特殊用途或由系统自动管理的变量，对Shell的行为和环境有重要影响。用户不应直接修改这些变量</li><li>bash 仅支持一维数据, 用小括号表示: <code>array = (a b c)</code> ; 用中括号索引 <code>array[0]</code></li></ul><h3 id="条件语句" tabindex="-1">条件语句 <a class="header-anchor" href="#条件语句" aria-label="Permalink to &quot;条件语句&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if [ condition ]; then</span></span>
<span class="line"><span>  commands</span></span>
<span class="line"><span>elif [ condition ]; then</span></span>
<span class="line"><span>  commands</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>  commands</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>case variable in</span></span>
<span class="line"><span>  variable1)</span></span>
<span class="line"><span>    command1</span></span>
<span class="line"><span>    ;;</span></span>
<span class="line"><span>  variable2)</span></span>
<span class="line"><span>    command2</span></span>
<span class="line"><span>    ;;</span></span>
<span class="line"><span>  variable3)</span></span>
<span class="line"><span>    command3</span></span>
<span class="line"><span>    ;;</span></span>
<span class="line"><span>esac</span></span></code></pre></div><h3 id="循环语句" tabindex="-1">循环语句 <a class="header-anchor" href="#循环语句" aria-label="Permalink to &quot;循环语句&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>while [ condition ]; do</span></span>
<span class="line"><span>  commands</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for variable in list #list是要遍历的元素列表</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  commands</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for ((initialization; condition; increment)) #C语言风格, 不推荐使用</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    commands</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while condition #为真时执行</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    commands</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>until condition #为假时执行</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    commands</span></span>
<span class="line"><span>done</span></span></code></pre></div><ul><li><code>break</code>：用于跳出整个循环，结束循环的执行。</li><li><code>continue</code>：用于跳过当前循环的剩余部分，直接进入下一次循环。</li></ul><h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h3><ul><li>定义好函数后，只需使用函数名就可以调用它</li><li>在调用函数时, 在后面跟参数，可以向函数传递参数, 按照传递的顺序依次赋给函数内部的位置参数 $1、$2、$3</li><li><code>$0</code> 表示函数的名称</li><li><code>$#</code> 表示获取参数的个数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function name { #function 是一个关键字</span></span>
<span class="line"><span>  commands</span></span>
<span class="line"><span>  return value </span></span>
<span class="line"><span>#value 是一个介于 0 到 255 之间的整数</span></span>
<span class="line"><span>#如果省略 return 语句，函数将以最后一个命令的退出状态作为返回值。</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#另一种写法</span></span>
<span class="line"><span>function_name() {</span></span>
<span class="line"><span>  commands</span></span>
<span class="line"><span>  return value</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="常见命令" tabindex="-1">常见命令 <a class="header-anchor" href="#常见命令" aria-label="Permalink to &quot;常见命令&quot;">​</a></h2><p><code>expr</code> 用于对整数进行表达式计算、字符串操作和模式匹配等操作, 后面跟要计算的表达式, 结果会输出到标准输出。</p><div class="language-用法 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">用法</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>expr formula #整数运算</span></span>
<span class="line"><span>expr length string #计算字符串长度</span></span>
<span class="line"><span>expr index &quot;$str&quot; &quot;W&quot; #查找字符位置, 输出数字第几个</span></span></code></pre></div>`,16)]))}const b=s(p,[["render",i]]);export{u as __pageData,b as default};
