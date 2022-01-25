import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Card from "./components/Card";
import Question from "./components/Question";
import NotFound from "./components/404";
import "./App.scss";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <h2>hello</h2>
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
