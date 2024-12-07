import React from "react";
import { Grid, Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";


const produto = [
    {
        name: 'Consultas Médicas',
        image: '',
        description: 'No nosso centro médico, oferecemos consultas em diversas especialidades: ortopedia, pediatria, otorrinolaringologia, alergologia, cardiologia, ginecologia, pneumologia, clínica geral, endocrinologia e dermatologia. Cuide da sua saúde com profissionais qualificados!',

    },

    {
        name: 'Fisoterapia',
        image: '',
        description: 'No nosso centro médico, a fisioterapia é focada na melhora da postura, flexibilidade, tratamento de dores, coordenação motora e qualidade de vida, proporcionando relaxamento e bem-estar.',

    },
    {
        name: 'Exames Complementares',
        image: '',
        description: 'No nosso centro médico, oferecemos exames laboratoriais como teste de gravidez, endoscopia, teste alérgico, além de procedimentos como cirurgia de fimose, vasectomia e chip hormonal. Realizamos também ultrassonografias, ecocardiogramas, USG Doppler das pernas, eletrocardiogramas e monitoramento de pressão. Cuide da sua saúde com agilidade e precisão!',

    },
    {
        name: 'Psicologia',
        image: '',
        description: 'No nosso centro médico, oferecemos consultas de psicologia para promover a saúde mental. Nossos profissionais ajudam no manejo de ansiedade, depressão, estresse e autoconhecimento, proporcionando um espaço acolhedor e de suporte. Cuide da sua mente!',

    },
    {
        name: 'Dentista',
        image: '',
        description: 'No nosso centro médico, contamos com atendimento odontológico completo. Oferecemos consultas de rotina, limpeza, restaurações, tratamento de canal e clareamento dental. Sorria com saúde e confiança!',

    },
    {
        name: 'Tratamentos Estéticos',
        image: '',
        description: 'No nosso centro médico, oferecemos tratamentos estéticos para realçar sua beleza e autoestima. Nossos serviços incluem limpeza de pele, peelings, massagens relaxantes e procedimentos faciais. Cuide-se e sinta-se bem!',

    },
    {
        name: 'Medicina do Trabalho',
        image: '',
        description: 'No nosso centro médico, oferecemos serviços de medicina do trabalho para garantir a saúde e segurança dos colaboradores. Realizamos exames admissionais, demissionais, periódicos e avaliações de saúde ocupacional. Proteja seu time!',

    },
]

const Product = () => {
    return (
<Box sx={{ p: 4}}>
    <Grid container spacing={4} justifyContent="center">
        {produto.map((produto, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345, mx: 'auto'}}>
                    <CardMedia
                    component="img"
                    height="250"
                    image={produto.image}
                    alt={produto.name}
                    sx={{ objectFit: 'contain' }}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {produto.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {produto.description}
                        </Typography>
                        <Button 
                        variant="contained"
                        color="secondary"
                        target="_blank"
                        sx={{ mt: 2 }}>Saiba Mais</Button>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
</Box>
    );
};



export default Product;