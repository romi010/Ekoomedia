import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {Navigation} from "./styles"


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logo">
          <Link to="/">
            <p>EKOOMEDIA</p>
          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              <li>HOME</li>
            </NavLink>
            <NavLink activeClassName="active" to="/Boeing">
              <li>BOEING</li>
            </NavLink>
            <NavLink activeClassName="active" to="/Airbus">
              <li>AIRBUS</li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
