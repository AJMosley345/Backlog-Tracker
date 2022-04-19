import React from "react";
import { Typography, Container, Stack } from '@mui/material';
import Header from "./Header";
import AddGameButton from "../AddGameButton";
import Games from "../game_info/Games";

export default function Home(){
    return (
        <Container>
            <Header />
            <Stack spacing={2}>
                <Games />
            </Stack>
            <AddGameButton />
        </Container>
    );
}