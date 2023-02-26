import React from "react";
//import Button from "react-bootstrap/Button";
const About = () => {
  return (
    <div className="aboutFlex">
      <div className="infoBox">
        <h1>營隊介紹</h1>
        <div className="intro">
          <div className="secondTitle">
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
        <div className="intro">
          <div className="secondTitle">
            <h2>
              <img
                src={require("../image/iconForSecondTitle.png")}
                className="secondTitle"
                alt="Treasure!"
              ></img>{" "}
              課程介紹
            </h2>
          </div>
          <div className="courseList">
            <details>
              <summary>
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                <p> 來做自己專屬的 BLOG 吧!</p>
                <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
              </summary>
              <p></p>
            </details>
            <details>
              <summary>
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                <p> 創造屬於你的discord bot</p>
                <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
              </summary>
              <p></p>
            </details>
            <details>
              <summary>
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                <p> Web Design & Developement</p>
                <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
              </summary>
              <p></p>
            </details>
            <details>
              <summary>
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                <p> Cyber Security Stuff</p>
                <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
              </summary>
              <p></p>
            </details>
            <details>
              <summary>
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                <p> 基礎密碼學 - 從古典到現代</p>
                <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
              </summary>
              <p></p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
