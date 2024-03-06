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
import Tasks from "./assets/data.json";

function App() {
  const [items, setItems] = useState(Tasks);

  const handleDeleteitem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <div>
        <Navbar image={Logo} text="To-do list" />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itemdetail" element={<ItemDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
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
