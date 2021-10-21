import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./pages/LoginPage";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

import HomeRoute from "./routes/HomeRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <HomeRoute exact path="/home" component={Home} />
        <Route exact path="/404" component={Error404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
