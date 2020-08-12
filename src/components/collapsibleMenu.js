import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CollapsibleMenu({ navLinks }) {
  const [menuOpened, setMenuOpened] = useState(false);
  console.log(navLinks);

  return (
    <div className="collapsible-menu-container">
      <div
        className={`hamburger ${menuOpened ? "open" : null}`}
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`collapsible-menu ${
          menuOpened ? "collapsible-menu-active" : null
        }`}
      >
        <ul>
          {navLinks.map((link, key) => (
            <NavLink
              key={key}
              to={"/" + (link === "Home" ? "" : link)}
              exact={true}
              activeClassName="nav-active-collapsible"
              onClick={() => setMenuOpened(false)}
            >
              <li>{link}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CollapsibleMenu;
