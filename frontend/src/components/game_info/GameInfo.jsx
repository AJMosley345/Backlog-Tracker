import React from 'react';
import {  Typography, Card, CardContent, Box, Stack } from '@mui/material';
import './Game_Info.css';

const GameInfo = (props) => {
    return (
        <div className="Game-List">
            <Card sx={{ maxWidth: 'fit-content', variant: 'outlined' }}>
                    <CardContent className='Game-List'>
                        <Box sx={{ display: 'inline-flex',  }}>
                        <Stack direction={'row'} spacing={1}>
                            <Typography fontFamily={'Sora'}>
                                {props.name} |
                            </Typography>
                            <Typography fontFamily={'Sora'}>
                                {props.hours} Hours
                            </Typography>
                        </Stack>
                        </Box>
                    </CardContent>
            </Card>
        </div>      
    )
}

export default GameInfo