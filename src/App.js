import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
      primary: {
          main: '#24244f',
      },
      secondary: {
          main: '#828ba6',
      },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
 <Router>
      <Navbar />
    </Router>
    </ThemeProvider>
   
  )
}

export default App;
