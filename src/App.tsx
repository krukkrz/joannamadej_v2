import React from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Omantel from "./pages/omantel/Omantel";
import Guild from "./pages/guild/Guild";
import Deskly from "./pages/deskly/Deskly";
import HealthyMe from "./pages/healthyme/HealthyMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/omantel" element={<Omantel />} />
      <Route path="/guild" element={<Guild />} />
      <Route path="/deskly" element={<Deskly />} />
      <Route path="/healthyme" element={<HealthyMe />} />
    </Routes>
  );
}

export default App;
