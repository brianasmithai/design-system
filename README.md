# @brianasmithai/design-system

A calm, dense, utility-focused design system built on React, Tailwind CSS, and Radix UI primitives.

## Design Language

**All signal, no noise.** This design system prioritizes content over chrome. Interfaces are dense but breathable—tight enough to maximize information on screen, loose enough to remain scannable and touch-friendly. The visual language is calm and utilitarian: neutral backgrounds recede so data can lead, while a single accent color appears sparingly to guide attention toward actions and status. Dark mode is the canonical experience.

Every element must earn its place. Color conveys meaning, not decoration. Motion provides feedback, not flourish. Layouts are predictable so users build spatial memory. Accessibility is foundational—keyboard navigation, screen reader support, and sufficient contrast are non-negotiable defaults, not afterthoughts. The system serves internal tools, dashboards, and data-driven applications where efficiency and clarity matter more than delight.

---

## Installation

```bash
pnpm add @brianasmithai/design-system
```

Or with npm:

```bash
npm install @brianasmithai/design-system
```

## Setup

### 1. Import the styles

In your app's entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@brianasmithai/design-system/styles.css';
```

### 2. Configure Tailwind to scan the package

The design system uses Tailwind CSS classes. You must tell Tailwind to scan the package so it generates the necessary CSS.

**Tailwind v4 (CSS-based config):**

Add this to your main CSS file:

```css
@import "tailwindcss";
@source "../node_modules/@brianasmithai/design-system/dist";
```

**Tailwind v3 (JS config):**

Add the package to your `tailwind.config.js`:

```js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@brianasmithai/design-system/dist/**/*.{js,mjs}',
  ],
  // ...
};
```

### 3. Use components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from '@brianasmithai/design-system';

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="success">Active</Badge>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

---

## Available Components

The package exports **23 components**:

| Component | Description |
|-----------|-------------|
| Alert | Informational banners with title and description |
| Avatar | User profile images with fallback support |
| Badge | Status indicators and labels (default, secondary, destructive, outline, success, warning) |
| Button | Clickable actions with multiple variants |
| Card | Container for grouped content |
| Checkbox | Boolean input control |
| Dialog | Modal overlays for focused interactions |
| Drawer | Slide-out panel (mobile-friendly) |
| DropdownMenu | Contextual action menus |
| Input | Text input fields |
| Label | Form field labels with accessibility |
| Popover | Floating content panels |
| RadioGroup | Single-selection option groups |
| ScrollArea | Custom scrollable containers |
| Select | Dropdown selection inputs |
| Separator | Visual dividers |
| Sheet | Side panel overlays |
| Skeleton | Loading placeholder animations |
| Toaster | Toast notifications (via Sonner) |
| Table | Data display in rows and columns |
| Tabs | Tabbed content navigation |
| Textarea | Multi-line text input |
| Tooltip | Contextual hover information |

### Utilities

The package also exports the `cn()` utility function for merging Tailwind classes:

```tsx
import { cn } from '@brianasmithai/design-system';

<div className={cn('p-4', isActive && 'bg-primary')} />
```

---

## Theming

The design system uses CSS custom properties for theming, supporting both light and dark modes. Colors are defined in the OKLCH color space for perceptual uniformity.

### Key Design Tokens

| Token | Purpose |
|-------|---------|
| `--background` / `--foreground` | Base page colors |
| `--surface` / `--surface-foreground` | Card and elevated surfaces |
| `--primary` / `--primary-foreground` | Primary actions |
| `--secondary` / `--secondary-foreground` | Secondary elements |
| `--muted` / `--muted-foreground` | Subdued content |
| `--success` / `--success-foreground` | Success states |
| `--warning` / `--warning-foreground` | Warning states |
| `--destructive` / `--destructive-foreground` | Error/danger states |
| `--border` / `--input` / `--ring` | Interactive boundaries |

### Typography Utilities

The system provides semantic typography classes:

- `text-headline` — Page headings (28px, semibold)
- `text-title` — Section titles (20px, semibold)
- `text-subtitle` — Subtitles (16px, regular)
- `text-body` — Body text (15px, regular)
- `text-body-small` — Secondary text (14px, regular)
- `text-label` — Form labels (14px, medium)
- `text-code` — Monospace code (14px)

### Radius Tokens

- `rounded-control` — Buttons, inputs, small interactive elements
- `rounded-surface` — Cards, dialogs, larger containers
- `rounded-full` — Avatars, pills, circular elements

---

## Tech Stack

- **React** 18/19 with TypeScript
- **Tailwind CSS** 4 for utility-first styling
- **Radix UI** primitives for accessibility
- **class-variance-authority** for variant management

---

## Development

To work on the design system itself:

```bash
# Clone the repo
git clone https://github.com/brianasmithai/design-system.git
cd design-system

# Install dependencies
pnpm install

# Start development server (playground)
pnpm dev

# Build the library for publishing
pnpm build:lib

# Run linter
pnpm lint
```

### Project Structure

```
src/
├── index.ts             # Package entry point (exports all components)
├── index.css            # Theme CSS (published as styles.css)
├── App.tsx              # Development playground
├── components/
│   └── ui/              # Component library
│       ├── index.ts     # Barrel export
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
└── lib/
    └── utils.ts         # Utility functions
```

---

## License

MIT
