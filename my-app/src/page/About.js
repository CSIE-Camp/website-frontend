import React, { useState } from "react";

const About = () => {
  const [summaryClick, setsummaryClick] = useState("");
  let Summary_ctrl = true;

  return (
    <div
      className="aboutFlex"
      onClick={() => {
        if (summaryClick !== "" && Summary_ctrl) setsummaryClick("");
        Summary_ctrl = true;
      }}
    >
      <div className="aboutBox">
        <h1>營隊介紹</h1>
        <div className="intro">
          <div className="secondTitle">
            <h2>
              <img
                src={require("../image/iconForSecondTitle.png")}
                className="secondTitle"
                alt="Zelda!"
              ></img>{" "}
              主題介紹
            </h2>
          </div>

          <p>
            精心開發的 MMORPG 虛擬實境遊戲，綠樹公司所舉辦的 Challenger
            大賽即將震撼開幕！每五年一次的盛事，讓您體驗生存挑戰競賽，今年更在空島上舉行，絕對是您不容錯過的難得機會！更讓人振奮的是，五年前的冠亞軍，史考特和利奧拉，也將再次出現在競技場上，為爭奪冠軍而戰！趕快加入我們的行列，挑戰冠軍的頭銜，一同在遊戲中創造不朽的傳說！
          </p>
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
            <div className="detail">
              <div
                className={`summary ${summaryClick === "1_active" ? "click-true" : "click-false"}`}
                onClick={(e) => {
                  !e.currentTarget.classList.contains("click-true")
                    ? setsummaryClick("1_active")
                    : setsummaryClick("");
                  Summary_ctrl = false;
                }}
              >
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                來做自己專屬的 BLOG 吧!
                <img src={require("../image/arrowDown.png")} className="summary " alt="down"></img>
              </div>
              <div
                className="hidden"
                onClick={() => {
                  Summary_ctrl = false;
                }}
              >
                <div className="hidden_text">
                  課程介紹:
                  <br />
                  網路上充滿許多的部落格，美食、科技等甚麼都有，甚麼都不奇怪。你有想過嗎，要是能夠從零打造展現自己獨特性的部落格，會是多麼棒的事情呢？透過這門課，我們會手把手地教你如何製作一個精美的部落格網站。從創建MarkDown開始，一步步使用Hugo與GitHub完成部落格網站的搭建。這門課程涵蓋從頭到尾的所有步驟，讓你能夠掌握建立部落格的技巧。無論你對網站開發毫無經驗，還是已經有基本技能，這門課都會讓你獲益匪淺。
                  <br />
                  課程內容:
                  <br />
                  這門課的主要涵蓋知識有 Markdown、git & GitHub、Hugo三大面向
                  學會Markdown，能使你具有基本的網頁文件撰寫能力。
                  在了解git與GitHub之後，不管何時何地都可以程式編輯。
                  用慣了Hugo，想要創造多少網站都沒問題。
                  <br />
                  課程目標:
                  <br />
                  每個人都有專屬於自己的網站，並能持續的編輯，打造具有個人魅力的知識空間。
                </div>
              </div>
            </div>
            <div className="detail">
              <div
                className={`summary ${summaryClick === "2_active" ? "click-true" : "click-false"}`}
                onClick={(e) => {
                  !e.currentTarget.classList.contains("click-true")
                    ? setsummaryClick("2_active")
                    : setsummaryClick("");
                  Summary_ctrl = false;
                }}
              >
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                創造屬於你的discord bot
                <img src={require("../image/arrowDown.png")} className="summary" alt="down"></img>
              </div>
              <div
                className="hidden"
                onClick={() => {
                  Summary_ctrl = false;
                }}
              >
                <div className="hidden_text">
                  想為你的 Discord
                  伺服器打造一個獨一無二的體驗，讓大家都能玩得更開心嗎？現在就來參加我們為高中生量身打造的
                  Discord Bot 課程吧！
                  <br />
                  在這個課程中，你將學到如何使用 Discord Bot
                  的開發框架，創建出能夠回答問題、編排遊戲等多種有趣功能的機器人。
                  <br />
                  你可能覺得這堂課聽起來很難，不過即使沒有程式設計經驗，也可以在我們的課程前段學習到一些寫程式的技巧，只要有對技術的熱情和學習的決心，你也可以輕鬆入門。
                  <br />
                  透過這個課程，你將掌握以下技能：
                  <br />
                  Discord Bot 開發框架的基礎知識 創建指令和回應的方法 製作聊機器人天和遊戲功能
                  自訂機器人的外觀和行為 我們會以實作為主的方式，引導你進入 Discord Bot
                  開發的世界。此外，我們也提供豐富的學習資源和支援，確保你能夠順利完成課程，並開發出屬於自己的機器人。
                  <br />
                  現在就加入我們的 Discord Bot 課程，讓你的 Discord 伺服器更加有趣、便利！
                </div>
              </div>
            </div>
            <div className="detail">
              <div
                className={`summary ${summaryClick === "3_active" ? "click-true" : "click-false"}`}
                onClick={(e) => {
                  !e.currentTarget.classList.contains("click-true")
                    ? setsummaryClick("3_active")
                    : setsummaryClick("");
                  Summary_ctrl = false;
                }}
              >
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                Web Design & Developement
                <img src={require("../image/arrowDown.png")} className="summary" alt="down"></img>
              </div>
              <div
                className="hidden"
                onClick={() => {
                  Summary_ctrl = false;
                }}
              >
                <div className="hidden_text">
                  <ul>
                    <li>你常在網購平台買東西嗎？ </li>
                    <li>還是經常在 ig 上滑限動？ </li>
                    <li>甚至使用 Chatgpt 交作業?</li>{" "}
                  </ul>
                  <br />
                  如果以上都有的話，那你應該對網路或網頁不陌生吧！
                  <br />
                  在這堂課「網頁設計與開發」的課程，我們會教你們以上的精製的網站是如何生成的，從最基礎易懂的部分開始！
                  <br />
                  課程包含了： 網路原理、網頁的基本概念、網頁骨架(HTML 語法)、網頁美觀及創作(CSS &
                  SCSS 語法)、排版神器(Flexbox)
                  <br />
                  介紹完那麼多，學會網頁製作，可以幹嘛？
                  <br />
                  讓你的學習歷程更豐富嗎?
                  <br />
                  學習網頁的優勢可多了...
                  <br />
                  <br />
                  <ul>
                    <li>
                      現今網路發達的時代，網頁開發成為各種企業與產業的重要需求，因此具備相關技能的學生在就業市場具有極大優勢
                    </li>
                    <li>可以將學習過程放入你的「學習歷程」，讓網頁製作成為你給教授的亮點</li>
                    <li>在AI時代中，展現你追尋創新的設計，不怕被機器人取代</li>
                  </ul>
                  <br />
                  —《你不需要很厲害才開始學網頁，但你要開始才能變得更厲害。》
                  <br />
                  <br />
                  最後偷偷告訴你們，學完HTML，CSS及flexbox的概念，我們會與Discord
                  Bot課程連結，做出屬於自己的網站儀表板，敬請期待吧！
                </div>
              </div>
            </div>
            <div className="detail">
              <div
                className={`summary ${summaryClick === "4_active" ? "click-true" : "click-false"}`}
                onClick={(e) => {
                  !e.currentTarget.classList.contains("click-true")
                    ? setsummaryClick("4_active")
                    : setsummaryClick("");
                  Summary_ctrl = false;
                }}
              >
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                Cyber Security Stuff
                <img src={require("../image/arrowDown.png")} className="summary" alt="down"></img>
              </div>
              <div
                className="hidden"
                onClick={() => {
                  Summary_ctrl = false;
                }}
              >
                <div className="hidden_text">
                  <ul>
                    <li>你平時有用dcard嗎？</li>
                    <li>或者是網路購物？</li>
                    <li>有沒有想過他們是怎樣儲存你的資料的嗎？</li>
                  </ul>
                  <br />
                  來上這一堂課吧！
                  <br />
                  我們將會教你怎樣建立和使用一個屬於自己的，與業界等級一樣的資料庫，從此讓你的專案也可以更安全的儲存資料。
                  <br />
                  從零開始，我們將會一起做出一個資料庫，讓大家都能夠有建立和使用資料庫的經驗！
                  <br />
                  攻擊！防禦！來打一場資料攻防戰吧！
                  <br />
                  欸等等，在這個數位化的時代，我們一定不可以忽略資訊安全！
                  <br />
                  正所謂「最好的防禦即是攻擊」，我們也將會讓大家嘗試攻擊其他小隊做出的資料庫，從實驗和漏洞中學習攻擊與防禦的方法！
                </div>
              </div>
            </div>
            <div className="detail">
              <div
                className={`summary ${summaryClick === "5_active" ? "click-true" : "click-false"}`}
                onClick={(e) => {
                  !e.currentTarget.classList.contains("click-true")
                    ? setsummaryClick("5_active")
                    : setsummaryClick("");
                  Summary_ctrl = false;
                }}
              >
                <img
                  src={require("../image/iconForThirdTitle.png")}
                  alt="Secret!"
                  className="summaryHead"
                ></img>
                基礎密碼學 - 從古典到現代
                <img src={require("../image/arrowDown.png")} className="summary" alt="down"></img>
              </div>
              <div
                className="hidden"
                onClick={() => {
                  Summary_ctrl = false;
                }}
              >
                <div className="hidden_text">
                  想知道如何 🔐加密 一則讓別人看不懂的訊息嗎？
                  <br />
                  想知道怎麼在沒有密鑰的情況下 🕵️破密
                  <br />
                  一則像 59,58,55,30,59,54,67,7a 這樣的訊息嗎？
                  <br />
                  這門基礎密碼學的課程，將會沿著密碼史的發展～
                  <br />
                  <br />
                  介紹：
                  <br />
                  <ul>
                    <li>公元前的古希臘/羅馬時期，就存在的移項式密碼、單表替換式密碼</li>
                    <br />
                    <li>有著幾百年歷史的多表替換式密碼，如 Vigenère 密碼</li> <br />
                    <li>二戰時曾被德軍大量採用的 Enigma 轉盤機</li>
                    <br />
                    <li>現代密碼學，其中包括 DES 區塊加密、RSA 非對稱式加密演算法…</li>
                    <br />
                  </ul>
                  此外，除了上述的知識講解外，
                  <br />
                  本次課程當中也會藉由分組，進行密碼學解題競賽！透過大量實作解題的環節，讓學員更能有效的吸收並及時演練上課所學，(並將依分數排行頒發獎狀)～
                  <br />
                  課程最後還會有一個神秘的手作作品能帶回家做紀念🥳！
                  對密碼學產生好奇？或是想知道一開始的神秘字串要如何解開？那就趕快前往
                  <br />
                  <br />
                  <a href="https://camp.csie.cool/">資工營報名網頁</a>
                  <br />
                  <br />
                  報名參加師大資工營，讓我們來一同揭開密碼學的神秘面紗吧！
                  <br />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default About;
