import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./Views/Detail";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Signin from "./Views/Signin";
import Signup from "./Views/Signup";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
