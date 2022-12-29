import "./App.css";
import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/todo-user/:id'>
            <Details />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
