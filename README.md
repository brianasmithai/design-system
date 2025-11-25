# Design System Playground

A React-based design system playground showcasing [shadcn/ui](https://ui.shadcn.com/) components built on [Radix UI](https://www.radix-ui.com/) primitives with [Tailwind CSS](https://tailwindcss.com/).

## Tech Stack

- **React** 19 with TypeScript
- **Vite** 7 for fast development and builds
- **Tailwind CSS** 4 for utility-first styling
- **shadcn/ui** components (Radix UI primitives)
- **tw-animate-css** for animations

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── App.tsx              # Main playground showcasing all components
├── App.css              # Component-specific styles
├── index.css            # Global styles & CSS custom properties (theming)
├── main.tsx             # Application entry point
├── components/
│   └── ui/              # shadcn/ui components
│       ├── alert.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── popover.tsx
│       ├── radio-group.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── sonner.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       └── tooltip.tsx
└── lib/
    └── utils.ts         # Utility functions (cn helper)
```

## Available Components

The playground includes **23 shadcn/ui components**:

| Component | Description |
|-----------|-------------|
| Alert | Informational banners with title and description |
| Avatar | User profile images with fallback support |
| Badge | Status indicators and labels |
| Button | Clickable actions with multiple variants |
| Card | Container for grouped content |
| Checkbox | Boolean input control |
| Dialog | Modal overlays for focused interactions |
| Drawer | Slide-out panel (mobile-friendly) |
| Dropdown Menu | Contextual action menus |
| Input | Text input fields |
| Label | Form field labels with accessibility |
| Popover | Floating content panels |
| Radio Group | Single-selection option groups |
| Scroll Area | Custom scrollable containers |
| Select | Dropdown selection inputs |
| Separator | Visual dividers |
| Sheet | Side panel overlays |
| Skeleton | Loading placeholder animations |
| Sonner | Toast notifications |
| Table | Data display in rows and columns |
| Tabs | Tabbed content navigation |
| Textarea | Multi-line text input |
| Tooltip | Contextual hover information |

## Playground Features

The main `App.tsx` serves as a comprehensive smoke test and visual reference:

- **Header** — Demonstrates Tooltip, Button, Badge, Avatar, and DropdownMenu
- **Profile Form** — Showcases Input, Textarea, Select, Checkbox, RadioGroup, Label, and Button
- **Preferences Tab** — Uses Skeleton placeholders for loading states
- **Recent Items** — Displays ScrollArea, Separator, Badge, and Card composition
- **Projects Table** — Shows Table components with Badge and Button integration
- **Dialog** — Modal overlay triggered from the tabs section
- **Alert** — Informational banner confirming setup status

## Theming

The design system supports light and dark modes via CSS custom properties defined in `src/index.css`. The theme uses the OKLCH color space for perceptually uniform colors.

### CSS Variables

Key design tokens include:

- `--background` / `--foreground` — Base colors
- `--card` / `--card-foreground` — Card surfaces
- `--primary` / `--primary-foreground` — Primary actions
- `--secondary` / `--secondary-foreground` — Secondary elements
- `--muted` / `--muted-foreground` — Subdued content
- `--accent` / `--accent-foreground` — Highlighted elements
- `--destructive` — Error/danger states
- `--border` / `--input` / `--ring` — Interactive boundaries
- `--radius` — Border radius scale

## Adding New Components

Use the shadcn/ui CLI to add more components:

```bash
npx shadcn@latest add [component-name]
```

See the [shadcn/ui documentation](https://ui.shadcn.com/docs/components) for available components.

## Linting

```bash
pnpm lint
```

ESLint is configured with TypeScript and React-specific rules via `eslint.config.js`.
