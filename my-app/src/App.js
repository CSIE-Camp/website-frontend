import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./page/Home";
import Footer from "./Footer";
import About from "./page/About";
import Info from "./page/Info";
import More from "./page/More";
import Login from "./page/Login";
import Blank from "./page/Blank";
import Forget from "./page/Forget";
import Regist from "./page/Regist";
import Review from "./page/Review";

const App = () => {
  return (
    <div className="App">
      <div id="bg">
        <div id="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
            <Route path="/more" element={<More />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/regist" element={<Regist />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
