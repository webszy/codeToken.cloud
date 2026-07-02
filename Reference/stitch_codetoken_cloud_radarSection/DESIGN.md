---
name: Neon Protocol
colors:
  surface: '#0e1416'
  surface-dim: '#0e1416'
  surface-bright: '#343a3c'
  surface-container-lowest: '#090f11'
  surface-container-low: '#161d1e'
  surface-container: '#1a2122'
  surface-container-high: '#242b2d'
  surface-container-highest: '#2f3638'
  on-surface: '#dde4e5'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dde4e5'
  inverse-on-surface: '#2b3233'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ecd3ff'
  on-tertiary: '#490080'
  tertiary-container: '#d9b0ff'
  on-tertiary-container: '#730bc1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#0e1416'
  on-background: '#dde4e5'
  surface-variant: '#2f3638'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

This design system establishes a premium, futuristic aesthetic tailored for high-end AI infrastructure. It balances the high-energy "Cyberpunk" visual language with the precision and reliability required by enterprise SaaS platforms. The personality is "The Architect of the Future"—authoritative, sophisticated, and technically superior.

The visual style merges **Glassmorphism** with **Technical Brutalism**. It utilizes deep, layered canvases with frosted-glass surfaces, neon-accented glowing borders, and hexagonal geometric motifs. The interface prioritizes code-centric layouts and holographic data visualization to evoke a sense of immense computing power while maintaining professional clarity for developers.

## Colors

The palette is anchored by a void-like **Deep Navy (#020617)** background to maximize the luminosity of the neon accents. 

- **Primary (Neon Cyan):** Used for primary actions, success states, and critical code highlights.
- **Secondary (Electric Blue):** Applied to interactive elements and secondary data points.
- **Tertiary (Violet):** Reserved for decorative accents, brand elements, and complex data visualizations.
- **Quaternary (Magenta):** Used sparingly for highlighting specific syntax or high-priority alerts.

All surfaces use varying levels of opacity (10-40%) over the background to create depth, often enhanced with a 1px border using a linear gradient of the accent colors.

## Typography

The typography system relies on a hierarchy of three distinct typefaces to separate brand, content, and data.

- **Sora (Headlines):** A geometric sans-serif with a futuristic edge. Used for large headers and titles to provide a modern, high-tech personality.
- **Geist (Body):** A highly legible, developer-centric sans-serif designed for clarity in dense technical environments.
- **JetBrains Mono (Data & Labels):** Employed for code snippets, API keys, and status labels to reinforce the "infrastructure" utility of the product.

Heading levels utilize tight letter spacing to feel "engineered," while body text maintains generous line height for readability against dark backgrounds.

## Layout & Spacing

The design system follows a **12-column Fluid Grid** with specific constraints for "Holographic Panels."

- **Desktop:** 12 columns, 24px gutters, 64px side margins.
- **Mobile:** 4 columns, 16px gutters, 16px side margins.

Layouts are built using a hierarchical stack of containers. The primary "Dashboard" view uses a fixed sidebar with a fluid content area. Content should be grouped into cards that align with the grid, using the 4px base unit for internal padding. Margin between major sections should be consistent (e.g., 80px or 120px) to provide visual "breathing room" in a high-contrast environment.

## Elevation & Depth

Depth is achieved through **Backdrop Blurs** and **Glow Tiers** rather than traditional shadows.

1.  **Level 0 (Base):** Deep Navy (#020617) with an optional circuit-pattern SVG overlay at 5% opacity.
2.  **Level 1 (Sub-Surface):** Semi-transparent dark surfaces (10% white overlay) with a 20px backdrop blur and 1px dark-grey border.
3.  **Level 2 (Active Panels):** Glassmorphism cards with a 40% opacity fill and a 1px gradient border (e.g., Cyan to Blue).
4.  **Level 3 (Interactive/Glowing):** Elements like active buttons or focused inputs utilize an `outer-glow` effect (box-shadow: 0 0 15px [color]) to appear as if they are projecting light onto the interface.

## Shapes

The shape language is "Technical & Sharp." While the base `roundedness` is set to **Soft (0.25rem)** to maintain a premium feel, the design system heavily incorporates **Hexagonal Motifs** and **Angled Corners (Chamfers)** for decorative elements and containers.

- **Cards:** 8px corner radius.
- **Buttons:** 4px corner radius or 45-degree clipped corners for a "holographic tab" look.
- **Icons:** Contained within hexagonal frames with 1px stroke.
- **Patterns:** Circuit-board traces (horizontal, vertical, and 45-degree lines) should be used as connecting elements between UI panels.

## Components

### Buttons
- **Primary:** Gradient fill (Cyan to Blue), white text, and a matching cyan outer glow on hover. Use an arrow icon (->) for CTA momentum.
- **Ghost:** 1px Cyan border, transparent background, text-color matches border. Fill with 10% Cyan on hover.

### Cards (Holographic Panels)
- **Base:** Dark semi-transparent background with a 1px border.
- **Header:** Include a "Technical Label" (JetBrains Mono, caps) in the top-left and a 3-dot "Window" decoration in the top-right.
- **Interaction:** On hover, the border gradient should animate or increase in luminosity.

### Input Fields
- **Style:** Darkest background, 1px grey border.
- **Focus State:** Border changes to Cyan with a subtle inner glow. The label should shift to a "Code-label" style above the input.

### Chips & Status
- **Success:** Neon Cyan text with a subtle background pulse.
- **Warning:** Magenta text.
- **Neutral:** 1px white border at 20% opacity.

### Code Blocks
- Use a specialized dark theme (monokai-inspired) within a recessed panel. Include a "Copy" button in the top right that flashes Cyan when clicked.