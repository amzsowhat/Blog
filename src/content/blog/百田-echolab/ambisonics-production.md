---
title: "Ambisonics 全景声制作"
description: "一阶 Ambisonics 的通道与编码方式，以及使用 Reaper、B360、Nx Ambisonics 和 Wwise 的完整制作流程。"
pubDate: 2026-09-04
category: 百田 · echolab
tags: [Ambisonics, Reaper, Wwise]
draft: false
---

游戏里常用的一阶 Ambisonics 是四通道格式。二阶为 9 个通道，三阶为 16 个通道，通道数量遵循 `(阶数 + 1)²`。

- **W**：来自各个方向的声音。
- **X**：前后方向。
- **Y**：左右方向。
- **Z**：上下方向。

<figure><a href="/images/blog/ambisonics/p03-01.webp"><img src="/images/blog/ambisonics/p03-01.webp" alt="Ambisonics WXYZ 四个通道的方向示意" width="765" height="547" loading="lazy" /></a><figcaption>一阶 Ambisonics 的 W、X、Y、Z 通道</figcaption></figure>

常见编码方式有 **AmbiX（WYZX）** 和 **FuMa（WXYZ）**。坐标顺序不同，混用时会导致空间方位错误；制作、导出和引擎设置必须统一。Waves B360 可以在两种编码间转换。

<figure><a href="/images/blog/ambisonics/p03-02.webp"><img src="/images/blog/ambisonics/p03-02.webp" alt="B360 将 AmbiX 转换为 FuMa" width="1162" height="455" loading="lazy" /></a><figcaption>B360：AmbiX → FuMa</figcaption></figure>

<figure><a href="/images/blog/ambisonics/p04-01.webp"><img src="/images/blog/ambisonics/p04-01.webp" alt="B360 将 FuMa 转换为 AmbiX" width="1162" height="455" loading="lazy" /></a><figcaption>B360：FuMa → AmbiX</figcaption></figure>

## 01 在 DAW 中制作素材

### 设置四通道轨道

先把每条轨道的 I/O 设置为 `4`，对应 W、X、Y、Z 四个通道。

<figure><a href="/images/blog/ambisonics/p05-01.webp"><img src="/images/blog/ambisonics/p05-01.webp" alt="Reaper 中多条轨道的 I O 设置为四通道" width="1041" height="546" loading="lazy" /></a><figcaption>将各轨道的 I/O 设置为 4</figcaption></figure>

### 加入 B360

在轨道中加入 B360，把每个声音摆到合适的位置。

<figure><a href="/images/blog/ambisonics/p05-02.webp"><img src="/images/blog/ambisonics/p05-02.webp" alt="B360 Ambisonics Encoder 的空间摆位界面" width="619" height="545" loading="lazy" /></a><figcaption>B360：为声音设置空间位置</figcaption></figure>

### 用 Nx Ambisonics 监听

Nx Ambisonics 可以解码声音里的空间信息，将其转换成立体声，方便使用耳机监听。

<figure><a href="/images/blog/ambisonics/p06-01.webp"><img src="/images/blog/ambisonics/p06-01.webp" alt="Nx Ambisonics 双耳监听界面" width="796" height="546" loading="lazy" /></a><figcaption>Nx Ambisonics：双耳监听解码</figcaption></figure>

### 导出

导出流程与环绕声类似。需要特别注意：**导出前旁通双耳监听插件**，否则得到的是监听用的立体声，而不是四通道 Ambisonics 素材。

## 02 在 Wwise 中设置

根据实际测试，通过 Reaper 和 Waves 插件输出的四通道全景声素材为 AmbiX 编码。把素材导入 Wwise 后，需要确认素材格式与 Wwise 的通道解释一致。

双击素材进入 Source Editor（资源编辑器）。

<figure><a href="/images/blog/ambisonics/p07-01.webp"><img src="/images/blog/ambisonics/p07-01.webp" alt="在 Wwise 中双击全景声素材进入资源编辑器" width="1138" height="546" loading="lazy" /></a><figcaption>在 Wwise 中打开素材的 Source Editor</figcaption></figure>

将 Channel Configuration 设置为 **Ambisonic（AmbiX）**。如果素材使用的是 FuMa，就选择对应格式。

<figure><a href="/images/blog/ambisonics/p07-02.webp"><img src="/images/blog/ambisonics/p07-02.webp" alt="Wwise 中把 Channel Configuration 设置为 Ambisonic" width="908" height="547" loading="lazy" /></a><figcaption>在 Wwise 中选择 Ambisonic（AmbiX）通道格式</figcaption></figure>

制作和选用素材时，一定要明确编码格式。可以把它理解为统一坐标系：素材库中的全景声资源通常会注明格式，必要时先进行编码转换，再统一进入工程。

<figure><a href="/images/blog/ambisonics/p08-01.webp"><img src="/images/blog/ambisonics/p08-01.webp" alt="素材列表中的四通道顺序标记" width="1398" height="546" loading="lazy" /></a><figcaption>检查素材的通道数量和顺序</figcaption></figure>

掌握这套流程后，也可以使用全景声麦克风录制空间感更完整的素材。

## 工具补充

[IEM Plug-in Suite](https://plugins.iem.at/) 提供免费的 Ambisonics 与多声道工具。
