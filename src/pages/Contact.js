import { Send } from "@mui/icons-material";
import { Box, Button, TextField, Typography, Snackbar, Alert } from "@mui/material";
import React, {  useState } from "react";
const Contact = () => {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
            nome: '',
            email: '',
            telefone: '',
            mensagem: ''
        });
    };

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    }

    return (
<>
        <div>
       <Typography variant="h3" display="flex" align="center" justifyContent="center" gutterBottom>
        Entre em contato </Typography>
    
        </div>

       <Box
       component="form"
       sx={{ display: "flex", alignItems: "center", justifyContent: "center",'& .MuiTextField-root': { m: 1, windth: '25ch'}}}
       noValidate
       autoComplete="off"
       onSubmit={handleSubmit} >

        <div>
            <TextField
            required
            id="nome"
            label="Nome Completo"
            size="small"
            fullWidth
            value={form.nome}
            onChange={handleChange}
            />

            <TextField
            required
            id="email"
            label="Email"
            type="email" 
            size="small"
            fullWidth
            value={form.email}
            onChange={handleChange}
            />

            <TextField
            required
            id="telefone"
            label="Telefone"
            type="tel"
            size="small"
            fullWidth
            value={form.telefone}
            onChange={handleChange} />

            <TextField
            required
            id="mensagem"
            label="Sua Mensagem"
            type="text"
            multiline
            rows={4}
            size="small"
            fullWidth
            value={form.mensagem}
            onChange={handleChange} />

            <Button variant="contained"
            color="secondary"
            endIcon={<Send />}
            >Enviar</Button>

           
        </div>
       </Box>

       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ windth: '100%'}}>
            Mensagem enviada com sucesso!
        </Alert>
       </Snackbar>
       </>
    )
}


export default Contact;