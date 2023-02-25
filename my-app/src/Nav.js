import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/about">營隊介紹</Link>
            </li>
            <li>
              <Link to="/info">報名資訊</Link>
            </li>
            <div className="dropdown">
              <button>更多⏷</button>
              <div className="dropdownContent">
                <Link to="/review">歷屆回顧</Link>
                <Link to="/scores">計分系統</Link>
              </div>
            </div>

            <li>
              <Link to="/login">登入/註冊</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
