import React from "react";

export const Blank = () => {
  return (
    <div class="registerContain">
      <h1>個人資料填寫</h1>
      <hr class="bar" size="0px" width="1336px"></hr>
      <h2>下方個人資料僅申請保險用 ex.身分證字號、出生年月日等</h2>
      <br></br>
      <form>
        <fieldset>
          <legend>基本資料</legend>
          <hr class="field" size="0px" width="1336px"></hr>
          <br></br>
          <label for="name">姓名: 若非本國籍，請填寫「中文姓名」與「護照上的姓名」。</label>
          <br></br>
          <input type="text" id="name" name="name" placeholder="姓名"></input>
          <br></br>
          <br></br>
          <label for="gender">性別</label>
          <br></br>
          <input type="radio" id="gender" name="gender" value="1"></input> 男
          <input type="radio" id="gender" name="gender" value="2"></input> 女<br></br>
          <br></br>
          <label for="school">就讀學校</label>
          <br></br>
          <input type="text" id="school" name="school" placeholder="學校"></input>
          <br></br>
          <br></br>
          <label for="birthDate">生日</label>
          <br></br>
          <input type="date" placeholder="生日" name="birthDate" id="birthDate"></input>
          <br></br>
          <br></br>
          <label for="personalId">身分證字號</label>
          <br></br>
          <input type="text" id="personalId" name="personalId" placeholder="身分證字號"></input>
          <br></br>
          <br></br>
          <label for="phoneNumber">行動電話</label>
          <br></br>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="行動電話"
            pattern="[0-9]{10}"
          ></input>
          <br></br>
          <br></br>
          <label for="bloodType">血型</label>
          <br></br>
          <input type="radio" name="bloodType" id="bloodType" value="1"></input> O
          <input type="radio" name="bloodType" id="bloodType" value="2"></input> A
          <input type="radio" name="bloodType" id="bloodType" value="3"></input> B
          <input type="radio" name="bloodType" id="bloodType" value="4"></input> AB
          <input type="radio" name="bloodType" id="bloodType" value="5"></input> 未知
          <br></br>
          <br></br>
          <label for="fbLink">個人FaceBook網址</label>
          <br></br>
          <input
            type="url"
            name="fbLink"
            id="fbLink"
            placeholder="https://example.com"
            pattern="https://*"
          ></input>
        </fieldset>
        <br></br>
        <fieldset>
          <legend>緊急連絡人</legend>
          <hr class="field" size="0px" width="1336px"></hr>
          <br></br>
          <label for="parentName">緊急連絡人姓名</label>
          <br></br>
          <input type="text" id="parentName" name="parentName" placeholder="姓名"></input>
          <br></br>
          <br></br>
          <label for="relation">與緊急連絡人關係</label>
          <br></br>
          <input type="text" id="relation" name="relation" placeholder="母女、父子"></input>
          <br></br>
          <br></br>
          <label for="parentNumber">緊急行動人行動電話</label>
          <br></br>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="行動電話"
            pattern="[0-9]{10}"
          ></input>
        </fieldset>
        <fieldset>
          <legend>防疫旅遊史調查</legend>
          <hr class="field" size="0px" width="1336px"></hr>
          <br></br>
        </fieldset>
        <fieldset>
          <legend>其他事項</legend>
          <hr class="field" size="0px" width="1336px"></hr>
          <br></br>
        </fieldset>
        <fieldset>
          <legend>審查資料填寫</legend>
          <hr class="field" size="0px" width="1336px"></hr>
          <br></br>
        </fieldset>
        <fieldset>
          <legend>程式學習經驗調查</legend>
          <hr class="field" size="0px" width="1336px"></hr>
          <br></br>
        </fieldset>
      </form>
    </div>
  );
};

export default Blank;
