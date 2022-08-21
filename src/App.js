// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Navbar from "./views/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
