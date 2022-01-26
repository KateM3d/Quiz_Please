import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Card from "./components/Card";
import Question from "./components/Question";
import NotFound from "./components/404";
import Home from "./components/Home";
import iconHome from "./icon_home.png";
import "./App.scss";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">
          <img className="iconHome" src={iconHome} alt="icon" />
        </Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/categories">
            <Card />
          </Route>
          <Route exact path="/question">
            <Question />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
