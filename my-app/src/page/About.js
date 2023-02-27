import React from "react";
const About = () => {
  return (
    <div class="infoBox">
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
              Amet nisi do ex aute labore consectetur aute laboris amet cillum ut in commodo. Eu
              duis eu consectetur proident ipsum sint culpa amet officia. Aute eiusmod commodo dolor
              ad ex anim aliquip voluptate excepteur dolore magna id deserunt ea. Do non
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
              創造屬於你的discord bot
              <img src={require("../image/arrowDown.png")} class="summary" alt="down"></img>
            </div>
            <div class="hidden">
              Amet nisi do ex aute labore consectetur aute laboris amet cillum ut in commodo. Eu
              duis eu consectetur proident ipsum sint culpa amet officia. Aute eiusmod commodo dolor
              ad ex anim aliquip voluptate excepteur dolore magna id deserunt ea. Do non
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
              duis eu consectetur proident ipsum sint culpa amet officia. Aute eiusmod commodo dolor
              ad ex anim aliquip voluptate excepteur dolore magna id deserunt ea. Do non
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
              duis eu consectetur proident ipsum sint culpa amet officia. Aute eiusmod commodo dolor
              ad ex anim aliquip voluptate excepteur dolore magna id deserunt ea. Do non
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
              duis eu consectetur proident ipsum sint culpa amet officia. Aute eiusmod commodo dolor
              ad ex anim aliquip voluptate excepteur dolore magna id deserunt ea. Do non
              exercitation sint non dolore laboris mollit ut sunt velit commodo. Cillum veniam
              tempor enim esse aliquip est exercitation quis pariatur.
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
export default About;
