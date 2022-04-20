import { Breadcrumbs } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <Breadcrumbs aria-label="breadcrumb" separator='|'>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/add_game">
                    Add Game
                </NavLink>
            </Breadcrumbs>
        </nav>
    )
}