import React, {useState} from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static"> 
      <Toolbar>
        <NavLink
          activeStyle={{ color: "#f00000" }}
          to="/"
          exact
          style={{ marginRight: 20, color: "#ffffff" }}
          href=""
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{ color: "#f00000" }}
          to="/signin"
          style={{ marginRight: 20, color: "#ffffff" }}
          href=""
        >
          Sign in
        </NavLink>
        <NavLink
          activeStyle={{ color: "#f00000" }}
          to="/signup"
          style={{ marginRight: 20, color: "#ffffff" }}
          href=""
        >
          Sign up
        </NavLink>
        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <NavLink to="/profile"  onClick={handleClose}>Profile</NavLink>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}<span>Hi, Phong</span>
      </Toolbar>
    </AppBar>
  );
}
