import React from "react";

export const Admin = () => {
  return (
    <div>
      <h1>帳號: admin666@gmail.com</h1>
      <h1>系統開關</h1>
      <div className="adminFlex">
        <div className="left">
          <p>報名系統</p>
          <button>開放中</button>
          <button>Open</button>
        </div>
        <div className="right">
          <p>錄取狀態查詢</p>
          <button>已關閉</button>
          <button>Off</button>
        </div>
      </div>
      <div>
        <h1>匯款狀態</h1>
        <hr className="bar" width="80%"></hr>
        <div>
          <button>聯絡資訊</button>
          <button>成績審查</button>
          <button>匯款審查</button>
          <button>家長同意書審查</button>
        </div>
      </div>

      <form>
        <input type={"text"} placeholder="輸入姓名以搜尋資料" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};
export default Admin;
