import React from "react";

export const Info = () => {
  return (
    <div class="info">
      <h1 class="title">報名資訊</h1>
      <hr class="bar" size="0px" width="1336px"></hr>
      <p class="subTitle">報名相關資訊</p>
      <table class="mainInfor">
        <tr class="context">1. 活動日期：2021/07/5 (一) ~ 2021/07/9 (五)</tr>
        <tr class="context">2. 報名時間：即日起至 2021/05/17 (一) 止</tr>
        <tr class="context">3. 錄取名單將於 2021/05/24 (四) 公佈於粉絲專頁</tr>
        <tr class="context">4. 報名費用 (包含食宿、上課講義、營手冊、營服和保險等) : $6500/人</tr>
        <tr class="context">5. 屆時請錄取者務必注意網站公佈之繳費流程</tr>
        <tr class="context">
          官方網址:{" "}
          <a target="_blank" href="https://www.facebook.com/ntnucsiecamp/" rel="noreferrer">
            https://www.facebook.com/ntnucsiecamp/
          </a>
        </tr>
      </table>
      <p class="subTitle">注意事項和詳閱報名簡章</p>
      <table class="important">
        <tr class="contextImport">
          1.
          營期五天四夜中，學員不可擅自離開活動地點。若因個人因素必須離開營隊活動地點，必須簽下離營安全保證書並聯絡其家長。離開營隊之後，學員一切安全事項，本營隊恕不負責。
        </tr>
        <tr class="contextImport">
          2. 由於我們沒有提供火車站(或高鐵站)到營隊地點的交通方式，故報到前的交通與安全需自行負責。
        </tr>
        <tr class="contextImport">
          3. 其餘詳細注意事項請參閱報名簡章:{" "}
          <a target="_blank" href="https://reurl.cc/ZQdbj3" rel="noreferrer">
            https://reurl.cc/ZQdbj3
          </a>
        </tr>
      </table>
      <button class="register">
        <a href="#">立即報名</a>
      </button>
    </div>
  );
};

export default Info;
