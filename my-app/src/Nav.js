import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavScript from "./Nav_script";

const Nav = () => {
  useEffect(() => {
    NavScript();
  }, []);
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
              <Link to="/about" className="about_test">
                營隊介紹
              </Link>
            </li>
            <li>
              <Link to="/info">報名資訊</Link>
            </li>
            <li>
              <Link to="/review">歷屆回顧</Link>
            </li>
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
