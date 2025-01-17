import { Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto', padding: '1rem 0' background: '#24244f', color: '#828ba6'}}>
            <Container>
                <Typography variant="body1" align="center">
                © 2024 Lucas Brito | Centro Médico
                </Typography>
            </Container>
        </footer>

    );
};

export default Footer;