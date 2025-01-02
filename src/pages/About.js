import { Container, Typography, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

const data = [
  {
    id: '1',
    imagecentro: '', // Substitua por uma URL válida
  },
];

const About = () => {
  return (
    <Container id="about" sx={{ py: 8 }}>
      <Card sx={{ maxWidth: 800, margin: '0 auto' }}>
        <CardMedia
          component="img"
          height="400"
          image={data[0].imagecentro}
          alt="Centro Médico"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h3" align="center" gutterBottom>
            Sobre Nós
          </Typography>
          <Typography variant="body1" paragraph>
            No coração de Santa Cruz, nosso centro médico tem se dedicado desde 2022 a oferecer serviços de saúde de alta qualidade com um toque humano. Especializados em clínica médica, exames laboratoriais, odontologia e tratamentos estéticos, nos orgulhamos de proporcionar cuidados abrangentes e personalizados a preços acessíveis. Nosso compromisso é com o bem-estar e a satisfação de nossos pacientes, garantindo que cada visita seja uma experiência positiva e acolhedora. Venha nos conhecer e descubra como podemos cuidar de você e da sua saúde com excelência e carinho.
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Missão e Visão
          </Typography>
          <Typography variant="body1">
            Nossa missão é proporcionar cuidados de saúde de alta qualidade, focando no bem-estar e na satisfação de nossos pacientes. Através de uma abordagem personalizada e abrangente, buscamos ser um centro de referência em saúde, promovendo práticas inovadoras e sustentáveis. Nossa visão é ser reconhecidos como líderes em excelência médica, mantendo um compromisso inabalável com a ética, a integridade e a melhoria contínua.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;