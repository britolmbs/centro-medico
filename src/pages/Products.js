import  Box  from "@mui/material/Box";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

const Products =  () =>{
    return (
       <Box sx={{ Width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}> 
       <nav aria-label="main mailbox folders">
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#">
                <ListItemText primary="Clinica Medica" />
             </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
             <ListItemButton component="a" href="#">
                <ListItemText primary="Fisoterapia" />
             </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#">
                <ListItemText primary="Exames Complementares" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#">
                <ListItemText primary="Psicologia" />
                </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemText primary="Dentista" />
                        </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemText primary="Tratamentos Estéticos" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemText primary="Medicina do Trabalho" />
                    </ListItemButton>
                </ListItem>
        </List>
        
        </nav>
       
       
       </Box>
      
    )
}



export default Products;