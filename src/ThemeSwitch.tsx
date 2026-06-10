import type { SectionTheme } from '@rgrmdesign/rgrm-ds-react';

const THEMES: { id: SectionTheme; label: string }[] = [
  { id: 'root', label: 'Base' },
  { id: 'dark', label: 'Dark' },
  { id: 'brand', label: 'Brand' },
];

type ThemeSwitchProps = {
  theme: SectionTheme;
  onThemeChange: (theme: SectionTheme) => void;
};

export function ThemeSwitch({ theme, onThemeChange }: ThemeSwitchProps) {
  return (
    <nav className="demo-theme-switch" aria-label="Choose theme">
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          className="demo-theme-switch__btn"
          aria-pressed={theme === t.id}
          onClick={() => onThemeChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}

export { THEMES };
