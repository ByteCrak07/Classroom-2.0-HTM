import "./App.css";
import { Route, Switch } from "react-router";
import Welcome from "./pages/welcome";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Student from "./pages/student";
import Edit from "./pages/edit";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/student">
          <Student />
        </Route>

        <Route exact path="/edit">
          <Edit />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
