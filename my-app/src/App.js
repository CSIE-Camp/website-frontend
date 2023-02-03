import React from "react";
import "./style/style.css";
import "./style/app.css";
const App = () => {
  return (
    <div>
      <main>
        <div class="card">
          <section class="left">
            <img
              src={require("./image/Photos.png")}
              title="歷屆資工營照片"
              alt="Photo Wall"
            />
          </section>
          <section class="right">
            <div class="words">
              <h1>
                <span class="C">C</span>hallenger
              </h1>
              <h1>
                <span class="S">S</span>urviving
              </h1>
              <h1>
                <span class="I">I</span>slands:
              </h1>
              <h1>
                <span class="E">E</span>級玩家
              </h1>

              <p>2023 師大資工營 NTNU CSIE CAMP</p>
            </div>
            <button class="register">立即報名</button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
