import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./Views/Detail";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Signin from "./Views/Signin";
import Signup from "./Views/Signup";
import { actionType } from './redux/action/type'
import { createAction } from "./redux/action/createAction";
import { AudthRoute, PrivateRoute } from "./HOC/Route";


function App() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //    const credentialStr = localStorage.getItem("t")
  //   if (credentialStr) {
  //     dispatch(createAction(actionType.SET_USER, JSON.parse(credentialStr)))
  //   }
  // }, [])

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact Component={Home} redirecPath="/signin" />
        <Route path="/detail/:id" component={Detail} />
        <AudthRoute path="/signin" Component={Signin} redirecPath="/" />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );

}


export default App
