import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavScript from "./Nav_script";

const Nav = () => {
  const [navbarShow, setNavbarShow] = useState("inactive");
  useEffect(() => {
    NavScript();
  }, []);
  //const [active, setActive] = useState("");
  function handleClick(e) {
    e.stopPropagation();

    e.target.classList.toggle("dropdown"); // 改變 hamburger -> X
    // testing
    // console.log(e.target);
    // testing
    // console.log(e.target.classList);
    if (e.target.classList[0] === "dropdown") {
      setNavbarShow("active");
    } else {
      setNavbarShow("hide");
    }
  }
  return (
    <div>
      <header>
        <nav>
          <div className="hamburgerFlex">
            <div class="logo">
              <Link to="/">
                <img src={require("./image/Logo.png")} alt="Background" />
              </Link>
            </div>

            <div id="hamburger" aria-label="Menu" onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="ulFlex">
            <ul className={navbarShow === "active" ? "show" : "hide"}>
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
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
