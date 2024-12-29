import { Container, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

const data = [
  {
    id: '1',
    imagecentro: '', 
  },
];

const About = () => {
  return (
    <Container id="about" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Sobre Nós
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="300"
              image={data[0].imagecentro}
              alt="Centro Médico"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
              No coração de Santa Cruz, nosso centro médico tem se dedicado desde 2022 a oferecer serviços de saúde de alta qualidade com um toque humano. Especializados em clínica médica, exames laboratoriais, odontologia e tratamentos estéticos, nos orgulhamos de proporcionar cuidados abrangentes e personalizados a preços acessíveis. Nosso compromisso é com o bem-estar e a satisfação de nossos pacientes, garantindo que cada visita seja uma experiência positiva e acolhedora. Venha nos conhecer e descubra como podemos cuidar de você e da sua saúde com excelência e carinho.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
