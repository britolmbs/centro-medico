import  Box  from "@mui/material/Box";
import { Card, CardContent, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

const Products =  () =>{
    const [selecionarServico, setSelecionarServico] = useState(null);

    const handleListItemClick = (servico) => {
        setSelecionarServico(servico === selecionarServico ? null : servico);
    };

    const servicos = [
        "Clinica Médica",
        "Fisoterapia",
        "Exames Complementares",
        "Psicologia",
        "Dentista",
        "Tratamentos Estéticos",
        "Medicina do Trabalho",
    ];

    return (
       <Box sx={{ Width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}> 
       <nav aria-label="main mailbox folders">
        <List>
            {servicos.map((servico, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => handleListItemClick(servico)}>
                        <ListItemText primary={servico} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        </nav>

        {selecionarServico && (
            <Card sx={{ marginTop: 2}}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {selecionarServico}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {selecionarServico}
                    </Typography>
                </CardContent>
            </Card>
        )}
       
       
       </Box>
      
    );
};



export default Products;