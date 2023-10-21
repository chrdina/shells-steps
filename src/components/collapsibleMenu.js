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
          {navLinks.map((link) => (
            <NavLink
              key={link}
              to={"/" + (link === "Home" ? "" : link)}
              end
              className={({ isActive }) =>
                isActive ? "nav-active-collapsible" : ""
              }
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
