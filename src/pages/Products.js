import Box from "@mui/material/Box";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Products = () => {
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
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", width: "100%" }}>
      <Box sx={{ width: "20%", minWidth: 200, paddingRight: 2 }}>
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
      </Box>
      <Box sx={{ width: "60%", display: "flex", justifyContent: "center" }}>
        {selecionarServico && (
          <Card sx={{ width: "100%", maxWidth: 400, margin: 2 }}>
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
    </Box>
  );
};

export default Products;
