# CodeToken Light Theme 接入报告

## 1. 实际扫描到的项目结构

当前项目是 Astro static site，样式体系为 TailwindCSS + 普通 CSS。

主题相关文件：

- `src/styles/global.css`：全局 tokens、背景、light 覆盖、卡片/状态色覆盖
- `src/layouts/BaseLayout.astro`：HTML 默认主题、首屏主题初始化
- `src/components/Header.astro`：主题切换按钮和持久化逻辑
- `src/pages/index.astro`：当前页面入口
- 实际组件：`Header.astro`、`Hero.astro`、`PriceSection.astro`、`RadarSection.astro`、`StatusSection.astro`、`EndpointCard.astro`、`Footer.astro`、`Logo.astro`

未发现 Nuxt / Next / Vue / React 页面结构，也未发现 UnoCSS 配置。

## 2. 修改文件清单

| 文件 | 修改内容 |
|---|---|
| `src/styles/global.css` | light 默认 tokens、冷白背景、Header/Footer/卡片/按钮/Radar/Status light 覆盖 |
| `src/layouts/BaseLayout.astro` | 默认 `data-theme="light"`，加入 `codetoken-theme` 初始化脚本 |
| `src/components/Header.astro` | 复用主题按钮，接入 light/dark 切换、`localStorage`、ARIA、theme-color |
| `src/components/Hero.astro` | 为 Hero 核心六边形加 class，light 下改为浅色玻璃填充 |
| `src/components/PriceSection.astro` | light 下价格区背景、面板、表格、输入框适配 |
| `src/components/RadarSection.astro` | light 下 Radar 背景、卡片、表格和 thanks link 适配 |
| `src/components/StatusSection.astro` | light 下 Status 卡片、状态边框、动态点适配 |

## 3. Light Theme 配色方案

最终 light theme 使用的核心 tokens：

| Token | RGB | HEX | 用途 |
|---|---:|---:|---|
| `--background` | `246 250 253` | `#f6fafd` | 冷白主背景 |
| `--foreground` | `15 23 42` | `#0f172a` | 主文字 |
| `--muted` | `82 99 122` | `#52637a` | 次级文字 |
| `--card` | `255 255 255` | `#ffffff` | 主卡片 |
| `--border` | `203 213 225` | `#cbd5e1` | 默认边框 |
| `--primary` | `2 132 199` | `#0284c7` | 主品牌 / 链接 / active |
| `--primary-foreground` | `255 255 255` | `#ffffff` | 主按钮文字 |
| `--surface-lowest` | `255 255 255` | `#ffffff` | 最浅容器 |
| `--surface-low` | `241 247 252` | `#f1f7fc` | Footer / 次级背景 |
| `--surface-container` | `226 236 246` | `#e2ecf6` | 表头 / hover 容器 |
| `--tertiary` | `109 40 217` | `#6d28d9` | 紫色强调 |
| `--tertiary-container` | `124 58 237` | `#7c3aed` | 紫色容器 / AI accent |
| `--secondary-container` | `37 99 235` | `#2563eb` | CTA 蓝色 |

辅助视觉色：

| 名称 | 值 | 用途 |
|---|---:|---|
| Cyan glow | `rgba(34, 211, 238, 0.14)` | 背景光晕 |
| Purple glow | `rgba(124, 58, 237, 0.10)` | 背景 / AI 装饰光 |
| Card shadow | `rgba(15, 23, 42, 0.08)` | light 卡片阴影 |
| Border soft | `rgba(148, 163, 184, 0.28)` | 玻璃卡片边框 |
| CTA gradient | `#06b6d4 -> #2563eb` | 主按钮 |

## 4. 主题切换逻辑

- 默认主题：`light`
- 持久化 key：`localStorage.codetoken-theme`
- 支持值：`light` / `dark`
- 切换按钮位置：Header 右侧，移动端也保留可见
- 首屏初始化：`BaseLayout.astro` 的 inline script 会在页面早期读取本地存储并设置 `document.documentElement.dataset.theme`
- 同步项：
  - `document.documentElement.dataset.theme`
  - `localStorage.codetoken-theme`
  - 按钮 `aria-label`
  - 按钮 `aria-pressed`
  - `meta[name="theme-color"]`

运行时验证结果：

```json
{
  "initial": {
    "theme": "light",
    "label": "Switch to dark theme",
    "pressed": "false",
    "stored": null,
    "themeColor": "#F6FAFD"
  },
  "clicked": {
    "theme": "dark",
    "label": "Switch to light theme",
    "pressed": "true",
    "stored": "dark",
    "themeColor": "#050B14"
  },
  "reloaded": {
    "theme": "dark",
    "label": "Switch to light theme",
    "pressed": "true",
    "stored": "dark",
    "themeColor": "#050B14"
  }
}
```

## 5. 组件适配说明

### Header

- 使用 `.site-header` 作为顶层 Header 的 light 覆盖目标。
- light 下改成半透明白、浅边框、柔和阴影。
- 避免使用裸 `header` 选择器，防止误伤 `StatusSection` 内部的 `<header>`。
- 主题按钮从“只切换图标”升级为真实主题切换。
- 移动端保留主题按钮可见，CTA 在小屏隐藏。

### Hero

- 保留原有 cyan / purple 品牌感。
- 为 Hero 核心六边形增加 `.hero-core-hex`。
- light 下六边形大面积深色 fill 改为浅色玻璃填充。
- light 下降低旋转装饰和 logo 光晕强度。

### Pricing / PriceSection

- light 下背景改为冷白渐变 + cyan/purple 轻光晕。
- `.price-panel` 改成半透明白、浅蓝灰边框、柔和阴影。
- 表格表头改为 `#eef6fc`。
- 表格 hover 改为 `rgba(2, 132, 199, 0.055)`。
- 输入框改为白色背景和浅边框。
- 装饰 SVG 在 light 下降低混合强度。

### RadarSection

- light 下背景改为冷白科技风。
- `.radar-card` / `.radar-table` 改为浅玻璃卡片。
- Radar 表头改为浅蓝背景，文字保留紫色强调。
- 状态色在 light 下改为白底可读的深色：
  - green：`#15803d`
  - blue：`#2563eb`
  - orange：`#c2410c`
  - purple：`#7e22ce`
  - red：`#dc2626`
- thanks link 改为更适合 light 的 muted 色。

### StatusSection

- 为状态卡片增加 `data-status-tone`，方便 light 下按 tone 精准覆盖。
- light 下 `.status-card` 改为浅玻璃卡片。
- 不同状态边框分别适配：
  - cyan：`rgba(103, 232, 249, 0.62)`
  - blue：`rgba(147, 197, 253, 0.62)`
  - purple：`rgba(216, 180, 254, 0.68)`
  - green：`rgba(134, 239, 172, 0.68)`
  - amber：`rgba(252, 211, 77, 0.68)`
- 动态点 light 下使用更柔和的 cyan glow。

### EndpointCard

- 通过全局 `.api-card` light 覆盖适配。
- light 下使用白色半透明面板、浅边框、柔和阴影。
- 卡片内 cyan 渐变弱化为轻装饰。

### Footer

- light 下背景使用 `#f1f7fc`。
- border 使用 `rgba(148, 163, 184, 0.28)`。
- 链接 hover 仍继承主色体系。

## 6. Dark Theme 是否保留

已保留。

- 原 dark tokens 仍在 `[data-theme="dark"]` 中。
- dark 下主背景、霓虹光、cyan/purple 渐变、卡片暗色风格仍可通过切换按钮恢复。
- 本次没有删除 dark theme。
- 本次没有为了 light theme 替换 Logo / favicon 的品牌色。

## 7. 自查结果

代码检查：

- `pnpm run build`：通过
- Astro check：`0 errors / 0 warnings / 0 hints`
- `git diff --check`：通过

功能验证：

- 默认进入页面为 light theme。
- 点击主题按钮可切换到 dark theme。
- 切换后写入 `localStorage.codetoken-theme`。
- 刷新后保持用户选择。
- `meta[name="theme-color"]` 会随主题同步。

视觉验证：

- 已检查 light/dark 桌面首屏。
- 已检查 light/dark 移动首屏。
- 已检查 light 下 Pricing、Radar、Status 区块。
- 曾发现 `StatusSection` 内部 `<header>` 被全局 Header light 样式误伤，已通过 `.site-header` 定向覆盖修复。
- light 下未发现大面积深色残留块。
- light 下按钮、卡片、表格、状态色整体可读。

## 8. 仍需人工确认的问题

- 建议在真实浏览器中完整滚动检查全页面细节，尤其是不同屏幕高度下 footer 的展示位置。
- 当前工作区还存在非本次报告文件相关的脏文件：`.DS_Store`、`CodeToken-配色方案读取报告.md`，以及已有的 `src/components/Logo.astro` 改动；本次没有回退这些内容。

