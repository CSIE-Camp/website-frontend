import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./page/Home";
import Footer from "./Footer";
import About from "./page/About";
import Info from "./page/Info";
import More from "./page/More";
import Login from "./page/Login";
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="/more" element={<More />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
