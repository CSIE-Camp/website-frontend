import React from "react";
//import { Link } from "react-router-dom";

export const Forget = () => {
  return (
    <form className="forget">
      <h1 className="title">忘記密碼</h1>
      <p className="help">* 若您忘記你的資工營帳號密碼，請填寫你的電子信箱</p>
      <div className="inputFlex">
        <input className="forgetMail" placeholder="請輸入電子信箱" type={"email"} />
        <button className="confirm" type="submit">
          <span className="arrow"></span>
        </button>
      </div>
      <div className="helpFlex">
        <p className="help">* 請至電子信箱查收驗證信</p>
      </div>
      <div className="passwordFlex">
        <input className="forgetPassword" placeholder="建立新密碼" type={"password"} />
        <div className="pwd_container">
          <input className="forgetPassword" placeholder="再次輸入密碼" type={"password"} />
          <button className="confirm" type="submit">
            <span className="arrow"></span>
          </button>
        </div>
      </div>
    </form>
  );
};
export default Forget;
