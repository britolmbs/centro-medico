import { Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
    return (
       <Container id="about" sx={{ py: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
            Sobre Nós
        </Typography>
       </Container>
    )
}


export default About;