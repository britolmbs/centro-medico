import React from 'react';
import Footer from './components/Footer';
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
      <Footer />
    </Router>
    </ThemeProvider>
   
  )
}

export default App;
