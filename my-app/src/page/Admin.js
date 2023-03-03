import React from "react";

export const Admin = () => {
  return (
    <div className="adminFlex">
      <h1>帳號: admin666@gmail.com</h1>
      <h1>系統開關</h1>
      <div className="adminSystemSwitch">
        <div className="left">
          <p>報名系統</p>
          <span>開放中</span>
          <span>Open</span>
        </div>
        <div className="right">
          <p>錄取狀態查詢</p>
          <span>已關閉</span>
          <span>Off</span>
        </div>
      </div>
      <div className="adminPaymentStatus">
        <h1>匯款狀態</h1>
        <hr className="bar" width="80%"></hr>
        <div className="adminSearchFilter">
          <button>聯絡資訊</button>
          <button>成績審查</button>
          <button>匯款審查</button>
          <button>家長同意書審查</button>
        </div>
      </div>

      <form className="adminSearch">
        <input type={"text"} placeholder="輸入姓名以搜尋資料" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};
export default Admin;
