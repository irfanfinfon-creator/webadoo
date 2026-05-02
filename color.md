# Webadoo - Tailwind Color Reference

Color classes used in the project for Figma design system setup.

## Primary Accent (Indigo)

| Tailwind Class | Hex Value | Usage |
|---------------|-----------|-------|
| `text-indigo-600` | `#4f46e5` | Accent text (Hero, Projects, Testimonials) |
| `bg-indigo-600` | `#4f46e5` | Primary CTA buttons (Hero, About) |
| `bg-indigo-600/80` | `#4f46e5` at 80% opacity | Button hover state (About) |
| `border-indigo-600/50` | `#4f46e5` at 50% opacity | Accent borders (Projects, Testimonials tags) |
| `text-indigo-400` | `#818cf8` | Link hover text (Header, Footer) |
| `hover:text-indigo-400` | `#818cf8` | Navigation & footer link hovers |
| `hover:text-indigo-500` | `#6366f1` | Client logo hover (Clients) |
| `hover:border-indigo-500/50` | `#6366f1` at 50% opacity | Card hover borders (Projects, Benefits, Testimonials) |
| `shadow-indigo-500/10` | `#6366f1` at 10% opacity | Subtle glow on testimonial cards |

## Neutrals (Zinc/Gray Scale)

| Tailwind Class | Hex Value | Usage |
|---------------|-----------|-------|
| `text-white` | `#ffffff` | Primary text color (all sections) |
| `text-white/90` | `#ffffff` at 90% opacity | Secondary text (Hero, ContactCTA) |
| `text-zinc-400` | `#a1a1aa` | Secondary text, descriptions (Footer, Projects, Testimonials) |
| `text-zinc-300` | `#d4d4d8` | Body text (Benefits, Testimonials cards) |
| `text-zinc-500` | `#71717a` | Role text in testimonials |
| `text-zinc-600` | `#52525b` | Fallback client logo text (Clients) |
| `bg-black` | `#000000` | Main background (all sections) |
| `bg-black/80` | `#000000` at 80% opacity | Header background |
| `bg-black/60` | `#000000` at 60% opacity | CTA overlay |
| `bg-black/50` | `#000000` at 50% opacity | Sheet overlay |
| `bg-zinc-900` | `#18181b` | Card backgrounds (Projects, Benefits, Testimonials) |
| `border-zinc-800` | `#27272a` | Borders (Projects, Footer, Clients, Header Sheet) |
| `bg-white/10` | `#ffffff` at 10% opacity | Subtle buttons (Footer) |
| `bg-white/20` | `#ffffff` at 20% opacity | Subtle buttons (Footer) |
| `bg-white/30` | `#ffffff` at 30% opacity | Subtle buttons (ContactCTA) |
| `hover:bg-white/10` | `#ffffff` at 10% opacity | Header mobile menu hover |
| `hover:bg-white/20` | `#ffffff` at 20% opacity | Footer button hover |
| `bg-gray-100` | `#f3f4f6` | Image fallback (ImageWithFallback) |

## Semantic Theme Colors (from theme.css)

*Used in shadcn/ui components (Sheet)*

| Token | Tailwind Class | Light Mode | Dark Mode |
|-------|---------------|------------|-----------|
| `--background` | `bg-background` | `#ffffff` | `oklch(0.145 0 0)` |
| `--foreground` | `text-foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` |
| `--secondary` | `bg-secondary` | `oklch(0.95 0.0058 264.53)` | `oklch(0.269 0 0)` |
| `--muted-foreground` | `text-muted-foreground` | `#717182` | `oklch(0.708 0 0)` |
| `--border` | `border-border` | `rgba(0, 0, 0, 0.1)` | `oklch(0.269 0 0)` |
| `--ring` | `ring-ring` | `oklch(0.708 0 0)` | `oklch(0.439 0 0)` |

## Custom Accent Colors (from theme.css)

| Token | Tailwind Class | Hex Value |
|-------|---------------|-----------|
| `--indigo-600` | `bg-indigo-600`, `text-indigo-600` | `#4f46e5` |
| `--indigo-400` | `text-indigo-400`, `hover:text-indigo-400` | `#818cf8` |
| `--indigo-500` | `hover:border-indigo-500/50`, `shadow-indigo-500/10` | `#6366f1` |

## Custom Neutral Colors (from theme.css)

| Token | Tailwind Class | Hex Value |
|-------|---------------|-----------|
| `--zinc-300` | `text-zinc-300` | `#d4d4d8` |
| `--zinc-400` | `text-zinc-400` | `#a1a1aa` |
| `--zinc-500` | `text-zinc-500` | `#71717a` |
| `--zinc-600` | `text-zinc-600` | `#52525b` |
| `--zinc-800` | `border-zinc-800` | `#27272a` |
| `--zinc-900` | `bg-zinc-900` | `#18181b` |

## Color Palette Summary for Figma

### Primary
- Indigo 600: `#4f46e5`

### Secondary (Accent)
- Indigo 400: `#818cf8`
- Indigo 500: `#6366f1`

### Background & Surface
- Black: `#000000`
- Zinc 900: `#18181b`
- Zinc 800: `#27272a`

### Text
- White: `#ffffff`
- Zinc 400: `#a1a1aa`
- Zinc 300: `#d4d4d8`
- Zinc 500: `#71717a`
- Zinc 600: `#52525b`

### Interactive States
- White at 10-30% opacity for subtle hovers
- Black at 50-80% opacity for overlays
