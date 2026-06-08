import { useEffect, useState } from 'react';
import {
  Heading,
  Paragraph,
  Section,
  type HeadingLevel,
  type SectionTheme,
} from '@rgrmdesign/rgrm-ds-react';

const THEMES: { id: SectionTheme; label: string }[] = [
  { id: 'root', label: 'Base' },
  { id: 'dark', label: 'Dark' },
  { id: 'brand', label: 'Brand' },
];

const HEADING_LEVELS: HeadingLevel[] = ['display', 1, 2, 3, 4, 5, 6];

const SWATCHES: { name: string; varName: string }[] = [
  { name: 'background', varName: '--rgrm-theme-background' },
  { name: 'background-2', varName: '--rgrm-theme-background-2' },
  { name: 'text', varName: '--rgrm-theme-text' },
  { name: 'heading-accent', varName: '--rgrm-theme-heading-accent' },
  { name: 'button-primary', varName: '--rgrm-theme-button-primary-background' },
  { name: 'border', varName: '--rgrm-theme-border' },
];

export function App() {
  const [theme, setTheme] = useState<SectionTheme>('root');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'root') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <div className="demo">
      <header className="demo-header">
        <span className="demo-header__brand">RGRM Design System</span>
        <nav className="demo-theme-switch" aria-label="Thema kiezen">
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              className="demo-theme-switch__btn"
              aria-pressed={theme === t.id}
              onClick={() => setTheme(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <Section spacingTop="page-top" spacingBottom="large">
          <Heading level="display">RGRM Design System.</Heading>
          <Paragraph size="large">
            Een kleine demo gebouwd met <code>@rgrmdesign/rgrm-ds-react</code> en{' '}
            <code>@rgrmdesign/rgrm-ds-tokens</code>. Wissel hierboven van thema om de
            design tokens live te zien veranderen.
          </Paragraph>
          <Paragraph>
            Gebouwd met pnpm, Node 24 en Vite, en automatisch gepubliceerd naar
            GitHub Pages.
          </Paragraph>
        </Section>

        <Section spacingTop="small" spacingBottom="small">
          <Heading level={2}>Headings</Heading>
          <Paragraph>
            De <code>Heading</code> component ondersteunt niveaus 1 t/m 6 plus{' '}
            <code>display</code>.
          </Paragraph>
          <div className="demo-stack">
            {HEADING_LEVELS.map((level) => (
              <div key={String(level)} className="demo-row">
                <span className="demo-row__label">
                  level={typeof level === 'string' ? `"${level}"` : level}
                </span>
                <Heading level={level}>The quick brown fox.</Heading>
              </div>
            ))}
          </div>
        </Section>

        <Section spacingTop="small" spacingBottom="small">
          <Heading level={2}>Paragraphs</Heading>
          <Paragraph>
            De <code>Paragraph</code> component heeft de varianten{' '}
            <code>large</code>, standaard en <code>small</code>.
          </Paragraph>
          <div className="demo-stack">
            <div className="demo-row">
              <span className="demo-row__label">size="large"</span>
              <Paragraph size="large">
                Lead paragraaf voor een introductie of belangrijke boodschap.
              </Paragraph>
            </div>
            <div className="demo-row">
              <span className="demo-row__label">default</span>
              <Paragraph>
                Standaard bodytekst voor de meeste inhoud op een pagina.
              </Paragraph>
            </div>
            <div className="demo-row">
              <span className="demo-row__label">size="small"</span>
              <Paragraph size="small">
                Kleine tekst voor bijschriften of de kleine lettertjes.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Section spacingTop="small" spacingBottom="small">
          <Heading level={2}>Sections &amp; thema's</Heading>
          <Paragraph>
            Elke <code>Section</code> kan een eigen thema krijgen via de{' '}
            <code>theme</code> prop. De tokens binnen de sectie passen zich
            automatisch aan.
          </Paragraph>
        </Section>

        {THEMES.map((t) => (
          <Section
            key={t.id}
            theme={t.id}
            spacingTop="small"
            spacingBottom="small"
          >
            <Heading level={3}>
              {t.label}
              {t.id !== 'root' ? ` · data-theme="${t.id}"` : ''}
            </Heading>
            <Paragraph>
              Deze sectie gebruikt het <strong>{t.label}</strong>-thema. De
              achtergrond, tekstkleur en accentkleur komen rechtstreeks uit de
              design tokens.
            </Paragraph>
            <div className="demo-swatches">
              {SWATCHES.map((s) => (
                <div key={s.varName} className="demo-swatch">
                  <span
                    className="demo-swatch__chip"
                    style={{ background: `var(${s.varName})` }}
                  />
                  <span className="demo-swatch__name">{s.name}</span>
                </div>
              ))}
            </div>
          </Section>
        ))}
      </main>

      <footer className="demo-footer">
        <Paragraph size="small">
          RGRM Design System demo · @rgrmdesign/rgrm-ds-react +
          @rgrmdesign/rgrm-ds-tokens
        </Paragraph>
      </footer>
    </div>
  );
}
