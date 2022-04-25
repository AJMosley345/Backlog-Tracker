import React from "react";
import "./Base.css"
import { Stack, Typography } from "@mui/material";
import { NavBar } from "./NavBar";

function Header() {
    return (
        <div className="Title">
        <Stack>
            <Typography variant="h3" fontFamily={'Sora'}>
                Backlog Tracker
            </Typography>
            <div className="NavBar"></div>
            <NavBar />
        </Stack>
    </div>
    );
}

export default Header