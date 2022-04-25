import React from "react";
import Games from "../game_info/Games";
import Base from "../base/Base";
import { Container, Stack, Typography, Box, Divider } from "@mui/material";
import './Home.css'

export default function Home(){
    return (
        <div>
            <Base />
            <Divider/>
            <Container>
                <Box sx={{ 
                    borderRadius: 1,
                    m: 1,
                    p: 0.1,
                    display: "inline-flex",
                    border: '1px solid',
                }}
                >
                    <Typography variant="h3" fontFamily={'Sora'} className="Title">
                        Games List
                    </Typography>
                </Box>
                <Stack 
                spacing={3} 
                mt={3}
                justifyContent="space-evenly" 
                >
                    <Games />
                </Stack>
            </Container>
        </div>
    );
}