import React from "react";

export const Blank = () => {
  return (
    <div class="registerContain">
      <h1>個人資料填寫</h1>
      <hr class="bar" size="0px" width="1336px"></hr>
      <h2>下方個人資料僅申請保險用 ex.身分證字號、出生年月日等</h2>
      <br></br>
      <form>
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
      </form>
    </div>
  );
};

export default Blank;
