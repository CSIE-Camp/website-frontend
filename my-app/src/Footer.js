import React from "react";
import "./style/style.css";
import "./style/footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <h1>聯絡方式</h1>
        <p>example@gmail.com</p>
        <p>0900-000000</p>
        <div class="icon">
          <a href="#">
            <img src={require("./image/fb.png")} title="Facebook" alt="fb" />
          </a>
          <a href="#">
            <img src={require("./image/ig.png")} title="IG" alt="ig" />
          </a>
          <a href="#">
            <img src={require("./image/messenger.png")} title="Messenger" alt="messenger" />
          </a>
        </div>
        <p class="Copyright">Copyright © 2023 All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
