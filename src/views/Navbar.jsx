import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Navbar;
