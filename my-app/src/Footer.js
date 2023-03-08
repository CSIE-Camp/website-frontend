import React from "react";

const Footer = () => {
  return (
    <footer>
      <div id="picture">
        <img class="island" id="left" src={require("./image/island left.png")} alt="island"></img>
        <img
          class="island"
          id="left2"
          src={require("./image/island left 2.png")}
          alt="island"
        ></img>
        <img class="island" id="middle" src={require("./image/island middle.png")} alt="isl"></img>
        <img
          class="island"
          id="right2"
          src={require("./image/island right 2.png")}
          alt="island"
        ></img>
        <img class="island" id="right" src={require("./image/island right.png")} alt="island"></img>
      </div>
      <h1 class="center">聯絡方式</h1>
      <p id="email">example@gmail.com</p>
      <p id="tel">0900-000000</p>
      <div class="icon">
        <a href="/">
          <img class="link" src={require("./image/fb.png")} title="Facebook" alt="fb" />
        </a>
        <a href="/">
          <img class="link" src={require("./image/ig.png")} title="IG" alt="ig" />
        </a>
        <a href="/">
          <img
            class="link"
            src={require("./image/messenger.png")}
            title="Messenger"
            alt="messenger"
          />
        </a>
      </div>
      <p class="Copyright" id="copyright">
        Copyright © 2023 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
