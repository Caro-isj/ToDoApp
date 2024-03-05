import { useState } from "react";
import React from "react";
import "./App.css";
import Logo from "./ourlogo.png";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import List from "./components/List";
import ListItem from "./components/ListItem";

function App() {
  const [items, setitems] = useState([
    { id: 0, name: "Groceries", isCompleted: true },
    { id: 1, name: "Homework", isCompleted: true },
    { id: 2, name: "Cleaning", isCompleted: false },
    { id: 3, name: "Out for Lunch", isCompleted: false },
  ]);

  const handleDeleteitem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <div>
        <Navbar image={Logo} text="To-do list" />
      </div>

      <div>
        <HomePage />
        <Sidebar />
      </div>

      <div>
        <ListItem name="" id="" isCompleted />
        <List />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
