# Soundead：声音作品与技术笔记的发布站

Soundead 用于整理和发布鹤童的声音作品、技术笔记与阶段性想法。项目以 Astro 构建；文章、可试听的声音条目与静态页面分别独立维护，便于持续更新。

## 内容如何组织

- 文章放在 `src/content/blog/`，使用 Markdown 或 MDX。
- 可试听的声音条目放在 `src/data/sounds.ts`；每条记录引用一个可公开访问的 HTTPS 音频地址。
- `src/pages/` 管理首页、文章、声音库、About、Contact 和 404 页面。

## 实际使用

### 发布一篇文章

1. 在 `src/content/blog/` 新建 `.md` 或 `.mdx` 文件。
2. 至少填写 `title`、`description` 与 `pubDate`；可选 `updatedDate`、`category`、`tags`、`heroImage`、`heroAlt` 和 `draft`。
3. 写完正文后运行本地预览，确认内容与链接无误再提交。

### 添加一个声音条目

在 `src/data/sounds.ts` 的 `sounds` 数组中添加一项，填写 `title`、`description`、`category` 和 `source`；`format`、`duration` 可按需要补充。`source` 应指向可公开访问的 HTTPS 音频文件。

### 本地运行与构建

```sh
pnpm install
pnpm run dev
pnpm run build
```

`pnpm run dev` 用于本地预览；`pnpm run build` 用于验证生产构建。项目的线上域名为 [soundead.com](https://soundead.com)，并配置为 Vercel 自动部署。

## Theme credit

视觉基础改编自 iann-mathaiya 的 MIT 许可 Nikola Tesla Astro Portfolio；内容、信息架构、图标及 Soundead 的具体实现均已重做。
