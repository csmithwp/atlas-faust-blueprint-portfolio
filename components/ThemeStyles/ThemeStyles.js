import appConfig from '../../app.config';

const themes = {
  blue: {
    '--color-black': '#000',
    '--color-primary': '#FF5733',
    '--color-secondary': '#880808	',
    '--color-tertiary': '#CCCCCC',
    '--color-white': '#FFFFFF',
  },
  red: {
    '--color-black': '#000',
    '--color-primary': '#FF5733',
    '--color-secondary': '#880808	',
    '--color-tertiary': '#CCCCCC',
    '--color-white': '#FFFFFF',
  },
  green: {
    '--color-black': '#000',
    '--color-primary': '#FF5733',
    '--color-secondary': '#880808	',
    '--color-tertiary': '#CCCCCC',
    '--color-white': '#FFFFFF',
  },
};

export default function ThemeStyles() {
  const themeColor = appConfig?.themeColor ?? 'blue';

  return (
    // eslint-disable-next-line react/no-unknown-property
    <style jsx global>{`
      :root {
        --color-black: ${themes[themeColor]['--color-black']};
        --color-primary: ${themes[themeColor]['--color-primary']};
        --color-secondary: ${themes[themeColor]['--color-secondary']};
        --color-tertiary: ${themes[themeColor]['--color-tertiary']};
        --color-white: ${themes[themeColor]['--color-white']};
      }
    `}</style>
  );
}
