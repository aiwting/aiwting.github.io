import{_ as s,c as n,o as e,ag as l}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"PyMol","description":"","frontmatter":{},"headers":[],"relativePath":"分子模拟/必备技能/PyMol.md","filePath":"分子模拟/必备技能/PyMol.md","lastUpdated":null}'),p={name:"分子模拟/必备技能/PyMol.md"};function t(i,a,o,c,r,d){return e(),n("div",null,a[0]||(a[0]=[l(`<h1 id="pymol" tabindex="-1">PyMol <a class="header-anchor" href="#pymol" aria-label="Permalink to &quot;PyMol&quot;">​</a></h1><h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><ul><li>Pymol现在由Schrödinger开发、支持和管理</li><li>分为企业版、政府和学术版、教育版，还有开源版。除了开源版和教育版外，其他都是需要付费购买的。</li><li>#开源 #跨平台</li><li>官网：<a href="https://www.pymol.org/" target="_blank" rel="noreferrer">PyMOL | pymol.org</a></li></ul><h2 id="使用技巧" tabindex="-1">使用技巧 <a class="header-anchor" href="#使用技巧" aria-label="Permalink to &quot;使用技巧&quot;">​</a></h2><ul><li>显示氢键： <code>Action -&gt; preset -&gt;technical</code></li><li>显示静电势： <code>Action -&gt; generate -&gt; vaccum electrostatics -&gt; Protein contact protential (local)</code></li><li>测量两个原子之间的距离，一般来讲氢键要求的距离要短于3.5埃 <code>wizard-&gt;measurement</code></li><li>显示序列窗口，可以快速的选择氨基酸残基、水分子、配体分子、辅因子等<code>Display -&gt; Sequence</code></li><li>结构叠合：同时导入多个结构，点击叠合目标对象后的“A -&gt; align -&gt; all to this（*/CA）”即可基于序列进行结构叠合</li><li>对象: 右窗口的一行结构表示一个对象(object).</li><li>插件: 菜单&quot;Plugin&quot;可以安装丰富的插件, 以绘制复杂的图形或额外的功能</li><li>移动标签: <code>edit</code>进入编辑模式然后选择 <code>Mouse &gt;&quot;3 Button Editing&quot;</code> (或点击右下角mode进入) &gt;按住ctrl再用左键拖动标签.</li><li>导出图片: 右上角 &gt;Draw/Ray</li></ul><details class="details custom-block"><summary>PyMol中一些操作的命令</summary><div class="language-pymol vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">pymol</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//设置C原子颜色</span></span>
<span class="line"><span>color gray, objectname &amp; name *C</span></span>
<span class="line"><span>//设置α螺旋颜色</span></span>
<span class="line"><span>color magenta, ss h</span></span>
<span class="line"><span>//将多个对象合成新的组</span></span>
<span class="line"><span>group groupname, object1 object2 object3 ...</span></span>
<span class="line"><span>//设置某个对象stick模型, 卡通模型的透明度</span></span>
<span class="line"><span>set stick_transparency, 0.9, objectname</span></span>
<span class="line"><span>set cartoon_transparency, 0.9, protein,</span></span>
<span class="line"><span>//设置球模型大小, 透明度</span></span>
<span class="line"><span>set sphere_scale, 0.3, obj01</span></span>
<span class="line"><span>set sphere_transparency, 0.4, obj01</span></span>
<span class="line"><span>//设置线条</span></span>
<span class="line"><span>set dash_gap, 0.2</span></span>
<span class="line"><span>set dash_width, 5</span></span>
<span class="line"><span>set line_width, 5</span></span>
<span class="line"><span>//计算质心位置</span></span>
<span class="line"><span>centerofmass sele</span></span>
<span class="line"><span>//center_of_mass 插件, 计算选择原子的质心位置</span></span>
<span class="line"><span>com sele,object=objectname</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rotate axis,angle,object-name,state     //旋转</span></span>
<span class="line"><span>translate vector,object-name,state      //移动</span></span>
<span class="line"><span>// 设置显示小数后2位</span></span>
<span class="line"><span>set label_distance_digits, 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>creat complex, Aname Bname   //合并两个对象A B，比如合并配体与蛋白为一个对象，方便保存为复合物结构。</span></span>
<span class="line"><span>align Aname,Bname    //可以计算两个对象间的RMSD</span></span></code></pre></div></details><h2 id="参考阅读" tabindex="-1">参考阅读 <a class="header-anchor" href="#参考阅读" aria-label="Permalink to &quot;参考阅读&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/qq_37126941/article/details/115793062" target="_blank" rel="noreferrer">使用PyMOL绘制蛋白与配体分子结合模式图_pymol如何显示结合位点-CSDN博客</a></li><li><a href="https://blog.csdn.net/yin1331102028yin/article/details/128827601" target="_blank" rel="noreferrer">pymol&amp;vmd相关_vmd和pymol对比-CSDN博客</a></li></ul>`,8)]))}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
