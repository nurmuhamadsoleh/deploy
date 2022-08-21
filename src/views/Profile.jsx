import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Ini Profile</h1>
      <Link to={"/navbar"}>Navbar</Link>
    </div>
  );
}

export default Profile;
