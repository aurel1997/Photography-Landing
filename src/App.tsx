import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./components/HerroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
      </BrowserRouter>
    </>
  );
};

export default App;
