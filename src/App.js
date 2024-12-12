import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import "swiper/css";
import "swiper/css/navigation";
import { register } from "swiper/element/bundle";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';


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
      <Routes>
        <Route path='/' element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Products" element={<Products />} />
    </Routes>
    <Footer />
    </Router>
    </ThemeProvider>
   
  )
}

export default App;
