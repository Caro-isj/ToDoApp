import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./App.css";
import Logo from "./ourlogo.png";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Tasks from "./assets/data.json";
import { AboutPage } from "./pages/AboutPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ItemDetailsPage } from "./pages/ItemDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CreateNewItem } from "./components/CreateNewItem";

function App() {
  const [items, setItems] = useState(Tasks);

  const handleDeleteitem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <div>
        <Navbar image={Logo} text="To-do list" />
        <Link to="/create-item">
          <button>Add a new task</button>
        </Link>
        <Link to="/update-item">
          <button>Update a task</button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itemdetail" element={<ItemDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/create-item" element={<CreateNewItem />} />
        <Route path="/update-item" element={<CreateNewItem />} />
      </Routes>
      <div>
        <Sidebar />
      </div>

      <div>
        <List items={items} onDelete={handleDeleteitem} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
