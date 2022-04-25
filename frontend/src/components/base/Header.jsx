import React from "react";
import "./Base.css"
import { Breadcrumbs,Stack,Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
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