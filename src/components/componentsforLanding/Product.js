import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Product() {
    const Products = (props) => {
        return (
            <div>
                <h1>Product Name: {props.name}</h1>
                <p>Price: {props.price}</p>
                <p>Product Details: {props.details}</p>
            </div>
        )
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Item>
                                <h3><Products name={"Product One"} price={`100 Eur`} details={"The most important sentence in your paragraph is the topic sentence, which clearly states the subject of the whole paragraph."} /></h3>
                            </Item>
                        </Grid>
                    </Grid>
                </div>

                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Item>
                                <h3><Products name={"Product Two"} price={`100 Eur`} details={"The most important sentence in your paragraph is the topic sentence, which clearly states the subject of the whole paragraph."} /></h3>
                            </Item>
                        </Grid>
                    </Grid>
                </div>

                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Item>
                                <h3><Products name={"Product Three"} price={`100 Eur`} details={"The most important sentence in your paragraph is the topic sentence, which clearly states the subject of the whole paragraph."} /></h3>
                            </Item>
                        </Grid>
                    </Grid>
                </div>

                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Item>
                                <h3><Products name={"Product Four"} price={`100 Eur`} details={"The most important sentence in your paragraph is the topic sentence, which clearly states the subject of the whole paragraph."} /></h3>
                            </Item>
                        </Grid>
                    </Grid>
                </div>

            </Box>

        </div>
    )
}

export default Product;