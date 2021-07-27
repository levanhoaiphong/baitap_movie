import React, {useState} from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const user = useSelector((state)=>{
    return state.userReducer
  })
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
        {user ? <span>{user.hoTen}</span>: <><NavLink
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
        </NavLink></>}
      
      </Toolbar>
    </AppBar>
  );
}
