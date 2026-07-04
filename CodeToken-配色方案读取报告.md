# CodeToken 当前源码配色方案读取报告

## 1. 项目结构与技术栈判断

- 框架：Astro，`package.json` 中依赖 `astro`、`@astrojs/tailwind`、`tailwindcss`、`typescript`。
- 构建模式：`astro.config.mjs` 配置 `output: "static"`。
- 样式方案：TailwindCSS + 普通 CSS，全局样式入口为 `src/styles/global.css`。
- Tailwind：存在 `tailwind.config.mjs`，`content` 仅扫描 `./src/**/*`。
- UnoCSS：未发现 `uno.config.*`。
- Vue / Nuxt / React / Next / Svelte：未发现对应配置或页面结构。
- Sass / Less / CSS Modules：未发现。
- CSS variables：已发现，全局定义在 `src/styles/global.css`。
- Dark / Light theme：定义了 dark 与 light tokens，但 `src/layouts/BaseLayout.astro` 固定 `<html data-theme="dark">`，未发现真实主题切换逻辑。
- 页面目录：存在 `src/pages/index.astro`。
- 组件目录：存在 `src/components/`。
- 布局目录：存在 `src/layouts/`。
- `app/`、根级 `pages/`、根级 `components/`、根级 `layouts/`、`assets/`：未发现。
- `Reference/`：存在参考素材目录，但未发现被 `src`、`public` 或配置文件引用；不纳入当前 Astro 实际页面配色。
- `dist/`：存在构建输出目录，本报告按源码读取，未把构建产物作为主要来源。

## 2. 配色来源文件清单

| 文件路径 | 类型 | 说明 |
|---|---|---|
| `src/styles/global.css` | 全局 CSS | CSS variables、dark/light tokens、全局背景、渐变、阴影、发光 |
| `tailwind.config.mjs` | Tailwind 配置 | 将 CSS variables 映射为 Tailwind 颜色名 |
| `src/layouts/BaseLayout.astro` | Layout | 固定 dark theme，`theme-color: #050B14` |
| `src/pages/index.astro` | 页面入口 | 组合 Header、Hero、PriceSection、RadarSection、StatusSection、Footer |
| `src/components/Header.astro` | 组件 | header 背景、边框、CTA 渐变、导航状态色 |
| `src/components/Hero.astro` | 组件 | Hero badge、CTA、SVG 六边形、logo 发光 |
| `src/components/PriceSection.astro` | 组件 | Pricing 区块背景、表格、卡片、计算器、SVG 渐变 |
| `src/components/RadarSection.astro` | 组件 | Radar 动态 accent 色、表格、卡片、运行时 class |
| `src/components/StatusSection.astro` | 组件 | Status tone 色、卡片、动态点、hover 发光 |
| `src/components/EndpointCard.astro` | 组件 | API endpoint 卡片背景、边框、文字强调 |
| `src/components/Footer.astro` | 组件 | Footer 背景、边框、链接 hover |
| `public/logo.svg` | SVG | Logo cyan / magenta 渐变 |
| `public/favicon.svg` | SVG | Favicon 深色背景、sky、slate 文字 |

## 3. 全局 Design Tokens / CSS Variables

| Token / 变量名 | 原始值 | 推断 HEX | 用途 | 来源文件 |
|---|---:|---:|---|---|
| `--background` dark | `2 6 23` | `#020617` | 主背景 | `src/styles/global.css` |
| `--foreground` dark | `221 228 229` | `#dde4e5` | 主文字 | `src/styles/global.css` |
| `--muted` dark | `187 201 205` | `#bbc9cd` | 次级文字 | `src/styles/global.css` |
| `--card` dark | `14 20 22` | `#0e1416` | 卡片背景 | `src/styles/global.css` |
| `--border` dark | `60 73 76` | `#3c494c` | 边框 | `src/styles/global.css` |
| `--primary` dark | `138 235 255` | `#8aebff` | 主品牌 cyan | `src/styles/global.css` |
| `--primary-foreground` dark | `0 54 62` | `#00363e` | 主色前景 | `src/styles/global.css` |
| `--surface-lowest` dark | `9 15 17` | `#090f11` | 最深容器 | `src/styles/global.css` |
| `--surface-low` dark | `14 20 22` | `#0e1416` | 低层容器 | `src/styles/global.css` |
| `--surface-container` dark | `22 29 30` | `#161d1e` | 表格 / 卡片容器 | `src/styles/global.css` |
| `--tertiary` dark | `236 211 255` | `#ecd3ff` | 紫色强调 | `src/styles/global.css` |
| `--tertiary-container` dark | `217 176 255` | `#d9b0ff` | 紫色容器 / SVG | `src/styles/global.css` |
| `--secondary-container` dark | `5 102 217` | `#0566d9` | 蓝色辅助 | `src/styles/global.css` |
| `--background` light | `248 250 252` | `#f8fafc` | light 背景 | `src/styles/global.css` |
| `--foreground` light | `15 23 42` | `#0f172a` | light 主文字 | `src/styles/global.css` |
| `--muted` light | `71 85 105` | `#475569` | light 次级文字 | `src/styles/global.css` |
| `--card` light | `255 255 255` | `#ffffff` | light 卡片 | `src/styles/global.css` |
| `--border` light | `203 213 225` | `#cbd5e1` | light 边框 | `src/styles/global.css` |
| `--primary` light | `2 132 199` | `#0284c7` | light 主品牌 | `src/styles/global.css` |
| `--primary-foreground` light | `255 255 255` | `#ffffff` | light 主色前景 | `src/styles/global.css` |
| `--surface-lowest` light | `255 255 255` | `#ffffff` | light 最浅容器 | `src/styles/global.css` |
| `--surface-low` light | `248 250 252` | `#f8fafc` | light 低层容器 | `src/styles/global.css` |
| `--surface-container` light | `226 232 240` | `#e2e8f0` | light 表面容器 | `src/styles/global.css` |
| `--tertiary` light | `109 40 217` | `#6d28d9` | light 紫色强调 | `src/styles/global.css` |
| `--tertiary-container` light | `124 58 237` | `#7c3aed` | light 紫色容器 | `src/styles/global.css` |
| `--secondary-container` light | `37 99 235` | `#2563eb` | light 蓝色辅助 | `src/styles/global.css` |

## 4. Tailwind / UnoCSS / 框架颜色类

| Class / 配置项 | 推断颜色 | 使用位置 | 语义角色 |
|---|---:|---|---|
| `background` | `rgb(var(--background))` | Tailwind extend | 背景 token |
| `foreground` | `rgb(var(--foreground))` | Tailwind extend | 主文字 token |
| `muted` | `rgb(var(--muted))` | Tailwind extend | 次级文字 token |
| `card` | `rgb(var(--card))` | Tailwind extend | 卡片 token |
| `border` | `rgb(var(--border))` | Tailwind extend | 边框 token |
| `primary` | `rgb(var(--primary))` | Tailwind extend | 主品牌 token |
| `primary-foreground` | `rgb(var(--primary-foreground))` | Tailwind extend | 主色前景 token |
| `from-cyan-400` | `#22d3ee` | Header / Hero / Price CTA | CTA 渐变起点 |
| `to-blue-600` | `#2563eb` | Header / Hero / Price CTA | CTA 渐变终点 |
| `text-white` | `#ffffff` | CTA 按钮 | CTA 文字 |
| `text-green-400` | `#4ade80` | Radar | 绿色模型指标 |
| `text-blue-400` | `#60a5fa` | Radar / Status | 蓝色指标 |
| `text-blue-200` | `#bfdbfe` | Status | 蓝色数值 |
| `text-orange-400` | `#fb923c` | Radar | 橙色指标 |
| `text-purple-400` | `#c084fc` | Radar | 紫色指标 |
| `text-red-400` | `#f87171` | Radar | 红色指标 |
| `text-cyan-300` | `#67e8f9` | Status | 青色状态 |
| `text-amber-400` | `#fbbf24` | Status | 延迟 / amber 状态 |
| `bg-green-500/5` | `#22c55e` with 5% alpha | Radar hover veil | 绿色 hover 背景 |
| `bg-blue-500/5` | `#3b82f6` with 5% alpha | Radar hover veil | 蓝色 hover 背景 |
| `bg-orange-500/5` | `#f97316` with 5% alpha | Radar hover veil | 橙色 hover 背景 |
| `bg-purple-500/5` | `#a855f7` with 5% alpha | Radar hover veil | 紫色 hover 背景 |
| `bg-red-500/5` | `#ef4444` with 5% alpha | Radar hover veil | 红色 hover 背景 |
| `border-amber-400/30` | `#fbbf24` with 30% alpha | Status | amber 边框 |
| `border-cyan-400/35` | `#22d3ee` with 35% alpha | Status | cyan 边框 |
| `border-blue-500/40` | `#3b82f6` with 40% alpha | Status | blue 边框 |
| `bg-transparent` / `border-transparent` / `to-transparent` | transparent | Header / Logo / gradients | 透明状态 |

UnoCSS：未发现。

## 5. 实际颜色清单

| 颜色原始写法 | 推断 HEX | 语义角色 | 使用位置 | 来源文件 |
|---|---:|---|---|---|
| `#020617` / `rgb(2 6 23)` | `#020617` | 深色主背景 | `html`、`.site-background` | `src/styles/global.css` |
| `#dde4e5` | `#dde4e5` | 深色主文字 | `--foreground` | `src/styles/global.css` |
| `#bbc9cd` | `#bbc9cd` | 次级文字 | `--muted`、`text-muted` | `src/styles/global.css` |
| `#0e1416` | `#0e1416` | 卡片背景 | `--card`、Hero SVG fill | `src/styles/global.css` / `src/components/Hero.astro` |
| `rgba(14,20,22,0.82)` | `#0e1416` with 82% alpha | Hero 六边形填充 | Hero SVG | `src/components/Hero.astro` |
| `#3c494c` | `#3c494c` | 边框 | `--border`、`border-border` | `src/styles/global.css` |
| `#8aebff` | `#8aebff` | 主品牌 cyan | `--primary` | `src/styles/global.css` |
| `#00363e` | `#00363e` | 主色前景 | `--primary-foreground` | `src/styles/global.css` |
| `#090f11` | `#090f11` | 最深容器 | `--surface-lowest` | `src/styles/global.css` |
| `#161d1e` | `#161d1e` | 表面容器 | `--surface-container` | `src/styles/global.css` |
| `#ecd3ff` | `#ecd3ff` | 紫色强调 | `--tertiary` | `src/styles/global.css` |
| `#d9b0ff` | `#d9b0ff` | 紫色容器 / SVG | `--tertiary-container`、Hero SVG stroke | `src/styles/global.css` / `src/components/Hero.astro` |
| `#0566d9` | `#0566d9` | 蓝色辅助 | `--secondary-container`、Status hover shadow | `src/styles/global.css` / `src/components/StatusSection.astro` |
| `#050B14` | `#050b14` | 浏览器 theme color | `<meta name="theme-color">` | `src/layouts/BaseLayout.astro` |
| `#22d3ee` / `#22D3EE` | `#22d3ee` | CTA cyan、SVG stroke、logo cyan | Hero / Header / logo | `src/components/Hero.astro` / `public/logo.svg` |
| `#2563eb` | `#2563eb` | CTA blue endpoint | `to-blue-600` | Header / Hero / Price |
| `#730bc1` | `#730bc1` | Hero SVG 紫色渐变终点 | `hero-hex-grad` | `src/components/Hero.astro` |
| `#EC8CFF` | `#ec8cff` | Logo magenta | Logo SVG slash / ring | `public/logo.svg` |
| `#08111f` | `#08111f` | Favicon 背景 | `rect fill` | `public/favicon.svg` |
| `#38bdf8` | `#38bdf8` | Favicon sky stroke | favicon arrows | `public/favicon.svg` |
| `#f8fafc` | `#f8fafc` | Light 背景 / favicon slash | light token、favicon | `src/styles/global.css` / `public/favicon.svg` |
| `#0f172a` | `#0f172a` | Light 主文字 | `--foreground` light | `src/styles/global.css` |
| `#475569` | `#475569` | Light muted | `--muted` light | `src/styles/global.css` |
| `#cbd5e1` | `#cbd5e1` | Light border | `--border` light | `src/styles/global.css` |
| `#0284c7` | `#0284c7` | Light primary | `--primary` light | `src/styles/global.css` |
| `#6d28d9` | `#6d28d9` | Light tertiary | `--tertiary` light | `src/styles/global.css` |
| `#7c3aed` | `#7c3aed` | Light tertiary container | `--tertiary-container` light | `src/styles/global.css` |
| `#4ade80` | `#4ade80` | Radar green | `text-green-400` | `src/components/RadarSection.astro` |
| `#60a5fa` | `#60a5fa` | Radar blue | `text-blue-400` | `src/components/RadarSection.astro` |
| `#fb923c` | `#fb923c` | Radar orange | `text-orange-400` | `src/components/RadarSection.astro` |
| `#c084fc` | `#c084fc` | Radar purple | `text-purple-400` | `src/components/RadarSection.astro` |
| `#f87171` | `#f87171` | Radar red | `text-red-400` | `src/components/RadarSection.astro` |
| `#67e8f9` | `#67e8f9` | Status cyan text | `text-cyan-300` | `src/components/StatusSection.astro` |
| `#fbbf24` | `#fbbf24` | Status amber | `text-amber-400` | `src/components/StatusSection.astro` |
| `currentColor` | 依赖父级文字色 | SVG 图标继承色 | 多组件 SVG path | 多文件 |

## 6. 渐变、阴影与发光效果

| 原始值 | 涉及颜色 | 视觉用途 | 使用位置 | 来源文件 |
|---|---|---|---|---|
| `linear-gradient(90deg, rgb(var(--primary)), rgb(var(--tertiary)))` | `#8aebff` -> `#ecd3ff` | 品牌文字 / 标题渐变 | `.brand-gradient`, `.headline-gradient` | `src/styles/global.css` |
| `radial-gradient(... rgb(var(--primary) / 0.16) ...)` | `#8aebff` alpha | 全局背景光晕 | `body` | `src/styles/global.css` |
| `.site-background` 多层背景 | `#020617`, `#2fd9f4`, `#d9b0ff` | 首屏深色科技背景 | 页面外层 | `src/styles/global.css` |
| `text-shadow: 0 0 28px rgb(var(--primary) / 0.42)` | `#8aebff` alpha | 标题发光 | `.headline-gradient` | `src/styles/global.css` |
| `box-shadow: 0 0 18px rgb(34 211 238 / 0.35)` | `#22d3ee` alpha | CTA 按钮发光 | `.glow-button` | `src/styles/global.css` |
| `shadow-[0_0_16px_rgba(138,235,255,0.85)]` | `#8aebff` alpha | badge 点发光 | Hero | `src/components/Hero.astro` |
| `drop-shadow-[0_0_18px_rgba(34,211,238,0.55)]` | `#22d3ee` alpha | Hero 六边形发光 | Hero SVG | `src/components/Hero.astro` |
| `linearGradient hero-hex-grad` | `#22d3ee` -> `#730bc1` | Hero 六边形描边 | Hero SVG | `src/components/Hero.astro` |
| `price-hex-a/b` | `#8AEBFF` <-> `#D9B0FF` | Pricing 装饰六边形 | Price SVG | `src/components/PriceSection.astro` |
| `.price-panel box-shadow` | black alpha + white inset | Pricing 卡片层次 | Pricing panels | `src/components/PriceSection.astro` |
| `.neon-border` | `#8aebff` alpha | Pricing neon 边框 | Pricing panels | `src/components/PriceSection.astro` |
| `.glow-text` / `.glow-magenta` | `#8aebff`, `#ecd3ff` alpha | 数值文字发光 | Price calculator | `src/components/PriceSection.astro` |
| Radar accent shadows | green / blue / orange / purple / red | 模型分数发光 | Radar cards | `src/components/RadarSection.astro` |
| `.status-card box-shadow` | black alpha + white inset | Status 卡片层次 | Status cards | `src/components/StatusSection.astro` |
| `.status-sequence-dot.is-active` | `#8aebff`, `#2fd9f4` alpha | 状态点动画发光 | Status footer row | `src/components/StatusSection.astro` |

## 7. Dark / Light Theme 差异

源码定义了两个主题 token 集，但实际 HTML 固定为 `data-theme="dark"`。Header 中存在隐藏的 theme toggle placeholder，未发现真实切换逻辑。

| 主题 | 背景 | 卡片 | 文字 | 边框 | 强调色 |
|---|---:|---:|---:|---:|---:|
| dark | `#020617` | `#0e1416` / `#090f11` / `#161d1e` | `#dde4e5` / `#bbc9cd` | `#3c494c` | `#8aebff`, `#ecd3ff`, `#0566d9` |
| light | `#f8fafc` | `#ffffff` / `#e2e8f0` | `#0f172a` / `#475569` | `#cbd5e1` | `#0284c7`, `#6d28d9`, `#2563eb` |

## 8. 按页面 / 组件归类的颜色

### `src/pages/index.astro`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `site-background` | 页面总背景容器 | `<div class="site-background">` |
| 组件继承 | Header / Hero / Price / Radar / Status / Footer | `<Hero />`, `<PriceSection />`, `<RadarSection />`, `<StatusSection />` |

### `src/styles/global.css`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `#020617` | 深色主背景 | `--background: 2 6 23;` |
| `#8aebff` | 主品牌 cyan | `--primary: 138 235 255;` |
| `#ecd3ff` | 紫色强调 | `--tertiary: 236 211 255;` |
| `#22d3ee` alpha | 按钮 / 卡片发光 | `box-shadow: 0 0 18px rgb(34 211 238 / 0.35)` |

### `src/components/Header.astro`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `bg-card/60` | Header 半透明背景 | `bg-card/60` |
| `border-border/30` | Header 下边框 | `border-b border-border/30` |
| `#2fd9f4` alpha | Header shadow | `shadow-[0_0_18px_rgba(47,217,244,0.1)]` |
| `from-cyan-400 to-blue-600` | CTA 背景 | `bg-gradient-to-r from-cyan-400 to-blue-600` |
| `text-primary`, `text-muted` | 导航 active / inactive | `border-primary text-primary` / `text-muted` |

### `src/components/Hero.astro`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `#8aebff` | badge 点 / 主文字 | `bg-primary shadow-[0_0_16px_rgba(138,235,255,0.85)]` |
| `#22d3ee` | CTA 起点 / SVG stroke | `from-cyan-400`, `stroke="#22d3ee"` |
| `#2563eb` | CTA 终点 | `to-blue-600` |
| `#d9b0ff` | 装饰 SVG stroke | `stroke="#d9b0ff"` |
| `#730bc1` | Hero SVG 渐变终点 | `stop-color="#730bc1"` |
| `rgba(14,20,22,0.82)` | Hero 六边形填充 | `fill="rgba(14,20,22,0.82)"` |

### `src/components/EndpointCard.astro`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `bg-card/40` | API 卡片背景 | `border border-border bg-card/40` |
| `from-cyan-300/5` | 卡片轻微渐变 | `bg-gradient-to-br from-cyan-300/5 to-transparent` |
| `#ecd3ff` | Method 强调色 | `text-[rgb(var(--tertiary))]` |
| `#090f11` | Endpoint 输入背景 | `bg-[rgb(var(--surface-lowest))]` |

### `src/components/PriceSection.astro`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `#8aebff` alpha | 背景光晕 / badge / neon | `bg-primary/10`, `rgb(var(--primary) / 0.13)` |
| `#ecd3ff` alpha | 背景紫色光晕 | `rgb(var(--tertiary) / 0.09)` |
| `#161d1e` alpha | 表头 / hover / summary row | `bg-[rgb(var(--surface-container)_/_0.45)]` |
| `#090f11` alpha | 子卡片背景 | `bg-[rgb(var(--surface-lowest)_/_0.78)]` |
| `#8AEBFF`, `#D9B0FF` | Pricing SVG 六边形渐变 | `stop-color="#8AEBFF"` / `#D9B0FF` |
| `#22d3ee` -> `#2563eb` | Calculate 按钮 | `from-cyan-400 to-blue-600` |

### `src/components/RadarSection.astro`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `#4ade80` | green model accent | `text-green-400`, `rgba(74,222,128,0.3)` |
| `#60a5fa` | blue model accent | `text-blue-400`, `rgba(96,165,250,0.3)` |
| `#fb923c` | orange model accent | `text-orange-400`, `rgba(251,146,60,0.3)` |
| `#c084fc` | purple model accent | `text-purple-400`, `rgba(192,132,252,0.3)` |
| `#f87171` | red model accent | `text-red-400`, `rgba(248,113,113,0.3)` |
| `#ecd3ff` | Radar table header | `text-[rgb(var(--tertiary))]` |
| `rgba(180, 210, 230, 0.55)` | thanks link | `.radar-thanks-link { color: ... }` |

### `src/components/StatusSection.astro`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `#8aebff` | cyan tone | `text-primary`, `border-primary/30` |
| `#3b82f6`, `#60a5fa`, `#bfdbfe` | blue tone | `border-blue-500/40`, `text-blue-400`, `text-blue-200` |
| `#ecd3ff` | purple tone | `text-[rgb(var(--tertiary))]` |
| `#22d3ee`, `#67e8f9` | green tone 实际偏 cyan | `border-cyan-400/35`, `text-cyan-300` |
| `#fbbf24` | amber tone | `text-amber-400` |
| `#020617` / black alpha | 卡片阴影 | `0 24px 80px rgb(0 0 0 / 0.22)` |

### `src/components/Footer.astro`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `#090f11` | Footer 背景 | `bg-[rgb(var(--surface-lowest))]` |
| `#3c494c` alpha | Footer 边框 | `border-border/20`, `border-border/70` |
| `#8aebff` | 联系按钮默认色 | `text-primary` |
| `#dde4e5` | hover 文字 | `hover:text-foreground` |

### `public/logo.svg`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `#22D3EE` | Logo 箭头 / 渐变起点 | `stroke="#22D3EE"` |
| `#EC8CFF` | Logo slash / 渐变终点 | `stroke="#EC8CFF"` |

### `public/favicon.svg`

| 颜色 | 用途 | 相关代码片段 |
|---|---|---|
| `#08111f` | favicon 背景 | `fill="#08111f"` |
| `#38bdf8` | favicon 箭头 | `stroke="#38bdf8"` |
| `#f8fafc` | favicon slash | `stroke="#f8fafc"` |

## 9. 当前配色体系总结

- 当前网站实际运行入口固定为 dark theme，整体是深色科技风。
- 主背景集中在近黑蓝 `#020617`、`#090f11`、`#0e1416`、`#161d1e`。
- 主品牌色是高亮 cyan：token `#8aebff`，Tailwind CTA 使用 `#22d3ee` 到 `#2563eb`。
- 辅助强调色以浅紫 / magenta 为主：`#ecd3ff`、`#d9b0ff`、Logo 中 `#ec8cff`。
- 大量使用渐变、radial glow、text-shadow、box-shadow、drop-shadow，科技感发光明显。
- 颜色体系一部分集中在 CSS variables，一部分分散在组件 Tailwind class、arbitrary class、SVG 字面量和脚本动态 class 中。
- 存在 light theme token，但源码中未发现启用或切换逻辑。
- Radar / Status 有额外状态色：green、blue、orange、purple、red、amber，来自 Tailwind 默认色和 rgba 发光值。

## 10. 给 ChatGPT 的简洁版配色摘要

当前 CodeToken 网站源码中实际读取到的配色大致如下：

- 技术栈：Astro static site + TailwindCSS + 普通 CSS。
- 样式来源：`src/styles/global.css` 的 CSS variables，全局 class，Astro 组件内 Tailwind class / scoped style，`public/logo.svg` 和 `public/favicon.svg`。
- 主背景色：dark theme 固定启用，主背景 `#020617`，深层容器 `#090f11`，卡片 `#0e1416`，surface container `#161d1e`。
- 卡片 / 容器色：`#0e1416`、`#090f11`、`#161d1e`，常带 40% 到 94% alpha。
- 主品牌色：`#8aebff`，CTA 另使用 `#22d3ee` -> `#2563eb`。
- 强调色：紫色 `#ecd3ff`、`#d9b0ff`，Hero SVG 还有 `#730bc1`，Logo magenta `#ec8cff`。
- 主文字色：`#dde4e5`。
- 次级文字色：`#bbc9cd`。
- 边框色：`#3c494c`，常以 20% 到 70% alpha 使用。
- 渐变色：品牌标题 `#8aebff` -> `#ecd3ff`；CTA `#22d3ee` -> `#2563eb`；Logo `#22d3ee` -> `#ec8cff`；Pricing SVG `#8aebff` <-> `#d9b0ff`。
- 阴影 / 发光色：主要为 cyan glow，`rgba(34,211,238,...)`、`rgba(47,217,244,...)`、`rgba(138,235,255,...)`；紫色 glow 为 `rgb(var(--tertiary) / ...)`。
- Dark / Light theme 情况：dark 与 light tokens 都定义了，但 HTML 固定 `data-theme="dark"`，未发现实际主题切换逻辑。
- 主要相关文件：`src/styles/global.css`、`tailwind.config.mjs`、`src/layouts/BaseLayout.astro`、`src/pages/index.astro`、`src/components/Header.astro`、`Hero.astro`、`PriceSection.astro`、`RadarSection.astro`、`StatusSection.astro`、`EndpointCard.astro`、`Footer.astro`、`public/logo.svg`、`public/favicon.svg`。
- 备注：`Reference/` 目录存在，但未被当前 Astro 源码引用；`dist/` 是构建输出，本次未作为源码配色依据。
