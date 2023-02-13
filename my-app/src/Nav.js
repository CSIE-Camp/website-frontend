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
              <Link href="/about">營隊介紹</Link>
            </li>
            <li>
              <Link href="/info">報名資訊</Link>
            </li>
            <li>
              <Link class="more" href="/more">
                更多
              </Link>
            </li>
            <li>
              <Link href="/login">登入/註冊</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
