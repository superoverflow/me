import { ThemeProvider } from 'theme-ui'
import theme from '@theme-ui/preset-swiss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
    
}

export default MyApp
