---
title: "飞书表格驱动的 ComfyUI 批量音频生成工作流"
description: "以飞书多维表格管理生成参数，在 ComfyUI 中逐行生成、命名、保存并回写音频结果。"
pubDate: 2026-09-08
category: Tool
tags: [ComfyUI, Feishu, Stable Audio, Workflow]
draft: false
---

[下载工作流](/downloads/Tool/ComfyUIFeishuBatchAudio/ComfyUIFeishuBatchAudioWorkflow.zip)

![飞书表格批量音频生成工作流全貌](/images/Blog/Tool/ComfyUIFeishuBatchAudio/WorkflowOverview.png)

这套工作流把飞书多维表格作为批量任务清单，由 ComfyUI 负责逐行读取参数、生成音频、保存文件并回写结果。表格承担内容管理，节点图处理循环和生成逻辑，适合需要集中维护大量提示词与输出记录的任务。

## 数据流

工作流先读取表格总行数，再以循环序号定位当前记录。每一行可以提供英文提示词、时长、分类和自定义文件名；字段提取完成后进入 Stable Audio 3 生成子图，输出音频并将生成名称写回对应记录。

## 设计方法

- 将应用配置、输出目录、保存格式和可选的 AI 提示词改写集中在输入区。
- 用表格实际行数控制循环，避免手工维护任务数量。
- 以行号生成独立种子，使每条记录获得单独的生成结果。
- 将模型加载、采样和解码封装为生成子图，主流程只保留数据传递关系。
- 文件命名优先采用表格中的自定义名称；未填写时，根据分类和提示词自动生成名称。
- 保存完成后回写生成名称，使表格同时承担任务状态与结果索引。

## 工作流结构

绿色区域用于填写必要参数，标记为 `BLACK BOX` 的节点负责表格读取、字段拆分、循环、生成和回写。日常使用时只需调整输入区与表格内容，内部链路可以保持不变。

