import { Send } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
const Contact = () => {
    return (
       <Box
       component="form"
       sx={{ display: "flex", alignItems: "center", justifyContent: "center",'& .MuiTextField-root': { m: 1, windth: '25ch'}}}
       noValidate
       autoComplete="off" >

        <div>
            <TextField
            required
            id="nome"
            label="Nome Completo"
            size="small"
            fullWidth
            />

            <TextField
            required
            id="email"
            label="Email"
            type="email" 
            size="small"
            fullWidth
            />
            <TextField
            required
            id="telefone"
            label="Telefone"
            type="tel"
            size="small"
            fullWidth />
            <TextField
            required
            id="mensagem"
            label="Sua Mensagem"
            type="text"
            multiline
            rows={4}
            size="small"
            fullWidth />

            <Button variant="contained"
            color="secondary"
            endIcon={<Send />}
            >Enviar</Button>

           
        </div>
       </Box>
    )
}


export default Contact;