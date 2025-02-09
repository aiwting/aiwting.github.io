import{_ as s,c as a,ag as l,o as n}from"./chunks/framework.mHuDn-wg.js";const o=JSON.parse('{"title":"ArchLinux","description":"","frontmatter":{},"headers":[],"relativePath":"计算机/Linux/ArchLinux配置.md","filePath":"计算机/Linux/ArchLinux配置.md","lastUpdated":null}'),e={name:"计算机/Linux/ArchLinux配置.md"};function t(h,i,p,k,r,c){return n(),a("div",null,i[0]||(i[0]=[l(`<h1 id="archlinux" tabindex="-1">ArchLinux <a class="header-anchor" href="#archlinux" aria-label="Permalink to &quot;ArchLinux&quot;">​</a></h1><p>记录一些linux的软件和配置</p><h2 id="时间设置" tabindex="-1">时间设置 <a class="header-anchor" href="#时间设置" aria-label="Permalink to &quot;时间设置&quot;">​</a></h2><h2 id="磁盘管理" tabindex="-1">磁盘管理 <a class="header-anchor" href="#磁盘管理" aria-label="Permalink to &quot;磁盘管理&quot;">​</a></h2><ul><li>磁盘分区格式</li><li>cfdisk</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看系统中的磁盘和分区信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fdisk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lsblk</span></span></code></pre></div><h2 id="系统备份" tabindex="-1">系统备份 <a class="header-anchor" href="#系统备份" aria-label="Permalink to &quot;系统备份&quot;">​</a></h2><ul><li>A system backup is the process of backing up the operating system, files and system-specific useful/essential data.</li><li><strong>系统快照</strong>（Snapshot）是一种在特定时间点记录系统或数据状态的技术，类似于摄影中的“快照”，用于保存系统、文件或应用程序在某一时刻的完整状态。 <ul><li>快照是文件系统的一种状态镜像，通过引用当前和过去的文件版本（inode）来实现。</li><li>不会立即占用额外空间，而是通过“写时复制”（Copy-on-Write, COW）机制，仅在文件被修改时才复制数据。</li><li>因此，快照占用的存储空间相对较少，且创建速度快</li></ul></li><li><strong>系统镜像</strong>（System Image）是指一个完整的操作系统的副本, 主要用于创建新的系统, 保证与源系统的完全一致 <ul><li>通过镜像备份, 可以完整保存当前系统的状态，包括分区信息和文件系统</li><li>通过镜像文件, 用户可以轻松地还原整个系统环境，避免手动重新配置硬件和软件</li></ul></li><li>dd命令主要用于复制和转换文件或数据块。例如磁盘克隆 <ul><li>不要在运行中的系统上执行dd命令，以免影响系统稳定性。建议使用Live CD/USB启动系统进行备份。</li><li><code>dd if=/dev/sda1 of=/mnt/backup.img bs=1M status=progress</code></li><li>if：输入设备（源分区）。</li><li>of：输出设备（目标文件）。</li><li>bs=1M：块大小为1MB</li></ul></li><li>rsync 是一种高效、灵活且广泛使用的文件同步工具，主要用于本地和远程系统之间的数据同步。 <ul><li><code>sudo pacman -S rsync</code></li><li>这种方法对于将现有的已安装系统迁移到新的硬盘或固态硬盘上非常有效。</li><li>使用<code>rsync</code>备份相较于使用 <code>dd</code> 来进行硬盘克隆要更佳，因为它允许你在使用不同大小、分区表和文件系统的存储设备间传输；也比 <code>cp -a</code> 更好，因为它允许你对文件权限、属性、访问控制列表和扩展属性有更好的掌握。</li><li>rsync 在系统运行时亦可进行备份，但传输期间改变的文件可能不会被备份。这可能会造成使用这些文件的程序的一些未知错误或未定义行为。为缓解这个问题，可以注销所有用户并关闭所有程序和数据库。</li><li><code>rsync -avxHAX --numeric-ids --delete --checksum / /path/to/backup/partition/backup</code></li><li>如果希望还原备份，使用同样的 <code>rsync</code> 命令，但源和目标相反。</li><li><strong>rsync 默认会复制挂载的磁盘或挂载点下的内容(即会跨文件系统边界进行同步)</strong></li><li><a href="https://wiki.archlinuxcn.org/wiki/Rsync#%E5%85%A8%E7%9B%98%E7%B3%BB%E7%BB%9F%E5%A4%87%E4%BB%BD" target="_blank" rel="noreferrer">rsync作为备份工具</a></li></ul></li><li>btrfs-progs 是一个用于管理 Btrfs 文件系统的用户空间工具集 <ul><li>Subvolume 是 Btrfs 文件系统中的一个核心概念，它是一种虚拟的文件系统分区，可以看作是文件系统内部的逻辑目录或子文件系统。</li><li>在创建 Btrfs 文件系统时，默认会生成一个名为 root 的默认 subvolume（ID 为 5），它位于文件系统的根目录下。用户可以通过命令行工具（如 btrfs subvolume create）创建新的 subvolume，并指定其路径和属性</li><li>Subvolume 可以用于创建系统的快照，以便在需要时恢复到特定的时间点</li><li>使用 <code>btrfs</code> 命令行工具可以方便地管理 subvolume，包括创建、删除、挂载、列出和设置默认 subvolume 等操作</li></ul></li></ul><h3 id="使用btrfs和rsync迁移系统" tabindex="-1">使用btrfs和rsync迁移系统 <a class="header-anchor" href="#使用btrfs和rsync迁移系统" aria-label="Permalink to &quot;使用btrfs和rsync迁移系统&quot;">​</a></h3><ul><li>准备一块足够大的移动硬盘和U盘启动盘</li><li>在原系统中备份</li><li>然后在Live CD/USB启动系统中恢复系统</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 安装btrfs管理工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> btrfs-progs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 挂载移动磁盘中的一个分区, 然后格式化为btrfs, 并创建一个子卷</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkfs.btrfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sda3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> btrfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subvolume</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mount-point/sysbackup</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 复制文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsync</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -avxHAX</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --numeric-ids</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --delete</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --checksum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mount-point/sysbackup</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -a (归档模式)：启用归档模式，递归地复制目录及其内容，并保持文件的权限、所有者、组、时间戳等属性。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -v (详细模式)：显示详细输出，使 rsync 在执行时显示更多信息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -x (限制文件系统)：限制 rsync 只复制当前文件系统中的文件，不跨越文件系统边界。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -H (保持硬链接)：保持源文件中的硬链接。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -A (保持ACLs)：保持文件的访问控制列表（ACLs）。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -X (保持扩展属性)：保持文件的扩展属性。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --numeric-ids：使用数字形式的用户和组ID，而不是名称，确保在目标系统上正确应用权限。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --delete：在目标目录中删除源目录中不存在的文件，实现镜像同步。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --checksum：通过校验和进行文件比较，而不是根据时间和大小。这可以确保即使文件的时间戳相同，但内容不同也会被更新。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --update 代表进行增量同步</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 恢复系统: 进入Live镜像（要求该镜像支持btrfs以及用用rsync工具），挂载要恢复的分区，用逆向的备份方法拷贝回去</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsync</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -avxHAX</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --numeric-ids</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --delete</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --checksum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mount-point/sysbackup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /path/to/backup/partition/restore</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 使用 arch-chroot &lt;mount-point&gt; 进入到构建的系统，重新生成fstab以及重建grub引导。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可能需要重新设置时间</span></span></code></pre></div><ul><li><a href="https://ming2k.github.io/posts/2023-12-23-backup-for-linux/" target="_blank" rel="noreferrer">参考教程: back up for linux</a></li></ul><h2 id="网络管理" tabindex="-1">网络管理 <a class="header-anchor" href="#网络管理" aria-label="Permalink to &quot;网络管理&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nmcli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nmcli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> device</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nmtui</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wlan0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iwctl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rfkill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rfkill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unblock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wifi</span></span></code></pre></div><h2 id="screen" tabindex="-1">screen <a class="header-anchor" href="#screen" aria-label="Permalink to &quot;screen&quot;">​</a></h2><ol><li>brightness of screen</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brightnessctl</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># adjust value=0-255 (0%-100%)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brightnessctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">valu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><ol start="2"><li>screen temperature <ul><li>Redshift</li><li>会根据你的周围环境调节屏幕色温，如果你晚上在屏幕前工作，这可能帮助减少对眼睛的伤害。</li><li>但是Redshift暂不支持Wayland</li><li>Sway 1.0或其他基于wlroots的混成器，包括Orbital，可以使用Redshift的衍生版本: gammastep、clight、wlsunset-git、wl-gammarelay</li><li><code>sudo pacman -S gammasteps</code></li></ul></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gammastep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TEMPERATURE</span></span></code></pre></div><h2 id="battery-state" tabindex="-1">battery state <a class="header-anchor" href="#battery-state" aria-label="Permalink to &quot;battery state&quot;">​</a></h2><ul><li>ACPI（Advanced Configuration and Power Interface，高级配置和电源接口）是一种由Intel、HP、IBM、Microsoft和Phoenix等公司共同开发的开放标准，用于操作系统与硬件之间的交互，特别是在电源管理和硬件配置方面。</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># check battery state</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sys/class/power_supply/BATT/capacity</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install acpi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> acpi</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出电池状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acpi</span></span></code></pre></div><h2 id="窗口管理器" tabindex="-1">窗口管理器 <a class="header-anchor" href="#窗口管理器" aria-label="Permalink to &quot;窗口管理器&quot;">​</a></h2><ul><li>wayland</li><li>sway</li></ul><h2 id="语言" tabindex="-1">语言 <a class="header-anchor" href="#语言" aria-label="Permalink to &quot;语言&quot;">​</a></h2><h2 id="中文输入法" tabindex="-1">中文输入法 <a class="header-anchor" href="#中文输入法" aria-label="Permalink to &quot;中文输入法&quot;">​</a></h2><ul><li>常用的中文输入法平台有 IBus、fcitx、fcitx5 和 scim</li><li>Fcitx（发音为[ˈfiːtɪks]）是一个轻量级的输入法框架，支持多种语言输入，包括中文、日文、韩文等</li><li>fcitx兼容多种桌面环境，如GNOME、KDE、X Window等</li><li>Fcitx5是Fcitx的下一代输入法框架，基于C++开发</li><li>fcitx5支持更多现代技术和标准，如GTK3、Wayland窗口管理器和Qt5</li><li>这里选择安装<a href="https://wiki.archlinuxcn.org/wiki/Fcitx5" target="_blank" rel="noreferrer">fcitx5</a></li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装框架和中文拼音输入法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#fcitx-im组包含 1) fcitx5  2) fcitx5-configtool  3) fcitx5-gtk  4) fcitx5-qt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fcitx5-im</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fcitx5-chinese-addons</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装词库(可选)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fcitx5-pinyin-zhwiki</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fcitx5-pinyin-sougou</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#个性化配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fcitx-configtool</span></span></code></pre></div><ul><li>确保使用 Sway 1.10 或更高的版本, 否则可能无法显示输入法待选窗口</li><li>在Vim中自动切换输入法</li><li>#待更</li></ul><h2 id="图像" tabindex="-1">图像 <a class="header-anchor" href="#图像" aria-label="Permalink to &quot;图像&quot;">​</a></h2><ul><li><p>查看: <code>mpv</code></p></li><li><p>图像处理和创作软件GIMP <code>sudo pacman -S gimp</code></p></li></ul><h2 id="办公" tabindex="-1">办公 <a class="header-anchor" href="#办公" aria-label="Permalink to &quot;办公&quot;">​</a></h2><ul><li>使用开源的 LibreOffice</li><li>OnlyOffice强调实时协作和云服务集成, 更注重现代协作需求，支持多人实时编辑文档、表格和演示文稿，适合团队协作场景</li><li>libreoffice基于OpenOffice开发，支持Microsoft Office格式，功能更丰富, 支持扩展和定制</li><li>安装libreoffice稳定版本及简体中文包 <code>sudo pacman -S libreoffice-still libreoffice-still-zh-cn</code></li><li>安装onlyoffice <code>sudo pacman -S onlyoffice-bin</code></li></ul><h2 id="字体" tabindex="-1">字体 <a class="header-anchor" href="#字体" aria-label="Permalink to &quot;字体&quot;">​</a></h2><h2 id="命令帮助工具" tabindex="-1">命令帮助工具 <a class="header-anchor" href="#命令帮助工具" aria-label="Permalink to &quot;命令帮助工具&quot;">​</a></h2><ul><li>man命令用于查看手册页（man pages），它提供了命令的简明、结构化帮助信息</li><li>info命令提供更详细的信息，其内容通常以超文本形式展示，支持节点间的导航</li><li>tldr 是一个用于简化 Linux 命令学习和使用的命令行工具，其主要功能是通过提供简明扼要的命令示例，帮助用户快速掌握命令的常见用法 <ul><li>通过 <code>tldr &lt;命令名&gt;</code> 快速查看命令的常见用法和示例</li><li>替代冗长的手册页（man）</li><li>数据来源于GitHub远程服务器, 在hosts文件中配置github的ip地址可解决连接补上服务器的问题.</li><li>支持中文, 需要配置<code>LANG和LC_ALL</code>语言环境变量, 和<code>export TLDR_LANGUAGE=&quot;zh&quot;</code>变量.</li></ul></li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tldr</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新本地命令库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tldr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --update</span></span></code></pre></div><h2 id="terminal-multiplexer" tabindex="-1">Terminal Multiplexer <a class="header-anchor" href="#terminal-multiplexer" aria-label="Permalink to &quot;Terminal Multiplexer&quot;">​</a></h2><ul><li>通常一个terminal同一时间只会运行同一个程序</li><li>而终端复用器通过分屏或多窗口支持同时运行多个命令或程序</li><li>tmux允许用户在一个终端窗口中同时运行多个会话（session），每个会话可以包含多个窗口（window）和面板（pane）</li><li>可以在一个界面上管理多个任务，而无需频繁切换终端窗口</li><li><code>sudo pacman -S tmux</code></li></ul><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><h2 id="系统监控" tabindex="-1">系统监控 <a class="header-anchor" href="#系统监控" aria-label="Permalink to &quot;系统监控&quot;">​</a></h2><ul><li>sar</li><li>top</li><li><code>iostat</code>: 监视系统输入输出和CPU使用</li><li><code>nmon</code> : 轻量级命令行性能监视工具, <code>sudo pacman -S nmon</code></li><li><code>uptime</code> : 系统运行时间和负载</li><li><code>uname</code> : 查看机器和系统</li><li><code>ps</code></li><li><code>hash</code> : 哈希表是一个存储已执行命令完整路径的关联数组，通过它可以优化命令查找速度，避免每次执行命令时都需要遍历整个PATH环境变量中的目录来搜索可执行文件。</li><li><code>hostnamectl</code> : 查看系统信息</li></ul><h2 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to &quot;用户管理&quot;">​</a></h2><ul><li><code>w</code></li></ul><h2 id="有趣的命令行工具" tabindex="-1">有趣的命令行工具 <a class="header-anchor" href="#有趣的命令行工具" aria-label="Permalink to &quot;有趣的命令行工具&quot;">​</a></h2><ul><li>cmatrix : 终端动态字符流, pacman安装</li><li>cowsay : ascii创意表达, pacman安装</li><li>asciiMOL : 终端分子查看, pip安装\` <ul><li>draw chemical struture formula in terminal, only .xyz format or SMILES string</li><li><code>pip install asciiMOL</code></li><li>或者<code>pip install asciiMOL[formats,smiles]</code>安装</li><li><a href="https://github.com/dewberryants/asciiMol" target="_blank" rel="noreferrer">github:asciiMOL</a></li></ul></li><li>使用: <code>asciimol &#39;O([H])C(C1=C([H])N=C([H])C([H])=C1[H])=O&#39;</code></li></ul>`,46)]))}const u=s(e,[["render",t]]);export{o as __pageData,u as default};
