import React from "react";
import { Box, Card, CardMedia } from "@mui/material";

const Endereco = () => {
    return(
        <Card sx={{ maxWidth: 600, margin: 'auto', boxShadow: 3, borderRadius: 2 }}>
            <Box sx={{ position: 'relative', paddingTop: '56.25%',}}>
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.7807505834004!2d-43.698861430489764!3d-22.90883356337729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bfa3711035b4b%3A0x798425775d37a84c!2sAv.%20Jo%C3%A3o%20XXIII%2C%201318-1362%20-%20Santa%20Cruz%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023560-352!5e0!3m2!1spt-BR!2sbr!4v1734476366987!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Empresa"
                ></iframe>

            </Box>


        </Card>
    )
}


export default Endereco;