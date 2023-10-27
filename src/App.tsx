import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Mvp from "./pages/Mvp";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mvp" element={<Mvp />} />
        </Routes>
      </>
  );
}

export default App;
