import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div class="login">
      <h1 class="title">登入報名資訊</h1>
      <input class="register" placeholder="    請輸入電子信箱"></input>
      <div class="pwd_container">
        <input class="register button" placeholder="    請輸入密碼"></input>
        <button class="confirm">
          <Link to="/blank">
            <span class="arrow"></span>
          </Link>
        </button>
      </div>
      <p class="help">
        <Link to="/forget">忘記密碼?</Link>
        <Link to="/regist">還沒註冊資工營帳號?</Link>
      </p>
    </div>
  );
};
export default Login;
