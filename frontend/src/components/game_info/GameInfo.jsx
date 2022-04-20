import React from 'react';
import {  Paper, Box, Typography  } from '@mui/material';


const GameInfo = (props) => {
    return (
        <Box sx={{ width: '300px', backgroundColor: "#000000", textAlign: "center" }}>
            <Paper elevation={3} variant="outlined">
                <Typography >
                    {props.name} | {props.hours} Hours
                </Typography>
            </Paper>
        </Box>
    )
}

export default GameInfo