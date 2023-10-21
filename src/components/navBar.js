import React, { useState } from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

import CollapsibleMenu from "./collapsibleMenu";
import { ReactComponent as Logo } from "../assets/shellssteps-merienda.svg";

function NavBar({ navLinks }) {
  const [navActive, setNavActive] = useState(false);

  console.log(navLinks);

  return (
    <div className="navbar">
      <Link to="/" aria-label="Logo linking to Shell's Steps homepage">
        <div id="logo">
          <Logo />
        </div>
      </Link>

      <div className="menu">
        <ul>
          {navLinks.map((link, key) => (
            <NavLink
              to={"/" + (link === "Home" ? "" : link)}
              exact={true}
              activeClassName="nav-active"
            >
              <li> {link} </li>
            </NavLink>
          ))}
        </ul>
      </div>

      <CollapsibleMenu navLinks={navLinks} />
    </div>
  );
}

export default NavBar;
