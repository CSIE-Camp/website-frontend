import React, { useEffect } from "react";
const review_up_image_totle = 7;

const img_produce = (img_num) => {
  //生成<img>的函式
  var img_output = [];
  var tempa;
  for (var i = 0; i < img_num; i++) {
    tempa = "review_up_imageNum_" + i; //建立除錯用的id
    img_output.push(
      <img
        src={require(`../image/photo_test/${i}.png`)}
        alt="review_up_image"
        id={tempa}
        className="review_up_image"
        key={tempa}
      ></img>,
    );
  }
  return img_output;
};

// const dot_produce = (img_num) =>{
//   var dot_output = [];
//   var tempa;
//   for(var i=0;i<img_num;i++){
//     tempa = "review_up_dotNum_"+i;
//     dot_output.push(<div id={tempa} className="review_up_dot"></div>);
//   }
//   return dot_output;
// }

export const Review = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = require("./stest.js");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div id="page_review">
      <div id="ri_up_1">
        <div id="ri_arrow_l"></div>
        <div class="ri_img_container">{img_produce(review_up_image_totle)}</div>
        <div id="ri_arrow_r"></div>
      </div>
      <div id="ri_up_2">
        <div id="ri_img_dotbar" className="dot_bar"></div>
      </div>
    </div>
  );
};
export default Review;
