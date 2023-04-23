import React from "react";
import video from "../video/3Disland.mp4";
const Home = () => {
  return (
    <div>
      <main>
        <div class="card">
          <section class="left">
            <div className="imgFlex">
              {/* <img src={require("../image/3DIsland.png")} title="Island" alt="Island" /> */}
              <video src={video} controls autoPlay loop muted></video>
            </div>
          </section>
          <section class="right">
            <div class="words">
              <div className="h1">
                <span class="C">C</span>hallenger
              </div>
              <div className="h1">
                <span class="S">S</span>urviving
              </div>
              <div className="h1">
                <span class="I">I</span>slands:
              </div>
              <div className="h1">
                <span class="E">E</span>級玩家
              </div>

              <div id="subtitle">
                2023 師大資工營 <br />
                NTNU CSIE CAMP
              </div>
            </div>
            <div className="registerButton">
              <a href="/login">
                <button className="register">立即報名</button>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
