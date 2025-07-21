import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.Bw-5EFTY.js";const u=JSON.parse('{"title":"GROMACS概述","description":"","frontmatter":{},"headers":[],"relativePath":"分子模拟/必备技能/GROMACS概述.md","filePath":"分子模拟/必备技能/GROMACS概述.md","lastUpdated":null}'),l={name:"分子模拟/必备技能/GROMACS概述.md"};function t(i,a,r,o,c,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="gromacs概述" tabindex="-1">GROMACS概述 <a class="header-anchor" href="#gromacs概述" aria-label="Permalink to &quot;GROMACS概述&quot;">​</a></h1><p>什么是GROMACS?</p><p><em>GROMACS is a <strong>free and open-source</strong> software suite for high-performance molecular dynamics and output analysis.</em></p><p>GROMACS是一套功能齐全的程序，用于执行分子动力学模拟，即使用牛顿运动方程模拟具有数亿到数百万个粒子的系统的行为。<strong>它主要用于蛋白质、脂质和聚合物的研究</strong>，也可以应用于各种化学和生物学研究问题。</p><h2 id="gromacs的文件" tabindex="-1">GROMACS的文件 <a class="header-anchor" href="#gromacs的文件" aria-label="Permalink to &quot;GROMACS的文件&quot;">​</a></h2><p>gromacs各种文件的格式可以参考：</p><ul><li>官方文档：<a href="https://manual.gromacs.org/current/index.html" target="_blank" rel="noreferrer">GROMACS documentation</a></li><li>中文：<a href="https://jerkwin.github.io/GMX/GMXman-5/#561-%E6%AE%8B%E5%9F%BA%E6%95%B0%E6%8D%AE%E5%BA%93" target="_blank" rel="noreferrer">GROMACS中文手册|Jerkwin</a>，翻译不全, 版本落后, 不推荐</li></ul><h3 id="力场参数文件" tabindex="-1">力场参数文件 <a class="header-anchor" href="#力场参数文件" aria-label="Permalink to &quot;力场参数文件&quot;">​</a></h3><p>在 gromacs 安装目录的 <code>share/gromacs/top</code> 目录下存放着力场相关文件：包括各种 <code>.ff</code> 文件夹以及许多以 <code>.dat</code> 为扩展名的纯文本帮助文件。</p><h4 id="residuetypes-dat" tabindex="-1">residuetypes.dat <a class="header-anchor" href="#residuetypes-dat" aria-label="Permalink to &quot;residuetypes.dat&quot;">​</a></h4><p>记录了支持的残基种类：残基名 种类</p><div class="language-residuetypes.dat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">residuetypes.dat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GLY	Protein</span></span>
<span class="line"><span>ASP	Protein</span></span>
<span class="line"><span>DA	DNA</span></span>
<span class="line"><span>DG	DNA</span></span>
<span class="line"><span>DC	DNA</span></span>
<span class="line"><span>DT	DNA</span></span>
<span class="line"><span>SOL	Water</span></span>
<span class="line"><span>NA+	Ion</span></span>
<span class="line"><span>CL-	Ion</span></span>
<span class="line"><span>RGB	Cellulose</span></span>
<span class="line"><span>NGB	Cellulose</span></span>
<span class="line"><span>IBG	Cellulose</span></span></code></pre></div><h4 id="specbond-dat" tabindex="-1">specbond.dat <a class="header-anchor" href="#specbond-dat" aria-label="Permalink to &quot;specbond.dat&quot;">​</a></h4><p>Special bonds，涉及残基与其他残基的特殊连接。pdb2gmx 用于生成残基间键的主要机制依赖于不同残基中主链原子的头尾连接来构建大分子。 在某些情况下（例如二硫键、血红素基团、支化聚合物），有必要创建不在主链上的残基间键。 文件specbond.dat 负责此功能。 残基必须属于相同的分子类型。 第一行表示文件中的条目数。如果添加新条目，请确保递增此数字。 文件中的其余行提键连接的规范，行的格式如下：</p><blockquote><p>resA atomA nbondsA resB atomB nbondsB length newresA newresB</p></blockquote><div class="language-specbond.dat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">specbond.dat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>11</span></span>
<span class="line"><span>CYS	SG	1	CYS	SG	1	0.2	CYS2	CYS2</span></span>
<span class="line"><span>CYS	SG	1	HEM 	FE	2	0.25	CYS2	HEME</span></span>
<span class="line"><span>CYS	SG	1	HEM 	CAB	1	0.18	CYS2	HEME</span></span>
<span class="line"><span>CYS	SG	1	HEM 	CAC	1	0.18	CYS2	HEME</span></span>
<span class="line"><span>HIS	NE2	1	HEM 	FE	1	0.2	HIS1	HEME</span></span>
<span class="line"><span>MET	SD	1	HEM 	FE	1	0.24	MET	HEME</span></span>
<span class="line"><span>CO      C       1       HEME    FE      1       0.19    CO      HEME</span></span>
<span class="line"><span>CYM     SG      1       CYM     SG      1       0.2     CYS2    CYS2</span></span>
<span class="line"><span>RBG     O4      1       IBG     C1      1       1.475   RBG     IBG</span></span>
<span class="line"><span>IBG	    O4	    1       IBG	    C1      1       1.475   IBG	    IBG</span></span>
<span class="line"><span>IBG     O4      1       NBG     C1      1       1.475   IBG     NBG</span></span></code></pre></div><p>注意：residuetypes.dat和specbond.dat要放在工作目录下，而不是力场文件夹中</p><h4 id="atomtypes-atp" tabindex="-1">atomtypes.atp <a class="header-anchor" href="#atomtypes-atp" aria-label="Permalink to &quot;atomtypes.atp&quot;">​</a></h4><p>原子类型文件。每个力场定义了一组原子类型，它们有一个特有的名称或符号，以及质量。可以在该文件中更改和/或添加原子类型。此文件仅供gmx pdb2gmx使用。原子类型的交互参数通过拓扑文件中的 <code>[ atomtypes ]</code>部分设置</p><div class="language-atomtypes.atp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">atomtypes.atp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>原子名             原子质量   ; 描述</span></span>
<span class="line"><span>Br                79.90000	; bromine</span></span>
<span class="line"><span>C                 12.01000	; sp2 C carbonyl group </span></span>
<span class="line"><span>CA                12.01000	; sp2 C pure aromatic (benzene)</span></span>
<span class="line"><span>CB                12.01000	; sp2 aromatic C, 5&amp;6 membered ring junction</span></span>
<span class="line"><span>CC                12.01000	; sp2 aromatic C, 5 memb. ring HIS</span></span></code></pre></div><blockquote><p>注意：文件结尾只能空一行，空行多了会报错</p></blockquote><h4 id="itp" tabindex="-1">*.itp <a class="header-anchor" href="#itp" aria-label="Permalink to &quot;\\*.itp&quot;">​</a></h4><ul><li>被主拓扑文件（.top）包含的分拓扑文件，一般包含某个特定分子的类型。与top文件类似，一般用来具体记录体系的拓扑信息和力场信息，然后通过include指令写在top文件中，它不引用其他力场文件，同时包含 <code>system</code>，<code>molecule</code>等拓扑字节。</li><li>目的是为了方便运用某一个常用分子的拓扑或者使 topol.top 文件结构更加简洁，可以把它单独写入一个 .itp 文件中。.itp文件仅包含一个特定分子的信息，可以被任意引用，这样就避免了每次都需要使用pdb2gmx生成拓扑或者重复地复制粘贴。一般力场中都会提供水分子、离子（有些还提供少许脂质分子）的 .itp 文件两部分组成： <ul><li><code>[ moleculetype ]</code>：定义分子名称和非键排除（nrexcl，排除相邻nrexcl个键的非键相互作用）。</li><li><code>[ atoms ]</code>、<code>[ settles ]</code>、<code>[ exclusions ]</code>、<code>[ bonds ]</code>、<code>[ angles ]</code>等：这一部分是分子的具体信息，对应于相应的 <code>[ moleculetype ]</code></li></ul></li><li>urea.itp 文件示例：</li></ul><div class="language-urea.itp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">urea.itp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[ moleculetype ]</span></span>
<span class="line"><span>; molname nrexcl</span></span>
<span class="line"><span>URE       3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ atoms ]</span></span>
<span class="line"><span>     1  C            1  URE 	 C      1     0.880229  12.01000       ; amber C  type</span></span>
<span class="line"><span>     ······</span></span>
<span class="line"><span>     8  H            1  URE    H22      8     0.395055   1.00800       ; amber H  type</span></span>
<span class="line"><span>[ bonds ]</span></span>
<span class="line"><span>    1	2</span></span>
<span class="line"><span>    1	3</span></span>
<span class="line"><span>    ···</span></span>
<span class="line"><span>[ dihedrals ]</span></span>
<span class="line"><span>;   ai    aj    ak    al funct  definition</span></span>
<span class="line"><span>     2     1     3     4   9   </span></span>
<span class="line"><span>     2     1     3     5   9   </span></span>
<span class="line"><span>     ···</span></span>
<span class="line"><span>[ dihedrals ]</span></span>
<span class="line"><span>     3     6     1     2   4   </span></span>
<span class="line"><span>     1     4     3     5   4	 </span></span>
<span class="line"><span>     1     7     6     8   4</span></span></code></pre></div><h4 id="ffbonded-itp" tabindex="-1">ffbonded.itp <a class="header-anchor" href="#ffbonded-itp" aria-label="Permalink to &quot;ffbonded.itp&quot;">​</a></h4><p>记录了所有原子的所有可能的键合信息</p><h4 id="rtp" tabindex="-1">*.rtp <a class="header-anchor" href="#rtp" aria-label="Permalink to &quot;\\*.rtp&quot;">​</a></h4><ul><li>包含构建块拓扑的文件：具有部分电荷和键描述的残留拓扑。</li><li>residue topology database entry(残基拓扑数据库条目)对于独立分子（例如甲醛）或肽（标准或非标准）都是必需的。该条目定义了残基的原子类型、连接性、键合和非键合相互作用类型，并且是使用 pdb2gmx 构建top文件所必需的。残留物数据库条目可能会丢失，仅仅是因为数据库根本不包含残留物，或者因为名称不同。</li><li>gmx pdb2gmx需要这样的 rtp文件来为 pdb文件中包含的蛋白质创建 top文件，如果希望使用pdb2gmx自动生成拓扑，则必须确保在所需的力场中存在适当的 rtp条目，并且与尝试使用的残基具有相同的名称。</li><li>如果需要任意分子的拓扑结构，则不能使用pdb2gmx(除非您自己构建rtp条目)。必须手工构建该条目，或者使用另一个程序(例如x2top或其它脚本)来构建top文件。</li><li>rtp中需要定义的是残基中每个原子的名称, 类型和电荷, 以及原子间的成键相互作用项, 如原子间的连接信息, 键角信息, 二面角信息. 该文件的每条残基条目包含：原子、可选的键、二面角和不正确的二面角。</li><li>成键相互作用中的原子名称可以前面加一个减号或加号，表示原子分别在前面或后面的残基中。</li></ul><div class="language-.rtp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.rtp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[ bondedtypes ]</span></span>
<span class="line"><span>; bonds  angles  dihedrals  impropers all_dihedrals nrexcl HH14 RemoveDih</span></span>
<span class="line"><span>     1       1          9          4        1         3      1     0</span></span>
<span class="line"><span>[ URE ] ; 残基名称，要与pbd文件中的匹配</span></span>
<span class="line"><span>  [ atoms ]</span></span>
<span class="line"><span>  ;原子名称  原子类型  电荷        电荷组  </span></span>
<span class="line"><span>    C	   C          	0.880229	1</span></span>
<span class="line"><span>    O	   O           -0.613359	2</span></span>
<span class="line"><span>    ···</span></span>
<span class="line"><span>  [ bonds ] ;可选</span></span>
<span class="line"><span>    C	  N1</span></span>
<span class="line"><span>    C	  N2</span></span>
<span class="line"><span>    C	   O</span></span>
<span class="line"><span>    ···</span></span>
<span class="line"><span>  [ exclusions ] ;可选</span></span>
<span class="line"><span>  [ angles ] ;可选</span></span>
<span class="line"><span>  [ dihedrals ] ;可选</span></span>
<span class="line"><span>  [ impropers ] ;可选</span></span>
<span class="line"><span>    N1	  N2	 C     O</span></span>
<span class="line"><span>     C	 H11	N1   H12</span></span>
<span class="line"><span>     C	 H21	N2   H22</span></span></code></pre></div><blockquote><p>注意： 原子名称：按照结构及连接关系区分原子 原子类型：按照化学环境区分原子</p></blockquote><h4 id="r2b" tabindex="-1">*.r2b <a class="header-anchor" href="#r2b" aria-label="Permalink to &quot;\\*.r2b&quot;">​</a></h4><p>将残基名称翻译为在不同力场中具有不同名称的残基，或根据其质子化状态具有不同名称的残基。可以包含2列或5列。双列格式的第一列是残基名称，第二列是结构单元名称。5列格式具有3个额外的柱，N-末端、C-末端和双末端（单个残基分子）。</p><div class="language-.r2b vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.r2b</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>; rtp residue to rtp building block table</span></span>
<span class="line"><span>;GMX   Force-field</span></span>
<span class="line"><span>;      main  N-ter C-ter 2-ter</span></span>
<span class="line"><span>ALA    ALA   NALA  CALA  -</span></span>
<span class="line"><span>ARG    ARG   NARG  CARG  -</span></span>
<span class="line"><span>ARGN   -     -     -     -</span></span>
<span class="line"><span>ASN    ASN   NASN  CASN  -</span></span></code></pre></div><h4 id="arn" tabindex="-1">*.arn <a class="header-anchor" href="#arn" aria-label="Permalink to &quot;\\*.arn&quot;">​</a></h4><p>将原子从其力场名称重命名为IUPAC/PDB定义的名称，以便于可视化和识别</p><div class="language-.arn vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.arn</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>; atom renaming specification</span></span>
<span class="line"><span>; residue   gromacs  forcefield</span></span>
<span class="line"><span>IBG	H1O  HO1</span></span>
<span class="line"><span>IBG	H2O  HO2</span></span>
<span class="line"><span>IBG	H3O  HO3</span></span>
<span class="line"><span>IBG	H4O  HO4</span></span>
<span class="line"><span>IBG	H6O  HO6</span></span></code></pre></div><h4 id="hdb" tabindex="-1">*.hdb <a class="header-anchor" href="#hdb" aria-label="Permalink to &quot;\\*.hdb&quot;">​</a></h4><p>氢数据库。当生成最初丢失或用—ignh删除的氢原子时，gmx pdb2gmx（第232页）需要此文件。</p><div class="language-.hdb vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.hdb</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HOH	1</span></span>
<span class="line"><span>2	7	HW	OW</span></span>
<span class="line"><span>HO4	1</span></span>
<span class="line"><span>3	10	HW	OW</span></span>
<span class="line"><span>ACE	1</span></span>
<span class="line"><span>3	4	HH3	CH3	C	O</span></span>
<span class="line"><span>NME	2</span></span>
<span class="line"><span>1	1	H	N	-C	CH3</span></span>
<span class="line"><span>3	4	HH3	CH3	N	-C</span></span></code></pre></div><h4 id="tdb" tabindex="-1">*.tdb <a class="header-anchor" href="#tdb" aria-label="Permalink to &quot;\\*.tdb&quot;">​</a></h4><p>关于可置于多肽链末端的氨基酸末端的信息。分为C端和N端，.c.tdb和.n.tdb</p><h4 id="vsd" tabindex="-1">*.vsd： <a class="header-anchor" href="#vsd" aria-label="Permalink to &quot;\\*.vsd：&quot;">​</a></h4><p>包含如何在力场中的许多不同分子上放置虚拟站点的信息</p><div class="language-.vsd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.vsd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[ CH3 ]</span></span>
<span class="line"><span>; CT         sp3 aliphatic C </span></span>
<span class="line"><span> ;bound to sp2/sp3 carbons</span></span>
<span class="line"><span>   CT           C               MCH3</span></span>
<span class="line"><span>   CT           CA              MCH3</span></span>
<span class="line"><span>   CT           CB              MCH3</span></span></code></pre></div><h4 id="n2t" tabindex="-1">*.n2t <a class="header-anchor" href="#n2t" aria-label="Permalink to &quot;\\*.n2t&quot;">​</a></h4><p>用于在结构文件中找到的原子名称和相应的原子类型之间执行最初的转换。这对于使用gmx x2top等实用程序非常有用</p><div class="language-.n2t vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.n2t</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>; AMBER14sb format parameters for Cellulose residue (beta-glucose) derived from GLYCAM06  </span></span>
<span class="line"><span>; This files serves to generate the input topologies using X2TOP </span></span>
<span class="line"><span>O	OS	0.0000	16.00	2	C 0.14 C 0.14 </span></span>
<span class="line"><span>C	Cg	0.0000	12.01	4	C 0.15 O 0.14 O 0.14 H 0.10</span></span>
<span class="line"><span>H	H1	0.0000 	1.008	1	C 0.10</span></span>
<span class="line"><span>H	H2	0.0000	1.008	1	C 0.10</span></span>
<span class="line"><span>C	Cg	0.0000	12.01	4	C 0.15 C 0.15 O 0.14 H 0.10</span></span>
<span class="line"><span>C	Cg	0.0000	12.01	4	C 0.15 H 0.10 H 0.10 O 0.14</span></span>
<span class="line"><span>O	Oh	0.0000	16.00	2	C 0.145 H 0.095</span></span>
<span class="line"><span>H	Ho	0.0000	1.008	1	O 0.09</span></span></code></pre></div><h3 id="模拟相关文件" tabindex="-1">模拟相关文件 <a class="header-anchor" href="#模拟相关文件" aria-label="Permalink to &quot;模拟相关文件&quot;">​</a></h3><h4 id="top" tabindex="-1">*.top <a class="header-anchor" href="#top" aria-label="Permalink to &quot;\\*.top&quot;">​</a></h4><ul><li>Molecular Topology file：由gmx pdb2gmx命令生成，包含肽或蛋白质中所有相互作用的完整描述。</li><li>该文件主要是记录体系的拓扑信息和力场信息，并且包括体系中各种类型的分子/原子数目</li><li>拓扑文件包含有关每个原子位点如何与其他原子位点相互作用的信息，无论是非键合相互作用还是键合相互作用。非键合相互作用包括范德华相互作用和库仑相互作用。键合相互作用包括键、角和二面体。这些信息由力场提供。</li><li>拓扑文件采用C语言预处理器(C preprocessor,cpp)编译文件：</li></ul><div class="language-.top vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.top</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;xxx.itp&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#ifdef POSRES</span></span>
<span class="line"><span>    ···</span></span>
<span class="line"><span>#endif</span></span></code></pre></div><ul><li>拓扑文件一般包含： <ol><li>力场参数包括非键参数键参数等等</li><li>蛋白拓扑体系主体部分以及对应蛋白的位置限制文件</li><li>配体拓扑以及对应配体的位置限制文件</li><li>水拓扑水模型水的位置限制</li><li>金属拓扑</li></ol></li><li>gmx x2top也能生成top文件</li></ul><h4 id="gro" tabindex="-1">*.gro <a class="header-anchor" href="#gro" aria-label="Permalink to &quot;\\*.gro&quot;">​</a></h4><ul><li>Molecular Structure file：一般只包含原子坐标信息，相对于pdb添加了H原子</li><li>是gromacs独有的分子坐标文件</li><li>在GROMACS格式(.gro)中, 最后一行指定单位晶胞的形状, 并总是使用三斜矩阵的表示方法, 其中前面的三个数字指定对角元素(xx, yy, zz), 后面的六个数字指定非对角元素(xy, xz, yx, yz, zx, zy).</li></ul><h4 id="pdb" tabindex="-1">*.pdb <a class="header-anchor" href="#pdb" aria-label="Permalink to &quot;\\*.pdb&quot;">​</a></h4><ul><li>这是体系的初始坐标文件，主要是包括了体系中所有原子的坐标、原子序号、残基名称等等这些基础信息，后面有可能会用到的.gro文件和.pdb文件其实差不多，只不过.pdb文件的信息全一点，新手可以先默认理解为这是记录体系的初始坐标的文件格式。</li><li>ATOM和HETATM记录了结构原子坐标信息，也是PDB文件中最重要的信息。ATOM记录的是标准氨基酸和核酸的结构坐标，而HETATM记录的是其他类型原子的结构坐标。</li><li>pdb文件用于gmx pdb2gmx输入只需要原子坐标，键参数是通过力场重新生成的。</li></ul><div class="language-.pdb vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.pdb</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ATOM  字段</span></span>
<span class="line"><span>以PDB数据库1aki.pdb文件为例：</span></span>
<span class="line"><span>ATOM      2  CA  LYS A   1      35.892  21.073 -11.427    1.00 21.12    C</span></span>
<span class="line"><span>一        二  三  四  五  六      七      八      九         十    十一    十二</span></span>
<span class="line"><span>1. 记录原子的标识号；</span></span>
<span class="line"><span>2. 原子序号；</span></span>
<span class="line"><span>3. 原子名称；</span></span>
<span class="line"><span>4. 残基名称；</span></span>
<span class="line"><span>5. 链标识；第26列</span></span>
<span class="line"><span>6. 残基序号；</span></span>
<span class="line"><span>7. 原子坐标</span></span>
<span class="line"><span>8. 原子坐标</span></span>
<span class="line"><span>9. 原子坐标</span></span>
<span class="line"><span>10. occupancy，原子占位率；</span></span>
<span class="line"><span>11. tempFactor，又称“b-factor”；</span></span>
<span class="line"><span>12. 原子的元素</span></span></code></pre></div><ul><li>ATOM和HETATM记录了结构原子坐标信息，也是PDB文件中最重要的信息。ATOM记录的是标准氨基酸和核酸的结构坐标，而HETATM记录的是其他类型原子的结构坐标。</li></ul><h4 id="mdp" tabindex="-1">*.mdp <a class="header-anchor" href="#mdp" aria-label="Permalink to &quot;\\*.mdp&quot;">​</a></h4><ul><li>Molecular Dynamics parameter file：动力学参数文件</li><li>(Molecular dynamics parameters)这个格式的文件主要是记录模拟体系中的一些参数设置，该文件包含关于分子动力学模拟的全部信息。<strong>例如，时间步长，步数，温度，压力</strong>等等。该文件经过 gmx grompp 命令后将被注释</li></ul><h4 id="ndx" tabindex="-1">*.ndx <a class="header-anchor" href="#ndx" aria-label="Permalink to &quot;\\*.ndx&quot;">​</a></h4><p>Index file：有时需要一个索引文件来指定原子组上的动作(例如温度耦合、加速、冻结)。 通常，默认索引组就足够了</p><h4 id="tpr" tabindex="-1">*.tpr <a class="header-anchor" href="#tpr" aria-label="Permalink to &quot;\\*.tpr&quot;">​</a></h4><ul><li>Run input file：由gmx grompp命令将结构文件、拓扑文件、参数文件、索引文件(可选)结合生成运行输入文件。</li><li>最终一步分子动力学模拟的输入文件Run input file (.tpr)，<strong>二进制</strong>，该文件主要是将模拟所需的体系信息打包。.tpr文件用途较广，不仅用于跑模拟程序，在gromacs中还可以用来作为参考文件进行数据处理。内容包含模拟的初始结构，分子拓扑，和所有的模拟参数。利用Grompp程序连接分子结构文件(.gro)、拓扑文件(.top)、分子动力学参数文件(.mdp)和索引文件(.ndx)(可选)，即生成该文件。这个文件包含了开始使用 Gromacs 进行模拟的所有信息。这个文件就是一个大容器，把所有反应信息给到gromacs，然后通过电脑进行计算，这个如果没法生成，就没法后续的工作。</li><li>该文件包含用GROMACS启动模拟所需的所有信息，包含系统中所有原子的所有参数。</li></ul><h4 id="trajectory-file-trr-tng-or-xtc" tabindex="-1">Trajectory file (.trr, .tng, or .xtc) <a class="header-anchor" href="#trajectory-file-trr-tng-or-xtc" aria-label="Permalink to &quot;Trajectory file (.trr, .tng, or .xtc)&quot;">​</a></h4><p>轨迹文件：由gmx mdrun命令使用运行输入文件开始模拟，输出轨迹文件(trr)、日志文件(log)，也许还有检查点文件(cpt)。 xtc：压缩轨迹文件，包含坐标、时间、模拟盒子信息。与trr文件相比xtc没有原子的速度和力的信息，文件会大大缩小，不影响后面生成RMSD RMSF等。 trr：轨迹文件，包含信息更多，文件更大。trr包含了坐标、速度、受力</p><h2 id="gromacs的力场" tabindex="-1">GROMACS的力场 <a class="header-anchor" href="#gromacs的力场" aria-label="Permalink to &quot;GROMACS的力场&quot;">​</a></h2><p>gromacs 原生自带四类15个力场：</p><ul><li>AMBER03 protein, nucleic AMBER94 (Duan et al., J. Comp. Chem. 24, 1999-2012, 2003)</li><li>AMBER94 force field (Cornell et al., JACS 117, 5179-5197, 1995)</li><li>AMBER96 protein, nucleic AMBER94 (Kollman et al., Acc. Chem. Res. 29, 461-469, 1996)</li><li>AMBER99 protein, nucleic AMBER94 (Wang et al., J. Comp. Chem. 21, 1049-1074, 2000)</li><li>AMBER99SB protein, nucleic AMBER94 (Hornak et al., Proteins 65, 712-725, 2006)</li><li>AMBER99SB-ILDN protein, nucleic AMBER94 (Lindorff-Larsen et al., Proteins 78, 1950-58, 2010)</li><li>AMBERGS force field (Garcia &amp; Sanbonmatsu, PNAS 99, 2782-2787, 2002)</li><li>CHARMM27 all-atom force field (CHARM22 plus CMAP for proteins)</li><li>GROMOS96 43a1 force field</li><li>GROMOS96 43a2 force field (improved alkane dihedrals)</li><li>GROMOS96 45a3 force field (Schuler JCC 2001 22 1205)</li><li>GROMOS96 53a5 force field (JCC 2004 vol 25 pag 1656)</li><li>GROMOS96 53a6 force field (JCC 2004 vol 25 pag 1656)</li><li>GROMOS96 54a7 force field (Eur. Biophys. J. (2011), 40„ 843-856, DOI: 10.1007/s00249-011-0700-9)</li><li>OPLS-AA/L all-atom force field (2001 aminoacid dihedrals)</li></ul><h2 id="获取gromacs力场文件" tabindex="-1">获取GROMACS力场文件 <a class="header-anchor" href="#获取gromacs力场文件" aria-label="Permalink to &quot;获取GROMACS力场文件&quot;">​</a></h2><p>在 GROMACS 社区等第三方网站可以找到其它力场的 gromacs格式：</p><ul><li><a href="https://www.gromacs.org/user_contributions.html#" target="_blank" rel="noreferrer">GROMACS 社区 User contributions</a><ul><li>charmm36.ff</li><li>amber14sb.ff</li><li>GROMOS_56a</li></ul></li><li>其它 <ul><li>CHARMM36力场（目前最新的CHARMM力场）</li><li>OPLS-AA/M力场（是目前gmx自带的OPLS-AA/L改进版，也是OPLS原作者搞的最新版本）</li><li>GROMOS 54A8（目前最新的GROMOS官方力场）</li><li>AMBER14SB+parmbsc1（除19SB以外最佳的Amber蛋白质力场结合核酸的补丁包）</li><li>19SB：<a href="https://jerkwin.github.io/2022/09/24/GROMACS%E4%BD%BF%E7%94%A8amber19sb%E5%8A%9B%E5%9C%BA/" target="_blank" rel="noreferrer">GROMACS使用amber19sb力场|Jerkwin</a></li><li><em><a href="https://zhuanlan.zhihu.com/p/93938854" target="_blank" rel="noreferrer">链接1-zhihu</a></em></li><li><em><a href="http://bbs.keinsci.com/thread-15094-1-1.html" target="_blank" rel="noreferrer">链接2-keinsci</a></em></li></ul></li></ul><h2 id="gromacs的工作流程" tabindex="-1">GROMACS的工作流程 <a class="header-anchor" href="#gromacs的工作流程" aria-label="Permalink to &quot;GROMACS的工作流程&quot;">​</a></h2><p>:::{figure-md} <img src="https://2301032.xyz/gromacs-1.png" width="60%" align="center"></p><p><em>GROMACS MD 的典型流程图</em> :::</p><h2 id="gromacs的结果分析方法" tabindex="-1">GROMACS的结果分析方法 <a class="header-anchor" href="#gromacs的结果分析方法" aria-label="Permalink to &quot;GROMACS的结果分析方法&quot;">​</a></h2><p>:::{figure-md} <img src="https://2301032.xyz/gromacs-2.png" width="90%" align="center"></p><p><em>GROMACS中常用的分析工具</em> :::</p><h2 id="拓展阅读" tabindex="-1">拓展阅读 <a class="header-anchor" href="#拓展阅读" aria-label="Permalink to &quot;拓展阅读&quot;">​</a></h2><ul><li><a href="https://www.gromacs.org/" target="_blank" rel="noreferrer">GROMACS官网</a></li><li><a href="https://manual.gromacs.org/current/index.html" target="_blank" rel="noreferrer">GROMACS文档</a></li><li><a href="http://www.mdtutorials.com/" target="_blank" rel="noreferrer">GROMACS Tutorials</a></li><li><a href="https://www.bilibili.com/video/BV1Rc411o7Lz?vd_source=3cc29842852a8cd1cadfa25417f9d2d8" target="_blank" rel="noreferrer">Gromacs入门讲解|bilibili</a></li></ul>`,80)]))}const b=s(l,[["render",t]]);export{u as __pageData,b as default};
