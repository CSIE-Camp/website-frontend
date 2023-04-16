import React from "react";

const Footer = () => {
  return (
    <footer>
      <div id="footerFlex">
        <div id="picture">
          <img class="island" id="left" src={require("./image/island left.png")} alt="island"></img>
          <img
            className="island"
            id="left2"
            src={require("./image/island left 2.png")}
            alt="island"
          ></img>
          <img
            className="island"
            id="middle"
            src={require("./image/island middle.png")}
            alt="isl"
          ></img>
          <img
            className="island"
            id="right2"
            src={require("./image/island right 2.png")}
            alt="island"
          ></img>
          <img
            className="island"
            id="right"
            src={require("./image/island right.png")}
            alt="island"
          ></img>
        </div>
        <div id="text">
          <h1>聯絡方式</h1>
          <hr id="bar" width="270px" />
          <p id="email">example@gmail.com</p>
          <p id="tel">0900-000000</p>
        </div>
      </div>
      <div class="icon">
        <a href="https://www.facebook.com/ntnucsiecamp">
          <img src={require("./image/fb.png")} title="Facebook" alt="fb" />
        </a>
        <a href="https://www.instagram.com/ntnucsiecamp2023/">
          <img src={require("./image/ig.png")} title="IG" alt="ig" />
        </a>
        <a href="http://m.me/ntnucsiecamp">
          <img src={require("./image/messenger.png")} title="Messenger" alt="messenger" />
        </a>
      </div>
      <p class="Copyright">Copyright © 2023 All rights reserved</p>
    </footer>
  );
};

export default Footer;
