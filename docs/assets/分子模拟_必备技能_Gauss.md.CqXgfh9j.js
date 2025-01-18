import{_ as s,c as n,a2 as e,o as i}from"./chunks/framework.YPpNXepj.js";const l="/assets/Pasted-image-20240824105926.CkJrRfH5.png",g=JSON.parse('{"title":"概述","description":"","frontmatter":{},"headers":[],"relativePath":"分子模拟/必备技能/Gauss.md","filePath":"分子模拟/必备技能/Gauss.md","lastUpdated":null}'),t={name:"分子模拟/必备技能/Gauss.md"};function r(o,a,p,c,u,h){return i(),n("div",null,a[0]||(a[0]=[e('<div class="tip custom-block"><p class="custom-block-title">目标</p><p>安装并使用最流行的精确量子化学计算软件</p></div><h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><ul><li>Gaussian是一款功能非常强大的量子化学综合软件包，基于半经验计算和从头计算。主要对象：分子、团簇等孤立体系。体系大小：几个至几十个、几百个原子。</li><li>权威性：在计算化学领域具有重要地位，被广泛用于学术研究和工业应用</li><li>精确性：Gaussian采用完整的数学和化学方法，能够提供精确、可靠的结果，是其他电子结构程序的参考标准。</li><li>GaussView：GaussView是Gaussian的图形建模和结果显示界面，是Gaussian的前端和后台使用的辅助工具，是独立模块。Gaussian是运算程序，GaussView是视图界面程序，后者可以图形化前者的输入/输出运算文件。GaussView内设Gaussian的链接，只有安装了两者，且在同一个目录中，可直接从GaussView中调用Gaussian进行计算。</li><li>GaussView可以用来创建高斯输入文件 .gif</li><li>能量计算与结构优化原理：通过各种近似去找到Schrödinger方程的解，而不同的近似方法就对应了不同的精度，这些理论方法也称为 <s>姿势</s> 理论水平（Levels of Theory）。</li><li>理论水平（Levels of Theory）：Gaussian针对于不同大小的体系，可以选用不同的方法，如使用牛顿力学的分子力学方法（<strong>MM2、UFF</strong>）、半经验方法（<strong>PM6、AM1</strong>）、Hartree-Fock理论（<strong>HF</strong>）、Møller-Plesset微扰理论（<strong>MP2、MP4</strong>）、耦合簇理论（<strong>CCSD(T)</strong>）、密度泛函理论DFT（<strong>B3LYP、APFD、M06、CAM-B3LYP</strong>）等等。</li><li>基组（Basis Set）：基组是量子力学用来描述分子波函数的一系列数学函数。基组将电子限制在特定的空间区域之中，是由原子轨道的概念发展而来。常见的基组包括：最小基组，劈裂价键基组（极化基组，弥散基组），以及涉及到电子相关作用的高角动量基组。 <ul><li><img src="'+l+`" alt="alt text"></li></ul></li></ul><h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><ul><li>gaussian既可以在Linux也可以在Windows安装，Windows安装更加简单，且win版有图形化界面，更适合新手。</li><li>#商业软件，提供网络资源&gt;&gt;<a href="https://pan.baidu.com/s/13CJkYA39hYO8a5AU3p3Qkw?pwd=jbnv" target="_blank" rel="noreferrer">百度网盘</a>&lt;&lt;</li></ul><h2 id="windows上安装" tabindex="-1">Windows上安装 <a class="header-anchor" href="#windows上安装" aria-label="Permalink to &quot;Windows上安装&quot;">​</a></h2><ul><li>先安装 Gaussian 09W 再安装 GaussView 5.0</li><li>Gaussian 09W 和 GaussView 5.0 要安装在同一文件夹，不要写中文路径</li><li>安装步骤根据随附的pdf操作即可</li></ul><h1 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h1><h2 id="认识-gif文件" tabindex="-1">认识 .gif文件 <a class="header-anchor" href="#认识-gif文件" aria-label="Permalink to &quot;认识 .gif文件&quot;">​</a></h2><ul><li>高斯输入文件在关键词部分，不区分大小写，并且可以适当缩减，只要不产生歧义</li></ul><details class="details custom-block"><summary>高斯输入文件示例</summary><div class="language-.gif vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.gif</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>%mem=3GB</span></span>
<span class="line"><span>%nproc=6</span></span>
<span class="line"><span>%chk=C:\\Users\\Administrator\\Desktop\\Methoxyacetic_acid.chk</span></span>
<span class="line"><span># hf/6-31g* opt freq pop=mk iop(6/33=2,6/42=6,6/50=1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0 1</span></span>
<span class="line"><span> O    -1.33600000   -0.38800000   -0.00900000</span></span>
<span class="line"><span> O     2.01000000    0.89200000   -0.00800000</span></span>
<span class="line"><span> O     1.24500000   -1.25300000    0.00300000</span></span>
<span class="line"><span> C    -0.32000000    0.60600000    0.01200000</span></span>
<span class="line"><span> C     1.03300000   -0.05000000    0.00300000</span></span>
<span class="line"><span> C    -2.63300000    0.19200000   -0.00100000</span></span>
<span class="line"><span> H    -0.40800000    1.23800000   -0.87700000</span></span>
<span class="line"><span> H    -0.41100000    1.20400000    0.92500000</span></span>
<span class="line"><span> H    -2.78300000    0.78400000    0.90800000</span></span>
<span class="line"><span> H    -3.37100000   -0.61400000   -0.01800000</span></span>
<span class="line"><span> H    -2.77900000    0.81800000   -0.88600000</span></span>
<span class="line"><span> H     2.90500000    0.49100000   -0.01500000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>C:\\Users\\Administrator\\Desktop\\CMC_ini.gesp  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>C:\\Users\\Administrator\\Desktop\\CMC.gesp</span></span></code></pre></div></details><p>从上到下依次是：</p><ol><li>基本设置：%标识 <ul><li>内存、核数、检查点文件输出位置</li></ul></li><li>计算关键词：#标识 <ul><li>基组、计算任务（opt优化、freq振动分析、）……</li><li><code>Pop=MK</code>是生成Antechamber可用的gesp文件的关键词</li><li><code>iop(6/33=2)</code>是进行RESP Fitting并输出到Gaussian的.log文件。</li><li><code>iop(6/42=6)</code>是指定精度的关键字之一。</li><li><code>iop(6/50=1)</code>是Gaussian 09 C.01之后推荐的独立于高斯输出文件的resp文件格式。在antechamber中称为&quot;gesp&quot;，使用时需要在高斯输入文件末尾指定单独gesp的文件名称。</li><li>注意：Gaussian 09B.01版本（可能还有G09A，没有该版本不知道）“误删”了RESP Fitting的代码，所以以上关键字没一个管用。 Gaussian 09C.01及后续版本复了误删的代码并且加上了gesp的代码，可以使用。</li><li>详细参考：<a href="https://gaussian.com/overlay6/#iop_%286/42%29" target="_blank" rel="noreferrer">Overlay 6 | Gaussian.com</a></li></ul></li><li>结构信息： <ul><li>分子名</li><li>电荷 自旋多重度</li><li>原子坐标</li><li>键连关系</li></ul></li><li>输出控制</li><li>文件末尾至少有两个空行，防止报错</li></ol><blockquote><p>注意：</p><ol><li>在win版下，用gview直接提交的任务，输出默认是.log。用Gaussian打开的输入文件计算，默认输出.out。</li><li>输出文件记得指定输出路径，若不指定路径会默认输出到安装目录下的 Scratch文件夹。</li><li>Scratch文件夹：‌高斯Scratch文件夹‌是一个专门用于Gaussian计算的临时文件夹，用于存放计算过程中产生的临时文件。</li></ol></blockquote><h1 id="拓展阅读" tabindex="-1">拓展阅读 <a class="header-anchor" href="#拓展阅读" aria-label="Permalink to &quot;拓展阅读&quot;">​</a></h1><ul><li><a href="https://thuchemst.github.io/2016/09/22/gaussian-introduction/" target="_blank" rel="noreferrer">Gaussian入门 - 清化科协 (thuchemst.github.io)</a></li><li><a href="https://www.cnblogs.com/jszd/p/14163254.html" target="_blank" rel="noreferrer">使用gaussian和antechamber拟合RESP电荷过程 - 计算之道 - 博客园 (cnblogs.com)</a></li><li><a href="https://blog.csdn.net/weixin_42486623/article/details/129055384" target="_blank" rel="noreferrer">使用gaussian和antechamber拟合RESP电荷过程_antechamber使用高斯方法-CSDN博客</a></li><li><a href="https://blog.csdn.net/yu_bio/article/details/109645826" target="_blank" rel="noreferrer">利用高斯和Amber生成乙酰辅酶A配体的拓扑文件_em=gd3bj-CSDN博客</a></li><li><a href="https://blog.sciencenet.cn/home.php?mod=space&amp;uid=3366368&amp;do=blog&amp;id=1079996" target="_blank" rel="noreferrer">科学网—Gaussian高斯里计算resp电荷方法 - 徐扬的博文 (sciencenet.cn)</a></li><li><a href="http://bbs.keinsci.com/thread-2019-1-1.html" target="_blank" rel="noreferrer">用gaussian和AmberTool拟合resp电荷出现问题 - 量子化学 (Quantum Chemistry) - 计算化学公社 (keinsci.com)</a></li><li><a href="https://blog.sciencenet.cn/blog-548663-942117.html" target="_blank" rel="noreferrer">科学网—使用AmberTools+ACPYPE+Gaussian创建小分子GAFF力场的拓扑文件 - 李继存的博文 (sciencenet.cn)</a></li><li><a href="http://sobereva.com/439" target="_blank" rel="noreferrer">Gaussian的安装方法及运行时的相关问题 - 思想家公社的门口：量子化学·分子模拟·二次元 (sobereva.com)</a></li><li>官网：<a href="https://gaussian.com/" target="_blank" rel="noreferrer">Gaussian.com | Expanding the limits of computational chemistry</a></li></ul>`,16)]))}const m=s(t,[["render",r]]);export{g as __pageData,m as default};
