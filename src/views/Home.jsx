import React from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";

function Home() {
  return (
    <div>
      <h1>Nur Muhamad Soleh | Home</h1>
      <Link to={"/profile"}>Profile</Link>
    </div>
  );
}

export default Home;
