import React from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Omantel from "./pages/omantel/Omantel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/omantel" element={<Omantel />} />
    </Routes>
  );
}

export default App;
