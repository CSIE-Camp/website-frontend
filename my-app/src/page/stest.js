const review_up_image_totle = 7;
//圖片名稱記得先改成{0,1,2,3,4......}.png

// document.addEventListener('DOMContentLoaded',function() {//網頁載入完成後才能引入圖片控制
//   console.log("aaaa");
//   //window.onload = () =>{//網頁載入完成後立即先啟動一次，為了先讓圖片定位排版
//     console.log("bbbb");
//     img_controler();
//   //}
// }, false);

//const img_controler = () =>{//圖片控制

const ri_arrow_l = document.getElementById("ri_arrow_l"); //抓左邊箭頭
const ri_arrow_r = document.getElementById("ri_arrow_r"); //抓右邊箭頭
const img_array = document.querySelectorAll(".review_up_image"); //將圖片設成array
var now_show_img = 0; //最前面是第幾張
var nsi_temp, img_style;

//window.onload = () =>{//網頁載入完成後立即先啟動一次，為了先讓圖片定位排版

//}

ri_arrow_l.addEventListener("click", () => {
  //聽左邊的箭頭
  if (now_show_img <= 0) {
    now_show_img = review_up_image_totle - 1;
  } //超過圖片總數要回到起點
  else {
    now_show_img--;
  }
  img_show_func(now_show_img);
  console.log("left" + now_show_img);
});

ri_arrow_r.addEventListener("click", () => {
  //聽右邊的箭頭
  if (now_show_img >= review_up_image_totle - 1) {
    now_show_img = 0;
  } //低於0要先到終點
  else {
    now_show_img++;
  }
  img_show_func(now_show_img);
  console.log("right" + now_show_img);
});

const img_show_func = (e) => {
  for (var i = 0; i < review_up_image_totle; i++) {
    nsi_temp = e + i; //第i次迴圈要控制的圖片編號
    //console.log("aaa"+nsi_temp);
    if (nsi_temp >= review_up_image_totle) {
      nsi_temp = nsi_temp - review_up_image_totle;
    } //超過圖片總數要減掉圖片總數，圖片array是一個圓
    img_style = img_array[nsi_temp].style; //變數好看一點
    img_style.zIndex = ""; //z-index要先歸零，不然會擋到箭頭，還有可能出bug
    if (i <= 2) {
      //要顯示的三張，設transition是為了動起來
      img_style.top = (2 - i) * 3 + "vw";
      img_style.right = (2 - i) * 3 + "vw";
      img_style.opacity = 1;
      img_style.zIndex = 2 - i;
      img_style.transform = `scale(1)`;
      img_style.transition = "all 0.3s ease";
    } else if (i === 3) {
      //即將顯示的後一張
      img_style.top = -3 + "vw";
      img_style.right = -3 + "vw";
      img_style.opacity = 0;
      img_style.zIndex = -1;
      img_style.transform = `scale(0)`;
    } else if (i === review_up_image_totle - 1) {
      //即將顯示的前一張
      img_style.top = 9 + "vw";
      img_style.right = 9 + "vw";
      img_style.opacity = 0;
      img_style.zIndex = 3;
      img_style.transform = `scale(0)`;
    } else {
      //其他不重要
      img_style.top = 0 + "vw";
      img_style.right = 0 + "vw";
      img_style.opacity = 0;
      img_style.zIndex = 0;
      img_style.transform = `scale(0)`;
      img_style.transition = "";
    }
  }
};
img_show_func(now_show_img);
//}
