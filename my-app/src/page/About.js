import React, { useState } from "react";

const About = () => {
  const [summaryClick, setsummaryClick] = useState("click-false");

  const handleSummaryClick = () => {
    if (summaryClick === "click-true") {
      setsummaryClick("click-false");
    } else {
      setsummaryClick("click-true");
    }
    console.log("aaa:" + summaryClick);
  };

  return (
    <div className="aboutFlex">
      <div className="aboutBox">
        <h1>營隊介紹</h1>
        <div class="intro">
          <div class="secondTitle">
            <h2>
              <img
                src={require("../image/iconForSecondTitle.png")}
                class="secondTitle"
                alt="Zelda!"
              ></img>{" "}
              主題介紹
            </h2>
          </div>
          <br></br>
          <p>
            未來的工程師發明了一種新型穿越技術，玩家可以不需頭戴式裝置直接穿越到工程師開發出的世界，此世界為無數個獨特島嶼所建構出，每個島嶼上都有相對應的風格及此風格的遊戲區。以及在處處皆可能藏有彩蛋的驚喜。
          </p>
          <br></br>
        </div>
        <div class="intro">
          <div class="secondTitle">
            <h2>
              <img
                src={require("../image/iconForSecondTitle.png")}
                class="secondTitle"
                alt="Treasure!"
              ></img>{" "}
              課程介紹
            </h2>
          </div>
          <div class="courseList">
            <div class="detail">
              <div className={"summary " + summaryClick} onClick={handleSummaryClick}>
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  class="summaryHead"
                ></img>
                來做自己專屬的 BLOG 吧!
                <img src={require("../image/arrowDown.png")} className="summary " alt="down"></img>
              </div>
              <div class="hidden">
                <div class="hidden_text">
                  你站在色彩斑駁的防波堤之上望向海洋，你看到數以萬計的人們正在浪頭退去的海灘上輕吻陸地。
                  <br />
                  <br />
                  不對。仔細一看，他們沒有做出輕吻的動作，只是單單將臉部埋進濕漉的沙灘。你不清楚做出這樣的行為有何意義，但是他們一動也不動，而你也不知道為什麼。
                  <br />
                  <br />
                  等等。你趕緊跑下那抵禦浪潮浸蝕陸地的城牆，跑過乾燥的廣闊岩石岸、越過零散的高聳岩石群、跳過寂靜的深邃岩石溝、踏進海洋與陸地的交界處之時你也沒有停下，縱使隻身一人仍持續於泥濘的土地上奔馳。
                  <br />
                  <br />
                  到了。你抵達了你心中的目的地，不過方才的激烈運動讓你上氣接不過下氣，你將身體靠在你身旁夥伴身上，調整呼吸之時也能整理接下來的行動計劃。沒有溫度的海水淹過你的腳踝、沒有聲音的海風掠過你的臉頰、沒有意識的海洋已伸出清澈如水的雙手招呼著新朋友。你知道海洋的敵人即是陸地，海洋正在阻止你的不懷好意，你這麼告訴自己；而陸地的敵人也包含夢鄉，陸地現在希望你踏進海床，海洋這麼告訴你。你決定聽從海洋的建議，但是又不想背離陸地的包庇，於是你將自己的臉埋入海浪之下的沙地。當你意識到你逐漸失去氧氣，海洋不會救你，海洋僅會恭喜。
                  <br />
                  <br />
                  <br />
                  <br />
                  又一位來自陸地的旅客於海洋邊擱淺。
                </div>
              </div>
            </div>
            <div class="detail">
              <div class="summary">
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  class="summaryHead"
                ></img>
                創造屬於你的discord bot
                <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
              </div>
              <div class="hidden">
                Amet nisi do ex aute labore consectetur aute laboris amet cillum ut in commodo. Eu
                duis eu consectetur proident ipsum sint culpa amet officia. Aute eiusmod commodo
                dolor ad ex anim aliquip voluptate excepteur dolore magna id deserunt ea. Do non
                exercitation sint non dolore laboris mollit ut sunt velit commodo. Cillum veniam
                tempor enim esse aliquip est exercitation quis pariatur.
              </div>
            </div>
            <div class="detail">
              <div class="summary">
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  class="summaryHead"
                ></img>
                Web Design & Developement
                <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
              </div>
              <div class="hidden">
                Amet nisi do ex aute labore consectetur aute laboris amet cillum ut in commodo. Eu
                duis eu consectetur proident ipsum sint culpa amet officia. Aute eiusmod commodo
                dolor ad ex anim aliquip voluptate excepteur dolore magna id deserunt ea. Do non
                exercitation sint non dolore laboris mollit ut sunt velit commodo. Cillum veniam
                tempor enim esse aliquip est exercitation quis pariatur.
              </div>
            </div>
            <div class="detail">
              <div class="summary">
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  class="summaryHead"
                ></img>
                Cyber Security Stuff
                <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
              </div>
              <div class="hidden">
                Amet nisi do ex aute labore consectetur aute laboris amet cillum ut in commodo. Eu
                duis eu consectetur proident ipsum sint culpa amet officia. Aute eiusmod commodo
                dolor ad ex anim aliquip voluptate excepteur dolore magna id deserunt ea. Do non
                exercitation sint non dolore laboris mollit ut sunt velit commodo. Cillum veniam
                tempor enim esse aliquip est exercitation quis pariatur.
              </div>
            </div>
            <div class="detail">
              <div class="summary">
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  class="summaryHead"
                ></img>
                基礎密碼學 - 從古典到現代
                <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
              </div>
              <div class="hidden">
                Amet nisi do ex aute labore consectetur aute laboris amet cillum ut in commodo. Eu
                duis eu consectetur proident ipsum sint culpa amet officia. Aute eiusmod commodo
                dolor ad ex anim aliquip voluptate excepteur dolore magna id deserunt ea. Do non
                exercitation sint non dolore laboris mollit ut sunt velit commodo. Cillum veniam
                tempor enim esse aliquip est exercitation quis pariatur.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default About;
