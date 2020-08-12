import React, { useState } from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import CollapsibleMenu from "./collapsibleMenu";

function NavBar({ navLinks }) {
  const [navActive, setNavActive] = useState(false);

  console.log(navLinks);

  return (
    <div className="navbar">
      <Link
        id="logo"
        to="/"
        aria-label="Logo linking to Shell's Steps homepage"
      ></Link>

      <div className="menu">
        <ul>
          {navLinks.map((link, key) => (
            <li>
              <NavLink
                to={"/" + (link === "Home" ? "" : link)}
                exact={true}
                activeClassName="nav-active"
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <CollapsibleMenu navLinks={navLinks} />
    </div>
  );
}

export default NavBar;
