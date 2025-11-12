# Storming the Castle - Tang Soo Do Training App

A modern, disciplined web application for Tang Soo Do martial arts training. Features clean "dojo UI" design with belt-aware theming, practice tools, knowledge base, and print-friendly study materials.

## 🎯 Design Philosophy

**"Dojo UI, not dojo décor"** - Modern, geometric, professional interface without martial arts clichés.

### Visual Identity
- **Primary Color**: Midnight (#191970) - disciplined and confident
- **Typography**: Inter (400/500/600) - clean and readable
- **Spacing**: 8px grid rhythm with comfortable white space
- **Radius**: rounded-2xl (1rem) for cards and buttons
- **Shadows**: Soft, layered elevation
- **Motion**: 150-250ms for controls, 300-350ms for modals

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── BrandButton.tsx   # Primary button component with variants
│   ├── BrandCard.tsx     # Card component with title, description, actions
│   ├── BrandTabs.tsx     # Tab navigation component
│   ├── BeltPill.tsx      # Belt indicator chip
│   ├── TopBar.tsx        # Global navigation header
│   ├── EmptyState.tsx    # Empty state placeholder
│   └── KeyboardHints.tsx # Keyboard shortcut legend
│
├── contexts/
│   └── BeltThemeContext.tsx  # Belt-aware theming system
│
├── pages/                # Route pages
│   ├── Dashboard.tsx     # Home/overview page
│   ├── Train.tsx         # Practice hub with drills
│   ├── Knowledge.tsx     # Theory and concepts
│   ├── PrintGup.tsx      # Print-friendly requirements
│   └── Settings.tsx      # User preferences
│
├── index.css            # Design system tokens (CSS variables)
└── App.tsx              # Main app with routing
```

## 🎨 Design System

### Color Tokens (HSL)

All colors are defined in `src/index.css` as CSS variables:

```css
--brand-primary     /* Midnight #191970 */
--brand-ink         /* Text #0B0C10 */
--brand-focus       /* Electric Blue #2563EB */
--brand-surface     /* Background */
--belt-color        /* Dynamic belt color */
--belt-stripe       /* Deep blue stripe */
```

### Tailwind Midnight Palette

Available in `tailwind.config.ts`:

```js
midnight-50   // Lightest
midnight-100
...
midnight-700  // Base (primary buttons, active tabs)
midnight-800  // Hover state
midnight-900  // Darkest
```

### Component Variants

**BrandButton**
- `variant`: primary | outline | ghost | destructive
- `size`: sm | md | lg
- Focus ring: midnight-600

**BrandCard**
- Soft shadow with hover elevation
- Supports CardTitle, CardDescription, CardActions

**BrandTabs**
- Pill-style segmented control
- Active state: midnight-700 background

## 🥋 Belt Theme System

The app features dynamic belt-aware theming via `BeltThemeProvider`:

```tsx
import { useBeltTheme } from '@/contexts/BeltThemeContext';

const { currentBelt, setBelt, beltTheme } = useBeltTheme();
```

### Available Belts
- White (Huin Dee)
- Orange (Joo Hwang Dee)
- Green (Nok Dee)
- Red (Pahl Kahn Dee)
- Cho Dan (일단)
- Ee Dan (이단)

Belt colors are applied as CSS variables (`--belt-color`, `--belt-stripe`) and used sparingly for accents.

## 🧭 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Dashboard | Quick actions, practice sections, progress |
| `/train` | Training Hub | Line drills, one steps, video library |
| `/knowledge` | Knowledge Base | Eight key concepts, terminology, history |
| `/print/gup` | Gup Requirements | Print-friendly study sheet (Letter, 0.5in margins) |
| `/settings` | Settings | Belt selection, theme toggle, language preference |

## 🎛️ Key Components

### TopBar
Global header with:
- Logo + title
- Search bar (desktop)
- Belt selector dropdown
- Dark mode toggle
- Profile menu

### Practice Modals
- **Line Drill Practice**: Randomized technique drills with Korean names
- **One Step Practice**: Basic/Intermediate one-step sparring with segmented control
- Both support keyboard navigation (←/→, Space, N)

### KeyboardHints
Displays keyboard shortcuts in a clean, inline format:
```tsx
<KeyboardHints hints={[
  { key: '←', label: 'Previous' },
  { key: 'Space', label: 'Random' }
]} />
```

## ♿ Accessibility

- **WCAG AA** contrast minimum on light and dark themes
- Semantic HTML with landmark regions
- Keyboard-first navigation for all interactive elements
- Focus states using `--brand-focus` (2px ring, midnight-600)
- `prefers-reduced-motion` respected

## 🖨️ Print Styles

The `/print/gup` page is optimized for printing:
- Letter size, 0.5in margins
- Break-inside-avoid for sections
- Hidden chrome elements
- Black text on white background

## 🌙 Dark Mode

Dark mode is:
- Supported from day one
- System preference aware
- Toggle available in TopBar and Settings
- All components have dark variants

## 🔧 Customization

### Adding a New Belt

1. Add to `BeltThemeContext.tsx`:
```tsx
const beltThemes: Record<BeltLevel, BeltTheme> = {
  // ...
  'new-belt': {
    name: 'new-belt',
    color: 'H S% L%',  // HSL values
    stripe: '221 76% 20%',
    displayName: 'Display Name',
    koreanName: '한글 이름',
  },
};
```

2. Update type:
```tsx
export type BeltLevel = 'white' | 'orange' | ... | 'new-belt';
```

### Creating New Components

Follow these patterns:
- Use semantic tokens from design system
- Support dark mode via CSS variables
- Include proper TypeScript types
- Add keyboard support where relevant
- Use soft shadows (`shadow-card`) and rounded-2xl borders

## 📦 Dependencies

- **React 18** + TypeScript
- **Vite** for fast dev and build
- **TailwindCSS** for styling
- **shadcn/ui** for base components
- **lucide-react** for icons (1.5px stroke)
- **React Router** for navigation
- **Framer Motion** (optional, not yet implemented)

## 🚫 NO-GO List

**Never include:**
- Bamboo textures
- Dragons or katanas
- Random kanji or Japanese characters (Korean only)
- Tatami mats or "old parchment" aesthetics
- Harsh gradients or glow effects
- Cultural appropriation tropes

## 📝 Future Enhancements

- Video player integration (YouTube embeds)
- Timer/countdown for practice sessions
- Progress tracking with database backend
- Audio pronunciation guides
- Belt test timeline/countdown
- Framer Motion micro-interactions
- Form correction AI feedback

## 🤝 Contributing

When adding features:
1. Keep design tokens centralized in `index.css` and `tailwind.config.ts`
2. Use BeltTheme provider for belt-aware features
3. Follow the "dojo UI" philosophy - clean, geometric, disciplined
4. Test in both light and dark modes
5. Ensure keyboard accessibility
6. Add TypeScript types for all props

## 📄 License

This project is for educational and training purposes.

---

**Tang Soo!** 🥋
