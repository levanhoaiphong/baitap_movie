import React from "react";
import { AppBar, Toolbar,Button, Container } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/action/user";

export default function Header() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state)=>{
    return state.userReducer.credentials
  })

  return (
   
      <AppBar position="static"> 
       <Container maxWidth="lg">
      <Toolbar >
        <NavLink
          activeStyle={{ color: "#f00000" }}
          to="/"
          exact
          style={{ marginRight: 20, color: "#ffffff" }}
          href=""
        >
          Home
        </NavLink>
        {user ? <> 
      <div style={{marginLeft:"auto"}}>
          <span className="mr-4" >{user.hoTen}</span>
               <Button
         onClick={()=>{
           dispatch(signOut())
         }}
          style={{ color: "#ffffff"}}
        >
          Sign Out
        </Button>
      </div>
        </>  : <><NavLink
          activeStyle={{ color: "#f00000" }}
          to="/signin"
          style={{ marginLeft:"auto", color: "#ffffff" }}
          href=""
        >
          Sign In
        </NavLink>
      </>}
 
      
      </Toolbar>
    </Container>
    </AppBar>
  );
}
