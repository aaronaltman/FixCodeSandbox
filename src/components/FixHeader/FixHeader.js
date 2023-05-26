import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const FixHeader = () => {
  return (
    <AppBar position="sticky" elevation="3" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          color="black"
          sx={{ flexGrow: "1", textAlign: "left" }}
        >
          This is the Logo
        </Typography>
        <IconButton size="large" edge="start" color="black" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default FixHeader;
