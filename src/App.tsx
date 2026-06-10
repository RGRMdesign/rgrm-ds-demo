import { useEffect, useState } from 'react';
import {
  Button,
  Heading,
  Paragraph,
  Section,
  type SectionTheme,
} from '@rgrmdesign/rgrm-ds-react';

import { ThemeSwitch } from './ThemeSwitch.tsx';

const STORYBOOK_URL = 'https://rgrmdesign.github.io/rgrm-ds/';

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
      <ThemeSwitch theme={theme} onThemeChange={setTheme} />

      <main>
        <Section spacingTop="page-top" spacingBottom="large">
          <Heading level={1} appearance="display">
            RGRM Design System
          </Heading>
          <Paragraph>
            Minimal integration demo. See{' '}
            <a href={STORYBOOK_URL} target="_blank" rel="noreferrer">
              Storybook
            </a>{' '}
            for documentation.
          </Paragraph>
        </Section>

        <Section spacingTop="small" spacingBottom="small">
          <Heading level={2}>A Section with a Heading</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
          <div>
            <Button variant="primary">Dummy action</Button>
          </div>
        </Section>
      </main>
    </div>
  );
}
