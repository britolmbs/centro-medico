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
        </List>
        
        </nav>
       
       
       </Box>
      
    )
}



export default Products;