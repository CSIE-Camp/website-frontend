import React from "react";
import ReactDOM from "react-dom";
const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <div class="logo">
            <a href="/">
              <img src={require("./image/Logo.png")} alt="Background" />
            </a>
          </div>
          <ul>
            <li>
              <a href="/about">營隊介紹</a>
            </li>
            <li>
              <a href="/info">報名資訊</a>
            </li>
            <li>
              <a class="more" href="/more">
                更多
              </a>
            </li>
            <li>
              <a href="/login">登入/註冊</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
