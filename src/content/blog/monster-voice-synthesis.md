---
title: "关于怪物语音合成的研究"
description: "从拟音素材、Pitch 与 Formant，到控制器演绎和 DAW 剪辑，分享怪物语音制作中的一些实用思路。"
pubDate: 2026-09-03
category: Sound Design
tags:
  - Creature Vocals
  - Sound Design
  - Synthesis
draft: false
---

制作怪物语音，主要有两个难点：

<strong>声音要贴合形象。</strong>现实中的动物叫声有迹可循，虚构怪物却没有现成答案。除了符合外形，还得让人相信它是一个会呼吸、会表达的生物。

<strong>素材要够用。</strong>吼叫只是其中一种状态，呼吸、死亡、情绪变化和动作节奏同样需要声音。现成样本往往不够，下面分享几种扩展素材的做法。

## 01 让声音贴合怪物形象

### 从发声方式找素材

以龙为例，我会把一次吼叫的听感拆成几个部分，再去音效库里找对应的质感：

- **喉管｜water pipe**：大型吹管类素材，或在管口加上凝胶，做出有体量感的低频音头。
- **声带｜bow string**：也可以尝试金属拉伸类素材，补充尖锐、紧绷的振动感。
- **口腔｜fruit、juice**：用水果、汁液类拟音补充湿润、黏稠的质感。
- **鼻息｜cardboard**：尝试纸板类素材，配合 chopping 等切分效果，做出断续的气流感。

动物叫声和人声也很好用，合适的时候直接拿来做底层，能省下不少时间。

### 用 Pitch 和 Formant 做出语调

先用 Envelope 绘制 Pitch 曲线。多设置几个转折点，就能做出更夸张的语调起伏。

<figure>
  <a href="/images/blog/monster-voice-synthesis/pitch.webp" aria-label="查看 Pitch Envelope 原图"><img src="/images/blog/monster-voice-synthesis/pitch.webp" alt="波形上方的 Pitch Envelope 曲线，展示多个音高转折点" width="1018" height="416" loading="lazy" decoding="async" /></a>
  <figcaption>Pitch Envelope：用曲线控制语调起伏</figcaption>
</figure>

再调制 Formant，让声音带上元音和音节的变化。可以试试 Serum 的 Formant 滤波器，或 [Kilohearts Formant Filter](https://kilohearts.com/products/formant_filter)。

<figure>
  <div class="article-image-pair">
    <a href="/images/blog/monster-voice-synthesis/serum.webp" aria-label="查看 Serum Formant 滤波器原图"><img src="/images/blog/monster-voice-synthesis/serum.webp" alt="Serum 的 Formant 滤波器与调制旋钮" width="405" height="415" loading="lazy" decoding="async" /></a>
    <a href="/images/blog/monster-voice-synthesis/formant.webp" aria-label="查看 Kilohearts Formant Filter 原图"><img src="/images/blog/monster-voice-synthesis/formant.webp" alt="Kilohearts Formant Filter 的元音选择界面" width="276" height="415" loading="lazy" decoding="async" /></a>
  </div>
  <figcaption>左：Serum Formant 滤波器；右：Kilohearts Formant Filter</figcaption>
</figure>

### 把动作和情绪演出来

实时演绎时，带 XY Pad 的控制器会比较顺手。也可以先录一段节奏相近的人声，再把它作为 trigger，驱动声音变化。

控制器参考：[TouchOSC](https://hexler.net/touchosc-mk1)、ROLI Lightpad Block。

## 02 用工具扩展素材

<strong>合成器｜</strong>没有特别的需求，用 Serum 就可以。

<strong>采样器｜</strong>Soundminer Radium 和 Ableton Live Sampler，都是可以尝试的工具。

<figure>
  <a href="/images/blog/monster-voice-synthesis/radium.webp" aria-label="查看 Soundminer Radium 原图"><img src="/images/blog/monster-voice-synthesis/radium.webp" alt="Soundminer Radium 的波形、包络与采样控制界面" width="891" height="416" loading="lazy" decoding="async" /></a>
  <figcaption>Soundminer Radium</figcaption>
</figure>

<figure>
  <a href="/images/blog/monster-voice-synthesis/sampler.webp" aria-label="查看 Ableton Live Sampler 原图"><img src="/images/blog/monster-voice-synthesis/sampler.webp" alt="Ableton Live 中 Sampler 的波形与采样参数" width="821" height="416" loading="lazy" decoding="async" /></a>
  <figcaption>Ableton Live Sampler</figcaption>
</figure>

<strong>声音处理｜</strong>Krotos Reformer、Dehumaniser、Antares Throat、[Zynaptiq WORMHOLE](https://www.zynaptiq.com/wormhole/)。

<strong>调制效果｜</strong>Soundtoys 5 / Effect Rack。

<figure>
  <a href="/images/blog/monster-voice-synthesis/soundtoys.webp" aria-label="查看 Soundtoys Effect Rack 原图"><img src="/images/blog/monster-voice-synthesis/soundtoys.webp" alt="Soundtoys Effect Rack 中串联的多个效果器" width="620" height="416" loading="lazy" decoding="async" /></a>
  <figcaption>Soundtoys Effect Rack</figcaption>
</figure>

## 03 补充身体与属性的声音

主体语音之外，还可以叠加水晶、金属配饰和能量声，补充角色特征。

火焰、岩石等属性，也可以用对应的材质声音来强化。

## 04 在 DAW 里做最后的组合

<strong>反向混响｜</strong>在语音前加入反向的混响尾音，尝试吸入、蓄势的听感。

<strong>多人声混合｜</strong>叠加不同音域、音色的人声，尝试雌雄混合的声线。
