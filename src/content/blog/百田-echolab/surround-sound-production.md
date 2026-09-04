---
title: "5.1 / 7.1 环绕声制作"
description: "三种环绕声制作思路：双耳下混、Panorama 空间布局，以及在 Reaper 中制作多声道素材并交给 Wwise 处理。"
pubDate: 2023-07-27
category: 百田 · echolab
tags: [Surround Sound, Reaper, Wwise]
draft: false
---

这里所说的环绕声，主要指 5.1 与 7.1。

- **5.1**：L、C、R、Ls、Rs，加一个低音单元。
- **7.1**：L、C、R、Lss、Rss、Lsr、Rsr，加一个低音单元。

<figure><div class="article-image-pair article-image-pair--equal"><a href="/images/blog/surround/p03-01.webp"><img src="/images/blog/surround/p03-01.webp" alt="5.1 声道方位示意" width="468" height="466" loading="lazy" /></a><a href="/images/blog/surround/p03-02.webp"><img src="/images/blog/surround/p03-02.webp" alt="7.1 声道方位示意" width="457" height="455" loading="lazy" /></a></div><figcaption>5.1 与 7.1 的声道布局</figcaption></figure>

## 01 布局环绕声道，再下混成立体声

先把 DAW 中音频的通道数设置为 6 或更多，再加入 **B360 Ambisonics Encoder**。它可以把单声道、立体声或环绕声转换为四通道 Ambisonics，并调整声音的空间位置。

<figure><a href="/images/blog/surround/p04-01.webp"><img src="/images/blog/surround/p04-01.webp" alt="B360 Ambisonics Encoder 空间布局界面" width="825" height="545" loading="lazy" /></a><figcaption>B360 Ambisonics Encoder：调整声音的空间布局</figcaption></figure>

随后加入 **Nx - Virtual Mix Room over Headphones** 或 **DTS Neural™ Surround UpMix**，把上一步的环绕声通过双耳监听方式转成立体声，再导出 Stereo 版本。

<figure><a href="/images/blog/surround/p04-02.webp"><img src="/images/blog/surround/p04-02.webp" alt="Nx Virtual Mix Room over Headphones 界面" width="833" height="547" loading="lazy" /></a><figcaption>Nx - Virtual Mix Room over Headphones</figcaption></figure>

<figure><a href="/images/blog/surround/p05-01.webp"><img src="/images/blog/surround/p05-01.webp" alt="DTS Neural Surround UpMix 界面" width="927" height="546" loading="lazy" /></a><figcaption>DTS Neural™ Surround UpMix：将环绕声下混到双耳监听</figcaption></figure>

## 02 直接模拟环绕声的立体声

使用 Wave Arts **Panorama 7**，可以对每个单声道或立体声声道进行空间布局和反射混响，也可以通过自动化增加动态轨迹。

<figure><a href="/images/blog/surround/p06-01.webp"><img src="/images/blog/surround/p06-01.webp" alt="Wave Arts Panorama 7 的空间和反射设置" width="733" height="546" loading="lazy" /></a><figcaption>Wave Arts Panorama 7</figcaption></figure>

## 03 在 Reaper 中制作 5.1 素材

这一种方式的核心，是先输出真正的 5.1 或 7.1 多声道素材，再通过 Wwise 的 Auro Headphone 运算。效果更可靠，但成本也更高。

### 设置轨道通道数

以输出 5.1 为例，先在 Reaper 中打开工程 I/O，把轨道通道数改为 6，与 Master Bus 的 I/O 保持一致：五个不同方位的扬声器通道，加一个低音通道。

<figure><div class="article-image-pair"><a href="/images/blog/surround/p07-01.webp"><img src="/images/blog/surround/p07-01.webp" alt="Reaper 工程 I/O 按钮位置" width="343" height="546" loading="lazy" /></a><a href="/images/blog/surround/p07-02.webp"><img src="/images/blog/surround/p07-02.webp" alt="Reaper 轨道通道数设置为 6" width="739" height="545" loading="lazy" /></a></div><figcaption>打开工程 I/O，并将轨道通道数设为 6</figcaption></figure>

### 给单声道素材布置方位

把单声道素材放进设置好的轨道，加入 Reaper 自带的 **ReaSurroundPan** 或 **ReaSurround**。

<figure><div class="article-image-pair article-image-pair--equal"><a href="/images/blog/surround/p08-01.webp"><img src="/images/blog/surround/p08-01.webp" alt="ReaSurroundPan 插件界面" width="614" height="546" loading="lazy" /></a><a href="/images/blog/surround/p08-02.webp"><img src="/images/blog/surround/p08-02.webp" alt="ReaSurround 插件界面" width="647" height="545" loading="lazy" /></a></div><figcaption>左：ReaSurroundPan；右：ReaSurround</figcaption></figure>

下面以 ReaSurroundPan 为例。因为轨道里是一段单声道素材，所以将 **Input Channels** 设为 `1`。

<figure><a href="/images/blog/surround/p09-01.webp"><img src="/images/blog/surround/p09-01.webp" alt="ReaSurroundPan 的 Input Channels 设置" width="612" height="546" loading="lazy" /></a><figcaption>Input Channels 设置为 1</figcaption></figure>

设置完成后，拖动插件中的“小球”，就可以改变单声道素材在 5.1 声道中的位置。

<figure><a href="/images/blog/surround/p09-02.webp"><img src="/images/blog/surround/p09-02.webp" alt="在 ReaSurroundPan 中绘制声音移动轨迹" width="488" height="545" loading="lazy" /></a><figcaption>在 ReaSurroundPan 中布置方位和动态轨迹</figcaption></figure>

### 用耳机监听多声道内容

如果在环绕声混音棚里操作，此时已经可以直接监听。耳机只有 L / R 两个声道，无法直接读取 Ls、Rs 等后方声道；声音依然存在，只是暂时听不到。

<figure><a href="/images/blog/surround/p10-01.webp"><img src="/images/blog/surround/p10-01.webp" alt="ReaSurroundPan 中的后方声道位置" width="488" height="545" loading="lazy" /></a><figcaption>声音放在 Ls、Rs 时，普通耳机无法直接读取这些声道</figcaption></figure>

这时需要把 5.1 信息转成 2.0，才能继续用耳机混音。可以尝试下面三种工具：

1. **Nx - Virtual Mix Room over Headphones**
2. **Abbey Road Studio**
3. **DTS Neural™ Surround UpMix**

<figure><a href="/images/blog/surround/p10-02.webp"><img src="/images/blog/surround/p10-02.webp" alt="Nx Virtual Mix Room 的双耳监听界面" width="833" height="547" loading="lazy" /></a><figcaption>Nx - Virtual Mix Room over Headphones</figcaption></figure>

<figure><div class="article-image-pair article-image-pair--equal"><a href="/images/blog/surround/p11-01.webp"><img src="/images/blog/surround/p11-01.webp" alt="Abbey Road Studio 虚拟混音棚界面" width="748" height="547" loading="lazy" /></a><a href="/images/blog/surround/p11-02.webp"><img src="/images/blog/surround/p11-02.webp" alt="DTS Neural Surround UpMix 界面" width="927" height="546" loading="lazy" /></a></div><figcaption>左：Abbey Road Studio；右：DTS Neural™ Surround UpMix</figcaption></figure>

Nx 与 Abbey Road Studio 通过 HRTF（Head-Related Transfer Function，头相关传递函数）把环绕声转换成立体声，听感更接近混音棚，也可以配合摄像头追踪头部位置。DTS 的结果相对更“客观”，加入的声学环境更少。

这些办法都属于辅助监听，最后最好还是在专业环绕声棚里核对和校准。

### 导出

完成混音后进行混缩导出。通道数量必须与目标格式一致；这里制作的是 5.1，所以导出 6 个通道。

<figure><div class="article-image-pair"><a href="/images/blog/surround/p12-01.webp"><img src="/images/blog/surround/p12-01.webp" alt="多声道混音完成后的工程界面" width="608" height="546" loading="lazy" /></a><a href="/images/blog/surround/p12-02.webp"><img src="/images/blog/surround/p12-02.webp" alt="Reaper 导出时设置 6 个通道" width="439" height="545" loading="lazy" /></a></div><figcaption>混缩导出时，把通道数设置为 6</figcaption></figure>

## 工具补充

[IEM Plug-in Suite](https://plugins.iem.at/) 提供免费的空间音频工具，其中也有面向多声道处理的 EQ、压缩等插件。
