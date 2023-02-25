import React, { useEffect } from "react";
const review_up_image_totle = 10;

//生成<img>的函式
const img_produce = (img_num) => {
  var img_output = [];
  var tempa;
  for (var i = 0; i < img_num; i++) {
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
  var dot_output = [];
  var tempa;
  for (var i = 0; i < img_num; i++) {
    tempa = "review_up_dotNum_" + i; //建立編號、這次的功能不只為了除錯
    dot_output.push(<div id={tempa} className="review_up_dot" key={tempa}></div>);
  }
  return dot_output;
};

export const Review = () => {
  useEffect(() => {
    const script = document.createElement("script"); //建立<script>元件
    script.src = require("./Review_script.js"); //script來源、必須用require包起來
    script.async = true;
    script.id = "Review_script"; //除錯用id
    document.body.appendChild(script); //將<script>加到<body>的最底部

    return () => {
      document.body.removeChild(script); //離開此routes時移除此<script>元件
    };
  }, []);
  return (
    <div id="page_review">
      <div id="ri_up_1">
        <div id="ri_arrow_l" className="ri_arrow_c">
          <div id="ri_arrow_m1" className="ri_arrow_m"></div>
          <div id="ri_arrow_m2" className="ri_arrow_m"></div>
          <div id="ri_arrow_m3" className="ri_arrow_m"></div>
        </div>
        <div class="ri_img_container">{img_produce(review_up_image_totle)}</div>
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
  );
};
export default Review;
