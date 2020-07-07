import React from "react";
import NavWrapper from "./style";

function Navbar() {
  return (
    <NavWrapper>
      <div className="nav-container">
        <h1>
          <a className="logo" href="/">
            <span className="fas fa-laugh-wink"></span>
             My-Dog-Site.com
          </a>
        </h1>
      </div>
    </NavWrapper>
  );
}

export default Navbar;
