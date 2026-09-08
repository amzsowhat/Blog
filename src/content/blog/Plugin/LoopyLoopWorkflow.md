---
title: "Loopy：把 Loop 制作变成可重复的工作流"
description: "将循环定位、接缝处理、时长控制和导出集中在同一套流程中的音频插件。"
pubDate: 2026-09-01
category: Plugin
tags: [Plugin, Game Audio, Loop]
draft: false
---

环境声、机械持续声、风雨和 room tone 等素材，通常需要整理为长度可控的循环资产。常见做法是切开素材、重排首尾、处理交叉淡化，再反复试听接缝。Loopy 将循环定位、接缝处理、时长控制和导出集中到同一套流程中。

![Loopy 插件界面](/images/Blog/Plugin/LoopyLoopWorkflow/LoopyInterface.png)

## 两种处理模式

### LOOP

适用于本身适合做循环的素材。处理时会在素材内部切开并重新接续，将原有的首尾边界移到中间进行交叉淡化；再根据波形、电平、相位和立体声连续性筛选候选接缝。结果可以精确到指定时长。

### TEXTURE

该模式仍在迭代中，适合将短的 one-shot 或其他非循环素材整理为连续结果。它会减弱较慢的包络变化，再从原始内容中选择可相互接续的区域进行组装；声音始终来自源素材，不额外加入大量纹理调制。

## 使用流程

1. 载入或录制素材。
2. 使用 <code>Source In</code> 与 <code>Source Out</code> 圈定有效区域。
3. 选择 <code>LOOP</code> 或 <code>TEXTURE</code> 模式。
4. 设置目标时长。
5. 生成并连续试听多个循环结果。
6. 保存为 WAV，或直接拖入 DAW。

插件支持 WAV、AIFF、FLAC 和 OGG 输入，导出为 24-bit WAV；生成结果可随 DAW 工程状态保存。

[GitHub：amzsowhat/loopy](https://github.com/amzsowhat/loopy)
