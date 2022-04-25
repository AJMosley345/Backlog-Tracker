import { Breadcrumbs,Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Base.css"

export const NavBar = () => {
    return (
        <div className="NavBar">
            <Breadcrumbs aria-label="breadcrumb" separator='|' >
                <NavLink to="/">
                    <Typography variant="h4" fontFamily={'Sora'}>
                        Home
                    </Typography>
                </NavLink>
                <NavLink to="/add_game">
                    <Typography variant="h4" fontFamily={'Sora'}>
                        Add Game
                    </Typography>
                </NavLink>
            </Breadcrumbs>
        </div>
    )
}