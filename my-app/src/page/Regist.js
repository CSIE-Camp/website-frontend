import { useState } from "react";
import { signupEmail, signupPassword } from "../api";
//import { Link } from "react-router-dom";

export const Regist = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async (event) => {
    event.preventDefault();
    await signupEmail(email);
    await signupPassword(password);
  };
  return (
    <form className="regist" onSubmit={handleSignup}>
      <h1 className="title">註冊帳號</h1>
      <div className="inputFlex">
        <input
          className="loginMail"
          placeholder="請輸入電子信箱"
          type={"email"}
          value={email || ""}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="pwd_container">
          <input
            className="loginPassword"
            placeholder="請輸入密碼"
            type={"password"}
            value={password || ""}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="confirm" type="submit">
            <span className="arrow"></span>
          </button>
        </div>
      </div>
    </form>
  );
};
export default Regist;
