---
title: "Audio Profiler Timeline：Unity 音频播放时间线工具"
description: "在 Unity Play Mode 中按 Audio Mixer Group 追踪 AudioSource 播放事件的 Editor Window。"
pubDate: 2026-09-08
category: Tool
tags: [Unity, Audio, Tool]
draft: false
---

[下载 AudioProfiler.zip](/downloads/Tool/AudioProfiler/AudioProfiler.zip)

## 用途

Audio Profiler Timeline 是 Unity Editor Window，用于在 Play Mode 中记录场景内 <code>AudioSource</code> 的播放事件。窗口按 <code>AudioMixerGroup</code> 分组显示事件，并列出 GameObject 名称、音频片段名称、播放时长和波形预览，便于检查声音是否在预期时间与总线中播放。

## 安装

1. 下载并解压文件包。
2. 将其中的 <code>AudioProfiler</code> 文件夹和 <code>AudioProfiler.meta</code> 放入 Unity 项目的 <code>Assets/Editor/</code> 目录。
3. 等待 Unity 编译完成。
4. 在菜单栏选择 <code>AudioTools &gt; Audio Profiler Timeline</code>。

## 使用

进入 Play Mode 后打开窗口，时间线会持续记录正在播放的 <code>AudioSource</code>。

- 按 Mixer Group 分组显示播放事件；同一总线使用固定颜色。
- 每条事件显示对象名称、Clip 名称和播放时长。
- 搜索框可按对象或 Clip 名称过滤。
- 暂停与恢复按钮控制记录状态；清空按钮移除当前记录；Stop All 会停止当前已追踪的 AudioSource。
- 缩放按钮调整时间线密度；窗口默认保留最近 10 秒的事件。

## 波形与限制

工具会尝试读取 <code>AudioClip</code> 数据绘制波形，并将最多 10 秒的样本用于预览。无法通过 <code>AudioClip.GetData</code> 读取采样数据的声音仍会显示播放事件，但不会显示波形。

该工具只追踪 Play Mode 中通过 <code>AudioSource</code> 播放的声音，不用于分析构建后的播放器音频或其他绕过 <code>AudioSource</code> 的播放路径。

## 文件内容

- <code>AudioProfiler/AudioProfilerWindow.cs</code>：Editor Window 源码。
- <code>AudioProfiler/AudioProfilerWindow.cs.meta</code>：Unity 脚本元文件。
- <code>AudioProfiler.meta</code>：Unity 文件夹元文件。
- <code>README.md</code>：安装与使用说明。
