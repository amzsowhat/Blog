---
title: "Audio Profiler Timeline：Unity 音频播放时间线工具"
description: "在 Unity Play Mode 中监看、捕获并导出 AudioSource 播放事件的 Editor Window。"
pubDate: 2025-07-15
category: Tool
tags: [Unity, Audio, Tool]
draft: false
---

[下载 AudioProfiler.zip](/downloads/Tool/AudioProfiler/AudioProfiler.zip)

Audio Profiler Timeline 是 Unity Editor 的实时音频播放时间线工具。进入 Play Mode 后，它会记录场景内 <code>AudioSource</code> 的播放事件，按 <code>AudioMixerGroup</code> 分组显示，并提供 LIVE 监看、片段捕获与 JSON 导出。

![Audio Profiler Timeline 界面](/images/Blog/Tool/AudioProfiler/AudioProfilerTimeline.png)

## LIVE 监看

进入 Play Mode 后，窗口默认显示最近一段播放时间线。

- 按 Mixer Group 分组，显示对象名称、Clip 名称、播放时长和事件块。
- 使用 <code>timeSamples</code>、循环回绕和重播检测补充 <code>isPlaying</code> 的状态判断。
- 能识别 Clip 切换、非循环声音重播和循环声音回绕。
- 搜索框可按对象名或 Clip 名过滤。
- <code>Merge</code> 可将同一 Mixer Group 内相同 Clip 的多次播放合并到一条轨道。
- 状态栏显示当前 Voices、Sources、Events、扫描耗时和刷新频率。

## CAPTURE 与导出

点击 <code>REC</code> 开始捕获当前播放片段，点击 <code>STOP</code> 结束捕获并进入 <code>CAPTURE</code> 回看。

- Capture 时间线保留片段内的相对开始与结束时间。
- <code>Export JSON</code> 导出 Clip、GameObject、层级路径、Mixer Group、起止时间、持续时长和循环状态。
- <code>Stop Audio</code> 停止场景内全部 AudioSource；<code>Clear</code> 清空当前监看与捕获数据。

## 使用范围

工具只追踪 Play Mode 中通过 <code>AudioSource</code> 播放的声音，不用于分析构建后的播放器，也不覆盖绕过 <code>AudioSource</code> 的播放路径。
