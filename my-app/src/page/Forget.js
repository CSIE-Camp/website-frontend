import React from "react";
import "../style/forget.css";

export const Forget = () => {
  return (
    <div class="forget">
      <h1 class="title">登入報名資訊</h1>
      <div class="email">
        <input class="register button" placeholder="請輸入電子信箱"></input>
        <button class="send">
          <a href="#next">
            <span class="arrow"></span>
          </a>
        </button>
      </div>
      <p class="help">* 請至電子信箱查收驗證信</p>
      <input class="register" placeholder="建立新密碼"></input>
      <div class="password">
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
export default Forget;
