import React from "react";

const About = () => {
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
              <div class="summary">
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  class="summaryHead"
                ></img>
                來做自己專屬的 BLOG 吧!
                <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
              </div>
              <div class="hidden">
                <div class="hidden_text">
                  最初是幾個模糊人影，隨後是耀眼的光，光漸漸遠離，升到天上，留下一片斑駁。不多久這些光點同樣迅速遠去，就只剩一片無意義的漆黑。
                  你想起那些斑駁皆是天體，你想起星星們的家園名為宇宙。
                  緊接著，你的視野忽然清晰起來，光滑的金屬、密閉的空間、透明的窗口成了你的第三隻眼——你透過它，看著窗外巨大的灰色球體，在那些常人無法理解的巨構之中，它安靜地等待著自己的生父......
                  你突然有些感動，某些體液打濕了視野。你開始尋找這份情緒的根源，你看到了一個孩子的誕生，那是你的孩子。全新的命運，靈魂的寄託......可這樣一個小小的生命與那個虛空的巨構相比，是多麼微不足道。
                  你回到眼下，看著那些大大小小的工程艦船，作為數學家的你迅速進行了一個可笑的對比——其中最小的艦船，都數千萬倍於一個人類嬰兒的大小。
                  但你們做到了。從遠古的遠古開始，從火或者一次狩獵開始，你們走到了今天。
                  你很自豪。不知怎地，你對這份自豪感同身受，於是更多的信息湧入了你的腦海。你想起了自己的身份，你明白了自己就是那顆人造衛星的設計者。而在漫長的亞空間旅行之後，你終於迎來了親眼目睹它竣工的那一刻。
                  榮譽，財富，家人，理想.....這些詞彙閃爍、盤旋、消散，最終只剩下一個，且僅有一個......
                  ......
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
