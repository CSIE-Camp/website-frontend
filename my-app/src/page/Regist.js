import React from "react";


export const Login = () => {
  return (
    <div class = "login">
      <h1 class = "title">登入報名資訊</h1>
      <input class="register" placeholder="請輸入電子信箱"></input>
      <input class="register" placeholder="請輸入密碼"></input>
      <input class="register" placeholder="再次輸入密碼"></input>
      <button class="confirm"><a href = "#next"><span class="arrow"></span></a></button>
    </div>
  );
};
export default Login;
