import React from "react";
import { Link } from "react-router-dom";

export const Regist = () => {
  return (
    <div class="regist">
      <h1 class="title">登入報名資訊</h1>
      <input class="register" placeholder="請輸入電子信箱"></input>
      <input class="register" placeholder="請輸入密碼"></input>
      <div>
        <input class="register button" placeholder="再次輸入密碼"></input>
        <button class="confirm">
          <a href="#next">
            <span class="arrow"></span>
          </a>
        </button>
      </div>
    </div>
  );
};
export default Regist;
