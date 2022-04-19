import React from "react";
import './Home.css'
import { Typography, Container, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
    typography: {
        fontFamily: [
            'Sora',
            'sans-serif'
        ].join(','),
        fontWeight: 'bold',
    },

    palette: {
        primary: {
          main: "rgba(236, 240, 241, 1)"
        }
    }
});

function Header() {
    return (
        <ThemeProvider theme={theme}>
            <Container className="Header" align="center">
                <Typography variant="h3" align="center">
                    Backlog Tracker
                </Typography>
            </Container>
        </ThemeProvider>
    );
}

export default Header