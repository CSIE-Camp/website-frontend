import React from "react";
import "../style/login.css";

export const Login = () => {
  return (
    <div class = "login">
      <h1 class = "title">登入報名資訊</h1>
      <input class="register" placeholder="請輸入電子信箱"></input>
      <input class="register" placeholder="請輸入密碼"></input>
      <button class="confirm"><a href = "#next"><span class="arrow"></span></a></button>
      <p class="help"><a href = "/forget">忘記密碼?</a><a href = "/regist">還沒註冊資工營帳號?</a></p>
    </div>
  );
};
export default Login;
