import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import Boeing from "./pages/Boeing/InfoBoeing";
import Airbus from "./pages/Airbus/InfoAirbus";
// GENERAL STYLES
import "./index.css";



const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/Boeing" component={Boeing} />
      <Route exact path="/Airbus" component={Airbus} />
    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
