import styled from '@emotion/styled';
import { Facebook, Instagram } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const NavbarButton = styled(Button)(({ theme }) => ({
    color: '#828ba6',
    [theme.breakpoints.down('sm')]: {
    display: 'none',
},
}));
const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setDrawerOpen(open);
    };

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6' sx={{ flexGrow: 1,}}>Centro Médico</Typography>
                    <NavbarButton href="/">Home</NavbarButton>
                    <NavbarButton href="/about">Sobre Nós</NavbarButton>
                    <NavbarButton href='/products'>Nossos serviços</NavbarButton>
                    <NavbarButton href='/contact'>Entre em contato</NavbarButton>
                    <NavbarButton href='endereco'>Onde nos encontrar</NavbarButton>
                    <IconButton href='https://www.instagram.com' target='_blank' color='secondary'><Instagram /></IconButton>
                    <IconButton href='https://www.facebook.com' target='_blank' color='secondary'><Facebook /></IconButton>
                </Toolbar>

            </AppBar>
</Box>

</>

       
    )
}


export default Navbar;