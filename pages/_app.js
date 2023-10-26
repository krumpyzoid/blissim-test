import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import '../styles/globals.css'
import { GlobalProvider } from "../state/global-context";
import theme from '../theme/theme';


function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp
