import React from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Omantel from "./pages/omantel/Omantel";
import Guild from "./pages/guild/Guild";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/omantel" element={<Omantel />} />
      <Route path="/guild" element={<Guild />} />
    </Routes>
  );
}

export default App;
