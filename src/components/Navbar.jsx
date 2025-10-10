import React from "react";
import "../styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      {props.site == "Memory App" ? (
        <h1 className="navbar-h1">Memory App</h1>
      ) : (
        <h1 className="navbar-h1">Scoreboard</h1>
      )}
      <ul>
        <li>
          {/* <Link to={"/"} className="Navbar-home">
            Home
          </Link> */}
          <a href="">Home</a>
        </li>
        <li>
          {/* <Link to={"/Scoreboard"} className="Navbar-Scoreboard">
            Scoreboard
          </Link> */}
          <a href="">Lecikon</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
