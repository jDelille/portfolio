import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Shmagity from "./components/Details/Shmagity";
import Contact from "./components/Contact/Contact";
import ReactFullpage from "@fullpage/react-fullpage";
import Poolhost from "./components/Details/Poolhost";
import Travel from "./components/Details/Travel";
import Vibrofret from './components/Details/Vibrofret'
function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
          <Projects />
          <About />
        </Route>
        <Route path="/shmagity">
          <Shmagity />
        </Route>
        <Route path="/nbapickem">
          <Poolhost />
        </Route>
        <Route path="/pixelator">
          <Travel />
        </Route>
        <Route path="/vibrofret">
          <Vibrofret />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Router;
