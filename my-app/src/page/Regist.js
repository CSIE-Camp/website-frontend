import React from "react";
import { Link } from "react-router-dom";

export const Regist = () => {
  return (
    <form className="regist">
      <h1 className="title">註冊帳號</h1>
      <div className="inputFlex">
        <input className="loginMail" placeholder="請輸入電子信箱" type={"email"} />
        <div className="pwd_container">
          <input className="loginPassword" placeholder="請輸入密碼" type={"password"} />

          <button className="confirm" type="submit">
            <span className="arrow"></span>
          </button>
        </div>
      </div>
    </form>
  );
};
export default Regist;
