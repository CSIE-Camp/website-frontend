import React from "react";

const Home = () => {
  return (
    <div>
      <main>
        <div class="card">
          <section class="left"></section>
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
