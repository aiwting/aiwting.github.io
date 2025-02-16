import{_ as a,c as e,ag as t,o as i}from"./chunks/framework.mHuDn-wg.js";const _=JSON.parse('{"title":"视频的存储方式","description":"","frontmatter":{},"headers":[],"relativePath":"计算机/计算机软硬件/视频.md","filePath":"计算机/计算机软硬件/视频.md","lastUpdated":null}'),r={name:"计算机/计算机软硬件/视频.md"};function o(n,l,u,s,m,d){return i(),e("div",null,l[0]||(l[0]=[t('<h1 id="视频的存储方式" tabindex="-1">视频的存储方式 <a class="header-anchor" href="#视频的存储方式" aria-label="Permalink to &quot;视频的存储方式&quot;">​</a></h1><ul><li>视频文件是图像数据和音频数据的组合体, 甚至还可以包含文本数据(字幕)</li><li>视频数据的组织方式，常见的视频文件格式有: RAW、AVI、MOV、MP4等</li><li>封装格式：将视频流、音频流以及字幕等多种数据类型封装在一起。常见的封装格式包括MP4、MKV等。这些格式不仅决定了视频文件的编解码方式，还决定了视频文件中可以包含哪些类型的数据（如音频轨、字幕、静态图像等）。</li></ul><h2 id="m3u8" tabindex="-1">m3u8 <a class="header-anchor" href="#m3u8" aria-label="Permalink to &quot;m3u8&quot;">​</a></h2><ul><li>m3u8格式是一种基于文本的播放列表文件格式, 通常用于存储视频流的分段信息</li><li>用于HTTP Live Streaming（HLS）协议的流媒体传输</li><li>广泛应用于移动设备和在线视频流媒体服务中</li><li>使用UTF-8字符编码</li><li>m3u8文件本质上是一个索引文件, 其中包含一系列媒体文件的网络地址（URI）。这些地址可以指向TS（Transport Stream）片段、音频流或视频流等</li><li>例如一个m3u8视频, 由一个.m3u8索引文件和多个.ts分片二进制文件 <ul><li>m3u8文件用于描述媒体文件的播放顺序和路径, 其内容为多个TS分片文件的路径或URL地址，这些分片文件按照顺序拼接起来形成完整的视频或音频内容</li><li>ts文件是Transport Stream（传输流）格式的封装文件，属于MPEG-2标准的一部分。它将音视频数据、字幕、时间戳等信息打包成独立的分段，每个分段可以单独解码和播放</li><li>key文件是用于加密和解密m3u8流媒体视频中TS（Transport Stream）分片文件的密钥文件。</li><li>在获取到key文件后，需要将其与TS分片文件结合使用，通过AES-128算法进行解密。</li><li>#待更</li></ul></li><li>转换为mp4格式: <code>ffmpeg -i [.ts|.m3u8] -c copy output.mp4</code></li></ul><h2 id="拓展阅读" tabindex="-1">拓展阅读 <a class="header-anchor" href="#拓展阅读" aria-label="Permalink to &quot;拓展阅读&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/u011686167/article/details/108314078" target="_blank" rel="noreferrer">走进音视频的世界——音视频的基本概念_音视频如何实现动态码率切换-CSDN博客</a></li></ul>',6)]))}const p=a(r,[["render",o]]);export{_ as __pageData,p as default};
