// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from '@nextui-org/react';
import '../styles/styles.css';

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryLight: 'yellow',
      primaryLightHover: 'yellow',
      primaryLightActive: 'yellow',
      primaryLightContrast: '$yellow600',
      primary: 'yellow',
      primaryBorder: '$yellow500',
      primaryBorderHover: '$yellow600',
      primarySolidHover: '$yellow700',
      primarySolidContrast: '$white',
      primaryShadow: '$yellow500',

      foreground: 'yellow',

      link: '#5E1DAD',
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
