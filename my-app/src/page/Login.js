import React from "react";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <form className="login">
      <h1 className="title">登入帳號</h1>
      <div className="inputFlex">
        <input className="loginMail" placeholder="請輸入電子信箱" type={"email"} />
        <div className="pwd_container">
          <input className="loginPassword" placeholder="請輸入密碼" type={"password"} />
          <button className="confirm" type="submit">
            <span className="arrow"></span>
          </button>
        </div>
      </div>
      <div className="helpFlex">
        <div className="helpContent">
          <Link to="/forget">忘記密碼?</Link>
          <Link to="/regist">還沒註冊資工營帳號?</Link>
        </div>
      </div>
    </form>
  );
};
export default Login;
