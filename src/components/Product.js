import React from "react";
import { Grid, Box, Card, CardContent, CardMedia, Typography } from "@mui/material";


const produto = [
    {
        name: 'Clinico Geral',
        image: '',
        description: '',

    },

    {
        name: 'Fisoterapia',
        image: '',
        description: '',

    },
    {
        name: 'Exames Complementares',
        image: '',
        description: '',

    },
    {
        name: 'Laboratório',
        image: '',
        description: '',

    },
    {
        name: 'Dentista',
        image: '',
        description: '',

    },
    {
        name: 'Tratamentos Estéticos',
        image: '',
        description: '',

    },
    {
        name: 'Medicina do Trabalho',
        image: '',
        description: '',

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
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
</Box>
    );
};



export default Product;