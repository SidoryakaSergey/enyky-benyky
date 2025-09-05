# Project Structure Documentation

## 📁 Directory Structure

```
src/
├── assets/                     # Static assets
│   └── logos/                  # Logo images
├── components/                 # React components organized by category
│   ├── common/                 # Shared/common components
│   ├── layout/                 # Layout-related components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── index.ts           # Export barrel
│   ├── seo/                   # SEO-related components
│   │   ├── SEOHead.tsx
│   │   ├── LanguageURLHandler.tsx
│   │   └── index.ts
│   ├── ui/                    # UI/Interactive components
│   │   ├── LanguageSwitcher.tsx
│   │   ├── LogoSelector.tsx
│   │   └── index.ts
│   └── index.ts               # Main components export
├── i18n/                      # Internationalization
│   ├── locales/               # Translation files
│   └── index.ts              # i18n configuration
├── pages/                     # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── CelebrityDubbing.tsx
│   ├── Portfolio.tsx
│   ├── Contacts.tsx
│   └── index.ts              # Pages export barrel
├── styles/                    # Organized CSS files
│   ├── components/            # Component-specific styles
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── Layout.css
│   │   ├── LanguageSwitcher.css
│   │   └── LogoSelector.css
│   ├── pages/                 # Page-specific styles
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Services.css
│   │   ├── CelebrityDubbing.css
│   │   ├── Portfolio.css
│   │   └── Contacts.css
│   └── globals.css           # Global styles and CSS variables
├── App.tsx                   # Main App component
├── App.css                   # App-specific styles
├── index.css                 # Base styles
├── main.tsx                  # App entry point
└── vite-env.d.ts            # Vite type definitions
```

## 🎯 Benefits of This Structure

### 1. **Component Organization**
- **Layout**: Header, Footer, Layout components
- **UI**: Interactive components like LanguageSwitcher, LogoSelector
- **SEO**: SEO-related components (SEOHead, LanguageURLHandler)
- **Common**: Shared components (future additions)

### 2. **Import Simplification**
```typescript
// Before (old structure)
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { SEOHead } from './components/SEOHead.tsx';

// After (new structure)
import { Header, Footer } from './components/layout';
import { SEOHead } from './components/seo';
// or even simpler:
import { Header, Footer, SEOHead } from './components';
```

### 3. **Style Organization**
- All component styles in `src/styles/components/`
- All page styles in `src/styles/pages/`
- Global styles and CSS variables in `src/styles/globals.css`

### 4. **Scalability**
- Easy to add new components in appropriate categories
- Clear separation of concerns
- Consistent import patterns

## 📦 Export Barrels

Each directory has an `index.ts` file that re-exports all components:

```typescript
// src/components/layout/index.ts
export { Layout } from './Layout';
export { Header } from './Header';
export { Footer } from './Footer';

// src/components/index.ts
export * from './layout';
export * from './ui';
export * from './seo';
```

This allows for clean imports throughout the application.

## 🎨 Global Styles

The `src/styles/globals.css` file contains:
- CSS custom properties (variables) for consistent theming
- Utility classes for common styling patterns
- Base reset and typography styles

## 🔧 Usage Examples

### Adding a New Component
1. Create the component in the appropriate category folder
2. Add the component's CSS to the corresponding styles folder
3. Export the component in the category's `index.ts`
4. The component is automatically available through the main components index

### Adding a New Page
1. Create the page component in `src/pages/`
2. Create the page's CSS in `src/styles/pages/`
3. Add the export to `src/pages/index.ts`
4. Import and use in `App.tsx` routing