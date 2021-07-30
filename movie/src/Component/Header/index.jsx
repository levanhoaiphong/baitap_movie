import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Menu,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/action/user";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = useSelector((state) => {
    return state.userReducer.credentials;
  });
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <NavLink
            to="/"
            exact
            style={{ marginRight: 20, color: "#ffffff" }}
            href=""
          >
            Home
          </NavLink>
          {user ? (
              <div style={{ marginLeft: "auto" }}>
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
                      <NavLink
                      to="/profile"
                      component={Button}
                      onClick={handleClose}
                    >
                      Profile
                    </NavLink>
                  </Menu>
                  <span className="mr-4">{user.hoTen}</span>
                  <Button
                    onClick={() => {
                      dispatch(signOut());
                    }}
                    style={{ color: "#ffffff" }}
                  >
                    Sign Out
                  </Button>
              </div>
          ) : (
            <>
              <NavLink
                activeStyle={{ color: "#f00000" }}
                to="/signin"
                style={{ marginLeft: "auto", color: "#ffffff" }}
                href=""
              >
                Sign In
              </NavLink>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
