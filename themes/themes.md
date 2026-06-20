# Themes

Colour system for the Shona dictionary webpage.

The design uses Zimbabwe-inspired colours with warm reading surfaces, strong green identity, maize-gold highlights, and red accents for grammar tags and emphasis.

---

## Theme Principles

- **Green** is the main identity colour. Use it for navigation, headings, icons, active states, and primary brand elements.
- **Gold** is the main action colour. Use it for buttons, highlights, favourites, selected states, and important calls to action.
- **Red** should be used sparingly. It works best for grammar tags, warnings, emphasis, or important labels.
- **Cream and sand tones** keep the interface warm, readable, and comfortable for dictionary content.
- **Dark mode** should feel premium and focused, not simply inverted.

---

# Light Mode

Light mode should feel warm, airy, readable, and inviting.

## Palette

| Token                    | Name              |       Hex | Usage                                     |
| ------------------------ | ----------------- | --------: | ----------------------------------------- |
| `--color-primary`        | Primary Green     | `#1F5C3A` | Main brand colour, headings, nav, icons   |
| `--color-accent`         | Accent Gold       | `#F2B705` | Buttons, highlights, active states        |
| `--color-danger`         | Accent Red        | `#B8322A` | Grammar tags, emphasis, warning accents   |
| `--color-background`     | Background Cream  | `#FFF7E6` | Page background                           |
| `--color-surface`        | Surface Sand      | `#F6E8C8` | Cards, panels, secondary surfaces         |
| `--color-surface-raised` | Raised Cream      | `#FFFFFF` | Inputs, inner cards, content blocks       |
| `--color-text`           | Main Text         | `#1B1B1B` | Main readable text                        |
| `--color-muted`          | Muted Brown       | `#6B4F35` | Secondary text, helper text, descriptions |
| `--color-placeholder`    | Warm Placeholder  | `#8C7357` | Input placeholders                        |
| `--color-border`         | Soft Beige Border | `#D9C59C` | Card borders, dividers, input borders     |
| `--color-hero-text`      | Hero Cream Text   | `#FFF7E6` | Text on dark green hero sections          |

## CSS Variables

```css
:root {
  color-scheme: light;

  --color-primary: #1f5c3a;
  --color-accent: #f2b705;
  --color-danger: #b8322a;

  --color-background: #fff7e6;
  --color-surface: #f6e8c8;
  --color-surface-raised: #ffffff;

  --color-text: #1b1b1b;
  --color-muted: #6b4f35;
  --color-placeholder: #8c7357;
  --color-border: #d9c59c;
  --color-hero-text: #fff7e6;

  --shadow-soft: 0 10px 25px rgba(27, 27, 27, 0.12);
  --shadow-card: 0 8px 18px rgba(27, 27, 27, 0.1);
}
```

## Recommended Usage

```css
body {
  background: var(--color-background);
  color: var(--color-text);
}

.app-shell {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
}

.hero {
  background: var(--color-primary);
  color: var(--color-hero-text);
}

.button-primary {
  background: var(--color-accent);
  color: var(--color-text);
}

.word-title,
.section-heading,
.nav-active {
  color: var(--color-primary);
}

.grammar-tag {
  background: var(--color-danger);
  color: white;
}

.entry-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
}

.inner-panel,
.search-input {
  background: var(--color-surface-raised);
  border-color: var(--color-border);
}
```

---

# Dark Mode

Dark mode should feel sleek, premium, focused, and comfortable for long reading sessions.

## Palette

| Token                    | Name                |       Hex | Usage                                           |
| ------------------------ | ------------------- | --------: | ----------------------------------------------- |
| `--color-primary`        | Primary Green       | `#2E8B57` | Headings, nav, active states, icons             |
| `--color-accent`         | Accent Gold         | `#F2B705` | Buttons, stars, highlights, selected states     |
| `--color-danger`         | Accent Red          | `#D94A3A` | Grammar tags, emphasis, warning accents         |
| `--color-background`     | Background Charcoal | `#0F1115` | Page background                                 |
| `--color-surface`        | Surface Dark Slate  | `#101418` | Main cards and panels                           |
| `--color-surface-raised` | Card Green-Black    | `#102A22` | Inner panels, entry sections, highlighted cards |
| `--color-text`           | Main Text           | `#F8F3E8` | Main readable text                              |
| `--color-muted`          | Muted Text          | `#B7A88D` | Secondary text and translations                 |
| `--color-placeholder`    | Muted Placeholder   | `#9C8F78` | Input placeholders                              |
| `--color-border`         | Border Deep Slate   | `#2A313A` | Card borders, dividers, input borders           |
| `--color-hero-text`      | Hero Cream Text     | `#F8F3E8` | Text on dark hero sections                      |

## CSS Variables

```css
[data-theme="dark"] {
  color-scheme: dark;

  --color-primary: #2e8b57;
  --color-accent: #f2b705;
  --color-danger: #d94a3a;

  --color-background: #0f1115;
  --color-surface: #101418;
  --color-surface-raised: #102a22;

  --color-text: #f8f3e8;
  --color-muted: #b7a88d;
  --color-placeholder: #9c8f78;
  --color-border: #2a313a;
  --color-hero-text: #f8f3e8;

  --shadow-soft: 0 14px 35px rgba(0, 0, 0, 0.45);
  --shadow-card: 0 10px 24px rgba(0, 0, 0, 0.35);
}
```

## Recommended Usage

```css
[data-theme="dark"] body {
  background: var(--color-background);
  color: var(--color-text);
}

[data-theme="dark"] .app-shell {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
}

[data-theme="dark"] .hero {
  background: linear-gradient(135deg, #102a22 0%, #0f1115 100%);
  color: var(--color-hero-text);
}

[data-theme="dark"] .button-primary {
  background: var(--color-accent);
  color: #0f1115;
}

[data-theme="dark"] .entry-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
}

[data-theme="dark"] .inner-panel,
[data-theme="dark"] .search-input {
  background: var(--color-surface-raised);
  border-color: var(--color-border);
}
```

---

# Component Mapping

## Page Background

| Mode  |    Colour |
| ----- | --------: |
| Light | `#FFF7E6` |
| Dark  | `#0F1115` |

Use this for the full webpage background.

## Main App Container

| Mode  |    Colour |
| ----- | --------: |
| Light | `#F6E8C8` |
| Dark  | `#101418` |

Use this for the main rounded webpage shell or dashboard container.

## Header / Hero

| Mode  |                                      Colour |
| ----- | ------------------------------------------: |
| Light |                                   `#1F5C3A` |
| Dark  | `linear-gradient(135deg, #102A22, #0F1115)` |

Use green strongly in the hero because it gives the dictionary its identity.

## Search Bar

| Element           |     Light |      Dark |
| ----------------- | --------: | --------: |
| Search background | `#FFFFFF` | `#102A22` |
| Search border     | `#1F5C3A` | `#2A313A` |
| Search icon       | `#1F5C3A` | `#2E8B57` |
| Placeholder       | `#8C7357` | `#9C8F78` |
| Button            | `#F2B705` | `#F2B705` |

## Dictionary Entry Cards

| Element          |     Light |      Dark |
| ---------------- | --------: | --------: |
| Card background  | `#FFF7E6` | `#101418` |
| Inner panel      | `#FFFFFF` | `#102A22` |
| Word title       | `#1F5C3A` | `#F8F3E8` |
| Section label    | `#6B4F35` | `#2E8B57` |
| Main text        | `#1B1B1B` | `#F8F3E8` |
| Translation text | `#6B4F35` | `#B7A88D` |
| Border           | `#D9C59C` | `#2A313A` |

## Grammar Tags

| Mode  | Background |      Text |
| ----- | ---------: | --------: |
| Light |  `#B8322A` | `#FFFFFF` |
| Dark  |  `#D94A3A` | `#FFFFFF` |

Use these for tags such as `zita`, `chiito`, `chirevo`, and other grammar labels.

## Buttons and Highlights

| Element               |                                          Colour |
| --------------------- | ----------------------------------------------: |
| Primary button        |                                       `#F2B705` |
| Star / favourite icon |                                       `#F2B705` |
| Active nav underline  | `#2E8B57` in dark mode, `#1F5C3A` in light mode |
| Button text           | `#1B1B1B` in light mode, `#0F1115` in dark mode |

---

# Tailwind Example

Use CSS variables with Tailwind arbitrary values:

```tsx
<div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
  <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xl">
    <header className="bg-[var(--color-primary)] text-[var(--color-hero-text)]">
      <h1 className="text-5xl font-black">Duramazwi reChiShona</h1>
    </header>

    <div className="rounded-3xl bg-[var(--color-background)] p-4 shadow-md">
      <input
        className="bg-[var(--color-surface-raised)] text-[var(--color-text)] placeholder:text-[var(--color-placeholder)]"
        placeholder="Tsvaga izwi..."
      />
      <button className="bg-[var(--color-accent)] text-[#1B1B1B]">
        Tsvaga
      </button>
    </div>
  </div>
</div>
```

---

# Accessibility Notes

- Keep body text on cream or charcoal backgrounds for strong contrast.
- Avoid using gold for long text; use it for buttons, icons, and highlights only.
- Avoid using red as a main navigation colour; keep it for tags and emphasis.
- In dark mode, avoid pure black for every surface. Use layered dark colours so cards remain visible.
- Use cream text in dark mode instead of pure white to reduce glare.
- Avoid using emojis, use SVGs instead,

---

# Suggested Typography

## Headings

Use a display serif for cultural warmth and identity.

Recommended options:

- `Playfair Display`
- `Cormorant Garamond`
- `Libre Baskerville`

## Body Text

Use a clean sans-serif for readability.

Recommended options:

- `Inter`
- `Nunito Sans`
- `Source Sans 3`

## Suggested Pairing

```css
:root {
  --font-heading: "Playfair Display", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
}

h1,
h2,
h3 {
  font-family: var(--font-heading);
}

body,
button,
input {
  font-family: var(--font-body);
}
```

---

# Example Theme Toggle

```ts
function setTheme(theme: "light" | "dark") {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "light" || savedTheme === "dark") {
    setTheme(savedTheme);
    return;
  }

  setTheme(prefersDark ? "dark" : "light");
}
```

---

# Final Recommendation

Use the **light mode** as the default for reading-heavy dictionary pages. Use the **dark mode** as a premium alternative for users who prefer lower brightness.

The most important colours to protect across both themes are:

| Purpose            |     Light |      Dark |
| ------------------ | --------: | --------: |
| Brand identity     | `#1F5C3A` | `#2E8B57` |
| Main action        | `#F2B705` | `#F2B705` |
| Grammar tags       | `#B8322A` | `#D94A3A` |
| Reading background | `#FFF7E6` | `#0F1115` |
| Main text          | `#1B1B1B` | `#F8F3E8` |
