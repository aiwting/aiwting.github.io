import{_ as s,c as n,a2 as e,o as l}from"./chunks/framework.YPpNXepj.js";const u=JSON.parse('{"title":"引言","description":"","frontmatter":{},"headers":[],"relativePath":"分子模拟/必备技能/PyMol.md","filePath":"分子模拟/必备技能/PyMol.md","lastUpdated":null}'),p={name:"分子模拟/必备技能/PyMol.md"};function t(i,a,o,r,c,d){return l(),n("div",null,a[0]||(a[0]=[e(`<h1 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h1><h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><ul><li>Pymol现在由Schrödinger开发、支持和管理</li><li>分为企业版、政府和学术版、教育版，还有开源版。除了开源版和教育版外，其他都是需要付费购买的。</li><li>#开源 #跨平台</li><li>官网：<a href="https://www.pymol.org/" target="_blank" rel="noreferrer">PyMOL | pymol.org</a></li></ul><h2 id="使用技巧" tabindex="-1">使用技巧 <a class="header-anchor" href="#使用技巧" aria-label="Permalink to &quot;使用技巧&quot;">​</a></h2><ul><li>对象: 右窗口的一行结构表示一个对象(object).</li><li>插件: 菜单&quot;Plugin&quot;可以安装丰富的插件, 以绘制复杂的图形或额外的功能</li><li>移动标签: <code>edit</code>进入编辑模式然后选择 Mouse &gt;&quot;3 Button Editing&quot; (或点击右下角mode进入) &gt;按住ctrl再用左键拖动标签.</li><li>导出图片: 右上角 &gt;Draw/Ray</li></ul><h2 id="一些命令操作" tabindex="-1">一些命令操作 <a class="header-anchor" href="#一些命令操作" aria-label="Permalink to &quot;一些命令操作&quot;">​</a></h2><div class="language-pymol vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">pymol</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//设置C原子颜色</span></span>
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
<span class="line"><span>com sele,object=objectname</span></span></code></pre></div><h2 id="参考阅读" tabindex="-1">参考阅读 <a class="header-anchor" href="#参考阅读" aria-label="Permalink to &quot;参考阅读&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/qq_37126941/article/details/115793062" target="_blank" rel="noreferrer">使用PyMOL绘制蛋白与配体分子结合模式图_pymol如何显示结合位点-CSDN博客</a></li></ul>`,9)]))}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
