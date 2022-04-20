import React from "react";
import { Typography, ThemeProvider, createTheme } from '@mui/material'

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
                <Typography variant="h3">
                    Backlog Tracker
                </Typography>
        </ThemeProvider>
    );
}

export default Header