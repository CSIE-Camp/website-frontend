import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <form className="login">
      <h1 className="title">登入報名資訊</h1>
      <div className="inputFlex">
        <input className="register" placeholder="請輸入電子信箱" type={"email"} />
        <div className="pwd_container">
          <input className="register" placeholder="請輸入密碼" type={"password"} />
          {/* <Link to="/form"> */}
          <button className="confirm" type="submit">
            <span className="arrow"></span>
          </button>
          {/* </Link> */}
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
