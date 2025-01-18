import{_ as s,c as n,a2 as p,o as l}from"./chunks/framework.YPpNXepj.js";const u=JSON.parse('{"title":"Amber programs","description":"","frontmatter":{},"headers":[],"relativePath":"分子模拟/背景知识/Amber.md","filePath":"分子模拟/背景知识/Amber.md","lastUpdated":null}'),e={name:"分子模拟/背景知识/Amber.md"};function i(o,a,t,r,c,d){return l(),n("div",null,a[0]||(a[0]=[p(`<div class="tip custom-block"><p class="custom-block-title">认识amber</p><p><strong>Amber</strong>，是一组用于模拟生物分子的分子力学力场；也是一套生物分子模拟程序。</p></div><h1 id="amber-programs" tabindex="-1">Amber programs <a class="header-anchor" href="#amber-programs" aria-label="Permalink to &quot;Amber programs&quot;">​</a></h1><p>Amber程序分为两部分：<a href="./../必备技能/ambertools.html">AmberTools</a> 和 Amber，AmberTools是免费的，Amber是收费的、提供学术版。</p><ul><li>Amber是一个完整的分子动力学模拟软件套件，提供了模拟引擎、力场参数化工具和分析工具等功能。</li><li>AmberTools是Amber软件套件的一部分，提供了一些额外的工具和实用程序，用于辅助分子模拟的前后处理。如构象生成、参数化、模型构建、能量计算、轨迹分析等</li><li>Amber全称Assisted Model Building with Energy Refinemegnt， 是由University of California, San Francisco的Kollman教授课题组开发的一套分子力学和分子动力学模拟软件，包括大约60个程序，如 sander. xleap, antechamber、ptraj、mm_pbsa和nmode等。</li><li>Amber可以用于生物大分子体系的分子力学计算和分子动力学模拟，也可以采用MM_PBSA和MM_GBSA方法研究受体和配体之间的结合自由能，还可进行量子力学和分子力学结合(QM/MM)计算。</li><li>Amber的优点是计算精度高，自定义新分子和新模型比较方便。缺点是计算效率低，速度慢</li></ul><h1 id="amber-force-fields" tabindex="-1">Amber Force Fields <a class="header-anchor" href="#amber-force-fields" aria-label="Permalink to &quot;Amber Force Fields&quot;">​</a></h1><ul><li>最初AMBER力场是专门为了计算蛋白质和核酸体系而开发的，计算其力场参数的数据均来自实验值。後来随著AMBER力场的广泛应用，包括Kollman在内的很多课题组对AMBER力场的内容不断进行丰富，逐渐开发出了一个可以用於生物大分子、有机小分子和高分子模拟计算的力场体系。</li><li>AMBER力场的优势在于对生物大分子的计算，其对小分子体系的计算结果常常不能令人满意。AMBER力场的势能函数形势较为简单，所需参数不多，计算量也比较小。主要适用于蛋白质和核酸体系、多糖。</li><li>对于不同的物质，amber有不同的力场，<a href="https://ambermd.org/AmberModels.php" target="_blank" rel="noreferrer">The Amber Force Fields (ambermd.org)</a><ul><li>a protein force field (recommended choice is ff14SB)</li><li>a DNA force field (recommended choice is OL15)</li><li>an RNA force field (recommended choice is OL3)</li><li>a carbohydrate force field (recommended choice is GLYCAM_06j)</li><li>a lipid force field (recommended choice is lipid17)</li><li>a water model with associated atomic ions (more variable); popular choices are spc/e, tip4pew, and OPC. Not needed if you are using an implicit solvent model.</li><li>a general force field, for organic molecules like ligands (recommended choice is gaff2)</li><li>other components (such as modified amino acids or nucleotides, other ions), as needed</li></ul></li></ul><h1 id="amber的文件" tabindex="-1">amber的文件 <a class="header-anchor" href="#amber的文件" aria-label="Permalink to &quot;amber的文件&quot;">​</a></h1><p>amber 的文件格式规范，在amber官网的 File Formats 页面可以找到各种文件的描述：<a href="https://ambermd.org/FileFormats.php" target="_blank" rel="noreferrer">Amber File Formats (ambermd.org)</a></p><h2 id="力场参数文件" tabindex="-1">力场参数文件 <a class="header-anchor" href="#力场参数文件" aria-label="Permalink to &quot;力场参数文件&quot;">​</a></h2><ul><li>在 ambertools 安装目录的/dat/leap目录下存放着力场相关文件，包括： <ul><li>拓扑参数文件格式(.prmtop,/.top/.parm7)</li><li>结构坐标（和速度）文件格式(.inpcrd/.restrt/.rst7)</li><li>轨迹文件格式(.mdcrd/.crd/.nc)</li><li>力场参数加载命令文件(leaprc.xxx.xx)</li><li>力场参数文件（.dat）</li><li>力场参数文件(.lib/.off)</li><li>力场参数文件(.prepi/.in/.prepin)</li><li>力场参数修改文件(frcmod)</li></ul></li><li>为了在 Leap 中添加参数集，需要一个 lib 文件和一个 frcmod 文件，leaprc 文件是调用推荐组合的预制脚本。</li><li>$AMBERHOME/dat/leap/ 目录下有四个文件夹，主要几类文件分别如下： <ul><li>list of leaprc files available - $AMBERHOME/dat/leap/cmd</li><li>list of lib/off files available - $AMBERHOME/dat/leap/lib</li><li>list of frcmod/dat files available - $AMBERHOME/dat/leap/parm</li><li>list of prepi/in/prepin files available - $AMBERHOME/dat/leap/prep</li></ul></li></ul><h3 id="leaprc" tabindex="-1">leaprc.* <a class="header-anchor" href="#leaprc" aria-label="Permalink to &quot;leaprc.*&quot;">​</a></h3><p>/cmd 文件夹下的力场参数加载命令文件 leaprc.GLYCAM_06j-1 从上到下内容依次是：</p><ul><li>元素及其对应的原子类型</li><li>加载原子类型及其杂化信息 .dat 文件</li><li>加载主力场参数及残基参数 .prep .lib</li><li>定义匹配PDB文件中的氨基酸名</li><li>HIS残基的质子化处理（此力场没有）</li><li>加载溶剂及离子</li></ul><div class="language-terminal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">terminal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>addAtomTypes {</span></span>
<span class="line"><span>        { &quot;C&quot;   &quot;C&quot; &quot;sp2&quot; }</span></span>
<span class="line"><span>        { &quot;Cg&quot;  &quot;C&quot; &quot;sp3&quot; }</span></span>
<span class="line"><span>        { &quot;H&quot;   &quot;H&quot; &quot;sp3&quot; }</span></span>
<span class="line"><span>        { &quot;H1&quot;  &quot;H&quot; &quot;sp3&quot; }</span></span>
<span class="line"><span>     …………</span></span>
<span class="line"><span>        { &quot;NT&quot;  &quot;N&quot; &quot;sp3&quot; }</span></span>
<span class="line"><span>        { &quot;N3&quot;  &quot;N&quot; &quot;sp3&quot; } </span></span>
<span class="line"><span>        { &quot;Oh&quot;  &quot;O&quot; &quot;sp3&quot; }</span></span>
<span class="line"><span>        { &quot;Os&quot;  &quot;O&quot; &quot;sp3&quot; }</span></span>
<span class="line"><span>        { &quot;S&quot;   &quot;S&quot; &quot;sp3&quot; }</span></span>
<span class="line"><span>        { &quot;P&quot;   &quot;P&quot; &quot;sp3&quot; } </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>glycam_06 = loadamberparams GLYCAM_06j.dat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>loadamberprep GLYCAM_06j-1.prep</span></span>
<span class="line"><span></span></span>
<span class="line"><span>loadOff GLYCAM_amino_06j_12SB.lib</span></span>
<span class="line"><span>loadOff GLYCAM_aminoct_06j_12SB.lib</span></span>
<span class="line"><span>loadOff GLYCAM_aminont_06j_12SB.lib</span></span>
<span class="line"><span></span></span>
<span class="line"><span>addPdbResMap { </span></span>
<span class="line"><span>        { 0 &quot;OLS&quot; &quot;NOLS&quot; } { 1 &quot;OLS&quot; &quot;COLS&quot; }</span></span>
<span class="line"><span>        { 0 &quot;OLT&quot; &quot;NOLT&quot; } { 1 &quot;OLT&quot; &quot;COLT&quot; }</span></span>
<span class="line"><span>        { 0 &quot;OLP&quot; &quot;NOLP&quot; } { 1 &quot;OLP&quot; &quot;COLP&quot; }</span></span>
<span class="line"><span>        { 0 &quot;HYP&quot; &quot;NHYP&quot; } { 1 &quot;HYP&quot; &quot;CHYP&quot; }</span></span>
<span class="line"><span>        { 0 &quot;NLN&quot; &quot;NNLN&quot; } { 1 &quot;NLN&quot; &quot;CNLN&quot; }</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>loadOff solvents.lib  # solvents </span></span>
<span class="line"><span>HOH = TP3  # set default water model</span></span>
<span class="line"><span>WAT = TP3 </span></span>
<span class="line"><span>loadOff atomic_ions.lib  # load ions library</span></span>
<span class="line"><span>ionsff = loadamberparams frcmod.ionsjc_tip3p  # set ion params for TIP3P</span></span></code></pre></div><h3 id="dat" tabindex="-1">*.dat <a class="header-anchor" href="#dat" aria-label="Permalink to &quot;\\*.dat&quot;">​</a></h3><p>/pram 文件夹下力场参数文件 GLYCAM_06j.dat 从上到下内容依次是：</p><ul><li>描述信息（第一行）</li><li>原子的类型(符号 atom symbol)，以及质量、化学环境；对应gromacs的.atp文件</li><li>亲水原子符号</li><li>键长参数</li><li>键角参数</li><li>二面角参数</li><li>不适当的二面角参数</li><li>氢键 10-12势参数</li><li>非键合 6-12势参数的等价原子符号</li><li>非键合 6-12势参数</li></ul><div class="language-terminal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">terminal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GLYCAM_06_H PARAMETERS (FOR AMBER 11.0, RESP 0.010), COPYRIGHT CCRC 2011</span></span>
<span class="line"><span>CT 12.01                 sp3 C aliphatic</span></span>
<span class="line"><span>2C 12.01                 sp3 aliphatic C with two (duo) heavy atoms copied from ff12SB</span></span>
<span class="line"><span>H  1.008                 H Bonded to nitrogen atoms</span></span>
<span class="line"><span>H1 1.008                 H aliph. bond. to C with 1 electrwd. groups</span></span>
<span class="line"><span>…………</span></span>
<span class="line"><span></span></span>
<span class="line"><span>C   H   Ho  Ng  NT  N3  O   Oh  Os  P   O2 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Cg-N   337.0    1.450       Copy of Cg-Ng from GLYCAM06</span></span>
<span class="line"><span>CT-Os  320.0    1.410       Copy of CT-OS from parm10.dat</span></span>
<span class="line"><span>2C-Os  320.0    1.410       Copy of CT-OS from parm10.dat</span></span>
<span class="line"><span>…………</span></span>
<span class="line"><span>H -N -Cg     30.00    118.00   Copy of H -Ng-Cg from GLYCAM06</span></span>
<span class="line"><span>Os-Cg-N     106.90    107.90   Copy of Os-Cg-Ng from GLYCAM06</span></span>
<span class="line"><span>Cg-Cg-N      80.00    109.70   Copy of CT-CT-N  from parm99.dat</span></span>
<span class="line"><span>…………</span></span>
<span class="line"><span>Os-Cj-Cj-Cg   1  -13.00        0.0      2    SCEE=1.0 SCNB=1.0 copy of Os-Ck-Ck-Cg</span></span>
<span class="line"><span>Os-Ck-Ck-Cg   1  -13.00        0.0      2    SCEE=1.0 SCNB=1.0 Lipids, from 1-propenylmethylether</span></span>
<span class="line"><span>Ck-Cj-Cj-Ha   1  -15.00        0.0      2    SCEE=1.0 SCNB=1.0 copy of Cj-Ck-Ck-Ha</span></span>
<span class="line"><span>…………</span></span></code></pre></div><h3 id="frcmod-或-frcmod" tabindex="-1">frcmod.* 或 *frcmod <a class="header-anchor" href="#frcmod-或-frcmod" aria-label="Permalink to &quot;frcmod.* 或 \\*frcmod&quot;">​</a></h3><p>也在 /pram 文件夹下，frcmod.<em>文件与 *.dat文件的格式基本相同。可以像标准的 *.dat文件一样读入tleap，将 *.dat文件中的默认参数与 frcmod.</em> 中的新参数合并。 frcmod.ff14SB 从上到下内容依次是：</p><div class="language-terminal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">terminal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ff14SB protein backbone and sidechain parameters</span></span>
<span class="line"><span>MASS</span></span>
<span class="line"><span>CO 12.01         0.616  !            sp2 C carboxylate group </span></span>
<span class="line"><span>2C 12.01         0.878               sp3 aliphatic C with two (duo) heavy atoms</span></span>
<span class="line"><span>3C 12.01         0.878               sp3 aliphatic C with three (tres) heavy atoms</span></span>
<span class="line"><span>C8 12.01         0.878               sp3 aliphatic C basic AA side chain</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BOND</span></span>
<span class="line"><span>C -2C  317.0    1.5220</span></span>
<span class="line"><span>C*-2C  317.0    1.4950</span></span>
<span class="line"><span>…………</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ANGL</span></span>
<span class="line"><span>N -C -2C    70.0      116.60</span></span>
<span class="line"><span>O -C -2C    80.0      120.40</span></span>
<span class="line"><span>…………</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DIHE</span></span>
<span class="line"><span>C8-CX-N -C    1    0.000         0.0            -4.    phi&#39;</span></span>
<span class="line"><span>C8-CX-N -C    1    0.800         0.0            -3.</span></span>
<span class="line"><span>…………</span></span>
<span class="line"><span></span></span>
<span class="line"><span>IMPR</span></span>
<span class="line"><span>X -O2-CO-O2        10.5          180.          2.</span></span>
<span class="line"><span>2C-O -C -OH        10.5          180.          2.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NONB</span></span>
<span class="line"><span>  2C          1.9080  0.1094             Spellmeyer</span></span>
<span class="line"><span>  3C          1.9080  0.1094             Spellmeyer</span></span></code></pre></div><h3 id="prep-或-prepin-或-in" tabindex="-1">*.prep 或 *prepin 或 *in <a class="header-anchor" href="#prep-或-prepin-或-in" aria-label="Permalink to &quot;\\*.prep 或 \\*prepin 或 \\*in&quot;">​</a></h3><p>/prep 文件夹下拓扑数据库文件 GLYCAM_06J-1.prep 记录了各种残基信息：</p><div class="language-terminal vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">terminal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>4ZB  INT 0     ;残基名 内坐标 二进制输出</span></span>
<span class="line"><span>CORRECT OMIT DU BEG      ;内坐标有着正确的顺序 删除DU原子 从头开始</span></span>
<span class="line"><span>-1.0000        ;截断值用于环闭合处理</span></span>
<span class="line"><span> 1 DUMM DU  M  0 -1 -2  0.000   0.000    0.00     0.0000    ;虚拟原子，用来定义残基的空间轴 </span></span>
<span class="line"><span> 2 DUMM DU  M  1  0 -1  0.500   0.000    0.00     0.0000    ;虚拟原子</span></span>
<span class="line"><span> 3 DUMM DU  M  2  1  0  1.296  74.264    0.00     0.0000    ;虚拟原子</span></span>
<span class="line"><span> ;编号 原子名-原子符号 拓扑连接类型 键-角-二面角 键平衡值-角值-二面角值 电荷</span></span>
<span class="line"><span> 4 C1   Cg  M  3  2  1 23.413  98.374 -136.24     0.2510</span></span>
<span class="line"><span> 5 H1   H2  E  4  3  2  1.091  70.111  -94.11     0.0000</span></span>
<span class="line"><span> 6 O5   Os  M  4  3  2  1.460 133.490  168.28    -0.4130</span></span>
<span class="line"><span> …………</span></span>
<span class="line"><span>21 H2O  Ho  E 20 18 14  0.962 106.072  172.93     0.4220</span></span>
<span class="line"><span>22 O4   Os  M 12  7  6  1.449 108.907 -172.84    -0.4980</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LOOP      ;环闭合处</span></span>
<span class="line"><span>C2 C1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DONE</span></span></code></pre></div><p>注意：prepi和prepc分别是内坐标和卡迪尔坐标系的prep文件, 是以前程序prep使用的 (现已由leap整合),可由antechamber或prepgen产生, 现常用于非标准残基读入和处理</p><h3 id="lib" tabindex="-1">*.lib <a class="header-anchor" href="#lib" aria-label="Permalink to &quot;\\*.lib&quot;">​</a></h3><ul><li>/lib 文件夹下的 .lib 文件记录了氨基酸残基的符号及每个残基的描述</li><li>例如 GLYCAM_animo_06j_12SB.lib 文件，为了将聚糖与蛋白质连接起来，必须加载含有修饰氨基酸残基（Ser、Thr、Hyp 和 Asn）的lib。要使用 ff14SB 构建糖蛋白，必须加载 <code>GLYCAM_amino_06j_12SB.lib</code> <code>GLYCAM_aminont_06j_12SB.lib</code> 和 <code>GLYCAM_aminoct_06j_12SB.lib</code>，并且还必须加载所需的蛋白质力场。</li></ul><h2 id="模拟相关文件" tabindex="-1">模拟相关文件 <a class="header-anchor" href="#模拟相关文件" aria-label="Permalink to &quot;模拟相关文件&quot;">​</a></h2><ul><li>prmtop文件，又名parm7，top，包含分子，原子名称、种类，电荷，键关系，键参数和非键参数信息</li><li>.prmtop 和 .prmcrd：topology and coordinate files，可以由 LEaP 程序生成。</li><li>.top 和 .crd</li><li>.inpcrd：input initial coordinate file，包含了原子的所有坐标，以及模拟盒子的形状。</li><li>.mdcrd：轨迹文件</li></ul><h1 id="拓展阅读" tabindex="-1">拓展阅读 <a class="header-anchor" href="#拓展阅读" aria-label="Permalink to &quot;拓展阅读&quot;">​</a></h1><ul><li><a href="https://ambermd.org/" target="_blank" rel="noreferrer">Amber官网(ambermd.org)</a></li><li><a href="https://ambermd.org/tutorials/" target="_blank" rel="noreferrer">Amber Tutorials (ambermd.org)</a></li><li><a href="http://tanglab.pku.edu.cn/2022/12/27/R&amp;D/2022/20221227-AmberTutorial0/" target="_blank" rel="noreferrer">轻松上手Amber&amp;AmberTools|Tanglab@PKU</a></li><li><a href="https://jerkwin.github.io/2018/01/17/AMBER%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8BB0-AMBER%E5%88%86%E5%AD%90%E5%8A%A8%E5%8A%9B%E5%AD%A6%E6%A8%A1%E6%8B%9F%E5%85%A5%E9%97%A8/#amber%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8Bb0" target="_blank" rel="noreferrer">AMBER基础教程|Jerkwin</a></li><li><a href="https://fy-han.github.io/tags/AMBER/" target="_blank" rel="noreferrer">AMBER入门进阶|Hexo</a></li></ul>`,31)]))}const b=s(e,[["render",i]]);export{u as __pageData,b as default};
