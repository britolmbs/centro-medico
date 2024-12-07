import { Image } from "@mui/icons-material";
import { Avatar, Card, CardMedia, Container, Grid, Grid2, Typography } from "@mui/material";
import React from "react";


const About = () => {
    return (
       <Container id="about" sx={{ py: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
            Sobre Nós
        </Typography>

        <Grid item xs={12} sm={8}>
            <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dui eu ipsum sollicitudin convallis. Nullam diam libero, consequat id mattis eleifend, interdum at massa. Nam at ipsum quis dui egestas rutrum. Vivamus porta, felis vel volutpat condimentum, metus massa sollicitudin nisi, nec pulvinar nisl nisi sed purus. Duis sagittis nisl sed nulla hendrerit, eget iaculis lorem venenatis. Vestibulum massa nibh, luctus a sagittis vel, convallis aliquam nisl. Pellentesque pulvinar augue quis sapien aliquet molestie.

Nunc hendrerit sit amet lorem in pretium. Aliquam imperdiet id arcu eu congue. Aliquam rhoncus lectus vel lorem posuere semper. Cras non mi nulla. Etiam condimentum odio et sem pulvinar maximus. Vivamus dapibus condimentum mi in luctus. Sed ullamcorper efficitur bibendum. Duis et sem vel lorem bibendum sollicitudin. Duis ligula libero, maximus non fringilla et, maximus a purus. Duis lacinia ex at ultricies sodales. Morbi vehicula nec sem non ornare. Nunc pulvinar velit nec feugiat lobortis. Cras sed tincidunt odio, ac gravida nulla.

Sed interdum ultrices sem, malesuada hendrerit elit interdum eu. Vestibulum ultrices augue et sapien ultrices, ut suscipit ipsum facilisis. Curabitur molestie molestie est ac dapibus. Etiam id dolor dui. Sed ornare luctus ex, quis feugiat sapien mattis in. Sed placerat justo quis.
            </Typography>
        </Grid>
       </Container>
    );
};


export default About;