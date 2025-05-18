import { AppBar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { StyledDesktopToolbar, StyledMobileToolbar, StyledNavLink } from "../../styles/NavBarStyle/NavBarStyle";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


const Nav = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function handleMenu(ev: React.MouseEvent<HTMLElement>) {
        setAnchorEl(ev?.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleSmoothScroll(id: string) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            handleClose();
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute">
                <StyledMobileToolbar>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem>
                            About
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("projects")}>
                            <StyledNavLink>Projects</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("skills")}>
                            <StyledNavLink>Skills</StyledNavLink>
                        </MenuItem>
                    </Menu>
                </StyledMobileToolbar>
                <StyledDesktopToolbar variant="regular">
                    <MenuItem onClick={() => handleSmoothScroll("about")}>
                        <StyledNavLink>About</StyledNavLink>
                    </MenuItem>
                    <MenuItem onClick={() => handleSmoothScroll("projects")}>
                        <StyledNavLink>Projects</StyledNavLink>
                    </MenuItem>
                    <MenuItem onClick={() => handleSmoothScroll("skills")}>
                        <StyledNavLink>Skills</StyledNavLink>
                    </MenuItem>
                </StyledDesktopToolbar>
            </AppBar>
        </Box>
    )
}

export default Nav;