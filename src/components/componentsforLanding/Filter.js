import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Data from './Data';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Filter({productItems , filterItems, setItems}){


    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <div >
            <h4>Filter</h4>
            <Grid container spacing={1} columns={10} flex-direction = {'column'} justifyContent={'left'} alignItems={'left'}>
                    {
                    productItems.map((val)=> (
                        <Grid item xs={1} >
                <Item>
                   <Button variant="outlined" onClick={() => filterItems(val)}>{val}</Button>

                </Item>
                </Grid>
                    ))
                }


                <Grid item xs={1} >
                <Item>
                   
                    <Button variant="outlined" onClick={() =>setItems(Data)}>All</Button>
                  
                </Item>
                </Grid>
            </Grid>
            </div>
            </Box>
        </div>
    )
}