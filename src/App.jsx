import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./App.css";
import Logo from "./assets/Background.png";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Tasks from "./assets/data.json";
import { AboutPage } from "./pages/AboutPage";
import { ItemDetailsPage } from "./pages/ItemDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CreateNewItem } from "./components/CreateNewItem";
import { UpdateItem } from "./components/UpdateItem";

function App() {
  const [items, setItems] = useState(Tasks);

  const handleDeleteitem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <Navbar image={Logo} text="This is our To-do list" />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              items={items}
              setItems={setItems}
              onDelete={handleDeleteitem}
            />
          }
        />
        <Route path="/itemdetail" element={<ItemDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/create-item"
          element={<CreateNewItem items={items} setItems={setItems} />}
        />
        <Route path="/update-item" element={<UpdateItem />} />
      </Routes>

      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
