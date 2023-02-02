import React from "react";
import "./style/style.css";
import "./style/app.css";

const App = () => {
  return (
    <div>
      <div class="card">
        <section class="left">
          <img src={require("./image/Photos.png")} alt="" />
        </section>
        <section class="right">
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
          <button>立即報名</button>
          <br />
        </section>
      </div>
    </div>
  );
};

export default App;
