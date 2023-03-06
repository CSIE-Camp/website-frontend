import React, { useEffect } from "react";
import ReviewScript from "./Review_script.js";
const review_up_image_totle = 10;
let actoncekey = 1;

//生成<img>的函式
const img_produce = (img_num) => {
  let img_output = [];
  let tempa;
  for (let i = 0; i < img_num; i++) {
    tempa = "review_up_imageNum_" + i; //建立除錯用的id
    img_output.push(
      <img
        src={require(`../image/photo_review/${i}.jpg`)}
        alt="review_up_image"
        id={tempa}
        className="review_up_image"
        key={tempa}
      ></img>,
    );
  }
  return img_output;
};

//生成點點的函式
const dot_produce = (img_num) => {
  let dot_output = [];
  let tempa;
  for (let i = 0; i < img_num; i++) {
    tempa = "review_up_dotNum_" + i; //建立編號、這次的功能不只為了除錯
    dot_output.push(<div id={tempa} className="review_up_dot" key={tempa}></div>);
  }
  return dot_output;
};

export const Review = () => {
  useEffect(() => {
    if (actoncekey !== 1) {
      ReviewScript();
    } else {
      actoncekey++;
    }
  }, []);
  return (
    <div id="page_review">
      <div id="page_review_down">
        <div id="rt_title">2022 CSI:Eden</div>
        <div id="rt_content">
          自Eden系統誕生以來，社會犯罪率曾經大幅降低，一切都歸功於Eden強大的犯罪現場重現功能。
          <br></br>
          <br></br>
          然而往日的榮光以被「蟒蛇」作為養分嚥下。
          <br></br>
          <br></br>
          不久前，Eden系統被自稱「蟒蛇」的組織攻擊，犯罪現場重現功能失去其意義，社會犯罪率扶搖直上，造就社會動盪、人心惶惶。
          <br></br>
          <br></br>
          上層立即下令調查局徹查此事件，隨著調查的逐漸深入，竟發現案情並沒有調查人員們所想像的那麼單純……
        </div>
      </div>
      <div id="page_review_up">
        <div id="ri_up_1">
          <div id="ri_arrow_l" className="ri_arrow_c">
            <div id="ri_arrow_m1" className="ri_arrow_m"></div>
            <div id="ri_arrow_m2" className="ri_arrow_m"></div>
            <div id="ri_arrow_m3" className="ri_arrow_m"></div>
          </div>
          <div id="ri_img_container">
            <div id="ri_img_touch_left"></div>
            <div id="ri_img_touch_right"></div>
            {img_produce(review_up_image_totle)}
          </div>
          <div id="ri_arrow_r" className="ri_arrow_c">
            <div id="ri_arrow_m1" className="ri_arrow_m"></div>
            <div id="ri_arrow_m2" className="ri_arrow_m"></div>
            <div id="ri_arrow_m3" className="ri_arrow_m"></div>
          </div>
        </div>
        <div id="ri_up_2">
          <div id="ri_img_dotbar" className="dot_bar">
            {dot_produce(review_up_image_totle)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
