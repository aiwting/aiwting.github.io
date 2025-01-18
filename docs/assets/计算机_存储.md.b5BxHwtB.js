import{_ as e,c as l,a2 as i,o as r}from"./chunks/framework.YPpNXepj.js";const a="/assets/2025-01-04-17-07-33.DP8FZRiA.png",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"计算机/存储.md","filePath":"计算机/存储.md","lastUpdated":null}'),o={name:"计算机/存储.md"};function s(n,t,c,d,p,m){return r(),l("div",null,t[0]||(t[0]=[i('<ul><li>硬盘的基本存储单位: 扇区(sector), 一个 sector 一般 512 Byte(字节)~4096 Byte</li><li>簇(block)=几个连续的 sector, 常见有4KB, 8KB, 16KB</li><li>文件存储时占用的空间以簇为单位分配, 因此文件真实大小 &lt;= 文件占用空间</li><li>一些很小的文件不会&quot;占用空间&quot;, 是因为和文件元信息存储在了一起. <ul><li><a href="https://learn.microsoft.com/zh-cn/windows/win32/devnotes/master-file-table" target="_blank" rel="noreferrer">主文件表 (MFT)</a></li></ul></li><li>簇的使用提高了存储效率, 但簇越大存储空间的浪费越明显</li><li>在格式化硬盘时保持默认即可</li><li>现在市售的SSD硬盘, 扇区多为4KB</li><li>4K对齐是一种硬盘分区技术, 4K指的是物理扇区大小为4KB(4096Byte)的硬盘, 对齐时确保硬盘的逻辑分区与物理扇区对齐, 从而提高读写效率.</li><li>现代操作系统在格式化硬盘时通常会默认进行4K对齐, 手动对齐需要专业的软件工具 <img src="'+a+'" alt=""></li></ul>',1)]))}const u=e(o,[["render",s]]);export{f as __pageData,u as default};
