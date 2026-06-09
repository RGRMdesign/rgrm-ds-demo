import { useEffect, useState } from 'react';
import {
  Button,
  Heading,
  Paragraph,
  Section,
  type HeadingAppearance,
  type HeadingLevel,
  type SectionTheme,
} from '@rgrmdesign/rgrm-ds-react';

const THEMES: { id: SectionTheme; label: string }[] = [
  { id: 'root', label: 'Base' },
  { id: 'dark', label: 'Dark' },
  { id: 'brand', label: 'Brand' },
];

const HEADING_EXAMPLES: {
  level: HeadingLevel;
  appearance?: HeadingAppearance;
  label: string;
}[] = [
  { level: 1, appearance: 'display', label: 'appearance="display"' },
  { level: 1, label: 'level=1' },
  { level: 2, label: 'level=2' },
  { level: 3, label: 'level=3' },
  { level: 4, label: 'level=4' },
  { level: 5, label: 'level=5' },
  { level: 6, label: 'level=6' },
];

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
        <nav className="demo-theme-switch" aria-label="Choose theme">
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
          <Heading level={1} appearance="display">
            RGRM Design System.
          </Heading>
          <Paragraph size="large">
            A small demo built with <code>@rgrmdesign/rgrm-ds-react</code> and{' '}
            <code>@rgrmdesign/rgrm-ds-tokens</code>. Switch the theme above to see the
            design tokens update live.
          </Paragraph>
          <Paragraph>
            Built with pnpm, Node 24, and Vite, and automatically published to GitHub
            Pages.
          </Paragraph>
        </Section>

        <Section spacingTop="small" spacingBottom="small">
          <Heading level={2}>Headings</Heading>
          <Paragraph>
            The <code>Heading</code> component supports semantic levels 1 through 6,
            plus an optional <code>appearance</code> prop for visual scale (including{' '}
            <code>display</code>).
          </Paragraph>
          <div className="demo-stack">
            {HEADING_EXAMPLES.map((example) => (
              <div key={example.label} className="demo-row">
                <span className="demo-row__label">{example.label}</span>
                <Heading level={example.level} appearance={example.appearance}>
                  The quick brown fox.
                </Heading>
              </div>
            ))}
          </div>
        </Section>

        <Section spacingTop="small" spacingBottom="small">
          <Heading level={2}>Paragraphs</Heading>
          <Paragraph>
            The <code>Paragraph</code> component comes in <code>large</code>, default,
            and <code>small</code> variants.
          </Paragraph>
          <div className="demo-stack">
            <div className="demo-row">
              <span className="demo-row__label">size="large"</span>
              <Paragraph size="large">
                Lead paragraph for an introduction or key message.
              </Paragraph>
            </div>
            <div className="demo-row">
              <span className="demo-row__label">default</span>
              <Paragraph>
                Default body text for most page content.
              </Paragraph>
            </div>
            <div className="demo-row">
              <span className="demo-row__label">size="small"</span>
              <Paragraph size="small">
                Small text for captions or fine print.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Section spacingTop="small" spacingBottom="small">
          <Heading level={2}>Buttons</Heading>
          <Paragraph>
            The <code>Button</code> component draws its styles from the design tokens
            and adapts automatically to the theme. It accepts all standard{' '}
            <code>button</code> attributes.
          </Paragraph>
          <div className="demo-stack">
            <div className="demo-row">
              <span className="demo-row__label">variant="primary"</span>
              <div className="demo-buttons">
                <Button variant="primary">Primary action</Button>
              </div>
            </div>
            <div className="demo-row">
              <span className="demo-row__label">disabled</span>
              <div className="demo-buttons">
                <Button variant="primary" disabled>
                  Disabled
                </Button>
              </div>
            </div>
            <div className="demo-row">
              <span className="demo-row__label">with onClick</span>
              <div className="demo-buttons">
                <Button
                  variant="primary"
                  onClick={() => window.alert('Clicked!')}
                >
                  Click me
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section spacingTop="small" spacingBottom="small">
          <Heading level={2}>Sections &amp; themes</Heading>
          <Paragraph>
            Each <code>Section</code> can have its own theme via the{' '}
            <code>theme</code> prop. The tokens within the section adapt
            automatically.
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
              This section uses the <strong>{t.label}</strong> theme. The background,
              text color, and accent color come directly from the design tokens.
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
            <div className="demo-buttons">
              <Button variant="primary">Action in {t.label} theme</Button>
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
