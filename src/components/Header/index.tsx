import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import LoginForm from "../inputs/LoginForm";
import { useNavigate, useLocation } from "react-router-dom";
import useToken from "../../common/hooks/useToken";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useToken();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const handleAccountClick = () => {
    navigate("/account");
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        color: "white",
        zIndex: 10,
        top: 0,
        left: 0,
        right: 24,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          {location.pathname !== "/" && (
            <IconButton onClick={handleHomeClick} sx={{ color: "white" }}>
              <HomeIcon />
            </IconButton>
          )}
        </Box>

        <Typography variant="h6" component="div"></Typography>

        <Box>
          {token ? (
            <IconButton
              edge="end"
              onClick={handleAccountClick}
              sx={{ color: "white" }}
            >
              <AccountCircleIcon />
            </IconButton>
          ) : (
            <>
              <IconButton
                edge="end"
                onClick={handleMenuOpen}
                sx={{ color: "white" }}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                disableScrollLock
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Box sx={{ padding: "16px", minWidth: "250px" }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Já possui reserva? Faça Login
                  </Typography>
                  <Divider sx={{ marginBottom: "8px" }} />
                  <LoginForm />
                </Box>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
