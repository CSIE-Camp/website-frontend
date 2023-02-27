import React from "react";

export const Form = () => {
  return (
    <div class="registerContain">
      <h1>個人資料填寫</h1>
      <hr class="bar" size="0px" width="1336px"></hr>
      <h2>下方個人資料僅申請保險用 ex.身分證字號、出生年月日等</h2>
      <br></br>
      <form method="post" action="">
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
            pattern="https://.*"
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
          <label for="parentPhoneNumber">緊急行動人行動電話</label>
          <br></br>
          <input
            type="tel"
            name="parentPhoneNumber"
            id="phoneNumber"
            placeholder="行動電話"
            pattern="[0-9]{10}"
          ></input>
        </fieldset>
        <br></br>
        <br></br>
        <fieldset>
          <legend>防疫旅遊史調查</legend>
          <hr class="field" size="0px" width="1336px"></hr>
          <br></br>
          <label for="travelHistory">過去14天是否曾出國至其他境外地區？</label>
          <br></br>
          <input type="radio" name="travelHistory" id="travelHistory" value="1"></input> 是
          <input type="radio" name="travelHistory" id="travelHistory" value="2"></input> 否
        </fieldset>
        <br></br>
        <br></br>
        <fieldset>
          <legend>其他事項</legend>
          <hr class="field" size="0px" width="1336px"></hr>
          <br></br>
          <label for="foodType">飲食習慣</label>
          <br></br>
          <input type="radio" name="foodType" id="foodType" value="1"></input> 葷食
          <input type="radio" name="foodType" id="foodType" value="2"></input> 素食（全素）
          <br></br>
          <br></br>
          <label for="allergySource">過敏原(沒有食物過敏不用填)</label>
          <br></br>
          <input type="text" id="allergySource" name="allergySource" placeholder="ex: 花生"></input>
          <br></br>
          <br></br>
          <label for="disease">特殊疾病(沒有不用填)</label>
          <br></br>
          <input type="text" id="disease" name="disease" placeholder=""></input>
          <br></br>
          <br></br>
          <div>
            營服尺寸參考表<br></br>
            <img src="image/" alt="營服尺寸參考表"></img>
          </div>
          <br></br>
          <label for="clothesSize">您的營服尺寸</label>
          <br></br>
          <select name="clothesSize" id="clothesSize" placeholder="選擇營服尺寸">
            <option value="0">選擇營服尺寸</option>
            <option value="1">XS</option>
            <option value="2">S</option>
            <option value="3">M</option>
            <option value="4">L</option>
            <option value="5">XL</option>
          </select>
        </fieldset>
        <br></br>
        <br></br>
        <fieldset>
          <legend>審查資料填寫</legend>
          <hr class="field" size="0px" width="1336px"></hr>
          <br></br>
          <label for="selfIntro">自我介紹</label>
          <br></br>
          <textarea
            name="selfIntro"
            minLength={30}
            rows="5"
            cols="40"
            placeholder="自我介紹"
          ></textarea>
          <br></br>
          <br></br>
          <label for="motivation">報名動機與期待收穫</label>
          <br></br>
          <textarea
            name="motivation"
            minLength={50}
            rows="7"
            cols="40"
            placeholder="報名動機與期待收穫"
          ></textarea>
          <br></br>
          <br></br>
          <h4>上傳本人照片（正臉清晰可辨的單人生活照）</h4>
          <br></br>
          <div class="picture">
            <label for="selfPicture">
              <img src={require("../image/upload.png")} class="self" alt="upload"></img>
              <input
                type="file"
                id="selfPicture"
                name="selfPicture"
                accept="image/png, image/jpeg"
              ></input>
              選擇檔案
            </label>
          </div>
          <div id="presentFile"> 目前檔案:</div>
          {/* <script>
            const file = document.getElementById("selfPicture").value;
            document.getElementById("presentFile").value =`  目前檔案: ${file}` 
          </script> */}
          <div id="pictureLoad"></div>
        </fieldset>
        <br></br>
        <br></br>
        <fieldset>
          <legend>程式學習經驗調查</legend>
          <hr class="field" size="0px" width="1336px"></hr>
          <br></br>
          <div class="experience">請盡量據實回答，您的回答並不會影響錄取與否，請安心作答！</div>
          <br></br>
          <label for="lanlearned">接觸過哪些程式語言？</label>
          <br></br>
          <input type="text" name="lanlearned" id="lanlearned" placeholder="C++, Python"></input>
          <br></br>
          <br></br>
          <label for="lanMaster">論語法而言，「自認為」學過最「進階」的是？</label>
          <br></br>
          <input type="text" name="lanMaster" id="lanMaster" placeholder="JavaScript"></input>
        </fieldset>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <button class="register" type="submit">
            立即報名
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default Form;
