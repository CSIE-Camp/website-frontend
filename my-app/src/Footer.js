import React from "react";
import "./style/style.css";
import "./style/footer.css";

const Footer = () => {
  return (
    <div>
      <div class="card_foot">
        <h1>聯絡方式</h1>
        <p>example@gmail.com</p>
        <p>0900-000000</p>
        <div class="icon">
          <a href="#">
            <img src={require("./image/fb.png")} alt="fb" />
          </a>
          <a href="#">
            <img src={require("./image/ig.png")} alt="ig" />
          </a>
          <a href="#">
            <img src={require("./image/messenger.png")} alt="messenger" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
