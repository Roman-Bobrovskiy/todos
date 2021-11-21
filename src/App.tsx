import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodosPages } from "./views/TodosPages";
import { AboutPages } from "./views/AboutPages";

import Navbar from "./components/Navbar";

import "./index.css";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodosPages />} />
          <Route path="/about" element={<AboutPages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
