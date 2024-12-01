import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Carrossel from './components/Carrossel';
import "swiper/css";
import "swiper/css/navigation";
import { register } from "swiper/element/bundle";
register();
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
      <Carrossel />
      <Footer />
    </Router>
    </ThemeProvider>
   
  )
}

export default App;
