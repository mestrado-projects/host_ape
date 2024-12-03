import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  Divider,
  TextField,
  Button,
  Link,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
        <Typography variant="h6" component="div">
          
        </Typography>

        <Box>
          <IconButton edge="end" onClick={handleMenuOpen} sx={{ color: "white" }}>
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
                Login
              </Typography>
              <Divider sx={{ marginBottom: "8px" }} />
              <TextField label="Email" fullWidth margin="dense" variant="outlined" />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                variant="outlined"
              />
              <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "16px" }}>
                Login
              </Button>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginTop: "8px", textAlign: "center" }}
              >
                Não tem conta? <Link href="/cadastro">Entre em contato</Link>
              </Typography>
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
