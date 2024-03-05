import React from "react";
import "./App.css";
import Logo from "./ourlogo.png";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar image={Logo} text="To-do list" />
      <div>
        <HomePage />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
