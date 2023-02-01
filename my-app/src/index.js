import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import App from "./App";
import Footer from "./Footer";
ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>,
  document.querySelector("#root")
);
