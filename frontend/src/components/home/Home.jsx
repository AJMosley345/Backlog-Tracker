import React from "react";
import { Container } from '@mui/material';
import Games from "../game_info/Games";
import Base from "../base/Base";

export default function Home(){
    return (
        <Container align='center'>
            <Base />
            <Games />
        </Container>
    );
}