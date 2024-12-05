import React from "react";
import { Grid, Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";


const produto = [
    {
        name: 'Consultas Médicas',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur metus quis diam luctus condimentum in commodo felis. Sed vitae congue metus, a facilisis odio. Aliquam id tempus arcu. Nulla luctus, tortor lobortis vestibulum pulvinar, orci diam dapibus nisi, sit amet dictum tortor libero at lacus. Fusce mattis lobortis nibh.',

    },

    {
        name: 'Fisoterapia',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum erat vel dui semper venenatis. Cras commodo metus in orci molestie, malesuada ullamcorper tortor volutpat. Vestibulum quis mi vestibulum, mattis dolor eget, convallis mi. Integer mattis consectetur lacus at luctus. Cras laoreet velit nisl, ac pellentesque nisi egestas vitae. Quisque.',

    },
    {
        name: 'Exames Complementares',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat ullamcorper purus, id rutrum ipsum ornare at. In hac habitasse platea dictumst. Aenean dictum finibus nibh vel tristique. Donec nulla elit, hendrerit eu viverra at, pulvinar sit amet mi. Donec et lobortis orci, sit amet suscipit nibh. Etiam consequat sit.',

    },
    {
        name: 'Laboratório',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae porttitor est. Vestibulum suscipit porta auctor. Nam ut neque leo. Curabitur eu metus dui. Suspendisse hendrerit fermentum nisi et dignissim. Sed commodo porta massa, a lacinia augue molestie quis. Donec ut nisl est. Morbi vestibulum ligula sed lacus luctus, nec.',

    },
    {
        name: 'Dentista',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna augue, fringilla in lectus eget, commodo feugiat quam. Etiam semper ante in sapien mollis, non iaculis risus placerat. Nulla mollis justo elit, a pulvinar sem mollis id. Aliquam ut diam ac odio faucibus accumsan. Phasellus lacinia efficitur ultrices. Nunc eleifend.',

    },
    {
        name: 'Tratamentos Estéticos',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dignissim orci, et dictum tellus. Nulla imperdiet, nulla vel consequat rhoncus, neque nulla interdum ex, non efficitur lacus nisl quis risus. Vestibulum et euismod mi. Proin fermentum gravida malesuada. Cras a ultrices nisl. Aenean sed neque consectetur, fermentum libero eget.',

    },
    {
        name: 'Medicina do Trabalho',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et mollis purus. Nulla vitae viverra metus, id elementum enim. Aenean bibendum diam at iaculis varius. Mauris id magna elementum, feugiat mi quis, blandit metus. Fusce tincidunt libero sed erat tristique consequat. Maecenas commodo, justo a ornare lobortis, augue lorem vulputate.',

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