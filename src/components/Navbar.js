import styled from '@emotion/styled';
import { Facebook, Instagram } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem,  ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
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
                    <NavbarButton component={NavLink} to="/">Inicio</NavbarButton>
                    <NavbarButton component={NavLink} to="/About">Sobre Nós</NavbarButton>
                    <NavbarButton component={Link} to="/Products">Nossos serviços</NavbarButton>
                    <NavbarButton component={Link} to="/Contact">Entre em contato</NavbarButton>
                    <NavbarButton component={Link} to="/endereco">Onde Estamos</NavbarButton>
                    <IconButton href='https://www.instagram.com/cmjoaoxxiii' target='_blank' color='secondary'><Instagram /></IconButton>
                    <IconButton href='https://www.facebook.com' target='_blank' color='secondary'><Facebook /></IconButton>
                    <IconButton color='inherit' edge='end' sx={{ display: { xs: 'block', sm: 'none'} }}
                    onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                </AppBar>
                <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
                <List component='nav' variant='plain' >
                    <ListItem component={Link} to='/' onClick={toggleDrawer(false)}>
                    <ListItemText primary='Inicio' />
                    </ListItem> 
                    <ListItem component={NavLink} to='/About' onClick={toggleDrawer(false)}>
                    <ListItemText primary='Sobre Nós' />
                    </ListItem>
                    <ListItem component={Link} to='/products' onClick={toggleDrawer(false)}>
                    <ListItemText primary='Nossos serviços' />
                    </ListItem>
                    <ListItem component={Link} to='/Contact' onClick={toggleDrawer(false)}>
                    <ListItemText primary='Entre em contato' />
                    </ListItem>
                    <ListItem component={Link} to='/endereco' onClick={toggleDrawer(false)}>
                    <ListItemText primary='Onde Estamos' />
                    </ListItem>
                    </List>    
                </Drawer>

           
</Box>

</>
    
    );
};


export default Navbar;