---
title: "UE 场景音频蓝图：区域与样条线的布置"
description: "按触发形状选择场景音频蓝图，并完成音频 ID、样条线、封闭区域与 Plan 层提交的配置流程。"
pubDate: 2025-07-22
category: UE
tags: [UE, Blueprint, Game Audio]
draft: false
---

## 蓝图类型

| 蓝图 | 适用对象 | 触发范围 |
| --- | --- | --- |
| <code>BP_SoundAKDoor</code> | 门等狭长的物体 | 扁长长方体 |
| <code>BP_SplineAkAudio</code> | 河流、森林等线状或不规则对象 | 沿样条线延伸的范围 |
| <code>BP_Trigger_AkAudioBox</code> | 固定的方形区域 | 盒状触发器 |
| <code>BP_Trigger_AkAudioSphere</code> | 固定的圆形区域 | 球形触发器 |

![可用的场景音频蓝图](/images/blog/ue-audio-blueprints/blueprint-list.png)

门使用 <code>BP_SoundAKDoor</code>；规则的小范围区域使用 Box 或 Sphere；河流、道路等沿路径延伸的区域使用 <code>BP_SplineAkAudio</code>。

![门蓝图的触发范围](/images/blog/ue-audio-blueprints/door-trigger.png)

![Sphere 触发范围](/images/blog/ue-audio-blueprints/sphere-trigger.png)

![Box 触发范围](/images/blog/ue-audio-blueprints/box-trigger.png)

## 基础配置

1. 打开目标地图并加载 <code>Plan</code> 层。
2. 将对应的音频蓝图拖入场景，放到目标位置。
3. 在 <code>AkAudioInfo.xlsx</code> 中查找音频 ID，填写到蓝图属性的 <code>Audio Id</code>。
4. 调整触发器大小，或继续编辑样条线，使范围覆盖实际发声区域。
5. 保存时只保存 <code>Plan</code> 层，并只提交该层到 SVN。

![Box 蓝图的位置、尺寸和 Audio Id](/images/blog/ue-audio-blueprints/audio-id-box.png)

没有对应音频 ID 时，先补齐配置表；不要在蓝图中填入未登记的 ID。

## 样条线

<code>BP_SplineAkAudio</code> 用于河流、道路等沿路径延展的声音。放置蓝图后选择样条线端点进行编辑。

![样条线端点](/images/blog/ue-audio-blueprints/spline-endpoint.png)

- 按住 Alt 并拖动端点，新增端点。
- 端点可以移动和旋转；拖动端点两侧的控制柄调整曲线弯曲度。
- 沿目标路径逐段补点，避免用过少的点覆盖明显转折。

样条线属性中需要检查：

- <code>Audio Id</code>：对应 <code>AkAudioInfo.xlsx</code> 中的声音 ID。
- <code>Max Distance</code>：以样条线为中心轴时，可听范围的最大半径。
- <code>Cur Distance</code>：程序测试变量，不需要修改。

## 封闭区域

湖泊、森林等不规则面状区域使用样条线的封闭模式：在 Spline 组件中勾选 <code>ClosedLoop</code>。

- 声音只在边界内生效，区域外不播放。
- 进入区域后，声音在水平面内随玩家移动。
- Z 轴范围由样条线最高点和最低点决定；超出该高度范围时，声音不会继续跟随。
- 封闭区域必须是凸多边形。凹形边界拆分为多个凸区域；将样条线点类型改为线性，便于检查边界。

## 保存与提交

![只保存 Plan 层](/images/blog/ue-audio-blueprints/plan-save.png)

- 音频 ID 已在配置表登记。
- 触发范围覆盖目标对象，没有明显越界。
- 样条线转折和封闭边界与场景轮廓一致。
- 封闭区域已检查凸多边形限制与 Z 轴范围。
- 本次改动只发生在 <code>Plan</code> 层，保存和 SVN 提交也只包含该层。
