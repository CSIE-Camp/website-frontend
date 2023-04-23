import React from "react";

export const Info = () => {
  return (
    <div className="infoFlex">
      <div className="infoContent">
        <h1 className="title">報名簡章</h1>
        <p>修訂日期：2023 年 4 月 16 日</p>
        <hr className="bar" width="80%"></hr>
        {/* <p className="subTitle">報名相關資訊</p> */}
        <div className="subTitle">
          同學、家長您好： 很高興您有意願報名參加國立師範大學 2023 暑期資工營 ｢Challenger Surviving
          Islands: E級玩家」。以下我們將向各位說 明本營隊的相關資訊：
        </div>
        <table className="mainInfo">
          <div className="mainContent">
            <ol>
              <li>營隊時間：2023 年 7 月 3 日 (星期一) 至 2023 年 7 月 7 日 (星期五)</li>
              <li>營隊地點：國立臺灣師範大學公館校區 (臺北市文山區汀洲路四段 88 號)</li>
              <li>住宿地點：旅居文旅--台北松山機場館(104 台北市中山區松江路485號) </li>
              <li>主辦單位：國立臺灣師範大學資訊工程學系</li>
              <li>招收對象：現為全國公私立高中高職學生及國高中應屆畢業生</li>
              <li>招收名額：共 64 名</li>
              <li>活動費用：8600 元整(含食宿、保險)</li>
              <li>報名方法：線上報名</li>
            </ol>
          </div>
          <div className="officialLink">
            <a target="_blank" href="https://www.facebook.com/ntnucsiecamp/" rel="noreferrer">
              官方網址
            </a>
          </div>
        </table>
        <p className="subTitle">注意事項和詳閱報名簡章</p>
        <table className="important">
          <tr className="contextImport">
            1. 營期間，學員不可擅自離開活動地點，若因個人因素必須離開營隊活動地點，必須簽下離營
            安全保證書並聯絡其家長。離開營隊之後，學員一切安全事項，本營隊恕不負責。
          </tr>
          <tr className="contextImport">
            2. 營期間，將於夜市舉行闖關活動，所有學員必須參與。若學員因食用非營隊供應之食物導致
            身體不適，營隊僅進行保險理賠。
          </tr>
          <tr className="contextImport">
            3. 其餘詳細注意事項請參閱報名簡章:
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1QxxEyikRJzmLz5Pdet_ghNhzKDaeHj7LOmZQhwjXoS8/edit"
              rel="noreferrer"
            >
              報名簡章
            </a>
          </tr>
        </table>
        <div className="registerButton">
          <a href="/login">
            <button className="register">立即報名</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
